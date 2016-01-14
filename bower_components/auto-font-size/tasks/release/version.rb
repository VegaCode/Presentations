#!/usr/bin/ruby

# usage:
# from package root, do:
#   tasks/release/docs.rb  x.x.x
# where "x.x.x" is the version number

require 'rubygems'
require 'tmpdir'
require 'fileutils'
require 'open3'

unless File.exists?('bower.json') && File.exists?('Gruntfile.js')
  raise "release/docs must be run from package root"
end

def run(cmd, raise_on_error = true)
  puts cmd
  stdin, stdout, stderr = Open3.popen3(cmd)
  out, err = stdout.read, stderr.read
  if err != "" && raise_on_error
    raise RuntimeError.new(err)
  end
  [out, err]
end

def commit_and_push(branch, message)
  run("git add .")
  run("git commit -m\"#{message}\"")
  run("git push origin #{branch}", false)
end

version = ENV['version'] || ARGV[0]
raise("No version provided") unless version

orig_branch = run("git rev-parse --abbrev-ref HEAD")[0].strip
out, err = run("grunt groc")

if out.match(/Fatal error/)
  puts out
  exit
end

commit_and_push(orig_branch, "Updating docs")

Dir.mktmpdir do |tmpdir| 
  
  # copy the docs to a temporary location
  tmp_doc_dir = "#{tmpdir}/doc"
  FileUtils.cp_r('doc', tmp_doc_dir)
  
  # fetch all branches
  run("git fetch origin")
  
  # switch to gh-pages branch
  out, err = run("git checkout -b gh-pages origin/gh-pages", false)
  if err.match(/A branch named 'gh-pages' already exists/)
    out, err =  run("git checkout gh-pages", false)
  end
  
  if err != "" && !err.match(/Switched to branch/)
    raise RuntimeError.new(err)
  end
  
  
  # copy the docs to the right place
  begin
    FileUtils.mkdir_p('docs')
    FileUtils.rm_r("docs/#{version}")
  rescue; end
  FileUtils.mv(tmp_doc_dir, "docs/#{version}")
      
  versions = Dir.glob("docs/*").map do |dir| 
    dir.match(/\/([\d\.]+)$/)[1] 
  end.compact.sort.reverse    
        
  # add links to index file
  File.open("index.html", "w+") do |f|
    f.write("<h1>Auto-Font-Size Docs</h1>\n\n")
    versions.each do |_version|
      f.write("<a href=\"docs/#{_version}\">Version #{_version}</a><br/>\n")
    end
  end
  
  # commit gh-pages branch and switch back to master
  commit_and_push("gh-pages", "Adding version #{version} docs")
  run("git checkout #{orig_branch}", false)
  
  # add links to the readme
  # add links to readme file
  readme = File.read("README.md")
  header = "### Documentation"
  head, tail = readme.split(header)
  File.open("README.md", "w+") do |f|
    f.write(head)
    f.write("#{header}\n\n")
    versions.each do |_version|
      f.write("[#{_version}](http://pedago.github.io/auto-font-size/docs/#{_version})  \n")
    end
  end
  
  puts "docs have been taken care of, but you still need to:"
  puts "* update the version in package.json"
  puts "* update the version in bower.json"
  puts "* update the version in the Installation section of README.md"
  puts "* build it: `grunt build`"
  puts "* commit it: `git add .`; `git commit -m'version #{version}'`; `git push origin #{orig_branch}`"
  puts "* tag it: `git tag -a v#{version} -m 'version #{version}'`; `git push origin --tags`"
  
  # run("git add .")
  # run("git commit -m\"Updating README for #{version}\"")
  # run("git push origin #{orig_branch}")
  
end
