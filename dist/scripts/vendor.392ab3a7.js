if (function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
      if (!a.document) throw new Error("jQuery requires a window with a document");
      return b(a)
    } : b(a)
  }("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
      var b = "length" in a && a.length,
        c = _.type(a);
      return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
      if (_.isFunction(b)) return _.grep(a, function(a, d) {
        return !!b.call(a, d, a) !== c
      });
      if (b.nodeType) return _.grep(a, function(a) {
        return a === b !== c
      });
      if ("string" == typeof b) {
        if (ha.test(b)) return _.filter(b, a, c);
        b = _.filter(b, a)
      }
      return _.grep(a, function(a) {
        return U.call(b, a) >= 0 !== c
      })
    }

    function e(a, b) {
      for (;
        (a = a[b]) && 1 !== a.nodeType;);
      return a
    }

    function f(a) {
      var b = oa[a] = {};
      return _.each(a.match(na) || [], function(a, c) {
        b[c] = !0
      }), b
    }

    function g() {
      Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }

    function h() {
      Object.defineProperty(this.cache = {}, 0, {
        get: function() {
          return {}
        }
      }), this.expando = _.expando + h.uid++
    }

    function i(a, b, c) {
      var d;
      if (void 0 === c && 1 === a.nodeType)
        if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
          try {
            c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
          } catch (e) {}
          sa.set(a, b, c)
        } else c = void 0;
      return c
    }

    function j() {
      return !0
    }

    function k() {
      return !1
    }

    function l() {
      try {
        return Z.activeElement
      } catch (a) {}
    }

    function m(a, b) {
      return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function n(a) {
      return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function o(a) {
      var b = Ka.exec(a.type);
      return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function p(a, b) {
      for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
    }

    function q(a, b) {
      var c, d, e, f, g, h, i, j;
      if (1 === b.nodeType) {
        if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
          delete g.handle, g.events = {};
          for (e in j)
            for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
        }
        sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
      }
    }

    function r(a, b) {
      var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
      return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }

    function s(a, b) {
      var c = b.nodeName.toLowerCase();
      "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function t(b, c) {
      var d, e = _(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
      return e.detach(), f
    }

    function u(a) {
      var b = Z,
        c = Oa[a];
      return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
    }

    function v(a, b, c) {
      var d, e, f, g, h = a.style;
      return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function w(a, b) {
      return {
        get: function() {
          return a() ? void delete this.get : (this.get = b).apply(this, arguments)
        }
      }
    }

    function x(a, b) {
      if (b in a) return b;
      for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
        if (b = Xa[e] + c, b in a) return b;
      return d
    }

    function y(a, b, c) {
      var d = Ta.exec(b);
      return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
      for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
      return g
    }

    function A(a, b, c) {
      var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ra(a),
        g = "border-box" === _.css(a, "boxSizing", !1, f);
      if (0 >= e || null == e) {
        if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
        d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
      }
      return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) {
      for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
      for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
      return a
    }

    function C(a, b, c, d, e) {
      return new C.prototype.init(a, b, c, d, e)
    }

    function D() {
      return setTimeout(function() {
        Ya = void 0
      }), Ya = _.now()
    }

    function E(a, b) {
      var c, d = 0,
        e = {
          height: a
        };
      for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
      return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
      for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
        if (d = e[f].call(c, b, a)) return d
    }

    function G(a, b, c) {
      var d, e, f, g, h, i, j, k, l = this,
        m = {},
        n = a.style,
        o = a.nodeType && xa(a),
        p = ra.get(a, "fxshow");
      c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
        h.unqueued || i()
      }), h.unqueued++, l.always(function() {
        l.always(function() {
          h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
        })
      })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
        n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
      }));
      for (d in b)
        if (e = b[d], $a.exec(e)) {
          if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
            if ("show" !== e || !p || void 0 === p[d]) continue;
            o = !0
          }
          m[d] = p && p[d] || _.style(a, d)
        } else j = void 0;
      if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
      else {
        p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
          _(a).hide()
        }), l.done(function() {
          var b;
          ra.remove(a, "fxshow");
          for (b in m) _.style(a, b, m[b])
        });
        for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
      }
    }

    function H(a, b) {
      var c, d, e, f, g;
      for (c in a)
        if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
          f = g.expand(f), delete a[d];
          for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function I(a, b, c) {
      var d, e, f = 0,
        g = bb.length,
        h = _.Deferred().always(function() {
          delete i.elem
        }),
        i = function() {
          if (e) return !1;
          for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
          return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        },
        j = h.promise({
          elem: a,
          props: _.extend({}, b),
          opts: _.extend(!0, {
            specialEasing: {}
          }, c),
          originalProperties: b,
          originalOptions: c,
          startTime: Ya || D(),
          duration: c.duration,
          tweens: [],
          createTween: function(b, c) {
            var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
            return j.tweens.push(d), d
          },
          stop: function(b) {
            var c = 0,
              d = b ? j.tweens.length : 0;
            if (e) return this;
            for (e = !0; d > c; c++) j.tweens[c].run(1);
            return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
          }
        }),
        k = j.props;
      for (H(k, j.opts.specialEasing); g > f; f++)
        if (d = bb[f].call(j, a, k, j.opts)) return d;
      return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
        elem: a,
        anim: j,
        queue: j.opts.queue
      })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
      return function(b, c) {
        "string" != typeof b && (c = b, b = "*");
        var d, e = 0,
          f = b.toLowerCase().match(na) || [];
        if (_.isFunction(c))
          for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
      }
    }

    function K(a, b, c, d) {
      function e(h) {
        var i;
        return f[h] = !0, _.each(a[h] || [], function(a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
        }), i
      }
      var f = {},
        g = a === tb;
      return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) {
      var c, d, e = _.ajaxSettings.flatOptions || {};
      for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
      return d && _.extend(!0, a, d), a
    }

    function M(a, b, c) {
      for (var d, e, f, g, h = a.contents, i = a.dataTypes;
        "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
      if (d)
        for (e in h)
          if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
          }
      if (i[0] in c) f = i[0];
      else {
        for (e in c) {
          if (!i[0] || a.converters[e + " " + i[0]]) {
            f = e;
            break
          }
          g || (g = e)
        }
        f = f || g
      }
      return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function N(a, b, c, d) {
      var e, f, g, h, i, j = {},
        k = a.dataTypes.slice();
      if (k[1])
        for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
      for (f = k.shift(); f;)
        if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
          if ("*" === f) f = i;
          else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g)
          for (e in j)
            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
              g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
              break
            }
        if (g !== !0)
          if (g && a["throws"]) b = g(b);
          else try {
            b = g(b)
          } catch (l) {
            return {
              state: "parsererror",
              error: g ? l : "No conversion from " + i + " to " + f
            }
          }
      }
      return {
        state: "success",
        data: b
      }
    }

    function O(a, b, c, d) {
      var e;
      if (_.isArray(b)) _.each(b, function(b, e) {
        c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
      });
      else if (c || "object" !== _.type(b)) d(a, b);
      else
        for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) {
      return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [],
      R = Q.slice,
      S = Q.concat,
      T = Q.push,
      U = Q.indexOf,
      V = {},
      W = V.toString,
      X = V.hasOwnProperty,
      Y = {},
      Z = a.document,
      $ = "2.1.4",
      _ = function(a, b) {
        return new _.fn.init(a, b)
      },
      aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ba = /^-ms-/,
      ca = /-([\da-z])/gi,
      da = function(a, b) {
        return b.toUpperCase()
      };
    _.fn = _.prototype = {
      jquery: $,
      constructor: _,
      selector: "",
      length: 0,
      toArray: function() {
        return R.call(this)
      },
      get: function(a) {
        return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
      },
      pushStack: function(a) {
        var b = _.merge(this.constructor(), a);
        return b.prevObject = this, b.context = this.context, b
      },
      each: function(a, b) {
        return _.each(this, a, b)
      },
      map: function(a) {
        return this.pushStack(_.map(this, function(b, c) {
          return a.call(b, c, b)
        }))
      },
      slice: function() {
        return this.pushStack(R.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor(null)
      },
      push: T,
      sort: Q.sort,
      splice: Q.splice
    }, _.extend = _.fn.extend = function() {
      var a, b, c, d, e, f, g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
      for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
        if (null != (a = arguments[h]))
          for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      return g
    }, _.extend({
      expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(a) {
        throw new Error(a)
      },
      noop: function() {},
      isFunction: function(a) {
        return "function" === _.type(a)
      },
      isArray: Array.isArray,
      isWindow: function(a) {
        return null != a && a === a.window
      },
      isNumeric: function(a) {
        return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
      },
      isPlainObject: function(a) {
        return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
      },
      isEmptyObject: function(a) {
        var b;
        for (b in a) return !1;
        return !0
      },
      type: function(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
      },
      globalEval: function(a) {
        var b, c = eval;
        a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
      },
      camelCase: function(a) {
        return a.replace(ba, "ms-").replace(ca, da)
      },
      nodeName: function(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
      },
      each: function(a, b, d) {
        var e, f = 0,
          g = a.length,
          h = c(a);
        if (d) {
          if (h)
            for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
          else
            for (f in a)
              if (e = b.apply(a[f], d), e === !1) break
        } else if (h)
          for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
        else
          for (f in a)
            if (e = b.call(a[f], f, a[f]), e === !1) break; return a
      },
      trim: function(a) {
        return null == a ? "" : (a + "").replace(aa, "")
      },
      makeArray: function(a, b) {
        var d = b || [];
        return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
      },
      inArray: function(a, b, c) {
        return null == b ? -1 : U.call(b, a, c)
      },
      merge: function(a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return a.length = e, a
      },
      grep: function(a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
        return e
      },
      map: function(a, b, d) {
        var e, f = 0,
          g = a.length,
          h = c(a),
          i = [];
        if (h)
          for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
        else
          for (f in a) e = b(a[f], f, d), null != e && i.push(e);
        return S.apply([], i)
      },
      guid: 1,
      proxy: function(a, b) {
        var c, d, e;
        return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
          return a.apply(b || this, d.concat(R.call(arguments)))
        }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
      },
      now: Date.now,
      support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
      V["[object " + b + "]"] = b.toLowerCase()
    });
    var ea = function(a) {
      function b(a, b, c, d) {
        var e, f, g, h, i, j, l, n, o, p;
        if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
        if (!d && I) {
          if (11 !== h && (e = sa.exec(a)))
            if (g = e[1]) {
              if (9 === h) {
                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                if (f.id === g) return c.push(f), c
              } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
            } else {
              if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
              if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
            }
          if (v.qsa && (!J || !J.test(a))) {
            if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
              for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
              o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
            }
            if (p) try {
              return $.apply(c, o.querySelectorAll(p)), c
            } catch (q) {} finally {
              l || b.removeAttribute("id")
            }
          }
        }
        return B(a.replace(ia, "$1"), b, c, d)
      }

      function c() {
        function a(c, d) {
          return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
        }
        var b = [];
        return a
      }

      function d(a) {
        return a[N] = !0, a
      }

      function e(a) {
        var b = G.createElement("div");
        try {
          return !!a(b)
        } catch (c) {
          return !1
        } finally {
          b.parentNode && b.parentNode.removeChild(b), b = null
        }
      }

      function f(a, b) {
        for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
      }

      function g(a, b) {
        var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
        if (d) return d;
        if (c)
          for (; c = c.nextSibling;)
            if (c === b) return -1;
        return a ? 1 : -1
      }

      function h(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a
        }
      }

      function i(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a
        }
      }

      function j(a) {
        return d(function(b) {
          return b = +b, d(function(c, d) {
            for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
          })
        })
      }

      function k(a) {
        return a && "undefined" != typeof a.getElementsByTagName && a
      }

      function l() {}

      function m(a) {
        for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
        return d
      }

      function n(a, b, c) {
        var d = b.dir,
          e = c && "parentNode" === d,
          f = Q++;
        return b.first ? function(b, c, f) {
          for (; b = b[d];)
            if (1 === b.nodeType || e) return a(b, c, f)
        } : function(b, c, g) {
          var h, i, j = [P, f];
          if (g) {
            for (; b = b[d];)
              if ((1 === b.nodeType || e) && a(b, c, g)) return !0
          } else
            for (; b = b[d];)
              if (1 === b.nodeType || e) {
                if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                if (i[d] = j, j[2] = a(b, c, g)) return !0
              }
        }
      }

      function o(a) {
        return a.length > 1 ? function(b, c, d) {
          for (var e = a.length; e--;)
            if (!a[e](b, c, d)) return !1;
          return !0
        } : a[0]
      }

      function p(a, c, d) {
        for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
        return d
      }

      function q(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        return g
      }

      function r(a, b, c, e, f, g) {
        return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
          var j, k, l, m = [],
            n = [],
            o = g.length,
            r = d || p(b || "*", h.nodeType ? [h] : h, []),
            s = !a || !d && b ? r : q(r, m, a, h, i),
            t = c ? f || (d ? a : o || e) ? [] : g : s;
          if (c && c(s, t, h, i), e)
            for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
          if (d) {
            if (f || a) {
              if (f) {
                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                f(null, t = [], j, i)
              }
              for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
            }
          } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
        })
      }

      function s(a) {
        for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
            return a === b
          }, g, !0), j = n(function(a) {
            return aa(b, a) > -1
          }, g, !0), k = [function(a, c, d) {
            var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
            return b = null, e
          }]; e > h; h++)
          if (c = w.relative[a[h].type]) k = [n(o(k), c)];
          else {
            if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
              for (d = ++h; e > d && !w.relative[a[d].type]; d++);
              return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                value: " " === a[h - 2].type ? "*" : ""
              })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
            }
            k.push(c)
          }
        return o(k)
      }

      function t(a, c) {
        var e = c.length > 0,
          f = a.length > 0,
          g = function(d, g, h, i, j) {
            var k, l, m, n = 0,
              o = "0",
              p = d && [],
              r = [],
              s = C,
              t = d || f && w.find.TAG("*", j),
              u = P += null == s ? 1 : Math.random() || .1,
              v = t.length;
            for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
              if (f && k) {
                for (l = 0; m = a[l++];)
                  if (m(k, g, h)) {
                    i.push(k);
                    break
                  }
                j && (P = u)
              }
              e && ((k = !m && k) && n--, d && p.push(k))
            }
            if (n += o, e && o !== n) {
              for (l = 0; m = c[l++];) m(p, r, g, h);
              if (d) {
                if (n > 0)
                  for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                r = q(r)
              }
              $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
            }
            return j && (P = u, C = s), p
          };
        return e ? d(g) : g
      }
      var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
        O = a.document,
        P = 0,
        Q = 0,
        R = c(),
        S = c(),
        T = c(),
        U = function(a, b) {
          return a === b && (E = !0), 0
        },
        V = 1 << 31,
        W = {}.hasOwnProperty,
        X = [],
        Y = X.pop,
        Z = X.push,
        $ = X.push,
        _ = X.slice,
        aa = function(a, b) {
          for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b) return c;
          return -1
        },
        ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ca = "[\\x20\\t\\r\\n\\f]",
        da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ea = da.replace("w", "w#"),
        fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
        ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
        ha = new RegExp(ca + "+", "g"),
        ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
        ja = new RegExp("^" + ca + "*," + ca + "*"),
        ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
        la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
        ma = new RegExp(ga),
        na = new RegExp("^" + ea + "$"),
        oa = {
          ID: new RegExp("^#(" + da + ")"),
          CLASS: new RegExp("^\\.(" + da + ")"),
          TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + fa),
          PSEUDO: new RegExp("^" + ga),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + ba + ")$", "i"),
          needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
        },
        pa = /^(?:input|select|textarea|button)$/i,
        qa = /^h\d$/i,
        ra = /^[^{]+\{\s*\[native \w/,
        sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ta = /[+~]/,
        ua = /'|\\/g,
        va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
        wa = function(a, b, c) {
          var d = "0x" + b - 65536;
          return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        },
        xa = function() {
          F()
        };
      try {
        $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
      } catch (ya) {
        $ = {
          apply: X.length ? function(a, b) {
            Z.apply(a, _.call(b))
          } : function(a, b) {
            for (var c = a.length, d = 0; a[c++] = b[d++];);
            a.length = c - 1
          }
        }
      }
      v = b.support = {}, y = b.isXML = function(a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return b ? "HTML" !== b.nodeName : !1
      }, F = b.setDocument = function(a) {
        var b, c, d = a ? a.ownerDocument || a : O;
        return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
          return a.className = "i", !a.getAttribute("className")
        }), v.getElementsByTagName = e(function(a) {
          return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
        }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
          return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
        }), v.getById ? (w.find.ID = function(a, b) {
          if ("undefined" != typeof b.getElementById && I) {
            var c = b.getElementById(a);
            return c && c.parentNode ? [c] : []
          }
        }, w.filter.ID = function(a) {
          var b = a.replace(va, wa);
          return function(a) {
            return a.getAttribute("id") === b
          }
        }) : (delete w.find.ID, w.filter.ID = function(a) {
          var b = a.replace(va, wa);
          return function(a) {
            var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
            return c && c.value === b
          }
        }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
          return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
        } : function(a, b) {
          var c, d = [],
            e = 0,
            f = b.getElementsByTagName(a);
          if ("*" === a) {
            for (; c = f[e++];) 1 === c.nodeType && d.push(c);
            return d
          }
          return f
        }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
          return I ? b.getElementsByClassName(a) : void 0
        }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
          H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
        }), e(function(a) {
          var b = d.createElement("input");
          b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
        })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
          v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
        }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
          var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
          return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
        } : function(a, b) {
          if (b)
            for (; b = b.parentNode;)
              if (b === a) return !0;
          return !1
        }, U = b ? function(a, b) {
          if (a === b) return E = !0, 0;
          var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
          return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
        } : function(a, b) {
          if (a === b) return E = !0, 0;
          var c, e = 0,
            f = a.parentNode,
            h = b.parentNode,
            i = [a],
            j = [b];
          if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
          if (f === h) return g(a, b);
          for (c = a; c = c.parentNode;) i.unshift(c);
          for (c = b; c = c.parentNode;) j.unshift(c);
          for (; i[e] === j[e];) e++;
          return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
        }, d) : G
      }, b.matches = function(a, c) {
        return b(a, null, null, c)
      }, b.matchesSelector = function(a, c) {
        if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c))) try {
          var d = L.call(a, c);
          if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
        } catch (e) {}
        return b(c, G, null, [a]).length > 0
      }, b.contains = function(a, b) {
        return (a.ownerDocument || a) !== G && F(a), M(a, b)
      }, b.attr = function(a, b) {
        (a.ownerDocument || a) !== G && F(a);
        var c = w.attrHandle[b.toLowerCase()],
          d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
        return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
      }, b.error = function(a) {
        throw new Error("Syntax error, unrecognized expression: " + a)
      }, b.uniqueSort = function(a) {
        var b, c = [],
          d = 0,
          e = 0;
        if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
          for (; b = a[e++];) b === a[e] && (d = c.push(e));
          for (; d--;) a.splice(c[d], 1)
        }
        return D = null, a
      }, x = b.getText = function(a) {
        var b, c = "",
          d = 0,
          e = a.nodeType;
        if (e) {
          if (1 === e || 9 === e || 11 === e) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
          } else if (3 === e || 4 === e) return a.nodeValue
        } else
          for (; b = a[d++];) c += x(b);
        return c
      }, w = b.selectors = {
        cacheLength: 50,
        createPseudo: d,
        match: oa,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(a) {
            return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
          },
          CHILD: function(a) {
            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
          },
          PSEUDO: function(a) {
            var b, c = !a[6] && a[2];
            return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
          }
        },
        filter: {
          TAG: function(a) {
            var b = a.replace(va, wa).toLowerCase();
            return "*" === a ? function() {
              return !0
            } : function(a) {
              return a.nodeName && a.nodeName.toLowerCase() === b
            }
          },
          CLASS: function(a) {
            var b = R[a + " "];
            return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
              return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
            })
          },
          ATTR: function(a, c, d) {
            return function(e) {
              var f = b.attr(e, a);
              return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
            }
          },
          CHILD: function(a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === d && 0 === e ? function(a) {
              return !!a.parentNode
            } : function(b, c, i) {
              var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h;
              if (q) {
                if (f) {
                  for (; p;) {
                    for (l = b; l = l[p];)
                      if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                    o = p = "only" === a && !o && "nextSibling"
                  }
                  return !0
                }
                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                  for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                    if (1 === l.nodeType && ++m && l === b) {
                      k[a] = [P, n, m];
                      break
                    }
                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                else
                  for (;
                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                return m -= e, m === d || m % d === 0 && m / d >= 0
              }
            }
          },
          PSEUDO: function(a, c) {
            var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
            return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
              for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
            }) : function(a) {
              return f(a, 0, e)
            }) : f
          }
        },
        pseudos: {
          not: d(function(a) {
            var b = [],
              c = [],
              e = A(a.replace(ia, "$1"));
            return e[N] ? d(function(a, b, c, d) {
              for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
            }) : function(a, d, f) {
              return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
            }
          }),
          has: d(function(a) {
            return function(c) {
              return b(a, c).length > 0
            }
          }),
          contains: d(function(a) {
            return a = a.replace(va, wa),
              function(b) {
                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
              }
          }),
          lang: d(function(a) {
            return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
              function(b) {
                var c;
                do
                  if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                while ((b = b.parentNode) && 1 === b.nodeType);
                return !1
              }
          }),
          target: function(b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id
          },
          root: function(a) {
            return a === H
          },
          focus: function(a) {
            return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
          },
          enabled: function(a) {
            return a.disabled === !1
          },
          disabled: function(a) {
            return a.disabled === !0
          },
          checked: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && !!a.checked || "option" === b && !!a.selected
          },
          selected: function(a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
          },
          empty: function(a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1;
            return !0
          },
          parent: function(a) {
            return !w.pseudos.empty(a)
          },
          header: function(a) {
            return qa.test(a.nodeName)
          },
          input: function(a) {
            return pa.test(a.nodeName)
          },
          button: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && "button" === a.type || "button" === b
          },
          text: function(a) {
            var b;
            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
          },
          first: j(function() {
            return [0]
          }),
          last: j(function(a, b) {
            return [b - 1]
          }),
          eq: j(function(a, b, c) {
            return [0 > c ? c + b : c]
          }),
          even: j(function(a, b) {
            for (var c = 0; b > c; c += 2) a.push(c);
            return a
          }),
          odd: j(function(a, b) {
            for (var c = 1; b > c; c += 2) a.push(c);
            return a
          }),
          lt: j(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
            return a
          }),
          gt: j(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
            return a
          })
        }
      }, w.pseudos.nth = w.pseudos.eq;
      for (u in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) w.pseudos[u] = h(u);
      for (u in {
          submit: !0,
          reset: !0
        }) w.pseudos[u] = i(u);
      return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
        var d, e, f, g, h, i, j, k = S[a + " "];
        if (k) return c ? 0 : k.slice(0);
        for (h = a, i = [], j = w.preFilter; h;) {
          (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
            value: d,
            type: e[0].replace(ia, " ")
          }), h = h.slice(d.length));
          for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
            value: d,
            type: g,
            matches: e
          }), h = h.slice(d.length));
          if (!d) break
        }
        return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
      }, A = b.compile = function(a, b) {
        var c, d = [],
          e = [],
          f = T[a + " "];
        if (!f) {
          for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
          f = T(a, t(e, d)), f.selector = a
        }
        return f
      }, B = b.select = function(a, b, c, d) {
        var e, f, g, h, i, j = "function" == typeof a && a,
          l = !d && z(a = j.selector || a);
        if (c = c || [], 1 === l.length) {
          if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
            if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
            j && (b = b.parentNode), a = a.slice(f.shift().value.length)
          }
          for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
            if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
              if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
              break
            }
        }
        return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
      }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
        return 1 & a.compareDocumentPosition(G.createElement("div"))
      }), e(function(a) {
        return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
      }) || f("type|href|height|width", function(a, b, c) {
        return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
      }), v.attributes && e(function(a) {
        return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
      }) || f("value", function(a, b, c) {
        return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
      }), e(function(a) {
        return null == a.getAttribute("disabled")
      }) || f(ba, function(a, b, c) {
        var d;
        return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
      }), b
    }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext,
      ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      ha = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
      var d = b[0];
      return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
        return 1 === a.nodeType
      }))
    }, _.fn.extend({
      find: function(a) {
        var b, c = this.length,
          d = [],
          e = this;
        if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
          for (b = 0; c > b; b++)
            if (_.contains(e[b], this)) return !0
        }));
        for (b = 0; c > b; b++) _.find(a, e[b], d);
        return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
      },
      filter: function(a) {
        return this.pushStack(d(this, a || [], !1))
      },
      not: function(a) {
        return this.pushStack(d(this, a || [], !0))
      },
      is: function(a) {
        return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
      }
    });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      ka = _.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
          if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
          if (c[1]) {
            if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
              for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
            return this
          }
          return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
      };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/,
      ma = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    _.extend({
      dir: function(a, b, c) {
        for (var d = [], e = void 0 !== c;
          (a = a[b]) && 9 !== a.nodeType;)
          if (1 === a.nodeType) {
            if (e && _(a).is(c)) break;
            d.push(a)
          }
        return d
      },
      sibling: function(a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c
      }
    }), _.fn.extend({
      has: function(a) {
        var b = _(a, this),
          c = b.length;
        return this.filter(function() {
          for (var a = 0; c > a; a++)
            if (_.contains(this, b[a])) return !0
        })
      },
      closest: function(a, b) {
        for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
              f.push(c);
              break
            }
        return this.pushStack(f.length > 1 ? _.unique(f) : f)
      },
      index: function(a) {
        return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(a, b) {
        return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
      },
      addBack: function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
      }
    }), _.each({
      parent: function(a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null
      },
      parents: function(a) {
        return _.dir(a, "parentNode")
      },
      parentsUntil: function(a, b, c) {
        return _.dir(a, "parentNode", c)
      },
      next: function(a) {
        return e(a, "nextSibling")
      },
      prev: function(a) {
        return e(a, "previousSibling")
      },
      nextAll: function(a) {
        return _.dir(a, "nextSibling")
      },
      prevAll: function(a) {
        return _.dir(a, "previousSibling")
      },
      nextUntil: function(a, b, c) {
        return _.dir(a, "nextSibling", c)
      },
      prevUntil: function(a, b, c) {
        return _.dir(a, "previousSibling", c)
      },
      siblings: function(a) {
        return _.sibling((a.parentNode || {}).firstChild, a)
      },
      children: function(a) {
        return _.sibling(a.firstChild)
      },
      contents: function(a) {
        return a.contentDocument || _.merge([], a.childNodes)
      }
    }, function(a, b) {
      _.fn[a] = function(c, d) {
        var e = _.map(this, b, c);
        return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
      }
    });
    var na = /\S+/g,
      oa = {};
    _.Callbacks = function(a) {
      a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
      var b, c, d, e, g, h, i = [],
        j = !a.once && [],
        k = function(f) {
          for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
            if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
              b = !1;
              break
            }
          d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
        },
        l = {
          add: function() {
            if (i) {
              var c = i.length;
              ! function f(b) {
                _.each(b, function(b, c) {
                  var d = _.type(c);
                  "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                })
              }(arguments), d ? g = i.length : b && (e = c, k(b))
            }
            return this
          },
          remove: function() {
            return i && _.each(arguments, function(a, b) {
              for (var c;
                (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
            }), this
          },
          has: function(a) {
            return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
          },
          empty: function() {
            return i = [], g = 0, this
          },
          disable: function() {
            return i = j = b = void 0, this
          },
          disabled: function() {
            return !i
          },
          lock: function() {
            return j = void 0, b || l.disable(), this
          },
          locked: function() {
            return !j
          },
          fireWith: function(a, b) {
            return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
          },
          fire: function() {
            return l.fireWith(this, arguments), this
          },
          fired: function() {
            return !!c
          }
        };
      return l
    }, _.extend({
      Deferred: function(a) {
        var b = [
            ["resolve", "done", _.Callbacks("once memory"), "resolved"],
            ["reject", "fail", _.Callbacks("once memory"), "rejected"],
            ["notify", "progress", _.Callbacks("memory")]
          ],
          c = "pending",
          d = {
            state: function() {
              return c
            },
            always: function() {
              return e.done(arguments).fail(arguments), this
            },
            then: function() {
              var a = arguments;
              return _.Deferred(function(c) {
                _.each(b, function(b, f) {
                  var g = _.isFunction(a[b]) && a[b];
                  e[f[1]](function() {
                    var a = g && g.apply(this, arguments);
                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                  })
                }), a = null
              }).promise()
            },
            promise: function(a) {
              return null != a ? _.extend(a, d) : d
            }
          },
          e = {};
        return d.pipe = d.then, _.each(b, function(a, f) {
          var g = f[2],
            h = f[3];
          d[f[1]] = g.add, h && g.add(function() {
            c = h
          }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
            return e[f[0] + "With"](this === e ? d : this, arguments), this
          }, e[f[0] + "With"] = g.fireWith
        }), d.promise(e), a && a.call(e, e), e
      },
      when: function(a) {
        var b, c, d, e = 0,
          f = R.call(arguments),
          g = f.length,
          h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
          i = 1 === h ? a : _.Deferred(),
          j = function(a, c, d) {
            return function(e) {
              c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
            }
          };
        if (g > 1)
          for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
        return h || i.resolveWith(d, f), i.promise()
      }
    });
    var pa;
    _.fn.ready = function(a) {
      return _.ready.promise().done(a), this
    }, _.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(a) {
        a ? _.readyWait++ : _.ready(!0)
      },
      ready: function(a) {
        (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
      }
    }), _.ready.promise = function(b) {
      return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
    }, _.ready.promise();
    var qa = _.access = function(a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === _.type(c)) {
        e = !0;
        for (h in c) _.access(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
          return j.call(_(a), c)
        })), b))
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
      key: function(a) {
        if (!h.accepts(a)) return 0;
        var b = {},
          c = a[this.expando];
        if (!c) {
          c = h.uid++;
          try {
            b[this.expando] = {
              value: c
            }, Object.defineProperties(a, b)
          } catch (d) {
            b[this.expando] = c, _.extend(a, b)
          }
        }
        return this.cache[c] || (this.cache[c] = {}), c
      },
      set: function(a, b, c) {
        var d, e = this.key(a),
          f = this.cache[e];
        if ("string" == typeof b) f[b] = c;
        else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
        else
          for (d in b) f[d] = b[d];
        return f
      },
      get: function(a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b]
      },
      access: function(a, b, c) {
        var d;
        return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
      },
      remove: function(a, b) {
        var c, d, e, f = this.key(a),
          g = this.cache[f];
        if (void 0 === b) this.cache[f] = {};
        else {
          _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
          for (; c--;) delete g[d[c]]
        }
      },
      hasData: function(a) {
        return !_.isEmptyObject(this.cache[a[this.expando]] || {})
      },
      discard: function(a) {
        a[this.expando] && delete this.cache[a[this.expando]]
      }
    };
    var ra = new h,
      sa = new h,
      ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ua = /([A-Z])/g;
    _.extend({
      hasData: function(a) {
        return sa.hasData(a) || ra.hasData(a)
      },
      data: function(a, b, c) {
        return sa.access(a, b, c)
      },
      removeData: function(a, b) {
        sa.remove(a, b)
      },
      _data: function(a, b, c) {
        return ra.access(a, b, c)
      },
      _removeData: function(a, b) {
        ra.remove(a, b)
      }
    }), _.fn.extend({
      data: function(a, b) {
        var c, d, e, f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
            for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
            ra.set(f, "hasDataAttrs", !0)
          }
          return e
        }
        return "object" == typeof a ? this.each(function() {
          sa.set(this, a)
        }) : qa(this, function(b) {
          var c, d = _.camelCase(a);
          if (f && void 0 === b) {
            if (c = sa.get(f, a), void 0 !== c) return c;
            if (c = sa.get(f, d), void 0 !== c) return c;
            if (c = i(f, d, void 0), void 0 !== c) return c
          } else this.each(function() {
            var c = sa.get(this, d);
            sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
          })
        }, null, b, arguments.length > 1, null, !0)
      },
      removeData: function(a) {
        return this.each(function() {
          sa.remove(this, a)
        })
      }
    }), _.extend({
      queue: function(a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
      },
      dequeue: function(a, b) {
        b = b || "fx";
        var c = _.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = _._queueHooks(a, b),
          g = function() {
            _.dequeue(a, b)
          };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
      },
      _queueHooks: function(a, b) {
        var c = b + "queueHooks";
        return ra.get(a, c) || ra.access(a, c, {
          empty: _.Callbacks("once memory").add(function() {
            ra.remove(a, [b + "queue", c])
          })
        })
      }
    }), _.fn.extend({
      queue: function(a, b) {
        var c = 2;
        return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
          var c = _.queue(this, a, b);
          _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
        })
      },
      dequeue: function(a) {
        return this.each(function() {
          _.dequeue(this, a)
        })
      },
      clearQueue: function(a) {
        return this.queue(a || "fx", [])
      },
      promise: function(a, b) {
        var c, d = 1,
          e = _.Deferred(),
          f = this,
          g = this.length,
          h = function() {
            --d || e.resolveWith(f, [f])
          };
        for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b)
      }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      wa = ["Top", "Right", "Bottom", "Left"],
      xa = function(a, b) {
        return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
      },
      ya = /^(?:checkbox|radio)$/i;
    ! function() {
      var a = Z.createDocumentFragment(),
        b = a.appendChild(Z.createElement("div")),
        c = Z.createElement("input");
      c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/,
      Ba = /^(?:mouse|pointer|contextmenu)|click/,
      Ca = /^(?:focusinfocus|focusoutblur)$/,
      Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
      global: {},
      add: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
        if (q)
          for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
              return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
            type: n,
            origType: p,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && _.expr.match.needsContext.test(e),
            namespace: o.join(".")
          }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
      },
      remove: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
        if (q && (i = q.events)) {
          for (b = (b || "").match(na) || [""], j = b.length; j--;)
            if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
              for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
              g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
            } else
              for (n in i) _.event.remove(a, n + b[j], c, d, !0);
          _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
        }
      },
      trigger: function(b, c, d, e) {
        var f, g, h, i, j, k, l, m = [d || Z],
          n = X.call(b, "type") ? b.type : b,
          o = X.call(b, "namespace") ? b.namespace.split(".") : [];
        if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
          if (!e && !l.noBubble && !_.isWindow(d)) {
            for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
            h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
          }
          for (f = 0;
            (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
          return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
        }
      },
      dispatch: function(a) {
        a = _.event.fix(a);
        var b, c, d, e, f, g = [],
          h = R.call(arguments),
          i = (ra.get(this, "events") || {})[a.type] || [],
          j = _.event.special[a.type] || {};
        if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
          for (g = _.event.handlers.call(this, a, i), b = 0;
            (e = g[b++]) && !a.isPropagationStopped();)
            for (a.currentTarget = e.elem, c = 0;
              (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
          return j.postDispatch && j.postDispatch.call(this, a), a.result
        }
      },
      handlers: function(a, b) {
        var c, d, e, f, g = [],
          h = b.delegateCount,
          i = a.target;
        if (h && i.nodeType && (!a.button || "click" !== a.type))
          for (; i !== this; i = i.parentNode || this)
            if (i.disabled !== !0 || "click" !== a.type) {
              for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
              d.length && g.push({
                elem: i,
                handlers: d
              })
            }
        return h < b.length && g.push({
          elem: this,
          handlers: b.slice(h)
        }), g
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(a, b) {
          return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(a, b) {
          var c, d, e, f = b.button;
          return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
        }
      },
      fix: function(a) {
        if (a[_.expando]) return a;
        var b, c, d, e = a.type,
          f = a,
          g = this.fixHooks[e];
        for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
        return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            return this !== l() && this.focus ? (this.focus(), !1) : void 0
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === l() && this.blur ? (this.blur(), !1) : void 0
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
          },
          _default: function(a) {
            return _.nodeName(a.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(a) {
            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
          }
        }
      },
      simulate: function(a, b, c, d) {
        var e = _.extend(new _.Event, c, {
          type: a,
          isSimulated: !0,
          originalEvent: {}
        });
        d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
      }
    }, _.removeEvent = function(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
      return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
      isDefaultPrevented: k,
      isPropagationStopped: k,
      isImmediatePropagationStopped: k,
      preventDefault: function() {
        var a = this.originalEvent;
        this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
      },
      stopPropagation: function() {
        var a = this.originalEvent;
        this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var a = this.originalEvent;
        this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
      }
    }, _.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(a, b) {
      _.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function(a) {
          var c, d = this,
            e = a.relatedTarget,
            f = a.handleObj;
          return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
        }
      }
    }), Y.focusinBubbles || _.each({
      focus: "focusin",
      blur: "focusout"
    }, function(a, b) {
      var c = function(a) {
        _.event.simulate(b, a.target, _.event.fix(a), !0)
      };
      _.event.special[b] = {
        setup: function() {
          var d = this.ownerDocument || this,
            e = ra.access(d, b);
          e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
        },
        teardown: function() {
          var d = this.ownerDocument || this,
            e = ra.access(d, b) - 1;
          e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
        }
      }
    }), _.fn.extend({
      on: function(a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && (c = c || b, b = void 0);
          for (g in a) this.on(g, b, c, a[g], e);
          return this
        }
        if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
        else if (!d) return this;
        return 1 === e && (f = d, d = function(a) {
          return _().off(a), f.apply(this, arguments)
        }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
          _.event.add(this, a, d, c, b)
        })
      },
      one: function(a, b, c, d) {
        return this.on(a, b, c, d, 1)
      },
      off: function(a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this
        }
        return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
          _.event.remove(this, a, c, b)
        })
      },
      trigger: function(a, b) {
        return this.each(function() {
          _.event.trigger(a, b, this)
        })
      },
      triggerHandler: function(a, b) {
        var c = this[0];
        return c ? _.event.trigger(a, b, c, !0) : void 0
      }
    });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Fa = /<([\w:]+)/,
      Ga = /<|&#?\w+;/,
      Ha = /<(?:script|style|link)/i,
      Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ja = /^$|\/(?:java|ecma)script/i,
      Ka = /^true\/(.*)/,
      La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Ma = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
      clone: function(a, b, c) {
        var d, e, f, g, h = a.cloneNode(!0),
          i = _.contains(a.ownerDocument, a);
        if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
          for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
        if (b)
          if (c)
            for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
          else q(a, h);
        return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
      },
      buildFragment: function(a, b, c, d) {
        for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
          if (e = a[m], e || 0 === e)
            if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
            else if (Ga.test(e)) {
          for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
          _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
        } else l.push(b.createTextNode(e));
        for (k.textContent = "", m = 0; e = l[m++];)
          if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
            for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
        return k
      },
      cleanData: function(a) {
        for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
          if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
            if (b.events)
              for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
            ra.cache[e] && delete ra.cache[e]
          }
          delete sa.cache[c[sa.expando]]
        }
      }
    }), _.fn.extend({
      text: function(a) {
        return qa(this, function(a) {
          return void 0 === a ? _.text(this) : this.empty().each(function() {
            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
          })
        }, null, a, arguments.length)
      },
      append: function() {
        return this.domManip(arguments, function(a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = m(this, a);
            b.appendChild(a)
          }
        })
      },
      prepend: function() {
        return this.domManip(arguments, function(a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = m(this, a);
            b.insertBefore(a, b.firstChild)
          }
        })
      },
      before: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this)
        })
      },
      after: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
        })
      },
      remove: function(a, b) {
        for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
        return this
      },
      empty: function() {
        for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
        return this
      },
      clone: function(a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
          return _.clone(this, a, b)
        })
      },
      html: function(a) {
        return qa(this, function(a) {
          var b = this[0] || {},
            c = 0,
            d = this.length;
          if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
          if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
            a = a.replace(Ea, "<$1></$2>");
            try {
              for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
              b = 0
            } catch (e) {}
          }
          b && this.empty().append(a)
        }, null, a, arguments.length)
      },
      replaceWith: function() {
        var a = arguments[0];
        return this.domManip(arguments, function(b) {
          a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
        }), a && (a.length || a.nodeType) ? this : this.remove()
      },
      detach: function(a) {
        return this.remove(a, !0)
      },
      domManip: function(a, b) {
        a = S.apply([], a);
        var c, d, e, f, g, h, i = 0,
          j = this.length,
          k = this,
          l = j - 1,
          m = a[0],
          p = _.isFunction(m);
        if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
          var d = k.eq(c);
          p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
        });
        if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
          for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
          if (f)
            for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
        }
        return this
      }
    }), _.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(a, b) {
      _.fn[a] = function(a) {
        for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
        return this.pushStack(d)
      }
    });
    var Na, Oa = {},
      Pa = /^margin/,
      Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
      Ra = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
      };
    ! function() {
      function b() {
        g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
        var b = a.getComputedStyle(g, null);
        c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
      }
      var c, d, e = Z.documentElement,
        f = Z.createElement("div"),
        g = Z.createElement("div");
      g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
        pixelPosition: function() {
          return b(), c
        },
        boxSizingReliable: function() {
          return null == d && b(), d
        },
        reliableMarginRight: function() {
          var b, c = g.appendChild(Z.createElement("div"));
          return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
        }
      }))
    }(), _.swap = function(a, b, c, d) {
      var e, f, g = {};
      for (f in b) g[f] = a.style[f], a.style[f] = b[f];
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e
    };
    var Sa = /^(none|table(?!-c[ea]).+)/,
      Ta = new RegExp("^(" + va + ")(.*)$", "i"),
      Ua = new RegExp("^([+-])=(" + va + ")", "i"),
      Va = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      Wa = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({
      cssHooks: {
        opacity: {
          get: function(a, b) {
            if (b) {
              var c = v(a, "opacity");
              return "" === c ? "1" : c
            }
          }
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        "float": "cssFloat"
      },
      style: function(a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var e, f, g, h = _.camelCase(b),
            i = a.style;
          return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
        }
      },
      css: function(a, b, c, d) {
        var e, f, g, h = _.camelCase(b);
        return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
      }
    }), _.each(["height", "width"], function(a, b) {
      _.cssHooks[b] = {
        get: function(a, c, d) {
          return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
            return A(a, b, d)
          }) : A(a, b, d) : void 0
        },
        set: function(a, c, d) {
          var e = d && Ra(a);
          return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
        }
      }
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
      return b ? _.swap(a, {
        display: "inline-block"
      }, v, [a, "marginRight"]) : void 0
    }), _.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(a, b) {
      _.cssHooks[a + b] = {
        expand: function(c) {
          for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
          return e
        }
      }, Pa.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({
      css: function(a, b) {
        return qa(this, function(a, b, c) {
          var d, e, f = {},
            g = 0;
          if (_.isArray(b)) {
            for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
            return f
          }
          return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
        }, a, b, arguments.length > 1)
      },
      show: function() {
        return B(this, !0)
      },
      hide: function() {
        return B(this)
      },
      toggle: function(a) {
        return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
          xa(this) ? _(this).show() : _(this).hide()
        })
      }
    }), _.Tween = C, C.prototype = {
      constructor: C,
      init: function(a, b, c, d, e, f) {
        this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
      },
      cur: function() {
        var a = C.propHooks[this.prop];
        return a && a.get ? a.get(this) : C.propHooks._default.get(this)
      },
      run: function(a) {
        var b, c = C.propHooks[this.prop];
        return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
      }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
      _default: {
        get: function(a) {
          var b;
          return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
        },
        set: function(a) {
          _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
        }
      }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
      set: function(a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
      }
    }, _.easing = {
      linear: function(a) {
        return a
      },
      swing: function(a) {
        return .5 - Math.cos(a * Math.PI) / 2
      }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/,
      _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
      ab = /queueHooks$/,
      bb = [G],
      cb = {
        "*": [function(a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = _a.exec(b),
            f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
            g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            f = f || g[3], e = e || [], g = +d || 1;
            do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
          }
          return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
        }]
      };
    _.Animation = _.extend(I, {
        tweener: function(a, b) {
          _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
          for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
        },
        prefilter: function(a, b) {
          b ? bb.unshift(a) : bb.push(a)
        }
      }), _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
          complete: c || !c && b || _.isFunction(a) && a,
          duration: a,
          easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
          _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
        }, d
      }, _.fn.extend({
        fadeTo: function(a, b, c, d) {
          return this.filter(xa).css("opacity", 0).show().end().animate({
            opacity: b
          }, a, c, d)
        },
        animate: function(a, b, c, d) {
          var e = _.isEmptyObject(a),
            f = _.speed(b, c, d),
            g = function() {
              var b = I(this, _.extend({}, a), f);
              (e || ra.get(this, "finish")) && b.stop(!0)
            };
          return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
          var d = function(a) {
            var b = a.stop;
            delete a.stop, b(c)
          };
          return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = _.timers,
              g = ra.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else
              for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
            for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
            (b || !c) && _.dequeue(this, a)
          })
        },
        finish: function(a) {
          return a !== !1 && (a = a || "fx"), this.each(function() {
            var b, c = ra.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = _.timers,
              g = d ? d.length : 0;
            for (c.finish = !0, _.queue(this, a, []),
              e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish
          })
        }
      }), _.each(["toggle", "show", "hide"], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
          return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
      }), _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(a, b) {
        _.fn[a] = function(a, c, d) {
          return this.animate(b, a, c, d)
        }
      }), _.timers = [], _.fx.tick = function() {
        var a, b = 0,
          c = _.timers;
        for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Ya = void 0
      }, _.fx.timer = function(a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
      }, _.fx.interval = 13, _.fx.start = function() {
        Za || (Za = setInterval(_.fx.tick, _.fx.interval))
      }, _.fx.stop = function() {
        clearInterval(Za), Za = null
      }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
          var d = setTimeout(b, a);
          c.stop = function() {
            clearTimeout(d)
          }
        })
      },
      function() {
        var a = Z.createElement("input"),
          b = Z.createElement("select"),
          c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
      }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({
      attr: function(a, b) {
        return qa(this, _.attr, a, b, arguments.length > 1)
      },
      removeAttr: function(a) {
        return this.each(function() {
          _.removeAttr(this, a)
        })
      }
    }), _.extend({
      attr: function(a, b, c) {
        var d, e, f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
      },
      removeAttr: function(a, b) {
        var c, d, e = 0,
          f = b && b.match(na);
        if (f && 1 === a.nodeType)
          for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
      },
      attrHooks: {
        type: {
          set: function(a, b) {
            if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b
            }
          }
        }
      }
    }), eb = {
      set: function(a, b, c) {
        return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
      }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
      var c = fb[b] || _.find.attr;
      fb[b] = function(a, b, d) {
        var e, f;
        return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
      }
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
      prop: function(a, b) {
        return qa(this, _.prop, a, b, arguments.length > 1)
      },
      removeProp: function(a) {
        return this.each(function() {
          delete this[_.propFix[a] || a]
        })
      }
    }), _.extend({
      propFix: {
        "for": "htmlFor",
        "class": "className"
      },
      prop: function(a, b, c) {
        var d, e, f, g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
      },
      propHooks: {
        tabIndex: {
          get: function(a) {
            return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
          }
        }
      }
    }), Y.optSelected || (_.propHooks.selected = {
      get: function(a) {
        var b = a.parentNode;
        return b && b.parentNode && b.parentNode.selectedIndex, null
      }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      _.propFix[this.toLowerCase()] = this
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
      addClass: function(a) {
        var b, c, d, e, f, g, h = "string" == typeof a && a,
          i = 0,
          j = this.length;
        if (_.isFunction(a)) return this.each(function(b) {
          _(this).addClass(a.call(this, b, this.className))
        });
        if (h)
          for (b = (a || "").match(na) || []; j > i; i++)
            if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
              for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
              g = _.trim(d), c.className !== g && (c.className = g)
            }
        return this
      },
      removeClass: function(a) {
        var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
          i = 0,
          j = this.length;
        if (_.isFunction(a)) return this.each(function(b) {
          _(this).removeClass(a.call(this, b, this.className))
        });
        if (h)
          for (b = (a || "").match(na) || []; j > i; i++)
            if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
              for (f = 0; e = b[f++];)
                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
              g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
            }
        return this
      },
      toggleClass: function(a, b) {
        var c = typeof a;
        return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : _.isFunction(a) ? this.each(function(c) {
          _(this).toggleClass(a.call(this, c, this.className, b), b)
        }) : this.each(function() {
          if ("string" === c)
            for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
        })
      },
      hasClass: function(a) {
        for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
          if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
        return !1
      }
    });
    var ib = /\r/g;
    _.fn.extend({
      val: function(a) {
        var b, c, d, e = this[0]; {
          if (arguments.length) return d = _.isFunction(a), this.each(function(c) {
            var e;
            1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
              return null == a ? "" : a + ""
            })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
          });
          if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
        }
      }
    }), _.extend({
      valHooks: {
        option: {
          get: function(a) {
            var b = _.find.attr(a, "value");
            return null != b ? b : _.trim(_.text(a))
          }
        },
        select: {
          get: function(a) {
            for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
              if (c = d[i], (c.selected || i === e) && (Y.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !_.nodeName(c.parentNode, "optgroup"))) {
                if (b = _(c).val(), f) return b;
                g.push(b)
              }
            return g
          },
          set: function(a, b) {
            for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
            return c || (a.selectedIndex = -1), f
          }
        }
      }
    }), _.each(["radio", "checkbox"], function() {
      _.valHooks[this] = {
        set: function(a, b) {
          return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
        }
      }, Y.checkOn || (_.valHooks[this].get = function(a) {
        return null === a.getAttribute("value") ? "on" : a.value
      })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
      _.fn[b] = function(a, c) {
        return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
      }
    }), _.fn.extend({
      hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a)
      },
      bind: function(a, b, c) {
        return this.on(a, null, b, c)
      },
      unbind: function(a, b) {
        return this.off(a, null, b)
      },
      delegate: function(a, b, c, d) {
        return this.on(b, a, c, d)
      },
      undelegate: function(a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
      }
    });
    var jb = _.now(),
      kb = /\?/;
    _.parseJSON = function(a) {
      return JSON.parse(a + "")
    }, _.parseXML = function(a) {
      var b, c;
      if (!a || "string" != typeof a) return null;
      try {
        c = new DOMParser, b = c.parseFromString(a, "text/xml")
      } catch (d) {
        b = void 0
      }
      return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lb = /#.*$/,
      mb = /([?&])_=[^&]*/,
      nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      pb = /^(?:GET|HEAD)$/,
      qb = /^\/\//,
      rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      sb = {},
      tb = {},
      ub = "*/".concat("*"),
      vb = a.location.href,
      wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: vb,
        type: "GET",
        isLocal: ob.test(wb[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": ub,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": _.parseJSON,
          "text xml": _.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(a, b) {
        return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
      },
      ajaxPrefilter: J(sb),
      ajaxTransport: J(tb),
      ajax: function(a, b) {
        function c(a, b, c, g) {
          var i, k, r, s, u, w = b;
          2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
        }
        "object" == typeof a && (b = a, a = void 0), b = b || {};
        var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
          m = l.context || l,
          n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
          o = _.Deferred(),
          p = _.Callbacks("once memory"),
          q = l.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = {
            readyState: 0,
            getResponseHeader: function(a) {
              var b;
              if (2 === t) {
                if (!g)
                  for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                b = g[a.toLowerCase()]
              }
              return null == b ? null : b
            },
            getAllResponseHeaders: function() {
              return 2 === t ? f : null
            },
            setRequestHeader: function(a, b) {
              var c = a.toLowerCase();
              return t || (a = s[c] = s[c] || a, r[a] = b), this
            },
            overrideMimeType: function(a) {
              return t || (l.mimeType = a), this
            },
            statusCode: function(a) {
              var b;
              if (a)
                if (2 > t)
                  for (b in a) q[b] = [q[b], a[b]];
                else v.always(a[v.status]);
              return this
            },
            abort: function(a) {
              var b = a || u;
              return d && d.abort(b), c(0, b), this
            }
          };
        if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
        j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
        for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
        if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
        u = "abort";
        for (k in {
            success: 1,
            error: 1,
            complete: 1
          }) v[k](l[k]);
        if (d = K(tb, l, b, v)) {
          v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
            v.abort("timeout")
          }, l.timeout));
          try {
            t = 1, d.send(r, c)
          } catch (w) {
            if (!(2 > t)) throw w;
            c(-1, w)
          }
        } else c(-1, "No Transport");
        return v
      },
      getJSON: function(a, b, c) {
        return _.get(a, b, c, "json")
      },
      getScript: function(a, b) {
        return _.get(a, void 0, b, "script")
      }
    }), _.each(["get", "post"], function(a, b) {
      _[b] = function(a, c, d, e) {
        return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
          url: a,
          type: b,
          dataType: e,
          data: c,
          success: d
        })
      }
    }), _._evalUrl = function(a) {
      return _.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      })
    }, _.fn.extend({
      wrapAll: function(a) {
        var b;
        return _.isFunction(a) ? this.each(function(b) {
          _(this).wrapAll(a.call(this, b))
        }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
          for (var a = this; a.firstElementChild;) a = a.firstElementChild;
          return a
        }).append(this)), this)
      },
      wrapInner: function(a) {
        return _.isFunction(a) ? this.each(function(b) {
          _(this).wrapInner(a.call(this, b))
        }) : this.each(function() {
          var b = _(this),
            c = b.contents();
          c.length ? c.wrapAll(a) : b.append(a)
        })
      },
      wrap: function(a) {
        var b = _.isFunction(a);
        return this.each(function(c) {
          _(this).wrapAll(b ? a.call(this, c) : a)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
        }).end()
      }
    }), _.expr.filters.hidden = function(a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
      return !_.expr.filters.hidden(a)
    };
    var xb = /%20/g,
      yb = /\[\]$/,
      zb = /\r?\n/g,
      Ab = /^(?:submit|button|image|reset|file)$/i,
      Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
      var c, d = [],
        e = function(a, b) {
          b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
      if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
        e(this.name, this.value)
      });
      else
        for (c in a) O(c, a[c], b, e);
      return d.join("&").replace(xb, "+")
    }, _.fn.extend({
      serialize: function() {
        return _.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var a = _.prop(this, "elements");
          return a ? _.makeArray(a) : this
        }).filter(function() {
          var a = this.type;
          return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
        }).map(function(a, b) {
          var c = _(this).val();
          return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
            return {
              name: b.name,
              value: a.replace(zb, "\r\n")
            }
          }) : {
            name: b.name,
            value: c.replace(zb, "\r\n")
          }
        }).get()
      }
    }), _.ajaxSettings.xhr = function() {
      try {
        return new XMLHttpRequest
      } catch (a) {}
    };
    var Cb = 0,
      Db = {},
      Eb = {
        0: 200,
        1223: 204
      },
      Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
      for (var a in Db) Db[a]()
    }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
      var b;
      return Y.cors || Fb && !a.crossDomain ? {
        send: function(c, d) {
          var e, f = a.xhr(),
            g = ++Cb;
          if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
            for (e in a.xhrFields) f[e] = a.xhrFields[e];
          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
          for (e in c) f.setRequestHeader(e, c[e]);
          b = function(a) {
            return function() {
              b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                text: f.responseText
              } : void 0, f.getAllResponseHeaders()))
            }
          }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
          try {
            f.send(a.hasContent && a.data || null)
          } catch (h) {
            if (b) throw h
          }
        },
        abort: function() {
          b && b()
        }
      } : void 0
    }), _.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /(?:java|ecma)script/
      },
      converters: {
        "text script": function(a) {
          return _.globalEval(a), a
        }
      }
    }), _.ajaxPrefilter("script", function(a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function(a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function(d, e) {
            b = _("<script>").prop({
              async: !0,
              charset: a.scriptCharset,
              src: a.url
            }).on("load error", c = function(a) {
              b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
            }), Z.head.appendChild(b[0])
          },
          abort: function() {
            c && c()
          }
        }
      }
    });
    var Gb = [],
      Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var a = Gb.pop() || _.expando + "_" + jb++;
        return this[a] = !0, a
      }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
      var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
      return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
        return g || _.error(e + " was not called"), g[0]
      }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
        g = arguments
      }, d.always(function() {
        a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
      }), "script") : void 0
    }), _.parseHTML = function(a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && (c = b, b = !1), b = b || Z;
      var d = ga.exec(a),
        e = !c && [];
      return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ib = _.fn.load;
    _.fn.load = function(a, b, c) {
      if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
      var d, e, f, g = this,
        h = a.indexOf(" ");
      return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
        url: a,
        type: e,
        dataType: "html",
        data: b
      }).done(function(a) {
        f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
      }).complete(c && function(a, b) {
        g.each(c, f || [a.responseText, b, a])
      }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
      _.fn[b] = function(a) {
        return this.on(b, a)
      }
    }), _.expr.filters.animated = function(a) {
      return _.grep(_.timers, function(b) {
        return a === b.elem
      }).length
    };
    var Jb = a.document.documentElement;
    _.offset = {
      setOffset: function(a, b, c) {
        var d, e, f, g, h, i, j, k = _.css(a, "position"),
          l = _(a),
          m = {};
        "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
      }
    }, _.fn.extend({
      offset: function(a) {
        if (arguments.length) return void 0 === a ? this : this.each(function(b) {
          _.offset.setOffset(this, a, b)
        });
        var b, c, d = this[0],
          e = {
            top: 0,
            left: 0
          },
          f = d && d.ownerDocument;
        if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
          top: e.top + c.pageYOffset - b.clientTop,
          left: e.left + c.pageXOffset - b.clientLeft
        }) : e
      },
      position: function() {
        if (this[0]) {
          var a, b, c = this[0],
            d = {
              top: 0,
              left: 0
            };
          return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
            top: b.top - d.top - _.css(c, "marginTop", !0),
            left: b.left - d.left - _.css(c, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
          return a || Jb
        })
      }
    }), _.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(b, c) {
      var d = "pageYOffset" === c;
      _.fn[b] = function(e) {
        return qa(this, function(b, e, f) {
          var g = P(b);
          return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
        }, b, e, arguments.length, null)
      }
    }), _.each(["top", "left"], function(a, b) {
      _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
        return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
      })
    }), _.each({
      Height: "height",
      Width: "width"
    }, function(a, b) {
      _.each({
        padding: "inner" + a,
        content: b,
        "": "outer" + a
      }, function(c, d) {
        _.fn[d] = function(d, e) {
          var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
          return qa(this, function(b, c, d) {
            var e;
            return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
          }, b, f ? d : void 0, f, null)
        }
      })
    }), _.fn.size = function() {
      return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return _
    });
    var Kb = a.jQuery,
      Lb = a.$;
    return _.noConflict = function(b) {
      return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
    }, typeof b === za && (a.jQuery = a.$ = _), _
  }), function(a, b, c) {
    "use strict";

    function d(a, b) {
      return b = b || Error,
        function() {
          var c, d, e = 2,
            f = arguments,
            g = f[0],
            h = "[" + (a ? a + ":" : "") + g + "] ",
            i = f[1];
          for (h += i.replace(/\{\d+\}/g, function(a) {
              var b = +a.slice(1, -1),
                c = b + e;
              return c < f.length ? ta(f[c]) : a
            }), h += "\nhttp://errors.angularjs.org/1.4.3/" + (a ? a + "/" : "") + g, d = e, c = "?"; d < f.length; d++, c = "&") h += c + "p" + (d - e) + "=" + encodeURIComponent(ta(f[d]));
          return new b(h)
        }
    }

    function e(a) {
      if (null == a || C(a)) return !1;
      var b = "length" in Object(a) && a.length;
      return a.nodeType === Ud && b ? !0 : x(a) || Ld(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function f(a, b, c) {
      var d, g;
      if (a)
        if (A(a))
          for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a);
        else if (Ld(a) || e(a)) {
        var h = "object" != typeof a;
        for (d = 0, g = a.length; g > d; d++)(h || d in a) && b.call(c, a[d], d, a)
      } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a);
      else if (w(a))
        for (d in a) b.call(c, a[d], d, a);
      else if ("function" == typeof a.hasOwnProperty)
        for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a);
      else
        for (d in a) ud.call(a, d) && b.call(c, a[d], d, a);
      return a
    }

    function g(a, b, c) {
      for (var d = Object.keys(a).sort(), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
      return d
    }

    function h(a) {
      return function(b, c) {
        a(c, b)
      }
    }

    function i() {
      return ++Jd
    }

    function j(a, b) {
      b ? a.$$hashKey = b : delete a.$$hashKey
    }

    function k(a, b, c) {
      for (var d = a.$$hashKey, e = 0, f = b.length; f > e; ++e) {
        var g = b[e];
        if (v(g) || A(g))
          for (var h = Object.keys(g), i = 0, l = h.length; l > i; i++) {
            var m = h[i],
              n = g[m];
            c && v(n) ? z(n) ? a[m] = new Date(n.valueOf()) : (v(a[m]) || (a[m] = Ld(n) ? [] : {}), k(a[m], [n], !0)) : a[m] = n
          }
      }
      return j(a, d), a
    }

    function l(a) {
      return k(a, Cd.call(arguments, 1), !1)
    }

    function m(a) {
      return k(a, Cd.call(arguments, 1), !0)
    }

    function n(a) {
      return parseInt(a, 10)
    }

    function o(a, b) {
      return l(Object.create(a), b)
    }

    function p() {}

    function q(a) {
      return a
    }

    function r(a) {
      return function() {
        return a
      }
    }

    function s(a) {
      return A(a.toString) && a.toString !== Object.prototype.toString
    }

    function t(a) {
      return "undefined" == typeof a
    }

    function u(a) {
      return "undefined" != typeof a
    }

    function v(a) {
      return null !== a && "object" == typeof a
    }

    function w(a) {
      return null !== a && "object" == typeof a && !Gd(a)
    }

    function x(a) {
      return "string" == typeof a
    }

    function y(a) {
      return "number" == typeof a
    }

    function z(a) {
      return "[object Date]" === Fd.call(a)
    }

    function A(a) {
      return "function" == typeof a
    }

    function B(a) {
      return "[object RegExp]" === Fd.call(a)
    }

    function C(a) {
      return a && a.window === a
    }

    function D(a) {
      return a && a.$evalAsync && a.$watch
    }

    function E(a) {
      return "[object File]" === Fd.call(a)
    }

    function F(a) {
      return "[object FormData]" === Fd.call(a)
    }

    function G(a) {
      return "[object Blob]" === Fd.call(a)
    }

    function H(a) {
      return "boolean" == typeof a
    }

    function I(a) {
      return a && A(a.then)
    }

    function J(a) {
      return Md.test(Fd.call(a))
    }

    function K(a) {
      return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function L(a) {
      var b, c = {},
        d = a.split(",");
      for (b = 0; b < d.length; b++) c[d[b]] = !0;
      return c
    }

    function M(a) {
      return td(a.nodeName || a[0] && a[0].nodeName)
    }

    function N(a, b) {
      var c = a.indexOf(b);
      return c >= 0 && a.splice(c, 1), c
    }

    function O(a, b, c, d) {
      if (C(a) || D(a)) throw Hd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
      if (J(b)) throw Hd("cpta", "Can't copy! TypedArray destination cannot be mutated.");
      if (b) {
        if (a === b) throw Hd("cpi", "Can't copy! Source and destination are identical.");
        c = c || [], d = d || [], v(a) && (c.push(a), d.push(b));
        var e;
        if (Ld(a)) {
          b.length = 0;
          for (var g = 0; g < a.length; g++) b.push(O(a[g], null, c, d))
        } else {
          var h = b.$$hashKey;
          if (Ld(b) ? b.length = 0 : f(b, function(a, c) {
              delete b[c]
            }), w(a))
            for (e in a) b[e] = O(a[e], null, c, d);
          else if (a && "function" == typeof a.hasOwnProperty)
            for (e in a) a.hasOwnProperty(e) && (b[e] = O(a[e], null, c, d));
          else
            for (e in a) ud.call(a, e) && (b[e] = O(a[e], null, c, d));
          j(b, h)
        }
      } else if (b = a, v(a)) {
        var i;
        if (c && -1 !== (i = c.indexOf(a))) return d[i];
        if (Ld(a)) return O(a, [], c, d);
        if (J(a)) b = new a.constructor(a);
        else if (z(a)) b = new Date(a.getTime());
        else {
          if (!B(a)) {
            var k = Object.create(Gd(a));
            return O(a, k, c, d)
          }
          b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex
        }
        d && (c.push(a), d.push(b))
      }
      return b
    }

    function P(a, b) {
      if (Ld(a)) {
        b = b || [];
        for (var c = 0, d = a.length; d > c; c++) b[c] = a[c]
      } else if (v(a)) {
        b = b || {};
        for (var e in a)("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e])
      }
      return b || a
    }

    function Q(a, b) {
      if (a === b) return !0;
      if (null === a || null === b) return !1;
      if (a !== a && b !== b) return !0;
      var d, e, f, g = typeof a,
        h = typeof b;
      if (g == h && "object" == g) {
        if (!Ld(a)) {
          if (z(a)) return z(b) ? Q(a.getTime(), b.getTime()) : !1;
          if (B(a)) return B(b) ? a.toString() == b.toString() : !1;
          if (D(a) || D(b) || C(a) || C(b) || Ld(b) || z(b) || B(b)) return !1;
          f = qa();
          for (e in a)
            if ("$" !== e.charAt(0) && !A(a[e])) {
              if (!Q(a[e], b[e])) return !1;
              f[e] = !0
            }
          for (e in b)
            if (!(e in f || "$" === e.charAt(0) || b[e] === c || A(b[e]))) return !1;
          return !0
        }
        if (!Ld(b)) return !1;
        if ((d = a.length) == b.length) {
          for (e = 0; d > e; e++)
            if (!Q(a[e], b[e])) return !1;
          return !0
        }
      }
      return !1
    }

    function R(a, b, c) {
      return a.concat(Cd.call(b, c))
    }

    function S(a, b) {
      return Cd.call(a, b || 0)
    }

    function T(a, b) {
      var c = arguments.length > 2 ? S(arguments, 2) : [];
      return !A(b) || b instanceof RegExp ? b : c.length ? function() {
        return arguments.length ? b.apply(a, R(c, arguments, 0)) : b.apply(a, c)
      } : function() {
        return arguments.length ? b.apply(a, arguments) : b.call(a)
      }
    }

    function U(a, d) {
      var e = d;
      return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : C(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : D(d) && (e = "$SCOPE"), e
    }

    function V(a, b) {
      return "undefined" == typeof a ? c : (y(b) || (b = b ? 2 : null), JSON.stringify(a, U, b))
    }

    function W(a) {
      return x(a) ? JSON.parse(a) : a
    }

    function X(a, b) {
      var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
      return isNaN(c) ? b : c
    }

    function Y(a, b) {
      return a = new Date(a.getTime()), a.setMinutes(a.getMinutes() + b), a
    }

    function Z(a, b, c) {
      c = c ? -1 : 1;
      var d = X(b, a.getTimezoneOffset());
      return Y(a, c * (d - a.getTimezoneOffset()))
    }

    function $(a) {
      a = zd(a).clone();
      try {
        a.empty()
      } catch (b) {}
      var c = zd("<div>").append(a).html();
      try {
        return a[0].nodeType === Wd ? td(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
          return "<" + td(b)
        })
      } catch (b) {
        return td(c)
      }
    }

    function _(a) {
      try {
        return decodeURIComponent(a)
      } catch (b) {}
    }

    function aa(a) {
      var b, c, d = {};
      return f((a || "").split("&"), function(a) {
        if (a && (b = a.replace(/\+/g, "%20").split("="), c = _(b[0]), u(c))) {
          var e = u(b[1]) ? _(b[1]) : !0;
          ud.call(d, c) ? Ld(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
        }
      }), d
    }

    function ba(a) {
      var b = [];
      return f(a, function(a, c) {
        Ld(a) ? f(a, function(a) {
          b.push(da(c, !0) + (a === !0 ? "" : "=" + da(a, !0)))
        }) : b.push(da(c, !0) + (a === !0 ? "" : "=" + da(a, !0)))
      }), b.length ? b.join("&") : ""
    }

    function ca(a) {
      return da(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function da(a, b) {
      return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function ea(a, b) {
      var c, d, e = Rd.length;
      for (d = 0; e > d; ++d)
        if (c = Rd[d] + b, x(c = a.getAttribute(c))) return c;
      return null
    }

    function fa(a, b) {
      var c, d, e = {};
      f(Rd, function(b) {
        var e = b + "app";
        !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e))
      }), f(Rd, function(b) {
        var e, f = b + "app";
        !c && (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(f))
      }), c && (e.strictDi = null !== ea(c, "strict-di"), b(c, d ? [d] : [], e))
    }

    function ga(c, d, e) {
      v(e) || (e = {});
      var g = {
        strictDi: !1
      };
      e = l(g, e);
      var h = function() {
          if (c = zd(c), c.injector()) {
            var a = c[0] === b ? "document" : $(c);
            throw Hd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
          }
          d = d || [], d.unshift(["$provide", function(a) {
            a.value("$rootElement", c)
          }]), e.debugInfoEnabled && d.push(["$compileProvider", function(a) {
            a.debugInfoEnabled(!0)
          }]), d.unshift("ng");
          var f = $a(d, e.strictDi);
          return f.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
            a.$apply(function() {
              b.data("$injector", d), c(b)(a)
            })
          }]), f
        },
        i = /^NG_ENABLE_DEBUG_INFO!/,
        j = /^NG_DEFER_BOOTSTRAP!/;
      return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, "")), a && !j.test(a.name) ? h() : (a.name = a.name.replace(j, ""), Id.resumeBootstrap = function(a) {
        return f(a, function(a) {
          d.push(a)
        }), h()
      }, void(A(Id.resumeDeferredBootstrap) && Id.resumeDeferredBootstrap()))
    }

    function ha() {
      a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload()
    }

    function ia(a) {
      var b = Id.element(a).injector();
      if (!b) throw Hd("test", "no injector found for element argument to getTestability");
      return b.get("$$testability")
    }

    function ja(a, b) {
      return b = b || "_", a.replace(Sd, function(a, c) {
        return (c ? b : "") + a.toLowerCase()
      })
    }

    function ka() {
      var b;
      if (!Td) {
        var d = Qd();
        Ad = a.jQuery, u(d) && (Ad = null === d ? c : a[d]), Ad && Ad.fn.on ? (zd = Ad, l(Ad.fn, {
          scope: me.scope,
          isolateScope: me.isolateScope,
          controller: me.controller,
          injector: me.injector,
          inheritedData: me.inheritedData
        }), b = Ad.cleanData, Ad.cleanData = function(a) {
          var c;
          if (Kd) Kd = !1;
          else
            for (var d, e = 0; null != (d = a[e]); e++) c = Ad._data(d, "events"), c && c.$destroy && Ad(d).triggerHandler("$destroy");
          b(a)
        }) : zd = Ca, Id.element = zd, Td = !0
      }
    }

    function la(a, b, c) {
      if (!a) throw Hd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
      return a
    }

    function ma(a, b, c) {
      return c && Ld(a) && (a = a[a.length - 1]), la(A(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
    }

    function na(a, b) {
      if ("hasOwnProperty" === a) throw Hd("badname", "hasOwnProperty is not a valid {0} name", b)
    }

    function oa(a, b, c) {
      if (!b) return a;
      for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]);
      return !c && A(a) ? T(f, a) : a
    }

    function pa(a) {
      var b = a[0],
        c = a[a.length - 1],
        d = [b];
      do {
        if (b = b.nextSibling, !b) break;
        d.push(b)
      } while (b !== c);
      return zd(d)
    }

    function qa() {
      return Object.create(null)
    }

    function ra(a) {
      function b(a, b, c) {
        return a[b] || (a[b] = c())
      }
      var c = d("$injector"),
        e = d("ng"),
        f = b(a, "angular", Object);
      return f.$$minErr = f.$$minErr || d, b(f, "module", function() {
        var a = {};
        return function(d, f, g) {
          var h = function(a, b) {
            if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b)
          };
          return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
            function a(a, b, c, d) {
              return d || (d = e),
                function() {
                  return d[c || "push"]([a, b, arguments]), k
                }
            }

            function b(a, b) {
              return function(c, f) {
                return f && A(f) && (f.$$moduleName = d), e.push([a, b, arguments]), k
              }
            }
            if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
            var e = [],
              h = [],
              i = [],
              j = a("$injector", "invoke", "push", h),
              k = {
                _invokeQueue: e,
                _configBlocks: h,
                _runBlocks: i,
                requires: f,
                name: d,
                provider: b("$provide", "provider"),
                factory: b("$provide", "factory"),
                service: b("$provide", "service"),
                value: a("$provide", "value"),
                constant: a("$provide", "constant", "unshift"),
                decorator: b("$provide", "decorator"),
                animation: b("$animateProvider", "register"),
                filter: b("$filterProvider", "register"),
                controller: b("$controllerProvider", "register"),
                directive: b("$compileProvider", "directive"),
                config: j,
                run: function(a) {
                  return i.push(a), this
                }
              };
            return g && j(g), k
          })
        }
      })
    }

    function sa(a) {
      var b = [];
      return JSON.stringify(a, function(a, c) {
        if (c = U(a, c), v(c)) {
          if (b.indexOf(c) >= 0) return "<<already seen>>";
          b.push(c)
        }
        return c
      })
    }

    function ta(a) {
      return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? sa(a) : a
    }

    function ua(b) {
      l(b, {
        bootstrap: ga,
        copy: O,
        extend: l,
        merge: m,
        equals: Q,
        element: zd,
        forEach: f,
        injector: $a,
        noop: p,
        bind: T,
        toJson: V,
        fromJson: W,
        identity: q,
        isUndefined: t,
        isDefined: u,
        isString: x,
        isFunction: A,
        isObject: v,
        isNumber: y,
        isElement: K,
        isArray: Ld,
        version: $d,
        isDate: z,
        lowercase: td,
        uppercase: vd,
        callbacks: {
          counter: 0
        },
        getTestability: ia,
        $$minErr: d,
        $$csp: Pd,
        reloadWithDebugInfo: ha
      }), Bd = ra(a);
      try {
        Bd("ngLocale")
      } catch (c) {
        Bd("ngLocale", []).provider("$locale", Fb)
      }
      Bd("ng", ["ngLocale"], ["$provide", function(a) {
        a.provider({
          $$sanitizeUri: qc
        }), a.provider("$compile", ib).directive({
          a: jf,
          input: Af,
          textarea: Af,
          form: of,
          script: sg,
          select: vg,
          style: xg,
          option: wg,
          ngBind: Df,
          ngBindHtml: Ff,
          ngBindTemplate: Ef,
          ngClass: Hf,
          ngClassEven: Jf,
          ngClassOdd: If,
          ngCloak: Kf,
          ngController: Lf,
          ngForm: pf,
          ngHide: mg,
          ngIf: Of,
          ngInclude: Pf,
          ngInit: Rf,
          ngNonBindable: dg,
          ngPluralize: hg,
          ngRepeat: ig,
          ngShow: lg,
          ngStyle: ng,
          ngSwitch: og,
          ngSwitchWhen: pg,
          ngSwitchDefault: qg,
          ngOptions: gg,
          ngTransclude: rg,
          ngModel: ag,
          ngList: Sf,
          ngChange: Gf,
          pattern: zg,
          ngPattern: zg,
          required: yg,
          ngRequired: yg,
          minlength: Bg,
          ngMinlength: Bg,
          maxlength: Ag,
          ngMaxlength: Ag,
          ngValue: Cf,
          ngModelOptions: cg
        }).directive({
          ngInclude: Qf
        }).directive(kf).directive(Mf), a.provider({
          $anchorScroll: _a,
          $animate: Be,
          $$animateQueue: Ae,
          $$AnimateRunner: ze,
          $browser: fb,
          $cacheFactory: gb,
          $controller: nb,
          $document: ob,
          $exceptionHandler: pb,
          $filter: Ec,
          $interpolate: Db,
          $interval: Eb,
          $http: zb,
          $httpParamSerializer: rb,
          $httpParamSerializerJQLike: sb,
          $httpBackend: Bb,
          $location: Tb,
          $log: Ub,
          $parse: kc,
          $rootScope: pc,
          $q: lc,
          $$q: mc,
          $sce: uc,
          $sceDelegate: tc,
          $sniffer: vc,
          $templateCache: hb,
          $templateRequest: wc,
          $$testability: xc,
          $timeout: yc,
          $window: Bc,
          $$rAF: oc,
          $$jqLite: Va,
          $$HashMap: qe,
          $$cookieReader: Dc
        })
      }])
    }

    function va() {
      return ++ae
    }

    function wa(a) {
      return a.replace(de, function(a, b, c, d) {
        return d ? c.toUpperCase() : c
      }).replace(ee, "Moz$1")
    }

    function xa(a) {
      return !ie.test(a)
    }

    function ya(a) {
      var b = a.nodeType;
      return b === Ud || !b || b === Yd
    }

    function za(a) {
      for (var b in _d[a.ng339]) return !0;
      return !1
    }

    function Aa(a, b) {
      var c, d, e, g, h = b.createDocumentFragment(),
        i = [];
      if (xa(a)) i.push(b.createTextNode(a));
      else {
        for (c = c || h.appendChild(b.createElement("div")), d = (je.exec(a) || ["", ""])[1].toLowerCase(), e = le[d] || le._default, c.innerHTML = e[1] + a.replace(ke, "<$1></$2>") + e[2], g = e[0]; g--;) c = c.lastChild;
        i = R(i, c.childNodes), c = h.firstChild, c.textContent = ""
      }
      return h.textContent = "", h.innerHTML = "", f(i, function(a) {
        h.appendChild(a)
      }), h
    }

    function Ba(a, c) {
      c = c || b;
      var d;
      return (d = he.exec(a)) ? [c.createElement(d[1])] : (d = Aa(a, c)) ? d.childNodes : []
    }

    function Ca(a) {
      if (a instanceof Ca) return a;
      var b;
      if (x(a) && (a = Nd(a), b = !0), !(this instanceof Ca)) {
        if (b && "<" != a.charAt(0)) throw ge("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
        return new Ca(a)
      }
      b ? Ma(this, Ba(a)) : Ma(this, a)
    }

    function Da(a) {
      return a.cloneNode(!0)
    }

    function Ea(a, b) {
      if (b || Ga(a), a.querySelectorAll)
        for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) Ga(c[d])
    }

    function Fa(a, b, c, d) {
      if (u(d)) throw ge("offargs", "jqLite#off() does not support the `selector` argument");
      var e = Ha(a),
        g = e && e.events,
        h = e && e.handle;
      if (h)
        if (b) f(b.split(" "), function(b) {
          if (u(c)) {
            var d = g[b];
            if (N(d || [], c), d && d.length > 0) return
          }
          ce(a, b, h), delete g[b]
        });
        else
          for (b in g) "$destroy" !== b && ce(a, b, h), delete g[b]
    }

    function Ga(a, b) {
      var d = a.ng339,
        e = d && _d[d];
      if (e) {
        if (b) return void delete e.data[b];
        e.handle && (e.events.$destroy && e.handle({}, "$destroy"), Fa(a)), delete _d[d], a.ng339 = c
      }
    }

    function Ha(a, b) {
      var d = a.ng339,
        e = d && _d[d];
      return b && !e && (a.ng339 = d = va(), e = _d[d] = {
        events: {},
        data: {},
        handle: c
      }), e
    }

    function Ia(a, b, c) {
      if (ya(a)) {
        var d = u(c),
          e = !d && b && !v(b),
          f = !b,
          g = Ha(a, !e),
          h = g && g.data;
        if (d) h[b] = c;
        else {
          if (f) return h;
          if (e) return h && h[b];
          l(h, b)
        }
      }
    }

    function Ja(a, b) {
      return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
    }

    function Ka(a, b) {
      b && a.setAttribute && f(b.split(" "), function(b) {
        a.setAttribute("class", Nd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Nd(b) + " ", " ")))
      })
    }

    function La(a, b) {
      if (b && a.setAttribute) {
        var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
        f(b.split(" "), function(a) {
          a = Nd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
        }), a.setAttribute("class", Nd(c))
      }
    }

    function Ma(a, b) {
      if (b)
        if (b.nodeType) a[a.length++] = b;
        else {
          var c = b.length;
          if ("number" == typeof c && b.window !== b) {
            if (c)
              for (var d = 0; c > d; d++) a[a.length++] = b[d]
          } else a[a.length++] = b
        }
    }

    function Na(a, b) {
      return Oa(a, "$" + (b || "ngController") + "Controller")
    }

    function Oa(a, b, d) {
      a.nodeType == Yd && (a = a.documentElement);
      for (var e = Ld(b) ? b : [b]; a;) {
        for (var f = 0, g = e.length; g > f; f++)
          if ((d = zd.data(a, e[f])) !== c) return d;
        a = a.parentNode || a.nodeType === Zd && a.host
      }
    }

    function Pa(a) {
      for (Ea(a, !0); a.firstChild;) a.removeChild(a.firstChild)
    }

    function Qa(a, b) {
      b || Ea(a);
      var c = a.parentNode;
      c && c.removeChild(a)
    }

    function Ra(b, c) {
      c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : zd(c).on("load", b)
    }

    function Sa(a, b) {
      var c = ne[b.toLowerCase()];
      return c && oe[M(a)] && c
    }

    function Ta(a, b) {
      var c = a.nodeName;
      return ("INPUT" === c || "TEXTAREA" === c) && pe[b]
    }

    function Ua(a, b) {
      var c = function(c, d) {
        c.isDefaultPrevented = function() {
          return c.defaultPrevented
        };
        var e = b[d || c.type],
          f = e ? e.length : 0;
        if (f) {
          if (t(c.immediatePropagationStopped)) {
            var g = c.stopImmediatePropagation;
            c.stopImmediatePropagation = function() {
              c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c)
            }
          }
          c.isImmediatePropagationStopped = function() {
            return c.immediatePropagationStopped === !0
          }, f > 1 && (e = P(e));
          for (var h = 0; f > h; h++) c.isImmediatePropagationStopped() || e[h].call(a, c)
        }
      };
      return c.elem = a, c
    }

    function Va() {
      this.$get = function() {
        return l(Ca, {
          hasClass: function(a, b) {
            return a.attr && (a = a[0]), Ja(a, b)
          },
          addClass: function(a, b) {
            return a.attr && (a = a[0]), La(a, b)
          },
          removeClass: function(a, b) {
            return a.attr && (a = a[0]), Ka(a, b)
          }
        })
      }
    }

    function Wa(a, b) {
      var c = a && a.$$hashKey;
      if (c) return "function" == typeof c && (c = a.$$hashKey()), c;
      var d = typeof a;
      return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || i)() : d + ":" + a
    }

    function Xa(a, b) {
      if (b) {
        var c = 0;
        this.nextUid = function() {
          return ++c
        }
      }
      f(a, this.put, this)
    }

    function Ya(a) {
      var b = a.toString().replace(ue, ""),
        c = b.match(re);
      return c ? "function(" + (c[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Za(a, b, c) {
      var d, e, g, h;
      if ("function" == typeof a) {
        if (!(d = a.$inject)) {
          if (d = [], a.length) {
            if (b) throw x(c) && c || (c = a.name || Ya(a)), ve("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
            e = a.toString().replace(ue, ""), g = e.match(re), f(g[1].split(se), function(a) {
              a.replace(te, function(a, b, c) {
                d.push(c)
              })
            })
          }
          a.$inject = d
        }
      } else Ld(a) ? (h = a.length - 1, ma(a[h], "fn"), d = a.slice(0, h)) : ma(a, "fn", !0);
      return d
    }

    function $a(a, b) {
      function d(a) {
        return function(b, c) {
          return v(b) ? void f(b, h(a)) : a(b, c)
        }
      }

      function e(a, b) {
        if (na(a, "service"), (A(b) || Ld(b)) && (b = y.instantiate(b)), !b.$get) throw ve("pget", "Provider '{0}' must define $get factory method.", a);
        return w[a + q] = b
      }

      function g(a, b) {
        return function() {
          var c = B.invoke(b, this);
          if (t(c)) throw ve("undef", "Provider '{0}' must return a value from $get factory method.", a);
          return c
        }
      }

      function i(a, b, c) {
        return e(a, {
          $get: c !== !1 ? g(a, b) : b
        })
      }

      function j(a, b) {
        return i(a, ["$injector", function(a) {
          return a.instantiate(b)
        }])
      }

      function k(a, b) {
        return i(a, r(b), !1)
      }

      function l(a, b) {
        na(a, "constant"), w[a] = b, z[a] = b
      }

      function m(a, b) {
        var c = y.get(a + q),
          d = c.$get;
        c.$get = function() {
          var a = B.invoke(d, c);
          return B.invoke(b, null, {
            $delegate: a
          })
        }
      }

      function n(a) {
        var b, c = [];
        return f(a, function(a) {
          function d(a) {
            var b, c;
            for (b = 0, c = a.length; c > b; b++) {
              var d = a[b],
                e = y.get(d[0]);
              e[d[1]].apply(e, d[2])
            }
          }
          if (!u.get(a)) {
            u.put(a, !0);
            try {
              x(a) ? (b = Bd(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks)) : A(a) ? c.push(y.invoke(a)) : Ld(a) ? c.push(y.invoke(a)) : ma(a, "module")
            } catch (e) {
              throw Ld(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), ve("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e)
            }
          }
        }), c
      }

      function o(a, c) {
        function d(b, d) {
          if (a.hasOwnProperty(b)) {
            if (a[b] === p) throw ve("cdep", "Circular dependency found: {0}", b + " <- " + s.join(" <- "));
            return a[b]
          }
          try {
            return s.unshift(b), a[b] = p, a[b] = c(b, d)
          } catch (e) {
            throw a[b] === p && delete a[b], e
          } finally {
            s.shift()
          }
        }

        function e(a, c, e, f) {
          "string" == typeof e && (f = e, e = null);
          var g, h, i, j = [],
            k = $a.$$annotate(a, b, f);
          for (h = 0, g = k.length; g > h; h++) {
            if (i = k[h], "string" != typeof i) throw ve("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
            j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f))
          }
          return Ld(a) && (a = a[g]), a.apply(c, j)
        }

        function f(a, b, c) {
          var d = Object.create((Ld(a) ? a[a.length - 1] : a).prototype || null),
            f = e(a, d, b, c);
          return v(f) || A(f) ? f : d
        }
        return {
          invoke: e,
          instantiate: f,
          get: d,
          annotate: $a.$$annotate,
          has: function(b) {
            return w.hasOwnProperty(b + q) || a.hasOwnProperty(b)
          }
        }
      }
      b = b === !0;
      var p = {},
        q = "Provider",
        s = [],
        u = new Xa([], !0),
        w = {
          $provide: {
            provider: d(e),
            factory: d(i),
            service: d(j),
            value: d(k),
            constant: d(l),
            decorator: m
          }
        },
        y = w.$injector = o(w, function(a, b) {
          throw Id.isString(b) && s.push(b), ve("unpr", "Unknown provider: {0}", s.join(" <- "))
        }),
        z = {},
        B = z.$injector = o(z, function(a, b) {
          var d = y.get(a + q, b);
          return B.invoke(d.$get, d, c, a)
        });
      return f(n(a), function(a) {
        a && B.invoke(a)
      }), B
    }

    function _a() {
      var a = !0;
      this.disableAutoScrolling = function() {
        a = !1
      }, this.$get = ["$window", "$location", "$rootScope", function(b, c, d) {
        function e(a) {
          var b = null;
          return Array.prototype.some.call(a, function(a) {
            return "a" === M(a) ? (b = a, !0) : void 0
          }), b
        }

        function f() {
          var a = h.yOffset;
          if (A(a)) a = a();
          else if (K(a)) {
            var c = a[0],
              d = b.getComputedStyle(c);
            a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom
          } else y(a) || (a = 0);
          return a
        }

        function g(a) {
          if (a) {
            a.scrollIntoView();
            var c = f();
            if (c) {
              var d = a.getBoundingClientRect().top;
              b.scrollBy(0, d - c)
            }
          } else b.scrollTo(0, 0)
        }

        function h(a) {
          a = x(a) ? a : c.hash();
          var b;
          a ? (b = i.getElementById(a)) ? g(b) : (b = e(i.getElementsByName(a))) ? g(b) : "top" === a && g(null) : g(null)
        }
        var i = b.document;
        return a && d.$watch(function() {
          return c.hash()
        }, function(a, b) {
          (a !== b || "" !== a) && Ra(function() {
            d.$evalAsync(h)
          })
        }), h
      }]
    }

    function ab(a, b) {
      return a || b ? a ? b ? (Ld(a) && (a = a.join(" ")), Ld(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
    }

    function bb(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.nodeType === xe) return c
      }
    }

    function cb(a) {
      x(a) && (a = a.split(" "));
      var b = qa();
      return f(a, function(a) {
        a.length && (b[a] = !0)
      }), b
    }

    function db(a) {
      return v(a) ? a : {}
    }

    function eb(a, b, c, d) {
      function e(a) {
        try {
          a.apply(null, S(arguments, 1))
        } finally {
          if (s--, 0 === s)
            for (; u.length;) try {
              u.pop()()
            } catch (b) {
              c.error(b)
            }
        }
      }

      function g(a) {
        var b = a.indexOf("#");
        return -1 === b ? "" : a.substr(b)
      }

      function h() {
        j(), k()
      }

      function i() {
        try {
          return n.state
        } catch (a) {}
      }

      function j() {
        v = i(), v = t(v) ? null : v, Q(v, C) && (v = C), C = v
      }

      function k() {
        (x !== l.url() || w !== v) && (x = l.url(), w = v, f(A, function(a) {
          a(l.url(), v)
        }))
      }
      var l = this,
        m = (b[0], a.location),
        n = a.history,
        o = a.setTimeout,
        q = a.clearTimeout,
        r = {};
      l.isMock = !1;
      var s = 0,
        u = [];
      l.$$completeOutstandingRequest = e, l.$$incOutstandingRequestCount = function() {
        s++
      }, l.notifyWhenNoOutstandingRequests = function(a) {
        0 === s ? a() : u.push(a)
      };
      var v, w, x = m.href,
        y = b.find("base"),
        z = null;
      j(), w = v, l.url = function(b, c, e) {
        if (t(e) && (e = null), m !== a.location && (m = a.location), n !== a.history && (n = a.history), b) {
          var f = w === e;
          if (x === b && (!d.history || f)) return l;
          var h = x && Kb(x) === Kb(b);
          return x = b, w = e, !d.history || h && f ? ((!h || z) && (z = b), c ? m.replace(b) : h ? m.hash = g(b) : m.href = b) : (n[c ? "replaceState" : "pushState"](e, "", b), j(), w = v), l
        }
        return z || m.href.replace(/%27/g, "'")
      }, l.state = function() {
        return v
      };
      var A = [],
        B = !1,
        C = null;
      l.onUrlChange = function(b) {
        return B || (d.history && zd(a).on("popstate", h), zd(a).on("hashchange", h), B = !0), A.push(b), b
      }, l.$$applicationDestroyed = function() {
        zd(a).off("hashchange popstate", h)
      }, l.$$checkUrlChange = k, l.baseHref = function() {
        var a = y.attr("href");
        return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
      }, l.defer = function(a, b) {
        var c;
        return s++, c = o(function() {
          delete r[c], e(a)
        }, b || 0), r[c] = !0, c
      }, l.defer.cancel = function(a) {
        return r[a] ? (delete r[a], q(a), e(p), !0) : !1
      }
    }

    function fb() {
      this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
        return new eb(a, d, b, c)
      }]
    }

    function gb() {
      this.$get = function() {
        function a(a, c) {
          function e(a) {
            a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
          }

          function f(a, b) {
            a != b && (a && (a.p = b), b && (b.n = a))
          }
          if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
          var g = 0,
            h = l({}, c, {
              id: a
            }),
            i = {},
            j = c && c.capacity || Number.MAX_VALUE,
            k = {},
            m = null,
            n = null;
          return b[a] = {
            put: function(a, b) {
              if (!t(b)) {
                if (j < Number.MAX_VALUE) {
                  var c = k[a] || (k[a] = {
                    key: a
                  });
                  e(c)
                }
                return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
              }
            },
            get: function(a) {
              if (j < Number.MAX_VALUE) {
                var b = k[a];
                if (!b) return;
                e(b)
              }
              return i[a]
            },
            remove: function(a) {
              if (j < Number.MAX_VALUE) {
                var b = k[a];
                if (!b) return;
                b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a]
              }
              delete i[a], g--
            },
            removeAll: function() {
              i = {}, g = 0, k = {}, m = n = null
            },
            destroy: function() {
              i = null, h = null, k = null, delete b[a]
            },
            info: function() {
              return l({}, h, {
                size: g
              })
            }
          }
        }
        var b = {};
        return a.info = function() {
          var a = {};
          return f(b, function(b, c) {
            a[c] = b.info()
          }), a
        }, a.get = function(a) {
          return b[a]
        }, a
      }
    }

    function hb() {
      this.$get = ["$cacheFactory", function(a) {
        return a("templates")
      }]
    }

    function ib(a, d) {
      function e(a, b, c) {
        var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
          e = {};
        return f(a, function(a, f) {
          var g = a.match(d);
          if (!g) throw Ce("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
          e[f] = {
            mode: g[1][0],
            collection: "*" === g[2],
            optional: "?" === g[3],
            attrName: g[4] || f
          }
        }), e
      }

      function g(a, b) {
        var c = {
          isolateScope: null,
          bindToController: null
        };
        if (v(a.scope) && (a.bindToController === !0 ? (c.bindToController = e(a.scope, b, !0), c.isolateScope = {}) : c.isolateScope = e(a.scope, b, !1)), v(a.bindToController) && (c.bindToController = e(a.bindToController, b, !0)), v(c.bindToController)) {
          var d = a.controller,
            f = a.controllerAs;
          if (!d) throw Ce("noctrl", "Cannot bind to controller without directive '{0}'s controller.", b);
          if (!mb(d, f)) throw Ce("noident", "Cannot bind to controller without identifier for directive '{0}'.", b)
        }
        return c
      }

      function i(a) {
        var b = a.charAt(0);
        if (!b || b !== td(b)) throw Ce("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", a);
        if (a !== a.trim()) throw Ce("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", a)
      }
      var j = {},
        k = "Directive",
        m = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
        n = /(([\w\-]+)(?:\:([^;]+))?;?)/,
        s = L("ngSrc,ngSrcset,src,srcset"),
        t = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        w = /^(on[a-z]+|formaction)$/;
      this.directive = function z(b, c) {
        return na(b, "directive"), x(b) ? (i(b), la(c, "directiveFactory"), j.hasOwnProperty(b) || (j[b] = [], a.factory(b + k, ["$injector", "$exceptionHandler", function(a, c) {
          var d = [];
          return f(j[b], function(e, f) {
            try {
              var h = a.invoke(e);
              A(h) ? h = {
                compile: r(h)
              } : !h.compile && h.link && (h.compile = r(h.link)), h.priority = h.priority || 0, h.index = f, h.name = h.name || b, h.require = h.require || h.controller && h.name, h.restrict = h.restrict || "EA";
              var i = h.$$bindings = g(h, h.name);
              v(i.isolateScope) && (h.$$isolateBindings = i.isolateScope), h.$$moduleName = e.$$moduleName, d.push(h)
            } catch (j) {
              c(j)
            }
          }), d
        }])), j[b].push(c)) : f(b, h(z)), this
      }, this.aHrefSanitizationWhitelist = function(a) {
        return u(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
      }, this.imgSrcSanitizationWhitelist = function(a) {
        return u(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
      };
      var y = !0;
      this.debugInfoEnabled = function(a) {
        return u(a) ? (y = a, this) : y
      }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, d, e, g, h, i, r, u, z, B, C) {
        function E(a, b) {
          try {
            a.addClass(b)
          } catch (c) {}
        }

        function F(a, b, c, d, e) {
          a instanceof zd || (a = zd(a)), f(a, function(b, c) {
            b.nodeType == Wd && b.nodeValue.match(/\S+/) && (a[c] = zd(b).wrap("<span></span>").parent()[0])
          });
          var g = H(a, b, a, c, d, e);
          F.$$addScopeClass(a);
          var h = null;
          return function(b, c, d) {
            la(b, "scope"), d = d || {};
            var e = d.parentBoundTranscludeFn,
              f = d.transcludeControllers,
              i = d.futureParentElement;
            e && e.$$boundTransclude && (e = e.$$boundTransclude), h || (h = G(i));
            var j;
            if (j = "html" !== h ? zd(Z(h, zd("<div>").append(a).html())) : c ? me.clone.call(a) : a, f)
              for (var k in f) j.data("$" + k + "Controller", f[k].instance);
            return F.$$addScopeInfo(j, b), c && c(j, b), g && g(b, j, j, e), j
          }
        }

        function G(a) {
          var b = a && a[0];
          return b && "foreignobject" !== M(b) && b.toString().match(/SVG/) ? "svg" : "html"
        }

        function H(a, b, d, e, f, g) {
          function h(a, d, e, f) {
            var g, h, i, j, k, l, m, n, q;
            if (o) {
              var r = d.length;
              for (q = new Array(r), k = 0; k < p.length; k += 3) m = p[k], q[m] = d[m]
            } else q = d;
            for (k = 0, l = p.length; l > k;)
              if (i = q[p[k++]], g = p[k++], h = p[k++], g) {
                if (g.scope) {
                  j = a.$new(), F.$$addScopeInfo(zd(i), j);
                  var s = g.$$destroyBindings;
                  s && (g.$$destroyBindings = null, j.$on("$destroyed", s))
                } else j = a;
                n = g.transcludeOnThisElement ? I(a, g.transclude, f) : !g.templateOnThisElement && f ? f : !f && b ? I(a, b) : null, g(h, j, i, e, n, g)
              } else h && h(a, i.childNodes, c, f)
          }
          for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++) i = new fa, j = J(a[q], [], i, 0 === q ? e : c, f), k = j.length ? O(j, a[q], i, b, d, null, [], [], g) : null, k && k.scope && F.$$addScopeClass(i.$$element), m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : H(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), (k || m) && (p.push(q, k, m), n = !0, o = o || k), g = null;
          return n ? h : null
        }

        function I(a, b, c) {
          var d = function(d, e, f, g, h) {
            return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
              parentBoundTranscludeFn: c,
              transcludeControllers: f,
              futureParentElement: g
            })
          };
          return d
        }

        function J(a, b, c, d, e) {
          var f, g, h = a.nodeType,
            i = c.$attr;
          switch (h) {
            case Ud:
              R(b, jb(M(a)), "E", d, e);
              for (var j, k, l, o, p, q, r = a.attributes, s = 0, t = r && r.length; t > s; s++) {
                var u = !1,
                  w = !1;
                j = r[s], k = j.name, p = Nd(j.value), o = jb(k), (q = ka.test(o)) && (k = k.replace(De, "").substr(8).replace(/_(.)/g, function(a, b) {
                  return b.toUpperCase()
                }));
                var y = o.replace(/(Start|End)$/, "");
                T(y) && o === y + "Start" && (u = k, w = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6)), l = jb(k.toLowerCase()), i[l] = k, (q || !c.hasOwnProperty(l)) && (c[l] = p, Sa(a, l) && (c[l] = !0)), aa(a, b, p, l, q), R(b, l, "A", d, e, u, w)
              }
              if (g = a.className, v(g) && (g = g.animVal), x(g) && "" !== g)
                for (; f = n.exec(g);) l = jb(f[2]), R(b, l, "C", d, e) && (c[l] = Nd(f[3])), g = g.substr(f.index + f[0].length);
              break;
            case Wd:
              if (11 === yd)
                for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Wd;) a.nodeValue = a.nodeValue + a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
              Y(b, a.nodeValue);
              break;
            case Xd:
              try {
                f = m.exec(a.nodeValue), f && (l = jb(f[1]), R(b, l, "M", d, e) && (c[l] = Nd(f[2])))
              } catch (z) {}
          }
          return b.sort(W), b
        }

        function K(a, b, c) {
          var d = [],
            e = 0;
          if (b && a.hasAttribute && a.hasAttribute(b)) {
            do {
              if (!a) throw Ce("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
              a.nodeType == Ud && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
            } while (e > 0)
          } else d.push(a);
          return zd(d)
        }

        function L(a, b, c) {
          return function(d, e, f, g, h) {
            return e = K(e[0], b, c), a(d, e, f, g, h)
          }
        }

        function O(a, d, f, g, h, j, k, l, m) {
          function n(a, b, c, d) {
            a && (c && (a = L(a, c, d)), a.require = r.require, a.directiveName = s, (E === r || r.$$isolateScope) && (a = ca(a, {
              isolateScope: !0
            })), k.push(a)), b && (c && (b = L(b, c, d)), b.require = r.require, b.directiveName = s, (E === r || r.$$isolateScope) && (b = ca(b, {
              isolateScope: !0
            })), l.push(b))
          }

          function o(a, b, c, d) {
            var e;
            if (x(b)) {
              var f = b.match(t),
                g = b.substring(f[0].length),
                h = f[1] || f[3],
                i = "?" === f[2];
              if ("^^" === h ? c = c.parent() : (e = d && d[g], e = e && e.instance), !e) {
                var j = "$" + g + "Controller";
                e = h ? c.inheritedData(j) : c.data(j)
              }
              if (!e && !i) throw Ce("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", g, a)
            } else if (Ld(b)) {
              e = [];
              for (var k = 0, l = b.length; l > k; k++) e[k] = o(a, b[k], c, d)
            }
            return e || null
          }

          function p(a, b, c, d, e, f) {
            var g = qa();
            for (var h in d) {
              var j = d[h],
                k = {
                  $scope: j === E || j.$$isolateScope ? e : f,
                  $element: a,
                  $attrs: b,
                  $transclude: c
                },
                l = j.controller;
              "@" == l && (l = b[j.name]);
              var m = i(l, k, !0, j.controllerAs);
              g[j.name] = m, N || a.data("$" + j.name + "Controller", m.instance)
            }
            return g
          }

          function q(a, b, e, g, h, i) {
            function j(a, b, d) {
              var e;
              return D(a) || (d = b, b = a, a = c), N && (e = t), d || (d = N ? v.parent() : v), h(a, b, e, d, H)
            }
            var m, n, q, r, s, t, u, v, w;
            if (d === e ? (w = f, v = f.$$element) : (v = zd(e), w = new fa(v, f)), E && (s = b.$new(!0)), h && (u = j, u.$$boundTransclude = h), C && (t = p(v, w, u, C, s, b)), E && (F.$$addScopeInfo(v, s, !0, !(G && (G === E || G === E.$$originalDirective))), F.$$addScopeClass(v, !0), s.$$isolateBindings = E.$$isolateBindings, ea(b, w, s, s.$$isolateBindings, E, s)), t) {
              var x, y, z = E || B;
              z && t[z.name] && (x = z.$$bindings.bindToController, r = t[z.name], r && r.identifier && x && (y = r, i.$$destroyBindings = ea(b, w, r.instance, x, z)));
              for (m in t) {
                r = t[m];
                var A = r();
                A !== r.instance && (r.instance = A, v.data("$" + m + "Controller", A), r === y && (i.$$destroyBindings(), i.$$destroyBindings = ea(b, w, A, x, z)))
              }
            }
            for (m = 0, n = k.length; n > m; m++) q = k[m], da(q, q.isolateScope ? s : b, v, w, q.require && o(q.directiveName, q.require, v, t), u);
            var H = b;
            for (E && (E.template || null === E.templateUrl) && (H = s), a && a(H, e.childNodes, c, h), m = l.length - 1; m >= 0; m--) q = l[m], da(q, q.isolateScope ? s : b, v, w, q.require && o(q.directiveName, q.require, v, t), u)
          }
          m = m || {};
          for (var r, s, u, w, y, z = -Number.MAX_VALUE, B = m.newScopeDirective, C = m.controllerDirectives, E = m.newIsolateScopeDirective, G = m.templateDirective, H = m.nonTlbTranscludeDirective, I = !1, M = !1, N = m.hasElementTranscludeDirective, O = f.$$element = zd(d), Q = j, R = g, T = 0, W = a.length; W > T; T++) {
            r = a[T];
            var Y = r.$$start,
              _ = r.$$end;
            if (Y && (O = K(d, Y, _)), u = c, z > r.priority) break;
            if ((y = r.scope) && (r.templateUrl || (v(y) ? (X("new/isolated scope", E || B, r, O), E = r) : X("new/isolated scope", E, r, O)), B = B || r), s = r.name, !r.templateUrl && r.controller && (y = r.controller, C = C || qa(), X("'" + s + "' controller", C[s], r, O), C[s] = r), (y = r.transclude) && (I = !0, r.$$tlb || (X("transclusion", H, r, O), H = r), "element" == y ? (N = !0, z = r.priority, u = O, O = f.$$element = zd(b.createComment(" " + s + ": " + f[s] + " ")), d = O[0], ba(h, S(u), d), R = F(u, g, z, Q && Q.name, {
                nonTlbTranscludeDirective: H
              })) : (u = zd(Da(d)).contents(), O.empty(), R = F(u, g))), r.template)
              if (M = !0, X("template", G, r, O), G = r, y = A(r.template) ? r.template(O, f) : r.template, y = ia(y), r.replace) {
                if (Q = r, u = xa(y) ? [] : lb(Z(r.templateNamespace, Nd(y))), d = u[0], 1 != u.length || d.nodeType !== Ud) throw Ce("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", s, "");
                ba(h, O, d);
                var aa = {
                    $attr: {}
                  },
                  ga = J(d, [], aa),
                  ha = a.splice(T + 1, a.length - (T + 1));
                E && P(ga), a = a.concat(ga).concat(ha), U(f, aa), W = a.length
              } else O.html(y);
            if (r.templateUrl) M = !0, X("template", G, r, O), G = r, r.replace && (Q = r), q = V(a.splice(T, a.length - T), O, f, h, I && R, k, l, {
              controllerDirectives: C,
              newScopeDirective: B !== r && B,
              newIsolateScopeDirective: E,
              templateDirective: G,
              nonTlbTranscludeDirective: H
            }), W = a.length;
            else if (r.compile) try {
              w = r.compile(O, f, R), A(w) ? n(null, w, Y, _) : w && n(w.pre, w.post, Y, _)
            } catch (ja) {
              e(ja, $(O))
            }
            r.terminal && (q.terminal = !0, z = Math.max(z, r.priority))
          }
          return q.scope = B && B.scope === !0, q.transcludeOnThisElement = I, q.templateOnThisElement = M, q.transclude = R, m.hasElementTranscludeDirective = N, q
        }

        function P(a) {
          for (var b = 0, c = a.length; c > b; b++) a[b] = o(a[b], {
            $$isolateScope: !0
          })
        }

        function R(b, d, f, g, h, i, l) {
          if (d === h) return null;
          var m = null;
          if (j.hasOwnProperty(d))
            for (var n, p = a.get(d + k), q = 0, r = p.length; r > q; q++) try {
              n = p[q], (g === c || g > n.priority) && -1 != n.restrict.indexOf(f) && (i && (n = o(n, {
                $$start: i,
                $$end: l
              })), b.push(n), m = n)
            } catch (s) {
              e(s)
            }
          return m
        }

        function T(b) {
          if (j.hasOwnProperty(b))
            for (var c, d = a.get(b + k), e = 0, f = d.length; f > e; e++)
              if (c = d[e], c.multiElement) return !0;
          return !1
        }

        function U(a, b) {
          var c = b.$attr,
            d = a.$attr,
            e = a.$$element;
          f(a, function(d, e) {
            "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
          }), f(b, function(b, f) {
            "class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
          })
        }

        function V(a, b, c, d, e, h, i, j) {
          var k, l, m = [],
            n = b[0],
            p = a.shift(),
            q = o(p, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: p
            }),
            r = A(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl,
            s = p.templateNamespace;
          return b.empty(), g(r).then(function(g) {
              var o, t, u, w;
              if (g = ia(g), p.replace) {
                if (u = xa(g) ? [] : lb(Z(s, Nd(g))), o = u[0], 1 != u.length || o.nodeType !== Ud) throw Ce("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
                t = {
                  $attr: {}
                }, ba(d, b, o);
                var x = J(o, [], t);
                v(p.scope) && P(x), a = x.concat(a), U(c, t)
              } else o = n, b.html(g);
              for (a.unshift(q), k = O(a, o, c, e, b, p, h, i, j), f(d, function(a, c) {
                  a == o && (d[c] = b[0])
                }), l = H(b[0].childNodes, e); m.length;) {
                var y = m.shift(),
                  z = m.shift(),
                  A = m.shift(),
                  B = m.shift(),
                  C = b[0];
                if (!y.$$destroyed) {
                  if (z !== n) {
                    var D = z.className;
                    j.hasElementTranscludeDirective && p.replace || (C = Da(o)), ba(A, zd(z), C), E(zd(C), D)
                  }
                  w = k.transcludeOnThisElement ? I(y, k.transclude, B) : B, k(l, y, C, d, w, k)
                }
              }
              m = null
            }),
            function(a, b, c, d, e) {
              var f = e;
              b.$$destroyed || (m ? m.push(b, c, d, f) : (k.transcludeOnThisElement && (f = I(b, k.transclude, e)), k(l, b, c, d, f, k)))
            }
        }

        function W(a, b) {
          var c = b.priority - a.priority;
          return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
        }

        function X(a, b, c, d) {
          function e(a) {
            return a ? " (module: " + a + ")" : ""
          }
          if (b) throw Ce("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, $(d))
        }

        function Y(a, b) {
          var c = d(b, !0);
          c && a.push({
            priority: 0,
            compile: function(a) {
              var b = a.parent(),
                d = !!b.length;
              return d && F.$$addBindingClass(b),
                function(a, b) {
                  var e = b.parent();
                  d || F.$$addBindingClass(e), F.$$addBindingInfo(e, c.expressions), a.$watch(c, function(a) {
                    b[0].nodeValue = a
                  })
                }
            }
          })
        }

        function Z(a, c) {
          switch (a = td(a || "html")) {
            case "svg":
            case "math":
              var d = b.createElement("div");
              return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;
            default:
              return c
          }
        }

        function _(a, b) {
          if ("srcdoc" == b) return z.HTML;
          var c = M(a);
          return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? z.RESOURCE_URL : void 0
        }

        function aa(a, b, c, e, f) {
          var g = _(a, e);
          f = s[e] || f;
          var h = d(c, !0, g, f);
          if (h) {
            if ("multiple" === e && "select" === M(a)) throw Ce("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", $(a));
            b.push({
              priority: 100,
              compile: function() {
                return {
                  pre: function(a, b, i) {
                    var j = i.$$observers || (i.$$observers = {});
                    if (w.test(e)) throw Ce("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                    var k = i[e];
                    k !== c && (h = k && d(k, !0, g, f), c = k), h && (i[e] = h(a), (j[e] || (j[e] = [])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function(a, b) {
                      "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a)
                    }))
                  }
                }
              }
            })
          }
        }

        function ba(a, c, d) {
          var e, f, g = c[0],
            h = c.length,
            i = g.parentNode;
          if (a)
            for (e = 0, f = a.length; f > e; e++)
              if (a[e] == g) {
                a[e++] = d;
                for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
                a.length -= h - 1, a.context === g && (a.context = d);
                break
              }
          i && i.replaceChild(d, g);
          var m = b.createDocumentFragment();
          m.appendChild(g), zd.hasData(g) && (zd(d).data(zd(g).data()), Ad ? (Kd = !0, Ad.cleanData([g])) : delete zd.cache[g[zd.expando]]);
          for (var n = 1, o = c.length; o > n; n++) {
            var p = c[n];
            zd(p).remove(), m.appendChild(p), delete c[n]
          }
          c[0] = d, c.length = 1
        }

        function ca(a, b) {
          return l(function() {
            return a.apply(null, arguments)
          }, a, b)
        }

        function da(a, b, c, d, f, g) {
          try {
            a(b, c, d, f, g)
          } catch (h) {
            e(h, $(c))
          }
        }

        function ea(a, b, e, g, i, j) {
          var k;
          f(g, function(f, g) {
            var j, l, m, n, o = f.attrName,
              q = f.optional,
              r = f.mode;
            switch (ud.call(b, o) || (b[o] = c), r) {
              case "@":
                b[o] || q || (e[g] = c), b.$observe(o, function(a) {
                  e[g] = a
                }), b.$$observers[o].$$scope = a, b[o] && (e[g] = d(b[o])(a));
                break;
              case "=":
                if (q && !b[o]) return;
                l = h(b[o]), n = l.literal ? Q : function(a, b) {
                  return a === b || a !== a && b !== b
                }, m = l.assign || function() {
                  throw j = e[g] = l(a), Ce("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", b[o], i.name)
                }, j = e[g] = l(a);
                var s = function(b) {
                  return n(b, e[g]) || (n(b, j) ? m(a, b = e[g]) : e[g] = b), j = b
                };
                s.$stateful = !0;
                var t;
                t = f.collection ? a.$watchCollection(b[o], s) : a.$watch(h(b[o], s), null, l.literal), k = k || [], k.push(t);
                break;
              case "&":
                if (l = h(b[o]), l === p && q) break;
                e[g] = function(b) {
                  return l(a, b)
                }
            }
          });
          var l = k ? function() {
            for (var a = 0, b = k.length; b > a; ++a) k[a]()
          } : p;
          return j && l !== p ? (j.$on("$destroy", l), p) : l
        }
        var fa = function(a, b) {
          if (b) {
            var c, d, e, f = Object.keys(b);
            for (c = 0, d = f.length; d > c; c++) e = f[c], this[e] = b[e]
          } else this.$attr = {};
          this.$$element = a
        };
        fa.prototype = {
          $normalize: jb,
          $addClass: function(a) {
            a && a.length > 0 && B.addClass(this.$$element, a)
          },
          $removeClass: function(a) {
            a && a.length > 0 && B.removeClass(this.$$element, a)
          },
          $updateClass: function(a, b) {
            var c = kb(a, b);
            c && c.length && B.addClass(this.$$element, c);
            var d = kb(b, a);
            d && d.length && B.removeClass(this.$$element, d)
          },
          $set: function(a, b, d, g) {
            var h, i = this.$$element[0],
              j = Sa(i, a),
              k = Ta(i, a),
              l = a;
            if (j ? (this.$$element.prop(a, b), g = j) : k && (this[k] = b, l = k), this[a] = b, g ? this.$attr[a] = g : (g = this.$attr[a], g || (this.$attr[a] = g = ja(a, "-"))), h = M(this.$$element), "a" === h && "href" === a || "img" === h && "src" === a) this[a] = b = C(b, "src" === a);
            else if ("img" === h && "srcset" === a) {
              for (var m = "", n = Nd(b), o = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, p = /\s/.test(n) ? o : /(,)/, q = n.split(p), r = Math.floor(q.length / 2), s = 0; r > s; s++) {
                var t = 2 * s;
                m += C(Nd(q[t]), !0), m += " " + Nd(q[t + 1])
              }
              var u = Nd(q[2 * s]).split(/\s/);
              m += C(Nd(u[0]), !0), 2 === u.length && (m += " " + Nd(u[1])), this[a] = b = m
            }
            d !== !1 && (null === b || b === c ? this.$$element.removeAttr(g) : this.$$element.attr(g, b));
            var v = this.$$observers;
            v && f(v[l], function(a) {
              try {
                a(b)
              } catch (c) {
                e(c)
              }
            })
          },
          $observe: function(a, b) {
            var c = this,
              d = c.$$observers || (c.$$observers = qa()),
              e = d[a] || (d[a] = []);
            return e.push(b), r.$evalAsync(function() {
                !e.$$inter && c.hasOwnProperty(a) && b(c[a])
              }),
              function() {
                N(e, b)
              }
          }
        };
        var ga = d.startSymbol(),
          ha = d.endSymbol(),
          ia = "{{" == ga || "}}" == ha ? q : function(a) {
            return a.replace(/\{\{/g, ga).replace(/}}/g, ha)
          },
          ka = /^ngAttr[A-Z]/;
        return F.$$addBindingInfo = y ? function(a, b) {
          var c = a.data("$binding") || [];
          Ld(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
        } : p, F.$$addBindingClass = y ? function(a) {
          E(a, "ng-binding")
        } : p, F.$$addScopeInfo = y ? function(a, b, c, d) {
          var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
          a.data(e, b)
        } : p, F.$$addScopeClass = y ? function(a, b) {
          E(a, b ? "ng-isolate-scope" : "ng-scope")
        } : p, F
      }]
    }

    function jb(a) {
      return wa(a.replace(De, ""))
    }

    function kb(a, b) {
      var c = "",
        d = a.split(/\s+/),
        e = b.split(/\s+/);
      a: for (var f = 0; f < d.length; f++) {
        for (var g = d[f], h = 0; h < e.length; h++)
          if (g == e[h]) continue a;
        c += (c.length > 0 ? " " : "") + g
      }
      return c
    }

    function lb(a) {
      a = zd(a);
      var b = a.length;
      if (1 >= b) return a;
      for (; b--;) {
        var c = a[b];
        c.nodeType === Xd && Dd.call(a, b, 1)
      }
      return a
    }

    function mb(a, b) {
      if (b && x(b)) return b;
      if (x(a)) {
        var c = Fe.exec(a);
        if (c) return c[3]
      }
    }

    function nb() {
      var a = {},
        b = !1;
      this.register = function(b, c) {
        na(b, "controller"), v(b) ? l(a, b) : a[b] = c
      }, this.allowGlobals = function() {
        b = !0
      }, this.$get = ["$injector", "$window", function(e, f) {
        function g(a, b, c, e) {
          if (!a || !v(a.$scope)) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, b);
          a.$scope[b] = c
        }
        return function(d, h, i, j) {
          var k, m, n, o;
          if (i = i === !0, j && x(j) && (o = j), x(d)) {
            if (m = d.match(Fe), !m) throw Ee("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", d);
            n = m[1], o = o || m[3], d = a.hasOwnProperty(n) ? a[n] : oa(h.$scope, n, !0) || (b ? oa(f, n, !0) : c), ma(d, n, !0)
          }
          if (i) {
            var p = (Ld(d) ? d[d.length - 1] : d).prototype;
            k = Object.create(p || null), o && g(h, o, k, n || d.name);
            var q;
            return q = l(function() {
              var a = e.invoke(d, k, h, n);
              return a !== k && (v(a) || A(a)) && (k = a, o && g(h, o, k, n || d.name)), k
            }, {
              instance: k,
              identifier: o
            })
          }
          return k = e.instantiate(d, h, n), o && g(h, o, k, n || d.name), k
        }
      }]
    }

    function ob() {
      this.$get = ["$window", function(a) {
        return zd(a.document)
      }]
    }

    function pb() {
      this.$get = ["$log", function(a) {
        return function(b, c) {
          a.error.apply(a, arguments)
        }
      }]
    }

    function qb(a) {
      return v(a) ? z(a) ? a.toISOString() : V(a) : a
    }

    function rb() {
      this.$get = function() {
        return function(a) {
          if (!a) return "";
          var b = [];
          return g(a, function(a, c) {
            null === a || t(a) || (Ld(a) ? f(a, function(a, d) {
              b.push(da(c) + "=" + da(qb(a)))
            }) : b.push(da(c) + "=" + da(qb(a))))
          }), b.join("&")
        }
      }
    }

    function sb() {
      this.$get = function() {
        return function(a) {
          function b(a, d, e) {
            null === a || t(a) || (Ld(a) ? f(a, function(a) {
              b(a, d + "[]")
            }) : v(a) && !z(a) ? g(a, function(a, c) {
              b(a, d + (e ? "" : "[") + c + (e ? "" : "]"))
            }) : c.push(da(d) + "=" + da(qb(a))))
          }
          if (!a) return "";
          var c = [];
          return b(a, "", !0), c.join("&")
        }
      }
    }

    function tb(a, b) {
      if (x(a)) {
        var c = a.replace(Ke, "").trim();
        if (c) {
          var d = b("Content-Type");
          (d && 0 === d.indexOf(Ge) || ub(c)) && (a = W(c))
        }
      }
      return a
    }

    function ub(a) {
      var b = a.match(Ie);
      return b && Je[b[0]].test(a)
    }

    function vb(a) {
      function b(a, b) {
        a && (d[a] = d[a] ? d[a] + ", " + b : b)
      }
      var c, d = qa();
      return x(a) ? f(a.split("\n"), function(a) {
        c = a.indexOf(":"), b(td(Nd(a.substr(0, c))), Nd(a.substr(c + 1)))
      }) : v(a) && f(a, function(a, c) {
        b(td(c), Nd(a))
      }), d
    }

    function wb(a) {
      var b;
      return function(c) {
        if (b || (b = vb(a)), c) {
          var d = b[td(c)];
          return void 0 === d && (d = null), d
        }
        return b
      }
    }

    function xb(a, b, c, d) {
      return A(d) ? d(a, b, c) : (f(d, function(d) {
        a = d(a, b, c)
      }), a)
    }

    function yb(a) {
      return a >= 200 && 300 > a
    }

    function zb() {
      var a = this.defaults = {
          transformResponse: [tb],
          transformRequest: [function(a) {
            return !v(a) || E(a) || G(a) || F(a) ? a : V(a)
          }],
          headers: {
            common: {
              Accept: "application/json, text/plain, */*"
            },
            post: P(He),
            put: P(He),
            patch: P(He)
          },
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          paramSerializer: "$httpParamSerializer"
        },
        b = !1;
      this.useApplyAsync = function(a) {
        return u(a) ? (b = !!a, this) : b
      };
      var e = this.interceptors = [];
      this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(g, h, i, j, k, m) {
        function n(b) {
          function e(a) {
            var b = l({}, a);
            return a.data ? b.data = xb(a.data, a.headers, a.status, i.transformResponse) : b.data = a.data, yb(a.status) ? b : k.reject(b)
          }

          function g(a, b) {
            var c, d = {};
            return f(a, function(a, e) {
              A(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a
            }), d
          }

          function h(b) {
            var c, d, e, f = a.headers,
              h = l({}, b.headers);
            f = l({}, f.common, f[td(b.method)]);
            a: for (c in f) {
              d = td(c);
              for (e in h)
                if (td(e) === d) continue a;
              h[c] = f[c]
            }
            return g(h, P(b))
          }
          if (!Id.isObject(b)) throw d("$http")("badreq", "Http request configuration must be an object.  Received: {0}", b);
          var i = l({
            method: "get",
            transformRequest: a.transformRequest,
            transformResponse: a.transformResponse,
            paramSerializer: a.paramSerializer
          }, b);
          i.headers = h(b), i.method = vd(i.method), i.paramSerializer = x(i.paramSerializer) ? m.get(i.paramSerializer) : i.paramSerializer;
          var j = function(b) {
              var d = b.headers,
                g = xb(b.data, wb(d), c, b.transformRequest);
              return t(g) && f(d, function(a, b) {
                "content-type" === td(b) && delete d[b]
              }), t(b.withCredentials) && !t(a.withCredentials) && (b.withCredentials = a.withCredentials), q(b, g).then(e, e)
            },
            n = [j, c],
            o = k.when(i);
          for (f(w, function(a) {
              (a.request || a.requestError) && n.unshift(a.request, a.requestError), (a.response || a.responseError) && n.push(a.response, a.responseError)
            }); n.length;) {
            var p = n.shift(),
              r = n.shift();
            o = o.then(p, r)
          }
          return o.success = function(a) {
            return ma(a, "fn"), o.then(function(b) {
              a(b.data, b.status, b.headers, i)
            }), o
          }, o.error = function(a) {
            return ma(a, "fn"), o.then(null, function(b) {
              a(b.data, b.status, b.headers, i)
            }), o
          }, o
        }

        function o(a) {
          f(arguments, function(a) {
            n[a] = function(b, c) {
              return n(l({}, c || {}, {
                method: a,
                url: b
              }))
            }
          })
        }

        function p(a) {
          f(arguments, function(a) {
            n[a] = function(b, c, d) {
              return n(l({}, d || {}, {
                method: a,
                url: b,
                data: c
              }))
            }
          })
        }

        function q(d, e) {
          function f(a, c, d, e) {
            function f() {
              i(c, a, d, e)
            }
            o && (yb(a) ? o.put(y, [a, c, vb(d), e]) : o.remove(y)), b ? j.$applyAsync(f) : (f(), j.$$phase || j.$apply())
          }

          function i(a, b, c, e) {
            b = Math.max(b, 0), (yb(b) ? q.resolve : q.reject)({
              data: a,
              status: b,
              headers: wb(c),
              config: d,
              statusText: e
            })
          }

          function l(a) {
            i(a.data, a.status, P(a.headers()), a.statusText)
          }

          function m() {
            var a = n.pendingRequests.indexOf(d); - 1 !== a && n.pendingRequests.splice(a, 1)
          }
          var o, p, q = k.defer(),
            w = q.promise,
            x = d.headers,
            y = r(d.url, d.paramSerializer(d.params));
          if (n.pendingRequests.push(d), w.then(m, m), !d.cache && !a.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (o = v(d.cache) ? d.cache : v(a.cache) ? a.cache : s), o && (p = o.get(y), u(p) ? I(p) ? p.then(l, l) : Ld(p) ? i(p[1], p[0], P(p[2]), p[3]) : i(p, 200, {}, "OK") : o.put(y, w)), t(p)) {
            var z = Ac(d.url) ? h()[d.xsrfCookieName || a.xsrfCookieName] : c;
            z && (x[d.xsrfHeaderName || a.xsrfHeaderName] = z), g(d.method, y, e, f, x, d.timeout, d.withCredentials, d.responseType)
          }
          return w
        }

        function r(a, b) {
          return b.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + b), a
        }
        var s = i("$http");
        a.paramSerializer = x(a.paramSerializer) ? m.get(a.paramSerializer) : a.paramSerializer;
        var w = [];
        return f(e, function(a) {
          w.unshift(x(a) ? m.get(a) : m.invoke(a))
        }), n.pendingRequests = [], o("get", "delete", "head", "jsonp"), p("post", "put", "patch"), n.defaults = a, n
      }]
    }

    function Ab() {
      return new a.XMLHttpRequest
    }

    function Bb() {
      this.$get = ["$browser", "$window", "$document", function(a, b, c) {
        return Cb(a, Ab, a.defer, b.angular.callbacks, c[0])
      }]
    }

    function Cb(a, b, d, e, g) {
      function h(a, b, c) {
        var d = g.createElement("script"),
          f = null;
        return d.type = "text/javascript", d.src = a, d.async = !0, f = function(a) {
          ce(d, "load", f), ce(d, "error", f), g.body.removeChild(d), d = null;
          var h = -1,
            i = "unknown";
          a && ("load" !== a.type || e[b].called || (a = {
            type: "error"
          }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
        }, be(d, "load", f), be(d, "error", f), g.body.appendChild(d), f
      }
      return function(g, i, j, k, l, m, n, o) {
        function q() {
          t && t(), v && v.abort()
        }

        function r(b, e, f, g, h) {
          y !== c && d.cancel(y), t = v = null, b(e, f, g, h), a.$$completeOutstandingRequest(p)
        }
        if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == td(g)) {
          var s = "_" + (e.counter++).toString(36);
          e[s] = function(a) {
            e[s].data = a, e[s].called = !0
          };
          var t = h(i.replace("JSON_CALLBACK", "angular.callbacks." + s), s, function(a, b) {
            r(k, a, e[s].data, "", b), e[s] = p
          })
        } else {
          var v = b();
          v.open(g, i, !0), f(l, function(a, b) {
            u(a) && v.setRequestHeader(b, a)
          }), v.onload = function() {
            var a = v.statusText || "",
              b = "response" in v ? v.response : v.responseText,
              c = 1223 === v.status ? 204 : v.status;
            0 === c && (c = b ? 200 : "file" == zc(i).protocol ? 404 : 0), r(k, c, b, v.getAllResponseHeaders(), a)
          };
          var w = function() {
            r(k, -1, null, null, "")
          };
          if (v.onerror = w, v.onabort = w, n && (v.withCredentials = !0), o) try {
            v.responseType = o
          } catch (x) {
            if ("json" !== o) throw x
          }
          v.send(j)
        }
        if (m > 0) var y = d(q, m);
        else I(m) && m.then(q)
      }
    }

    function Db() {
      var a = "{{",
        b = "}}";
      this.startSymbol = function(b) {
        return b ? (a = b, this) : a
      }, this.endSymbol = function(a) {
        return a ? (b = a, this) : b
      }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
        function f(a) {
          return "\\\\\\" + a
        }

        function g(c) {
          return c.replace(m, a).replace(n, b)
        }

        function h(a) {
          if (null == a) return "";
          switch (typeof a) {
            case "string":
              break;
            case "number":
              a = "" + a;
              break;
            default:
              a = V(a)
          }
          return a
        }

        function i(f, i, m, n) {
          function o(a) {
            try {
              return a = C(a), n && !u(a) ? a : h(a)
            } catch (b) {
              d(Le.interr(f, b))
            }
          }
          n = !!n;
          for (var p, q, r, s = 0, v = [], w = [], x = f.length, y = [], z = []; x > s;) {
            if (-1 == (p = f.indexOf(a, s)) || -1 == (q = f.indexOf(b, p + j))) {
              s !== x && y.push(g(f.substring(s)));
              break
            }
            s !== p && y.push(g(f.substring(s, p))), r = f.substring(p + j, q), v.push(r), w.push(c(r, o)), s = q + k, z.push(y.length), y.push("")
          }
          if (m && y.length > 1 && Le.throwNoconcat(f), !i || v.length) {
            var B = function(a) {
                for (var b = 0, c = v.length; c > b; b++) {
                  if (n && t(a[b])) return;
                  y[z[b]] = a[b]
                }
                return y.join("")
              },
              C = function(a) {
                return m ? e.getTrusted(m, a) : e.valueOf(a)
              };
            return l(function(a) {
              var b = 0,
                c = v.length,
                e = new Array(c);
              try {
                for (; c > b; b++) e[b] = w[b](a);
                return B(e)
              } catch (g) {
                d(Le.interr(f, g))
              }
            }, {
              exp: f,
              expressions: v,
              $$watchDelegate: function(a, b) {
                var c;
                return a.$watchGroup(w, function(d, e) {
                  var f = B(d);
                  A(b) && b.call(this, f, d !== e ? c : f, a), c = f
                })
              }
            })
          }
        }
        var j = a.length,
          k = b.length,
          m = new RegExp(a.replace(/./g, f), "g"),
          n = new RegExp(b.replace(/./g, f), "g");
        return i.startSymbol = function() {
          return a
        }, i.endSymbol = function() {
          return b
        }, i
      }]
    }

    function Eb() {
      this.$get = ["$rootScope", "$window", "$q", "$$q", function(a, b, c, d) {
        function e(e, g, h, i) {
          var j = arguments.length > 4,
            k = j ? S(arguments, 4) : [],
            l = b.setInterval,
            m = b.clearInterval,
            n = 0,
            o = u(i) && !i,
            p = (o ? d : c).defer(),
            q = p.promise;
          return h = u(h) ? h : 0, q.then(null, null, j ? function() {
            e.apply(null, k)
          } : e), q.$$intervalId = l(function() {
            p.notify(n++), h > 0 && n >= h && (p.resolve(n), m(q.$$intervalId), delete f[q.$$intervalId]), o || a.$apply()
          }, g), f[q.$$intervalId] = p, q
        }
        var f = {};
        return e.cancel = function(a) {
          return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1
        }, e
      }]
    }

    function Fb() {
      this.$get = function() {
        return {
          id: "en-us",
          NUMBER_FORMATS: {
            DECIMAL_SEP: ".",
            GROUP_SEP: ",",
            PATTERNS: [{
              minInt: 1,
              minFrac: 0,
              maxFrac: 3,
              posPre: "",
              posSuf: "",
              negPre: "-",
              negSuf: "",
              gSize: 3,
              lgSize: 3
            }, {
              minInt: 1,
              minFrac: 2,
              maxFrac: 2,
              posPre: "¤",
              posSuf: "",
              negPre: "(¤",
              negSuf: ")",
              gSize: 3,
              lgSize: 3
            }],
            CURRENCY_SYM: "$"
          },
          DATETIME_FORMATS: {
            MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
            AMPMS: ["AM", "PM"],
            medium: "MMM d, y h:mm:ss a",
            "short": "M/d/yy h:mm a",
            fullDate: "EEEE, MMMM d, y",
            longDate: "MMMM d, y",
            mediumDate: "MMM d, y",
            shortDate: "M/d/yy",
            mediumTime: "h:mm:ss a",
            shortTime: "h:mm a",
            ERANAMES: ["Before Christ", "Anno Domini"],
            ERAS: ["BC", "AD"]
          },
          pluralCat: function(a) {
            return 1 === a ? "one" : "other"
          }
        }
      }
    }

    function Gb(a) {
      for (var b = a.split("/"), c = b.length; c--;) b[c] = ca(b[c]);
      return b.join("/")
    }

    function Hb(a, b) {
      var c = zc(a);
      b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = n(c.port) || Ne[c.protocol] || null
    }

    function Ib(a, b) {
      var c = "/" !== a.charAt(0);
      c && (a = "/" + a);
      var d = zc(a);
      b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), b.$$search = aa(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function Jb(a, b) {
      return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
    }

    function Kb(a) {
      var b = a.indexOf("#");
      return -1 == b ? a : a.substr(0, b)
    }

    function Lb(a) {
      return a.replace(/(#.+)|#$/, "$1")
    }

    function Mb(a) {
      return a.substr(0, Kb(a).lastIndexOf("/") + 1)
    }

    function Nb(a) {
      return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
    }

    function Ob(a, b) {
      this.$$html5 = !0, b = b || "";
      var d = Mb(a);
      Hb(a, this), this.$$parse = function(a) {
        var b = Jb(d, a);
        if (!x(b)) throw Oe("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, d);
        Ib(b, this), this.$$path || (this.$$path = "/"), this.$$compose()
      }, this.$$compose = function() {
        var a = ba(this.$$search),
          b = this.$$hash ? "#" + ca(this.$$hash) : "";
        this.$$url = Gb(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1)
      }, this.$$parseLinkUrl = function(e, f) {
        if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;
        var g, h, i;
        return (g = Jb(a, e)) !== c ? (h = g, i = (g = Jb(b, g)) !== c ? d + (Jb("/", g) || g) : a + h) : (g = Jb(d, e)) !== c ? i = d + g : d == e + "/" && (i = d), i && this.$$parse(i), !!i
      }
    }

    function Pb(a, b) {
      var c = Mb(a);
      Hb(a, this), this.$$parse = function(d) {
        function e(a, b, c) {
          var d, e = /^\/[A-Z]:(\/.*)/;
          return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
        }
        var f, g = Jb(a, d) || Jb(c, d);
        t(g) || "#" !== g.charAt(0) ? this.$$html5 ? f = g : (f = "", t(g) && (a = d, this.replace())) : (f = Jb(b, g), t(f) && (f = g)), Ib(f, this), this.$$path = e(this.$$path, f, a), this.$$compose()
      }, this.$$compose = function() {
        var c = ba(this.$$search),
          d = this.$$hash ? "#" + ca(this.$$hash) : "";
        this.$$url = Gb(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
      }, this.$$parseLinkUrl = function(b, c) {
        return Kb(a) == Kb(b) ? (this.$$parse(b), !0) : !1
      }
    }

    function Qb(a, b) {
      this.$$html5 = !0, Pb.apply(this, arguments);
      var c = Mb(a);
      this.$$parseLinkUrl = function(d, e) {
        if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
        var f, g;
        return a == Kb(d) ? f = d : (g = Jb(c, d)) ? f = a + b + g : c === d + "/" && (f = c), f && this.$$parse(f), !!f
      }, this.$$compose = function() {
        var c = ba(this.$$search),
          d = this.$$hash ? "#" + ca(this.$$hash) : "";
        this.$$url = Gb(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + b + this.$$url
      }
    }

    function Rb(a) {
      return function() {
        return this[a]
      }
    }

    function Sb(a, b) {
      return function(c) {
        return t(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
      }
    }

    function Tb() {
      var a = "",
        b = {
          enabled: !1,
          requireBase: !0,
          rewriteLinks: !0
        };
      this.hashPrefix = function(b) {
        return u(b) ? (a = b, this) : a
      }, this.html5Mode = function(a) {
        return H(a) ? (b.enabled = a, this) : v(a) ? (H(a.enabled) && (b.enabled = a.enabled), H(a.requireBase) && (b.requireBase = a.requireBase), H(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
      }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
        function h(a, b, c) {
          var e = j.url(),
            f = j.$$state;
          try {
            d.url(a, b, c), j.$$state = d.state()
          } catch (g) {
            throw j.url(e), j.$$state = f, g
          }
        }

        function i(a, b) {
          c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b)
        }
        var j, k, l, m = d.baseHref(),
          n = d.url();
        if (b.enabled) {
          if (!m && b.requireBase) throw Oe("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
          l = Nb(n) + (m || "/"), k = e.history ? Ob : Qb
        } else l = Kb(n), k = Pb;
        j = new k(l, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
        var o = /^\s*(javascript|mailto):/i;
        f.on("click", function(a) {
          if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
            for (var e = zd(a.target);
              "a" !== M(e[0]);)
              if (e[0] === f[0] || !(e = e.parent())[0]) return;
            var h = e.prop("href"),
              i = e.attr("href") || e.attr("xlink:href");
            v(h) && "[object SVGAnimatedString]" === h.toString() && (h = zc(h.animVal).href), o.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
          }
        }), Lb(j.absUrl()) != Lb(n) && d.url(j.absUrl(), !0);
        var p = !0;
        return d.onUrlChange(function(a, b) {
          c.$evalAsync(function() {
            var d, e = j.absUrl(),
              f = j.$$state;
            j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (p = !1, i(e, f)))
          }), c.$$phase || c.$digest()
        }), c.$watch(function() {
          var a = Lb(d.url()),
            b = Lb(j.absUrl()),
            f = d.state(),
            g = j.$$replace,
            k = a !== b || j.$$html5 && e.history && f !== j.$$state;
          (p || k) && (p = !1, c.$evalAsync(function() {
            var b = j.absUrl(),
              d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
            j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
          })), j.$$replace = !1
        }), j
      }]
    }

    function Ub() {
      var a = !0,
        b = this;
      this.debugEnabled = function(b) {
        return u(b) ? (a = b, this) : a
      }, this.$get = ["$window", function(c) {
        function d(a) {
          return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
        }

        function e(a) {
          var b = c.console || {},
            e = b[a] || b.log || p,
            g = !1;
          try {
            g = !!e.apply
          } catch (h) {}
          return g ? function() {
            var a = [];
            return f(arguments, function(b) {
              a.push(d(b))
            }), e.apply(b, a)
          } : function(a, b) {
            e(a, null == b ? "" : b)
          }
        }
        return {
          log: e("log"),
          info: e("info"),
          warn: e("warn"),
          error: e("error"),
          debug: function() {
            var c = e("debug");
            return function() {
              a && c.apply(b, arguments)
            }
          }()
        }
      }]
    }

    function Vb(a, b) {
      if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw Qe("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
      return a
    }

    function Wb(a, b) {
      if (a) {
        if (a.constructor === a) throw Qe("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
        if (a.window === a) throw Qe("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
        if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw Qe("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
        if (a === Object) throw Qe("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
      }
      return a
    }

    function Xb(a, b) {
      if (a) {
        if (a.constructor === a) throw Qe("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
        if (a === Re || a === Se || a === Te) throw Qe("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
      }
    }

    function Yb(a, b) {
      return "undefined" != typeof a ? a : b
    }

    function Zb(a, b) {
      return "undefined" == typeof a ? b : "undefined" == typeof b ? a : a + b
    }

    function $b(a, b) {
      var c = a(b);
      return !c.$stateful
    }

    function _b(a, b) {
      var c, d;
      switch (a.type) {
        case Xe.Program:
          c = !0, f(a.body, function(a) {
            _b(a.expression, b), c = c && a.expression.constant
          }), a.constant = c;
          break;
        case Xe.Literal:
          a.constant = !0, a.toWatch = [];
          break;
        case Xe.UnaryExpression:
          _b(a.argument, b), a.constant = a.argument.constant, a.toWatch = a.argument.toWatch;
          break;
        case Xe.BinaryExpression:
          _b(a.left, b), _b(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.left.toWatch.concat(a.right.toWatch);
          break;
        case Xe.LogicalExpression:
          _b(a.left, b), _b(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.constant ? [] : [a];
          break;
        case Xe.ConditionalExpression:
          _b(a.test, b), _b(a.alternate, b), _b(a.consequent, b), a.constant = a.test.constant && a.alternate.constant && a.consequent.constant, a.toWatch = a.constant ? [] : [a];
          break;
        case Xe.Identifier:
          a.constant = !1, a.toWatch = [a];
          break;
        case Xe.MemberExpression:
          _b(a.object, b), a.computed && _b(a.property, b), a.constant = a.object.constant && (!a.computed || a.property.constant), a.toWatch = [a];
          break;
        case Xe.CallExpression:
          c = a.filter ? $b(b, a.callee.name) : !1, d = [], f(a.arguments, function(a) {
            _b(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch)
          }), a.constant = c, a.toWatch = a.filter && $b(b, a.callee.name) ? d : [a];
          break;
        case Xe.AssignmentExpression:
          _b(a.left, b), _b(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = [a];
          break;
        case Xe.ArrayExpression:
          c = !0, d = [], f(a.elements, function(a) {
            _b(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch)
          }), a.constant = c, a.toWatch = d;
          break;
        case Xe.ObjectExpression:
          c = !0, d = [], f(a.properties, function(a) {
            _b(a.value, b), c = c && a.value.constant, a.value.constant || d.push.apply(d, a.value.toWatch)
          }), a.constant = c, a.toWatch = d;
          break;
        case Xe.ThisExpression:
          a.constant = !1, a.toWatch = []
      }
    }

    function ac(a) {
      if (1 == a.length) {
        var b = a[0].expression,
          d = b.toWatch;
        return 1 !== d.length ? d : d[0] !== b ? d : c
      }
    }

    function bc(a) {
      return a.type === Xe.Identifier || a.type === Xe.MemberExpression
    }

    function cc(a) {
      return 1 === a.body.length && bc(a.body[0].expression) ? {
        type: Xe.AssignmentExpression,
        left: a.body[0].expression,
        right: {
          type: Xe.NGValueParameter
        },
        operator: "="
      } : void 0
    }

    function dc(a) {
      return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === Xe.Literal || a.body[0].expression.type === Xe.ArrayExpression || a.body[0].expression.type === Xe.ObjectExpression)
    }

    function ec(a) {
      return a.constant
    }

    function fc(a, b) {
      this.astBuilder = a, this.$filter = b
    }

    function gc(a, b) {
      this.astBuilder = a, this.$filter = b
    }

    function hc(a, b, c, d) {
      Wb(a, d);
      for (var e, f = b.split("."), g = 0; f.length > 1; g++) {
        e = Vb(f.shift(), d);
        var h = Wb(a[e], d);
        h || (h = {}, a[e] = h), a = h
      }
      return e = Vb(f.shift(), d), Wb(a[e], d), a[e] = c, c
    }

    function ic(a) {
      return "constructor" == a
    }

    function jc(a) {
      return A(a.valueOf) ? a.valueOf() : Ze.call(a)
    }

    function kc() {
      var a = qa(),
        b = qa();
      this.$get = ["$filter", "$sniffer", function(d, e) {
        function g(a, b) {
          return null == a || null == b ? a === b : "object" == typeof a && (a = jc(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b
        }

        function h(a, b, d, e, f) {
          var h, i = e.inputs;
          if (1 === i.length) {
            var j = g;
            return i = i[0], a.$watch(function(a) {
              var b = i(a);
              return g(b, j) || (h = e(a, c, c, [b]), j = b && jc(b)), h
            }, b, d, f)
          }
          for (var k = [], l = [], m = 0, n = i.length; n > m; m++) k[m] = g, l[m] = null;
          return a.$watch(function(a) {
            for (var b = !1, d = 0, f = i.length; f > d; d++) {
              var j = i[d](a);
              (b || (b = !g(j, k[d]))) && (l[d] = j, k[d] = j && jc(j))
            }
            return b && (h = e(a, c, c, l)), h
          }, b, d, f)
        }

        function i(a, b, c, d) {
          var e, f;
          return e = a.$watch(function(a) {
            return d(a)
          }, function(a, c, d) {
            f = a, A(b) && b.apply(this, arguments), u(a) && d.$$postDigest(function() {
              u(f) && e()
            })
          }, c)
        }

        function j(a, b, c, d) {
          function e(a) {
            var b = !0;
            return f(a, function(a) {
              u(a) || (b = !1)
            }), b
          }
          var g, h;
          return g = a.$watch(function(a) {
            return d(a)
          }, function(a, c, d) {
            h = a, A(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function() {
              e(h) && g()
            })
          }, c)
        }

        function k(a, b, c, d) {
          var e;
          return e = a.$watch(function(a) {
            return d(a)
          }, function(a, c, d) {
            A(b) && b.apply(this, arguments), e()
          }, c)
        }

        function l(a, b) {
          if (!b) return a;
          var c = a.$$watchDelegate,
            d = c !== j && c !== i,
            e = d ? function(c, d, e, f) {
              var g = a(c, d, e, f);
              return b(g, c, d)
            } : function(c, d, e, f) {
              var g = a(c, d, e, f),
                h = b(g, c, d);
              return u(g) ? h : g
            };
          return a.$$watchDelegate && a.$$watchDelegate !== h ? e.$$watchDelegate = a.$$watchDelegate : b.$stateful || (e.$$watchDelegate = h, e.inputs = a.inputs ? a.inputs : [a]), e
        }
        var m = {
            csp: e.csp,
            expensiveChecks: !1
          },
          n = {
            csp: e.csp,
            expensiveChecks: !0
          };
        return function(c, e, f) {
          var g, o, q;
          switch (typeof c) {
            case "string":
              c = c.trim(), q = c;
              var r = f ? b : a;
              if (g = r[q], !g) {
                ":" === c.charAt(0) && ":" === c.charAt(1) && (o = !0, c = c.substring(2));
                var s = f ? n : m,
                  t = new We(s),
                  u = new Ye(t, d, s);
                g = u.parse(c), g.constant ? g.$$watchDelegate = k : o ? g.$$watchDelegate = g.literal ? j : i : g.inputs && (g.$$watchDelegate = h), r[q] = g
              }
              return l(g, e);
            case "function":
              return l(c, e);
            default:
              return p
          }
        }
      }]
    }

    function lc() {
      this.$get = ["$rootScope", "$exceptionHandler", function(a, b) {
        return nc(function(b) {
          a.$evalAsync(b)
        }, b)
      }]
    }

    function mc() {
      this.$get = ["$browser", "$exceptionHandler", function(a, b) {
        return nc(function(b) {
          a.defer(b)
        }, b)
      }]
    }

    function nc(a, b) {
      function e(a, b, c) {
        function d(b) {
          return function(c) {
            e || (e = !0, b.call(a, c))
          }
        }
        var e = !1;
        return [d(b), d(c)]
      }

      function g() {
        this.$$state = {
          status: 0
        }
      }

      function h(a, b) {
        return function(c) {
          b.call(a, c)
        }
      }

      function i(a) {
        var d, e, f;
        f = a.pending, a.processScheduled = !1, a.pending = c;
        for (var g = 0, h = f.length; h > g; ++g) {
          e = f[g][0], d = f[g][a.status];
          try {
            A(d) ? e.resolve(d(a.value)) : 1 === a.status ? e.resolve(a.value) : e.reject(a.value)
          } catch (i) {
            e.reject(i), b(i)
          }
        }
      }

      function j(b) {
        !b.processScheduled && b.pending && (b.processScheduled = !0, a(function() {
          i(b)
        }))
      }

      function k() {
        this.promise = new g, this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), this.notify = h(this, this.notify)
      }

      function l(a) {
        var b = new k,
          c = 0,
          d = Ld(a) ? [] : {};
        return f(a, function(a, e) {
          c++, r(a).then(function(a) {
            d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
          }, function(a) {
            d.hasOwnProperty(e) || b.reject(a)
          })
        }), 0 === c && b.resolve(d), b.promise
      }
      var m = d("$q", TypeError),
        n = function() {
          return new k
        };
      g.prototype = {
        then: function(a, b, c) {
          var d = new k;
          return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), this.$$state.status > 0 && j(this.$$state), d.promise
        },
        "catch": function(a) {
          return this.then(null, a)
        },
        "finally": function(a, b) {
          return this.then(function(b) {
            return q(b, !0, a)
          }, function(b) {
            return q(b, !1, a)
          }, b)
        }
      }, k.prototype = {
        resolve: function(a) {
          this.promise.$$state.status || (a === this.promise ? this.$$reject(m("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a))
        },
        $$resolve: function(a) {
          var c, d;
          d = e(this, this.$$resolve, this.$$reject);
          try {
            (v(a) || A(a)) && (c = a && a.then), A(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, j(this.promise.$$state))
          } catch (f) {
            d[1](f), b(f)
          }
        },
        reject: function(a) {
          this.promise.$$state.status || this.$$reject(a)
        },
        $$reject: function(a) {
          this.promise.$$state.value = a, this.promise.$$state.status = 2, j(this.promise.$$state)
        },
        notify: function(c) {
          var d = this.promise.$$state.pending;
          this.promise.$$state.status <= 0 && d && d.length && a(function() {
            for (var a, e, f = 0, g = d.length; g > f; f++) {
              e = d[f][0], a = d[f][3];
              try {
                e.notify(A(a) ? a(c) : c)
              } catch (h) {
                b(h)
              }
            }
          })
        }
      };
      var o = function(a) {
          var b = new k;
          return b.reject(a), b.promise
        },
        p = function(a, b) {
          var c = new k;
          return b ? c.resolve(a) : c.reject(a), c.promise
        },
        q = function(a, b, c) {
          var d = null;
          try {
            A(c) && (d = c())
          } catch (e) {
            return p(e, !1)
          }
          return I(d) ? d.then(function() {
            return p(a, b)
          }, function(a) {
            return p(a, !1)
          }) : p(a, b)
        },
        r = function(a, b, c, d) {
          var e = new k;
          return e.resolve(a), e.promise.then(b, c, d)
        },
        s = r,
        t = function u(a) {
          function b(a) {
            d.resolve(a)
          }

          function c(a) {
            d.reject(a)
          }
          if (!A(a)) throw m("norslvr", "Expected resolverFn, got '{0}'", a);
          if (!(this instanceof u)) return new u(a);
          var d = new k;
          return a(b, c), d.promise
        };
      return t.defer = n, t.reject = o, t.when = r, t.resolve = s, t.all = l, t
    }

    function oc() {
      this.$get = ["$window", "$timeout", function(a, b) {
        function c() {
          for (var a = 0; a < k.length; a++) {
            var b = k[a];
            b && (k[a] = null, b())
          }
          j = k.length = 0
        }

        function d(a) {
          var b = k.length;
          return j++, k.push(a), 0 === b && (i = h(c)),
            function() {
              b >= 0 && (k[b] = null, b = null, 0 === --j && i && (i(), i = null, k.length = 0))
            }
        }
        var e = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
          f = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
          g = !!e,
          h = g ? function(a) {
            var b = e(a);
            return function() {
              f(b)
            }
          } : function(a) {
            var c = b(a, 16.66, !1);
            return function() {
              b.cancel(c)
            }
          };
        d.supported = g;
        var i, j = 0,
          k = [];
        return d
      }]
    }

    function pc() {
      function a(a) {
        function b() {
          this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = i(), this.$$ChildScope = null
        }
        return b.prototype = a, b
      }
      var b = 10,
        c = d("$rootScope"),
        g = null,
        h = null;
      this.digestTtl = function(a) {
        return arguments.length && (b = a), b
      }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(d, j, k, l) {
        function m(a) {
          a.currentScope.$$destroyed = !0
        }

        function n() {
          this.$id = i(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
        }

        function o(a) {
          if (y.$$phase) throw c("inprog", "{0} already in progress", y.$$phase);
          y.$$phase = a
        }

        function q() {
          y.$$phase = null
        }

        function r(a, b) {
          do a.$$watchersCount += b; while (a = a.$parent)
        }

        function s(a, b, c) {
          do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
        }

        function u() {}

        function w() {
          for (; C.length;) try {
            C.shift()()
          } catch (a) {
            j(a)
          }
          h = null
        }

        function x() {
          null === h && (h = l.defer(function() {
            y.$apply(w)
          }))
        }
        n.prototype = {
          constructor: n,
          $new: function(b, c) {
            var d;
            return c = c || this, b ? (d = new n, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope), d.$parent = c, d.$$prevSibling = c.$$childTail, c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d, (b || c != this) && d.$on("$destroy", m), d
          },
          $watch: function(a, b, c, d) {
            var e = k(a);
            if (e.$$watchDelegate) return e.$$watchDelegate(this, b, c, e, a);
            var f = this,
              h = f.$$watchers,
              i = {
                fn: b,
                last: u,
                get: e,
                exp: d || a,
                eq: !!c
              };
            return g = null, A(b) || (i.fn = p), h || (h = f.$$watchers = []), h.unshift(i), r(this, 1),
              function() {
                N(h, i) >= 0 && r(f, -1), g = null
              }
          },
          $watchGroup: function(a, b) {
            function c() {
              i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h)
            }
            var d = new Array(a.length),
              e = new Array(a.length),
              g = [],
              h = this,
              i = !1,
              j = !0;
            if (!a.length) {
              var k = !0;
              return h.$evalAsync(function() {
                  k && b(e, e, h)
                }),
                function() {
                  k = !1
                }
            }
            return 1 === a.length ? this.$watch(a[0], function(a, c, f) {
              e[0] = a, d[0] = c, b(e, a === c ? e : d, f)
            }) : (f(a, function(a, b) {
              var f = h.$watch(a, function(a, f) {
                e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c))
              });
              g.push(f)
            }), function() {
              for (; g.length;) g.shift()()
            })
          },
          $watchCollection: function(a, b) {
            function c(a) {
              f = a;
              var b, c, d, h, i;
              if (!t(f)) {
                if (v(f))
                  if (e(f)) {
                    g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++, g.length = q = b);
                    for (var j = 0; b > j; j++) i = g[j], h = f[j], d = i !== i && h !== h, d || i === h || (l++, g[j] = h)
                  } else {
                    g !== o && (g = o = {}, q = 0, l++), b = 0;
                    for (c in f) f.hasOwnProperty(c) && (b++, h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, d || i === h || (l++, g[c] = h)) : (q++, g[c] = h, l++));
                    if (q > b) {
                      l++;
                      for (c in g) f.hasOwnProperty(c) || (q--, delete g[c])
                    }
                  } else g !== f && (g = f, l++);
                return l
              }
            }

            function d() {
              if (p ? (p = !1, b(f, f, i)) : b(f, h, i), j)
                if (v(f))
                  if (e(f)) {
                    h = new Array(f.length);
                    for (var a = 0; a < f.length; a++) h[a] = f[a]
                  } else {
                    h = {};
                    for (var c in f) ud.call(f, c) && (h[c] = f[c])
                  } else h = f
            }
            c.$stateful = !0;
            var f, g, h, i = this,
              j = b.length > 1,
              l = 0,
              m = k(a, c),
              n = [],
              o = {},
              p = !0,
              q = 0;
            return this.$watch(m, d)
          },
          $digest: function() {
            var a, d, e, f, i, k, m, n, p, r, s = b,
              t = this,
              v = [];
            o("$digest"), l.$$checkUrlChange(), this === y && null !== h && (l.defer.cancel(h), w()), g = null;
            do {
              for (k = !1, n = t; z.length;) {
                try {
                  r = z.shift(), r.scope.$eval(r.expression, r.locals)
                } catch (x) {
                  j(x)
                }
                g = null
              }
              a: do {
                if (f = n.$$watchers)
                  for (i = f.length; i--;) try {
                    if (a = f[i])
                      if ((d = a.get(n)) === (e = a.last) || (a.eq ? Q(d, e) : "number" == typeof d && "number" == typeof e && isNaN(d) && isNaN(e))) {
                        if (a === g) {
                          k = !1;
                          break a
                        }
                      } else k = !0, g = a, a.last = a.eq ? O(d, null) : d, a.fn(d, e === u ? d : e, n), 5 > s && (p = 4 - s, v[p] || (v[p] = []), v[p].push({
                        msg: A(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                        newVal: d,
                        oldVal: e
                      }))
                  } catch (x) {
                    j(x)
                  }
                if (!(m = n.$$watchersCount && n.$$childHead || n !== t && n.$$nextSibling))
                  for (; n !== t && !(m = n.$$nextSibling);) n = n.$parent
              } while (n = m);
              if ((k || z.length) && !s--) throw q(), c("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", b, v)
            } while (k || z.length);
            for (q(); B.length;) try {
              B.shift()()
            } catch (x) {
              j(x)
            }
          },
          $destroy: function() {
            if (!this.$$destroyed) {
              var a = this.$parent;
              this.$broadcast("$destroy"), this.$$destroyed = !0, this === y && l.$$applicationDestroyed(), r(this, -this.$$watchersCount);
              for (var b in this.$$listenerCount) s(this, this.$$listenerCount[b], b);
              a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function() {
                return p
              }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
            }
          },
          $eval: function(a, b) {
            return k(a)(this, b)
          },
          $evalAsync: function(a, b) {
            y.$$phase || z.length || l.defer(function() {
              z.length && y.$digest()
            }), z.push({
              scope: this,
              expression: a,
              locals: b
            })
          },
          $$postDigest: function(a) {
            B.push(a)
          },
          $apply: function(a) {
            try {
              return o("$apply"), this.$eval(a)
            } catch (b) {
              j(b)
            } finally {
              q();
              try {
                y.$digest()
              } catch (b) {
                throw j(b), b
              }
            }
          },
          $applyAsync: function(a) {
            function b() {
              c.$eval(a)
            }
            var c = this;
            a && C.push(b), x()
          },
          $on: function(a, b) {
            var c = this.$$listeners[a];
            c || (this.$$listeners[a] = c = []), c.push(b);
            var d = this;
            do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
            var e = this;
            return function() {
              var d = c.indexOf(b); - 1 !== d && (c[d] = null, s(e, 1, a))
            }
          },
          $emit: function(a, b) {
            var c, d, e, f = [],
              g = this,
              h = !1,
              i = {
                name: a,
                targetScope: g,
                stopPropagation: function() {
                  h = !0
                },
                preventDefault: function() {
                  i.defaultPrevented = !0
                },
                defaultPrevented: !1
              },
              k = R([i], arguments, 1);
            do {
              for (c = g.$$listeners[a] || f, i.currentScope = g, d = 0, e = c.length; e > d; d++)
                if (c[d]) try {
                  c[d].apply(null, k)
                } catch (l) {
                  j(l)
                } else c.splice(d, 1), d--, e--;
              if (h) return i.currentScope = null, i;
              g = g.$parent
            } while (g);
            return i.currentScope = null, i
          },
          $broadcast: function(a, b) {
            var c = this,
              d = c,
              e = c,
              f = {
                name: a,
                targetScope: c,
                preventDefault: function() {
                  f.defaultPrevented = !0
                },
                defaultPrevented: !1
              };
            if (!c.$$listenerCount[a]) return f;
            for (var g, h, i, k = R([f], arguments, 1); d = e;) {
              for (f.currentScope = d, g = d.$$listeners[a] || [], h = 0, i = g.length; i > h; h++)
                if (g[h]) try {
                  g[h].apply(null, k)
                } catch (l) {
                  j(l)
                } else g.splice(h, 1), h--, i--;
              if (!(e = d.$$listenerCount[a] && d.$$childHead || d !== c && d.$$nextSibling))
                for (; d !== c && !(e = d.$$nextSibling);) d = d.$parent
            }
            return f.currentScope = null, f
          }
        };
        var y = new n,
          z = y.$$asyncQueue = [],
          B = y.$$postDigestQueue = [],
          C = y.$$applyAsyncQueue = [];
        return y
      }]
    }

    function qc() {
      var a = /^\s*(https?|ftp|mailto|tel|file):/,
        b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
      this.aHrefSanitizationWhitelist = function(b) {
        return u(b) ? (a = b, this) : a
      }, this.imgSrcSanitizationWhitelist = function(a) {
        return u(a) ? (b = a, this) : b
      }, this.$get = function() {
        return function(c, d) {
          var e, f = d ? b : a;
          return e = zc(c).href, "" === e || e.match(f) ? c : "unsafe:" + e
        }
      }
    }

    function rc(a) {
      if ("self" === a) return a;
      if (x(a)) {
        if (a.indexOf("***") > -1) throw $e("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
        return a = Od(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
      }
      if (B(a)) return new RegExp("^" + a.source + "$");
      throw $e("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function sc(a) {
      var b = [];
      return u(a) && f(a, function(a) {
        b.push(rc(a))
      }), b
    }

    function tc() {
      this.SCE_CONTEXTS = _e;
      var a = ["self"],
        b = [];
      this.resourceUrlWhitelist = function(b) {
        return arguments.length && (a = sc(b)), a
      }, this.resourceUrlBlacklist = function(a) {
        return arguments.length && (b = sc(a)), b
      }, this.$get = ["$injector", function(d) {
        function e(a, b) {
          return "self" === a ? Ac(b) : !!a.exec(b.href)
        }

        function f(c) {
          var d, f, g = zc(c.toString()),
            h = !1;
          for (d = 0, f = a.length; f > d; d++)
            if (e(a[d], g)) {
              h = !0;
              break
            }
          if (h)
            for (d = 0, f = b.length; f > d; d++)
              if (e(b[d], g)) {
                h = !1;
                break
              }
          return h
        }

        function g(a) {
          var b = function(a) {
            this.$$unwrapTrustedValue = function() {
              return a
            }
          };
          return a && (b.prototype = new a), b.prototype.valueOf = function() {
            return this.$$unwrapTrustedValue()
          }, b.prototype.toString = function() {
            return this.$$unwrapTrustedValue().toString()
          }, b
        }

        function h(a, b) {
          var d = m.hasOwnProperty(a) ? m[a] : null;
          if (!d) throw $e("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
          if (null === b || b === c || "" === b) return b;
          if ("string" != typeof b) throw $e("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
          return new d(b)
        }

        function i(a) {
          return a instanceof l ? a.$$unwrapTrustedValue() : a
        }

        function j(a, b) {
          if (null === b || b === c || "" === b) return b;
          var d = m.hasOwnProperty(a) ? m[a] : null;
          if (d && b instanceof d) return b.$$unwrapTrustedValue();
          if (a === _e.RESOURCE_URL) {
            if (f(b)) return b;
            throw $e("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
          }
          if (a === _e.HTML) return k(b);
          throw $e("unsafe", "Attempting to use an unsafe value in a safe context.")
        }
        var k = function(a) {
          throw $e("unsafe", "Attempting to use an unsafe value in a safe context.")
        };
        d.has("$sanitize") && (k = d.get("$sanitize"));
        var l = g(),
          m = {};
        return m[_e.HTML] = g(l), m[_e.CSS] = g(l), m[_e.URL] = g(l), m[_e.JS] = g(l), m[_e.RESOURCE_URL] = g(m[_e.URL]), {
          trustAs: h,
          getTrusted: j,
          valueOf: i
        }
      }]
    }

    function uc() {
      var a = !0;
      this.enabled = function(b) {
        return arguments.length && (a = !!b), a
      }, this.$get = ["$parse", "$sceDelegate", function(b, c) {
        if (a && 8 > yd) throw $e("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
        var d = P(_e);
        d.isEnabled = function() {
          return a
        }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, a || (d.trustAs = d.getTrusted = function(a, b) {
          return b
        }, d.valueOf = q), d.parseAs = function(a, c) {
          var e = b(c);
          return e.literal && e.constant ? e : b(c, function(b) {
            return d.getTrusted(a, b)
          })
        };
        var e = d.parseAs,
          g = d.getTrusted,
          h = d.trustAs;
        return f(_e, function(a, b) {
          var c = td(b);
          d[wa("parse_as_" + c)] = function(b) {
            return e(a, b)
          }, d[wa("get_trusted_" + c)] = function(b) {
            return g(a, b)
          }, d[wa("trust_as_" + c)] = function(b) {
            return h(a, b)
          }
        }), d
      }]
    }

    function vc() {
      this.$get = ["$window", "$document", function(a, b) {
        var c, d, e = {},
          f = n((/android (\d+)/.exec(td((a.navigator || {}).userAgent)) || [])[1]),
          g = /Boxee/i.test((a.navigator || {}).userAgent),
          h = b[0] || {},
          i = /^(Moz|webkit|ms)(?=[A-Z])/,
          j = h.body && h.body.style,
          k = !1,
          l = !1;
        if (j) {
          for (var m in j)
            if (d = i.exec(m)) {
              c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
              break
            }
          c || (c = "WebkitOpacity" in j && "webkit"), k = !!("transition" in j || c + "Transition" in j), l = !!("animation" in j || c + "Animation" in j), !f || k && l || (k = x(j.webkitTransition), l = x(j.webkitAnimation))
        }
        return {
          history: !(!a.history || !a.history.pushState || 4 > f || g),
          hasEvent: function(a) {
            if ("input" === a && 11 >= yd) return !1;
            if (t(e[a])) {
              var b = h.createElement("div");
              e[a] = "on" + a in b
            }
            return e[a]
          },
          csp: Pd(),
          vendorPrefix: c,
          transitions: k,
          animations: l,
          android: f
        }
      }]
    }

    function wc() {
      this.$get = ["$templateCache", "$http", "$q", "$sce", function(a, b, c, d) {
        function e(f, g) {
          function h(a) {
            if (!g) throw Ce("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", f, a.status, a.statusText);
            return c.reject(a)
          }
          e.totalPendingRequests++, x(f) && a.get(f) || (f = d.getTrustedResourceUrl(f));
          var i = b.defaults && b.defaults.transformResponse;
          Ld(i) ? i = i.filter(function(a) {
            return a !== tb
          }) : i === tb && (i = null);
          var j = {
            cache: a,
            transformResponse: i
          };
          return b.get(f, j)["finally"](function() {
            e.totalPendingRequests--
          }).then(function(b) {
            return a.put(f, b.data), b.data
          }, h)
        }
        return e.totalPendingRequests = 0, e
      }]
    }

    function xc() {
      this.$get = ["$rootScope", "$browser", "$location", function(a, b, c) {
        var d = {};
        return d.findBindings = function(a, b, c) {
          var d = a.getElementsByClassName("ng-binding"),
            e = [];
          return f(d, function(a) {
            var d = Id.element(a).data("$binding");
            d && f(d, function(d) {
              if (c) {
                var f = new RegExp("(^|\\s)" + Od(b) + "(\\s|\\||$)");
                f.test(d) && e.push(a)
              } else -1 != d.indexOf(b) && e.push(a)
            })
          }), e
        }, d.findModels = function(a, b, c) {
          for (var d = ["ng-", "data-ng-", "ng\\:"], e = 0; e < d.length; ++e) {
            var f = c ? "=" : "*=",
              g = "[" + d[e] + "model" + f + '"' + b + '"]',
              h = a.querySelectorAll(g);
            if (h.length) return h
          }
        }, d.getLocation = function() {
          return c.url()
        }, d.setLocation = function(b) {
          b !== c.url() && (c.url(b), a.$digest())
        }, d.whenStable = function(a) {
          b.notifyWhenNoOutstandingRequests(a)
        }, d
      }]
    }

    function yc() {
      this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, c, d, e) {
        function f(f, h, i) {
          A(f) || (i = h, h = f, f = p);
          var j, k = S(arguments, 3),
            l = u(i) && !i,
            m = (l ? d : c).defer(),
            n = m.promise;
          return j = b.defer(function() {
            try {
              m.resolve(f.apply(null, k))
            } catch (b) {
              m.reject(b), e(b)
            } finally {
              delete g[n.$$timeoutId]
            }
            l || a.$apply()
          }, h), n.$$timeoutId = j, g[j] = m, n
        }
        var g = {};
        return f.cancel = function(a) {
          return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
        }, f
      }]
    }

    function zc(a) {
      var b = a;
      return yd && (af.setAttribute("href", b), b = af.href), af.setAttribute("href", b), {
        href: af.href,
        protocol: af.protocol ? af.protocol.replace(/:$/, "") : "",
        host: af.host,
        search: af.search ? af.search.replace(/^\?/, "") : "",
        hash: af.hash ? af.hash.replace(/^#/, "") : "",
        hostname: af.hostname,
        port: af.port,
        pathname: "/" === af.pathname.charAt(0) ? af.pathname : "/" + af.pathname
      }
    }

    function Ac(a) {
      var b = x(a) ? zc(a) : a;
      return b.protocol === bf.protocol && b.host === bf.host
    }

    function Bc() {
      this.$get = r(a)
    }

    function Cc(a) {
      function b(a) {
        try {
          return decodeURIComponent(a)
        } catch (b) {
          return a
        }
      }
      var d = a[0] || {},
        e = {},
        f = "";
      return function() {
        var a, g, h, i, j, k = d.cookie || "";
        if (k !== f)
          for (f = k, a = f.split("; "), e = {}, h = 0; h < a.length; h++) g = a[h], i = g.indexOf("="), i > 0 && (j = b(g.substring(0, i)), e[j] === c && (e[j] = b(g.substring(i + 1))));
        return e
      }
    }

    function Dc() {
      this.$get = Cc
    }

    function Ec(a) {
      function b(d, e) {
        if (v(d)) {
          var g = {};
          return f(d, function(a, c) {
            g[c] = b(c, a)
          }), g
        }
        return a.factory(d + c, e)
      }
      var c = "Filter";
      this.register = b, this.$get = ["$injector", function(a) {
        return function(b) {
          return a.get(b + c)
        }
      }], b("currency", Jc), b("date", Wc), b("filter", Fc), b("json", Xc), b("limitTo", Yc), b("lowercase", gf), b("number", Kc), b("orderBy", Zc), b("uppercase", hf)
    }

    function Fc() {
      return function(a, b, c) {
        if (!e(a)) {
          if (null == a) return a;
          throw d("filter")("notarray", "Expected array but received: {0}", a)
        }
        var f, g, h = Ic(b);
        switch (h) {
          case "function":
            f = b;
            break;
          case "boolean":
          case "null":
          case "number":
          case "string":
            g = !0;
          case "object":
            f = Gc(b, c, g);
            break;
          default:
            return a
        }
        return Array.prototype.filter.call(a, f)
      }
    }

    function Gc(a, b, c) {
      var d, e = v(a) && "$" in a;
      return b === !0 ? b = Q : A(b) || (b = function(a, b) {
        return t(a) ? !1 : null === a || null === b ? a === b : v(b) || v(a) && !s(a) ? !1 : (a = td("" + a), b = td("" + b), -1 !== a.indexOf(b))
      }), d = function(d) {
        return e && !v(d) ? Hc(d, a.$, b, !1) : Hc(d, a, b, c)
      }
    }

    function Hc(a, b, c, d, e) {
      var f = Ic(a),
        g = Ic(b);
      if ("string" === g && "!" === b.charAt(0)) return !Hc(a, b.substring(1), c, d);
      if (Ld(a)) return a.some(function(a) {
        return Hc(a, b, c, d)
      });
      switch (f) {
        case "object":
          var h;
          if (d) {
            for (h in a)
              if ("$" !== h.charAt(0) && Hc(a[h], b, c, !0)) return !0;
            return e ? !1 : Hc(a, b, c, !1)
          }
          if ("object" === g) {
            for (h in b) {
              var i = b[h];
              if (!A(i) && !t(i)) {
                var j = "$" === h,
                  k = j ? a : a[h];
                if (!Hc(k, i, c, j, j)) return !1
              }
            }
            return !0
          }
          return c(a, b);
        case "function":
          return !1;
        default:
          return c(a, b)
      }
    }

    function Ic(a) {
      return null === a ? "null" : typeof a
    }

    function Jc(a) {
      var b = a.NUMBER_FORMATS;
      return function(a, c, d) {
        return t(c) && (c = b.CURRENCY_SYM), t(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : Lc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
      }
    }

    function Kc(a) {
      var b = a.NUMBER_FORMATS;
      return function(a, c) {
        return null == a ? a : Lc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
      }
    }

    function Lc(a, b, c, d, e) {
      if (v(a)) return "";
      var f = 0 > a;
      a = Math.abs(a);
      var g = a === 1 / 0;
      if (!g && !isFinite(a)) return "";
      var h = a + "",
        i = "",
        j = !1,
        k = [];
      if (g && (i = "∞"), !g && -1 !== h.indexOf("e")) {
        var l = h.match(/([\d\.]+)e(-?)(\d+)/);
        l && "-" == l[2] && l[3] > e + 1 ? a = 0 : (i = h, j = !0)
      }
      if (g || j) e > 0 && 1 > a && (i = a.toFixed(e), a = parseFloat(i));
      else {
        var m = (h.split(cf)[1] || "").length;
        t(e) && (e = Math.min(Math.max(b.minFrac, m), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
        var n = ("" + a).split(cf),
          o = n[0];
        n = n[1] || "";
        var p, q = 0,
          r = b.lgSize,
          s = b.gSize;
        if (o.length >= r + s)
          for (q = o.length - r, p = 0; q > p; p++)(q - p) % s === 0 && 0 !== p && (i += c), i += o.charAt(p);
        for (p = q; p < o.length; p++)(o.length - p) % r === 0 && 0 !== p && (i += c), i += o.charAt(p);
        for (; n.length < e;) n += "0";
        e && "0" !== e && (i += d + n.substr(0, e))
      }
      return 0 === a && (f = !1), k.push(f ? b.negPre : b.posPre, i, f ? b.negSuf : b.posSuf), k.join("")
    }

    function Mc(a, b, c) {
      var d = "";
      for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
      return c && (a = a.substr(a.length - b)), d + a
    }

    function Nc(a, b, c, d) {
      return c = c || 0,
        function(e) {
          var f = e["get" + a]();
          return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Mc(f, b, d)
        }
    }

    function Oc(a, b) {
      return function(c, d) {
        var e = c["get" + a](),
          f = vd(b ? "SHORT" + a : a);
        return d[f][e]
      }
    }

    function Pc(a, b, c) {
      var d = -1 * c,
        e = d >= 0 ? "+" : "";
      return e += Mc(Math[d > 0 ? "floor" : "ceil"](d / 60), 2) + Mc(Math.abs(d % 60), 2)
    }

    function Qc(a) {
      var b = new Date(a, 0, 1).getDay();
      return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }

    function Rc(a) {
      return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()))
    }

    function Sc(a) {
      return function(b) {
        var c = Qc(b.getFullYear()),
          d = Rc(b),
          e = +d - +c,
          f = 1 + Math.round(e / 6048e5);
        return Mc(f, a)
      }
    }

    function Tc(a, b) {
      return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
    }

    function Uc(a, b) {
      return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1]
    }

    function Vc(a, b) {
      return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1]
    }

    function Wc(a) {
      function b(a) {
        var b;
        if (b = a.match(c)) {
          var d = new Date(0),
            e = 0,
            f = 0,
            g = b[8] ? d.setUTCFullYear : d.setFullYear,
            h = b[8] ? d.setUTCHours : d.setHours;
          b[9] && (e = n(b[9] + b[10]), f = n(b[9] + b[11])), g.call(d, n(b[1]), n(b[2]) - 1, n(b[3]));
          var i = n(b[4] || 0) - e,
            j = n(b[5] || 0) - f,
            k = n(b[6] || 0),
            l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
          return h.call(d, i, j, k, l), d
        }
        return a
      }
      var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
      return function(c, d, e) {
        var g, h, i = "",
          j = [];
        if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, x(c) && (c = ff.test(c) ? n(c) : b(c)), y(c) && (c = new Date(c)), !z(c) || !isFinite(c.getTime())) return c;
        for (; d;) h = ef.exec(d), h ? (j = R(j, h, 1), d = j.pop()) : (j.push(d), d = null);
        var k = c.getTimezoneOffset();
        return e && (k = X(e, c.getTimezoneOffset()), c = Z(c, e, !0)), f(j, function(b) {
          g = df[b], i += g ? g(c, a.DATETIME_FORMATS, k) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
        }), i
      }
    }

    function Xc() {
      return function(a, b) {
        return t(b) && (b = 2), V(a, b)
      }
    }

    function Yc() {
      return function(a, b, c) {
        return b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : n(b), isNaN(b) ? a : (y(a) && (a = a.toString()), Ld(a) || x(a) ? (c = !c || isNaN(c) ? 0 : n(c), c = 0 > c && c >= -a.length ? a.length + c : c, b >= 0 ? a.slice(c, c + b) : 0 === c ? a.slice(b, a.length) : a.slice(Math.max(0, c + b), c)) : a)
      }
    }

    function Zc(a) {
      function b(b, c) {
        return c = c ? -1 : 1, b.map(function(b) {
          var d = 1,
            e = q;
          if (A(b)) e = b;
          else if (x(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (d = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1)), "" !== b && (e = a(b), e.constant))) {
            var f = e();
            e = function(a) {
              return a[f]
            }
          }
          return {
            get: e,
            descending: d * c
          }
        })
      }

      function c(a) {
        switch (typeof a) {
          case "number":
          case "boolean":
          case "string":
            return !0;
          default:
            return !1
        }
      }

      function d(a, b) {
        return "function" == typeof a.valueOf && (a = a.valueOf(), c(a)) ? a : s(a) && (a = a.toString(), c(a)) ? a : b
      }

      function f(a, b) {
        var c = typeof a;
        return null === a ? (c = "string", a = "null") : "string" === c ? a = a.toLowerCase() : "object" === c && (a = d(a, b)), {
          value: a,
          type: c
        }
      }

      function g(a, b) {
        var c = 0;
        return a.type === b.type ? a.value !== b.value && (c = a.value < b.value ? -1 : 1) : c = a.type < b.type ? -1 : 1, c
      }
      return function(a, c, d) {
        function h(a, b) {
          return {
            value: a,
            predicateValues: j.map(function(c) {
              return f(c.get(a), b)
            })
          }
        }

        function i(a, b) {
          for (var c = 0, d = 0, e = j.length; e > d && !(c = g(a.predicateValues[d], b.predicateValues[d]) * j[d].descending); ++d);
          return c
        }
        if (!e(a)) return a;
        Ld(c) || (c = [c]), 0 === c.length && (c = ["+"]);
        var j = b(c, d),
          k = Array.prototype.map.call(a, h);
        return k.sort(i), a = k.map(function(a) {
          return a.value
        })
      }
    }

    function $c(a) {
      return A(a) && (a = {
        link: a
      }), a.restrict = a.restrict || "AC", r(a)
    }

    function _c(a, b) {
      a.$name = b
    }

    function ad(a, b, d, e, g) {
      var h = this,
        i = [],
        j = h.$$parentForm = a.parent().controller("form") || lf;
      h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, j.$addControl(h), h.$rollbackViewValue = function() {
        f(i, function(a) {
          a.$rollbackViewValue()
        })
      }, h.$commitViewValue = function() {
        f(i, function(a) {
          a.$commitViewValue()
        })
      }, h.$addControl = function(a) {
        na(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a)
      }, h.$$renameControl = function(a, b) {
        var c = a.$name;
        h[c] === a && delete h[c], h[b] = a, a.$name = b
      }, h.$removeControl = function(a) {
        a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function(b, c) {
          h.$setValidity(c, null, a)
        }), f(h.$error, function(b, c) {
          h.$setValidity(c, null, a)
        }), f(h.$$success, function(b, c) {
          h.$setValidity(c, null, a)
        }), N(i, a)
      }, pd({
        ctrl: this,
        $element: a,
        set: function(a, b, c) {
          var d = a[b];
          if (d) {
            var e = d.indexOf(c); - 1 === e && d.push(c)
          } else a[b] = [c]
        },
        unset: function(a, b, c) {
          var d = a[b];
          d && (N(d, c), 0 === d.length && delete a[b])
        },
        parentForm: j,
        $animate: e
      }), h.$setDirty = function() {
        e.removeClass(a, Vf), e.addClass(a, Wf), h.$dirty = !0, h.$pristine = !1, j.$setDirty()
      }, h.$setPristine = function() {
        e.setClass(a, Vf, Wf + " " + mf), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, f(i, function(a) {
          a.$setPristine()
        })
      }, h.$setUntouched = function() {
        f(i, function(a) {
          a.$setUntouched()
        })
      }, h.$setSubmitted = function() {
        e.addClass(a, mf), h.$submitted = !0, j.$setSubmitted()
      }
    }

    function bd(a) {
      a.$formatters.push(function(b) {
        return a.$isEmpty(b) ? b : b.toString()
      })
    }

    function cd(a, b, c, d, e, f) {
      dd(a, b, c, d, e, f), bd(d)
    }

    function dd(a, b, c, d, e, f) {
      var g = td(b[0].type);
      if (!e.android) {
        var h = !1;
        b.on("compositionstart", function(a) {
          h = !0
        }), b.on("compositionend", function() {
          h = !1, i()
        })
      }
      var i = function(a) {
        if (j && (f.defer.cancel(j), j = null), !h) {
          var e = b.val(),
            i = a && a.type;
          "password" === g || c.ngTrim && "false" === c.ngTrim || (e = Nd(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, i)
        }
      };
      if (e.hasEvent("input")) b.on("input", i);
      else {
        var j, k = function(a, b, c) {
          j || (j = f.defer(function() {
            j = null, b && b.value === c || i(a)
          }))
        };
        b.on("keydown", function(a) {
          var b = a.keyCode;
          91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value)
        }), e.hasEvent("paste") && b.on("paste cut", k)
      }
      b.on("change", i), d.$render = function() {
        b.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
      }
    }

    function ed(a, b) {
      if (z(a)) return a;
      if (x(a)) {
        wf.lastIndex = 0;
        var c = wf.exec(a);
        if (c) {
          var d = +c[1],
            e = +c[2],
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = Qc(d),
            k = 7 * (e - 1);
          return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), new Date(d, 0, j.getDate() + k, f, g, h, i)
        }
      }
      return NaN
    }

    function fd(a, b) {
      return function(c, d) {
        var e, g;
        if (z(c)) return c;
        if (x(c)) {
          if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), qf.test(c)) return new Date(c);
          if (a.lastIndex = 0, e = a.exec(c)) return e.shift(), g = d ? {
            yyyy: d.getFullYear(),
            MM: d.getMonth() + 1,
            dd: d.getDate(),
            HH: d.getHours(),
            mm: d.getMinutes(),
            ss: d.getSeconds(),
            sss: d.getMilliseconds() / 1e3
          } : {
            yyyy: 1970,
            MM: 1,
            dd: 1,
            HH: 0,
            mm: 0,
            ss: 0,
            sss: 0
          }, f(e, function(a, c) {
            c < b.length && (g[b[c]] = +a)
          }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0)
        }
        return NaN
      }
    }

    function gd(a, b, d, e) {
      return function(f, g, h, i, j, k, l) {
        function m(a) {
          return a && !(a.getTime && a.getTime() !== a.getTime())
        }

        function n(a) {
          return u(a) ? z(a) ? a : d(a) : c
        }
        hd(f, g, h, i), dd(f, g, h, i, j, k);
        var o, p = i && i.$options && i.$options.timezone;
        if (i.$$parserName = a, i.$parsers.push(function(a) {
            if (i.$isEmpty(a)) return null;
            if (b.test(a)) {
              var e = d(a, o);
              return p && (e = Z(e, p)), e
            }
            return c
          }), i.$formatters.push(function(a) {
            if (a && !z(a)) throw $f("datefmt", "Expected `{0}` to be a date", a);
            return m(a) ? (o = a, o && p && (o = Z(o, p, !0)), l("date")(a, e, p)) : (o = null, "")
          }), u(h.min) || h.ngMin) {
          var q;
          i.$validators.min = function(a) {
            return !m(a) || t(q) || d(a) >= q
          }, h.$observe("min", function(a) {
            q = n(a), i.$validate()
          })
        }
        if (u(h.max) || h.ngMax) {
          var r;
          i.$validators.max = function(a) {
            return !m(a) || t(r) || d(a) <= r
          }, h.$observe("max", function(a) {
            r = n(a), i.$validate()
          })
        }
      }
    }

    function hd(a, b, d, e) {
      var f = b[0],
        g = e.$$hasNativeValidators = v(f.validity);
      g && e.$parsers.push(function(a) {
        var d = b.prop(sd) || {};
        return d.badInput && !d.typeMismatch ? c : a
      })
    }

    function id(a, b, d, e, f, g) {
      if (hd(a, b, d, e), dd(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function(a) {
          return e.$isEmpty(a) ? null : tf.test(a) ? parseFloat(a) : c
        }), e.$formatters.push(function(a) {
          if (!e.$isEmpty(a)) {
            if (!y(a)) throw $f("numfmt", "Expected `{0}` to be a number", a);
            a = a.toString()
          }
          return a
        }), u(d.min) || d.ngMin) {
        var h;
        e.$validators.min = function(a) {
          return e.$isEmpty(a) || t(h) || a >= h
        }, d.$observe("min", function(a) {
          u(a) && !y(a) && (a = parseFloat(a, 10)), h = y(a) && !isNaN(a) ? a : c, e.$validate()
        })
      }
      if (u(d.max) || d.ngMax) {
        var i;
        e.$validators.max = function(a) {
          return e.$isEmpty(a) || t(i) || i >= a
        }, d.$observe("max", function(a) {
          u(a) && !y(a) && (a = parseFloat(a, 10)), i = y(a) && !isNaN(a) ? a : c, e.$validate()
        })
      }
    }

    function jd(a, b, c, d, e, f) {
      dd(a, b, c, d, e, f), bd(d), d.$$parserName = "url", d.$validators.url = function(a, b) {
        var c = a || b;
        return d.$isEmpty(c) || rf.test(c)
      }
    }

    function kd(a, b, c, d, e, f) {
      dd(a, b, c, d, e, f), bd(d), d.$$parserName = "email", d.$validators.email = function(a, b) {
        var c = a || b;
        return d.$isEmpty(c) || sf.test(c)
      }
    }

    function ld(a, b, c, d) {
      t(c.name) && b.attr("name", i());
      var e = function(a) {
        b[0].checked && d.$setViewValue(c.value, a && a.type)
      };
      b.on("click", e), d.$render = function() {
        var a = c.value;
        b[0].checked = a == d.$viewValue
      }, c.$observe("value", d.$render)
    }

    function md(a, b, c, e, f) {
      var g;
      if (u(e)) {
        if (g = a(e), !g.constant) throw d("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, e);
        return g(b)
      }
      return f
    }

    function nd(a, b, c, d, e, f, g, h) {
      var i = md(h, a, "ngTrueValue", c.ngTrueValue, !0),
        j = md(h, a, "ngFalseValue", c.ngFalseValue, !1),
        k = function(a) {
          d.$setViewValue(b[0].checked, a && a.type)
        };
      b.on("click", k), d.$render = function() {
        b[0].checked = d.$viewValue
      }, d.$isEmpty = function(a) {
        return a === !1
      }, d.$formatters.push(function(a) {
        return Q(a, i)
      }), d.$parsers.push(function(a) {
        return a ? i : j
      })
    }

    function od(a, b) {
      return a = "ngClass" + a, ["$animate", function(c) {
        function d(a, b) {
          var c = [];
          a: for (var d = 0; d < a.length; d++) {
            for (var e = a[d], f = 0; f < b.length; f++)
              if (e == b[f]) continue a;
            c.push(e)
          }
          return c
        }

        function e(a) {
          var b = [];
          return Ld(a) ? (f(a, function(a) {
            b = b.concat(e(a))
          }), b) : x(a) ? a.split(" ") : v(a) ? (f(a, function(a, c) {
            a && (b = b.concat(c.split(" ")))
          }), b) : a
        }
        return {
          restrict: "AC",
          link: function(g, h, i) {
            function j(a) {
              var b = l(a, 1);
              i.$addClass(b)
            }

            function k(a) {
              var b = l(a, -1);
              i.$removeClass(b)
            }

            function l(a, b) {
              var c = h.data("$classCounts") || qa(),
                d = [];
              return f(a, function(a) {
                (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
              }), h.data("$classCounts", c), d.join(" ")
            }

            function m(a, b) {
              var e = d(b, a),
                f = d(a, b);
              e = l(e, 1), f = l(f, -1), e && e.length && c.addClass(h, e), f && f.length && c.removeClass(h, f)
            }

            function n(a) {
              if (b === !0 || g.$index % 2 === b) {
                var c = e(a || []);
                if (o) {
                  if (!Q(a, o)) {
                    var d = e(o);
                    m(d, c)
                  }
                } else j(c)
              }
              o = P(a)
            }
            var o;
            g.$watch(i[a], n, !0), i.$observe("class", function(b) {
              n(g.$eval(i[a]))
            }), "ngClass" !== a && g.$watch("$index", function(c, d) {
              var f = 1 & c;
              if (f !== (1 & d)) {
                var h = e(g.$eval(i[a]));
                f === b ? j(h) : k(h)
              }
            })
          }
        }
      }]
    }

    function pd(a) {
      function b(a, b, i) {
        b === c ? d("$pending", a, i) : e("$pending", a, i), H(b) ? b ? (l(h.$error, a, i), k(h.$$success, a, i)) : (k(h.$error, a, i), l(h.$$success, a, i)) : (l(h.$error, a, i), l(h.$$success, a, i)), h.$pending ? (f(Zf, !0), h.$valid = h.$invalid = c, g("", null)) : (f(Zf, !1), h.$valid = qd(h.$error), h.$invalid = !h.$valid, g("", h.$valid));
        var j;
        j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null, g(a, j), m.$setValidity(a, j, h)
      }

      function d(a, b, c) {
        h[a] || (h[a] = {}), k(h[a], b, c)
      }

      function e(a, b, d) {
        h[a] && l(h[a], b, d), qd(h[a]) && (h[a] = c)
      }

      function f(a, b) {
        b && !j[a] ? (n.addClass(i, a), j[a] = !0) : !b && j[a] && (n.removeClass(i, a), j[a] = !1)
      }

      function g(a, b) {
        a = a ? "-" + ja(a, "-") : "", f(Tf + a, b === !0), f(Uf + a, b === !1)
      }
      var h = a.ctrl,
        i = a.$element,
        j = {},
        k = a.set,
        l = a.unset,
        m = a.parentForm,
        n = a.$animate;
      j[Uf] = !(j[Tf] = i.hasClass(Tf)), h.$setValidity = b
    }

    function qd(a) {
      if (a)
        for (var b in a)
          if (a.hasOwnProperty(b)) return !1;
      return !0
    }
    var rd = /^\/(.+)\/([a-z]*)$/,
      sd = "validity",
      td = function(a) {
        return x(a) ? a.toLowerCase() : a
      },
      ud = Object.prototype.hasOwnProperty,
      vd = function(a) {
        return x(a) ? a.toUpperCase() : a
      },
      wd = function(a) {
        return x(a) ? a.replace(/[A-Z]/g, function(a) {
          return String.fromCharCode(32 | a.charCodeAt(0))
        }) : a
      },
      xd = function(a) {
        return x(a) ? a.replace(/[a-z]/g, function(a) {
          return String.fromCharCode(-33 & a.charCodeAt(0))
        }) : a
      };
    "i" !== "I".toLowerCase() && (td = wd, vd = xd);
    var yd, zd, Ad, Bd, Cd = [].slice,
      Dd = [].splice,
      Ed = [].push,
      Fd = Object.prototype.toString,
      Gd = Object.getPrototypeOf,
      Hd = d("ng"),
      Id = a.angular || (a.angular = {}),
      Jd = 0;
    yd = b.documentMode, p.$inject = [], q.$inject = [];
    var Kd, Ld = Array.isArray,
      Md = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,
      Nd = function(a) {
        return x(a) ? a.trim() : a
      },
      Od = function(a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
      },
      Pd = function() {
        if (u(Pd.isActive_)) return Pd.isActive_;
        var a = !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"));
        if (!a) try {
          new Function("")
        } catch (c) {
          a = !0
        }
        return Pd.isActive_ = a
      },
      Qd = function() {
        if (u(Qd.name_)) return Qd.name_;
        var a, c, d, e, f = Rd.length;
        for (c = 0; f > c; ++c)
          if (d = Rd[c], a = b.querySelector("[" + d.replace(":", "\\:") + "jq]")) {
            e = a.getAttribute(d + "jq");
            break
          }
        return Qd.name_ = e
      },
      Rd = ["ng-", "data-ng-", "ng:", "x-ng-"],
      Sd = /[A-Z]/g,
      Td = !1,
      Ud = 1,
      Vd = 2,
      Wd = 3,
      Xd = 8,
      Yd = 9,
      Zd = 11,
      $d = {
        full: "1.4.3",
        major: 1,
        minor: 4,
        dot: 3,
        codeName: "foam-acceleration"
      };
    Ca.expando = "ng339";
    var _d = Ca.cache = {},
      ae = 1,
      be = function(a, b, c) {
        a.addEventListener(b, c, !1)
      },
      ce = function(a, b, c) {
        a.removeEventListener(b, c, !1)
      };
    Ca._data = function(a) {
      return this.cache[a[this.expando]] || {}
    };
    var de = /([\:\-\_]+(.))/g,
      ee = /^moz([A-Z])/,
      fe = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
      },
      ge = d("jqLite"),
      he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      ie = /<|&#?\w+;/,
      je = /<([\w:]+)/,
      ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      le = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td;
    var me = Ca.prototype = {
        ready: function(c) {
          function d() {
            e || (e = !0, c())
          }
          var e = !1;
          "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), Ca(a).on("load", d))
        },
        toString: function() {
          var a = [];
          return f(this, function(b) {
            a.push("" + b)
          }), "[" + a.join(", ") + "]"
        },
        eq: function(a) {
          return zd(a >= 0 ? this[a] : this[this.length + a])
        },
        length: 0,
        push: Ed,
        sort: [].sort,
        splice: [].splice
      },
      ne = {};
    f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
      ne[td(a)] = a
    });
    var oe = {};
    f("input,select,option,textarea,button,form,details".split(","), function(a) {
      oe[a] = !0
    });
    var pe = {
      ngMinlength: "minlength",
      ngMaxlength: "maxlength",
      ngMin: "min",
      ngMax: "max",
      ngPattern: "pattern"
    };
    f({
      data: Ia,
      removeData: Ga,
      hasData: za
    }, function(a, b) {
      Ca[b] = a
    }), f({
      data: Ia,
      inheritedData: Oa,
      scope: function(a) {
        return zd.data(a, "$scope") || Oa(a.parentNode || a, ["$isolateScope", "$scope"])
      },
      isolateScope: function(a) {
        return zd.data(a, "$isolateScope") || zd.data(a, "$isolateScopeNoTemplate")
      },
      controller: Na,
      injector: function(a) {
        return Oa(a, "$injector")
      },
      removeAttr: function(a, b) {
        a.removeAttribute(b)
      },
      hasClass: Ja,
      css: function(a, b, c) {
        return b = wa(b), u(c) ? void(a.style[b] = c) : a.style[b]
      },
      attr: function(a, b, d) {
        var e = a.nodeType;
        if (e !== Wd && e !== Vd && e !== Xd) {
          var f = td(b);
          if (ne[f]) {
            if (!u(d)) return a[b] || (a.attributes.getNamedItem(b) || p).specified ? f : c;
            d ? (a[b] = !0, a.setAttribute(b, f)) : (a[b] = !1, a.removeAttribute(f))
          } else if (u(d)) a.setAttribute(b, d);
          else if (a.getAttribute) {
            var g = a.getAttribute(b, 2);
            return null === g ? c : g
          }
        }
      },
      prop: function(a, b, c) {
        return u(c) ? void(a[b] = c) : a[b]
      },
      text: function() {
        function a(a, b) {
          if (t(b)) {
            var c = a.nodeType;
            return c === Ud || c === Wd ? a.textContent : ""
          }
          a.textContent = b
        }
        return a.$dv = "", a
      }(),
      val: function(a, b) {
        if (t(b)) {
          if (a.multiple && "select" === M(a)) {
            var c = [];
            return f(a.options, function(a) {
              a.selected && c.push(a.value || a.text)
            }), 0 === c.length ? null : c
          }
          return a.value
        }
        a.value = b
      },
      html: function(a, b) {
        return t(b) ? a.innerHTML : (Ea(a, !0), void(a.innerHTML = b))
      },
      empty: Pa
    }, function(a, b) {
      Ca.prototype[b] = function(b, d) {
        var e, f, g = this.length;
        if (a !== Pa && (2 == a.length && a !== Ja && a !== Na ? b : d) === c) {
          if (v(b)) {
            for (e = 0; g > e; e++)
              if (a === Ia) a(this[e], b);
              else
                for (f in b) a(this[e], f, b[f]);
            return this
          }
          for (var h = a.$dv, i = h === c ? Math.min(g, 1) : g, j = 0; i > j; j++) {
            var k = a(this[j], b, d);
            h = h ? h + k : k
          }
          return h
        }
        for (e = 0; g > e; e++) a(this[e], b, d);
        return this
      }
    }), f({
      removeData: Ga,
      on: function Cg(a, b, c, d) {
        if (u(d)) throw ge("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
        if (ya(a)) {
          var e = Ha(a, !0),
            f = e.events,
            g = e.handle;
          g || (g = e.handle = Ua(a, f));
          for (var h = b.indexOf(" ") >= 0 ? b.split(" ") : [b], i = h.length; i--;) {
            b = h[i];
            var j = f[b];
            j || (f[b] = [], "mouseenter" === b || "mouseleave" === b ? Cg(a, fe[b], function(a) {
              var c = this,
                d = a.relatedTarget;
              (!d || d !== c && !c.contains(d)) && g(a, b)
            }) : "$destroy" !== b && be(a, b, g), j = f[b]), j.push(c)
          }
        }
      },
      off: Fa,
      one: function(a, b, c) {
        a = zd(a), a.on(b, function d() {
          a.off(b, c), a.off(b, d)
        }), a.on(b, c)
      },
      replaceWith: function(a, b) {
        var c, d = a.parentNode;
        Ea(a), f(new Ca(b), function(b) {
          c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
        })
      },
      children: function(a) {
        var b = [];
        return f(a.childNodes, function(a) {
          a.nodeType === Ud && b.push(a)
        }), b
      },
      contents: function(a) {
        return a.contentDocument || a.childNodes || []
      },
      append: function(a, b) {
        var c = a.nodeType;
        if (c === Ud || c === Zd) {
          b = new Ca(b);
          for (var d = 0, e = b.length; e > d; d++) {
            var f = b[d];
            a.appendChild(f)
          }
        }
      },
      prepend: function(a, b) {
        if (a.nodeType === Ud) {
          var c = a.firstChild;
          f(new Ca(b), function(b) {
            a.insertBefore(b, c)
          })
        }
      },
      wrap: function(a, b) {
        b = zd(b).eq(0).clone()[0];
        var c = a.parentNode;
        c && c.replaceChild(b, a), b.appendChild(a)
      },
      remove: Qa,
      detach: function(a) {
        Qa(a, !0)
      },
      after: function(a, b) {
        var c = a,
          d = a.parentNode;
        b = new Ca(b);
        for (var e = 0, f = b.length; f > e; e++) {
          var g = b[e];
          d.insertBefore(g, c.nextSibling), c = g
        }
      },
      addClass: La,
      removeClass: Ka,
      toggleClass: function(a, b, c) {
        b && f(b.split(" "), function(b) {
          var d = c;
          t(d) && (d = !Ja(a, b)), (d ? La : Ka)(a, b)
        })
      },
      parent: function(a) {
        var b = a.parentNode;
        return b && b.nodeType !== Zd ? b : null
      },
      next: function(a) {
        return a.nextElementSibling
      },
      find: function(a, b) {
        return a.getElementsByTagName ? a.getElementsByTagName(b) : []
      },
      clone: Da,
      triggerHandler: function(a, b, c) {
        var d, e, g, h = b.type || b,
          i = Ha(a),
          j = i && i.events,
          k = j && j[h];
        k && (d = {
          preventDefault: function() {
            this.defaultPrevented = !0
          },
          isDefaultPrevented: function() {
            return this.defaultPrevented === !0
          },
          stopImmediatePropagation: function() {
            this.immediatePropagationStopped = !0
          },
          isImmediatePropagationStopped: function() {
            return this.immediatePropagationStopped === !0
          },
          stopPropagation: p,
          type: h,
          target: a
        }, b.type && (d = l(d, b)), e = P(k), g = c ? [d].concat(c) : [d], f(e, function(b) {
          d.isImmediatePropagationStopped() || b.apply(a, g)
        }))
      }
    }, function(a, b) {
      Ca.prototype[b] = function(b, c, d) {
        for (var e, f = 0, g = this.length; g > f; f++) t(e) ? (e = a(this[f], b, c, d), u(e) && (e = zd(e))) : Ma(e, a(this[f], b, c, d));
        return u(e) ? e : this
      }, Ca.prototype.bind = Ca.prototype.on, Ca.prototype.unbind = Ca.prototype.off
    }), Xa.prototype = {
      put: function(a, b) {
        this[Wa(a, this.nextUid)] = b
      },
      get: function(a) {
        return this[Wa(a, this.nextUid)]
      },
      remove: function(a) {
        var b = this[a = Wa(a, this.nextUid)];
        return delete this[a], b
      }
    };
    var qe = [function() {
        this.$get = [function() {
          return Xa
        }]
      }],
      re = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
      se = /,/,
      te = /^\s*(_?)(\S+?)\1\s*$/,
      ue = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
      ve = d("$injector");
    $a.$$annotate = Za;
    var we = d("$animate"),
      xe = 1,
      ye = "ng-animate",
      ze = function() {
        this.$get = ["$q", "$$rAF", function(a, b) {
          function c() {}
          return c.all = p, c.chain = p, c.prototype = {
            end: p,
            cancel: p,
            resume: p,
            pause: p,
            complete: p,
            then: function(c, d) {
              return a(function(a) {
                b(function() {
                  a()
                })
              }).then(c, d)
            }
          }, c
        }]
      },
      Ae = function() {
        var a = new Xa,
          b = [];
        this.$get = ["$$AnimateRunner", "$rootScope", function(c, d) {
          function e(c, e, g) {
            var h = a.get(c);
            h || (a.put(c, h = {}), b.push(c)), e && f(e.split(" "), function(a) {
              a && (h[a] = !0)
            }), g && f(g.split(" "), function(a) {
              a && (h[a] = !1)
            }), b.length > 1 || d.$$postDigest(function() {
              f(b, function(b) {
                var c = a.get(b);
                if (c) {
                  var d = cb(b.attr("class")),
                    e = "",
                    g = "";
                  f(c, function(a, b) {
                    var c = !!d[b];
                    a !== c && (a ? e += (e.length ? " " : "") + b : g += (g.length ? " " : "") + b)
                  }), f(b, function(a) {
                    e && La(a, e), g && Ka(a, g)
                  }), a.remove(b)
                }
              }), b.length = 0
            })
          }
          return {
            enabled: p,
            on: p,
            off: p,
            pin: p,
            push: function(a, b, d, f) {
              return f && f(), d = d || {}, d.from && a.css(d.from), d.to && a.css(d.to), (d.addClass || d.removeClass) && e(a, d.addClass, d.removeClass), new c
            }
          }
        }]
      },
      Be = ["$provide", function(a) {
        var b = this;
        this.$$registeredAnimations = Object.create(null), this.register = function(c, d) {
          if (c && "." !== c.charAt(0)) throw we("notcsel", "Expecting class selector starting with '.' got '{0}'.", c);
          var e = c + "-animation";
          b.$$registeredAnimations[c.substr(1)] = e, a.factory(e, d)
        }, this.classNameFilter = function(a) {
          if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null, this.$$classNameFilter)) {
            var b = new RegExp("(\\s+|\\/)" + ye + "(\\s+|\\/)");
            if (b.test(this.$$classNameFilter.toString())) throw we("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', ye)
          }
          return this.$$classNameFilter
        }, this.$get = ["$$animateQueue", function(a) {
          function b(a, b, c) {
            if (c) {
              var d = bb(c);
              !d || d.parentNode || d.previousElementSibling || (c = null)
            }
            c ? c.after(a) : b.prepend(a)
          }
          return {
            on: a.on,
            off: a.off,
            pin: a.pin,
            enabled: a.enabled,
            cancel: function(a) {
              a.end && a.end()
            },
            enter: function(c, d, e, f) {
              return d = d && zd(d), e = e && zd(e), d = d || e.parent(), b(c, d, e), a.push(c, "enter", db(f))
            },
            move: function(c, d, e, f) {
              return d = d && zd(d), e = e && zd(e), d = d || e.parent(), b(c, d, e), a.push(c, "move", db(f))
            },
            leave: function(b, c) {
              return a.push(b, "leave", db(c), function() {
                b.remove()
              })
            },
            addClass: function(b, c, d) {
              return d = db(d), d.addClass = ab(d.addclass, c), a.push(b, "addClass", d)
            },
            removeClass: function(b, c, d) {
              return d = db(d), d.removeClass = ab(d.removeClass, c), a.push(b, "removeClass", d)
            },
            setClass: function(b, c, d, e) {
              return e = db(e), e.addClass = ab(e.addClass, c), e.removeClass = ab(e.removeClass, d), a.push(b, "setClass", e)
            },
            animate: function(b, c, d, e, f) {
              return f = db(f), f.from = f.from ? l(f.from, c) : c, f.to = f.to ? l(f.to, d) : d, e = e || "ng-inline-animate", f.tempClasses = ab(f.tempClasses, e), a.push(b, "animate", f)
            }
          }
        }]
      }],
      Ce = d("$compile");
    ib.$inject = ["$provide", "$$sanitizeUriProvider"];
    var De = /^((?:x|data)[\:\-_])/i,
      Ee = d("$controller"),
      Fe = /^(\S+)(\s+as\s+(\w+))?$/,
      Ge = "application/json",
      He = {
        "Content-Type": Ge + ";charset=utf-8"
      },
      Ie = /^\[|^\{(?!\{)/,
      Je = {
        "[": /]$/,
        "{": /}$/
      },
      Ke = /^\)\]\}',?\n/,
      Le = Id.$interpolateMinErr = d("$interpolate");
    Le.throwNoconcat = function(a) {
      throw Le("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", a)
    }, Le.interr = function(a, b) {
      return Le("interr", "Can't interpolate: {0}\n{1}", a, b.toString())
    };
    var Me = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
      Ne = {
        http: 80,
        https: 443,
        ftp: 21
      },
      Oe = d("$location"),
      Pe = {
        $$html5: !1,
        $$replace: !1,
        absUrl: Rb("$$absUrl"),
        url: function(a) {
          if (t(a)) return this.$$url;
          var b = Me.exec(a);
          return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
        },
        protocol: Rb("$$protocol"),
        host: Rb("$$host"),
        port: Rb("$$port"),
        path: Sb("$$path", function(a) {
          return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
        }),
        search: function(a, b) {
          switch (arguments.length) {
            case 0:
              return this.$$search;
            case 1:
              if (x(a) || y(a)) a = a.toString(), this.$$search = aa(a);
              else {
                if (!v(a)) throw Oe("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                a = O(a, {}), f(a, function(b, c) {
                  null == b && delete a[c]
                }), this.$$search = a
              }
              break;
            default:
              t(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
          }
          return this.$$compose(), this
        },
        hash: Sb("$$hash", function(a) {
          return null !== a ? a.toString() : ""
        }),
        replace: function() {
          return this.$$replace = !0, this
        }
      };
    f([Qb, Pb, Ob], function(a) {
      a.prototype = Object.create(Pe), a.prototype.state = function(b) {
        if (!arguments.length) return this.$$state;
        if (a !== Ob || !this.$$html5) throw Oe("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
        return this.$$state = t(b) ? null : b, this
      }
    });
    var Qe = d("$parse"),
      Re = Function.prototype.call,
      Se = Function.prototype.apply,
      Te = Function.prototype.bind,
      Ue = qa();
    f("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
      Ue[a] = !0
    });
    var Ve = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "\x0B",
        "'": "'",
        '"': '"'
      },
      We = function(a) {
        this.options = a
      };
    We.prototype = {
      constructor: We,
      lex: function(a) {
        for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length;) {
          var b = this.text.charAt(this.index);
          if ('"' === b || "'" === b) this.readString(b);
          else if (this.isNumber(b) || "." === b && this.isNumber(this.peek())) this.readNumber();
          else if (this.isIdent(b)) this.readIdent();
          else if (this.is(b, "(){}[].,;:?")) this.tokens.push({
            index: this.index,
            text: b
          }), this.index++;
          else if (this.isWhitespace(b)) this.index++;
          else {
            var c = b + this.peek(),
              d = c + this.peek(2),
              e = Ue[b],
              f = Ue[c],
              g = Ue[d];
            if (e || f || g) {
              var h = g ? d : f ? c : b;
              this.tokens.push({
                index: this.index,
                text: h,
                operator: !0
              }), this.index += h.length
            } else this.throwError("Unexpected next character ", this.index, this.index + 1)
          }
        }
        return this.tokens
      },
      is: function(a, b) {
        return -1 !== b.indexOf(a)
      },
      peek: function(a) {
        var b = a || 1;
        return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
      },
      isNumber: function(a) {
        return a >= "0" && "9" >= a && "string" == typeof a
      },
      isWhitespace: function(a) {
        return " " === a || "\r" === a || "	" === a || "\n" === a || "\x0B" === a || " " === a
      },
      isIdent: function(a) {
        return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
      },
      isExpOperator: function(a) {
        return "-" === a || "+" === a || this.isNumber(a)
      },
      throwError: function(a, b, c) {
        c = c || this.index;
        var d = u(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
        throw Qe("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
      },
      readNumber: function() {
        for (var a = "", b = this.index; this.index < this.text.length;) {
          var c = td(this.text.charAt(this.index));
          if ("." == c || this.isNumber(c)) a += c;
          else {
            var d = this.peek();
            if ("e" == c && this.isExpOperator(d)) a += c;
            else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
            else {
              if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
              this.throwError("Invalid exponent")
            }
          }
          this.index++
        }
        this.tokens.push({
          index: b,
          text: a,
          constant: !0,
          value: Number(a)
        })
      },
      readIdent: function() {
        for (var a = this.index; this.index < this.text.length;) {
          var b = this.text.charAt(this.index);
          if (!this.isIdent(b) && !this.isNumber(b)) break;
          this.index++
        }
        this.tokens.push({
          index: a,
          text: this.text.slice(a, this.index),
          identifier: !0
        })
      },
      readString: function(a) {
        var b = this.index;
        this.index++;
        for (var c = "", d = a, e = !1; this.index < this.text.length;) {
          var f = this.text.charAt(this.index);
          if (d += f, e) {
            if ("u" === f) {
              var g = this.text.substring(this.index + 1, this.index + 5);
              g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
            } else {
              var h = Ve[f];
              c += h || f
            }
            e = !1
          } else if ("\\" === f) e = !0;
          else {
            if (f === a) return this.index++, void this.tokens.push({
              index: b,
              text: d,
              constant: !0,
              value: c
            });
            c += f
          }
          this.index++
        }
        this.throwError("Unterminated quote", b)
      }
    };
    var Xe = function(a, b) {
      this.lexer = a, this.options = b
    };
    Xe.Program = "Program", Xe.ExpressionStatement = "ExpressionStatement", Xe.AssignmentExpression = "AssignmentExpression", Xe.ConditionalExpression = "ConditionalExpression", Xe.LogicalExpression = "LogicalExpression", Xe.BinaryExpression = "BinaryExpression", Xe.UnaryExpression = "UnaryExpression", Xe.CallExpression = "CallExpression", Xe.MemberExpression = "MemberExpression",
      Xe.Identifier = "Identifier", Xe.Literal = "Literal", Xe.ArrayExpression = "ArrayExpression", Xe.Property = "Property", Xe.ObjectExpression = "ObjectExpression", Xe.ThisExpression = "ThisExpression", Xe.NGValueParameter = "NGValueParameter", Xe.prototype = {
        ast: function(a) {
          this.text = a, this.tokens = this.lexer.lex(a);
          var b = this.program();
          return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b
        },
        program: function() {
          for (var a = [];;)
            if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
              type: Xe.Program,
              body: a
            }
        },
        expressionStatement: function() {
          return {
            type: Xe.ExpressionStatement,
            expression: this.filterChain()
          }
        },
        filterChain: function() {
          for (var a, b = this.expression(); a = this.expect("|");) b = this.filter(b);
          return b
        },
        expression: function() {
          return this.assignment()
        },
        assignment: function() {
          var a = this.ternary();
          return this.expect("=") && (a = {
            type: Xe.AssignmentExpression,
            left: a,
            right: this.assignment(),
            operator: "="
          }), a
        },
        ternary: function() {
          var a, b, c = this.logicalOR();
          return this.expect("?") && (a = this.expression(), this.consume(":")) ? (b = this.expression(), {
            type: Xe.ConditionalExpression,
            test: c,
            alternate: a,
            consequent: b
          }) : c
        },
        logicalOR: function() {
          for (var a = this.logicalAND(); this.expect("||");) a = {
            type: Xe.LogicalExpression,
            operator: "||",
            left: a,
            right: this.logicalAND()
          };
          return a
        },
        logicalAND: function() {
          for (var a = this.equality(); this.expect("&&");) a = {
            type: Xe.LogicalExpression,
            operator: "&&",
            left: a,
            right: this.equality()
          };
          return a
        },
        equality: function() {
          for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!==");) b = {
            type: Xe.BinaryExpression,
            operator: a.text,
            left: b,
            right: this.relational()
          };
          return b
        },
        relational: function() {
          for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">=");) b = {
            type: Xe.BinaryExpression,
            operator: a.text,
            left: b,
            right: this.additive()
          };
          return b
        },
        additive: function() {
          for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = {
            type: Xe.BinaryExpression,
            operator: a.text,
            left: b,
            right: this.multiplicative()
          };
          return b
        },
        multiplicative: function() {
          for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = {
            type: Xe.BinaryExpression,
            operator: a.text,
            left: b,
            right: this.unary()
          };
          return b
        },
        unary: function() {
          var a;
          return (a = this.expect("+", "-", "!")) ? {
            type: Xe.UnaryExpression,
            operator: a.text,
            prefix: !0,
            argument: this.unary()
          } : this.primary()
        },
        primary: function() {
          var a;
          this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = O(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
          for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = {
            type: Xe.CallExpression,
            callee: a,
            arguments: this.parseArguments()
          }, this.consume(")")) : "[" === b.text ? (a = {
            type: Xe.MemberExpression,
            object: a,
            property: this.expression(),
            computed: !0
          }, this.consume("]")) : "." === b.text ? a = {
            type: Xe.MemberExpression,
            object: a,
            property: this.identifier(),
            computed: !1
          } : this.throwError("IMPOSSIBLE");
          return a
        },
        filter: function(a) {
          for (var b = [a], c = {
              type: Xe.CallExpression,
              callee: this.identifier(),
              arguments: b,
              filter: !0
            }; this.expect(":");) b.push(this.expression());
          return c
        },
        parseArguments: function() {
          var a = [];
          if (")" !== this.peekToken().text)
            do a.push(this.expression()); while (this.expect(","));
          return a
        },
        identifier: function() {
          var a = this.consume();
          return a.identifier || this.throwError("is not a valid identifier", a), {
            type: Xe.Identifier,
            name: a.text
          }
        },
        constant: function() {
          return {
            type: Xe.Literal,
            value: this.consume().value
          }
        },
        arrayDeclaration: function() {
          var a = [];
          if ("]" !== this.peekToken().text)
            do {
              if (this.peek("]")) break;
              a.push(this.expression())
            } while (this.expect(","));
          return this.consume("]"), {
            type: Xe.ArrayExpression,
            elements: a
          }
        },
        object: function() {
          var a, b = [];
          if ("}" !== this.peekToken().text)
            do {
              if (this.peek("}")) break;
              a = {
                type: Xe.Property,
                kind: "init"
              }, this.peek().constant ? a.key = this.constant() : this.peek().identifier ? a.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), a.value = this.expression(), b.push(a)
            } while (this.expect(","));
          return this.consume("}"), {
            type: Xe.ObjectExpression,
            properties: b
          }
        },
        throwError: function(a, b) {
          throw Qe("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
        },
        consume: function(a) {
          if (0 === this.tokens.length) throw Qe("ueoe", "Unexpected end of expression: {0}", this.text);
          var b = this.expect(a);
          return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
        },
        peekToken: function() {
          if (0 === this.tokens.length) throw Qe("ueoe", "Unexpected end of expression: {0}", this.text);
          return this.tokens[0]
        },
        peek: function(a, b, c, d) {
          return this.peekAhead(0, a, b, c, d)
        },
        peekAhead: function(a, b, c, d, e) {
          if (this.tokens.length > a) {
            var f = this.tokens[a],
              g = f.text;
            if (g === b || g === c || g === d || g === e || !b && !c && !d && !e) return f
          }
          return !1
        },
        expect: function(a, b, c, d) {
          var e = this.peek(a, b, c, d);
          return e ? (this.tokens.shift(), e) : !1
        },
        constants: {
          "true": {
            type: Xe.Literal,
            value: !0
          },
          "false": {
            type: Xe.Literal,
            value: !1
          },
          "null": {
            type: Xe.Literal,
            value: null
          },
          undefined: {
            type: Xe.Literal,
            value: c
          },
          "this": {
            type: Xe.ThisExpression
          }
        }
      }, fc.prototype = {
        compile: function(a, b) {
          var d = this,
            e = this.astBuilder.ast(a);
          this.state = {
            nextId: 0,
            filters: {},
            expensiveChecks: b,
            fn: {
              vars: [],
              body: [],
              own: {}
            },
            assign: {
              vars: [],
              body: [],
              own: {}
            },
            inputs: []
          }, _b(e, d.$filter);
          var g, h = "";
          if (this.stage = "assign", g = cc(e)) {
            this.state.computing = "assign";
            var i = this.nextId();
            this.recurse(g, i), h = "fn.assign=" + this.generateFunction("assign", "s,v,l")
          }
          var j = ac(e.body);
          d.stage = "inputs", f(j, function(a, b) {
            var c = "fn" + b;
            d.state[c] = {
              vars: [],
              body: [],
              own: {}
            }, d.state.computing = c;
            var e = d.nextId();
            d.recurse(a, e), d.return_(e), d.state.inputs.push(c), a.watchId = b
          }), this.state.computing = "fn", this.stage = "main", this.recurse(e);
          var k = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + h + this.watchFns() + "return fn;",
            l = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "ifDefined", "plus", "text", k)(this.$filter, Vb, Wb, Xb, Yb, Zb, a);
          return this.state = this.stage = c, l.literal = dc(e), l.constant = ec(e), l
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
          var a = [],
            b = this.state.inputs,
            c = this;
          return f(b, function(b) {
            a.push("var " + b + "=" + c.generateFunction(b, "s"))
          }), b.length && a.push("fn.inputs=[" + b.join(",") + "];"), a.join("")
        },
        generateFunction: function(a, b) {
          return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
        },
        filterPrefix: function() {
          var a = [],
            b = this;
          return f(this.state.filters, function(c, d) {
            a.push(c + "=$filter(" + b.escape(d) + ")")
          }), a.length ? "var " + a.join(",") + ";" : ""
        },
        varsPrefix: function(a) {
          return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
        },
        body: function(a) {
          return this.state[a].body.join("")
        },
        recurse: function(a, b, d, e, g, h) {
          var i, j, k, l, m = this;
          if (e = e || p, !h && u(a.watchId)) return b = b || this.nextId(), void this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, e, g, !0));
          switch (a.type) {
            case Xe.Program:
              f(a.body, function(b, d) {
                m.recurse(b.expression, c, c, function(a) {
                  j = a
                }), d !== a.body.length - 1 ? m.current().body.push(j, ";") : m.return_(j)
              });
              break;
            case Xe.Literal:
              l = this.escape(a.value), this.assign(b, l), e(l);
              break;
            case Xe.UnaryExpression:
              this.recurse(a.argument, c, c, function(a) {
                j = a
              }), l = a.operator + "(" + this.ifDefined(j, 0) + ")", this.assign(b, l), e(l);
              break;
            case Xe.BinaryExpression:
              this.recurse(a.left, c, c, function(a) {
                i = a
              }), this.recurse(a.right, c, c, function(a) {
                j = a
              }), l = "+" === a.operator ? this.plus(i, j) : "-" === a.operator ? this.ifDefined(i, 0) + a.operator + this.ifDefined(j, 0) : "(" + i + ")" + a.operator + "(" + j + ")", this.assign(b, l), e(l);
              break;
            case Xe.LogicalExpression:
              b = b || this.nextId(), m.recurse(a.left, b), m.if_("&&" === a.operator ? b : m.not(b), m.lazyRecurse(a.right, b)), e(b);
              break;
            case Xe.ConditionalExpression:
              b = b || this.nextId(), m.recurse(a.test, b), m.if_(b, m.lazyRecurse(a.alternate, b), m.lazyRecurse(a.consequent, b)), e(b);
              break;
            case Xe.Identifier:
              b = b || this.nextId(), d && (d.context = "inputs" === m.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name), Vb(a.name), m.if_("inputs" === m.stage || m.not(m.getHasOwnProperty("l", a.name)), function() {
                m.if_("inputs" === m.stage || "s", function() {
                  g && 1 !== g && m.if_(m.not(m.nonComputedMember("s", a.name)), m.lazyAssign(m.nonComputedMember("s", a.name), "{}")), m.assign(b, m.nonComputedMember("s", a.name))
                })
              }, b && m.lazyAssign(b, m.nonComputedMember("l", a.name))), (m.state.expensiveChecks || ic(a.name)) && m.addEnsureSafeObject(b), e(b);
              break;
            case Xe.MemberExpression:
              i = d && (d.context = this.nextId()) || this.nextId(), b = b || this.nextId(), m.recurse(a.object, i, c, function() {
                m.if_(m.notNull(i), function() {
                  a.computed ? (j = m.nextId(), m.recurse(a.property, j), m.addEnsureSafeMemberName(j), g && 1 !== g && m.if_(m.not(m.computedMember(i, j)), m.lazyAssign(m.computedMember(i, j), "{}")), l = m.ensureSafeObject(m.computedMember(i, j)), m.assign(b, l), d && (d.computed = !0, d.name = j)) : (Vb(a.property.name), g && 1 !== g && m.if_(m.not(m.nonComputedMember(i, a.property.name)), m.lazyAssign(m.nonComputedMember(i, a.property.name), "{}")), l = m.nonComputedMember(i, a.property.name), (m.state.expensiveChecks || ic(a.property.name)) && (l = m.ensureSafeObject(l)), m.assign(b, l), d && (d.computed = !1, d.name = a.property.name))
                }, function() {
                  m.assign(b, "undefined")
                }), e(b)
              }, !!g);
              break;
            case Xe.CallExpression:
              b = b || this.nextId(), a.filter ? (j = m.filter(a.callee.name), k = [], f(a.arguments, function(a) {
                var b = m.nextId();
                m.recurse(a, b), k.push(b)
              }), l = j + "(" + k.join(",") + ")", m.assign(b, l), e(b)) : (j = m.nextId(), i = {}, k = [], m.recurse(a.callee, j, i, function() {
                m.if_(m.notNull(j), function() {
                  m.addEnsureSafeFunction(j), f(a.arguments, function(a) {
                    m.recurse(a, m.nextId(), c, function(a) {
                      k.push(m.ensureSafeObject(a))
                    })
                  }), i.name ? (m.state.expensiveChecks || m.addEnsureSafeObject(i.context), l = m.member(i.context, i.name, i.computed) + "(" + k.join(",") + ")") : l = j + "(" + k.join(",") + ")", l = m.ensureSafeObject(l), m.assign(b, l)
                }, function() {
                  m.assign(b, "undefined")
                }), e(b)
              }));
              break;
            case Xe.AssignmentExpression:
              if (j = this.nextId(), i = {}, !bc(a.left)) throw Qe("lval", "Trying to assing a value to a non l-value");
              this.recurse(a.left, c, i, function() {
                m.if_(m.notNull(i.context), function() {
                  m.recurse(a.right, j), m.addEnsureSafeObject(m.member(i.context, i.name, i.computed)), l = m.member(i.context, i.name, i.computed) + a.operator + j, m.assign(b, l), e(b || l)
                })
              }, 1);
              break;
            case Xe.ArrayExpression:
              k = [], f(a.elements, function(a) {
                m.recurse(a, m.nextId(), c, function(a) {
                  k.push(a)
                })
              }), l = "[" + k.join(",") + "]", this.assign(b, l), e(l);
              break;
            case Xe.ObjectExpression:
              k = [], f(a.properties, function(a) {
                m.recurse(a.value, m.nextId(), c, function(b) {
                  k.push(m.escape(a.key.type === Xe.Identifier ? a.key.name : "" + a.key.value) + ":" + b)
                })
              }), l = "{" + k.join(",") + "}", this.assign(b, l), e(l);
              break;
            case Xe.ThisExpression:
              this.assign(b, "s"), e("s");
              break;
            case Xe.NGValueParameter:
              this.assign(b, "v"), e("v")
          }
        },
        getHasOwnProperty: function(a, b) {
          var c = a + "." + b,
            d = this.current().own;
          return d.hasOwnProperty(c) || (d[c] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")")), d[c]
        },
        assign: function(a, b) {
          return a ? (this.current().body.push(a, "=", b, ";"), a) : void 0
        },
        filter: function(a) {
          return this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0)), this.state.filters[a]
        },
        ifDefined: function(a, b) {
          return "ifDefined(" + a + "," + this.escape(b) + ")"
        },
        plus: function(a, b) {
          return "plus(" + a + "," + b + ")"
        },
        return_: function(a) {
          this.current().body.push("return ", a, ";")
        },
        if_: function(a, b, c) {
          if (a === !0) b();
          else {
            var d = this.current().body;
            d.push("if(", a, "){"), b(), d.push("}"), c && (d.push("else{"), c(), d.push("}"))
          }
        },
        not: function(a) {
          return "!(" + a + ")"
        },
        notNull: function(a) {
          return a + "!=null"
        },
        nonComputedMember: function(a, b) {
          return a + "." + b
        },
        computedMember: function(a, b) {
          return a + "[" + b + "]"
        },
        member: function(a, b, c) {
          return c ? this.computedMember(a, b) : this.nonComputedMember(a, b)
        },
        addEnsureSafeObject: function(a) {
          this.current().body.push(this.ensureSafeObject(a), ";")
        },
        addEnsureSafeMemberName: function(a) {
          this.current().body.push(this.ensureSafeMemberName(a), ";")
        },
        addEnsureSafeFunction: function(a) {
          this.current().body.push(this.ensureSafeFunction(a), ";")
        },
        ensureSafeObject: function(a) {
          return "ensureSafeObject(" + a + ",text)"
        },
        ensureSafeMemberName: function(a) {
          return "ensureSafeMemberName(" + a + ",text)"
        },
        ensureSafeFunction: function(a) {
          return "ensureSafeFunction(" + a + ",text)"
        },
        lazyRecurse: function(a, b, c, d, e, f) {
          var g = this;
          return function() {
            g.recurse(a, b, c, d, e, f)
          }
        },
        lazyAssign: function(a, b) {
          var c = this;
          return function() {
            c.assign(a, b)
          }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(a) {
          return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function(a) {
          if (x(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
          if (y(a)) return a.toString();
          if (a === !0) return "true";
          if (a === !1) return "false";
          if (null === a) return "null";
          if ("undefined" == typeof a) return "undefined";
          throw Qe("esc", "IMPOSSIBLE")
        },
        nextId: function(a, b) {
          var c = "v" + this.state.nextId++;
          return a || this.current().vars.push(c + (b ? "=" + b : "")), c
        },
        current: function() {
          return this.state[this.state.computing]
        }
      }, gc.prototype = {
        compile: function(a, b) {
          var c = this,
            d = this.astBuilder.ast(a);
          this.expression = a, this.expensiveChecks = b, _b(d, c.$filter);
          var e, g;
          (e = cc(d)) && (g = this.recurse(e));
          var h, i = ac(d.body);
          i && (h = [], f(i, function(a, b) {
            var d = c.recurse(a);
            a.input = d, h.push(d), a.watchId = b
          }));
          var j = [];
          f(d.body, function(a) {
            j.push(c.recurse(a.expression))
          });
          var k = 0 === d.body.length ? function() {} : 1 === d.body.length ? j[0] : function(a, b) {
            var c;
            return f(j, function(d) {
              c = d(a, b)
            }), c
          };
          return g && (k.assign = function(a, b, c) {
            return g(a, c, b)
          }), h && (k.inputs = h), k.literal = dc(d), k.constant = ec(d), k
        },
        recurse: function(a, b, d) {
          var e, g, h, i = this;
          if (a.input) return this.inputs(a.input, a.watchId);
          switch (a.type) {
            case Xe.Literal:
              return this.value(a.value, b);
            case Xe.UnaryExpression:
              return g = this.recurse(a.argument), this["unary" + a.operator](g, b);
            case Xe.BinaryExpression:
              return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);
            case Xe.LogicalExpression:
              return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);
            case Xe.ConditionalExpression:
              return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
            case Xe.Identifier:
              return Vb(a.name, i.expression), i.identifier(a.name, i.expensiveChecks || ic(a.name), b, d, i.expression);
            case Xe.MemberExpression:
              return e = this.recurse(a.object, !1, !!d), a.computed || (Vb(a.property.name, i.expression), g = a.property.name), a.computed && (g = this.recurse(a.property)), a.computed ? this.computedMember(e, g, b, d, i.expression) : this.nonComputedMember(e, g, i.expensiveChecks, b, d, i.expression);
            case Xe.CallExpression:
              return h = [], f(a.arguments, function(a) {
                h.push(i.recurse(a))
              }), a.filter && (g = this.$filter(a.callee.name)), a.filter || (g = this.recurse(a.callee, !0)), a.filter ? function(a, d, e, f) {
                for (var i = [], j = 0; j < h.length; ++j) i.push(h[j](a, d, e, f));
                var k = g.apply(c, i, f);
                return b ? {
                  context: c,
                  name: c,
                  value: k
                } : k
              } : function(a, c, d, e) {
                var f, j = g(a, c, d, e);
                if (null != j.value) {
                  Wb(j.context, i.expression), Xb(j.value, i.expression);
                  for (var k = [], l = 0; l < h.length; ++l) k.push(Wb(h[l](a, c, d, e), i.expression));
                  f = Wb(j.value.apply(j.context, k), i.expression)
                }
                return b ? {
                  value: f
                } : f
              };
            case Xe.AssignmentExpression:
              return e = this.recurse(a.left, !0, 1), g = this.recurse(a.right),
                function(a, c, d, f) {
                  var h = e(a, c, d, f),
                    j = g(a, c, d, f);
                  return Wb(h.value, i.expression), h.context[h.name] = j, b ? {
                    value: j
                  } : j
                };
            case Xe.ArrayExpression:
              return h = [], f(a.elements, function(a) {
                  h.push(i.recurse(a))
                }),
                function(a, c, d, e) {
                  for (var f = [], g = 0; g < h.length; ++g) f.push(h[g](a, c, d, e));
                  return b ? {
                    value: f
                  } : f
                };
            case Xe.ObjectExpression:
              return h = [], f(a.properties, function(a) {
                  h.push({
                    key: a.key.type === Xe.Identifier ? a.key.name : "" + a.key.value,
                    value: i.recurse(a.value)
                  })
                }),
                function(a, c, d, e) {
                  for (var f = {}, g = 0; g < h.length; ++g) f[h[g].key] = h[g].value(a, c, d, e);
                  return b ? {
                    value: f
                  } : f
                };
            case Xe.ThisExpression:
              return function(a) {
                return b ? {
                  value: a
                } : a
              };
            case Xe.NGValueParameter:
              return function(a, c, d, e) {
                return b ? {
                  value: d
                } : d
              }
          }
        },
        "unary+": function(a, b) {
          return function(c, d, e, f) {
            var g = a(c, d, e, f);
            return g = u(g) ? +g : 0, b ? {
              value: g
            } : g
          }
        },
        "unary-": function(a, b) {
          return function(c, d, e, f) {
            var g = a(c, d, e, f);
            return g = u(g) ? -g : 0, b ? {
              value: g
            } : g
          }
        },
        "unary!": function(a, b) {
          return function(c, d, e, f) {
            var g = !a(c, d, e, f);
            return b ? {
              value: g
            } : g
          }
        },
        "binary+": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g),
              i = b(d, e, f, g),
              j = Zb(h, i);
            return c ? {
              value: j
            } : j
          }
        },
        "binary-": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g),
              i = b(d, e, f, g),
              j = (u(h) ? h : 0) - (u(i) ? i : 0);
            return c ? {
              value: j
            } : j
          }
        },
        "binary*": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) * b(d, e, f, g);
            return c ? {
              value: h
            } : h
          }
        },
        "binary/": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) / b(d, e, f, g);
            return c ? {
              value: h
            } : h
          }
        },
        "binary%": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) % b(d, e, f, g);
            return c ? {
              value: h
            } : h
          }
        },
        "binary===": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) === b(d, e, f, g);
            return c ? {
              value: h
            } : h
          }
        },
        "binary!==": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) !== b(d, e, f, g);
            return c ? {
              value: h
            } : h
          }
        },
        "binary==": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) == b(d, e, f, g);
            return c ? {
              value: h
            } : h
          }
        },
        "binary!=": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) != b(d, e, f, g);
            return c ? {
              value: h
            } : h
          }
        },
        "binary<": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) < b(d, e, f, g);
            return c ? {
              value: h
            } : h
          }
        },
        "binary>": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) > b(d, e, f, g);
            return c ? {
              value: h
            } : h
          }
        },
        "binary<=": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) <= b(d, e, f, g);
            return c ? {
              value: h
            } : h
          }
        },
        "binary>=": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) >= b(d, e, f, g);
            return c ? {
              value: h
            } : h
          }
        },
        "binary&&": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) && b(d, e, f, g);
            return c ? {
              value: h
            } : h
          }
        },
        "binary||": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) || b(d, e, f, g);
            return c ? {
              value: h
            } : h
          }
        },
        "ternary?:": function(a, b, c, d) {
          return function(e, f, g, h) {
            var i = a(e, f, g, h) ? b(e, f, g, h) : c(e, f, g, h);
            return d ? {
              value: i
            } : i
          }
        },
        value: function(a, b) {
          return function() {
            return b ? {
              context: c,
              name: c,
              value: a
            } : a
          }
        },
        identifier: function(a, b, d, e, f) {
          return function(g, h, i, j) {
            var k = h && a in h ? h : g;
            e && 1 !== e && k && !k[a] && (k[a] = {});
            var l = k ? k[a] : c;
            return b && Wb(l, f), d ? {
              context: k,
              name: a,
              value: l
            } : l
          }
        },
        computedMember: function(a, b, c, d, e) {
          return function(f, g, h, i) {
            var j, k, l = a(f, g, h, i);
            return null != l && (j = b(f, g, h, i), Vb(j, e), d && 1 !== d && l && !l[j] && (l[j] = {}), k = l[j], Wb(k, e)), c ? {
              context: l,
              name: j,
              value: k
            } : k
          }
        },
        nonComputedMember: function(a, b, d, e, f, g) {
          return function(h, i, j, k) {
            var l = a(h, i, j, k);
            f && 1 !== f && l && !l[b] && (l[b] = {});
            var m = null != l ? l[b] : c;
            return (d || ic(b)) && Wb(m, g), e ? {
              context: l,
              name: b,
              value: m
            } : m
          }
        },
        inputs: function(a, b) {
          return function(c, d, e, f) {
            return f ? f[b] : a(c, d, e)
          }
        }
      };
    var Ye = function(a, b, c) {
      this.lexer = a, this.$filter = b, this.options = c, this.ast = new Xe(this.lexer), this.astCompiler = c.csp ? new gc(this.ast, b) : new fc(this.ast, b)
    };
    Ye.prototype = {
      constructor: Ye,
      parse: function(a) {
        return this.astCompiler.compile(a, this.options.expensiveChecks)
      }
    };
    var Ze = (qa(), qa(), Object.prototype.valueOf),
      $e = d("$sce"),
      _e = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
      },
      Ce = d("$compile"),
      af = b.createElement("a"),
      bf = zc(a.location.href);
    Cc.$inject = ["$document"], Ec.$inject = ["$provide"], Jc.$inject = ["$locale"], Kc.$inject = ["$locale"];
    var cf = ".",
      df = {
        yyyy: Nc("FullYear", 4),
        yy: Nc("FullYear", 2, 0, !0),
        y: Nc("FullYear", 1),
        MMMM: Oc("Month"),
        MMM: Oc("Month", !0),
        MM: Nc("Month", 2, 1),
        M: Nc("Month", 1, 1),
        dd: Nc("Date", 2),
        d: Nc("Date", 1),
        HH: Nc("Hours", 2),
        H: Nc("Hours", 1),
        hh: Nc("Hours", 2, -12),
        h: Nc("Hours", 1, -12),
        mm: Nc("Minutes", 2),
        m: Nc("Minutes", 1),
        ss: Nc("Seconds", 2),
        s: Nc("Seconds", 1),
        sss: Nc("Milliseconds", 3),
        EEEE: Oc("Day"),
        EEE: Oc("Day", !0),
        a: Tc,
        Z: Pc,
        ww: Sc(2),
        w: Sc(1),
        G: Uc,
        GG: Uc,
        GGG: Uc,
        GGGG: Vc
      },
      ef = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
      ff = /^\-?\d+$/;
    Wc.$inject = ["$locale"];
    var gf = r(td),
      hf = r(vd);
    Zc.$inject = ["$parse"];
    var jf = r({
        restrict: "E",
        compile: function(a, b) {
          return b.href || b.xlinkHref ? void 0 : function(a, b) {
            if ("a" === b[0].nodeName.toLowerCase()) {
              var c = "[object SVGAnimatedString]" === Fd.call(b.prop("href")) ? "xlink:href" : "href";
              b.on("click", function(a) {
                b.attr(c) || a.preventDefault()
              })
            }
          }
        }
      }),
      kf = {};
    f(ne, function(a, b) {
      function c(a, c, e) {
        a.$watch(e[d], function(a) {
          e.$set(b, !!a)
        })
      }
      if ("multiple" != a) {
        var d = jb("ng-" + b),
          e = c;
        "checked" === a && (e = function(a, b, e) {
          e.ngModel !== e[d] && c(a, b, e)
        }), kf[d] = function() {
          return {
            restrict: "A",
            priority: 100,
            link: e
          }
        }
      }
    }), f(pe, function(a, b) {
      kf[b] = function() {
        return {
          priority: 100,
          link: function(a, c, d) {
            if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
              var e = d.ngPattern.match(rd);
              if (e) return void d.$set("ngPattern", new RegExp(e[1], e[2]))
            }
            a.$watch(d[b], function(a) {
              d.$set(b, a)
            })
          }
        }
      }
    }), f(["src", "srcset", "href"], function(a) {
      var b = jb("ng-" + a);
      kf[b] = function() {
        return {
          priority: 99,
          link: function(c, d, e) {
            var f = a,
              g = a;
            "href" === a && "[object SVGAnimatedString]" === Fd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) {
              return b ? (e.$set(g, b), void(yd && f && d.prop(f, e[g]))) : void("href" === a && e.$set(g, null))
            })
          }
        }
      }
    });
    var lf = {
        $addControl: p,
        $$renameControl: _c,
        $removeControl: p,
        $setValidity: p,
        $setDirty: p,
        $setPristine: p,
        $setSubmitted: p
      },
      mf = "ng-submitted";
    ad.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var nf = function(a) {
        return ["$timeout", function(b) {
          var d = {
            name: "form",
            restrict: a ? "EAC" : "E",
            controller: ad,
            compile: function(d, e) {
              d.addClass(Vf).addClass(Tf);
              var f = e.name ? "name" : a && e.ngForm ? "ngForm" : !1;
              return {
                pre: function(a, d, e, g) {
                  if (!("action" in e)) {
                    var h = function(b) {
                      a.$apply(function() {
                        g.$commitViewValue(), g.$setSubmitted()
                      }), b.preventDefault()
                    };
                    be(d[0], "submit", h), d.on("$destroy", function() {
                      b(function() {
                        ce(d[0], "submit", h)
                      }, 0, !1)
                    })
                  }
                  var i = g.$$parentForm;
                  f && (hc(a, g.$name, g, g.$name), e.$observe(f, function(b) {
                    g.$name !== b && (hc(a, g.$name, c, g.$name), i.$$renameControl(g, b), hc(a, g.$name, g, g.$name))
                  })), d.on("$destroy", function() {
                    i.$removeControl(g), f && hc(a, e[f], c, g.$name), l(g, lf)
                  })
                }
              }
            }
          };
          return d
        }]
      },
      of = nf(),
      pf = nf(!0),
      qf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
      rf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
      sf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
      tf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
      uf = /^(\d{4})-(\d{2})-(\d{2})$/,
      vf = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      wf = /^(\d{4})-W(\d\d)$/,
      xf = /^(\d{4})-(\d\d)$/,
      yf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      zf = {
        text: cd,
        date: gd("date", uf, fd(uf, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": gd("datetimelocal", vf, fd(vf, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: gd("time", yf, fd(yf, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: gd("week", wf, ed, "yyyy-Www"),
        month: gd("month", xf, fd(xf, ["yyyy", "MM"]), "yyyy-MM"),
        number: id,
        url: jd,
        email: kd,
        radio: ld,
        checkbox: nd,
        hidden: p,
        button: p,
        submit: p,
        reset: p,
        file: p
      },
      Af = ["$browser", "$sniffer", "$filter", "$parse", function(a, b, c, d) {
        return {
          restrict: "E",
          require: ["?ngModel"],
          link: {
            pre: function(e, f, g, h) {
              h[0] && (zf[td(g.type)] || zf.text)(e, f, g, h[0], b, a, c, d)
            }
          }
        }
      }],
      Bf = /^(true|false|\d+)$/,
      Cf = function() {
        return {
          restrict: "A",
          priority: 100,
          compile: function(a, b) {
            return Bf.test(b.ngValue) ? function(a, b, c) {
              c.$set("value", a.$eval(c.ngValue))
            } : function(a, b, c) {
              a.$watch(c.ngValue, function(a) {
                c.$set("value", a)
              })
            }
          }
        }
      },
      Df = ["$compile", function(a) {
        return {
          restrict: "AC",
          compile: function(b) {
            return a.$$addBindingClass(b),
              function(b, d, e) {
                a.$$addBindingInfo(d, e.ngBind), d = d[0], b.$watch(e.ngBind, function(a) {
                  d.textContent = a === c ? "" : a
                })
              }
          }
        }
      }],
      Ef = ["$interpolate", "$compile", function(a, b) {
        return {
          compile: function(d) {
            return b.$$addBindingClass(d),
              function(d, e, f) {
                var g = a(e.attr(f.$attr.ngBindTemplate));
                b.$$addBindingInfo(e, g.expressions), e = e[0], f.$observe("ngBindTemplate", function(a) {
                  e.textContent = a === c ? "" : a
                })
              }
          }
        }
      }],
      Ff = ["$sce", "$parse", "$compile", function(a, b, c) {
        return {
          restrict: "A",
          compile: function(d, e) {
            var f = b(e.ngBindHtml),
              g = b(e.ngBindHtml, function(a) {
                return (a || "").toString()
              });
            return c.$$addBindingClass(d),
              function(b, d, e) {
                c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function() {
                  d.html(a.getTrustedHtml(f(b)) || "")
                })
              }
          }
        }
      }],
      Gf = r({
        restrict: "A",
        require: "ngModel",
        link: function(a, b, c, d) {
          d.$viewChangeListeners.push(function() {
            a.$eval(c.ngChange)
          })
        }
      }),
      Hf = od("", !0),
      If = od("Odd", 0),
      Jf = od("Even", 1),
      Kf = $c({
        compile: function(a, b) {
          b.$set("ngCloak", c), a.removeClass("ng-cloak")
        }
      }),
      Lf = [function() {
        return {
          restrict: "A",
          scope: !0,
          controller: "@",
          priority: 500
        }
      }],
      Mf = {},
      Nf = {
        blur: !0,
        focus: !0
      };
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
      var b = jb("ng-" + a);
      Mf[b] = ["$parse", "$rootScope", function(c, d) {
        return {
          restrict: "A",
          compile: function(e, f) {
            var g = c(f[b], null, !0);
            return function(b, c) {
              c.on(a, function(c) {
                var e = function() {
                  g(b, {
                    $event: c
                  })
                };
                Nf[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
              })
            }
          }
        }
      }]
    });
    var Of = ["$animate", function(a) {
        return {
          multiElement: !0,
          transclude: "element",
          priority: 600,
          terminal: !0,
          restrict: "A",
          $$tlb: !0,
          link: function(c, d, e, f, g) {
            var h, i, j;
            c.$watch(e.ngIf, function(c) {
              c ? i || g(function(c, f) {
                i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                  clone: c
                }, a.enter(c, d.parent(), d)
              }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = pa(h.clone), a.leave(j).then(function() {
                j = null
              }), h = null))
            })
          }
        }
      }],
      Pf = ["$templateRequest", "$anchorScroll", "$animate", function(a, b, c) {
        return {
          restrict: "ECA",
          priority: 400,
          terminal: !0,
          transclude: "element",
          controller: Id.noop,
          compile: function(d, e) {
            var f = e.ngInclude || e.src,
              g = e.onload || "",
              h = e.autoscroll;
            return function(d, e, i, j, k) {
              var l, m, n, o = 0,
                p = function() {
                  m && (m.remove(), m = null), l && (l.$destroy(), l = null), n && (c.leave(n).then(function() {
                    m = null
                  }), m = n, n = null)
                };
              d.$watch(f, function(f) {
                var i = function() {
                    !u(h) || h && !d.$eval(h) || b()
                  },
                  m = ++o;
                f ? (a(f, !0).then(function(a) {
                  if (m === o) {
                    var b = d.$new();
                    j.template = a;
                    var h = k(b, function(a) {
                      p(), c.enter(a, null, e).then(i)
                    });
                    l = b, n = h, l.$emit("$includeContentLoaded", f), d.$eval(g)
                  }
                }, function() {
                  m === o && (p(), d.$emit("$includeContentError", f))
                }), d.$emit("$includeContentRequested", f)) : (p(), j.template = null)
              })
            }
          }
        }
      }],
      Qf = ["$compile", function(a) {
        return {
          restrict: "ECA",
          priority: -400,
          require: "ngInclude",
          link: function(c, d, e, f) {
            return /SVG/.test(d[0].toString()) ? (d.empty(), void a(Aa(f.template, b).childNodes)(c, function(a) {
              d.append(a)
            }, {
              futureParentElement: d
            })) : (d.html(f.template), void a(d.contents())(c))
          }
        }
      }],
      Rf = $c({
        priority: 450,
        compile: function() {
          return {
            pre: function(a, b, c) {
              a.$eval(c.ngInit)
            }
          }
        }
      }),
      Sf = function() {
        return {
          restrict: "A",
          priority: 100,
          require: "ngModel",
          link: function(a, b, d, e) {
            var g = b.attr(d.$attr.ngList) || ", ",
              h = "false" !== d.ngTrim,
              i = h ? Nd(g) : g,
              j = function(a) {
                if (!t(a)) {
                  var b = [];
                  return a && f(a.split(i), function(a) {
                    a && b.push(h ? Nd(a) : a)
                  }), b
                }
              };
            e.$parsers.push(j), e.$formatters.push(function(a) {
              return Ld(a) ? a.join(g) : c
            }), e.$isEmpty = function(a) {
              return !a || !a.length
            }
          }
        }
      },
      Tf = "ng-valid",
      Uf = "ng-invalid",
      Vf = "ng-pristine",
      Wf = "ng-dirty",
      Xf = "ng-untouched",
      Yf = "ng-touched",
      Zf = "ng-pending",
      $f = new d("ngModel"),
      _f = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, e, g, h, i, j, k, l) {
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = c, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = c, this.$name = l(d.name || "", !1)(a);
        var m, n = g(d.ngModel),
          o = n.assign,
          q = n,
          r = o,
          s = null,
          v = this;
        this.$$setOptions = function(a) {
          if (v.$options = a, a && a.getterSetter) {
            var b = g(d.ngModel + "()"),
              c = g(d.ngModel + "($$$p)");
            q = function(a) {
              var c = n(a);
              return A(c) && (c = b(a)), c
            }, r = function(a, b) {
              A(n(a)) ? c(a, {
                $$$p: v.$modelValue
              }) : o(a, v.$modelValue)
            }
          } else if (!n.assign) throw $f("nonassign", "Expression '{0}' is non-assignable. Element: {1}", d.ngModel, $(e))
        }, this.$render = p, this.$isEmpty = function(a) {
          return t(a) || "" === a || null === a || a !== a
        };
        var w = e.inheritedData("$formController") || lf,
          x = 0;
        pd({
          ctrl: this,
          $element: e,
          set: function(a, b) {
            a[b] = !0
          },
          unset: function(a, b) {
            delete a[b]
          },
          parentForm: w,
          $animate: h
        }), this.$setPristine = function() {
          v.$dirty = !1, v.$pristine = !0, h.removeClass(e, Wf), h.addClass(e, Vf)
        }, this.$setDirty = function() {
          v.$dirty = !0, v.$pristine = !1, h.removeClass(e, Vf), h.addClass(e, Wf), w.$setDirty()
        }, this.$setUntouched = function() {
          v.$touched = !1, v.$untouched = !0, h.setClass(e, Xf, Yf)
        }, this.$setTouched = function() {
          v.$touched = !0, v.$untouched = !1, h.setClass(e, Yf, Xf)
        }, this.$rollbackViewValue = function() {
          i.cancel(s), v.$viewValue = v.$$lastCommittedViewValue, v.$render()
        }, this.$validate = function() {
          if (!y(v.$modelValue) || !isNaN(v.$modelValue)) {
            var a = v.$$lastCommittedViewValue,
              b = v.$$rawModelValue,
              d = v.$valid,
              e = v.$modelValue,
              f = v.$options && v.$options.allowInvalid;
            v.$$runValidators(b, a, function(a) {
              f || d === a || (v.$modelValue = a ? b : c, v.$modelValue !== e && v.$$writeModelToScope())
            })
          }
        }, this.$$runValidators = function(a, b, d) {
          function e() {
            var a = v.$$parserName || "parse";
            return m !== c ? (m || (f(v.$validators, function(a, b) {
              i(b, null)
            }), f(v.$asyncValidators, function(a, b) {
              i(b, null)
            })), i(a, m), m) : (i(a, null), !0)
          }

          function g() {
            var c = !0;
            return f(v.$validators, function(d, e) {
              var f = d(a, b);
              c = c && f, i(e, f)
            }), c ? !0 : (f(v.$asyncValidators, function(a, b) {
              i(b, null)
            }), !1)
          }

          function h() {
            var d = [],
              e = !0;
            f(v.$asyncValidators, function(f, g) {
              var h = f(a, b);
              if (!I(h)) throw $f("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", h);
              i(g, c), d.push(h.then(function() {
                i(g, !0)
              }, function(a) {
                e = !1, i(g, !1)
              }))
            }), d.length ? k.all(d).then(function() {
              j(e)
            }, p) : j(!0)
          }

          function i(a, b) {
            l === x && v.$setValidity(a, b)
          }

          function j(a) {
            l === x && d(a)
          }
          x++;
          var l = x;
          return e() && g() ? void h() : void j(!1)
        }, this.$commitViewValue = function() {
          var a = v.$viewValue;
          i.cancel(s), (v.$$lastCommittedViewValue !== a || "" === a && v.$$hasNativeValidators) && (v.$$lastCommittedViewValue = a, v.$pristine && this.$setDirty(), this.$$parseAndValidate())
        }, this.$$parseAndValidate = function() {
          function b() {
            v.$modelValue !== g && v.$$writeModelToScope()
          }
          var d = v.$$lastCommittedViewValue,
            e = d;
          if (m = t(e) ? c : !0)
            for (var f = 0; f < v.$parsers.length; f++)
              if (e = v.$parsers[f](e), t(e)) {
                m = !1;
                break
              }
          y(v.$modelValue) && isNaN(v.$modelValue) && (v.$modelValue = q(a));
          var g = v.$modelValue,
            h = v.$options && v.$options.allowInvalid;
          v.$$rawModelValue = e, h && (v.$modelValue = e, b()), v.$$runValidators(e, v.$$lastCommittedViewValue, function(a) {
            h || (v.$modelValue = a ? e : c, b())
          })
        }, this.$$writeModelToScope = function() {
          r(a, v.$modelValue), f(v.$viewChangeListeners, function(a) {
            try {
              a()
            } catch (c) {
              b(c)
            }
          })
        }, this.$setViewValue = function(a, b) {
          v.$viewValue = a, (!v.$options || v.$options.updateOnDefault) && v.$$debounceViewValueCommit(b)
        }, this.$$debounceViewValueCommit = function(b) {
          var c, d = 0,
            e = v.$options;
          e && u(e.debounce) && (c = e.debounce, y(c) ? d = c : y(c[b]) ? d = c[b] : y(c["default"]) && (d = c["default"])), i.cancel(s), d ? s = i(function() {
            v.$commitViewValue()
          }, d) : j.$$phase ? v.$commitViewValue() : a.$apply(function() {
            v.$commitViewValue()
          })
        }, a.$watch(function() {
          var b = q(a);
          if (b !== v.$modelValue && (v.$modelValue === v.$modelValue || b === b)) {
            v.$modelValue = v.$$rawModelValue = b, m = c;
            for (var d = v.$formatters, e = d.length, f = b; e--;) f = d[e](f);
            v.$viewValue !== f && (v.$viewValue = v.$$lastCommittedViewValue = f, v.$render(), v.$$runValidators(b, f, p))
          }
          return b
        })
      }],
      ag = ["$rootScope", function(a) {
        return {
          restrict: "A",
          require: ["ngModel", "^?form", "^?ngModelOptions"],
          controller: _f,
          priority: 1,
          compile: function(b) {
            return b.addClass(Vf).addClass(Xf).addClass(Tf), {
              pre: function(a, b, c, d) {
                var e = d[0],
                  f = d[1] || lf;
                e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function(a) {
                  e.$name !== a && f.$$renameControl(e, a)
                }), a.$on("$destroy", function() {
                  f.$removeControl(e)
                })
              },
              post: function(b, c, d, e) {
                var f = e[0];
                f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function(a) {
                  f.$$debounceViewValueCommit(a && a.type)
                }), c.on("blur", function(c) {
                  f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched))
                })
              }
            }
          }
        }
      }],
      bg = /(\s+|^)default(\s+|$)/,
      cg = function() {
        return {
          restrict: "A",
          controller: ["$scope", "$attrs", function(a, b) {
            var d = this;
            this.$options = O(a.$eval(b.ngModelOptions)), this.$options.updateOn !== c ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Nd(this.$options.updateOn.replace(bg, function() {
              return d.$options.updateOnDefault = !0, " "
            }))) : this.$options.updateOnDefault = !0;
          }]
        }
      },
      dg = $c({
        terminal: !0,
        priority: 1e3
      }),
      eg = d("ngOptions"),
      fg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      gg = ["$compile", "$parse", function(a, c) {
        function d(a, b, d) {
          function f(a, b, c, d, e) {
            this.selectValue = a, this.viewValue = b, this.label = c, this.group = d, this.disabled = e
          }

          function g(a) {
            var b;
            if (!j && e(a)) b = a;
            else {
              b = [];
              for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
            }
            return b
          }
          var h = a.match(fg);
          if (!h) throw eg("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", a, $(b));
          var i = h[5] || h[7],
            j = h[6],
            k = / as /.test(h[0]) && h[1],
            l = h[9],
            m = c(h[2] ? h[1] : i),
            n = k && c(k),
            o = n || m,
            p = l && c(l),
            q = l ? function(a, b) {
              return p(d, b)
            } : function(a) {
              return Wa(a)
            },
            r = function(a, b) {
              return q(a, x(a, b))
            },
            s = c(h[2] || h[1]),
            t = c(h[3] || ""),
            u = c(h[4] || ""),
            v = c(h[8]),
            w = {},
            x = j ? function(a, b) {
              return w[j] = b, w[i] = a, w
            } : function(a) {
              return w[i] = a, w
            };
          return {
            trackBy: l,
            getTrackByValue: r,
            getWatchables: c(v, function(a) {
              var b = [];
              a = a || [];
              for (var c = g(a), e = c.length, f = 0; e > f; f++) {
                var i = a === c ? f : c[f],
                  j = (a[i], x(a[i], i)),
                  k = q(a[i], j);
                if (b.push(k), h[2] || h[1]) {
                  var l = s(d, j);
                  b.push(l)
                }
                if (h[4]) {
                  var m = u(d, j);
                  b.push(m)
                }
              }
              return b
            }),
            getOptions: function() {
              for (var a = [], b = {}, c = v(d) || [], e = g(c), h = e.length, i = 0; h > i; i++) {
                var j = c === e ? i : e[i],
                  k = c[j],
                  m = x(k, j),
                  n = o(d, m),
                  p = q(n, m),
                  w = s(d, m),
                  y = t(d, m),
                  z = u(d, m),
                  A = new f(p, n, w, y, z);
                a.push(A), b[p] = A
              }
              return {
                items: a,
                selectValueMap: b,
                getOptionFromViewValue: function(a) {
                  return b[r(a)]
                },
                getViewValueFromOption: function(a) {
                  return l ? Id.copy(a.viewValue) : a.viewValue
                }
              }
            }
          }
        }
        var g = b.createElement("option"),
          h = b.createElement("optgroup");
        return {
          restrict: "A",
          terminal: !0,
          require: ["select", "?ngModel"],
          link: function(b, c, e, i) {
            function j(a, b) {
              a.element = b, b.disabled = a.disabled, a.value !== b.value && (b.value = a.selectValue), a.label !== b.label && (b.label = a.label, b.textContent = a.label)
            }

            function k(a, b, c, d) {
              var e;
              return b && td(b.nodeName) === c ? e = b : (e = d.cloneNode(!1), b ? a.insertBefore(e, b) : a.appendChild(e)), e
            }

            function l(a) {
              for (var b; a;) b = a.nextSibling, Qa(a), a = b
            }

            function m(a) {
              var b = p && p[0],
                c = w && w[0];
              if (b || c)
                for (; a && (a === b || a === c);) a = a.nextSibling;
              return a
            }

            function n() {
              var a = x && q.readValue();
              x = y.getOptions();
              var b = {},
                d = c[0].firstChild;
              if (v && c.prepend(p), d = m(d), x.items.forEach(function(a) {
                  var e, f, i;
                  a.group ? (e = b[a.group], e || (f = k(c[0], d, "optgroup", h), d = f.nextSibling, f.label = a.group, e = b[a.group] = {
                    groupElement: f,
                    currentOptionElement: f.firstChild
                  }), i = k(e.groupElement, e.currentOptionElement, "option", g), j(a, i), e.currentOptionElement = i.nextSibling) : (i = k(c[0], d, "option", g), j(a, i), d = i.nextSibling)
                }), Object.keys(b).forEach(function(a) {
                  l(b[a].currentOptionElement)
                }), l(d), o.$render(), !o.$isEmpty(a)) {
                var e = q.readValue();
                (y.trackBy ? Q(a, e) : a === e) || (o.$setViewValue(e), o.$render())
              }
            }
            var o = i[1];
            if (o) {
              for (var p, q = i[0], r = e.multiple, s = 0, t = c.children(), u = t.length; u > s; s++)
                if ("" === t[s].value) {
                  p = t.eq(s);
                  break
                }
              var v = !!p,
                w = zd(g.cloneNode(!1));
              w.val("?");
              var x, y = d(e.ngOptions, c, b),
                z = function() {
                  v || c.prepend(p), c.val(""), p.prop("selected", !0), p.attr("selected", !0)
                },
                A = function() {
                  v || p.remove()
                },
                B = function() {
                  c.prepend(w), c.val("?"), w.prop("selected", !0), w.attr("selected", !0)
                },
                C = function() {
                  w.remove()
                };
              r ? (o.$isEmpty = function(a) {
                return !a || 0 === a.length
              }, q.writeValue = function(a) {
                x.items.forEach(function(a) {
                  a.element.selected = !1
                }), a && a.forEach(function(a) {
                  var b = x.getOptionFromViewValue(a);
                  b && !b.disabled && (b.element.selected = !0)
                })
              }, q.readValue = function() {
                var a = c.val() || [],
                  b = [];
                return f(a, function(a) {
                  var c = x.selectValueMap[a];
                  c.disabled || b.push(x.getViewValueFromOption(c))
                }), b
              }, y.trackBy && b.$watchCollection(function() {
                return Ld(o.$viewValue) ? o.$viewValue.map(function(a) {
                  return y.getTrackByValue(a)
                }) : void 0
              }, function() {
                o.$render()
              })) : (q.writeValue = function(a) {
                var b = x.getOptionFromViewValue(a);
                b && !b.disabled ? c[0].value !== b.selectValue && (C(), A(), c[0].value = b.selectValue, b.element.selected = !0, b.element.setAttribute("selected", "selected")) : null === a || v ? (C(), z()) : (A(), B())
              }, q.readValue = function() {
                var a = x.selectValueMap[c.val()];
                return a && !a.disabled ? (A(), C(), x.getViewValueFromOption(a)) : null
              }, y.trackBy && b.$watch(function() {
                return y.getTrackByValue(o.$viewValue)
              }, function() {
                o.$render()
              })), v ? (p.remove(), a(p)(b), p.removeClass("ng-scope")) : p = zd(g.cloneNode(!1)), n(), b.$watchCollection(y.getWatchables, n)
            }
          }
        }
      }],
      hg = ["$locale", "$interpolate", "$log", function(a, b, c) {
        var d = /{}/g,
          e = /^when(Minus)?(.+)$/;
        return {
          link: function(g, h, i) {
            function j(a) {
              h.text(a || "")
            }
            var k, l = i.count,
              m = i.$attr.when && h.attr(i.$attr.when),
              n = i.offset || 0,
              o = g.$eval(m) || {},
              q = {},
              r = b.startSymbol(),
              s = b.endSymbol(),
              u = r + l + "-" + n + s,
              v = Id.noop;
            f(i, function(a, b) {
              var c = e.exec(b);
              if (c) {
                var d = (c[1] ? "-" : "") + td(c[2]);
                o[d] = h.attr(i.$attr[b])
              }
            }), f(o, function(a, c) {
              q[c] = b(a.replace(d, u))
            }), g.$watch(l, function(b) {
              var d = parseFloat(b),
                e = isNaN(d);
              if (e || d in o || (d = a.pluralCat(d - n)), d !== k && !(e && y(k) && isNaN(k))) {
                v();
                var f = q[d];
                t(f) ? (null != b && c.debug("ngPluralize: no rule defined for '" + d + "' in " + m), v = p, j()) : v = g.$watch(f, j), k = d
              }
            })
          }
        }
      }],
      ig = ["$parse", "$animate", function(a, g) {
        var h = "$$NG_REMOVED",
          i = d("ngRepeat"),
          j = function(a, b, c, d, e, f, g) {
            a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b))
          },
          k = function(a) {
            return a.clone[0]
          },
          l = function(a) {
            return a.clone[a.clone.length - 1]
          };
        return {
          restrict: "A",
          multiElement: !0,
          transclude: "element",
          priority: 1e3,
          terminal: !0,
          $$tlb: !0,
          compile: function(d, m) {
            var n = m.ngRepeat,
              o = b.createComment(" end ngRepeat: " + n + " "),
              p = n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!p) throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
            var q = p[1],
              r = p[2],
              s = p[3],
              t = p[4];
            if (p = q.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !p) throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", q);
            var u = p[3] || p[1],
              v = p[2];
            if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s))) throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", s);
            var w, x, y, z, A = {
              $id: Wa
            };
            return t ? w = a(t) : (y = function(a, b) {
                return Wa(b)
              }, z = function(a) {
                return a
              }),
              function(a, b, d, m, p) {
                w && (x = function(b, c, d) {
                  return v && (A[v] = b), A[u] = c, A.$index = d, w(a, A)
                });
                var q = qa();
                a.$watchCollection(r, function(d) {
                  var m, r, t, w, A, B, C, D, E, F, G, H, I = b[0],
                    J = qa();
                  if (s && (a[s] = d), e(d)) E = d, D = x || y;
                  else {
                    D = x || z, E = [];
                    for (var K in d) d.hasOwnProperty(K) && "$" !== K.charAt(0) && E.push(K)
                  }
                  for (w = E.length, G = new Array(w), m = 0; w > m; m++)
                    if (A = d === E ? m : E[m], B = d[A], C = D(A, B, m), q[C]) F = q[C], delete q[C], J[C] = F, G[m] = F;
                    else {
                      if (J[C]) throw f(G, function(a) {
                        a && a.scope && (q[a.id] = a)
                      }), i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", n, C, B);
                      G[m] = {
                        id: C,
                        scope: c,
                        clone: c
                      }, J[C] = !0
                    }
                  for (var L in q) {
                    if (F = q[L], H = pa(F.clone), g.leave(H), H[0].parentNode)
                      for (m = 0, r = H.length; r > m; m++) H[m][h] = !0;
                    F.scope.$destroy()
                  }
                  for (m = 0; w > m; m++)
                    if (A = d === E ? m : E[m], B = d[A], F = G[m], F.scope) {
                      t = I;
                      do t = t.nextSibling; while (t && t[h]);
                      k(F) != t && g.move(pa(F.clone), null, zd(I)), I = l(F), j(F.scope, m, u, B, v, A, w)
                    } else p(function(a, b) {
                      F.scope = b;
                      var c = o.cloneNode(!1);
                      a[a.length++] = c, g.enter(a, null, zd(I)), I = c, F.clone = a, J[F.id] = F, j(F.scope, m, u, B, v, A, w)
                    });
                  q = J
                })
              }
          }
        }
      }],
      jg = "ng-hide",
      kg = "ng-hide-animate",
      lg = ["$animate", function(a) {
        return {
          restrict: "A",
          multiElement: !0,
          link: function(b, c, d) {
            b.$watch(d.ngShow, function(b) {
              a[b ? "removeClass" : "addClass"](c, jg, {
                tempClasses: kg
              })
            })
          }
        }
      }],
      mg = ["$animate", function(a) {
        return {
          restrict: "A",
          multiElement: !0,
          link: function(b, c, d) {
            b.$watch(d.ngHide, function(b) {
              a[b ? "addClass" : "removeClass"](c, jg, {
                tempClasses: kg
              })
            })
          }
        }
      }],
      ng = $c(function(a, b, c) {
        a.$watch(c.ngStyle, function(a, c) {
          c && a !== c && f(c, function(a, c) {
            b.css(c, "")
          }), a && b.css(a)
        }, !0)
      }),
      og = ["$animate", function(a) {
        return {
          require: "ngSwitch",
          controller: ["$scope", function() {
            this.cases = {}
          }],
          link: function(c, d, e, g) {
            var h = e.ngSwitch || e.on,
              i = [],
              j = [],
              k = [],
              l = [],
              m = function(a, b) {
                return function() {
                  a.splice(b, 1)
                }
              };
            c.$watch(h, function(c) {
              var d, e;
              for (d = 0, e = k.length; e > d; ++d) a.cancel(k[d]);
              for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
                var h = pa(j[d].clone);
                l[d].$destroy();
                var n = k[d] = a.leave(h);
                n.then(m(k, d))
              }
              j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && f(i, function(c) {
                c.transclude(function(d, e) {
                  l.push(e);
                  var f = c.element;
                  d[d.length++] = b.createComment(" end ngSwitchWhen: ");
                  var g = {
                    clone: d
                  };
                  j.push(g), a.enter(d, f.parent(), f)
                })
              })
            })
          }
        }
      }],
      pg = $c({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, c, d, e) {
          d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
            transclude: e,
            element: b
          })
        }
      }),
      qg = $c({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, c, d, e) {
          d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
            transclude: e,
            element: b
          })
        }
      }),
      rg = $c({
        restrict: "EAC",
        link: function(a, b, c, e, f) {
          if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", $(b));
          f(function(a) {
            b.empty(), b.append(a)
          })
        }
      }),
      sg = ["$templateCache", function(a) {
        return {
          restrict: "E",
          terminal: !0,
          compile: function(b, c) {
            if ("text/ng-template" == c.type) {
              var d = c.id,
                e = b[0].text;
              a.put(d, e)
            }
          }
        }
      }],
      tg = {
        $setViewValue: p,
        $render: p
      },
      ug = ["$element", "$scope", "$attrs", function(a, d, e) {
        var f = this,
          g = new Xa;
        f.ngModelCtrl = tg, f.unknownOption = zd(b.createElement("option")), f.renderUnknownOption = function(b) {
          var c = "? " + Wa(b) + " ?";
          f.unknownOption.val(c), a.prepend(f.unknownOption), a.val(c)
        }, d.$on("$destroy", function() {
          f.renderUnknownOption = p
        }), f.removeUnknownOption = function() {
          f.unknownOption.parent() && f.unknownOption.remove()
        }, f.readValue = function() {
          return f.removeUnknownOption(), a.val()
        }, f.writeValue = function(b) {
          f.hasOption(b) ? (f.removeUnknownOption(), a.val(b), "" === b && f.emptyOption.prop("selected", !0)) : null == b && f.emptyOption ? (f.removeUnknownOption(), a.val("")) : f.renderUnknownOption(b)
        }, f.addOption = function(a, b) {
          na(a, '"option value"'), "" === a && (f.emptyOption = b);
          var c = g.get(a) || 0;
          g.put(a, c + 1)
        }, f.removeOption = function(a) {
          var b = g.get(a);
          b && (1 === b ? (g.remove(a), "" === a && (f.emptyOption = c)) : g.put(a, b - 1))
        }, f.hasOption = function(a) {
          return !!g.get(a)
        }
      }],
      vg = function() {
        return {
          restrict: "E",
          require: ["select", "?ngModel"],
          controller: ug,
          link: function(a, b, c, d) {
            var e = d[1];
            if (e) {
              var g = d[0];
              if (g.ngModelCtrl = e, e.$render = function() {
                  g.writeValue(e.$viewValue)
                }, b.on("change", function() {
                  a.$apply(function() {
                    e.$setViewValue(g.readValue())
                  })
                }), c.multiple) {
                g.readValue = function() {
                  var a = [];
                  return f(b.find("option"), function(b) {
                    b.selected && a.push(b.value)
                  }), a
                }, g.writeValue = function(a) {
                  var c = new Xa(a);
                  f(b.find("option"), function(a) {
                    a.selected = u(c.get(a.value))
                  })
                };
                var h, i = NaN;
                a.$watch(function() {
                  i !== e.$viewValue || Q(h, e.$viewValue) || (h = P(e.$viewValue), e.$render()), i = e.$viewValue
                }), e.$isEmpty = function(a) {
                  return !a || 0 === a.length
                }
              }
            }
          }
        }
      },
      wg = ["$interpolate", function(a) {
        function b(a) {
          a[0].hasAttribute("selected") && (a[0].selected = !0)
        }
        return {
          restrict: "E",
          priority: 100,
          compile: function(c, d) {
            if (t(d.value)) {
              var e = a(c.text(), !0);
              e || d.$set("value", c.text())
            }
            return function(a, c, d) {
              var f = "$selectController",
                g = c.parent(),
                h = g.data(f) || g.parent().data(f);
              h && h.ngModelCtrl && (e ? a.$watch(e, function(a, e) {
                d.$set("value", a), e !== a && h.removeOption(e), h.addOption(a, c), h.ngModelCtrl.$render(), b(c)
              }) : (h.addOption(d.value, c), h.ngModelCtrl.$render(), b(c)), c.on("$destroy", function() {
                h.removeOption(d.value), h.ngModelCtrl.$render()
              }))
            }
          }
        }
      }],
      xg = r({
        restrict: "E",
        terminal: !1
      }),
      yg = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, b, c, d) {
            d && (c.required = !0, d.$validators.required = function(a, b) {
              return !c.required || !d.$isEmpty(b)
            }, c.$observe("required", function() {
              d.$validate()
            }))
          }
        }
      },
      zg = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, b, e, f) {
            if (f) {
              var g, h = e.ngPattern || e.pattern;
              e.$observe("pattern", function(a) {
                if (x(a) && a.length > 0 && (a = new RegExp("^" + a + "$")), a && !a.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", h, a, $(b));
                g = a || c, f.$validate()
              }), f.$validators.pattern = function(a) {
                return f.$isEmpty(a) || t(g) || g.test(a)
              }
            }
          }
        }
      },
      Ag = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, b, c, d) {
            if (d) {
              var e = -1;
              c.$observe("maxlength", function(a) {
                var b = n(a);
                e = isNaN(b) ? -1 : b, d.$validate()
              }), d.$validators.maxlength = function(a, b) {
                return 0 > e || d.$isEmpty(b) || b.length <= e
              }
            }
          }
        }
      },
      Bg = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, b, c, d) {
            if (d) {
              var e = 0;
              c.$observe("minlength", function(a) {
                e = n(a) || 0, d.$validate()
              }), d.$validators.minlength = function(a, b) {
                return d.$isEmpty(b) || b.length >= e
              }
            }
          }
        }
      };
    return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (ka(), ua(Id), void zd(b).ready(function() {
      fa(b, ga)
    }))
  }(window, document), !window.angular.$$csp() && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'), function(a, b, c) {
    "use strict";

    function d(a, b, c) {
      if (!a) throw ngMinErr("areq", "Argument '{0}' is {1}", b || "?", c || "required");
      return a
    }

    function e(a, b) {
      return a || b ? a ? b ? (M(a) && (a = a.join(" ")), M(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
    }

    function f(a) {
      var b = {};
      return a && (a.to || a.from) && (b.to = a.to, b.from = a.from), b
    }

    function g(a, b, c) {
      var d = "";
      return a = M(a) ? a : a && N(a) && a.length ? a.split(/\s+/) : [], L(a, function(a, e) {
        a && a.length > 0 && (d += e > 0 ? " " : "", d += c ? b + a : a + b)
      }), d
    }

    function h(a, b) {
      var c = a.indexOf(b);
      b >= 0 && a.splice(c, 1)
    }

    function i(a) {
      if (a instanceof K) switch (a.length) {
        case 0:
          return [];
        case 1:
          if (a[0].nodeType === T) return a;
          break;
        default:
          return K(j(a))
      }
      return a.nodeType === T ? K(a) : void 0
    }

    function j(a) {
      if (!a[0]) return a;
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.nodeType == T) return c
      }
    }

    function k(a, b, c) {
      L(b, function(b) {
        a.addClass(b, c)
      })
    }

    function l(a, b, c) {
      L(b, function(b) {
        a.removeClass(b, c)
      })
    }

    function m(a) {
      return function(b, c) {
        c.addClass && (k(a, b, c.addClass), c.addClass = null), c.removeClass && (l(a, b, c.removeClass), c.removeClass = null)
      }
    }

    function n(a) {
      if (a = a || {}, !a.$$prepared) {
        var b = a.domOperation || I;
        a.domOperation = function() {
          a.$$domOperationFired = !0, b(), b = I
        }, a.$$prepared = !0
      }
      return a
    }

    function o(a, b) {
      p(a, b), q(a, b)
    }

    function p(a, b) {
      b.from && (a.css(b.from), b.from = null)
    }

    function q(a, b) {
      b.to && (a.css(b.to), b.to = null)
    }

    function r(a, b, c) {
      var d = (b.addClass || "") + " " + (c.addClass || ""),
        e = (b.removeClass || "") + " " + (c.removeClass || ""),
        f = s(a.attr("class"), d, e);
      return J(b, c), f.addClass ? b.addClass = f.addClass : b.addClass = null, f.removeClass ? b.removeClass = f.removeClass : b.removeClass = null, b
    }

    function s(a, b, c) {
      function d(a) {
        N(a) && (a = a.split(" "));
        var b = {};
        return L(a, function(a) {
          a.length && (b[a] = !0)
        }), b
      }
      var e = 1,
        f = -1,
        g = {};
      a = d(a), b = d(b), L(b, function(a, b) {
        g[b] = e
      }), c = d(c), L(c, function(a, b) {
        g[b] = g[b] === e ? null : f
      });
      var h = {
        addClass: "",
        removeClass: ""
      };
      return L(g, function(b, c) {
        var d, g;
        b === e ? (d = "addClass", g = !a[c]) : b === f && (d = "removeClass", g = a[c]), g && (h[d].length && (h[d] += " "), h[d] += c)
      }), h
    }

    function t(a) {
      return a instanceof b.element ? a[0] : a
    }

    function u(a, b, c) {
      var d = Object.create(null),
        e = a.getComputedStyle(b) || {};
      return L(c, function(a, b) {
        var c = e[a];
        if (c) {
          var f = c.charAt(0);
          ("-" === f || "+" === f || f >= 0) && (c = v(c)), 0 === c && (c = null), d[b] = c
        }
      }), d
    }

    function v(a) {
      var b = 0,
        c = a.split(/\s*,\s*/);
      return L(c, function(a) {
        "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)), a = parseFloat(a) || 0, b = b ? Math.max(a, b) : a
      }), b
    }

    function w(a) {
      return 0 === a || null != a
    }

    function x(a, b) {
      var c = E,
        d = a + "s";
      return b ? c += Z : d += " linear all", [c, d]
    }

    function y(a) {
      return [ia, a + "s"]
    }

    function z(a, b) {
      var c = b ? ha : ja;
      return [c, a + "s"]
    }

    function A(a, b) {
      var c = b ? "-" + b + "s" : "";
      return C(a, [ja, c]), [ja, c]
    }

    function B(a, b) {
      var c = b ? "paused" : "",
        d = G + ca;
      return C(a, [d, c]), [d, c]
    }

    function C(a, b) {
      var c = b[0],
        d = b[1];
      a.style[c] = d
    }

    function D() {
      var a = Object.create(null);
      return {
        flush: function() {
          a = Object.create(null)
        },
        count: function(b) {
          var c = a[b];
          return c ? c.total : 0
        },
        get: function(b) {
          var c = a[b];
          return c && c.value
        },
        put: function(b, c) {
          a[b] ? a[b].total++ : a[b] = {
            total: 1,
            value: c
          }
        }
      }
    }
    var E, F, G, H, I = b.noop,
      J = b.extend,
      K = b.element,
      L = b.forEach,
      M = b.isArray,
      N = b.isString,
      O = b.isObject,
      P = b.isUndefined,
      Q = b.isDefined,
      R = b.isFunction,
      S = b.isElement,
      T = 1,
      U = "ng-animate",
      V = "$$ngAnimateChildren",
      W = ["$$rAF", function(a) {
        function b(a) {
          f.push([].concat(a)), c()
        }

        function c() {
          if (f.length) {
            for (var b = [], g = 0; g < f.length; g++) {
              var h = f[g];
              d(h), h.length && b.push(h)
            }
            f = b, e || a(function() {
              e || c()
            })
          }
        }

        function d(a) {
          var b = a.shift();
          b()
        }
        var e, f = [];
        return b.waitUntilQuiet = function(b) {
          e && e(), e = a(function() {
            e = null, b(), c()
          })
        }, b
      }],
      X = [function() {
        return function(a, c, d) {
          var e = d.ngAnimateChildren;
          b.isString(e) && 0 === e.length ? c.data(V, !0) : d.$observe("ngAnimateChildren", function(a) {
            a = "on" === a || "true" === a, c.data(V, a)
          })
        }
      }],
      Y = "";
    a.ontransitionend === c && a.onwebkittransitionend !== c ? (Y = "-webkit-", E = "WebkitTransition", F = "webkitTransitionEnd transitionend") : (E = "transition", F = "transitionend"), a.onanimationend === c && a.onwebkitanimationend !== c ? (Y = "-webkit-", G = "WebkitAnimation", H = "webkitAnimationEnd animationend") : (G = "animation", H = "animationend");
    var Z = "Duration",
      $ = "Property",
      _ = "Delay",
      aa = "TimingFunction",
      ba = "IterationCount",
      ca = "PlayState",
      da = 3,
      ea = 1.5,
      fa = 1e3,
      ga = 9999,
      ha = G + _,
      ia = G + Z,
      ja = E + _,
      ka = E + Z,
      la = {
        transitionDuration: ka,
        transitionDelay: ja,
        transitionProperty: E + $,
        animationDuration: ia,
        animationDelay: ha,
        animationIterationCount: G + ba
      },
      ma = {
        transitionDuration: ka,
        transitionDelay: ja,
        animationDuration: ia,
        animationDelay: ha
      },
      na = ["$animateProvider", function(a) {
        var b = D(),
          c = D();
        this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$document", "$sniffer", "$$rAFScheduler", function(a, d, e, i, j, k, l) {
          function r(a, b) {
            var c = "$$ngAnimateParentKey",
              d = a.parentNode,
              e = d[c] || (d[c] = ++N);
            return e + "-" + a.getAttribute("class") + "-" + b
          }

          function s(c, d, e, f) {
            var g = b.get(e);
            return g || (g = u(a, c, f), "infinite" === g.animationIterationCount && (g.animationIterationCount = 1)), b.put(e, g), g
          }

          function v(e, f, h, i) {
            var j;
            if (b.count(h) > 0 && (j = c.get(h), !j)) {
              var k = g(f, "-stagger");
              d.addClass(e, k), j = u(a, e, i), j.animationDuration = Math.max(j.animationDuration, 0), j.transitionDuration = Math.max(j.transitionDuration, 0), d.removeClass(e, k), c.put(h, j)
            }
            return j || {}
          }

          function D(a) {
            P.push(a), l.waitUntilQuiet(function() {
              b.flush(), c.flush();
              for (var a = O.offsetWidth + 1, d = 0; d < P.length; d++) P[d](a);
              P.length = 0
            })
          }

          function I(a, b, c) {
            var d = s(a, b, c, la),
              e = d.animationDelay,
              f = d.transitionDelay;
            return d.maxDelay = e && f ? Math.max(e, f) : e || f, d.maxDuration = Math.max(d.animationDuration * d.animationIterationCount, d.transitionDuration), d
          }

          function J(a, c) {
            function j() {
              m()
            }

            function l() {
              m(!0)
            }

            function m(b) {
              O || Q && P || (O = !0, P = !1, d.removeClass(a, ia), d.removeClass(a, ka), B(N, !1), A(N, !1), L(X, function(a) {
                N.style[a[0]] = ""
              }), K(a, c), o(a, c), c.onDone && c.onDone(), R && R.complete(!b))
            }

            function s(a) {
              za.blockTransition && A(N, a), za.blockKeyframeAnimation && B(N, !!a)
            }

            function u() {
              return R = new e({
                end: j,
                cancel: l
              }), m(), {
                $$willAnimate: !1,
                start: function() {
                  return R
                },
                end: j
              }
            }

            function J() {
              function b() {
                if (!O) {
                  if (s(!1), L(X, function(a) {
                      var b = a[0],
                        c = a[1];
                      N.style[b] = c
                    }), K(a, c), d.addClass(a, ka), za.recalculateTimingStyles) {
                    if (ja = N.className + " " + ia, oa = r(N, ja), xa = I(N, ja, oa), ya = xa.maxDelay, T = Math.max(ya, 0), V = xa.maxDuration, 0 === V) return void m();
                    za.hasTransitions = xa.transitionDuration > 0, za.hasAnimations = xa.animationDuration > 0
                  }
                  if (za.applyTransitionDelay || za.applyAnimationDelay) {
                    ya = "boolean" != typeof c.delay && w(c.delay) ? parseFloat(c.delay) : ya, T = Math.max(ya, 0);
                    var b;
                    za.applyTransitionDelay && (xa.transitionDelay = ya, b = z(ya), X.push(b), N.style[b[0]] = b[1]), za.applyAnimationDelay && (xa.animationDelay = ya, b = z(ya, !0), X.push(b), N.style[b[0]] = b[1])
                  }
                  if (U = T * fa, W = V * fa, c.easing) {
                    var h, k = c.easing;
                    za.hasTransitions && (h = E + aa, X.push([h, k]), N.style[h] = k), za.hasAnimations && (h = G + aa, X.push([h, k]), N.style[h] = k)
                  }
                  xa.transitionDuration && j.push(F), xa.animationDuration && j.push(H), g = Date.now(), a.on(j.join(" "), f), i(e, U + ea * W), q(a, c)
                }
              }

              function e() {
                m()
              }

              function f(a) {
                a.stopPropagation();
                var b = a.originalEvent || a,
                  c = b.$manualTimeStamp || b.timeStamp || Date.now(),
                  d = parseFloat(b.elapsedTime.toFixed(da));
                Math.max(c - g, 0) >= U && d >= V && (Q = !0, m())
              }
              if (!O) {
                if (!N.parentNode) return void m();
                var g, j = [],
                  k = function(a) {
                    if (Q) P && a && (P = !1, m());
                    else if (P = !a, xa.animationDuration) {
                      var b = B(N, P);
                      P ? X.push(b) : h(X, b)
                    }
                  },
                  l = va > 0 && (xa.transitionDuration && 0 === pa.transitionDuration || xa.animationDuration && 0 === pa.animationDuration) && Math.max(pa.animationDelay, pa.transitionDelay);
                l ? i(b, Math.floor(l * va * fa), !1) : b(), S.resume = function() {
                  k(!0)
                }, S.pause = function() {
                  k(!1)
                }
              }
            }
            var N = t(a);
            if (!N || !N.parentNode) return u();
            c = n(c);
            var O, P, Q, R, S, T, U, V, W, X = [],
              Y = a.attr("class"),
              Z = f(c);
            if (0 === c.duration || !k.animations && !k.transitions) return u();
            var _ = c.event && M(c.event) ? c.event.join(" ") : c.event,
              ba = _ && c.structural,
              ca = "",
              ha = "";
            ba ? ca = g(_, "ng-", !0) : _ && (ca = _), c.addClass && (ha += g(c.addClass, "-add")), c.removeClass && (ha.length && (ha += " "), ha += g(c.removeClass, "-remove")), c.applyClassesEarly && ha.length && (K(a, c), ha = "");
            var ia = [ca, ha].join(" ").trim(),
              ja = Y + " " + ia,
              ka = g(ia, "-active"),
              la = Z.to && Object.keys(Z.to).length > 0,
              na = (c.keyframeStyle || "").length > 0;
            if (!na && !la && !ia) return u();
            var oa, pa;
            if (c.stagger > 0) {
              var qa = parseFloat(c.stagger);
              pa = {
                transitionDelay: qa,
                animationDelay: qa,
                transitionDuration: 0,
                animationDuration: 0
              }
            } else oa = r(N, ja), pa = v(N, ia, oa, ma);
            d.addClass(a, ia);
            var ra;
            if (c.transitionStyle) {
              var sa = [E, c.transitionStyle];
              C(N, sa), X.push(sa)
            }
            if (c.duration >= 0) {
              ra = N.style[E].length > 0;
              var ta = x(c.duration, ra);
              C(N, ta), X.push(ta)
            }
            if (c.keyframeStyle) {
              var ua = [G, c.keyframeStyle];
              C(N, ua), X.push(ua)
            }
            var va = pa ? c.staggerIndex >= 0 ? c.staggerIndex : b.count(oa) : 0,
              wa = 0 === va;
            wa && A(N, ga);
            var xa = I(N, ja, oa),
              ya = xa.maxDelay;
            T = Math.max(ya, 0), V = xa.maxDuration;
            var za = {};
            return za.hasTransitions = xa.transitionDuration > 0, za.hasAnimations = xa.animationDuration > 0, za.hasTransitionAll = za.hasTransitions && "all" == xa.transitionProperty, za.applyTransitionDuration = la && (za.hasTransitions && !za.hasTransitionAll || za.hasAnimations && !za.hasTransitions), za.applyAnimationDuration = c.duration && za.hasAnimations, za.applyTransitionDelay = w(c.delay) && (za.applyTransitionDuration || za.hasTransitions), za.applyAnimationDelay = w(c.delay) && za.hasAnimations, za.recalculateTimingStyles = ha.length > 0, (za.applyTransitionDuration || za.applyAnimationDuration) && (V = c.duration ? parseFloat(c.duration) : V, za.applyTransitionDuration && (za.hasTransitions = !0, xa.transitionDuration = V, ra = N.style[E + $].length > 0, X.push(x(V, ra))), za.applyAnimationDuration && (za.hasAnimations = !0, xa.animationDuration = V, X.push(y(V)))), 0 !== V || za.recalculateTimingStyles ? (null == c.duration && xa.transitionDuration > 0 && (za.recalculateTimingStyles = za.recalculateTimingStyles || wa), U = T * fa, W = V * fa, c.skipBlocking || (za.blockTransition = xa.transitionDuration > 0, za.blockKeyframeAnimation = xa.animationDuration > 0 && pa.animationDelay > 0 && 0 === pa.animationDuration), p(a, c), za.blockTransition || A(N, !1), s(V), {
              $$willAnimate: !0,
              end: j,
              start: function() {
                return O ? void 0 : (S = {
                  end: j,
                  cancel: l,
                  resume: null,
                  pause: null
                }, R = new e(S), D(J), R)
              }
            }) : u()
          }
          var K = m(d),
            N = 0,
            O = t(j).body,
            P = [];
          return J
        }]
      }],
      oa = ["$$animationProvider", function(a) {
        a.drivers.push("$$animateCssDriver");
        var b = "ng-animate-shim",
          c = "ng-anchor",
          d = "ng-anchor-out",
          e = "ng-anchor-in";
        this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$document", "$sniffer", function(a, f, g, h, i, j) {
          function k(a) {
            return a.replace(/\bng-\S+\b/g, "")
          }

          function l(a, b) {
            return N(a) && (a = a.split(" ")), N(b) && (b = b.split(" ")), a.filter(function(a) {
              return -1 === b.indexOf(a)
            }).join(" ")
          }

          function m(f, h, i) {
            function j(a) {
              var b = {},
                c = t(a).getBoundingClientRect();
              return L(["width", "height", "top", "left"], function(a) {
                var d = c[a];
                switch (a) {
                  case "top":
                    d += p.scrollTop;
                    break;
                  case "left":
                    d += p.scrollLeft
                }
                b[a] = Math.floor(d) + "px"
              }), b
            }

            function m() {
              var b = a(s, {
                addClass: d,
                delay: !0,
                from: j(h)
              });
              return b.$$willAnimate ? b : null
            }

            function n(a) {
              return a.attr("class") || ""
            }

            function o() {
              var b = k(n(i)),
                c = l(b, u),
                f = l(u, b),
                g = a(s, {
                  to: j(i),
                  addClass: e + " " + c,
                  removeClass: d + " " + f,
                  delay: !0
                });
              return g.$$willAnimate ? g : null
            }

            function q() {
              s.remove(), h.removeClass(b), i.removeClass(b)
            }
            var s = K(t(h).cloneNode(!0)),
              u = k(n(s));
            h.addClass(b), i.addClass(b), s.addClass(c), r.append(s);
            var v, w = m();
            if (!w && (v = o(), !v)) return q();
            var x = w || v;
            return {
              start: function() {
                function a() {
                  c && c.end()
                }
                var b, c = x.start();
                return c.done(function() {
                  return c = null, !v && (v = o()) ? (c = v.start(), c.done(function() {
                    c = null, q(), b.complete()
                  }), c) : (q(), void b.complete())
                }), b = new g({
                  end: a,
                  cancel: a
                })
              }
            }
          }

          function n(a, b, c, d) {
            var e = o(a),
              f = o(b),
              h = [];
            return L(d, function(a) {
              var b = a.out,
                d = a["in"],
                e = m(c, b, d);
              e && h.push(e)
            }), e || f || 0 !== h.length ? {
              start: function() {
                function a() {
                  L(b, function(a) {
                    a.end()
                  })
                }
                var b = [];
                e && b.push(e.start()), f && b.push(f.start()), L(h, function(a) {
                  b.push(a.start())
                });
                var c = new g({
                  end: a,
                  cancel: a
                });
                return g.all(b, function(a) {
                  c.complete(a)
                }), c
              }
            } : void 0
          }

          function o(b) {
            var c = b.element,
              d = b.options || {};
            b.structural ? (d.structural = d.applyClassesEarly = !0, d.event = b.event, "leave" === d.event && (d.onDone = d.domOperation)) : d.event = null;
            var e = a(c, d);
            return e.$$willAnimate ? e : null
          }
          if (!j.animations && !j.transitions) return I;
          var p = t(i).body,
            q = t(h),
            r = K(p.parentNode === q ? p : q);
          return function(a) {
            return a.from && a.to ? n(a.from, a.to, a.classes, a.anchors) : o(a)
          }
        }]
      }],
      pa = ["$animateProvider", function(a) {
        this.$get = ["$injector", "$$AnimateRunner", "$$rAFMutex", "$$jqLite", function(b, c, d, e) {
          function f(c) {
            c = M(c) ? c : c.split(" ");
            for (var d = [], e = {}, f = 0; f < c.length; f++) {
              var g = c[f],
                h = a.$$registeredAnimations[g];
              h && !e[g] && (d.push(b.get(h)), e[g] = !0)
            }
            return d
          }
          var g = m(e);
          return function(a, b, d, e) {
            function h() {
              e.domOperation(), g(a, e)
            }

            function i(a, b, d, e, f) {
              var g;
              switch (d) {
                case "animate":
                  g = [b, e.from, e.to, f];
                  break;
                case "setClass":
                  g = [b, p, q, f];
                  break;
                case "addClass":
                  g = [b, p, f];
                  break;
                case "removeClass":
                  g = [b, q, f];
                  break;
                default:
                  g = [b, f]
              }
              g.push(e);
              var h = a.apply(a, g);
              if (h)
                if (R(h.start) && (h = h.start()), h instanceof c) h.done(f);
                else if (R(h)) return h;
              return I
            }

            function j(a, b, d, e, f) {
              var g = [];
              return L(e, function(e) {
                var h = e[f];
                h && g.push(function() {
                  var e, f, g = !1,
                    j = function(a) {
                      g || (g = !0, (f || I)(a), e.complete(!a))
                    };
                  return e = new c({
                    end: function() {
                      j()
                    },
                    cancel: function() {
                      j(!0)
                    }
                  }), f = i(h, a, b, d, function(a) {
                    var b = a === !1;
                    j(b)
                  }), e
                })
              }), g
            }

            function k(a, b, d, e, f) {
              var g = j(a, b, d, e, f);
              if (0 === g.length) {
                var h, i;
                "beforeSetClass" === f ? (h = j(a, "removeClass", d, e, "beforeRemoveClass"), i = j(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = j(a, "removeClass", d, e, "removeClass"), i = j(a, "addClass", d, e, "addClass")), h && (g = g.concat(h)), i && (g = g.concat(i))
              }
              if (0 !== g.length) return function(a) {
                var b = [];
                return g.length && L(g, function(a) {
                    b.push(a())
                  }), b.length ? c.all(b, a) : a(),
                  function(a) {
                    L(b, function(b) {
                      a ? b.cancel() : b.end()
                    })
                  }
              }
            }
            3 === arguments.length && O(d) && (e = d, d = null), e = n(e), d || (d = a.attr("class") || "", e.addClass && (d += " " + e.addClass), e.removeClass && (d += " " + e.removeClass));
            var l, m, p = e.addClass,
              q = e.removeClass,
              r = f(d);
            if (r.length) {
              var s, t;
              "leave" == b ? (t = "leave", s = "afterLeave") : (t = "before" + b.charAt(0).toUpperCase() + b.substr(1), s = b), "enter" !== b && "move" !== b && (l = k(a, b, e, r, t)), m = k(a, b, e, r, s)
            }
            return l || m ? {
              start: function() {
                function b(b) {
                  i = !0, h(), o(a, e), j.complete(b)
                }

                function d(a) {
                  i || ((f || I)(a), b(a))
                }
                var f, g = [];
                l && g.push(function(a) {
                  f = l(a)
                }), g.length ? g.push(function(a) {
                  h(), a(!0)
                }) : h(), m && g.push(function(a) {
                  f = m(a)
                });
                var i = !1,
                  j = new c({
                    end: function() {
                      d()
                    },
                    cancel: function() {
                      d(!0)
                    }
                  });
                return c.chain(g, b), j
              }
            } : void 0
          }
        }]
      }],
      qa = ["$$animationProvider", function(a) {
        a.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function(a, b) {
          function c(b) {
            var c = b.element,
              d = b.event,
              e = b.options,
              f = b.classes;
            return a(c, d, f, e)
          }
          return function(a) {
            if (a.from && a.to) {
              var d = c(a.from),
                e = c(a.to);
              if (!d && !e) return;
              return {
                start: function() {
                  function a() {
                    return function() {
                      L(f, function(a) {
                        a.end()
                      })
                    }
                  }

                  function c(a) {
                    g.complete(a)
                  }
                  var f = [];
                  d && f.push(d.start()), e && f.push(e.start()), b.all(f, c);
                  var g = new b({
                    end: a(),
                    cancel: a()
                  });
                  return g
                }
              }
            }
            return c(a)
          }
        }]
      }],
      ra = "data-ng-animate",
      sa = "$ngAnimatePin",
      ta = ["$animateProvider", function(a) {
        function b(a, b, c, d) {
          return g[a].some(function(a) {
            return a(b, c, d)
          })
        }

        function c(a, b) {
          a = a || {};
          var c = (a.addClass || "").length > 0,
            d = (a.removeClass || "").length > 0;
          return b ? c && d : c || d
        }
        var e = 1,
          f = 2,
          g = this.rules = {
            skip: [],
            cancel: [],
            join: []
          };
        g.join.push(function(a, b, d) {
          return !b.structural && c(b.options)
        }), g.skip.push(function(a, b, d) {
          return !b.structural && !c(b.options)
        }), g.skip.push(function(a, b, c) {
          return "leave" == c.event && b.structural
        }), g.skip.push(function(a, b, c) {
          return c.structural && !b.structural
        }), g.cancel.push(function(a, b, c) {
          return c.structural && b.structural
        }), g.cancel.push(function(a, b, c) {
          return c.state === f && b.structural
        }), g.cancel.push(function(a, b, c) {
          var d = b.options,
            e = c.options;
          return d.addClass && d.addClass === e.removeClass || d.removeClass && d.removeClass === e.addClass
        }), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", function(g, h, k, l, p, q, s, u, v) {
          function w(a, b) {
            return r(a, b, {})
          }

          function x(a, b) {
            var c = t(a),
              d = [],
              e = U[b];
            return e && L(e, function(a) {
              a.node.contains(c) && d.push(a.callback)
            }), d
          }

          function y(a, b, c, d) {
            g(function() {
              L(x(b, a), function(a) {
                a(b, c, d)
              })
            })
          }

          function z(a, d, g) {
            function j(b, c, d, e) {
              y(c, a, d, e), b.progress(c, d, e)
            }

            function k(b) {
              Y(a, g), o(a, g), g.domOperation(), p.complete(!b)
            }
            var l, m;
            a = i(a), a && (l = t(a), m = a.parent()), g = n(g);
            var p = new s;
            if (!l) return k(), p;
            M(g.addClass) && (g.addClass = g.addClass.join(" ")), M(g.removeClass) && (g.removeClass = g.removeClass.join(" ")), g.from && !O(g.from) && (g.from = null), g.to && !O(g.to) && (g.to = null);
            var u = [l.className, g.addClass, g.removeClass].join(" ");
            if (!X(u)) return k(), p;
            var v = ["enter", "move", "leave"].indexOf(d) >= 0,
              x = !I || H.get(l),
              z = !x && G.get(l) || {},
              C = !!z.state;
            if (x || C && z.state == e || (x = !E(a, m, d)), x) return k(), p;
            v && A(a);
            var J = {
              structural: v,
              element: a,
              event: d,
              close: k,
              options: g,
              runner: p
            };
            if (C) {
              var K = b("skip", a, J, z);
              if (K) return z.state === f ? (k(), p) : (r(a, z.options, g), z.runner);
              var L = b("cancel", a, J, z);
              if (L) z.state === f ? z.runner.end() : z.structural ? z.close() : r(a, J.options, z.options);
              else {
                var N = b("join", a, J, z);
                if (N) {
                  if (z.state !== f) return d = J.event = z.event, g = r(a, z.options, J.options), p;
                  w(a, g)
                }
              }
            } else w(a, g);
            var P = J.structural;
            if (P || (P = "animate" === J.event && Object.keys(J.options.to || {}).length > 0 || c(J.options)), !P) return k(), B(a), p;
            v && D(m);
            var Q = (z.counter || 0) + 1;
            return J.counter = Q, F(a, e, J), h.$$postDigest(function() {
              var b = G.get(l),
                e = !b;
              b = b || {};
              var h = a.parent() || [],
                i = h.length > 0 && ("animate" === b.event || b.structural || c(b.options));
              if (e || b.counter !== Q || !i) return e && (Y(a, g), o(a, g)), (e || v && b.event !== d) && (g.domOperation(), p.end()), void(i || B(a));
              d = !b.structural && c(b.options, !0) ? "setClass" : b.event, b.structural && D(h), F(a, f);
              var m = q(a, d, b.options);
              m.done(function(b) {
                k(!b);
                var c = G.get(l);
                c && c.counter === Q && B(t(a)), j(p, d, "close", {})
              }), p.setHost(m), j(p, d, "start", {})
            }), p
          }

          function A(a) {
            var b = t(a),
              c = b.querySelectorAll("[" + ra + "]");
            L(c, function(a) {
              var b = parseInt(a.getAttribute(ra)),
                c = G.get(a);
              switch (b) {
                case f:
                  c.runner.end();
                case e:
                  c && G.remove(a)
              }
            })
          }

          function B(a) {
            var b = t(a);
            b.removeAttribute(ra), G.remove(b)
          }

          function C(a, b) {
            return t(a) === t(b)
          }

          function D(a) {
            function b(a, b) {
              !b.structural && c(b.options) && (b.state === f && b.runner.end(), B(a))
            }
            for (var d = t(a);;) {
              if (!d || d.nodeType !== T) break;
              var e = G.get(d);
              e && b(d, e), d = d.parentNode
            }
          }

          function E(a, b, c) {
            var d, e = !1,
              f = !1,
              g = !1,
              h = a.data(sa);
            for (h && (b = h); b && b.length;) {
              f || (f = C(b, k));
              var i = b[0];
              if (i.nodeType !== T) break;
              var j = G.get(i) || {};
              if (g || (g = j.structural || H.get(i)), P(d) || d === !0) {
                var l = b.data(V);
                Q(l) && (d = l)
              }
              if (g && d === !1) break;
              f || (f = C(b, k), f || (h = b.data(sa), h && (b = h))), e || (e = C(b, R)), b = b.parent()
            }
            var m = !g || d;
            return m && f && e
          }

          function F(a, b, c) {
            c = c || {}, c.state = b;
            var d = t(a);
            d.setAttribute(ra, b);
            var e = G.get(d),
              f = e ? J(e, c) : c;
            G.put(d, f)
          }
          var G = new p,
            H = new p,
            I = null,
            N = h.$watch(function() {
              return 0 === u.totalPendingRequests
            }, function(a) {
              a && (N(), h.$$postDigest(function() {
                h.$$postDigest(function() {
                  null === I && (I = !0)
                })
              }))
            }),
            R = K(l[0].body),
            U = {},
            W = a.classNameFilter(),
            X = W ? function(a) {
              return W.test(a)
            } : function() {
              return !0
            },
            Y = m(v);
          return {
            on: function(a, b, c) {
              var d = j(b);
              U[a] = U[a] || [], U[a].push({
                node: d,
                callback: c
              })
            },
            off: function(a, b, c) {
              function d(a, b, c) {
                var d = j(b);
                return a.filter(function(a) {
                  var b = a.node === d && (!c || a.callback === c);
                  return !b
                })
              }
              var e = U[a];
              e && (U[a] = 1 === arguments.length ? null : d(e, b, c))
            },
            pin: function(a, b) {
              d(S(a), "element", "not an element"), d(S(b), "parentElement", "not an element"), a.data(sa, b)
            },
            push: function(a, b, c, d) {
              return c = c || {}, c.domOperation = d, z(a, b, c)
            },
            enabled: function(a, b) {
              var c = arguments.length;
              if (0 === c) b = !!I;
              else {
                var d = S(a);
                if (d) {
                  var e = t(a),
                    f = H.get(e);
                  1 === c ? b = !f : (b = !!b, b ? f && H.remove(e) : H.put(e, !0))
                } else b = I = !!a
              }
              return b
            }
          }
        }]
      }],
      ua = ["$$rAF", function(a) {
        return function() {
          var b = !1;
          return a(function() {
              b = !0
            }),
            function(c) {
              b ? c() : a(c)
            }
        }
      }],
      va = ["$q", "$$rAFMutex", function(a, b) {
        function c(a) {
          this.setHost(a), this._doneCallbacks = [], this._runInAnimationFrame = b(), this._state = 0
        }
        var d = 0,
          e = 1,
          f = 2;
        return c.chain = function(a, b) {
          function c() {
            return d === a.length ? void b(!0) : void a[d](function(a) {
              return a === !1 ? void b(!1) : (d++, void c())
            })
          }
          var d = 0;
          c()
        }, c.all = function(a, b) {
          function c(c) {
            e = e && c, ++d === a.length && b(e)
          }
          var d = 0,
            e = !0;
          L(a, function(a) {
            a.done(c)
          })
        }, c.prototype = {
          setHost: function(a) {
            this.host = a || {}
          },
          done: function(a) {
            this._state === f ? a() : this._doneCallbacks.push(a)
          },
          progress: I,
          getPromise: function() {
            if (!this.promise) {
              var b = this;
              this.promise = a(function(a, c) {
                b.done(function(b) {
                  b === !1 ? c() : a()
                })
              })
            }
            return this.promise
          },
          then: function(a, b) {
            return this.getPromise().then(a, b)
          },
          "catch": function(a) {
            return this.getPromise()["catch"](a)
          },
          "finally": function(a) {
            return this.getPromise()["finally"](a)
          },
          pause: function() {
            this.host.pause && this.host.pause()
          },
          resume: function() {
            this.host.resume && this.host.resume()
          },
          end: function() {
            this.host.end && this.host.end(), this._resolve(!0)
          },
          cancel: function() {
            this.host.cancel && this.host.cancel(), this._resolve(!1)
          },
          complete: function(a) {
            var b = this;
            b._state === d && (b._state = e, b._runInAnimationFrame(function() {
              b._resolve(a)
            }))
          },
          _resolve: function(a) {
            this._state !== f && (L(this._doneCallbacks, function(b) {
              b(a)
            }), this._doneCallbacks.length = 0, this._state = f)
          }
        }, c
      }],
      wa = ["$animateProvider", function(a) {
        function b(a, b) {
          a.data(h, b)
        }

        function c(a) {
          a.removeData(h)
        }

        function d(a) {
          return a.data(h)
        }
        var f = "ng-animate-ref",
          g = this.drivers = [],
          h = "$$animationRunner";
        this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$rAFScheduler", function(a, h, i, j, k) {
          var l = [],
            p = m(a),
            q = 0,
            r = 0,
            s = [];
          return function(m, u, v) {
            function w(a) {
              var b = "[" + f + "]",
                c = a.hasAttribute(f) ? [a] : a.querySelectorAll(b),
                d = [];
              return L(c, function(a) {
                var b = a.getAttribute(f);
                b && b.length && d.push(a)
              }), d
            }

            function x(a) {
              var b = [],
                c = {};
              L(a, function(a, d) {
                var e = a.element,
                  g = t(e),
                  h = a.event,
                  i = ["enter", "move"].indexOf(h) >= 0,
                  j = a.structural ? w(g) : [];
                if (j.length) {
                  var k = i ? "to" : "from";
                  L(j, function(a) {
                    var b = a.getAttribute(f);
                    c[b] = c[b] || {}, c[b][k] = {
                      animationID: d,
                      element: K(a)
                    }
                  })
                } else b.push(a)
              });
              var d = {},
                e = {};
              return L(c, function(c, f) {
                var g = c.from,
                  h = c.to;
                if (!g || !h) {
                  var i = g ? g.animationID : h.animationID,
                    j = i.toString();
                  return void(d[j] || (d[j] = !0, b.push(a[i])))
                }
                var k = a[g.animationID],
                  l = a[h.animationID],
                  m = g.animationID.toString();
                if (!e[m]) {
                  var n = e[m] = {
                    structural: !0,
                    beforeStart: function() {
                      k.beforeStart(), l.beforeStart()
                    },
                    close: function() {
                      k.close(), l.close()
                    },
                    classes: y(k.classes, l.classes),
                    from: k,
                    to: l,
                    anchors: []
                  };
                  n.classes.length ? b.push(n) : (b.push(k), b.push(l))
                }
                e[m].anchors.push({
                  out: g.element,
                  "in": h.element
                })
              }), b
            }

            function y(a, b) {
              a = a.split(" "), b = b.split(" ");
              for (var c = [], d = 0; d < a.length; d++) {
                var e = a[d];
                if ("ng-" !== e.substring(0, 3))
                  for (var f = 0; f < b.length; f++)
                    if (e === b[f]) {
                      c.push(e);
                      break
                    }
              }
              return c.join(" ")
            }

            function z(a) {
              for (var b = g.length - 1; b >= 0; b--) {
                var c = g[b];
                if (i.has(c)) {
                  var d = i.get(c),
                    e = d(a);
                  if (e) return e
                }
              }
            }

            function A() {
              m.addClass(U), H && a.addClass(m, H)
            }

            function B(a, b) {
              function c(a) {
                d(a).setHost(b)
              }
              a.from && a.to ? (c(a.from.element), c(a.to.element)) : c(a.element)
            }

            function C() {
              var a = d(m);
              !a || "leave" === u && v.$$domOperationFired || a.end()
            }

            function D(b) {
              m.off("$destroy", C), c(m), p(m, v), o(m, v), v.domOperation(), H && a.removeClass(m, H), m.removeClass(U), F.complete(!b)
            }
            v = n(v);
            var E = ["enter", "move", "leave"].indexOf(u) >= 0,
              F = new j({
                end: function() {
                  D()
                },
                cancel: function() {
                  D(!0)
                }
              });
            if (!g.length) return D(), F;
            b(m, F);
            var G = e(m.attr("class"), e(v.addClass, v.removeClass)),
              H = v.tempClasses;
            H && (G += " " + H, v.tempClasses = null);
            var I;
            return E || (I = q, q += 1), l.push({
              element: m,
              classes: G,
              event: u,
              classBasedIndex: I,
              structural: E,
              options: v,
              beforeStart: A,
              close: D
            }), m.on("$destroy", C), l.length > 1 ? F : (h.$$postDigest(function() {
              r = q, q = 0, s.length = 0;
              var a = [];
              L(l, function(b) {
                d(b.element) && a.push(b)
              }), l.length = 0, L(x(a), function(a) {
                function b() {
                  a.beforeStart();
                  var b, c = a.close,
                    e = a.anchors ? a.from.element || a.to.element : a.element;
                  if (d(e) && t(e).parentNode) {
                    var f = z(a);
                    f && (b = f.start)
                  }
                  if (b) {
                    var g = b();
                    g.done(function(a) {
                      c(!a)
                    }), B(a, g)
                  } else c()
                }
                a.structural ? b() : (s.push({
                  node: t(a.element),
                  fn: b
                }), a.classBasedIndex === r - 1 && (s = s.sort(function(a, b) {
                  return b.node.contains(a.node)
                }).map(function(a) {
                  return a.fn
                }), k(s)))
              })
            }), F)
          }
        }]
      }];
    b.module("ngAnimate", []).directive("ngAnimateChildren", X).factory("$$rAFMutex", ua).factory("$$rAFScheduler", W).factory("$$AnimateRunner", va).provider("$$animateQueue", ta).provider("$$animation", wa).provider("$animateCss", na).provider("$$animateCssDriver", oa).provider("$$animateJs", pa).provider("$$animateJsDriver", qa)
  }(window, window.angular), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.stackedMap", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-popup.html", "template/tooltip/tooltip-popup.html", "template/tooltip/tooltip-template-popup.html", "template/popover/popover-html.html", "template/popover/popover-template.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.collapse", []).directive("uibCollapse", ["$animate", "$injector", function(a, b) {
    var c = b.has("$animateCss") ? b.get("$animateCss") : null;
    return {
      link: function(b, d, e) {
        function f() {
          d.removeClass("collapse").addClass("collapsing").attr("aria-expanded", !0).attr("aria-hidden", !1), c ? c(d, {
            addClass: "in",
            easing: "ease",
            to: {
              height: d[0].scrollHeight + "px"
            }
          }).start()["finally"](g) : a.addClass(d, "in", {
            to: {
              height: d[0].scrollHeight + "px"
            }
          }).then(g)
        }

        function g() {
          d.removeClass("collapsing").addClass("collapse").css({
            height: "auto"
          })
        }

        function h() {
          return d.hasClass("collapse") || d.hasClass("in") ? (d.css({
            height: d[0].scrollHeight + "px"
          }).removeClass("collapse").addClass("collapsing").attr("aria-expanded", !1).attr("aria-hidden", !0), void(c ? c(d, {
            removeClass: "in",
            to: {
              height: "0"
            }
          }).start()["finally"](i) : a.removeClass(d, "in", {
            to: {
              height: "0"
            }
          }).then(i))) : i()
        }

        function i() {
          d.css({
            height: "0"
          }), d.removeClass("collapsing").addClass("collapse")
        }
        b.$watch(e.uibCollapse, function(a) {
          a ? h() : f()
        })
      }
    }
  }]), angular.module("ui.bootstrap.collapse").value("$collapseSuppressWarning", !1).directive("collapse", ["$animate", "$injector", "$log", "$collapseSuppressWarning", function(a, b, c, d) {
    var e = b.has("$animateCss") ? b.get("$animateCss") : null;
    return {
      link: function(b, f, g) {
        function h() {
          f.removeClass("collapse").addClass("collapsing").attr("aria-expanded", !0).attr("aria-hidden", !1), e ? e(f, {
            easing: "ease",
            to: {
              height: f[0].scrollHeight + "px"
            }
          }).start().done(i) : a.animate(f, {}, {
            height: f[0].scrollHeight + "px"
          }).then(i)
        }

        function i() {
          f.removeClass("collapsing").addClass("collapse in").css({
            height: "auto"
          })
        }

        function j() {
          return f.hasClass("collapse") || f.hasClass("in") ? (f.css({
            height: f[0].scrollHeight + "px"
          }).removeClass("collapse in").addClass("collapsing").attr("aria-expanded", !1).attr("aria-hidden", !0), void(e ? e(f, {
            to: {
              height: "0"
            }
          }).start().done(k) : a.animate(f, {}, {
            height: "0"
          }).then(k))) : k()
        }

        function k() {
          f.css({
            height: "0"
          }), f.removeClass("collapsing").addClass("collapse")
        }
        d || c.warn("collapse is now deprecated. Use uib-collapse instead."), b.$watch(g.collapse, function(a) {
          a ? j() : h()
        })
      }
    }
  }]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("uibAccordionConfig", {
    closeOthers: !0
  }).controller("UibAccordionController", ["$scope", "$attrs", "uibAccordionConfig", function(a, b, c) {
    this.groups = [], this.closeOthers = function(d) {
      var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
      e && angular.forEach(this.groups, function(a) {
        a !== d && (a.isOpen = !1)
      })
    }, this.addGroup = function(a) {
      var b = this;
      this.groups.push(a), a.$on("$destroy", function(c) {
        b.removeGroup(a)
      })
    }, this.removeGroup = function(a) {
      var b = this.groups.indexOf(a); - 1 !== b && this.groups.splice(b, 1)
    }
  }]).directive("uibAccordion", function() {
    return {
      controller: "UibAccordionController",
      controllerAs: "accordion",
      transclude: !0,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/accordion/accordion.html"
      }
    }
  }).directive("uibAccordionGroup", function() {
    return {
      require: "^uibAccordion",
      transclude: !0,
      replace: !0,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/accordion/accordion-group.html"
      },
      scope: {
        heading: "@",
        isOpen: "=?",
        isDisabled: "=?"
      },
      controller: function() {
        this.setHeading = function(a) {
          this.heading = a
        }
      },
      link: function(a, b, c, d) {
        d.addGroup(a), a.openClass = c.openClass || "panel-open", a.panelClass = c.panelClass, a.$watch("isOpen", function(c) {
          b.toggleClass(a.openClass, !!c), c && d.closeOthers(a)
        }), a.toggleOpen = function(b) {
          a.isDisabled || b && 32 !== b.which || (a.isOpen = !a.isOpen)
        }
      }
    }
  }).directive("uibAccordionHeading", function() {
    return {
      transclude: !0,
      template: "",
      replace: !0,
      require: "^uibAccordionGroup",
      link: function(a, b, c, d, e) {
        d.setHeading(e(a, angular.noop))
      }
    }
  }).directive("uibAccordionTransclude", function() {
    return {
      require: ["?^uibAccordionGroup", "?^accordionGroup"],
      link: function(a, b, c, d) {
        d = d[0] ? d[0] : d[1], a.$watch(function() {
          return d[c.uibAccordionTransclude]
        }, function(a) {
          a && (b.find("span").html(""), b.find("span").append(a))
        })
      }
    }
  }), angular.module("ui.bootstrap.accordion").value("$accordionSuppressWarning", !1).controller("AccordionController", ["$scope", "$attrs", "$controller", "$log", "$accordionSuppressWarning", function(a, b, c, d, e) {
    e || d.warn("AccordionController is now deprecated. Use UibAccordionController instead."), angular.extend(this, c("UibAccordionController", {
      $scope: a,
      $attrs: b
    }))
  }]).directive("accordion", ["$log", "$accordionSuppressWarning", function(a, b) {
    return {
      restrict: "EA",
      controller: "AccordionController",
      controllerAs: "accordion",
      transclude: !0,
      replace: !1,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/accordion/accordion.html"
      },
      link: function() {
        b || a.warn("accordion is now deprecated. Use uib-accordion instead.")
      }
    }
  }]).directive("accordionGroup", ["$log", "$accordionSuppressWarning", function(a, b) {
    return {
      require: "^accordion",
      restrict: "EA",
      transclude: !0,
      replace: !0,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/accordion/accordion-group.html"
      },
      scope: {
        heading: "@",
        isOpen: "=?",
        isDisabled: "=?"
      },
      controller: function() {
        this.setHeading = function(a) {
          this.heading = a
        }
      },
      link: function(c, d, e, f) {
        b || a.warn("accordion-group is now deprecated. Use uib-accordion-group instead."), f.addGroup(c), c.openClass = e.openClass || "panel-open", c.panelClass = e.panelClass, c.$watch("isOpen", function(a) {
          d.toggleClass(c.openClass, !!a), a && f.closeOthers(c)
        }), c.toggleOpen = function(a) {
          c.isDisabled || a && 32 !== a.which || (c.isOpen = !c.isOpen)
        }
      }
    }
  }]).directive("accordionHeading", ["$log", "$accordionSuppressWarning", function(a, b) {
    return {
      restrict: "EA",
      transclude: !0,
      template: "",
      replace: !0,
      require: "^accordionGroup",
      link: function(c, d, e, f, g) {
        b || a.warn("accordion-heading is now deprecated. Use uib-accordion-heading instead."), f.setHeading(g(c, angular.noop))
      }
    }
  }]).directive("accordionTransclude", ["$log", "$accordionSuppressWarning", function(a, b) {
    return {
      require: "^accordionGroup",
      link: function(c, d, e, f) {
        b || a.warn("accordion-transclude is now deprecated. Use uib-accordion-transclude instead."), c.$watch(function() {
          return f[e.accordionTransclude]
        }, function(a) {
          a && (d.find("span").html(""), d.find("span").append(a))
        })
      }
    }
  }]), angular.module("ui.bootstrap.alert", []).controller("UibAlertController", ["$scope", "$attrs", "$interpolate", "$timeout", function(a, b, c, d) {
    a.closeable = !!b.close;
    var e = angular.isDefined(b.dismissOnTimeout) ? c(b.dismissOnTimeout)(a.$parent) : null;
    e && d(function() {
      a.close()
    }, parseInt(e, 10))
  }]).directive("uibAlert", function() {
    return {
      controller: "UibAlertController",
      controllerAs: "alert",
      templateUrl: function(a, b) {
        return b.templateUrl || "template/alert/alert.html"
      },
      transclude: !0,
      replace: !0,
      scope: {
        type: "@",
        close: "&"
      }
    }
  }), angular.module("ui.bootstrap.alert").value("$alertSuppressWarning", !1).controller("AlertController", ["$scope", "$attrs", "$controller", "$log", "$alertSuppressWarning", function(a, b, c, d, e) {
    e || d.warn("AlertController is now deprecated. Use UibAlertController instead."), angular.extend(this, c("UibAlertController", {
      $scope: a,
      $attrs: b
    }))
  }]).directive("alert", ["$log", "$alertSuppressWarning", function(a, b) {
    return {
      controller: "AlertController",
      controllerAs: "alert",
      templateUrl: function(a, b) {
        return b.templateUrl || "template/alert/alert.html"
      },
      transclude: !0,
      replace: !0,
      scope: {
        type: "@",
        close: "&"
      },
      link: function() {
        b || a.warn("alert is now deprecated. Use uib-alert instead.")
      }
    }
  }]), angular.module("ui.bootstrap.buttons", []).constant("uibButtonConfig", {
    activeClass: "active",
    toggleEvent: "click"
  }).controller("UibButtonsController", ["uibButtonConfig", function(a) {
    this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
  }]).directive("uibBtnRadio", function() {
    return {
      require: ["uibBtnRadio", "ngModel"],
      controller: "UibButtonsController",
      controllerAs: "buttons",
      link: function(a, b, c, d) {
        var e = d[0],
          f = d[1];
        b.find("input").css({
          display: "none"
        }), f.$render = function() {
          b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.uibBtnRadio)))
        }, b.on(e.toggleEvent, function() {
          if (!c.disabled) {
            var d = b.hasClass(e.activeClass);
            (!d || angular.isDefined(c.uncheckable)) && a.$apply(function() {
              f.$setViewValue(d ? null : a.$eval(c.uibBtnRadio)), f.$render()
            })
          }
        })
      }
    }
  }).directive("uibBtnCheckbox", function() {
    return {
      require: ["uibBtnCheckbox", "ngModel"],
      controller: "UibButtonsController",
      controllerAs: "button",
      link: function(a, b, c, d) {
        function e() {
          return g(c.btnCheckboxTrue, !0)
        }

        function f() {
          return g(c.btnCheckboxFalse, !1)
        }

        function g(b, c) {
          return angular.isDefined(b) ? a.$eval(b) : c
        }
        var h = d[0],
          i = d[1];
        b.find("input").css({
          display: "none"
        }), i.$render = function() {
          b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
        }, b.on(h.toggleEvent, function() {
          c.disabled || a.$apply(function() {
            i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
          })
        })
      }
    }
  }), angular.module("ui.bootstrap.buttons").value("$buttonsSuppressWarning", !1).controller("ButtonsController", ["$controller", "$log", "$buttonsSuppressWarning", function(a, b, c) {
    c || b.warn("ButtonsController is now deprecated. Use UibButtonsController instead."), angular.extend(this, a("UibButtonsController"))
  }]).directive("btnRadio", ["$log", "$buttonsSuppressWarning", function(a, b) {
    return {
      require: ["btnRadio", "ngModel"],
      controller: "ButtonsController",
      controllerAs: "buttons",
      link: function(c, d, e, f) {
        b || a.warn("btn-radio is now deprecated. Use uib-btn-radio instead.");
        var g = f[0],
          h = f[1];
        d.find("input").css({
          display: "none"
        }), h.$render = function() {
          d.toggleClass(g.activeClass, angular.equals(h.$modelValue, c.$eval(e.btnRadio)))
        }, d.bind(g.toggleEvent, function() {
          if (!e.disabled) {
            var a = d.hasClass(g.activeClass);
            (!a || angular.isDefined(e.uncheckable)) && c.$apply(function() {
              h.$setViewValue(a ? null : c.$eval(e.btnRadio)), h.$render()
            })
          }
        })
      }
    }
  }]).directive("btnCheckbox", ["$document", "$log", "$buttonsSuppressWarning", function(a, b, c) {
    return {
      require: ["btnCheckbox", "ngModel"],
      controller: "ButtonsController",
      controllerAs: "button",
      link: function(d, e, f, g) {
        function h() {
          return j(f.btnCheckboxTrue, !0)
        }

        function i() {
          return j(f.btnCheckboxFalse, !1)
        }

        function j(a, b) {
          var c = d.$eval(a);
          return angular.isDefined(c) ? c : b
        }
        c || b.warn("btn-checkbox is now deprecated. Use uib-btn-checkbox instead.");
        var k = g[0],
          l = g[1];
        e.find("input").css({
          display: "none"
        }), l.$render = function() {
          e.toggleClass(k.activeClass, angular.equals(l.$modelValue, h()))
        }, e.bind(k.toggleEvent, function() {
          f.disabled || d.$apply(function() {
            l.$setViewValue(e.hasClass(k.activeClass) ? i() : h()), l.$render()
          })
        }), e.on("keypress", function(b) {
          f.disabled || 32 !== b.which || a[0].activeElement !== e[0] || d.$apply(function() {
            l.$setViewValue(e.hasClass(k.activeClass) ? i() : h()), l.$render()
          })
        })
      }
    }
  }]), angular.module("ui.bootstrap.carousel", []).controller("UibCarouselController", ["$scope", "$element", "$interval", "$animate", function(a, b, c, d) {
    function e(b, c, e) {
      s || (angular.extend(b, {
        direction: e,
        active: !0
      }), angular.extend(m.currentSlide || {}, {
        direction: e,
        active: !1
      }), d.enabled() && !a.noTransition && !a.$currentTransition && b.$element && m.slides.length > 1 && (b.$element.data(q, b.direction), m.currentSlide && m.currentSlide.$element && m.currentSlide.$element.data(q, b.direction), a.$currentTransition = !0, o ? d.on("addClass", b.$element, function(b, c) {
        "close" === c && (a.$currentTransition = null, d.off("addClass", b))
      }) : b.$element.one("$animate:close", function() {
        a.$currentTransition = null
      })), m.currentSlide = b, r = c, g())
    }

    function f(a) {
      if (angular.isUndefined(n[a].index)) return n[a];
      var b;
      n.length;
      for (b = 0; b < n.length; ++b)
        if (n[b].index == a) return n[b]
    }

    function g() {
      h();
      var b = +a.interval;
      !isNaN(b) && b > 0 && (k = c(i, b))
    }

    function h() {
      k && (c.cancel(k), k = null)
    }

    function i() {
      var b = +a.interval;
      l && !isNaN(b) && b > 0 && n.length ? a.next() : a.pause()
    }

    function j(b) {
      b.length || (a.$currentTransition = null)
    }
    var k, l, m = this,
      n = m.slides = a.slides = [],
      o = angular.version.minor >= 4,
      p = "uib-noTransition",
      q = "uib-slideDirection",
      r = -1;
    m.currentSlide = null;
    var s = !1;
    m.select = a.select = function(b, c) {
      var d = a.indexOfSlide(b);
      void 0 === c && (c = d > m.getCurrentIndex() ? "next" : "prev"), b && b !== m.currentSlide && !a.$currentTransition && e(b, d, c)
    }, a.$on("$destroy", function() {
      s = !0
    }), m.getCurrentIndex = function() {
      return m.currentSlide && angular.isDefined(m.currentSlide.index) ? +m.currentSlide.index : r
    }, a.indexOfSlide = function(a) {
      return angular.isDefined(a.index) ? +a.index : n.indexOf(a)
    }, a.next = function() {
      var b = (m.getCurrentIndex() + 1) % n.length;
      return 0 === b && a.noWrap() ? void a.pause() : m.select(f(b), "next")
    }, a.prev = function() {
      var b = m.getCurrentIndex() - 1 < 0 ? n.length - 1 : m.getCurrentIndex() - 1;
      return a.noWrap() && b === n.length - 1 ? void a.pause() : m.select(f(b), "prev")
    }, a.isActive = function(a) {
      return m.currentSlide === a
    }, a.$watch("interval", g), a.$watchCollection("slides", j), a.$on("$destroy", h), a.play = function() {
      l || (l = !0, g())
    }, a.pause = function() {
      a.noPause || (l = !1, h())
    }, m.addSlide = function(b, c) {
      b.$element = c, n.push(b), 1 === n.length || b.active ? (m.select(n[n.length - 1]), 1 === n.length && a.play()) : b.active = !1
    }, m.removeSlide = function(a) {
      angular.isDefined(a.index) && n.sort(function(a, b) {
        return +a.index > +b.index
      });
      var b = n.indexOf(a);
      n.splice(b, 1), n.length > 0 && a.active ? b >= n.length ? m.select(n[b - 1]) : m.select(n[b]) : r > b && r--, 0 === n.length && (m.currentSlide = null)
    }, a.$watch("noTransition", function(a) {
      b.data(p, a)
    })
  }]).directive("uibCarousel", [function() {
    return {
      transclude: !0,
      replace: !0,
      controller: "UibCarouselController",
      controllerAs: "carousel",
      require: "carousel",
      templateUrl: function(a, b) {
        return b.templateUrl || "template/carousel/carousel.html"
      },
      scope: {
        interval: "=",
        noTransition: "=",
        noPause: "=",
        noWrap: "&"
      }
    }
  }]).directive("uibSlide", function() {
    return {
      require: "^uibCarousel",
      restrict: "EA",
      transclude: !0,
      replace: !0,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/carousel/slide.html"
      },
      scope: {
        active: "=?",
        actual: "=?",
        index: "=?"
      },
      link: function(a, b, c, d) {
        d.addSlide(a, b), a.$on("$destroy", function() {
          d.removeSlide(a)
        }), a.$watch("active", function(b) {
          b && d.select(a)
        })
      }
    }
  }).animation(".item", ["$injector", "$animate", function(a, b) {
    function c(a, b, c) {
      a.removeClass(b), c && c()
    }
    var d = "uib-noTransition",
      e = "uib-slideDirection",
      f = null;
    return a.has("$animateCss") && (f = a.get("$animateCss")), {
      beforeAddClass: function(a, g, h) {
        if ("active" == g && a.parent() && a.parent().parent() && !a.parent().parent().data(d)) {
          var i = !1,
            j = a.data(e),
            k = "next" == j ? "left" : "right",
            l = c.bind(this, a, k + " " + j, h);
          return a.addClass(j), f ? f(a, {
              addClass: k
            }).start().done(l) : b.addClass(a, k).then(function() {
              i || l(), h()
            }),
            function() {
              i = !0
            }
        }
        h()
      },
      beforeRemoveClass: function(a, g, h) {
        if ("active" === g && a.parent() && a.parent().parent() && !a.parent().parent().data(d)) {
          var i = !1,
            j = a.data(e),
            k = "next" == j ? "left" : "right",
            l = c.bind(this, a, k, h);
          return f ? f(a, {
              addClass: k
            }).start().done(l) : b.addClass(a, k).then(function() {
              i || l(), h()
            }),
            function() {
              i = !0
            }
        }
        h()
      }
    }
  }]), angular.module("ui.bootstrap.carousel").value("$carouselSuppressWarning", !1).controller("CarouselController", ["$scope", "$element", "$controller", "$log", "$carouselSuppressWarning", function(a, b, c, d, e) {
    e || d.warn("CarouselController is now deprecated. Use UibCarouselController instead."), angular.extend(this, c("UibCarouselController", {
      $scope: a,
      $element: b
    }))
  }]).directive("carousel", ["$log", "$carouselSuppressWarning", function(a, b) {
    return {
      transclude: !0,
      replace: !0,
      controller: "CarouselController",
      controllerAs: "carousel",
      require: "carousel",
      templateUrl: function(a, b) {
        return b.templateUrl || "template/carousel/carousel.html"
      },
      scope: {
        interval: "=",
        noTransition: "=",
        noPause: "=",
        noWrap: "&"
      },
      link: function() {
        b || a.warn("carousel is now deprecated. Use uib-carousel instead.")
      }
    }
  }]).directive("slide", ["$log", "$carouselSuppressWarning", function(a, b) {
    return {
      require: "^carousel",
      transclude: !0,
      replace: !0,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/carousel/slide.html"
      },
      scope: {
        active: "=?",
        actual: "=?",
        index: "=?"
      },
      link: function(c, d, e, f) {
        b || a.warn("slide is now deprecated. Use uib-slide instead."), f.addSlide(c, d), c.$on("$destroy", function() {
          f.removeSlide(c)
        }), c.$watch("active", function(a) {
          a && f.select(c)
        })
      }
    }
  }]), angular.module("ui.bootstrap.dateparser", []).service("uibDateParser", ["$log", "$locale", "orderByFilter", function(a, b, c) {
    function d(a) {
      var b = [],
        d = a.split("");
      return angular.forEach(g, function(c, e) {
        var f = a.indexOf(e);
        if (f > -1) {
          a = a.split(""), d[f] = "(" + c.regex + ")", a[f] = "$";
          for (var g = f + 1, h = f + e.length; h > g; g++) d[g] = "", a[g] = "$";
          a = a.join(""), b.push({
            index: f,
            apply: c.apply
          })
        }
      }), {
        regex: new RegExp("^" + d.join("") + "$"),
        map: c(b, "index")
      }
    }

    function e(a, b, c) {
      return 1 > c ? !1 : 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
    }
    var f, g, h = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    this.init = function() {
      f = b.id, this.parsers = {}, g = {
        yyyy: {
          regex: "\\d{4}",
          apply: function(a) {
            this.year = +a
          }
        },
        yy: {
          regex: "\\d{2}",
          apply: function(a) {
            this.year = +a + 2e3
          }
        },
        y: {
          regex: "\\d{1,4}",
          apply: function(a) {
            this.year = +a
          }
        },
        MMMM: {
          regex: b.DATETIME_FORMATS.MONTH.join("|"),
          apply: function(a) {
            this.month = b.DATETIME_FORMATS.MONTH.indexOf(a)
          }
        },
        MMM: {
          regex: b.DATETIME_FORMATS.SHORTMONTH.join("|"),
          apply: function(a) {
            this.month = b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)
          }
        },
        MM: {
          regex: "0[1-9]|1[0-2]",
          apply: function(a) {
            this.month = a - 1
          }
        },
        M: {
          regex: "[1-9]|1[0-2]",
          apply: function(a) {
            this.month = a - 1
          }
        },
        dd: {
          regex: "[0-2][0-9]{1}|3[0-1]{1}",
          apply: function(a) {
            this.date = +a
          }
        },
        d: {
          regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
          apply: function(a) {
            this.date = +a
          }
        },
        EEEE: {
          regex: b.DATETIME_FORMATS.DAY.join("|")
        },
        EEE: {
          regex: b.DATETIME_FORMATS.SHORTDAY.join("|")
        },
        HH: {
          regex: "(?:0|1)[0-9]|2[0-3]",
          apply: function(a) {
            this.hours = +a
          }
        },
        hh: {
          regex: "0[0-9]|1[0-2]",
          apply: function(a) {
            this.hours = +a
          }
        },
        H: {
          regex: "1?[0-9]|2[0-3]",
          apply: function(a) {
            this.hours = +a
          }
        },
        h: {
          regex: "[0-9]|1[0-2]",
          apply: function(a) {
            this.hours = +a
          }
        },
        mm: {
          regex: "[0-5][0-9]",
          apply: function(a) {
            this.minutes = +a
          }
        },
        m: {
          regex: "[0-9]|[1-5][0-9]",
          apply: function(a) {
            this.minutes = +a
          }
        },
        sss: {
          regex: "[0-9][0-9][0-9]",
          apply: function(a) {
            this.milliseconds = +a
          }
        },
        ss: {
          regex: "[0-5][0-9]",
          apply: function(a) {
            this.seconds = +a
          }
        },
        s: {
          regex: "[0-9]|[1-5][0-9]",
          apply: function(a) {
            this.seconds = +a
          }
        },
        a: {
          regex: b.DATETIME_FORMATS.AMPMS.join("|"),
          apply: function(a) {
            12 === this.hours && (this.hours = 0), "PM" === a && (this.hours += 12)
          }
        }
      }
    }, this.init(), this.parse = function(c, g, i) {
      if (!angular.isString(c) || !g) return c;
      g = b.DATETIME_FORMATS[g] || g, g = g.replace(h, "\\$&"), b.id !== f && this.init(), this.parsers[g] || (this.parsers[g] = d(g));
      var j = this.parsers[g],
        k = j.regex,
        l = j.map,
        m = c.match(k);
      if (m && m.length) {
        var n, o;
        angular.isDate(i) && !isNaN(i.getTime()) ? n = {
          year: i.getFullYear(),
          month: i.getMonth(),
          date: i.getDate(),
          hours: i.getHours(),
          minutes: i.getMinutes(),
          seconds: i.getSeconds(),
          milliseconds: i.getMilliseconds()
        } : (i && a.warn("dateparser:", "baseDate is not a valid date"), n = {
          year: 1900,
          month: 0,
          date: 1,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0
        });
        for (var p = 1, q = m.length; q > p; p++) {
          var r = l[p - 1];
          r.apply && r.apply.call(n, m[p])
        }
        return e(n.year, n.month, n.date) && (angular.isDate(i) && !isNaN(i.getTime()) ? (o = new Date(i), o.setFullYear(n.year, n.month, n.date, n.hours, n.minutes, n.seconds, n.milliseconds || 0)) : o = new Date(n.year, n.month, n.date, n.hours, n.minutes, n.seconds, n.milliseconds || 0)), o
      }
    }
  }]), angular.module("ui.bootstrap.dateparser").value("$dateParserSuppressWarning", !1).service("dateParser", ["$log", "$dateParserSuppressWarning", "uibDateParser", function(a, b, c) {
    b || a.warn("dateParser is now deprecated. Use uibDateParser instead."), angular.extend(this, c)
  }]), angular.module("ui.bootstrap.position", []).factory("$uibPosition", ["$document", "$window", function(a, b) {
    function c(a, c) {
      return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
    }

    function d(a) {
      return "static" === (c(a, "position") || "static")
    }
    var e = function(b) {
      for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);) e = e.offsetParent;
      return e || c
    };
    return {
      position: function(b) {
        var c = this.offset(b),
          d = {
            top: 0,
            left: 0
          },
          f = e(b[0]);
        f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
        var g = b[0].getBoundingClientRect();
        return {
          width: g.width || b.prop("offsetWidth"),
          height: g.height || b.prop("offsetHeight"),
          top: c.top - d.top,
          left: c.left - d.left
        }
      },
      offset: function(c) {
        var d = c[0].getBoundingClientRect();
        return {
          width: d.width || c.prop("offsetWidth"),
          height: d.height || c.prop("offsetHeight"),
          top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
          left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
        }
      },
      positionElements: function(a, b, c, d) {
        var e, f, g, h, i = c.split("-"),
          j = i[0],
          k = i[1] || "center";
        e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
        var l = {
            center: function() {
              return e.left + e.width / 2 - f / 2
            },
            left: function() {
              return e.left
            },
            right: function() {
              return e.left + e.width
            }
          },
          m = {
            center: function() {
              return e.top + e.height / 2 - g / 2
            },
            top: function() {
              return e.top
            },
            bottom: function() {
              return e.top + e.height
            }
          };
        switch (j) {
          case "right":
            h = {
              top: m[k](),
              left: l[j]()
            };
            break;
          case "left":
            h = {
              top: m[k](),
              left: e.left - f
            };
            break;
          case "bottom":
            h = {
              top: m[j](),
              left: l[k]()
            };
            break;
          default:
            h = {
              top: e.top - g,
              left: l[k]()
            }
        }
        return h
      }
    }
  }]), angular.module("ui.bootstrap.position").value("$positionSuppressWarning", !1).service("$position", ["$log", "$positionSuppressWarning", "$uibPosition", function(a, b, c) {
    b || a.warn("$position is now deprecated. Use $uibPosition instead."), angular.extend(this, c)
  }]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).value("$datepickerSuppressError", !1).constant("uibDatepickerConfig", {
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    datepickerMode: "day",
    minMode: "day",
    maxMode: "year",
    showWeeks: !0,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null,
    shortcutPropagation: !1
  }).controller("UibDatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$log", "dateFilter", "uibDatepickerConfig", "$datepickerSuppressError", function(a, b, c, d, e, f, g, h) {
    var i = this,
      j = {
        $setViewValue: angular.noop
      };
    this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "showWeeks", "startingDay", "yearRange", "shortcutPropagation"], function(c, e) {
      i[c] = angular.isDefined(b[c]) ? 6 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : g[c]
    }), angular.forEach(["minDate", "maxDate"], function(d) {
      b[d] ? a.$parent.$watch(c(b[d]), function(a) {
        i[d] = a ? new Date(a) : null, i.refreshView()
      }) : i[d] = g[d] ? new Date(g[d]) : null
    }), angular.forEach(["minMode", "maxMode"], function(d) {
      b[d] ? a.$parent.$watch(c(b[d]), function(c) {
        i[d] = angular.isDefined(c) ? c : b[d], a[d] = i[d], ("minMode" == d && i.modes.indexOf(a.datepickerMode) < i.modes.indexOf(i[d]) || "maxMode" == d && i.modes.indexOf(a.datepickerMode) > i.modes.indexOf(i[d])) && (a.datepickerMode = i[d])
      }) : (i[d] = g[d] || null, a[d] = i[d])
    }), a.datepickerMode = a.datepickerMode || g.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), angular.isDefined(b.initDate) ? (this.activeDate = a.$parent.$eval(b.initDate) || new Date, a.$parent.$watch(b.initDate, function(a) {
      a && (j.$isEmpty(j.$modelValue) || j.$invalid) && (i.activeDate = a, i.refreshView())
    })) : this.activeDate = new Date, a.isActive = function(b) {
      return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
    }, this.init = function(a) {
      j = a, j.$render = function() {
        i.render()
      }
    }, this.render = function() {
      if (j.$viewValue) {
        var a = new Date(j.$viewValue),
          b = !isNaN(a);
        b ? this.activeDate = a : h || e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')
      }
      this.refreshView()
    }, this.refreshView = function() {
      if (this.element) {
        this._refreshView();
        var a = j.$viewValue ? new Date(j.$viewValue) : null;
        j.$setValidity("dateDisabled", !a || this.element && !this.isDisabled(a))
      }
    }, this.createDateObject = function(a, b) {
      var c = j.$viewValue ? new Date(j.$viewValue) : null;
      return {
        date: a,
        label: f(a, b),
        selected: c && 0 === this.compare(a, c),
        disabled: this.isDisabled(a),
        current: 0 === this.compare(a, new Date),
        customClass: this.customClass(a)
      }
    }, this.isDisabled = function(c) {
      return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
        date: c,
        mode: a.datepickerMode
      })
    }, this.customClass = function(b) {
      return a.customClass({
        date: b,
        mode: a.datepickerMode
      })
    }, this.split = function(a, b) {
      for (var c = []; a.length > 0;) c.push(a.splice(0, b));
      return c
    }, a.select = function(b) {
      if (a.datepickerMode === i.minMode) {
        var c = j.$viewValue ? new Date(j.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
        c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
      } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
    }, a.move = function(a) {
      var b = i.activeDate.getFullYear() + a * (i.step.years || 0),
        c = i.activeDate.getMonth() + a * (i.step.months || 0);
      i.activeDate.setFullYear(b, c, 1), i.refreshView()
    }, a.toggleMode = function(b) {
      b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
    }, a.keys = {
      13: "enter",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down"
    };
    var k = function() {
      i.element[0].focus()
    };
    a.$on("uib:datepicker.focus", k), a.keydown = function(b) {
      var c = a.keys[b.which];
      if (c && !b.shiftKey && !b.altKey)
        if (b.preventDefault(), i.shortcutPropagation || b.stopPropagation(), "enter" === c || "space" === c) {
          if (i.isDisabled(i.activeDate)) return;
          a.select(i.activeDate)
        } else !b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : a.toggleMode("up" === c ? 1 : -1)
    }
  }]).controller("UibDaypickerController", ["$scope", "$element", "dateFilter", function(a, b, c) {
    function d(a, b) {
      return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? f[b] : 29
    }

    function e(a) {
      var b = new Date(a);
      b.setDate(b.getDate() + 4 - (b.getDay() || 7));
      var c = b.getTime();
      return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
    }
    var f = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.step = {
      months: 1
    }, this.element = b, this.init = function(b) {
      angular.extend(b, this), a.showWeeks = b.showWeeks, b.refreshView()
    }, this.getDates = function(a, b) {
      for (var c, d = new Array(b), e = new Date(a), f = 0; b > f;) c = new Date(e), d[f++] = c, e.setDate(e.getDate() + 1);
      return d
    }, this._refreshView = function() {
      var b = this.activeDate.getFullYear(),
        d = this.activeDate.getMonth(),
        f = new Date(this.activeDate);
      f.setFullYear(b, d, 1);
      var g = this.startingDay - f.getDay(),
        h = g > 0 ? 7 - g : -g,
        i = new Date(f);
      h > 0 && i.setDate(-h + 1);
      for (var j = this.getDates(i, 42), k = 0; 42 > k; k++) j[k] = angular.extend(this.createDateObject(j[k], this.formatDay), {
        secondary: j[k].getMonth() !== d,
        uid: a.uniqueId + "-" + k
      });
      a.labels = new Array(7);
      for (var l = 0; 7 > l; l++) a.labels[l] = {
        abbr: c(j[l].date, this.formatDayHeader),
        full: c(j[l].date, "EEEE")
      };
      if (a.title = c(this.activeDate, this.formatDayTitle), a.rows = this.split(j, 7), a.showWeeks) {
        a.weekNumbers = [];
        for (var m = (11 - this.startingDay) % 7, n = a.rows.length, o = 0; n > o; o++) a.weekNumbers.push(e(a.rows[o][m].date))
      }
    }, this.compare = function(a, b) {
      return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
    }, this.handleKeyDown = function(a, b) {
      var c = this.activeDate.getDate();
      if ("left" === a) c -= 1;
      else if ("up" === a) c -= 7;
      else if ("right" === a) c += 1;
      else if ("down" === a) c += 7;
      else if ("pageup" === a || "pagedown" === a) {
        var e = this.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
        this.activeDate.setMonth(e, 1), c = Math.min(d(this.activeDate.getFullYear(), this.activeDate.getMonth()), c)
      } else "home" === a ? c = 1 : "end" === a && (c = d(this.activeDate.getFullYear(), this.activeDate.getMonth()));
      this.activeDate.setDate(c)
    }
  }]).controller("UibMonthpickerController", ["$scope", "$element", "dateFilter", function(a, b, c) {
    this.step = {
      years: 1
    }, this.element = b, this.init = function(a) {
      angular.extend(a, this), a.refreshView()
    }, this._refreshView = function() {
      for (var b, d = new Array(12), e = this.activeDate.getFullYear(), f = 0; 12 > f; f++) b = new Date(this.activeDate), b.setFullYear(e, f, 1), d[f] = angular.extend(this.createDateObject(b, this.formatMonth), {
        uid: a.uniqueId + "-" + f
      });
      a.title = c(this.activeDate, this.formatMonthTitle), a.rows = this.split(d, 3)
    }, this.compare = function(a, b) {
      return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
    }, this.handleKeyDown = function(a, b) {
      var c = this.activeDate.getMonth();
      if ("left" === a) c -= 1;
      else if ("up" === a) c -= 3;
      else if ("right" === a) c += 1;
      else if ("down" === a) c += 3;
      else if ("pageup" === a || "pagedown" === a) {
        var d = this.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
        this.activeDate.setFullYear(d)
      } else "home" === a ? c = 0 : "end" === a && (c = 11);
      this.activeDate.setMonth(c)
    }
  }]).controller("UibYearpickerController", ["$scope", "$element", "dateFilter", function(a, b, c) {
    function d(a) {
      return parseInt((a - 1) / e, 10) * e + 1
    }
    var e;
    this.element = b, this.yearpickerInit = function() {
      e = this.yearRange, this.step = {
        years: e
      }
    }, this._refreshView = function() {
      for (var b, c = new Array(e), f = 0, g = d(this.activeDate.getFullYear()); e > f; f++) b = new Date(this.activeDate), b.setFullYear(g + f, 0, 1), c[f] = angular.extend(this.createDateObject(b, this.formatYear), {
        uid: a.uniqueId + "-" + f
      });
      a.title = [c[0].label, c[e - 1].label].join(" - "), a.rows = this.split(c, 5)
    }, this.compare = function(a, b) {
      return a.getFullYear() - b.getFullYear()
    }, this.handleKeyDown = function(a, b) {
      var c = this.activeDate.getFullYear();
      "left" === a ? c -= 1 : "up" === a ? c -= 5 : "right" === a ? c += 1 : "down" === a ? c += 5 : "pageup" === a || "pagedown" === a ? c += ("pageup" === a ? -1 : 1) * this.step.years : "home" === a ? c = d(this.activeDate.getFullYear()) : "end" === a && (c = d(this.activeDate.getFullYear()) + e - 1), this.activeDate.setFullYear(c)
    }
  }]).directive("uibDatepicker", function() {
    return {
      replace: !0,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/datepicker/datepicker.html"
      },
      scope: {
        datepickerMode: "=?",
        dateDisabled: "&",
        customClass: "&",
        shortcutPropagation: "&?"
      },
      require: ["uibDatepicker", "^ngModel"],
      controller: "UibDatepickerController",
      controllerAs: "datepicker",
      link: function(a, b, c, d) {
        var e = d[0],
          f = d[1];
        e.init(f)
      }
    }
  }).directive("uibDaypicker", function() {
    return {
      replace: !0,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/datepicker/day.html"
      },
      require: ["^?uibDatepicker", "uibDaypicker", "^?datepicker"],
      controller: "UibDaypickerController",
      link: function(a, b, c, d) {
        var e = d[0] || d[2],
          f = d[1];
        f.init(e)
      }
    }
  }).directive("uibMonthpicker", function() {
    return {
      replace: !0,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/datepicker/month.html"
      },
      require: ["^?uibDatepicker", "uibMonthpicker", "^?datepicker"],
      controller: "UibMonthpickerController",
      link: function(a, b, c, d) {
        var e = d[0] || d[2],
          f = d[1];
        f.init(e)
      }
    }
  }).directive("uibYearpicker", function() {
    return {
      replace: !0,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/datepicker/year.html"
      },
      require: ["^?uibDatepicker", "uibYearpicker", "^?datepicker"],
      controller: "UibYearpickerController",
      link: function(a, b, c, d) {
        var e = d[0] || d[2];
        angular.extend(e, d[1]), e.yearpickerInit(), e.refreshView()
      }
    }
  }).constant("uibDatepickerPopupConfig", {
    datepickerPopup: "yyyy-MM-dd",
    datepickerPopupTemplateUrl: "template/datepicker/popup.html",
    datepickerTemplateUrl: "template/datepicker/datepicker.html",
    html5Types: {
      date: "yyyy-MM-dd",
      "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss",
      month: "yyyy-MM"
    },
    currentText: "Today",
    clearText: "Clear",
    closeText: "Done",
    closeOnDateSelection: !0,
    appendToBody: !1,
    showButtonBar: !0,
    onOpenFocus: !0
  }).controller("UibDatepickerPopupController", ["$scope", "$element", "$attrs", "$compile", "$parse", "$document", "$rootScope", "$uibPosition", "dateFilter", "uibDateParser", "uibDatepickerPopupConfig", "$timeout", function(a, b, c, d, e, f, g, h, i, j, k, l) {
    function m(a) {
      return a.replace(/([A-Z])/g, function(a) {
        return "-" + a.toLowerCase()
      })
    }

    function n(b) {
      angular.isNumber(b) && (b = new Date(b)); {
        if (!b) return null;
        if (angular.isDate(b) && !isNaN(b)) return b;
        if (angular.isString(b)) {
          var c = j.parse(b, r, a.date);
          return isNaN(c) ? void 0 : c
        }
      }
    }

    function o(a, b) {
      var d = a || b;
      if (!c.ngRequired && !d) return !0;
      if (angular.isNumber(d) && (d = new Date(d)), d) {
        if (angular.isDate(d) && !isNaN(d)) return !0;
        if (angular.isString(d)) {
          var e = j.parse(d, r);
          return !isNaN(e)
        }
        return !1
      }
      return !0
    }

    function p(c) {
      var d = A[0],
        e = b[0].contains(c.target),
        f = void 0 !== d.contains && d.contains(c.target);
      !a.isOpen || e || f || a.$apply(function() {
        a.isOpen = !1
      })
    }

    function q(c) {
      27 === c.which && a.isOpen ? (c.preventDefault(), c.stopPropagation(), a.$apply(function() {
        a.isOpen = !1
      }), b[0].focus()) : 40 !== c.which || a.isOpen || (c.preventDefault(), c.stopPropagation(), a.$apply(function() {
        a.isOpen = !0
      }))
    }
    var r, s, t, u, v, w, x, y, z, A, B = {},
      C = !1;
    a.watchData = {}, this.init = function(h) {
      if (z = h, s = angular.isDefined(c.closeOnDateSelection) ? a.$parent.$eval(c.closeOnDateSelection) : k.closeOnDateSelection, t = angular.isDefined(c.datepickerAppendToBody) ? a.$parent.$eval(c.datepickerAppendToBody) : k.appendToBody, u = angular.isDefined(c.onOpenFocus) ? a.$parent.$eval(c.onOpenFocus) : k.onOpenFocus, v = angular.isDefined(c.datepickerPopupTemplateUrl) ? c.datepickerPopupTemplateUrl : k.datepickerPopupTemplateUrl, w = angular.isDefined(c.datepickerTemplateUrl) ? c.datepickerTemplateUrl : k.datepickerTemplateUrl, a.showButtonBar = angular.isDefined(c.showButtonBar) ? a.$parent.$eval(c.showButtonBar) : k.showButtonBar, k.html5Types[c.type] ? (r = k.html5Types[c.type], C = !0) : (r = c.datepickerPopup || c.uibDatepickerPopup || k.datepickerPopup, c.$observe("uibDatepickerPopup", function(a, b) {
          var c = a || k.datepickerPopup;
          if (c !== r && (r = c, z.$modelValue = null, !r)) throw new Error("uibDatepickerPopup must have a date format specified.")
        })), !r) throw new Error("uibDatepickerPopup must have a date format specified.");
      if (C && c.datepickerPopup) throw new Error("HTML5 date input types do not support custom formats.");
      if (x = angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"), x.attr({
          "ng-model": "date",
          "ng-change": "dateSelection(date)",
          "template-url": v
        }), y = angular.element(x.children()[0]), y.attr("template-url", w), C && "month" === c.type && (y.attr("datepicker-mode", '"month"'), y.attr("min-mode", "month")), c.datepickerOptions) {
        var l = a.$parent.$eval(c.datepickerOptions);
        l && l.initDate && (a.initDate = l.initDate, y.attr("init-date", "initDate"), delete l.initDate), angular.forEach(l, function(a, b) {
          y.attr(m(b), a)
        })
      }
      angular.forEach(["minMode", "maxMode", "minDate", "maxDate", "datepickerMode", "initDate", "shortcutPropagation"], function(b) {
        if (c[b]) {
          var d = e(c[b]);
          if (a.$parent.$watch(d, function(c) {
              a.watchData[b] = c, ("minDate" === b || "maxDate" === b) && (B[b] = new Date(c))
            }), y.attr(m(b), "watchData." + b), "datepickerMode" === b) {
            var f = d.assign;
            a.$watch("watchData." + b, function(b, c) {
              angular.isFunction(f) && b !== c && f(a.$parent, b)
            })
          }
        }
      }), c.dateDisabled && y.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), c.showWeeks && y.attr("show-weeks", c.showWeeks), c.customClass && y.attr("custom-class", "customClass({ date: date, mode: mode })"), C ? z.$formatters.push(function(b) {
        return a.date = b, b
      }) : (z.$$parserName = "date", z.$validators.date = o, z.$parsers.unshift(n), z.$formatters.push(function(b) {
        return a.date = b, z.$isEmpty(b) ? b : i(b, r)
      })), z.$viewChangeListeners.push(function() {
        a.date = j.parse(z.$viewValue, r, a.date)
      }), b.bind("keydown", q), A = d(x)(a), x.remove(), t ? f.find("body").append(A) : b.after(A), a.$on("$destroy", function() {
        a.isOpen === !0 && (g.$$phase || a.$apply(function() {
          a.isOpen = !1
        })), A.remove(), b.unbind("keydown", q), f.unbind("click", p)
      })
    }, a.getText = function(b) {
      return a[b + "Text"] || k[b + "Text"]
    }, a.isDisabled = function(b) {
      return "today" === b && (b = new Date), a.watchData.minDate && a.compare(b, B.minDate) < 0 || a.watchData.maxDate && a.compare(b, B.maxDate) > 0
    }, a.compare = function(a, b) {
      return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
    }, a.dateSelection = function(c) {
      angular.isDefined(c) && (a.date = c);
      var d = a.date ? i(a.date, r) : null;
      b.val(d), z.$setViewValue(d), s && (a.isOpen = !1, b[0].focus())
    }, a.keydown = function(c) {
      27 === c.which && (a.isOpen = !1, b[0].focus())
    }, a.select = function(b) {
      if ("today" === b) {
        var c = new Date;
        angular.isDate(a.date) ? (b = new Date(a.date), b.setFullYear(c.getFullYear(), c.getMonth(), c.getDate())) : b = new Date(c.setHours(0, 0, 0, 0))
      }
      a.dateSelection(b)
    }, a.close = function() {
      a.isOpen = !1, b[0].focus()
    }, a.$watch("isOpen", function(c) {
      c ? (a.position = t ? h.offset(b) : h.position(b), a.position.top = a.position.top + b.prop("offsetHeight"), l(function() {
        u && a.$broadcast("uib:datepicker.focus"), f.bind("click", p)
      }, 0, !1)) : f.unbind("click", p)
    })
  }]).directive("uibDatepickerPopup", function() {
    return {
      require: ["ngModel", "uibDatepickerPopup"],
      controller: "UibDatepickerPopupController",
      scope: {
        isOpen: "=?",
        currentText: "@",
        clearText: "@",
        closeText: "@",
        dateDisabled: "&",
        customClass: "&"
      },
      link: function(a, b, c, d) {
        var e = d[0],
          f = d[1];
        f.init(e)
      }
    }
  }).directive("uibDatepickerPopupWrap", function() {
    return {
      replace: !0,
      transclude: !0,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/datepicker/popup.html"
      }
    }
  }), angular.module("ui.bootstrap.datepicker").value("$datepickerSuppressWarning", !1).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$log", "dateFilter", "uibDatepickerConfig", "$datepickerSuppressError", "$datepickerSuppressWarning", function(a, b, c, d, e, f, g, h, i) {
    i || e.warn("DatepickerController is now deprecated. Use UibDatepickerController instead.");
    var j = this,
      k = {
        $setViewValue: angular.noop
      };
    this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "showWeeks", "startingDay", "yearRange", "shortcutPropagation"], function(c, e) {
      j[c] = angular.isDefined(b[c]) ? 6 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : g[c]
    }), angular.forEach(["minDate", "maxDate"], function(d) {
      b[d] ? a.$parent.$watch(c(b[d]), function(a) {
        j[d] = a ? new Date(a) : null, j.refreshView()
      }) : j[d] = g[d] ? new Date(g[d]) : null
    }), angular.forEach(["minMode", "maxMode"], function(d) {
      b[d] ? a.$parent.$watch(c(b[d]), function(c) {
        j[d] = angular.isDefined(c) ? c : b[d], a[d] = j[d], ("minMode" == d && j.modes.indexOf(a.datepickerMode) < j.modes.indexOf(j[d]) || "maxMode" == d && j.modes.indexOf(a.datepickerMode) > j.modes.indexOf(j[d])) && (a.datepickerMode = j[d])
      }) : (j[d] = g[d] || null, a[d] = j[d])
    }), a.datepickerMode = a.datepickerMode || g.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), angular.isDefined(b.initDate) ? (this.activeDate = a.$parent.$eval(b.initDate) || new Date, a.$parent.$watch(b.initDate, function(a) {
      a && (k.$isEmpty(k.$modelValue) || k.$invalid) && (j.activeDate = a, j.refreshView())
    })) : this.activeDate = new Date, a.isActive = function(b) {
      return 0 === j.compare(b.date, j.activeDate) ? (a.activeDateId = b.uid, !0) : !1
    }, this.init = function(a) {
      k = a, k.$render = function() {
        j.render()
      }
    }, this.render = function() {
      if (k.$viewValue) {
        var a = new Date(k.$viewValue),
          b = !isNaN(a);
        b ? this.activeDate = a : h || e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')
      }
      this.refreshView()
    }, this.refreshView = function() {
      if (this.element) {
        this._refreshView();
        var a = k.$viewValue ? new Date(k.$viewValue) : null;
        k.$setValidity("dateDisabled", !a || this.element && !this.isDisabled(a))
      }
    }, this.createDateObject = function(a, b) {
      var c = k.$viewValue ? new Date(k.$viewValue) : null;
      return {
        date: a,
        label: f(a, b),
        selected: c && 0 === this.compare(a, c),
        disabled: this.isDisabled(a),
        current: 0 === this.compare(a, new Date),
        customClass: this.customClass(a)
      }
    }, this.isDisabled = function(c) {
      return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
        date: c,
        mode: a.datepickerMode
      })
    }, this.customClass = function(b) {
      return a.customClass({
        date: b,
        mode: a.datepickerMode
      })
    }, this.split = function(a, b) {
      for (var c = []; a.length > 0;) c.push(a.splice(0, b));
      return c
    }, this.fixTimeZone = function(a) {
      var b = a.getHours();
      a.setHours(23 === b ? b + 2 : 0)
    }, a.select = function(b) {
      if (a.datepickerMode === j.minMode) {
        var c = k.$viewValue ? new Date(k.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
        c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), k.$setViewValue(c), k.$render()
      } else j.activeDate = b, a.datepickerMode = j.modes[j.modes.indexOf(a.datepickerMode) - 1]
    }, a.move = function(a) {
      var b = j.activeDate.getFullYear() + a * (j.step.years || 0),
        c = j.activeDate.getMonth() + a * (j.step.months || 0);
      j.activeDate.setFullYear(b, c, 1), j.refreshView()
    }, a.toggleMode = function(b) {
      b = b || 1, a.datepickerMode === j.maxMode && 1 === b || a.datepickerMode === j.minMode && -1 === b || (a.datepickerMode = j.modes[j.modes.indexOf(a.datepickerMode) + b])
    }, a.keys = {
      13: "enter",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down"
    };
    var l = function() {
      j.element[0].focus()
    };
    a.$on("uib:datepicker.focus", l), a.keydown = function(b) {
      var c = a.keys[b.which];
      if (c && !b.shiftKey && !b.altKey)
        if (b.preventDefault(), j.shortcutPropagation || b.stopPropagation(), "enter" === c || "space" === c) {
          if (j.isDisabled(j.activeDate)) return;
          a.select(j.activeDate)
        } else !b.ctrlKey || "up" !== c && "down" !== c ? (j.handleKeyDown(c, b), j.refreshView()) : a.toggleMode("up" === c ? 1 : -1)
    }
  }]).directive("datepicker", ["$log", "$datepickerSuppressWarning", function(a, b) {
    return {
      replace: !0,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/datepicker/datepicker.html"
      },
      scope: {
        datepickerMode: "=?",
        dateDisabled: "&",
        customClass: "&",
        shortcutPropagation: "&?"
      },
      require: ["datepicker", "^ngModel"],
      controller: "DatepickerController",
      controllerAs: "datepicker",
      link: function(c, d, e, f) {
        b || a.warn("datepicker is now deprecated. Use uib-datepicker instead.");
        var g = f[0],
          h = f[1];
        g.init(h)
      }
    }
  }]).directive("daypicker", ["$log", "$datepickerSuppressWarning", function(a, b) {
    return {
      replace: !0,
      templateUrl: "template/datepicker/day.html",
      require: ["^datepicker", "daypicker"],
      controller: "UibDaypickerController",
      link: function(c, d, e, f) {
        b || a.warn("daypicker is now deprecated. Use uib-daypicker instead.");
        var g = f[0],
          h = f[1];
        h.init(g)
      }
    }
  }]).directive("monthpicker", ["$log", "$datepickerSuppressWarning", function(a, b) {
    return {
      replace: !0,
      templateUrl: "template/datepicker/month.html",
      require: ["^datepicker", "monthpicker"],
      controller: "UibMonthpickerController",
      link: function(c, d, e, f) {
        b || a.warn("monthpicker is now deprecated. Use uib-monthpicker instead.");
        var g = f[0],
          h = f[1];
        h.init(g)
      }
    }
  }]).directive("yearpicker", ["$log", "$datepickerSuppressWarning", function(a, b) {
    return {
      replace: !0,
      templateUrl: "template/datepicker/year.html",
      require: ["^datepicker", "yearpicker"],
      controller: "UibYearpickerController",
      link: function(c, d, e, f) {
        b || a.warn("yearpicker is now deprecated. Use uib-yearpicker instead.");
        var g = f[0];
        angular.extend(g, f[1]), g.yearpickerInit(), g.refreshView()
      }
    }
  }]).directive("datepickerPopup", ["$log", "$datepickerSuppressWarning", function(a, b) {
    return {
      require: ["ngModel", "datepickerPopup"],
      controller: "UibDatepickerPopupController",
      scope: {
        isOpen: "=?",
        currentText: "@",
        clearText: "@",
        closeText: "@",
        dateDisabled: "&",
        customClass: "&"
      },
      link: function(c, d, e, f) {
        b || a.warn("datepicker-popup is now deprecated. Use uib-datepicker-popup instead.");
        var g = f[0],
          h = f[1];
        h.init(g)
      }
    }
  }]).directive("datepickerPopupWrap", ["$log", "$datepickerSuppressWarning", function(a, b) {
    return {
      replace: !0,
      transclude: !0,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/datepicker/popup.html"
      },
      link: function() {
        b || a.warn("datepicker-popup-wrap is now deprecated. Use uib-datepicker-popup-wrap instead.")
      }
    }
  }]), angular.module("ui.bootstrap.dropdown", ["ui.bootstrap.position"]).constant("uibDropdownConfig", {
    openClass: "open"
  }).service("uibDropdownService", ["$document", "$rootScope", function(a, b) {
    var c = null;
    this.open = function(b) {
      c || (a.bind("click", d), a.bind("keydown", e)), c && c !== b && (c.isOpen = !1), c = b
    }, this.close = function(b) {
      c === b && (c = null, a.unbind("click", d), a.unbind("keydown", e))
    };
    var d = function(a) {
        if (c && (!a || "disabled" !== c.getAutoClose())) {
          var d = c.getToggleElement();
          if (!(a && d && d[0].contains(a.target))) {
            var e = c.getDropdownElement();
            a && "outsideClick" === c.getAutoClose() && e && e[0].contains(a.target) || (c.isOpen = !1, b.$$phase || c.$apply())
          }
        }
      },
      e = function(a) {
        27 === a.which ? (c.focusToggleElement(), d()) : c.isKeynavEnabled() && /(38|40)/.test(a.which) && c.isOpen && (a.preventDefault(), a.stopPropagation(), c.focusDropdownEntry(a.which))
      }
  }]).controller("UibDropdownController", ["$scope", "$element", "$attrs", "$parse", "uibDropdownConfig", "uibDropdownService", "$animate", "$uibPosition", "$document", "$compile", "$templateRequest", function(a, b, c, d, e, f, g, h, i, j, k) {
    var l, m, n = this,
      o = a.$new(),
      p = e.openClass,
      q = angular.noop,
      r = c.onToggle ? d(c.onToggle) : angular.noop,
      s = !1,
      t = !1;
    b.addClass("dropdown"), this.init = function() {
      c.isOpen && (m = d(c.isOpen), q = m.assign, a.$watch(m, function(a) {
        o.isOpen = !!a
      })), s = angular.isDefined(c.dropdownAppendToBody), t = angular.isDefined(c.uibKeyboardNav), s && n.dropdownMenu && (i.find("body").append(n.dropdownMenu), b.on("$destroy", function() {
        n.dropdownMenu.remove()
      }))
    }, this.toggle = function(a) {
      return o.isOpen = arguments.length ? !!a : !o.isOpen
    }, this.isOpen = function() {
      return o.isOpen
    }, o.getToggleElement = function() {
      return n.toggleElement
    }, o.getAutoClose = function() {
      return c.autoClose || "always"
    }, o.getElement = function() {
      return b
    }, o.isKeynavEnabled = function() {
      return t
    }, o.focusDropdownEntry = function(a) {
      var c = n.dropdownMenu ? angular.element(n.dropdownMenu).find("a") : angular.element(b).find("ul").eq(0).find("a");
      switch (a) {
        case 40:
          angular.isNumber(n.selectedOption) ? n.selectedOption = n.selectedOption === c.length - 1 ? n.selectedOption : n.selectedOption + 1 : n.selectedOption = 0;
          break;
        case 38:
          angular.isNumber(n.selectedOption) ? n.selectedOption = 0 === n.selectedOption ? 0 : n.selectedOption - 1 : n.selectedOption = c.length - 1
      }
      c[n.selectedOption].focus()
    }, o.getDropdownElement = function() {
      return n.dropdownMenu
    }, o.focusToggleElement = function() {
      n.toggleElement && n.toggleElement[0].focus()
    }, o.$watch("isOpen", function(c, d) {
      if (s && n.dropdownMenu) {
        var e = h.positionElements(b, n.dropdownMenu, "bottom-left", !0),
          i = {
            top: e.top + "px",
            display: c ? "block" : "none"
          },
          m = n.dropdownMenu.hasClass("dropdown-menu-right");
        m ? (i.left = "auto", i.right = window.innerWidth - (e.left + b.prop("offsetWidth")) + "px") : (i.left = e.left + "px", i.right = "auto"), n.dropdownMenu.css(i)
      }
      if (g[c ? "addClass" : "removeClass"](b, p).then(function() {
          angular.isDefined(c) && c !== d && r(a, {
            open: !!c
          })
        }), c) n.dropdownMenuTemplateUrl && k(n.dropdownMenuTemplateUrl).then(function(a) {
        l = o.$new(), j(a.trim())(l, function(a) {
          var b = a;
          n.dropdownMenu.replaceWith(b), n.dropdownMenu = b
        })
      }), o.focusToggleElement(), f.open(o);
      else {
        if (n.dropdownMenuTemplateUrl) {
          l && l.$destroy();
          var t = angular.element('<ul class="dropdown-menu"></ul>');
          n.dropdownMenu.replaceWith(t), n.dropdownMenu = t
        }
        f.close(o), n.selectedOption = null
      }
      angular.isFunction(q) && q(a, c)
    }), a.$on("$locationChangeSuccess", function() {
      "disabled" !== o.getAutoClose() && (o.isOpen = !1)
    });
    var u = a.$on("$destroy", function() {
      o.$destroy()
    });
    o.$on("$destroy", u)
  }]).directive("uibDropdown", function() {
    return {
      controller: "UibDropdownController",
      link: function(a, b, c, d) {
        d.init()
      }
    }
  }).directive("uibDropdownMenu", function() {
    return {
      restrict: "AC",
      require: "?^uibDropdown",
      link: function(a, b, c, d) {
        if (d && !angular.isDefined(c.dropdownNested)) {
          b.addClass("dropdown-menu");
          var e = c.templateUrl;
          e && (d.dropdownMenuTemplateUrl = e), d.dropdownMenu || (d.dropdownMenu = b)
        }
      }
    }
  }).directive("uibKeyboardNav", function() {
    return {
      restrict: "A",
      require: "?^uibDropdown",
      link: function(a, b, c, d) {
        b.bind("keydown", function(a) {
          if (-1 !== [38, 40].indexOf(a.which)) {
            a.preventDefault(), a.stopPropagation();
            var b = d.dropdownMenu.find("a");
            switch (a.which) {
              case 40:
                angular.isNumber(d.selectedOption) ? d.selectedOption = d.selectedOption === b.length - 1 ? d.selectedOption : d.selectedOption + 1 : d.selectedOption = 0;
                break;
              case 38:
                angular.isNumber(d.selectedOption) ? d.selectedOption = 0 === d.selectedOption ? 0 : d.selectedOption - 1 : d.selectedOption = b.length - 1
            }
            b[d.selectedOption].focus()
          }
        })
      }
    }
  }).directive("uibDropdownToggle", function() {
    return {
      require: "?^uibDropdown",
      link: function(a, b, c, d) {
        if (d) {
          b.addClass("dropdown-toggle"), d.toggleElement = b;
          var e = function(e) {
            e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function() {
              d.toggle()
            })
          };
          b.bind("click", e), b.attr({
            "aria-haspopup": !0,
            "aria-expanded": !1
          }), a.$watch(d.isOpen, function(a) {
            b.attr("aria-expanded", !!a)
          }), a.$on("$destroy", function() {
            b.unbind("click", e)
          })
        }
      }
    }
  }), angular.module("ui.bootstrap.dropdown").value("$dropdownSuppressWarning", !1).service("dropdownService", ["$log", "$dropdownSuppressWarning", "uibDropdownService", function(a, b, c) {
    b || a.warn("dropdownService is now deprecated. Use uibDropdownService instead."), angular.extend(this, c)
  }]).controller("DropdownController", ["$scope", "$element", "$attrs", "$parse", "uibDropdownConfig", "uibDropdownService", "$animate", "$uibPosition", "$document", "$compile", "$templateRequest", "$log", "$dropdownSuppressWarning", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    m || l.warn("DropdownController is now deprecated. Use UibDropdownController instead.");
    var n, o, p = this,
      q = a.$new(),
      r = e.openClass,
      s = angular.noop,
      t = c.onToggle ? d(c.onToggle) : angular.noop,
      u = !1,
      v = !1;
    b.addClass("dropdown"), this.init = function() {
      c.isOpen && (o = d(c.isOpen), s = o.assign, a.$watch(o, function(a) {
        q.isOpen = !!a
      })), u = angular.isDefined(c.dropdownAppendToBody), v = angular.isDefined(c.uibKeyboardNav), u && p.dropdownMenu && (i.find("body").append(p.dropdownMenu), b.on("$destroy", function() {
        p.dropdownMenu.remove()
      }))
    }, this.toggle = function(a) {
      return q.isOpen = arguments.length ? !!a : !q.isOpen
    }, this.isOpen = function() {
      return q.isOpen
    }, q.getToggleElement = function() {
      return p.toggleElement
    }, q.getAutoClose = function() {
      return c.autoClose || "always"
    }, q.getElement = function() {
      return b
    }, q.isKeynavEnabled = function() {
      return v
    }, q.focusDropdownEntry = function(a) {
      var c = p.dropdownMenu ? angular.element(p.dropdownMenu).find("a") : angular.element(b).find("ul").eq(0).find("a");
      switch (a) {
        case 40:
          angular.isNumber(p.selectedOption) ? p.selectedOption = p.selectedOption === c.length - 1 ? p.selectedOption : p.selectedOption + 1 : p.selectedOption = 0;
          break;
        case 38:
          angular.isNumber(p.selectedOption) ? p.selectedOption = 0 === p.selectedOption ? 0 : p.selectedOption - 1 : p.selectedOption = c.length - 1
      }
      c[p.selectedOption].focus()
    }, q.getDropdownElement = function() {
      return p.dropdownMenu
    }, q.focusToggleElement = function() {
      p.toggleElement && p.toggleElement[0].focus()
    }, q.$watch("isOpen", function(c, d) {
      if (u && p.dropdownMenu) {
        var e = h.positionElements(b, p.dropdownMenu, "bottom-left", !0),
          i = {
            top: e.top + "px",
            display: c ? "block" : "none"
          },
          l = p.dropdownMenu.hasClass("dropdown-menu-right");
        l ? (i.left = "auto", i.right = window.innerWidth - (e.left + b.prop("offsetWidth")) + "px") : (i.left = e.left + "px", i.right = "auto"), p.dropdownMenu.css(i)
      }
      if (g[c ? "addClass" : "removeClass"](b, r).then(function() {
          angular.isDefined(c) && c !== d && t(a, {
            open: !!c
          })
        }), c) p.dropdownMenuTemplateUrl && k(p.dropdownMenuTemplateUrl).then(function(a) {
        n = q.$new(), j(a.trim())(n, function(a) {
          var b = a;
          p.dropdownMenu.replaceWith(b), p.dropdownMenu = b
        })
      }), q.focusToggleElement(), f.open(q);
      else {
        if (p.dropdownMenuTemplateUrl) {
          n && n.$destroy();
          var m = angular.element('<ul class="dropdown-menu"></ul>');
          p.dropdownMenu.replaceWith(m), p.dropdownMenu = m
        }
        f.close(q), p.selectedOption = null
      }
      angular.isFunction(s) && s(a, c)
    }), a.$on("$locationChangeSuccess", function() {
      "disabled" !== q.getAutoClose() && (q.isOpen = !1)
    });
    var w = a.$on("$destroy", function() {
      q.$destroy()
    });
    q.$on("$destroy", w)
  }]).directive("dropdown", ["$log", "$dropdownSuppressWarning", function(a, b) {
    return {
      controller: "DropdownController",
      link: function(c, d, e, f) {
        b || a.warn("dropdown is now deprecated. Use uib-dropdown instead."), f.init()
      }
    }
  }]).directive("dropdownMenu", ["$log", "$dropdownSuppressWarning", function(a, b) {
    return {
      restrict: "AC",
      require: "?^dropdown",
      link: function(c, d, e, f) {
        if (f && !angular.isDefined(e.dropdownNested)) {
          b || a.warn("dropdown-menu is now deprecated. Use uib-dropdown-menu instead."), d.addClass("dropdown-menu");
          var g = e.templateUrl;
          g && (f.dropdownMenuTemplateUrl = g), f.dropdownMenu || (f.dropdownMenu = d)
        }
      }
    }
  }]).directive("keyboardNav", ["$log", "$dropdownSuppressWarning", function(a, b) {
    return {
      restrict: "A",
      require: "?^dropdown",
      link: function(c, d, e, f) {
        b || a.warn("keyboard-nav is now deprecated. Use uib-keyboard-nav instead."), d.bind("keydown", function(a) {
          if (-1 !== [38, 40].indexOf(a.which)) {
            a.preventDefault(), a.stopPropagation();
            var b = f.dropdownMenu.find("a");
            switch (a.which) {
              case 40:
                angular.isNumber(f.selectedOption) ? f.selectedOption = f.selectedOption === b.length - 1 ? f.selectedOption : f.selectedOption + 1 : f.selectedOption = 0;
                break;
              case 38:
                angular.isNumber(f.selectedOption) ? f.selectedOption = 0 === f.selectedOption ? 0 : f.selectedOption - 1 : f.selectedOption = b.length - 1
            }
            b[f.selectedOption].focus()
          }
        })
      }
    }
  }]).directive("dropdownToggle", ["$log", "$dropdownSuppressWarning", function(a, b) {
    return {
      require: "?^dropdown",
      link: function(c, d, e, f) {
        if (b || a.warn("dropdown-toggle is now deprecated. Use uib-dropdown-toggle instead."), f) {
          d.addClass("dropdown-toggle"), f.toggleElement = d;
          var g = function(a) {
            a.preventDefault(), d.hasClass("disabled") || e.disabled || c.$apply(function() {
              f.toggle()
            })
          };
          d.bind("click", g), d.attr({
            "aria-haspopup": !0,
            "aria-expanded": !1
          }), c.$watch(f.isOpen, function(a) {
            d.attr("aria-expanded", !!a)
          }), c.$on("$destroy", function() {
            d.unbind("click", g)
          })
        }
      }
    }
  }]), angular.module("ui.bootstrap.stackedMap", []).factory("$$stackedMap", function() {
    return {
      createNew: function() {
        var a = [];
        return {
          add: function(b, c) {
            a.push({
              key: b,
              value: c
            })
          },
          get: function(b) {
            for (var c = 0; c < a.length; c++)
              if (b == a[c].key) return a[c]
          },
          keys: function() {
            for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
            return b
          },
          top: function() {
            return a[a.length - 1]
          },
          remove: function(b) {
            for (var c = -1, d = 0; d < a.length; d++)
              if (b == a[d].key) {
                c = d;
                break
              }
            return a.splice(c, 1)[0]
          },
          removeTop: function() {
            return a.splice(a.length - 1, 1)[0]
          },
          length: function() {
            return a.length
          }
        }
      }
    }
  }), angular.module("ui.bootstrap.modal", ["ui.bootstrap.stackedMap"]).factory("$$multiMap", function() {
    return {
      createNew: function() {
        var a = {};
        return {
          entries: function() {
            return Object.keys(a).map(function(b) {
              return {
                key: b,
                value: a[b]
              }
            })
          },
          get: function(b) {
            return a[b]
          },
          hasKey: function(b) {
            return !!a[b]
          },
          keys: function() {
            return Object.keys(a)
          },
          put: function(b, c) {
            a[b] || (a[b] = []), a[b].push(c)
          },
          remove: function(b, c) {
            var d = a[b];
            if (d) {
              var e = d.indexOf(c); - 1 !== e && d.splice(e, 1), d.length || delete a[b]
            }
          }
        }
      }
    }
  }).directive("uibModalBackdrop", ["$animate", "$injector", "$uibModalStack", function(a, b, c) {
    function d(b, d, f) {
      d.addClass("modal-backdrop"), f.modalInClass && (e ? e(d, {
        addClass: f.modalInClass
      }).start() : a.addClass(d, f.modalInClass), b.$on(c.NOW_CLOSING_EVENT, function(b, c) {
        var g = c();
        e ? e(d, {
          removeClass: f.modalInClass
        }).start().then(g) : a.removeClass(d, f.modalInClass).then(g)
      }))
    }
    var e = null;
    return b.has("$animateCss") && (e = b.get("$animateCss")), {
      replace: !0,
      templateUrl: "template/modal/backdrop.html",
      compile: function(a, b) {
        return a.addClass(b.backdropClass), d
      }
    }
  }]).directive("uibModalWindow", ["$uibModalStack", "$q", "$animate", "$injector", function(a, b, c, d) {
    var e = null;
    return d.has("$animateCss") && (e = d.get("$animateCss")), {
      scope: {
        index: "@"
      },
      replace: !0,
      transclude: !0,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/modal/window.html"
      },
      link: function(d, f, g) {
        f.addClass(g.windowClass || ""), f.addClass(g.windowTopClass || ""), d.size = g.size, d.close = function(b) {
          var c = a.getTop();
          c && c.value.backdrop && "static" !== c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
        }, f.on("click", d.close), d.$isRendered = !0;
        var h = b.defer();
        g.$observe("modalRender", function(a) {
          "true" == a && h.resolve()
        }), h.promise.then(function() {
          var h = null;
          g.modalInClass && (h = e ? e(f, {
            addClass: g.modalInClass
          }).start() : c.addClass(f, g.modalInClass), d.$on(a.NOW_CLOSING_EVENT, function(a, b) {
            var d = b();
            e ? e(f, {
              removeClass: g.modalInClass
            }).start().then(d) : c.removeClass(f, g.modalInClass).then(d)
          })), b.when(h).then(function() {
            var a = f[0].querySelector("[autofocus]");
            a ? a.focus() : f[0].focus()
          });
          var i = a.getTop();
          i && a.modalRendered(i.key)
        })
      }
    }
  }]).directive("uibModalAnimationClass", function() {
    return {
      compile: function(a, b) {
        b.modalAnimation && a.addClass(b.uibModalAnimationClass)
      }
    }
  }).directive("uibModalTransclude", function() {
    return {
      link: function(a, b, c, d, e) {
        e(a.$parent, function(a) {
          b.empty(), b.append(a)
        })
      }
    }
  }).factory("$uibModalStack", ["$animate", "$timeout", "$document", "$compile", "$rootScope", "$q", "$injector", "$$multiMap", "$$stackedMap", function(a, b, c, d, e, f, g, h, i) {
    function j() {
      for (var a = -1, b = u.keys(), c = 0; c < b.length; c++) u.get(b[c]).value.backdrop && (a = c);
      return a
    }

    function k(a, b) {
      var d = c.find("body").eq(0),
        e = u.get(a).value;
      u.remove(a), n(e.modalDomEl, e.modalScope, function() {
        var b = e.openedClass || t;
        v.remove(b, a), d.toggleClass(b, v.hasKey(b)), l(!0)
      }), m(), b && b.focus ? b.focus() : d.focus()
    }

    function l(a) {
      var b;
      u.length() > 0 && (b = u.top().value, b.modalDomEl.toggleClass(b.windowTopClass || "", a))
    }

    function m() {
      if (q && -1 == j()) {
        var a = r;
        n(q, r, function() {
          a = null
        }), q = void 0, r = void 0
      }
    }

    function n(b, c, d) {
      function e() {
        e.done || (e.done = !0, p ? p(b, {
          event: "leave"
        }).start().then(function() {
          b.remove()
        }) : a.leave(b), c.$destroy(), d && d())
      }
      var g, h = null,
        i = function() {
          return g || (g = f.defer(), h = g.promise),
            function() {
              g.resolve()
            }
        };
      return c.$broadcast(w.NOW_CLOSING_EVENT, i), f.when(h).then(e)
    }

    function o(a, b, c) {
      return !a.value.modalScope.$broadcast("modal.closing", b, c).defaultPrevented
    }
    var p = null;
    g.has("$animateCss") && (p = g.get("$animateCss"));
    var q, r, s, t = "modal-open",
      u = i.createNew(),
      v = h.createNew(),
      w = {
        NOW_CLOSING_EVENT: "modal.stack.now-closing"
      },
      x = 0,
      y = "a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";
    return e.$watch(j, function(a) {
      r && (r.index = a)
    }), c.bind("keydown", function(a) {
      if (a.isDefaultPrevented()) return a;
      var b = u.top();
      if (b && b.value.keyboard) switch (a.which) {
        case 27:
          a.preventDefault(), e.$apply(function() {
            w.dismiss(b.key, "escape key press")
          });
          break;
        case 9:
          w.loadFocusElementList(b);
          var c = !1;
          a.shiftKey ? w.isFocusInFirstItem(a) && (c = w.focusLastFocusableElement()) : w.isFocusInLastItem(a) && (c = w.focusFirstFocusableElement()), c && (a.preventDefault(), a.stopPropagation())
      }
    }), w.open = function(a, b) {
      var f = c[0].activeElement,
        g = b.openedClass || t;
      l(!1), u.add(a, {
        deferred: b.deferred,
        renderDeferred: b.renderDeferred,
        modalScope: b.scope,
        backdrop: b.backdrop,
        keyboard: b.keyboard,
        openedClass: b.openedClass,
        windowTopClass: b.windowTopClass
      }), v.put(g, a);
      var h = c.find("body").eq(0),
        i = j();
      if (i >= 0 && !q) {
        r = e.$new(!0), r.index = i;
        var k = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
        k.attr("backdrop-class", b.backdropClass), b.animation && k.attr("modal-animation", "true"), q = d(k)(r), h.append(q)
      }
      var m = angular.element('<div uib-modal-window="modal-window"></div>');
      m.attr({
        "template-url": b.windowTemplateUrl,
        "window-class": b.windowClass,
        "window-top-class": b.windowTopClass,
        size: b.size,
        index: u.length() - 1,
        animate: "animate"
      }).html(b.content), b.animation && m.attr("modal-animation", "true");
      var n = d(m)(b.scope);
      u.top().value.modalDomEl = n, u.top().value.modalOpener = f, h.append(n), h.addClass(g), w.clearFocusListCache()
    }, w.close = function(a, b) {
      var c = u.get(a);
      return c && o(c, b, !0) ? (c.value.modalScope.$$uibDestructionScheduled = !0, c.value.deferred.resolve(b), k(a, c.value.modalOpener), !0) : !c
    }, w.dismiss = function(a, b) {
      var c = u.get(a);
      return c && o(c, b, !1) ? (c.value.modalScope.$$uibDestructionScheduled = !0,
        c.value.deferred.reject(b), k(a, c.value.modalOpener), !0) : !c
    }, w.dismissAll = function(a) {
      for (var b = this.getTop(); b && this.dismiss(b.key, a);) b = this.getTop()
    }, w.getTop = function() {
      return u.top()
    }, w.modalRendered = function(a) {
      var b = u.get(a);
      b && b.value.renderDeferred.resolve()
    }, w.focusFirstFocusableElement = function() {
      return s.length > 0 ? (s[0].focus(), !0) : !1
    }, w.focusLastFocusableElement = function() {
      return s.length > 0 ? (s[s.length - 1].focus(), !0) : !1
    }, w.isFocusInFirstItem = function(a) {
      return s.length > 0 ? (a.target || a.srcElement) == s[0] : !1
    }, w.isFocusInLastItem = function(a) {
      return s.length > 0 ? (a.target || a.srcElement) == s[s.length - 1] : !1
    }, w.clearFocusListCache = function() {
      s = [], x = 0
    }, w.loadFocusElementList = function(a) {
      if ((void 0 === s || !s.length) && a) {
        var b = a.value.modalDomEl;
        b && b.length && (s = b[0].querySelectorAll(y))
      }
    }, w
  }]).provider("$uibModal", function() {
    var a = {
      options: {
        animation: !0,
        backdrop: !0,
        keyboard: !0
      },
      $get: ["$injector", "$rootScope", "$q", "$templateRequest", "$controller", "$uibModalStack", "$modalSuppressWarning", "$log", function(b, c, d, e, f, g, h, i) {
        function j(a) {
          return a.template ? d.when(a.template) : e(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl)
        }

        function k(a) {
          var c = [];
          return angular.forEach(a, function(a) {
            angular.isFunction(a) || angular.isArray(a) ? c.push(d.when(b.invoke(a))) : angular.isString(a) ? c.push(d.when(b.get(a))) : c.push(d.when(a))
          }), c
        }
        var l = {},
          m = null;
        return l.getPromiseChain = function() {
          return m
        }, l.open = function(b) {
          function e() {
            return r
          }
          var l = d.defer(),
            n = d.defer(),
            o = d.defer(),
            p = {
              result: l.promise,
              opened: n.promise,
              rendered: o.promise,
              close: function(a) {
                return g.close(p, a)
              },
              dismiss: function(a) {
                return g.dismiss(p, a)
              }
            };
          if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
          var q, r = d.all([j(b)].concat(k(b.resolve)));
          return q = m = d.all([m]).then(e, e).then(function(a) {
            var d = (b.scope || c).$new();
            d.$close = p.close, d.$dismiss = p.dismiss, d.$on("$destroy", function() {
              d.$$uibDestructionScheduled || d.$dismiss("$uibUnscheduledDestruction")
            });
            var e, j = {},
              k = 1;
            b.controller && (j.$scope = d, j.$uibModalInstance = p, Object.defineProperty(j, "$modalInstance", {
              get: function() {
                return h || i.warn("$modalInstance is now deprecated. Use $uibModalInstance instead."), p
              }
            }), angular.forEach(b.resolve, function(b, c) {
              j[c] = a[k++]
            }), e = f(b.controller, j), b.controllerAs && (b.bindToController && angular.extend(e, d), d[b.controllerAs] = e)), g.open(p, {
              scope: d,
              deferred: l,
              renderDeferred: o,
              content: a[0],
              animation: b.animation,
              backdrop: b.backdrop,
              keyboard: b.keyboard,
              backdropClass: b.backdropClass,
              windowTopClass: b.windowTopClass,
              windowClass: b.windowClass,
              windowTemplateUrl: b.windowTemplateUrl,
              size: b.size,
              openedClass: b.openedClass
            }), n.resolve(!0)
          }, function(a) {
            n.reject(a), l.reject(a)
          })["finally"](function() {
            m === q && (m = null)
          }), p
        }, l
      }]
    };
    return a
  }), angular.module("ui.bootstrap.modal").value("$modalSuppressWarning", !1).directive("modalBackdrop", ["$animate", "$injector", "$modalStack", "$log", "$modalSuppressWarning", function(a, b, c, d, e) {
    function f(b, f, h) {
      e || d.warn("modal-backdrop is now deprecated. Use uib-modal-backdrop instead."), f.addClass("modal-backdrop"), h.modalInClass && (g ? g(f, {
        addClass: h.modalInClass
      }).start() : a.addClass(f, h.modalInClass), b.$on(c.NOW_CLOSING_EVENT, function(b, c) {
        var d = c();
        g ? g(f, {
          removeClass: h.modalInClass
        }).start().then(d) : a.removeClass(f, h.modalInClass).then(d)
      }))
    }
    var g = null;
    return b.has("$animateCss") && (g = b.get("$animateCss")), {
      replace: !0,
      templateUrl: "template/modal/backdrop.html",
      compile: function(a, b) {
        return a.addClass(b.backdropClass), f
      }
    }
  }]).directive("modalWindow", ["$modalStack", "$q", "$animate", "$injector", "$log", "$modalSuppressWarning", function(a, b, c, d, e, f) {
    var g = null;
    return d.has("$animateCss") && (g = d.get("$animateCss")), {
      scope: {
        index: "@"
      },
      replace: !0,
      transclude: !0,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/modal/window.html"
      },
      link: function(d, h, i) {
        f || e.warn("modal-window is now deprecated. Use uib-modal-window instead."), h.addClass(i.windowClass || ""), h.addClass(i.windowTopClass || ""), d.size = i.size, d.close = function(b) {
          var c = a.getTop();
          c && c.value.backdrop && "static" !== c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
        }, h.on("click", d.close), d.$isRendered = !0;
        var j = b.defer();
        i.$observe("modalRender", function(a) {
          "true" == a && j.resolve()
        }), j.promise.then(function() {
          var e = null;
          i.modalInClass && (e = g ? g(h, {
            addClass: i.modalInClass
          }).start() : c.addClass(h, i.modalInClass), d.$on(a.NOW_CLOSING_EVENT, function(a, b) {
            var d = b();
            g ? g(h, {
              removeClass: i.modalInClass
            }).start().then(d) : c.removeClass(h, i.modalInClass).then(d)
          })), b.when(e).then(function() {
            var a = h[0].querySelector("[autofocus]");
            a ? a.focus() : h[0].focus()
          });
          var f = a.getTop();
          f && a.modalRendered(f.key)
        })
      }
    }
  }]).directive("modalAnimationClass", ["$log", "$modalSuppressWarning", function(a, b) {
    return {
      compile: function(c, d) {
        b || a.warn("modal-animation-class is now deprecated. Use uib-modal-animation-class instead."), d.modalAnimation && c.addClass(d.modalAnimationClass)
      }
    }
  }]).directive("modalTransclude", ["$log", "$modalSuppressWarning", function(a, b) {
    return {
      link: function(c, d, e, f, g) {
        b || a.warn("modal-transclude is now deprecated. Use uib-modal-transclude instead."), g(c.$parent, function(a) {
          d.empty(), d.append(a)
        })
      }
    }
  }]).service("$modalStack", ["$animate", "$timeout", "$document", "$compile", "$rootScope", "$q", "$injector", "$$multiMap", "$$stackedMap", "$uibModalStack", "$log", "$modalSuppressWarning", function(a, b, c, d, e, f, g, h, i, j, k, l) {
    l || k.warn("$modalStack is now deprecated. Use $uibModalStack instead."), angular.extend(this, j)
  }]).provider("$modal", ["$uibModalProvider", function(a) {
    angular.extend(this, a), this.$get = ["$injector", "$log", "$modalSuppressWarning", function(b, c, d) {
      return d || c.warn("$modal is now deprecated. Use $uibModal instead."), b.invoke(a.$get)
    }]
  }]), angular.module("ui.bootstrap.pagination", []).controller("UibPaginationController", ["$scope", "$attrs", "$parse", function(a, b, c) {
    var d = this,
      e = {
        $setViewValue: angular.noop
      },
      f = b.numPages ? c(b.numPages).assign : angular.noop;
    this.init = function(g, h) {
      e = g, this.config = h, e.$render = function() {
        d.render()
      }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
        d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
      }) : this.itemsPerPage = h.itemsPerPage, a.$watch("totalItems", function() {
        a.totalPages = d.calculateTotalPages()
      }), a.$watch("totalPages", function(b) {
        f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
      })
    }, this.calculateTotalPages = function() {
      var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
      return Math.max(b || 0, 1)
    }, this.render = function() {
      a.page = parseInt(e.$viewValue, 10) || 1
    }, a.selectPage = function(b, c) {
      c && c.preventDefault();
      var d = !a.ngDisabled || !c;
      d && a.page !== b && b > 0 && b <= a.totalPages && (c && c.target && c.target.blur(), e.$setViewValue(b), e.$render())
    }, a.getText = function(b) {
      return a[b + "Text"] || d.config[b + "Text"]
    }, a.noPrevious = function() {
      return 1 === a.page
    }, a.noNext = function() {
      return a.page === a.totalPages
    }
  }]).constant("uibPaginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
  }).directive("uibPagination", ["$parse", "uibPaginationConfig", function(a, b) {
    return {
      restrict: "EA",
      scope: {
        totalItems: "=",
        firstText: "@",
        previousText: "@",
        nextText: "@",
        lastText: "@",
        ngDisabled: "="
      },
      require: ["uibPagination", "?ngModel"],
      controller: "UibPaginationController",
      controllerAs: "pagination",
      templateUrl: function(a, b) {
        return b.templateUrl || "template/pagination/pagination.html"
      },
      replace: !0,
      link: function(c, d, e, f) {
        function g(a, b, c) {
          return {
            number: a,
            text: b,
            active: c
          }
        }

        function h(a, b) {
          var c = [],
            d = 1,
            e = b,
            f = angular.isDefined(k) && b > k;
          f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
          for (var h = d; e >= h; h++) {
            var i = g(h, h, h === a);
            c.push(i)
          }
          if (f && !l) {
            if (d > 1) {
              var j = g(d - 1, "...", !1);
              c.unshift(j)
            }
            if (b > e) {
              var m = g(e + 1, "...", !1);
              c.push(m)
            }
          }
          return c
        }
        var i = f[0],
          j = f[1];
        if (j) {
          var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize,
            l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
          c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function(a) {
            k = parseInt(a, 10), i.render()
          });
          var m = i.render;
          i.render = function() {
            m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
          }
        }
      }
    }
  }]).constant("uibPagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
  }).directive("uibPager", ["uibPagerConfig", function(a) {
    return {
      restrict: "EA",
      scope: {
        totalItems: "=",
        previousText: "@",
        nextText: "@",
        ngDisabled: "="
      },
      require: ["uibPager", "?ngModel"],
      controller: "UibPaginationController",
      controllerAs: "pagination",
      templateUrl: function(a, b) {
        return b.templateUrl || "template/pagination/pager.html"
      },
      replace: !0,
      link: function(b, c, d, e) {
        var f = e[0],
          g = e[1];
        g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a))
      }
    }
  }]), angular.module("ui.bootstrap.pagination").value("$paginationSuppressWarning", !1).controller("PaginationController", ["$scope", "$attrs", "$parse", "$log", "$paginationSuppressWarning", function(a, b, c, d, e) {
    e || d.warn("PaginationController is now deprecated. Use UibPaginationController instead.");
    var f = this,
      g = {
        $setViewValue: angular.noop
      },
      h = b.numPages ? c(b.numPages).assign : angular.noop;
    this.init = function(d, e) {
      g = d, this.config = e, g.$render = function() {
        f.render()
      }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
        f.itemsPerPage = parseInt(b, 10), a.totalPages = f.calculateTotalPages()
      }) : this.itemsPerPage = e.itemsPerPage, a.$watch("totalItems", function() {
        a.totalPages = f.calculateTotalPages()
      }), a.$watch("totalPages", function(b) {
        h(a.$parent, b), a.page > b ? a.selectPage(b) : g.$render()
      })
    }, this.calculateTotalPages = function() {
      var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
      return Math.max(b || 0, 1)
    }, this.render = function() {
      a.page = parseInt(g.$viewValue, 10) || 1
    }, a.selectPage = function(b, c) {
      c && c.preventDefault();
      var d = !a.ngDisabled || !c;
      d && a.page !== b && b > 0 && b <= a.totalPages && (c && c.target && c.target.blur(), g.$setViewValue(b), g.$render())
    }, a.getText = function(b) {
      return a[b + "Text"] || f.config[b + "Text"]
    }, a.noPrevious = function() {
      return 1 === a.page
    }, a.noNext = function() {
      return a.page === a.totalPages
    }
  }]).directive("pagination", ["$parse", "uibPaginationConfig", "$log", "$paginationSuppressWarning", function(a, b, c, d) {
    return {
      restrict: "EA",
      scope: {
        totalItems: "=",
        firstText: "@",
        previousText: "@",
        nextText: "@",
        lastText: "@",
        ngDisabled: "="
      },
      require: ["pagination", "?ngModel"],
      controller: "PaginationController",
      controllerAs: "pagination",
      templateUrl: function(a, b) {
        return b.templateUrl || "template/pagination/pagination.html"
      },
      replace: !0,
      link: function(e, f, g, h) {
        function i(a, b, c) {
          return {
            number: a,
            text: b,
            active: c
          }
        }

        function j(a, b) {
          var c = [],
            d = 1,
            e = b,
            f = angular.isDefined(m) && b > m;
          f && (n ? (d = Math.max(a - Math.floor(m / 2), 1), e = d + m - 1, e > b && (e = b, d = e - m + 1)) : (d = (Math.ceil(a / m) - 1) * m + 1, e = Math.min(d + m - 1, b)));
          for (var g = d; e >= g; g++) {
            var h = i(g, g, g === a);
            c.push(h)
          }
          if (f && !n) {
            if (d > 1) {
              var j = i(d - 1, "...", !1);
              c.unshift(j)
            }
            if (b > e) {
              var k = i(e + 1, "...", !1);
              c.push(k)
            }
          }
          return c
        }
        d || c.warn("pagination is now deprecated. Use uib-pagination instead.");
        var k = h[0],
          l = h[1];
        if (l) {
          var m = angular.isDefined(g.maxSize) ? e.$parent.$eval(g.maxSize) : b.maxSize,
            n = angular.isDefined(g.rotate) ? e.$parent.$eval(g.rotate) : b.rotate;
          e.boundaryLinks = angular.isDefined(g.boundaryLinks) ? e.$parent.$eval(g.boundaryLinks) : b.boundaryLinks, e.directionLinks = angular.isDefined(g.directionLinks) ? e.$parent.$eval(g.directionLinks) : b.directionLinks, k.init(l, b), g.maxSize && e.$parent.$watch(a(g.maxSize), function(a) {
            m = parseInt(a, 10), k.render()
          });
          var o = k.render;
          k.render = function() {
            o(), e.page > 0 && e.page <= e.totalPages && (e.pages = j(e.page, e.totalPages))
          }
        }
      }
    }
  }]).directive("pager", ["uibPagerConfig", "$log", "$paginationSuppressWarning", function(a, b, c) {
    return {
      restrict: "EA",
      scope: {
        totalItems: "=",
        previousText: "@",
        nextText: "@",
        ngDisabled: "="
      },
      require: ["pager", "?ngModel"],
      controller: "PaginationController",
      controllerAs: "pagination",
      templateUrl: function(a, b) {
        return b.templateUrl || "template/pagination/pager.html"
      },
      replace: !0,
      link: function(d, e, f, g) {
        c || b.warn("pager is now deprecated. Use uib-pager instead.");
        var h = g[0],
          i = g[1];
        i && (d.align = angular.isDefined(f.align) ? d.$parent.$eval(f.align) : a.align, h.init(i, a))
      }
    }
  }]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.stackedMap"]).provider("$uibTooltip", function() {
    function a(a) {
      var b = /[A-Z]/g,
        c = "-";
      return a.replace(b, function(a, b) {
        return (b ? c : "") + a.toLowerCase()
      })
    }
    var b = {
        placement: "top",
        animation: !0,
        popupDelay: 0,
        popupCloseDelay: 0,
        useContentExp: !1
      },
      c = {
        mouseenter: "mouseleave",
        click: "click",
        focus: "blur",
        none: ""
      },
      d = {};
    this.options = function(a) {
      angular.extend(d, a)
    }, this.setTriggers = function(a) {
      angular.extend(c, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$document", "$uibPosition", "$interpolate", "$rootScope", "$parse", "$$stackedMap", function(e, f, g, h, i, j, k, l, m) {
      var n = m.createNew();
      return h.on("keypress", function(a) {
          if (27 === a.which) {
            var b = n.top();
            b && (b.value.close(), n.removeTop(), b = null)
          }
        }),
        function(e, k, m, o) {
          function p(a) {
            var b = (a || o.trigger || m).split(" "),
              d = b.map(function(a) {
                return c[a] || a
              });
            return {
              show: b,
              hide: d
            }
          }
          o = angular.extend({}, b, d, o);
          var q = a(e),
            r = j.startSymbol(),
            s = j.endSymbol(),
            t = "<div " + q + '-popup title="' + r + "title" + s + '" ' + (o.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + r + "content" + s + '" ') + 'placement="' + r + "placement" + s + '" popup-class="' + r + "popupClass" + s + '" animation="animation" is-open="isOpen"origin-scope="origScope" style="visibility: hidden; display: block; top: -9999px; left: -9999px;"></div>';
          return {
            compile: function(a, b) {
              var c = f(t);
              return function(a, b, d, f) {
                function j() {
                  L.isOpen ? q() : m()
                }

                function m() {
                  (!K || a.$eval(d[k + "Enable"])) && (u(), x(), L.popupDelay ? F || (F = g(r, L.popupDelay, !1)) : r())
                }

                function q() {
                  s(), L.popupCloseDelay ? G || (G = g(t, L.popupCloseDelay, !1)) : t()
                }

                function r() {
                  return s(), u(), L.content ? (v(), void L.$evalAsync(function() {
                    L.isOpen = !0, y(!0), Q()
                  })) : angular.noop
                }

                function s() {
                  F && (g.cancel(F), F = null), H && (g.cancel(H), H = null)
                }

                function t() {
                  s(), u(), L && L.$evalAsync(function() {
                    L.isOpen = !1, y(!1), L.animation ? E || (E = g(w, 150, !1)) : w()
                  })
                }

                function u() {
                  G && (g.cancel(G), G = null), E && (g.cancel(E), E = null)
                }

                function v() {
                  C || (D = L.$new(), C = c(D, function(a) {
                    I ? h.find("body").append(a) : b.after(a)
                  }), z())
                }

                function w() {
                  A(), E = null, C && (C.remove(), C = null), D && (D.$destroy(), D = null)
                }

                function x() {
                  L.title = d[k + "Title"], O ? L.content = O(a) : L.content = d[e], L.popupClass = d[k + "Class"], L.placement = angular.isDefined(d[k + "Placement"]) ? d[k + "Placement"] : o.placement;
                  var b = parseInt(d[k + "PopupDelay"], 10),
                    c = parseInt(d[k + "PopupCloseDelay"], 10);
                  L.popupDelay = isNaN(b) ? o.popupDelay : b, L.popupCloseDelay = isNaN(c) ? o.popupCloseDelay : c
                }

                function y(b) {
                  N && angular.isFunction(N.assign) && N.assign(a, b)
                }

                function z() {
                  P.length = 0, O ? (P.push(a.$watch(O, function(a) {
                    L.content = a, !a && L.isOpen && t()
                  })), P.push(D.$watch(function() {
                    M || (M = !0, D.$$postDigest(function() {
                      M = !1, L && L.isOpen && Q()
                    }))
                  }))) : P.push(d.$observe(e, function(a) {
                    L.content = a, !a && L.isOpen ? t() : Q()
                  })), P.push(d.$observe(k + "Title", function(a) {
                    L.title = a, L.isOpen && Q()
                  })), P.push(d.$observe(k + "Placement", function(a) {
                    L.placement = a ? a : o.placement, L.isOpen && Q()
                  }))
                }

                function A() {
                  P.length && (angular.forEach(P, function(a) {
                    a()
                  }), P.length = 0)
                }

                function B() {
                  var a = d[k + "Trigger"];
                  R(), J = p(a), "none" !== J.show && J.show.forEach(function(a, c) {
                    a === J.hide[c] ? b[0].addEventListener(a, j) : a && (b[0].addEventListener(a, m), J.hide[c].split(" ").forEach(function(a) {
                      b[0].addEventListener(a, q)
                    })), b.on("keypress", function(a) {
                      27 === a.which && q()
                    })
                  })
                }
                var C, D, E, F, G, H, I = angular.isDefined(o.appendToBody) ? o.appendToBody : !1,
                  J = p(void 0),
                  K = angular.isDefined(d[k + "Enable"]),
                  L = a.$new(!0),
                  M = !1,
                  N = angular.isDefined(d[k + "IsOpen"]) ? l(d[k + "IsOpen"]) : !1,
                  O = o.useContentExp ? l(d[e]) : !1,
                  P = [],
                  Q = function() {
                    C && C.html() && (H || (H = g(function() {
                      C.css({
                        top: 0,
                        left: 0
                      });
                      var a = i.positionElements(b, C, L.placement, I);
                      a.top += "px", a.left += "px", a.visibility = "visible", C.css(a), H = null
                    }, 0, !1)))
                  };
                L.origScope = a, L.isOpen = !1, n.add(L, {
                  close: t
                }), L.contentExp = function() {
                  return L.content
                }, d.$observe("disabled", function(a) {
                  a && s(), a && L.isOpen && t()
                }), N && a.$watch(N, function(a) {
                  L && !a === L.isOpen && j()
                });
                var R = function() {
                  J.show.forEach(function(a) {
                    b.unbind(a, m)
                  }), J.hide.forEach(function(a) {
                    a.split(" ").forEach(function(a) {
                      b[0].removeEventListener(a, q)
                    })
                  })
                };
                B();
                var S = a.$eval(d[k + "Animation"]);
                L.animation = angular.isDefined(S) ? !!S : o.animation;
                var T = a.$eval(d[k + "AppendToBody"]);
                I = angular.isDefined(T) ? T : I, I && a.$on("$locationChangeSuccess", function() {
                  L.isOpen && t()
                }), a.$on("$destroy", function() {
                  s(), u(), R(), w(), n.remove(L), L = null
                })
              }
            }
          }
        }
    }]
  }).directive("uibTooltipTemplateTransclude", ["$animate", "$sce", "$compile", "$templateRequest", function(a, b, c, d) {
    return {
      link: function(e, f, g) {
        var h, i, j, k = e.$eval(g.tooltipTemplateTranscludeScope),
          l = 0,
          m = function() {
            i && (i.remove(), i = null), h && (h.$destroy(), h = null), j && (a.leave(j).then(function() {
              i = null
            }), i = j, j = null)
          };
        e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude), function(b) {
          var g = ++l;
          b ? (d(b, !0).then(function(d) {
            if (g === l) {
              var e = k.$new(),
                i = d,
                n = c(i)(e, function(b) {
                  m(), a.enter(b, f)
                });
              h = e, j = n, h.$emit("$includeContentLoaded", b)
            }
          }, function() {
            g === l && (m(), e.$emit("$includeContentError", b))
          }), e.$emit("$includeContentRequested", b)) : m()
        }), e.$on("$destroy", m)
      }
    }
  }]).directive("uibTooltipClasses", function() {
    return {
      restrict: "A",
      link: function(a, b, c) {
        a.placement && b.addClass(a.placement), a.popupClass && b.addClass(a.popupClass), a.animation() && b.addClass(c.tooltipAnimationClass)
      }
    }
  }).directive("uibTooltipPopup", function() {
    return {
      replace: !0,
      scope: {
        content: "@",
        placement: "@",
        popupClass: "@",
        animation: "&",
        isOpen: "&"
      },
      templateUrl: "template/tooltip/tooltip-popup.html",
      link: function(a, b) {
        b.addClass("tooltip")
      }
    }
  }).directive("uibTooltip", ["$uibTooltip", function(a) {
    return a("uibTooltip", "tooltip", "mouseenter")
  }]).directive("uibTooltipTemplatePopup", function() {
    return {
      replace: !0,
      scope: {
        contentExp: "&",
        placement: "@",
        popupClass: "@",
        animation: "&",
        isOpen: "&",
        originScope: "&"
      },
      templateUrl: "template/tooltip/tooltip-template-popup.html",
      link: function(a, b) {
        b.addClass("tooltip")
      }
    }
  }).directive("uibTooltipTemplate", ["$uibTooltip", function(a) {
    return a("uibTooltipTemplate", "tooltip", "mouseenter", {
      useContentExp: !0
    })
  }]).directive("uibTooltipHtmlPopup", function() {
    return {
      replace: !0,
      scope: {
        contentExp: "&",
        placement: "@",
        popupClass: "@",
        animation: "&",
        isOpen: "&"
      },
      templateUrl: "template/tooltip/tooltip-html-popup.html",
      link: function(a, b) {
        b.addClass("tooltip")
      }
    }
  }).directive("uibTooltipHtml", ["$uibTooltip", function(a) {
    return a("uibTooltipHtml", "tooltip", "mouseenter", {
      useContentExp: !0
    })
  }]), angular.module("ui.bootstrap.tooltip").value("$tooltipSuppressWarning", !1).provider("$tooltip", ["$uibTooltipProvider", function(a) {
    angular.extend(this, a), this.$get = ["$log", "$tooltipSuppressWarning", "$injector", function(b, c, d) {
      return c || b.warn("$tooltip is now deprecated. Use $uibTooltip instead."), d.invoke(a.$get)
    }]
  }]).directive("tooltipTemplateTransclude", ["$animate", "$sce", "$compile", "$templateRequest", "$log", "$tooltipSuppressWarning", function(a, b, c, d, e, f) {
    return {
      link: function(g, h, i) {
        f || e.warn("tooltip-template-transclude is now deprecated. Use uib-tooltip-template-transclude instead.");
        var j, k, l, m = g.$eval(i.tooltipTemplateTranscludeScope),
          n = 0,
          o = function() {
            k && (k.remove(), k = null), j && (j.$destroy(), j = null), l && (a.leave(l).then(function() {
              k = null
            }), k = l, l = null)
          };
        g.$watch(b.parseAsResourceUrl(i.tooltipTemplateTransclude), function(b) {
          var e = ++n;
          b ? (d(b, !0).then(function(d) {
            if (e === n) {
              var f = m.$new(),
                g = d,
                i = c(g)(f, function(b) {
                  o(), a.enter(b, h)
                });
              j = f, l = i, j.$emit("$includeContentLoaded", b)
            }
          }, function() {
            e === n && (o(), g.$emit("$includeContentError", b))
          }), g.$emit("$includeContentRequested", b)) : o()
        }), g.$on("$destroy", o)
      }
    }
  }]).directive("tooltipClasses", ["$log", "$tooltipSuppressWarning", function(a, b) {
    return {
      restrict: "A",
      link: function(c, d, e) {
        b || a.warn("tooltip-classes is now deprecated. Use uib-tooltip-classes instead."), c.placement && d.addClass(c.placement), c.popupClass && d.addClass(c.popupClass), c.animation() && d.addClass(e.tooltipAnimationClass)
      }
    }
  }]).directive("tooltipPopup", ["$log", "$tooltipSuppressWarning", function(a, b) {
    return {
      replace: !0,
      scope: {
        content: "@",
        placement: "@",
        popupClass: "@",
        animation: "&",
        isOpen: "&"
      },
      templateUrl: "template/tooltip/tooltip-popup.html",
      link: function(c, d) {
        b || a.warn("tooltip-popup is now deprecated. Use uib-tooltip-popup instead."), d.addClass("tooltip")
      }
    }
  }]).directive("tooltip", ["$tooltip", function(a) {
    return a("tooltip", "tooltip", "mouseenter")
  }]).directive("tooltipTemplatePopup", ["$log", "$tooltipSuppressWarning", function(a, b) {
    return {
      replace: !0,
      scope: {
        contentExp: "&",
        placement: "@",
        popupClass: "@",
        animation: "&",
        isOpen: "&",
        originScope: "&"
      },
      templateUrl: "template/tooltip/tooltip-template-popup.html",
      link: function(c, d) {
        b || a.warn("tooltip-template-popup is now deprecated. Use uib-tooltip-template-popup instead."), d.addClass("tooltip")
      }
    }
  }]).directive("tooltipTemplate", ["$tooltip", function(a) {
    return a("tooltipTemplate", "tooltip", "mouseenter", {
      useContentExp: !0
    })
  }]).directive("tooltipHtmlPopup", ["$log", "$tooltipSuppressWarning", function(a, b) {
    return {
      replace: !0,
      scope: {
        contentExp: "&",
        placement: "@",
        popupClass: "@",
        animation: "&",
        isOpen: "&"
      },
      templateUrl: "template/tooltip/tooltip-html-popup.html",
      link: function(c, d) {
        b || a.warn("tooltip-html-popup is now deprecated. Use uib-tooltip-html-popup instead."), d.addClass("tooltip")
      }
    }
  }]).directive("tooltipHtml", ["$tooltip", function(a) {
    return a("tooltipHtml", "tooltip", "mouseenter", {
      useContentExp: !0
    })
  }]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup", function() {
    return {
      replace: !0,
      scope: {
        title: "@",
        contentExp: "&",
        placement: "@",
        popupClass: "@",
        animation: "&",
        isOpen: "&",
        originScope: "&"
      },
      templateUrl: "template/popover/popover-template.html",
      link: function(a, b) {
        b.addClass("popover")
      }
    }
  }).directive("uibPopoverTemplate", ["$uibTooltip", function(a) {
    return a("uibPopoverTemplate", "popover", "click", {
      useContentExp: !0
    })
  }]).directive("uibPopoverHtmlPopup", function() {
    return {
      replace: !0,
      scope: {
        contentExp: "&",
        title: "@",
        placement: "@",
        popupClass: "@",
        animation: "&",
        isOpen: "&"
      },
      templateUrl: "template/popover/popover-html.html",
      link: function(a, b) {
        b.addClass("popover")
      }
    }
  }).directive("uibPopoverHtml", ["$uibTooltip", function(a) {
    return a("uibPopoverHtml", "popover", "click", {
      useContentExp: !0
    })
  }]).directive("uibPopoverPopup", function() {
    return {
      replace: !0,
      scope: {
        title: "@",
        content: "@",
        placement: "@",
        popupClass: "@",
        animation: "&",
        isOpen: "&"
      },
      templateUrl: "template/popover/popover.html",
      link: function(a, b) {
        b.addClass("popover")
      }
    }
  }).directive("uibPopover", ["$uibTooltip", function(a) {
    return a("uibPopover", "popover", "click")
  }]), angular.module("ui.bootstrap.popover").value("$popoverSuppressWarning", !1).directive("popoverTemplatePopup", ["$log", "$popoverSuppressWarning", function(a, b) {
    return {
      replace: !0,
      scope: {
        title: "@",
        contentExp: "&",
        placement: "@",
        popupClass: "@",
        animation: "&",
        isOpen: "&",
        originScope: "&"
      },
      templateUrl: "template/popover/popover-template.html",
      link: function(c, d) {
        b || a.warn("popover-template-popup is now deprecated. Use uib-popover-template-popup instead."), d.addClass("popover")
      }
    }
  }]).directive("popoverTemplate", ["$tooltip", function(a) {
    return a("popoverTemplate", "popover", "click", {
      useContentExp: !0
    })
  }]).directive("popoverHtmlPopup", ["$log", "$popoverSuppressWarning", function(a, b) {
    return {
      replace: !0,
      scope: {
        contentExp: "&",
        title: "@",
        placement: "@",
        popupClass: "@",
        animation: "&",
        isOpen: "&"
      },
      templateUrl: "template/popover/popover-html.html",
      link: function(c, d) {
        b || a.warn("popover-html-popup is now deprecated. Use uib-popover-html-popup instead."), d.addClass("popover")
      }
    }
  }]).directive("popoverHtml", ["$tooltip", function(a) {
    return a("popoverHtml", "popover", "click", {
      useContentExp: !0
    })
  }]).directive("popoverPopup", ["$log", "$popoverSuppressWarning", function(a, b) {
    return {
      replace: !0,
      scope: {
        title: "@",
        content: "@",
        placement: "@",
        popupClass: "@",
        animation: "&",
        isOpen: "&"
      },
      templateUrl: "template/popover/popover.html",
      link: function(c, d) {
        b || a.warn("popover-popup is now deprecated. Use uib-popover-popup instead."), d.addClass("popover")
      }
    }
  }]).directive("popover", ["$tooltip", function(a) {
    return a("popover", "popover", "click")
  }]), angular.module("ui.bootstrap.progressbar", []).constant("uibProgressConfig", {
    animate: !0,
    max: 100
  }).controller("UibProgressController", ["$scope", "$attrs", "uibProgressConfig", function(a, b, c) {
    var d = this,
      e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.bars = [], a.max = angular.isDefined(a.max) ? a.max : c.max, this.addBar = function(b, c, f) {
      e || c.css({
        transition: "none"
      }), this.bars.push(b), b.max = a.max, b.title = f && angular.isDefined(f.title) ? f.title : "progressbar", b.$watch("value", function(a) {
        b.recalculatePercentage()
      }), b.recalculatePercentage = function() {
        var a = d.bars.reduce(function(a, b) {
          return b.percent = +(100 * b.value / b.max).toFixed(2), a + b.percent
        }, 0);
        a > 100 && (b.percent -= a - 100)
      }, b.$on("$destroy", function() {
        c = null, d.removeBar(b)
      })
    }, this.removeBar = function(a) {
      this.bars.splice(this.bars.indexOf(a), 1), this.bars.forEach(function(a) {
        a.recalculatePercentage()
      })
    }, a.$watch("max", function(b) {
      d.bars.forEach(function(b) {
        b.max = a.max, b.recalculatePercentage()
      })
    })
  }]).directive("uibProgress", function() {
    return {
      replace: !0,
      transclude: !0,
      controller: "UibProgressController",
      require: "uibProgress",
      scope: {
        max: "=?"
      },
      templateUrl: "template/progressbar/progress.html"
    }
  }).directive("uibBar", function() {
    return {
      replace: !0,
      transclude: !0,
      require: "^uibProgress",
      scope: {
        value: "=",
        type: "@"
      },
      templateUrl: "template/progressbar/bar.html",
      link: function(a, b, c, d) {
        d.addBar(a, b, c)
      }
    }
  }).directive("uibProgressbar", function() {
    return {
      replace: !0,
      transclude: !0,
      controller: "UibProgressController",
      scope: {
        value: "=",
        max: "=?",
        type: "@"
      },
      templateUrl: "template/progressbar/progressbar.html",
      link: function(a, b, c, d) {
        d.addBar(a, angular.element(b.children()[0]), {
          title: c.title
        })
      }
    }
  }), angular.module("ui.bootstrap.progressbar").value("$progressSuppressWarning", !1).controller("ProgressController", ["$scope", "$attrs", "uibProgressConfig", "$log", "$progressSuppressWarning", function(a, b, c, d, e) {
    e || d.warn("ProgressController is now deprecated. Use UibProgressController instead.");
    var f = this,
      g = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.bars = [], a.max = angular.isDefined(a.max) ? a.max : c.max, this.addBar = function(b, c, d) {
      g || c.css({
        transition: "none"
      }), this.bars.push(b), b.max = a.max, b.title = d && angular.isDefined(d.title) ? d.title : "progressbar", b.$watch("value", function(a) {
        b.recalculatePercentage()
      }), b.recalculatePercentage = function() {
        b.percent = +(100 * b.value / b.max).toFixed(2);
        var a = f.bars.reduce(function(a, b) {
          return a + b.percent
        }, 0);
        a > 100 && (b.percent -= a - 100)
      }, b.$on("$destroy", function() {
        c = null, f.removeBar(b)
      })
    }, this.removeBar = function(a) {
      this.bars.splice(this.bars.indexOf(a), 1)
    }, a.$watch("max", function(b) {
      f.bars.forEach(function(b) {
        b.max = a.max, b.recalculatePercentage()
      })
    })
  }]).directive("progress", ["$log", "$progressSuppressWarning", function(a, b) {
    return {
      replace: !0,
      transclude: !0,
      controller: "ProgressController",
      require: "progress",
      scope: {
        max: "=?",
        title: "@?"
      },
      templateUrl: "template/progressbar/progress.html",
      link: function() {
        b || a.warn("progress is now deprecated. Use uib-progress instead.")
      }
    }
  }]).directive("bar", ["$log", "$progressSuppressWarning", function(a, b) {
    return {
      replace: !0,
      transclude: !0,
      require: "^progress",
      scope: {
        value: "=",
        type: "@"
      },
      templateUrl: "template/progressbar/bar.html",
      link: function(c, d, e, f) {
        b || a.warn("bar is now deprecated. Use uib-bar instead."), f.addBar(c, d)
      }
    }
  }]).directive("progressbar", ["$log", "$progressSuppressWarning", function(a, b) {
    return {
      replace: !0,
      transclude: !0,
      controller: "ProgressController",
      scope: {
        value: "=",
        max: "=?",
        type: "@"
      },
      templateUrl: "template/progressbar/progressbar.html",
      link: function(c, d, e, f) {
        b || a.warn("progressbar is now deprecated. Use uib-progressbar instead."), f.addBar(c, angular.element(d.children()[0]), {
          title: e.title
        })
      }
    }
  }]), angular.module("ui.bootstrap.rating", []).constant("uibRatingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null,
    titles: ["one", "two", "three", "four", "five"]
  }).controller("UibRatingController", ["$scope", "$attrs", "uibRatingConfig", function(a, b, c) {
    var d = {
      $setViewValue: angular.noop
    };
    this.init = function(e) {
      d = e, d.$render = this.render, d.$formatters.push(function(a) {
        return angular.isNumber(a) && a << 0 !== a && (a = Math.round(a)), a
      }), this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
      var f = angular.isDefined(b.titles) ? a.$parent.$eval(b.titles) : c.titles;
      this.titles = angular.isArray(f) && f.length > 0 ? f : c.titles;
      var g = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
      a.range = this.buildTemplateObjects(g)
    }, this.buildTemplateObjects = function(a) {
      for (var b = 0, c = a.length; c > b; b++) a[b] = angular.extend({
        index: b
      }, {
        stateOn: this.stateOn,
        stateOff: this.stateOff,
        title: this.getTitle(b)
      }, a[b]);
      return a
    }, this.getTitle = function(a) {
      return a >= this.titles.length ? a + 1 : this.titles[a]
    }, a.rate = function(b) {
      !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(d.$viewValue === b ? 0 : b), d.$render())
    }, a.enter = function(b) {
      a.readonly || (a.value = b), a.onHover({
        value: b
      })
    }, a.reset = function() {
      a.value = d.$viewValue, a.onLeave()
    }, a.onKeydown = function(b) {
      /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
    }, this.render = function() {
      a.value = d.$viewValue
    }
  }]).directive("uibRating", function() {
    return {
      require: ["uibRating", "ngModel"],
      scope: {
        readonly: "=?",
        onHover: "&",
        onLeave: "&"
      },
      controller: "UibRatingController",
      templateUrl: "template/rating/rating.html",
      replace: !0,
      link: function(a, b, c, d) {
        var e = d[0],
          f = d[1];
        e.init(f)
      }
    }
  }), angular.module("ui.bootstrap.rating").value("$ratingSuppressWarning", !1).controller("RatingController", ["$scope", "$attrs", "$controller", "$log", "$ratingSuppressWarning", function(a, b, c, d, e) {
    e || d.warn("RatingController is now deprecated. Use UibRatingController instead."), angular.extend(this, c("UibRatingController", {
      $scope: a,
      $attrs: b
    }))
  }]).directive("rating", ["$log", "$ratingSuppressWarning", function(a, b) {
    return {
      require: ["rating", "ngModel"],
      scope: {
        readonly: "=?",
        onHover: "&",
        onLeave: "&"
      },
      controller: "RatingController",
      templateUrl: "template/rating/rating.html",
      replace: !0,
      link: function(c, d, e, f) {
        b || a.warn("rating is now deprecated. Use uib-rating instead.");
        var g = f[0],
          h = f[1];
        g.init(h)
      }
    }
  }]), angular.module("ui.bootstrap.tabs", []).controller("UibTabsetController", ["$scope", function(a) {
    var b = this,
      c = b.tabs = a.tabs = [];
    b.select = function(a) {
      angular.forEach(c, function(b) {
        b.active && b !== a && (b.active = !1, b.onDeselect(), a.selectCalled = !1)
      }), a.active = !0, a.selectCalled || (a.onSelect(), a.selectCalled = !0)
    }, b.addTab = function(a) {
      c.push(a), 1 === c.length && a.active !== !1 ? a.active = !0 : a.active ? b.select(a) : a.active = !1
    }, b.removeTab = function(a) {
      var e = c.indexOf(a);
      if (a.active && c.length > 1 && !d) {
        var f = e == c.length - 1 ? e - 1 : e + 1;
        b.select(c[f])
      }
      c.splice(e, 1)
    };
    var d;
    a.$on("$destroy", function() {
      d = !0
    })
  }]).directive("uibTabset", function() {
    return {
      restrict: "EA",
      transclude: !0,
      replace: !0,
      scope: {
        type: "@"
      },
      controller: "UibTabsetController",
      templateUrl: "template/tabs/tabset.html",
      link: function(a, b, c) {
        a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
      }
    }
  }).directive("uibTab", ["$parse", function(a) {
    return {
      require: "^uibTabset",
      restrict: "EA",
      replace: !0,
      templateUrl: "template/tabs/tab.html",
      transclude: !0,
      scope: {
        active: "=?",
        heading: "@",
        onSelect: "&select",
        onDeselect: "&deselect"
      },
      controller: function() {},
      link: function(b, c, d, e, f) {
        b.$watch("active", function(a) {
          a && e.select(b)
        }), b.disabled = !1, d.disable && b.$parent.$watch(a(d.disable), function(a) {
          b.disabled = !!a
        }), b.select = function() {
          b.disabled || (b.active = !0)
        }, e.addTab(b), b.$on("$destroy", function() {
          e.removeTab(b)
        }), b.$transcludeFn = f
      }
    }
  }]).directive("uibTabHeadingTransclude", function() {
    return {
      restrict: "A",
      require: ["?^uibTab", "?^tab"],
      link: function(a, b) {
        a.$watch("headingElement", function(a) {
          a && (b.html(""), b.append(a))
        })
      }
    }
  }).directive("uibTabContentTransclude", function() {
    function a(a) {
      return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || a.hasAttribute("x-tab-heading") || a.hasAttribute("uib-tab-heading") || a.hasAttribute("data-uib-tab-heading") || a.hasAttribute("x-uib-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase() || "x-tab-heading" === a.tagName.toLowerCase() || "uib-tab-heading" === a.tagName.toLowerCase() || "data-uib-tab-heading" === a.tagName.toLowerCase() || "x-uib-tab-heading" === a.tagName.toLowerCase());
    }
    return {
      restrict: "A",
      require: ["?^uibTabset", "?^tabset"],
      link: function(b, c, d) {
        var e = b.$eval(d.uibTabContentTransclude);
        e.$transcludeFn(e.$parent, function(b) {
          angular.forEach(b, function(b) {
            a(b) ? e.headingElement = b : c.append(b)
          })
        })
      }
    }
  }), angular.module("ui.bootstrap.tabs").value("$tabsSuppressWarning", !1).controller("TabsetController", ["$scope", "$controller", "$log", "$tabsSuppressWarning", function(a, b, c, d) {
    d || c.warn("TabsetController is now deprecated. Use UibTabsetController instead."), angular.extend(this, b("UibTabsetController", {
      $scope: a
    }))
  }]).directive("tabset", ["$log", "$tabsSuppressWarning", function(a, b) {
    return {
      restrict: "EA",
      transclude: !0,
      replace: !0,
      scope: {
        type: "@"
      },
      controller: "TabsetController",
      templateUrl: "template/tabs/tabset.html",
      link: function(c, d, e) {
        b || a.warn("tabset is now deprecated. Use uib-tabset instead."), c.vertical = angular.isDefined(e.vertical) ? c.$parent.$eval(e.vertical) : !1, c.justified = angular.isDefined(e.justified) ? c.$parent.$eval(e.justified) : !1
      }
    }
  }]).directive("tab", ["$parse", "$log", "$tabsSuppressWarning", function(a, b, c) {
    return {
      require: "^tabset",
      restrict: "EA",
      replace: !0,
      templateUrl: "template/tabs/tab.html",
      transclude: !0,
      scope: {
        active: "=?",
        heading: "@",
        onSelect: "&select",
        onDeselect: "&deselect"
      },
      controller: function() {},
      link: function(d, e, f, g, h) {
        c || b.warn("tab is now deprecated. Use uib-tab instead."), d.$watch("active", function(a) {
          a && g.select(d)
        }), d.disabled = !1, f.disable && d.$parent.$watch(a(f.disable), function(a) {
          d.disabled = !!a
        }), d.select = function() {
          d.disabled || (d.active = !0)
        }, g.addTab(d), d.$on("$destroy", function() {
          g.removeTab(d)
        }), d.$transcludeFn = h
      }
    }
  }]).directive("tabHeadingTransclude", ["$log", "$tabsSuppressWarning", function(a, b) {
    return {
      restrict: "A",
      require: "^tab",
      link: function(c, d) {
        b || a.warn("tab-heading-transclude is now deprecated. Use uib-tab-heading-transclude instead."), c.$watch("headingElement", function(a) {
          a && (d.html(""), d.append(a))
        })
      }
    }
  }]).directive("tabContentTransclude", ["$log", "$tabsSuppressWarning", function(a, b) {
    function c(a) {
      return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || a.hasAttribute("x-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase() || "x-tab-heading" === a.tagName.toLowerCase())
    }
    return {
      restrict: "A",
      require: "^tabset",
      link: function(d, e, f) {
        b || a.warn("tab-content-transclude is now deprecated. Use uib-tab-content-transclude instead.");
        var g = d.$eval(f.tabContentTransclude);
        g.$transcludeFn(g.$parent, function(a) {
          angular.forEach(a, function(a) {
            c(a) ? g.headingElement = a : e.append(a)
          })
        })
      }
    }
  }]), angular.module("ui.bootstrap.timepicker", []).constant("uibTimepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: !0,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0,
    arrowkeys: !0,
    showSpinners: !0
  }).controller("UibTimepickerController", ["$scope", "$element", "$attrs", "$parse", "$log", "$locale", "uibTimepickerConfig", function(a, b, c, d, e, f, g) {
    function h() {
      var b = parseInt(a.hours, 10),
        c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
      return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === r[1] && (b += 12)), b) : void 0
    }

    function i() {
      var b = parseInt(a.minutes, 10);
      return b >= 0 && 60 > b ? b : void 0
    }

    function j(a) {
      return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a.toString()
    }

    function k(a) {
      l(), q.$setViewValue(new Date(p)), m(a)
    }

    function l() {
      q.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
    }

    function m(b) {
      var c = p.getHours(),
        d = p.getMinutes();
      a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : j(c), "m" !== b && (a.minutes = j(d)), a.meridian = p.getHours() < 12 ? r[0] : r[1]
    }

    function n(a, b) {
      var c = new Date(a.getTime() + 6e4 * b),
        d = new Date(a);
      return d.setHours(c.getHours(), c.getMinutes()), d
    }

    function o(a) {
      p = n(p, a), k()
    }
    var p = new Date,
      q = {
        $setViewValue: angular.noop
      },
      r = angular.isDefined(c.meridians) ? a.$parent.$eval(c.meridians) : g.meridians || f.DATETIME_FORMATS.AMPMS;
    a.tabindex = angular.isDefined(c.tabindex) ? c.tabindex : 0, b.removeAttr("tabindex"), this.init = function(b, d) {
      q = b, q.$render = this.render, q.$formatters.unshift(function(a) {
        return a ? new Date(a) : null
      });
      var e = d.eq(0),
        f = d.eq(1),
        h = angular.isDefined(c.mousewheel) ? a.$parent.$eval(c.mousewheel) : g.mousewheel;
      h && this.setupMousewheelEvents(e, f);
      var i = angular.isDefined(c.arrowkeys) ? a.$parent.$eval(c.arrowkeys) : g.arrowkeys;
      i && this.setupArrowkeyEvents(e, f), a.readonlyInput = angular.isDefined(c.readonlyInput) ? a.$parent.$eval(c.readonlyInput) : g.readonlyInput, this.setupInputEvents(e, f)
    };
    var s = g.hourStep;
    c.hourStep && a.$parent.$watch(d(c.hourStep), function(a) {
      s = parseInt(a, 10)
    });
    var t = g.minuteStep;
    c.minuteStep && a.$parent.$watch(d(c.minuteStep), function(a) {
      t = parseInt(a, 10)
    });
    var u;
    a.$parent.$watch(d(c.min), function(a) {
      var b = new Date(a);
      u = isNaN(b) ? void 0 : b
    });
    var v;
    a.$parent.$watch(d(c.max), function(a) {
      var b = new Date(a);
      v = isNaN(b) ? void 0 : b
    }), a.noIncrementHours = function() {
      var a = n(p, 60 * s);
      return a > v || p > a && u > a
    }, a.noDecrementHours = function() {
      var a = n(p, 60 * -s);
      return u > a || a > p && a > v
    }, a.noIncrementMinutes = function() {
      var a = n(p, t);
      return a > v || p > a && u > a
    }, a.noDecrementMinutes = function() {
      var a = n(p, -t);
      return u > a || a > p && a > v
    }, a.noToggleMeridian = function() {
      return p.getHours() < 13 ? n(p, 720) > v : n(p, -720) < u
    }, a.showMeridian = g.showMeridian, c.showMeridian && a.$parent.$watch(d(c.showMeridian), function(b) {
      if (a.showMeridian = !!b, q.$error.time) {
        var c = h(),
          d = i();
        angular.isDefined(c) && angular.isDefined(d) && (p.setHours(c), k())
      } else m()
    }), this.setupMousewheelEvents = function(b, c) {
      var d = function(a) {
        a.originalEvent && (a = a.originalEvent);
        var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
        return a.detail || b > 0
      };
      b.bind("mousewheel wheel", function(b) {
        a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
      }), c.bind("mousewheel wheel", function(b) {
        a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
      })
    }, this.setupArrowkeyEvents = function(b, c) {
      b.bind("keydown", function(b) {
        38 === b.which ? (b.preventDefault(), a.incrementHours(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementHours(), a.$apply())
      }), c.bind("keydown", function(b) {
        38 === b.which ? (b.preventDefault(), a.incrementMinutes(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementMinutes(), a.$apply())
      })
    }, this.setupInputEvents = function(b, c) {
      if (a.readonlyInput) return a.updateHours = angular.noop, void(a.updateMinutes = angular.noop);
      var d = function(b, c) {
        q.$setViewValue(null), q.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
      };
      a.updateHours = function() {
        var a = h(),
          b = i();
        angular.isDefined(a) && angular.isDefined(b) ? (p.setHours(a), u > p || p > v ? d(!0) : k("h")) : d(!0)
      }, b.bind("blur", function(b) {
        !a.invalidHours && a.hours < 10 && a.$apply(function() {
          a.hours = j(a.hours)
        })
      }), a.updateMinutes = function() {
        var a = i(),
          b = h();
        angular.isDefined(a) && angular.isDefined(b) ? (p.setMinutes(a), u > p || p > v ? d(void 0, !0) : k("m")) : d(void 0, !0)
      }, c.bind("blur", function(b) {
        !a.invalidMinutes && a.minutes < 10 && a.$apply(function() {
          a.minutes = j(a.minutes)
        })
      })
    }, this.render = function() {
      var b = q.$viewValue;
      isNaN(b) ? (q.$setValidity("time", !1), e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (b && (p = b), u > p || p > v ? (q.$setValidity("time", !1), a.invalidHours = !0, a.invalidMinutes = !0) : l(), m())
    }, a.showSpinners = angular.isDefined(c.showSpinners) ? a.$parent.$eval(c.showSpinners) : g.showSpinners, a.incrementHours = function() {
      a.noIncrementHours() || o(60 * s)
    }, a.decrementHours = function() {
      a.noDecrementHours() || o(60 * -s)
    }, a.incrementMinutes = function() {
      a.noIncrementMinutes() || o(t)
    }, a.decrementMinutes = function() {
      a.noDecrementMinutes() || o(-t)
    }, a.toggleMeridian = function() {
      a.noToggleMeridian() || o(720 * (p.getHours() < 12 ? 1 : -1))
    }
  }]).directive("uibTimepicker", function() {
    return {
      restrict: "EA",
      require: ["uibTimepicker", "?^ngModel"],
      controller: "UibTimepickerController",
      controllerAs: "timepicker",
      replace: !0,
      scope: {},
      templateUrl: function(a, b) {
        return b.templateUrl || "template/timepicker/timepicker.html"
      },
      link: function(a, b, c, d) {
        var e = d[0],
          f = d[1];
        f && e.init(f, b.find("input"))
      }
    }
  }), angular.module("ui.bootstrap.timepicker").value("$timepickerSuppressWarning", !1).controller("TimepickerController", ["$scope", "$element", "$attrs", "$controller", "$log", "$timepickerSuppressWarning", function(a, b, c, d, e, f) {
    f || e.warn("TimepickerController is now deprecated. Use UibTimepickerController instead."), angular.extend(this, d("UibTimepickerController", {
      $scope: a,
      $element: b,
      $attrs: c
    }))
  }]).directive("timepicker", ["$log", "$timepickerSuppressWarning", function(a, b) {
    return {
      restrict: "EA",
      require: ["timepicker", "?^ngModel"],
      controller: "TimepickerController",
      controllerAs: "timepicker",
      replace: !0,
      scope: {},
      templateUrl: function(a, b) {
        return b.templateUrl || "template/timepicker/timepicker.html"
      },
      link: function(c, d, e, f) {
        b || a.warn("timepicker is now deprecated. Use uib-timepicker instead.");
        var g = f[0],
          h = f[1];
        h && g.init(h, d.find("input"))
      }
    }
  }]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position"]).factory("uibTypeaheadParser", ["$parse", function(a) {
    var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
      parse: function(c) {
        var d = c.match(b);
        if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
        return {
          itemName: d[3],
          source: a(d[4]),
          viewMapper: a(d[2] || d[1]),
          modelMapper: a(d[1])
        }
      }
    }
  }]).controller("UibTypeaheadController", ["$scope", "$element", "$attrs", "$compile", "$parse", "$q", "$timeout", "$document", "$window", "$rootScope", "$uibPosition", "uibTypeaheadParser", function(a, b, c, d, e, f, g, h, i, j, k, l) {
    function m() {
      K.moveInProgress || (K.moveInProgress = !0, K.$digest()), S && g.cancel(S), S = g(function() {
        K.matches.length && n(), K.moveInProgress = !1
      }, r)
    }

    function n() {
      K.position = C ? k.offset(b) : k.position(b), K.position.top += b.prop("offsetHeight")
    }
    var o, p, q = [9, 13, 27, 38, 40],
      r = 200,
      s = a.$eval(c.typeaheadMinLength);
    s || 0 === s || (s = 1);
    var t, u, v = a.$eval(c.typeaheadWaitMs) || 0,
      w = a.$eval(c.typeaheadEditable) !== !1,
      x = e(c.typeaheadLoading).assign || angular.noop,
      y = e(c.typeaheadOnSelect),
      z = angular.isDefined(c.typeaheadSelectOnBlur) ? a.$eval(c.typeaheadSelectOnBlur) : !1,
      A = e(c.typeaheadNoResults).assign || angular.noop,
      B = c.typeaheadInputFormatter ? e(c.typeaheadInputFormatter) : void 0,
      C = c.typeaheadAppendToBody ? a.$eval(c.typeaheadAppendToBody) : !1,
      D = c.typeaheadAppendToElementId || !1,
      E = a.$eval(c.typeaheadFocusFirst) !== !1,
      F = c.typeaheadSelectOnExact ? a.$eval(c.typeaheadSelectOnExact) : !1,
      G = e(c.ngModel),
      H = e(c.ngModel + "($$$p)"),
      I = function(b, c) {
        return angular.isFunction(G(a)) && p && p.$options && p.$options.getterSetter ? H(b, {
          $$$p: c
        }) : G.assign(b, c)
      },
      J = l.parse(c.uibTypeahead),
      K = a.$new(),
      L = a.$on("$destroy", function() {
        K.$destroy()
      });
    K.$on("$destroy", L);
    var M = "typeahead-" + K.$id + "-" + Math.floor(1e4 * Math.random());
    b.attr({
      "aria-autocomplete": "list",
      "aria-expanded": !1,
      "aria-owns": M
    });
    var N = angular.element("<div uib-typeahead-popup></div>");
    N.attr({
      id: M,
      matches: "matches",
      active: "activeIdx",
      select: "select(activeIdx)",
      "move-in-progress": "moveInProgress",
      query: "query",
      position: "position"
    }), angular.isDefined(c.typeaheadTemplateUrl) && N.attr("template-url", c.typeaheadTemplateUrl), angular.isDefined(c.typeaheadPopupTemplateUrl) && N.attr("popup-template-url", c.typeaheadPopupTemplateUrl);
    var O = function() {
        K.matches = [], K.activeIdx = -1, b.attr("aria-expanded", !1)
      },
      P = function(a) {
        return M + "-option-" + a
      };
    K.$watch("activeIdx", function(a) {
      0 > a ? b.removeAttr("aria-activedescendant") : b.attr("aria-activedescendant", P(a))
    });
    var Q = function(a, b) {
        return K.matches.length > b && a ? a.toUpperCase() === K.matches[b].label.toUpperCase() : !1
      },
      R = function(c) {
        var d = {
          $viewValue: c
        };
        x(a, !0), A(a, !1), f.when(J.source(a, d)).then(function(e) {
          var f = c === o.$viewValue;
          if (f && t)
            if (e && e.length > 0) {
              K.activeIdx = E ? 0 : -1, A(a, !1), K.matches.length = 0;
              for (var g = 0; g < e.length; g++) d[J.itemName] = e[g], K.matches.push({
                id: P(g),
                label: J.viewMapper(K, d),
                model: e[g]
              });
              K.query = c, n(), b.attr("aria-expanded", !0), F && 1 === K.matches.length && Q(c, 0) && K.select(0)
            } else O(), A(a, !0);
          f && x(a, !1)
        }, function() {
          O(), x(a, !1), A(a, !0)
        })
      };
    C && (angular.element(i).bind("resize", m), h.find("body").bind("scroll", m));
    var S;
    K.moveInProgress = !1, K.query = void 0;
    var T, U = function(a) {
        T = g(function() {
          R(a)
        }, v)
      },
      V = function() {
        T && g.cancel(T)
      };
    O(), K.select = function(d) {
      var e, f, h = {};
      u = !0, h[J.itemName] = f = K.matches[d].model, e = J.modelMapper(a, h), I(a, e), o.$setValidity("editable", !0), o.$setValidity("parse", !0), y(a, {
        $item: f,
        $model: e,
        $label: J.viewMapper(a, h)
      }), O(), K.$eval(c.typeaheadFocusOnSelect) !== !1 && g(function() {
        b[0].focus()
      }, 0, !1)
    }, b.bind("keydown", function(a) {
      if (0 !== K.matches.length && -1 !== q.indexOf(a.which)) {
        if (-1 === K.activeIdx && (9 === a.which || 13 === a.which)) return O(), void K.$digest();
        a.preventDefault(), 40 === a.which ? (K.activeIdx = (K.activeIdx + 1) % K.matches.length, K.$digest()) : 38 === a.which ? (K.activeIdx = (K.activeIdx > 0 ? K.activeIdx : K.matches.length) - 1, K.$digest()) : 13 === a.which || 9 === a.which ? K.$apply(function() {
          K.select(K.activeIdx)
        }) : 27 === a.which && (a.stopPropagation(), O(), K.$digest())
      }
    }), b.bind("blur", function() {
      z && K.matches.length && -1 !== K.activeIdx && !u && (u = !0, K.$apply(function() {
        K.select(K.activeIdx)
      })), t = !1, u = !1
    });
    var W = function(a) {
      b[0] !== a.target && 3 !== a.which && 0 !== K.matches.length && (O(), j.$$phase || K.$digest())
    };
    h.bind("click", W), a.$on("$destroy", function() {
      h.unbind("click", W), (C || D) && X.remove(), C && (angular.element(i).unbind("resize", m), h.find("body").unbind("scroll", m)), N.remove()
    });
    var X = d(N)(K);
    C ? h.find("body").append(X) : D !== !1 ? angular.element(h[0].getElementById(D)).append(X) : b.after(X), this.init = function(b, c) {
      o = b, p = c, o.$parsers.unshift(function(b) {
        return t = !0, 0 === s || b && b.length >= s ? v > 0 ? (V(), U(b)) : R(b) : (x(a, !1), V(), O()), w ? b : b ? void o.$setValidity("editable", !1) : (o.$setValidity("editable", !0), null)
      }), o.$formatters.push(function(b) {
        var c, d, e = {};
        return w || o.$setValidity("editable", !0), B ? (e.$model = b, B(a, e)) : (e[J.itemName] = b, c = J.viewMapper(a, e), e[J.itemName] = void 0, d = J.viewMapper(a, e), c !== d ? c : b)
      })
    }
  }]).directive("uibTypeahead", function() {
    return {
      controller: "UibTypeaheadController",
      require: ["ngModel", "^?ngModelOptions", "uibTypeahead"],
      link: function(a, b, c, d) {
        d[2].init(d[0], d[1])
      }
    }
  }).directive("uibTypeaheadPopup", function() {
    return {
      scope: {
        matches: "=",
        query: "=",
        active: "=",
        position: "&",
        moveInProgress: "=",
        select: "&"
      },
      replace: !0,
      templateUrl: function(a, b) {
        return b.popupTemplateUrl || "template/typeahead/typeahead-popup.html"
      },
      link: function(a, b, c) {
        a.templateUrl = c.templateUrl, a.isOpen = function() {
          return a.matches.length > 0
        }, a.isActive = function(b) {
          return a.active == b
        }, a.selectActive = function(b) {
          a.active = b
        }, a.selectMatch = function(b) {
          a.select({
            activeIdx: b
          })
        }
      }
    }
  }).directive("uibTypeaheadMatch", ["$templateRequest", "$compile", "$parse", function(a, b, c) {
    return {
      scope: {
        index: "=",
        match: "=",
        query: "="
      },
      link: function(d, e, f) {
        var g = c(f.templateUrl)(d.$parent) || "template/typeahead/typeahead-match.html";
        a(g).then(function(a) {
          b(a.trim())(d, function(a) {
            e.replaceWith(a)
          })
        })
      }
    }
  }]).filter("uibTypeaheadHighlight", ["$sce", "$injector", "$log", function(a, b, c) {
    function d(a) {
      return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }

    function e(a) {
      return /<.*>/g.test(a)
    }
    var f;
    return f = b.has("$sanitize"),
      function(b, g) {
        return !f && e(b) && c.warn("Unsafe use of typeahead please use ngSanitize"), b = g ? ("" + b).replace(new RegExp(d(g), "gi"), "<strong>$&</strong>") : b, f || (b = a.trustAsHtml(b)), b
      }
  }]), angular.module("ui.bootstrap.typeahead").value("$typeaheadSuppressWarning", !1).service("typeaheadParser", ["$parse", "uibTypeaheadParser", "$log", "$typeaheadSuppressWarning", function(a, b, c, d) {
    return d || c.warn("typeaheadParser is now deprecated. Use uibTypeaheadParser instead."), b
  }]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$window", "$rootScope", "$uibPosition", "typeaheadParser", "$log", "$typeaheadSuppressWarning", function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = [9, 13, 27, 38, 40],
      m = 200;
    return {
      require: ["ngModel", "^?ngModelOptions"],
      link: function(n, o, p, q) {
        function r() {
          N.moveInProgress || (N.moveInProgress = !0, N.$digest()), V && d.cancel(V), V = d(function() {
            N.matches.length && s(), N.moveInProgress = !1
          }, m)
        }

        function s() {
          N.position = F ? h.offset(o) : h.position(o), N.position.top += o.prop("offsetHeight")
        }
        k || j.warn("typeahead is now deprecated. Use uib-typeahead instead.");
        var t = q[0],
          u = q[1],
          v = n.$eval(p.typeaheadMinLength);
        v || 0 === v || (v = 1);
        var w, x, y = n.$eval(p.typeaheadWaitMs) || 0,
          z = n.$eval(p.typeaheadEditable) !== !1,
          A = b(p.typeaheadLoading).assign || angular.noop,
          B = b(p.typeaheadOnSelect),
          C = angular.isDefined(p.typeaheadSelectOnBlur) ? n.$eval(p.typeaheadSelectOnBlur) : !1,
          D = b(p.typeaheadNoResults).assign || angular.noop,
          E = p.typeaheadInputFormatter ? b(p.typeaheadInputFormatter) : void 0,
          F = p.typeaheadAppendToBody ? n.$eval(p.typeaheadAppendToBody) : !1,
          G = p.typeaheadAppendToElementId || !1,
          H = n.$eval(p.typeaheadFocusFirst) !== !1,
          I = p.typeaheadSelectOnExact ? n.$eval(p.typeaheadSelectOnExact) : !1,
          J = b(p.ngModel),
          K = b(p.ngModel + "($$$p)"),
          L = function(a, b) {
            return angular.isFunction(J(n)) && u && u.$options && u.$options.getterSetter ? K(a, {
              $$$p: b
            }) : J.assign(a, b)
          },
          M = i.parse(p.typeahead),
          N = n.$new(),
          O = n.$on("$destroy", function() {
            N.$destroy()
          });
        N.$on("$destroy", O);
        var P = "typeahead-" + N.$id + "-" + Math.floor(1e4 * Math.random());
        o.attr({
          "aria-autocomplete": "list",
          "aria-expanded": !1,
          "aria-owns": P
        });
        var Q = angular.element("<div typeahead-popup></div>");
        Q.attr({
          id: P,
          matches: "matches",
          active: "activeIdx",
          select: "select(activeIdx)",
          "move-in-progress": "moveInProgress",
          query: "query",
          position: "position"
        }), angular.isDefined(p.typeaheadTemplateUrl) && Q.attr("template-url", p.typeaheadTemplateUrl), angular.isDefined(p.typeaheadPopupTemplateUrl) && Q.attr("popup-template-url", p.typeaheadPopupTemplateUrl);
        var R = function() {
            N.matches = [], N.activeIdx = -1, o.attr("aria-expanded", !1)
          },
          S = function(a) {
            return P + "-option-" + a
          };
        N.$watch("activeIdx", function(a) {
          0 > a ? o.removeAttr("aria-activedescendant") : o.attr("aria-activedescendant", S(a))
        });
        var T = function(a, b) {
            return N.matches.length > b && a ? a.toUpperCase() === N.matches[b].label.toUpperCase() : !1
          },
          U = function(a) {
            var b = {
              $viewValue: a
            };
            A(n, !0), D(n, !1), c.when(M.source(n, b)).then(function(c) {
              var d = a === t.$viewValue;
              if (d && w)
                if (c && c.length > 0) {
                  N.activeIdx = H ? 0 : -1, D(n, !1), N.matches.length = 0;
                  for (var e = 0; e < c.length; e++) b[M.itemName] = c[e], N.matches.push({
                    id: S(e),
                    label: M.viewMapper(N, b),
                    model: c[e]
                  });
                  N.query = a, s(), o.attr("aria-expanded", !0), I && 1 === N.matches.length && T(a, 0) && N.select(0)
                } else R(), D(n, !0);
              d && A(n, !1)
            }, function() {
              R(), A(n, !1), D(n, !0)
            })
          };
        F && (angular.element(f).bind("resize", r), e.find("body").bind("scroll", r));
        var V;
        N.moveInProgress = !1, R(), N.query = void 0;
        var W, X = function(a) {
            W = d(function() {
              U(a)
            }, y)
          },
          Y = function() {
            W && d.cancel(W)
          };
        t.$parsers.unshift(function(a) {
          return w = !0, 0 === v || a && a.length >= v ? y > 0 ? (Y(), X(a)) : U(a) : (A(n, !1), Y(), R()), z ? a : a ? void t.$setValidity("editable", !1) : (t.$setValidity("editable", !0), null)
        }), t.$formatters.push(function(a) {
          var b, c, d = {};
          return z || t.$setValidity("editable", !0), E ? (d.$model = a, E(n, d)) : (d[M.itemName] = a, b = M.viewMapper(n, d), d[M.itemName] = void 0, c = M.viewMapper(n, d), b !== c ? b : a)
        }), N.select = function(a) {
          var b, c, e = {};
          x = !0, e[M.itemName] = c = N.matches[a].model, b = M.modelMapper(n, e), L(n, b), t.$setValidity("editable", !0), t.$setValidity("parse", !0), B(n, {
            $item: c,
            $model: b,
            $label: M.viewMapper(n, e)
          }), R(), N.$eval(p.typeaheadFocusOnSelect) !== !1 && d(function() {
            o[0].focus()
          }, 0, !1)
        }, o.bind("keydown", function(a) {
          if (0 !== N.matches.length && -1 !== l.indexOf(a.which)) {
            if (-1 === N.activeIdx && (9 === a.which || 13 === a.which)) return R(), void N.$digest();
            a.preventDefault(), 40 === a.which ? (N.activeIdx = (N.activeIdx + 1) % N.matches.length, N.$digest()) : 38 === a.which ? (N.activeIdx = (N.activeIdx > 0 ? N.activeIdx : N.matches.length) - 1, N.$digest()) : 13 === a.which || 9 === a.which ? N.$apply(function() {
              N.select(N.activeIdx)
            }) : 27 === a.which && (a.stopPropagation(), R(), N.$digest())
          }
        }), o.bind("blur", function() {
          C && N.matches.length && -1 !== N.activeIdx && !x && (x = !0, N.$apply(function() {
            N.select(N.activeIdx)
          })), w = !1, x = !1
        });
        var Z = function(a) {
          o[0] !== a.target && 3 !== a.which && 0 !== N.matches.length && (R(), g.$$phase || N.$digest())
        };
        e.bind("click", Z), n.$on("$destroy", function() {
          e.unbind("click", Z), (F || G) && $.remove(), F && (angular.element(f).unbind("resize", r), e.find("body").unbind("scroll", r)), Q.remove()
        });
        var $ = a(Q)(N);
        F ? e.find("body").append($) : G !== !1 ? angular.element(e[0].getElementById(G)).append($) : o.after($)
      }
    }
  }]).directive("typeaheadPopup", ["$typeaheadSuppressWarning", "$log", function(a, b) {
    return {
      scope: {
        matches: "=",
        query: "=",
        active: "=",
        position: "&",
        moveInProgress: "=",
        select: "&"
      },
      replace: !0,
      templateUrl: function(a, b) {
        return b.popupTemplateUrl || "template/typeahead/typeahead-popup.html"
      },
      link: function(c, d, e) {
        a || b.warn("typeahead-popup is now deprecated. Use uib-typeahead-popup instead."), c.templateUrl = e.templateUrl, c.isOpen = function() {
          return c.matches.length > 0
        }, c.isActive = function(a) {
          return c.active == a
        }, c.selectActive = function(a) {
          c.active = a
        }, c.selectMatch = function(a) {
          c.select({
            activeIdx: a
          })
        }
      }
    }
  }]).directive("typeaheadMatch", ["$templateRequest", "$compile", "$parse", "$typeaheadSuppressWarning", "$log", function(a, b, c, d, e) {
    return {
      restrict: "EA",
      scope: {
        index: "=",
        match: "=",
        query: "="
      },
      link: function(f, g, h) {
        d || e.warn("typeahead-match is now deprecated. Use uib-typeahead-match instead.");
        var i = c(h.templateUrl)(f.$parent) || "template/typeahead/typeahead-match.html";
        a(i).then(function(a) {
          b(a.trim())(f, function(a) {
            g.replaceWith(a)
          })
        })
      }
    }
  }]).filter("typeaheadHighlight", ["$sce", "$injector", "$log", "$typeaheadSuppressWarning", function(a, b, c, d) {
    function e(a) {
      return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }

    function f(a) {
      return /<.*>/g.test(a)
    }
    var g;
    return g = b.has("$sanitize"),
      function(b, h) {
        return d || c.warn("typeaheadHighlight is now deprecated. Use uibTypeaheadHighlight instead."), !g && f(b) && c.warn("Unsafe use of typeahead please use ngSanitize"), b = h ? ("" + b).replace(new RegExp(e(h), "gi"), "<strong>$&</strong>") : b, g || (b = a.trustAsHtml(b)), b
      }
  }]), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function(a) {
    a.put("template/accordion/accordion-group.html", '<div class="panel {{panelClass || \'panel-default\'}}">\n  <div class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" uib-collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
  }]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function(a) {
    a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
  }]), angular.module("template/alert/alert.html", []).run(["$templateCache", function(a) {
    a.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
  }]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function(a) {
    a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n  <div class="carousel-inner" ng-transclude></div>\n  <a role="button" href class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n    <span class="sr-only">previous</span>\n  </a>\n  <a role="button" href class="right carousel-control" ng-click="next()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n    <span class="sr-only">next</span>\n  </a>\n  <ol class="carousel-indicators" ng-show="slides.length > 1">\n    <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n      <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n    </li>\n  </ol>\n</div>')
  }]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function(a) {
    a.put("template/carousel/slide.html", '<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')
  }]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <uib-daypicker ng-switch-when="day" tabindex="0"></uib-daypicker>\n  <uib-monthpicker ng-switch-when="month" tabindex="0"></uib-monthpicker>\n  <uib-yearpicker ng-switch-when="year" tabindex="0"></uib-yearpicker>\n</div>')
  }]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
  }]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
  }]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/popup.html", '<ul class="dropdown-menu" dropdown-nested ng-if="isOpen" style="display: block" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
  }]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
  }]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function(a) {
    a.put("template/modal/backdrop.html", '<div uib-modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
  }]), angular.module("template/modal/window.html", []).run(["$templateCache", function(a) {
    a.put("template/modal/window.html", '<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    uib-modal-animation-class="fade"\n    modal-in-class="in"\n    ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" uib-modal-transclude></div></div>\n</div>\n')
  }]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function(a) {
    a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n')
  }]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function(a) {
    a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n');
  }]), angular.module("template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-html-popup.html", '<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')
  }]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-popup.html", '<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
  }]), angular.module("template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-template-popup.html", '<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    uib-tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')
  }]), angular.module("template/popover/popover-html.html", []).run(["$templateCache", function(a) {
    a.put("template/popover/popover-html.html", '<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')
  }]), angular.module("template/popover/popover-template.html", []).run(["$templateCache", function(a) {
    a.put("template/popover/popover-template.html", '<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        uib-tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')
  }]), angular.module("template/popover/popover.html", []).run(["$templateCache", function(a) {
    a.put("template/popover/popover.html", '<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
  }]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n')
  }]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')
  }]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n</div>\n')
  }]), angular.module("template/rating/rating.html", []).run(["$templateCache", function(a) {
    a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}" aria-valuetext="{{r.title}}"></i>\n</span>\n')
  }]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')
  }]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
  }]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function(a) {
    a.put("template/timepicker/timepicker.html", '<table>\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group" ng-class="{\'has-error\': invalidHours}">\n        <input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}">\n      </td>\n      <td>:</td>\n      <td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n        <input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}">\n      </td>\n      <td ng-show="showMeridian"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')
  }]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function(a) {
    a.put("template/typeahead/typeahead-match.html", '<a href tabindex="-1" ng-bind-html="match.label | uibTypeaheadHighlight:query"></a>\n')
  }]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
  }]), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'), function(a, b, c) {
    "use strict";

    function d(a, d, e) {
      function f(a, e, f) {
        var h, i;
        f = f || {}, i = f.expires, h = b.isDefined(f.path) ? f.path : g, e === c && (i = "Thu, 01 Jan 1970 00:00:00 GMT", e = ""), b.isString(i) && (i = new Date(i));
        var j = encodeURIComponent(a) + "=" + encodeURIComponent(e);
        j += h ? ";path=" + h : "", j += f.domain ? ";domain=" + f.domain : "", j += i ? ";expires=" + i.toUTCString() : "", j += f.secure ? ";secure" : "";
        var k = j.length + 1;
        return k > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + k + " > 4096 bytes)!"), j
      }
      var g = e.baseHref(),
        h = a[0];
      return function(a, b, c) {
        h.cookie = f(a, b, c)
      }
    }
    b.module("ngCookies", ["ng"]).provider("$cookies", [function() {
      function a(a) {
        return a ? b.extend({}, d, a) : d
      }
      var d = this.defaults = {};
      this.$get = ["$$cookieReader", "$$cookieWriter", function(d, e) {
        return {
          get: function(a) {
            return d()[a]
          },
          getObject: function(a) {
            var c = this.get(a);
            return c ? b.fromJson(c) : c
          },
          getAll: function() {
            return d()
          },
          put: function(b, c, d) {
            e(b, c, a(d))
          },
          putObject: function(a, c, d) {
            this.put(a, b.toJson(c), d)
          },
          remove: function(b, d) {
            e(b, c, a(d))
          }
        }
      }]
    }]), b.module("ngCookies").factory("$cookieStore", ["$cookies", function(a) {
      return {
        get: function(b) {
          return a.getObject(b)
        },
        put: function(b, c) {
          a.putObject(b, c)
        },
        remove: function(b) {
          a.remove(b)
        }
      }
    }]), d.$inject = ["$document", "$log", "$browser"], b.module("ngCookies").provider("$$cookieWriter", function() {
      this.$get = d
    })
  }(window, window.angular), function(a, b, c) {
    "use strict";
    var d = b.isDefined,
      e = b.isUndefined,
      f = b.isNumber,
      g = b.isObject,
      h = b.isArray,
      i = b.extend,
      j = b.toJson,
      k = b.module("LocalStorageModule", []);
    k.provider("localStorageService", function() {
      this.prefix = "ls", this.storageType = "localStorage", this.cookie = {
        expiry: 30,
        path: "/"
      }, this.notify = {
        setItem: !0,
        removeItem: !1
      }, this.setPrefix = function(a) {
        return this.prefix = a, this
      }, this.setStorageType = function(a) {
        return this.storageType = a, this
      }, this.setStorageCookie = function(a, b) {
        return this.cookie.expiry = a, this.cookie.path = b, this
      }, this.setStorageCookieDomain = function(a) {
        return this.cookie.domain = a, this
      }, this.setNotify = function(a, b) {
        return this.notify = {
          setItem: a,
          removeItem: b
        }, this
      }, this.$get = ["$rootScope", "$window", "$document", "$parse", function(a, b, c, k) {
        var l, m = this,
          n = m.prefix,
          o = m.cookie,
          p = m.notify,
          q = m.storageType;
        c ? c[0] && (c = c[0]) : c = document, "." !== n.substr(-1) && (n = n ? n + "." : "");
        var r = function(a) {
            return n + a
          },
          s = function() {
            try {
              var c = q in b && null !== b[q],
                d = r("__" + Math.round(1e7 * Math.random()));
              return c && (l = b[q], l.setItem(d, ""), l.removeItem(d)), c
            } catch (e) {
              return q = "cookie", a.$broadcast("LocalStorageModule.notification.error", e.message), !1
            }
          }(),
          t = function(b, c) {
            if (c = e(c) ? null : j(c), !s || "cookie" === m.storageType) return s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), p.setItem && a.$broadcast("LocalStorageModule.notification.setitem", {
              key: b,
              newvalue: c,
              storageType: "cookie"
            }), z(b, c);
            try {
              l && l.setItem(r(b), c), p.setItem && a.$broadcast("LocalStorageModule.notification.setitem", {
                key: b,
                newvalue: c,
                storageType: m.storageType
              })
            } catch (d) {
              return a.$broadcast("LocalStorageModule.notification.error", d.message), z(b, c)
            }
            return !0
          },
          u = function(b) {
            if (!s || "cookie" === m.storageType) return s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), A(b);
            var c = l ? l.getItem(r(b)) : null;
            if (!c || "null" === c) return null;
            try {
              return JSON.parse(c)
            } catch (d) {
              return c
            }
          },
          v = function() {
            var b, c;
            for (b = 0; b < arguments.length; b++)
              if (c = arguments[b], s && "cookie" !== m.storageType) try {
                l.removeItem(r(c)), p.removeItem && a.$broadcast("LocalStorageModule.notification.removeitem", {
                  key: c,
                  storageType: m.storageType
                })
              } catch (d) {
                a.$broadcast("LocalStorageModule.notification.error", d.message), B(c)
              } else s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), p.removeItem && a.$broadcast("LocalStorageModule.notification.removeitem", {
                key: c,
                storageType: "cookie"
              }), B(c)
          },
          w = function() {
            if (!s) return a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), !1;
            var b = n.length,
              c = [];
            for (var d in l)
              if (d.substr(0, b) === n) try {
                c.push(d.substr(b))
              } catch (e) {
                return a.$broadcast("LocalStorageModule.notification.error", e.Description), []
              }
              return c
          },
          x = function(b) {
            var c = n ? new RegExp("^" + n) : new RegExp,
              d = b ? new RegExp(b) : new RegExp;
            if (!s || "cookie" === m.storageType) return s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), C();
            var e = n.length;
            for (var f in l)
              if (c.test(f) && d.test(f.substr(e))) try {
                v(f.substr(e))
              } catch (g) {
                return a.$broadcast("LocalStorageModule.notification.error", g.message), C()
              }
              return !0
          },
          y = function() {
            try {
              return b.navigator.cookieEnabled || "cookie" in c && (c.cookie.length > 0 || (c.cookie = "test").indexOf.call(c.cookie, "test") > -1)
            } catch (d) {
              return a.$broadcast("LocalStorageModule.notification.error", d.message), !1
            }
          }(),
          z = function(b, d, i) {
            if (e(d)) return !1;
            if ((h(d) || g(d)) && (d = j(d)), !y) return a.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"), !1;
            try {
              var k = "",
                l = new Date,
                m = "";
              if (null === d ? (l.setTime(l.getTime() + -864e5), k = "; expires=" + l.toGMTString(), d = "") : f(i) && 0 !== i ? (l.setTime(l.getTime() + 24 * i * 60 * 60 * 1e3), k = "; expires=" + l.toGMTString()) : 0 !== o.expiry && (l.setTime(l.getTime() + 24 * o.expiry * 60 * 60 * 1e3), k = "; expires=" + l.toGMTString()), b) {
                var n = "; path=" + o.path;
                o.domain && (m = "; domain=" + o.domain), c.cookie = r(b) + "=" + encodeURIComponent(d) + k + n + m
              }
            } catch (p) {
              return a.$broadcast("LocalStorageModule.notification.error", p.message), !1
            }
            return !0
          },
          A = function(b) {
            if (!y) return a.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"), !1;
            for (var d = c.cookie && c.cookie.split(";") || [], e = 0; e < d.length; e++) {
              for (var f = d[e];
                " " === f.charAt(0);) f = f.substring(1, f.length);
              if (0 === f.indexOf(r(b) + "=")) {
                var g = decodeURIComponent(f.substring(n.length + b.length + 1, f.length));
                try {
                  return JSON.parse(g)
                } catch (h) {
                  return g
                }
              }
            }
            return null
          },
          B = function(a) {
            z(a, null)
          },
          C = function() {
            for (var a = null, b = n.length, d = c.cookie.split(";"), e = 0; e < d.length; e++) {
              for (a = d[e];
                " " === a.charAt(0);) a = a.substring(1, a.length);
              var f = a.substring(b, a.indexOf("="));
              B(f)
            }
          },
          D = function() {
            return q
          },
          E = function(a, b, c, e) {
            e = e || b;
            var f = u(e);
            return null === f && d(c) ? f = c : g(f) && g(c) && (f = i(c, f)), k(b).assign(a, f), a.$watch(b, function(a) {
              t(e, a)
            }, g(a[b]))
          },
          F = function() {
            for (var a = 0, c = b[q], d = 0; d < c.length; d++) 0 === c.key(d).indexOf(n) && a++;
            return a
          };
        return {
          isSupported: s,
          getStorageType: D,
          set: t,
          add: t,
          get: u,
          keys: w,
          remove: v,
          clearAll: x,
          bind: E,
          deriveKey: r,
          length: F,
          cookie: {
            isSupported: y,
            set: z,
            add: z,
            get: A,
            remove: B,
            clearAll: C
          }
        }
      }]
    })
  }(window, window.angular), function(a, b, c) {
    "use strict";

    function d(a) {
      return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a)
    }

    function e(a, b) {
      if (!d(b)) throw g("badmember", 'Dotted member path "@{0}" is invalid.', b);
      for (var e = b.split("."), f = 0, h = e.length; h > f && a !== c; f++) {
        var i = e[f];
        a = null !== a ? a[i] : c
      }
      return a
    }

    function f(a, c) {
      c = c || {}, b.forEach(c, function(a, b) {
        delete c[b]
      });
      for (var d in a) !a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
      return c
    }
    var g = b.$$minErr("$resource"),
      h = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
    b.module("ngResource", ["ng"]).provider("$resource", function() {
      var a = this;
      this.defaults = {
        stripTrailingSlashes: !0,
        actions: {
          get: {
            method: "GET"
          },
          save: {
            method: "POST"
          },
          query: {
            method: "GET",
            isArray: !0
          },
          remove: {
            method: "DELETE"
          },
          "delete": {
            method: "DELETE"
          }
        }
      }, this.$get = ["$http", "$q", function(d, h) {
        function i(a) {
          return j(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function j(a, b) {
          return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
        }

        function k(b, c) {
          this.template = b, this.defaults = o({}, a.defaults, c), this.urlParams = {}
        }

        function l(i, j, r, s) {
          function t(a, b) {
            var c = {};
            return b = o({}, j, b), n(b, function(b, d) {
              q(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b
            }), c
          }

          function u(a) {
            return a.resource
          }

          function v(a) {
            f(a || {}, this)
          }
          var w = new k(i, s);
          return r = o({}, a.defaults.actions, r), v.prototype.toJSON = function() {
            var a = o({}, this);
            return delete a.$promise, delete a.$resolved, a
          }, n(r, function(a, e) {
            var i = /^(POST|PUT|PATCH)$/i.test(a.method);
            v[e] = function(j, k, l, r) {
              var s, x, y, z = {};
              switch (arguments.length) {
                case 4:
                  y = r, x = l;
                case 3:
                case 2:
                  if (!q(k)) {
                    z = j, s = k, x = l;
                    break
                  }
                  if (q(j)) {
                    x = j, y = k;
                    break
                  }
                  x = k, y = l;
                case 1:
                  q(j) ? x = j : i ? s = j : z = j;
                  break;
                case 0:
                  break;
                default:
                  throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
              }
              var A = this instanceof v,
                B = A ? s : a.isArray ? [] : new v(s),
                C = {},
                D = a.interceptor && a.interceptor.response || u,
                E = a.interceptor && a.interceptor.responseError || c;
              n(a, function(a, b) {
                "params" != b && "isArray" != b && "interceptor" != b && (C[b] = p(a))
              }), i && (C.data = s), w.setUrlParams(C, o({}, t(s, a.params || {}), z), a.url);
              var F = d(C).then(function(c) {
                var d = c.data,
                  h = B.$promise;
                if (d) {
                  if (b.isArray(d) !== !!a.isArray) throw g("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})", e, a.isArray ? "array" : "object", b.isArray(d) ? "array" : "object", C.method, C.url);
                  a.isArray ? (B.length = 0, n(d, function(a) {
                    "object" == typeof a ? B.push(new v(a)) : B.push(a)
                  })) : (f(d, B), B.$promise = h)
                }
                return B.$resolved = !0, c.resource = B, c
              }, function(a) {
                return B.$resolved = !0, (y || m)(a), h.reject(a)
              });
              return F = F.then(function(a) {
                var b = D(a);
                return (x || m)(b, a.headers), b
              }, E), A ? F : (B.$promise = F, B.$resolved = !1, B)
            }, v.prototype["$" + e] = function(a, b, c) {
              q(a) && (c = b, b = a, a = {});
              var d = v[e].call(this, a, this, b, c);
              return d.$promise || d
            }
          }), v.bind = function(a) {
            return l(i, o({}, j, a), r)
          }, v
        }
        var m = b.noop,
          n = b.forEach,
          o = b.extend,
          p = b.copy,
          q = b.isFunction;
        return k.prototype = {
          setUrlParams: function(a, c, d) {
            var e, f, h = this,
              j = d || h.template,
              k = h.urlParams = {};
            n(j.split(/\W/), function(a) {
              if ("hasOwnProperty" === a) throw g("badname", "hasOwnProperty is not a valid parameter name.");
              !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0)
            }), j = j.replace(/\\:/g, ":"), c = c || {}, n(h.urlParams, function(a, d) {
              e = c.hasOwnProperty(d) ? c[d] : h.defaults[d], b.isDefined(e) && null !== e ? (f = i(e), j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), function(a, b) {
                return f + b
              })) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function(a, b, c) {
                return "/" == c.charAt(0) ? c : b + c
              })
            }), h.defaults.stripTrailingSlashes && (j = j.replace(/\/+$/, "") || "/"), j = j.replace(/\/\.(?=\w+($|\?))/, "."), a.url = j.replace(/\/\\\./, "/."), n(c, function(b, c) {
              h.urlParams[c] || (a.params = a.params || {}, a.params[c] = b)
            })
          }
        }, l
      }]
    })
  }(window, window.angular), function(a, b, c) {
    "use strict";

    function d() {
      function a(a, c) {
        return b.extend(Object.create(a), c)
      }

      function c(a, b) {
        var c = b.caseInsensitiveMatch,
          d = {
            originalPath: a,
            regexp: a
          },
          e = d.keys = [];
        return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, b, c, d) {
          var f = "?" === d ? d : null,
            g = "*" === d ? d : null;
          return e.push({
            name: c,
            optional: !!f
          }), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "")
        }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d
      }
      var d = {};
      this.when = function(a, e) {
        var f = b.copy(e);
        if (b.isUndefined(f.reloadOnSearch) && (f.reloadOnSearch = !0), b.isUndefined(f.caseInsensitiveMatch) && (f.caseInsensitiveMatch = this.caseInsensitiveMatch), d[a] = b.extend(f, a && c(a, f)), a) {
          var g = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
          d[g] = b.extend({
            redirectTo: a
          }, c(g, f))
        }
        return this
      }, this.caseInsensitiveMatch = !1, this.otherwise = function(a) {
        return "string" == typeof a && (a = {
          redirectTo: a
        }), this.when(null, a), this
      }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function(c, e, f, g, h, j, k) {
        function l(a, b) {
          var c = b.keys,
            d = {};
          if (!b.regexp) return null;
          var e = b.regexp.exec(a);
          if (!e) return null;
          for (var f = 1, g = e.length; g > f; ++f) {
            var h = c[f - 1],
              i = e[f];
            h && i && (d[h.name] = i)
          }
          return d
        }

        function m(a) {
          var d = t.current;
          q = o(), r = q && d && q.$$route === d.$$route && b.equals(q.pathParams, d.pathParams) && !q.reloadOnSearch && !s, r || !d && !q || c.$broadcast("$routeChangeStart", q, d).defaultPrevented && a && a.preventDefault()
        }

        function n() {
          var a = t.current,
            d = q;
          r ? (a.params = d.params, b.copy(a.params, f), c.$broadcast("$routeUpdate", a)) : (d || a) && (s = !1, t.current = d, d && d.redirectTo && (b.isString(d.redirectTo) ? e.path(p(d.redirectTo, d.params)).search(d.params).replace() : e.url(d.redirectTo(d.pathParams, e.path(), e.search())).replace()), g.when(d).then(function() {
            if (d) {
              var a, c, e = b.extend({}, d.resolve);
              return b.forEach(e, function(a, c) {
                e[c] = b.isString(a) ? h.get(a) : h.invoke(a, null, null, c)
              }), b.isDefined(a = d.template) ? b.isFunction(a) && (a = a(d.params)) : b.isDefined(c = d.templateUrl) && (b.isFunction(c) && (c = c(d.params)), b.isDefined(c) && (d.loadedTemplateUrl = k.valueOf(c), a = j(c))), b.isDefined(a) && (e.$template = a), g.all(e)
            }
          }).then(function(e) {
            d == t.current && (d && (d.locals = e, b.copy(d.params, f)), c.$broadcast("$routeChangeSuccess", d, a))
          }, function(b) {
            d == t.current && c.$broadcast("$routeChangeError", d, a, b)
          }))
        }

        function o() {
          var c, f;
          return b.forEach(d, function(d, g) {
            !f && (c = l(e.path(), d)) && (f = a(d, {
              params: b.extend({}, e.search(), c),
              pathParams: c
            }), f.$$route = d)
          }), f || d[null] && a(d[null], {
            params: {},
            pathParams: {}
          })
        }

        function p(a, c) {
          var d = [];
          return b.forEach((a || "").split(":"), function(a, b) {
            if (0 === b) d.push(a);
            else {
              var e = a.match(/(\w+)(?:[?*])?(.*)/),
                f = e[1];
              d.push(c[f]), d.push(e[2] || ""), delete c[f]
            }
          }), d.join("")
        }
        var q, r, s = !1,
          t = {
            routes: d,
            reload: function() {
              s = !0, c.$evalAsync(function() {
                m(), n()
              })
            },
            updateParams: function(a) {
              if (!this.current || !this.current.$$route) throw i("norout", "Tried updating route when with no current route");
              a = b.extend({}, this.current.params, a), e.path(p(this.current.$$route.originalPath, a)), e.search(a)
            }
          };
        return c.$on("$locationChangeStart", m), c.$on("$locationChangeSuccess", n), t
      }]
    }

    function e() {
      this.$get = function() {
        return {}
      }
    }

    function f(a, c, d) {
      return {
        restrict: "ECA",
        terminal: !0,
        priority: 400,
        transclude: "element",
        link: function(e, f, g, h, i) {
          function j() {
            n && (d.cancel(n), n = null), l && (l.$destroy(), l = null), m && (n = d.leave(m), n.then(function() {
              n = null
            }), m = null)
          }

          function k() {
            var g = a.current && a.current.locals,
              h = g && g.$template;
            if (b.isDefined(h)) {
              var k = e.$new(),
                n = a.current,
                q = i(k, function(a) {
                  d.enter(a, null, m || f).then(function() {
                    !b.isDefined(o) || o && !e.$eval(o) || c()
                  }), j()
                });
              m = q, l = n.scope = k, l.$emit("$viewContentLoaded"), l.$eval(p)
            } else j()
          }
          var l, m, n, o = g.autoscroll,
            p = g.onload || "";
          e.$on("$routeChangeSuccess", k), k()
        }
      }
    }

    function g(a, b, c) {
      return {
        restrict: "ECA",
        priority: -400,
        link: function(d, e) {
          var f = c.current,
            g = f.locals;
          e.html(g.$template);
          var h = a(e.contents());
          if (f.controller) {
            g.$scope = d;
            var i = b(f.controller, g);
            f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), e.children().data("$ngControllerController", i)
          }
          h(d)
        }
      }
    }
    var h = b.module("ngRoute", ["ng"]).provider("$route", d),
      i = b.$$minErr("ngRoute");
    h.provider("$routeParams", e), h.directive("ngView", f), h.directive("ngView", g), f.$inject = ["$route", "$anchorScroll", "$animate"], g.$inject = ["$compile", "$controller", "$route"]
  }(window, window.angular), function(a, b, c) {
    "use strict";

    function d() {
      this.$get = ["$$sanitizeUri", function(a) {
        return function(b) {
          var c = [];
          return g(b, j(c, function(b, c) {
            return !/^unsafe/.test(a(b, c))
          })), c.join("")
        }
      }]
    }

    function e(a) {
      var c = [],
        d = j(c, b.noop);
      return d.chars(a), c.join("")
    }

    function f(a, c) {
      var d, e = {},
        f = a.split(",");
      for (d = 0; d < f.length; d++) e[c ? b.lowercase(f[d]) : f[d]] = !0;
      return e
    }

    function g(a, c) {
      function d(a, d, f, g) {
        if (d = b.lowercase(d), z[d])
          for (; t.last() && A[t.last()];) e("", t.last());
        y[d] && t.last() == d && e("", d), g = v[d] || !!g, g || t.push(d);
        var i = {};
        f.replace(n, function(a, b, c, d, e) {
          var f = c || d || e || "";
          i[b] = h(f)
        }), c.start && c.start(d, i, g)
      }

      function e(a, d) {
        var e, f = 0;
        if (d = b.lowercase(d))
          for (f = t.length - 1; f >= 0 && t[f] != d; f--);
        if (f >= 0) {
          for (e = t.length - 1; e >= f; e--) c.end && c.end(t[e]);
          t.length = f
        }
      }
      "string" != typeof a && (a = null === a || "undefined" == typeof a ? "" : "" + a);
      var f, g, i, j, t = [],
        u = a;
      for (t.last = function() {
          return t[t.length - 1]
        }; a;) {
        if (j = "", g = !0, t.last() && C[t.last()] ? (a = a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + t.last() + "[^>]*>", "i"), function(a, b) {
            return b = b.replace(q, "$1").replace(s, "$1"), c.chars && c.chars(h(b)), ""
          }), e("", t.last())) : (0 === a.indexOf("<!--") ? (f = a.indexOf("--", 4), f >= 0 && a.lastIndexOf("-->", f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), g = !1)) : r.test(a) ? (i = a.match(r), i && (a = a.replace(i[0], ""), g = !1)) : p.test(a) ? (i = a.match(m), i && (a = a.substring(i[0].length), i[0].replace(m, e), g = !1)) : o.test(a) && (i = a.match(l), i ? (i[4] && (a = a.substring(i[0].length), i[0].replace(l, d)), g = !1) : (j += "<", a = a.substring(1))), g && (f = a.indexOf("<"), j += 0 > f ? a : a.substring(0, f), a = 0 > f ? "" : a.substring(f), c.chars && c.chars(h(j)))), a == u) throw k("badparse", "The sanitizer was unable to parse the following block of html: {0}", a);
        u = a
      }
      e()
    }

    function h(a) {
      return a ? (I.innerHTML = a.replace(/</g, "&lt;"), I.textContent) : ""
    }

    function i(a) {
      return a.replace(/&/g, "&amp;").replace(t, function(a) {
        var b = a.charCodeAt(0),
          c = a.charCodeAt(1);
        return "&#" + (1024 * (b - 55296) + (c - 56320) + 65536) + ";"
      }).replace(u, function(a) {
        return "&#" + a.charCodeAt(0) + ";"
      }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function j(a, c) {
      var d = !1,
        e = b.bind(a, a.push);
      return {
        start: function(a, f, g) {
          a = b.lowercase(a), !d && C[a] && (d = a), d || D[a] !== !0 || (e("<"), e(a), b.forEach(f, function(d, f) {
            var g = b.lowercase(f),
              h = "img" === a && "src" === g || "background" === g;
            H[g] !== !0 || E[g] === !0 && !c(d, h) || (e(" "), e(f), e('="'), e(i(d)), e('"'))
          }), e(g ? "/>" : ">"))
        },
        end: function(a) {
          a = b.lowercase(a), d || D[a] !== !0 || (e("</"), e(a), e(">")), a == d && (d = !1)
        },
        chars: function(a) {
          d || e(i(a))
        }
      }
    }
    var k = b.$$minErr("$sanitize"),
      l = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
      m = /^<\/\s*([\w:-]+)[^>]*>/,
      n = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
      o = /^</,
      p = /^<\//,
      q = /<!--(.*?)-->/g,
      r = /<!DOCTYPE([^>]*?)>/i,
      s = /<!\[CDATA\[(.*?)]]>/g,
      t = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      u = /([^\#-~| |!])/g,
      v = f("area,br,col,hr,img,wbr"),
      w = f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
      x = f("rp,rt"),
      y = b.extend({}, x, w),
      z = b.extend({}, w, f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
      A = b.extend({}, x, f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
      B = f("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use"),
      C = f("script,style"),
      D = b.extend({}, v, z, A, y, B),
      E = f("background,cite,href,longdesc,src,usemap,xlink:href"),
      F = f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
      G = f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
      H = b.extend({}, E, G, F),
      I = document.createElement("pre");
    b.module("ngSanitize", []).provider("$sanitize", d), b.module("ngSanitize").filter("linky", ["$sanitize", function(a) {
      var c = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/i,
        d = /^mailto:/i;
      return function(f, g) {
        function h(a) {
          a && n.push(e(a))
        }

        function i(a, c) {
          n.push("<a "), b.isDefined(g) && n.push('target="', g, '" '), n.push('href="', a.replace(/"/g, "&quot;"), '">'), h(c), n.push("</a>")
        }
        if (!f) return f;
        for (var j, k, l, m = f, n = []; j = m.match(c);) k = j[0], j[2] || j[4] || (k = (j[3] ? "http://" : "mailto:") + k), l = j.index, h(m.substr(0, l)), i(k, j[0].replace(d, "")), m = m.substring(l + j[0].length);
        return h(m), a(n.join(""))
      }
    }])
  }(window, window.angular), function(a) {
    a.module("angularScreenfull", [])
  }(angular), function(a) {
    function b(a) {
      return {
        restrict: "A",
        require: "ngsfFullscreen",
        controller: c,
        link: function(b, c, d, e) {
          if (d.ngsfFullscreen && "" !== d.ngsfFullscreen) {
            var f = a(d.ngsfFullscreen);
            f.assign(b, e)
          }
          e.setFullScreenElement(c[0])
        }
      }
    }

    function c(b, c) {
      function d() {
        if (l.fullscreenEnabled()) {
          var d = function() {
            l.isFullscreen() ? a.element(m).addClass("fullscreen") : a.element(m).removeClass("fullscreen"), b.$emit("fullscreenchange")
          };
          c[0].addEventListener(screenfull.raw.fullscreenchange, d), b.$on("$destroy", function() {
            c[0].removeEventListener(screenfull.raw.fullscreenchange, d)
          })
        }
      }

      function e(a) {
        m = a
      }

      function f(a) {
        return b.$on("fullscreenchange", a)
      }

      function g() {
        return l.fullscreenEnabled() ? (screenfull.request(m), b.$emit("fullscreenEnabled"), !0) : !1
      }

      function h() {
        l.fullscreenEnabled() && l.isFullscreen() && l.toggleFullscreen()
      }

      function i() {
        if (l.fullscreenEnabled()) {
          var a = screenfull.isFullscreen;
          return screenfull.toggle(m), a ? b.$emit("fullscreenDisabled") : b.$emit("fullscreenEnabled"), !0
        }
        return !1
      }

      function j() {
        return l.fullscreenEnabled() ? screenfull.isFullscreen : !1
      }

      function k() {
        return "undefined" != typeof screenfull ? screenfull.enabled : !1
      }
      var l = this;
      l.setFullScreenElement = e, l.onFullscreenChange = f, l.requestFullscreen = g, l.removeFullscreen = h, l.toggleFullscreen = i, l.isFullscreen = j, l.fullscreenEnabled = k;
      var m;
      d()
    }
    a.module("angularScreenfull").directive("ngsfFullscreen", b), b.$inject = ["$parse"], c.$inject = ["$scope", "$document"]
  }(angular), function(a) {
    function b(a) {
      return {
        restrict: "A",
        require: "^ngsfFullscreen",
        link: function(b, c, d, e) {
          e.fullscreenEnabled() ? a.removeClass(c, "ng-hide") : a.addClass(c, "ng-hide")
        }
      }
    }
    a.module("angularScreenfull").directive("showIfFullscreenEnabled", b), b.$inject = ["$animate"]
  }(angular), function(a) {
    function b(a) {
      return {
        restrict: "A",
        require: "^ngsfFullscreen",
        link: function(b, c, d, e) {
          var f = function() {
            var b = e.isFullscreen();
            ("false" === d.showIfFullscreen || d.showIfFullscreen === !1) && (b = !b), b ? a.removeClass(c, "ng-hide") : a.addClass(c, "ng-hide")
          };
          f();
          var g = e.onFullscreenChange(f);
          b.$on("$destroy", g)
        }
      }
    }
    a.module("angularScreenfull").directive("showIfFullscreen", b), b.$inject = ["$animate"]
  }(angular), function(a) {
    function b() {
      return {
        restrict: "A",
        require: "^ngsfFullscreen",
        link: function(a, b, c, d) {
          b.on("click", function() {
            d.toggleFullscreen()
          })
        }
      }
    }
    a.module("angularScreenfull").directive("ngsfToggleFullscreen", b)
  }(angular), function(a, b, c) {
    "use strict";

    function d(a) {
      return b.lowercase(a.nodeName || a[0] && a[0].nodeName)
    }

    function e(a, c, d) {
      f.directive(a, ["$parse", "$swipe", function(e, f) {
        var g = 75,
          h = .3,
          i = 30;
        return function(j, k, l) {
          function m(a) {
            if (!n) return !1;
            var b = Math.abs(a.y - n.y),
              d = (a.x - n.x) * c;
            return o && g > b && d > 0 && d > i && h > b / d
          }
          var n, o, p = e(l[a]),
            q = ["touch"];
          b.isDefined(l.ngSwipeDisableMouse) || q.push("mouse"), f.bind(k, {
            start: function(a, b) {
              n = a, o = !0
            },
            cancel: function(a) {
              o = !1
            },
            end: function(a, b) {
              m(a) && j.$apply(function() {
                k.triggerHandler(d), p(j, {
                  $event: b
                })
              })
            }
          }, q)
        }
      }])
    }
    var f = b.module("ngTouch", []);
    f.factory("$swipe", [function() {
      function a(a) {
        var b = a.originalEvent || a,
          c = b.touches && b.touches.length ? b.touches : [b],
          d = b.changedTouches && b.changedTouches[0] || c[0];
        return {
          x: d.clientX,
          y: d.clientY
        }
      }

      function c(a, c) {
        var d = [];
        return b.forEach(a, function(a) {
          var b = e[a][c];
          b && d.push(b)
        }), d.join(" ")
      }
      var d = 10,
        e = {
          mouse: {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup"
          },
          touch: {
            start: "touchstart",
            move: "touchmove",
            end: "touchend",
            cancel: "touchcancel"
          }
        };
      return {
        bind: function(b, e, f) {
          var g, h, i, j, k = !1;
          f = f || ["mouse", "touch"], b.on(c(f, "start"), function(b) {
            i = a(b), k = !0, g = 0, h = 0, j = i, e.start && e.start(i, b)
          });
          var l = c(f, "cancel");
          l && b.on(l, function(a) {
            k = !1, e.cancel && e.cancel(a)
          }), b.on(c(f, "move"), function(b) {
            if (k && i) {
              var c = a(b);
              if (g += Math.abs(c.x - j.x), h += Math.abs(c.y - j.y), j = c, !(d > g && d > h)) return h > g ? (k = !1, void(e.cancel && e.cancel(b))) : (b.preventDefault(), void(e.move && e.move(c, b)))
            }
          }), b.on(c(f, "end"), function(b) {
            k && (k = !1, e.end && e.end(a(b), b))
          })
        }
      }
    }]), f.config(["$provide", function(a) {
      a.decorator("ngClickDirective", ["$delegate", function(a) {
        return a.shift(), a
      }])
    }]), f.directive("ngClick", ["$parse", "$timeout", "$rootElement", function(a, c, e) {
      function f(a, b, c, d) {
        return Math.abs(a - c) < q && Math.abs(b - d) < q
      }

      function g(a, b, c) {
        for (var d = 0; d < a.length; d += 2)
          if (f(a[d], a[d + 1], b, c)) return a.splice(d, d + 2), !0;
        return !1
      }

      function h(a) {
        if (!(Date.now() - k > p)) {
          var b = a.touches && a.touches.length ? a.touches : [a],
            c = b[0].clientX,
            e = b[0].clientY;
          1 > c && 1 > e || m && m[0] === c && m[1] === e || (m && (m = null), "label" === d(a.target) && (m = [c, e]), g(l, c, e) || (a.stopPropagation(), a.preventDefault(), a.target && a.target.blur && a.target.blur()))
        }
      }

      function i(a) {
        var b = a.touches && a.touches.length ? a.touches : [a],
          d = b[0].clientX,
          e = b[0].clientY;
        l.push(d, e), c(function() {
          for (var a = 0; a < l.length; a += 2)
            if (l[a] == d && l[a + 1] == e) return void l.splice(a, a + 2)
        }, p, !1)
      }

      function j(a, b) {
        l || (e[0].addEventListener("click", h, !0), e[0].addEventListener("touchstart", i, !0), l = []), k = Date.now(), g(l, a, b)
      }
      var k, l, m, n = 750,
        o = 12,
        p = 2500,
        q = 25,
        r = "ng-click-active";
      return function(c, d, e) {
        function f() {
          m = !1, d.removeClass(r)
        }
        var g, h, i, k, l = a(e.ngClick),
          m = !1;
        d.on("touchstart", function(a) {
          m = !0, g = a.target ? a.target : a.srcElement, 3 == g.nodeType && (g = g.parentNode), d.addClass(r), h = Date.now();
          var b = a.originalEvent || a,
            c = b.touches && b.touches.length ? b.touches : [b],
            e = c[0];
          i = e.clientX, k = e.clientY
        }), d.on("touchcancel", function(a) {
          f()
        }), d.on("touchend", function(a) {
          var c = Date.now() - h,
            l = a.originalEvent || a,
            p = l.changedTouches && l.changedTouches.length ? l.changedTouches : l.touches && l.touches.length ? l.touches : [l],
            q = p[0],
            r = q.clientX,
            s = q.clientY,
            t = Math.sqrt(Math.pow(r - i, 2) + Math.pow(s - k, 2));
          m && n > c && o > t && (j(r, s), g && g.blur(), b.isDefined(e.disabled) && e.disabled !== !1 || d.triggerHandler("click", [a])), f()
        }), d.onclick = function(a) {}, d.on("click", function(a, b) {
          c.$apply(function() {
            l(c, {
              $event: b || a
            })
          })
        }), d.on("mousedown", function(a) {
          d.addClass(r)
        }), d.on("mousemove mouseup", function(a) {
          d.removeClass(r)
        })
      }
    }]), e("ngSwipeLeft", -1, "swipeleft"), e("ngSwipeRight", 1, "swiperight")
  }(window, window.angular), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(a) {
  "use strict";

  function b() {
    var a = document.createElement("bootstrap"),
      b = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var c in b)
      if (void 0 !== a.style[c]) return {
        end: b[c]
      };
    return !1
  }
  a.fn.emulateTransitionEnd = function(b) {
    var c = !1,
      d = this;
    a(this).one("bsTransitionEnd", function() {
      c = !0
    });
    var e = function() {
      c || a(d).trigger(a.support.transition.end)
    };
    return setTimeout(e, b), this
  }, a(function() {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function(b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
      }
    })
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var c = a(this),
        e = c.data("bs.alert");
      e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
    })
  }
  var c = '[data-dismiss="alert"]',
    d = function(b) {
      a(b).on("click", c, this.close)
    };
  d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove()
    }
    var e = a(this),
      f = e.attr("data-target");
    f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
    var g = a(f);
    b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
    return a.fn.alert = e, this
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.button"),
        f = "object" == typeof b && b;
      e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
    })
  }
  var c = function(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
  };
  c.VERSION = "3.3.5", c.DEFAULTS = {
    loadingText: "loading..."
  }, c.prototype.setState = function(b) {
    var c = "disabled",
      d = this.$element,
      e = d.is("input") ? "val" : "html",
      f = d.data();
    b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
    }, this), 0)
  }, c.prototype.toggle = function() {
    var a = !0,
      b = this.$element.closest('[data-toggle="buttons"]');
    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
    return a.fn.button = d, this
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
    var d = a(c.target);
    d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.carousel"),
        f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
        g = "string" == typeof b ? b : f.slide;
      e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
    })
  }
  var c = function(b, c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
  };
  c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, c.prototype.keydown = function(a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      a.preventDefault()
    }
  }, c.prototype.cycle = function(b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
  }, c.prototype.getItemIndex = function(a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
  }, c.prototype.getItemForDirection = function(a, b) {
    var c = this.getItemIndex(b),
      d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
    if (d && !this.options.wrap) return b;
    var e = "prev" == a ? -1 : 1,
      f = (c + e) % this.$items.length;
    return this.$items.eq(f)
  }, c.prototype.to = function(a) {
    var b = this,
      c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
      b.to(a)
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
  }, c.prototype.pause = function(b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, c.prototype.next = function() {
    return this.sliding ? void 0 : this.slide("next")
  }, c.prototype.prev = function() {
    return this.sliding ? void 0 : this.slide("prev")
  }, c.prototype.slide = function(b, d) {
    var e = this.$element.find(".item.active"),
      f = d || this.getItemForDirection(b, e),
      g = this.interval,
      h = "next" == b ? "left" : "right",
      i = this;
    if (f.hasClass("active")) return this.sliding = !1;
    var j = f[0],
      k = a.Event("slide.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
        l && l.addClass("active")
      }
      var m = a.Event("slid.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
      return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
          i.$element.trigger(m)
        }, 0)
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
    return a.fn.carousel = d, this
  };
  var e = function(c) {
    var d, e = a(this),
      f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
        h = e.attr("data-slide-to");
      h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
    }
  };
  a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
    a('[data-ride="carousel"]').each(function() {
      var c = a(this);
      b.call(c, c.data())
    })
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
    return a(d)
  }

  function c(b) {
    return this.each(function() {
      var c = a(this),
        e = c.data("bs.collapse"),
        f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
      !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
    })
  }
  var d = function(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
    toggle: !0
  }, d.prototype.dimension = function() {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height"
  }, d.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");
        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
          var g = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var h = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!a.support.transition) return h.call(this);
          var i = a.camelCase(["scroll", g].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
        }
      }
    }
  }, d.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var e = function() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
      }
    }
  }, d.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, d.prototype.getParent = function() {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
      var e = a(d);
      this.addAriaAndCollapsedClass(b(e), e)
    }, this)).end()
  }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
    var c = a.hasClass("in");
    a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
  };
  var e = a.fn.collapse;
  a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
    return a.fn.collapse = e, this
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
    var e = a(this);
    e.attr("data-target") || d.preventDefault();
    var f = b(e),
      g = f.data("bs.collapse"),
      h = g ? "toggle" : e.data();
    c.call(f, h)
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent()
  }

  function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function() {
      var d = a(this),
        e = b(d),
        f = {
          relatedTarget: this
        };
      e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))))
    }))
  }

  function d(b) {
    return this.each(function() {
      var c = a(this),
        d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
    })
  }
  var e = ".dropdown-backdrop",
    f = '[data-toggle="dropdown"]',
    g = function(b) {
      a(b).on("click.bs.dropdown", this.toggle)
    };
  g.VERSION = "3.3.5", g.prototype.toggle = function(d) {
    var e = a(this);
    if (!e.is(".disabled, :disabled")) {
      var f = b(e),
        g = f.hasClass("open");
      if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
        var h = {
          relatedTarget: this
        };
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
      }
      return !1
    }
  }, g.prototype.keydown = function(c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);
      if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
          g = e.hasClass("open");
        if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
        var h = " li:not(.disabled):visible a",
          i = e.find(".dropdown-menu" + h);
        if (i.length) {
          var j = i.index(c.target);
          38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
    return a.fn.dropdown = h, this
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
    a.stopPropagation()
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
  "use strict";

  function b(b, d) {
    return this.each(function() {
      var e = a(this),
        f = e.data("bs.modal"),
        g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
    })
  }
  var c = function(b, c) {
    this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, c.prototype.toggle = function(a) {
    return this.isShown ? this.hide() : this.show(a)
  }, c.prototype.show = function(b) {
    var d = this,
      e = a.Event("show.bs.modal", {
        relatedTarget: b
      });
    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
      d.$element.one("mouseup.dismiss.bs.modal", function(b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function() {
      var e = a.support.transition && d.$element.hasClass("fade");
      d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
      var f = a.Event("shown.bs.modal", {
        relatedTarget: b
      });
      e ? d.$dialog.one("bsTransitionEnd", function() {
        d.$element.trigger("focus").trigger(f)
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
    }))
  }, c.prototype.hide = function(b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
  }, c.prototype.enforceFocus = function() {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
    }, this))
  }, c.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
      27 == a.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, c.prototype.resize = function() {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
  }, c.prototype.hideModal = function() {
    var a = this;
    this.$element.hide(), this.backdrop(function() {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
    })
  }, c.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, c.prototype.backdrop = function(b) {
    var d = this,
      e = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;
      if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
          return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var g = function() {
        d.removeBackdrop(), b && b()
      };
      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
    } else b && b()
  }, c.prototype.handleUpdate = function() {
    this.adjustDialog()
  }, c.prototype.adjustDialog = function() {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
    })
  }, c.prototype.resetAdjustments = function() {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, c.prototype.checkScrollbar = function() {
    var a = window.innerWidth;
    if (!a) {
      var b = document.documentElement.getBoundingClientRect();
      a = b.right - Math.abs(b.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
  }, c.prototype.setScrollbar = function() {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
  }, c.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
  }, c.prototype.measureScrollbar = function() {
    var a = document.createElement("div");
    a.className = "modal-scrollbar-measure", this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
    return a.fn.modal = d, this
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
    var d = a(this),
      e = d.attr("href"),
      f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
      g = f.data("bs.modal") ? "toggle" : a.extend({
        remote: !/#/.test(e) && e
      }, f.data(), d.data());
    d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
        d.is(":visible") && d.trigger("focus")
      })
    }), b.call(f, g, this)
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.tooltip"),
        f = "object" == typeof b && b;
      (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }
  var c = function(a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
  };
  c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, c.prototype.init = function(b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
        click: !1,
        hover: !1,
        focus: !1
      }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
      else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
          i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, c.prototype.getDefaults = function() {
    return c.DEFAULTS
  }, c.prototype.getOptions = function(b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b
  }, c.prototype.getDelegateOptions = function() {
    var b = {},
      c = this.getDefaults();
    return this._options && a.each(this._options, function(a, d) {
      c[a] != d && (b[a] = d)
    }), b
  }, c.prototype.enter = function(b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
      "in" == c.hoverState && c.show()
    }, c.options.delay.show)) : c.show())
  }, c.prototype.isInStateTrue = function() {
    for (var a in this.inState)
      if (this.inState[a]) return !0;
    return !1
  }, c.prototype.leave = function(b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
      "out" == c.hoverState && c.hide()
    }, c.options.delay.hide)) : c.hide())
  }, c.prototype.show = function() {
    var b = a.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !d) return;
      var e = this,
        f = this.tip(),
        g = this.getUID(this.type);
      this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
      var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
        i = /\s?auto?\s?/i,
        j = i.test(h);
      j && (h = h.replace(i, "") || "top"), f.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var k = this.getPosition(),
        l = f[0].offsetWidth,
        m = f[0].offsetHeight;
      if (j) {
        var n = h,
          o = this.getPosition(this.$viewport);
        h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
      }
      var p = this.getCalculatedOffset(h, k, l, m);
      this.applyPlacement(p, h);
      var q = function() {
        var a = e.hoverState;
        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
      };
      a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
    }
  }, c.prototype.applyPlacement = function(b, c) {
    var d = this.tip(),
      e = d[0].offsetWidth,
      f = d[0].offsetHeight,
      g = parseInt(d.css("margin-top"), 10),
      h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
      using: function(a) {
        d.css({
          top: Math.round(a.top),
          left: Math.round(a.left)
        })
      }
    }, b), 0), d.addClass("in");
    var i = d[0].offsetWidth,
      j = d[0].offsetHeight;
    "top" == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = /top|bottom/.test(c),
      m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
      n = l ? "offsetWidth" : "offsetHeight";
    d.offset(b), this.replaceArrow(m, d[0][n], l)
  }, c.prototype.replaceArrow = function(a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
  }, c.prototype.setContent = function() {
    var a = this.tip(),
      b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
  }, c.prototype.hide = function(b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
    }
    var e = this,
      f = a(this.$tip),
      g = a.Event("hide.bs." + this.type);
    return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
  }, c.prototype.fixTitle = function() {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
  }, c.prototype.hasContent = function() {
    return this.getTitle()
  }, c.prototype.getPosition = function(b) {
    b = b || this.$element;
    var c = b[0],
      d = "BODY" == c.tagName,
      e = c.getBoundingClientRect();
    null == e.width && (e = a.extend({}, e, {
      width: e.right - e.left,
      height: e.bottom - e.top
    }));
    var f = d ? {
        top: 0,
        left: 0
      } : b.offset(),
      g = {
        scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
      },
      h = d ? {
        width: a(window).width(),
        height: a(window).height()
      } : null;
    return a.extend({}, e, g, h, f)
  }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    }
  }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
    var e = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return e;
    var f = this.options.viewport && this.options.viewport.padding || 0,
      g = this.getPosition(this.$viewport);
    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
        i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
    } else {
      var j = b.left - f,
        k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
    }
    return e
  }, c.prototype.getTitle = function() {
    var a, b = this.$element,
      c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
  }, c.prototype.getUID = function(a) {
    do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
    return a
  }, c.prototype.tip = function() {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, c.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, c.prototype.enable = function() {
    this.enabled = !0
  }, c.prototype.disable = function() {
    this.enabled = !1
  }, c.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, c.prototype.toggle = function(b) {
    var c = this;
    b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
  }, c.prototype.destroy = function() {
    var a = this;
    clearTimeout(this.timeout), this.hide(function() {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
    })
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
    return a.fn.tooltip = d, this
  }
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.popover"),
        f = "object" == typeof b && b;
      (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }
  var c = function(a, b) {
    this.init("popover", a, b)
  };
  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
    return c.DEFAULTS
  }, c.prototype.setContent = function() {
    var a = this.tip(),
      b = this.getTitle(),
      c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
  }, c.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
  }, c.prototype.getContent = function() {
    var a = this.$element,
      b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
  }, c.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
    return a.fn.popover = d, this
  }
}(jQuery), + function(a) {
  "use strict";

  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
  }

  function c(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.scrollspy"),
        f = "object" == typeof c && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
    })
  }
  b.VERSION = "3.3.5", b.DEFAULTS = {
    offset: 10
  }, b.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, b.prototype.refresh = function() {
    var b = this,
      c = "offset",
      d = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
      var b = a(this),
        e = b.data("target") || b.attr("href"),
        f = /^#./.test(e) && a(e);
      return f && f.length && f.is(":visible") && [
        [f[c]().top + d, e]
      ] || null
    }).sort(function(a, b) {
      return a[0] - b[0]
    }).each(function() {
      b.offsets.push(this[0]), b.targets.push(this[1])
    })
  }, b.prototype.process = function() {
    var a, b = this.$scrollElement.scrollTop() + this.options.offset,
      c = this.getScrollHeight(),
      d = this.options.offset + c - this.$scrollElement.height(),
      e = this.offsets,
      f = this.targets,
      g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
    if (g && b < e[0]) return this.activeTarget = null, this.clear();
    for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
  }, b.prototype.activate = function(b) {
    this.activeTarget = b, this.clear();
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
      d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
  }, b.prototype.clear = function() {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
    return a.fn.scrollspy = d, this
  }, a(window).on("load.bs.scrollspy.data-api", function() {
    a('[data-spy="scroll"]').each(function() {
      var b = a(this);
      c.call(b, b.data())
    })
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.tab");
      e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
    })
  }
  var c = function(b) {
    this.element = a(b)
  };
  c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
    var b = this.element,
      c = b.closest("ul:not(.dropdown-menu)"),
      d = b.data("target");
    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
        f = a.Event("hide.bs.tab", {
          relatedTarget: b[0]
        }),
        g = a.Event("show.bs.tab", {
          relatedTarget: e[0]
        });
      if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);
        this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
          e.trigger({
            type: "hidden.bs.tab",
            relatedTarget: b[0]
          }), b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e[0]
          })
        })
      }
    }
  }, c.prototype.activate = function(b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
    }
    var g = d.find("> .active"),
      h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
    g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
    return a.fn.tab = d, this
  };
  var e = function(c) {
    c.preventDefault(), b.call(a(this), "show")
  };
  a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.affix"),
        f = "object" == typeof b && b;
      e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
    })
  }
  var c = function(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getState = function(a, b, c, d) {
    var e = this.$target.scrollTop(),
      f = this.$element.offset(),
      g = this.$target.height();
    if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
    if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
    var h = null == this.affixed,
      i = h ? e : f.top,
      j = h ? g : b;
    return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
  }, c.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a = this.$target.scrollTop(),
      b = this.$element.offset();
    return this.pinnedOffset = b.top - a
  }, c.prototype.checkPositionWithEventLoop = function() {
    setTimeout(a.proxy(this.checkPosition, this), 1)
  }, c.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
        d = this.options.offset,
        e = d.top,
        f = d.bottom,
        g = Math.max(a(document).height(), a(document.body).height());
      "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
      var h = this.getState(g, b, e, f);
      if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");
        var i = "affix" + (h ? "-" + h : ""),
          j = a.Event(i + ".bs.affix");
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == h && this.$element.offset({
        top: g - b - f
      })
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
    return a.fn.affix = d, this
  }, a(window).on("load", function() {
    a('[data-spy="affix"]').each(function() {
      var c = a(this),
        d = c.data();
      d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
    })
  })
}(jQuery),
function() {
  "use strict";
  angular.module("cfp.hotkeys", []).provider("hotkeys", ["$injector", function(a) {
    this.includeCheatSheet = !0, this.useNgRoute = a.has("ngViewDirective"), this.templateTitle = "Keyboard Shortcuts:", this.templateHeader = null, this.templateFooter = null, this.template = '<div class="cfp-hotkeys-container fade" ng-class="{in: helpVisible}" style="display: none;"><div class="cfp-hotkeys"><h4 class="cfp-hotkeys-title" ng-if="!header">{{ title }}</h4><div ng-bind-html="header" ng-if="header"></div><table><tbody><tr ng-repeat="hotkey in hotkeys | filter:{ description: \'!$$undefined$$\' }"><td class="cfp-hotkeys-keys"><span ng-repeat="key in hotkey.format() track by $index" class="cfp-hotkeys-key"  style="width: 85px; height: 78px; font-size: -webkit-xxx-large;" >{{ key }}</span></td><td style="font-size:35px;" class="cfp-hotkeys-text">{{ hotkey.description }}</td></tr></tbody></table><div ng-bind-html="footer" ng-if="footer"></div><div class="cfp-hotkeys-close" ng-click="toggleCheatSheet()">×</div></div></div>', this.cheatSheetHotkey = "Shift+?", this.cheatSheetDescription = "Show / hide this help menu", this.$get = ["$rootElement", "$rootScope", "$compile", "$window", "$document", function(a, b, c, d, e) {
      function f(a) {
        var b = {
          command: "⌘",
          shift: "⇧",
          left: "←",
          right: "→",
          up: "↑",
          down: "↓",
          "return": "↩",
          backspace: "⌫"
        };
        a = a.split("+");
        for (var c = 0; c < a.length; c++) "mod" === a[c] && (d.navigator && d.navigator.platform.indexOf("Mac") >= 0 ? a[c] = "command" : a[c] = "ctrl"), a[c] = b[a[c]] || a[c];
        return a.join(" + ")
      }

      function g(a, b, c, d, e, f) {
        this.combo = a instanceof Array ? a : [a], this.description = b, this.callback = c, this.action = d, this.allowIn = e, this.persistent = f, this._formated = null
      }

      function h() {
        for (var a = o.hotkeys.length; a--;) {
          var b = o.hotkeys[a];
          b && !b.persistent && k(b)
        }
      }

      function i() {
        o.helpVisible = !o.helpVisible, o.helpVisible ? (t = l("esc"), k("esc"), j("esc", t.description, i, null, ["INPUT", "SELECT", "TEXTAREA"])) : (k("esc"), t !== !1 && j(t))
      }

      function j(a, b, c, d, e, f) {
        var h, i = ["INPUT", "SELECT", "TEXTAREA"],
          j = Object.prototype.toString.call(a);
        if ("[object Object]" === j && (b = a.description, c = a.callback, d = a.action, f = a.persistent, e = a.allowIn, a = a.combo), k(a), b instanceof Function ? (d = c, c = b, b = "$$undefined$$") : angular.isUndefined(b) && (b = "$$undefined$$"), void 0 === f && (f = !0), "function" == typeof c) {
          h = c, e instanceof Array || (e = []);
          for (var l, m = 0; m < e.length; m++) e[m] = e[m].toUpperCase(), l = i.indexOf(e[m]), -1 !== l && i.splice(l, 1);
          c = function(a) {
            var b = !0;
            if (a) {
              var c = a.target || a.srcElement,
                d = c.nodeName.toUpperCase();
              if ((" " + c.className + " ").indexOf(" mousetrap ") > -1) b = !0;
              else
                for (var e = 0; e < i.length; e++)
                  if (i[e] === d) {
                    b = !1;
                    break
                  }
            }
            b && n(h.apply(this, arguments))
          }
        }
        "string" == typeof d ? Mousetrap.bind(a, n(c), d) : Mousetrap.bind(a, n(c));
        var p = new g(a, b, c, d, e, f);
        return o.hotkeys.push(p), p
      }

      function k(a) {
        var b = a instanceof g ? a.combo : a;
        if (Mousetrap.unbind(b), angular.isArray(b)) {
          for (var c = !0, d = b.length; d--;) c = k(b[d]) && c;
          return c
        }
        var e = o.hotkeys.indexOf(l(b));
        return e > -1 ? (o.hotkeys[e].combo.length > 1 ? o.hotkeys[e].combo.splice(o.hotkeys[e].combo.indexOf(b), 1) : (angular.forEach(p, function(a) {
          var b = a.indexOf(o.hotkeys[e]); - 1 !== b && a.splice(b, 1)
        }), o.hotkeys.splice(e, 1)), !0) : !1
      }

      function l(a) {
        if (!a) return o.hotkeys;
        for (var b, c = 0; c < o.hotkeys.length; c++)
          if (b = o.hotkeys[c], b.combo.indexOf(a) > -1) return b;
        return !1
      }

      function m(a) {
        return a.$id in p || (p[a.$id] = [], a.$on("$destroy", function() {
          for (var b = p[a.$id].length; b--;) k(p[a.$id].pop())
        })), {
          add: function(b) {
            var c;
            return c = arguments.length > 1 ? j.apply(this, arguments) : j(b), p[a.$id].push(c), this
          }
        }
      }

      function n(a) {
        return function(c, d) {
          if (a instanceof Array) {
            var e = a[0],
              f = a[1];
            a = function(a) {
              f.scope.$eval(e)
            }
          }
          b.$apply(function() {
            a(c, l(d))
          })
        }
      }
      Mousetrap.prototype.stopCallback = function(a, b) {
        return (" " + b.className + " ").indexOf(" mousetrap ") > -1 ? !1 : b.contentEditable && "true" == b.contentEditable
      }, g.prototype.format = function() {
        if (null === this._formated) {
          for (var a = this.combo[0], b = a.split(/[\s]/), c = 0; c < b.length; c++) b[c] = f(b[c]);
          this._formated = b
        }
        return this._formated
      };
      var o = b.$new();
      o.hotkeys = [], o.helpVisible = !1, o.title = this.templateTitle, o.header = this.templateHeader, o.footer = this.templateFooter, o.toggleCheatSheet = i;
      var p = [];
      if (this.useNgRoute && b.$on("$routeChangeSuccess", function(a, b) {
          h(), b && b.hotkeys && angular.forEach(b.hotkeys, function(a) {
            var c = a[2];
            ("string" == typeof c || c instanceof String) && (a[2] = [c, b]), a[5] = !1, j.apply(this, a)
          })
        }), this.includeCheatSheet) {
        var q = e[0],
          r = a[0],
          s = angular.element(this.template);
        j(this.cheatSheetHotkey, this.cheatSheetDescription, i), (r === q || r === q.documentElement) && (r = q.body), angular.element(r).append(c(s)(o))
      }
      var t = !1,
        u = {
          add: j,
          del: k,
          get: l,
          bindTo: m,
          template: this.template,
          toggleCheatSheet: i,
          includeCheatSheet: this.includeCheatSheet,
          cheatSheetHotkey: this.cheatSheetHotkey,
          cheatSheetDescription: this.cheatSheetDescription,
          useNgRoute: this.useNgRoute,
          purgeHotkeys: h,
          templateTitle: this.templateTitle
        };
      return u
    }]
  }]).directive("hotkey", ["hotkeys", function(a) {
    return {
      restrict: "A",
      link: function(b, c, d) {
        var e, f;
        angular.forEach(b.$eval(d.hotkey), function(b, c) {
          f = "string" == typeof d.hotkeyAllowIn ? d.hotkeyAllowIn.split(/[\s,]+/) : [], e = c, a.add({
            combo: c,
            description: d.hotkeyDescription,
            callback: b,
            action: d.hotkeyAction,
            allowIn: f
          })
        }), c.bind("$destroy", function() {
          a.del(e)
        })
      }
    }
  }]).run(["hotkeys", function(a) {}])
}(),
function(a, b, c) {
  function d(a, b, c) {
    return a.addEventListener ? void a.addEventListener(b, c, !1) : void a.attachEvent("on" + b, c)
  }

  function e(a) {
    if ("keypress" == a.type) {
      var b = String.fromCharCode(a.which);
      return a.shiftKey || (b = b.toLowerCase()), b
    }
    return r[a.which] ? r[a.which] : s[a.which] ? s[a.which] : String.fromCharCode(a.which).toLowerCase()
  }

  function f(a, b) {
    return a.sort().join(",") === b.sort().join(",")
  }

  function g(a) {
    var b = [];
    return a.shiftKey && b.push("shift"), a.altKey && b.push("alt"), a.ctrlKey && b.push("ctrl"), a.metaKey && b.push("meta"), b
  }

  function h(a) {
    return a.preventDefault ? void a.preventDefault() : void(a.returnValue = !1)
  }

  function i(a) {
    return a.stopPropagation ? void a.stopPropagation() : void(a.cancelBubble = !0)
  }

  function j(a) {
    return "shift" == a || "ctrl" == a || "alt" == a || "meta" == a
  }

  function k() {
    if (!q) {
      q = {};
      for (var a in r) a > 95 && 112 > a || r.hasOwnProperty(a) && (q[r[a]] = a)
    }
    return q
  }

  function l(a, b, c) {
    return c || (c = k()[a] ? "keydown" : "keypress"), "keypress" == c && b.length && (c = "keydown"), c
  }

  function m(a) {
    return "+" === a ? ["+"] : (a = a.replace(/\+{2}/g, "+plus"), a.split("+"))
  }

  function n(a, b) {
    var c, d, e, f = [];
    for (c = m(a), e = 0; e < c.length; ++e) d = c[e], u[d] && (d = u[d]), b && "keypress" != b && t[d] && (d = t[d], f.push("shift")), j(d) && f.push(d);
    return b = l(d, f, b), {
      key: d,
      modifiers: f,
      action: b
    }
  }

  function o(a, c) {
    return a === b ? !1 : a === c ? !0 : o(a.parentNode, c)
  }

  function p(a) {
    function c(a) {
      a = a || {};
      var b, c = !1;
      for (b in u) a[b] ? c = !0 : u[b] = 0;
      c || (x = !1)
    }

    function k(a, b, c, d, e, g) {
      var h, i, k = [],
        l = c.type;
      if (!s._callbacks[a]) return [];
      for ("keyup" == l && j(a) && (b = [a]), h = 0; h < s._callbacks[a].length; ++h)
        if (i = s._callbacks[a][h], (d || !i.seq || u[i.seq] == i.level) && l == i.action && ("keypress" == l && !c.metaKey && !c.ctrlKey || f(b, i.modifiers))) {
          var m = !d && i.combo == e,
            n = d && i.seq == d && i.level == g;
          (m || n) && s._callbacks[a].splice(h, 1), k.push(i)
        }
      return k
    }

    function l(a, b, c, d) {
      s.stopCallback(b, b.target || b.srcElement, c, d) || a(b, c) === !1 && (h(b), i(b))
    }

    function m(a) {
      "number" != typeof a.which && (a.which = a.keyCode);
      var b = e(a);
      if (b) return "keyup" == a.type && v === b ? void(v = !1) : void s.handleKey(b, g(a), a)
    }

    function o() {
      clearTimeout(t), t = setTimeout(c, 1e3)
    }

    function q(a, b, d, f) {
      function g(b) {
        return function() {
          x = b, ++u[a], o()
        }
      }

      function h(b) {
        l(d, b, a), "keyup" !== f && (v = e(b)), setTimeout(c, 10)
      }
      u[a] = 0;
      for (var i = 0; i < b.length; ++i) {
        var j = i + 1 === b.length,
          k = j ? h : g(f || n(b[i + 1]).action);
        r(b[i], k, f, a, i)
      }
    }

    function r(a, b, c, d, e) {
      s._directMap[a + ":" + c] = b, a = a.replace(/\s+/g, " ");
      var f, g = a.split(" ");
      return g.length > 1 ? void q(a, g, b, c) : (f = n(a, c), s._callbacks[f.key] = s._callbacks[f.key] || [], k(f.key, f.modifiers, {
        type: f.action
      }, d, a, e), void s._callbacks[f.key][d ? "unshift" : "push"]({
        callback: b,
        modifiers: f.modifiers,
        action: f.action,
        seq: d,
        level: e,
        combo: a
      }))
    }
    var s = this;
    if (a = a || b, !(s instanceof p)) return new p(a);
    s.target = a, s._callbacks = {}, s._directMap = {};
    var t, u = {},
      v = !1,
      w = !1,
      x = !1;
    s._handleKey = function(a, b, d) {
      var e, f = k(a, b, d),
        g = {},
        h = 0,
        i = !1;
      for (e = 0; e < f.length; ++e) f[e].seq && (h = Math.max(h, f[e].level));
      for (e = 0; e < f.length; ++e)
        if (f[e].seq) {
          if (f[e].level != h) continue;
          i = !0, g[f[e].seq] = 1, l(f[e].callback, d, f[e].combo, f[e].seq)
        } else i || l(f[e].callback, d, f[e].combo);
      var m = "keypress" == d.type && w;
      d.type != x || j(a) || m || c(g), w = i && "keydown" == d.type
    }, s._bindMultiple = function(a, b, c) {
      for (var d = 0; d < a.length; ++d) r(a[d], b, c)
    }, d(a, "keypress", m), d(a, "keydown", m), d(a, "keyup", m)
  }
  for (var q, r = {
      8: "backspace",
      9: "tab",
      13: "enter",
      16: "shift",
      17: "ctrl",
      18: "alt",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "ins",
      46: "del",
      91: "meta",
      93: "meta",
      224: "meta"
    }, s = {
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'"
    }, t = {
      "~": "`",
      "!": "1",
      "@": "2",
      "#": "3",
      $: "4",
      "%": "5",
      "^": "6",
      "&": "7",
      "*": "8",
      "(": "9",
      ")": "0",
      _: "-",
      "+": "=",
      ":": ";",
      '"': "'",
      "<": ",",
      ">": ".",
      "?": "/",
      "|": "\\"
    }, u = {
      option: "alt",
      command: "meta",
      "return": "enter",
      escape: "esc",
      plus: "+",
      mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
    }, v = 1; 20 > v; ++v) r[111 + v] = "f" + v;
  for (v = 0; 9 >= v; ++v) r[v + 96] = v;
  p.prototype.bind = function(a, b, c) {
    var d = this;
    return a = a instanceof Array ? a : [a], d._bindMultiple.call(d, a, b, c), d
  }, p.prototype.unbind = function(a, b) {
    var c = this;
    return c.bind.call(c, a, function() {}, b)
  }, p.prototype.trigger = function(a, b) {
    var c = this;
    return c._directMap[a + ":" + b] && c._directMap[a + ":" + b]({}, a), c
  }, p.prototype.reset = function() {
    var a = this;
    return a._callbacks = {}, a._directMap = {}, a
  }, p.prototype.stopCallback = function(a, b) {
    var c = this;
    return (" " + b.className + " ").indexOf(" mousetrap ") > -1 ? !1 : o(b, c.target) ? !1 : "INPUT" == b.tagName || "SELECT" == b.tagName || "TEXTAREA" == b.tagName || b.isContentEditable
  }, p.prototype.handleKey = function() {
    var a = this;
    return a._handleKey.apply(a, arguments)
  }, p.init = function() {
    var a = p(b);
    for (var c in a) "_" !== c.charAt(0) && (p[c] = function(b) {
      return function() {
        return a[b].apply(a, arguments)
      }
    }(c))
  }, p.init(), a.Mousetrap = p, "undefined" != typeof module && module.exports && (module.exports = p), "function" == typeof define && define.amd && define(function() {
    return p
  })
}(window, document), angular.module("angular-growl", []), angular.module("angular-growl").directive("growl", [function() {
    "use strict";
    return {
      restrict: "A",
      templateUrl: "templates/growl/growl.html",
      replace: !1,
      scope: {
        reference: "@",
        inline: "=",
        limitMessages: "="
      },
      controller: ["$scope", "$interval", "growl", "growlMessages", function(a, b, c, d) {
        a.referenceId = a.reference || 0, d.initDirective(a.referenceId, a.limitMessages), a.growlMessages = d, a.inlineMessage = angular.isDefined(a.inline) ? a.inline : c.inlineMessages(), a.$watch("limitMessages", function(b) {
          var c = d.directives[a.referenceId];
          angular.isUndefined(b) || angular.isUndefined(c) || (c.limitMessages = b)
        }), a.stopTimeoutClose = function(a) {
          a.clickToClose || (angular.forEach(a.promises, function(a) {
            b.cancel(a)
          }), a.close ? d.deleteMessage(a) : a.close = !0)
        }, a.alertClasses = function(a) {
          return {
            "alert-success": "success" === a.severity,
            "alert-error": "error" === a.severity,
            "alert-danger": "error" === a.severity,
            "alert-info": "info" === a.severity,
            "alert-warning": "warning" === a.severity,
            icon: a.disableIcons === !1,
            "alert-dismissable": !a.disableCloseButton
          }
        }, a.showCountDown = function(a) {
          return !a.disableCountDown && a.ttl > 0
        }, a.wrapperClasses = function() {
          var b = {};
          return b["growl-fixed"] = !a.inlineMessage, b[c.position()] = !0, b
        }, a.computeTitle = function(a) {
          var b = {
            success: "Success",
            error: "Error",
            info: "Information",
            warn: "Warning"
          };
          return b[a.severity]
        }
      }]
    }
  }]), angular.module("angular-growl").run(["$templateCache", function(a) {
    "use strict";
    void 0 === a.get("templates/growl/growl.html") && a.put("templates/growl/growl.html", '<div class="growl-container" ng-class="wrapperClasses()"><div class="growl-item alert" ng-repeat="message in growlMessages.directives[referenceId].messages" ng-class="alertClasses(message)" ng-click="stopTimeoutClose(message)"><button type="button" class="close" data-dismiss="alert" aria-hidden="true" ng-click="growlMessages.deleteMessage(message)" ng-show="!message.disableCloseButton">&times;</button><button type="button" class="close" aria-hidden="true" ng-show="showCountDown(message)">{{message.countdown}}</button><h4 class="growl-title" ng-show="message.title" ng-bind="message.title"></h4><div class="growl-message" ng-bind-html="message.text"></div></div></div>')
  }]), angular.module("angular-growl").provider("growl", function() {
    "use strict";
    var a = {
        success: null,
        error: null,
        warning: null,
        info: null
      },
      b = "messages",
      c = "text",
      d = "title",
      e = "severity",
      f = "ttl",
      g = !0,
      h = "variables",
      i = 0,
      j = !1,
      k = "top-right",
      l = !1,
      m = !1,
      n = !1,
      o = !1,
      p = !0;
    this.globalTimeToLive = function(b) {
      if ("object" == typeof b)
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
      else
        for (var d in a) a.hasOwnProperty(d) && (a[d] = b);
      return this
    }, this.globalTranslateMessages = function(a) {
      return p = a, this
    }, this.globalDisableCloseButton = function(a) {
      return l = a, this
    }, this.globalDisableIcons = function(a) {
      return m = a, this
    }, this.globalReversedOrder = function(a) {
      return n = a, this
    }, this.globalDisableCountDown = function(a) {
      return o = a, this
    }, this.messageVariableKey = function(a) {
      return h = a, this
    }, this.globalInlineMessages = function(a) {
      return j = a, this
    }, this.globalPosition = function(a) {
      return k = a, this
    }, this.messagesKey = function(a) {
      return b = a, this
    }, this.messageTextKey = function(a) {
      return c = a, this
    }, this.messageTitleKey = function(a) {
      return d = a, this
    }, this.messageSeverityKey = function(a) {
      return e = a, this
    }, this.messageTTLKey = function(a) {
      return f = a, this
    }, this.onlyUniqueMessages = function(a) {
      return g = a, this
    }, this.serverMessagesInterceptor = ["$q", "growl", function(a, c) {
      function d(a) {
        void 0 !== a && a.data && a.data[b] && a.data[b].length > 0 && c.addServerMessages(a.data[b])
      }
      return {
        response: function(a) {
          return d(a), a
        },
        responseError: function(b) {
          return d(b), a.reject(b)
        }
      }
    }], this.$get = ["$rootScope", "$interpolate", "$sce", "$filter", "$interval", "growlMessages", function(b, q, r, s, t, u) {
      function v(a) {
        if (H && a.translateMessage) a.text = H(a.text, a.variables) || a.text, a.title = H(a.title) || a.title;
        else {
          var c = q(a.text);
          a.text = c(a.variables)
        }
        var d = u.addMessage(a);
        return b.$broadcast("growlMessage", a), t(function() {}, 0, 1), d
      }

      function w(b, c, d) {
        var e, f = c || {};
        return e = {
          text: b,
          title: f.title,
          severity: d,
          ttl: f.ttl || a[d],
          variables: f.variables || {},
          disableCloseButton: void 0 === f.disableCloseButton ? l : f.disableCloseButton,
          disableIcons: void 0 === f.disableIcons ? m : f.disableIcons,
          disableCountDown: void 0 === f.disableCountDown ? o : f.disableCountDown,
          position: f.position || k,
          referenceId: f.referenceId || i,
          translateMessage: void 0 === f.translateMessage ? p : f.translateMessage,
          destroy: function() {
            u.deleteMessage(e)
          },
          setText: function(a) {
            e.text = r.trustAsHtml(String(a))
          },
          onclose: f.onclose,
          onopen: f.onopen
        }, v(e)
      }

      function x(a, b) {
        return w(a, b, "warning")
      }

      function y(a, b) {
        return w(a, b, "error")
      }

      function z(a, b) {
        return w(a, b, "info")
      }

      function A(a, b) {
        return w(a, b, "success")
      }

      function B(a, b, c) {
        return c = (c || "error").toLowerCase(), w(a, b, c)
      }

      function C(a) {
        if (a && a.length) {
          var b, g, i, j;
          for (j = a.length, b = 0; j > b; b++)
            if (g = a[b], g[c]) {
              i = (g[e] || "error").toLowerCase();
              var k = {};
              k.variables = g[h] || {}, k.title = g[d], g[f] && (k.ttl = g[f]), w(g[c], k, i)
            }
        }
      }

      function D() {
        return g
      }

      function E() {
        return n
      }

      function F() {
        return j
      }

      function G() {
        return k
      }
      var H;
      u.onlyUnique = g, u.reverseOrder = n;
      try {
        H = s("translate")
      } catch (I) {}
      return {
        warning: x,
        error: y,
        info: z,
        success: A,
        general: B,
        addServerMessages: C,
        onlyUnique: D,
        reverseOrder: E,
        inlineMessages: F,
        position: G
      }
    }]
  }), angular.module("angular-growl").service("growlMessages", ["$sce", "$interval", function(a, b) {
    "use strict";

    function c(a) {
      var b;
      return b = f[a] ? f[a] : f[a] = {
        messages: []
      }
    }

    function d(a) {
      var b = a || 0;
      return e.directives[b] || f[b]
    }
    var e = this;
    this.directives = {};
    var f = {};
    this.initDirective = function(a, b) {
      return f[a] ? (this.directives[a] = f[a], this.directives[a].limitMessages = b) : this.directives[a] = {
        messages: [],
        limitMessages: b
      }, this.directives[a]
    }, this.getAllMessages = function(a) {
      a = a || 0;
      var b;
      return b = d(a) ? d(a).messages : []
    }, this.destroyAllMessages = function(a) {
      for (var b = this.getAllMessages(a), c = b.length - 1; c >= 0; c--) b[c].destroy();
      var e = d(a);
      e && (e.messages = [])
    }, this.addMessage = function(d) {
      var e, f, g, h;
      if (e = this.directives[d.referenceId] ? this.directives[d.referenceId] : c(d.referenceId), f = e.messages, !this.onlyUnique || (angular.forEach(f, function(b) {
          h = a.getTrustedHtml(b.text), d.text === h && d.severity === b.severity && d.title === b.title && (g = !0)
        }), !g)) {
        if (d.text = a.trustAsHtml(String(d.text)), d.ttl && -1 !== d.ttl && (d.countdown = d.ttl / 1e3, d.promises = [], d.close = !1, d.countdownFunction = function() {
            d.countdown > 1 ? (d.countdown--, d.promises.push(b(d.countdownFunction, 1e3, 1, 1))) : d.countdown--
          }), angular.isDefined(e.limitMessages)) {
          var i = f.length - (e.limitMessages - 1);
          i > 0 && f.splice(e.limitMessages - 1, i)
        }
        if (this.reverseOrder ? f.unshift(d) : f.push(d), "function" == typeof d.onopen && d.onopen(), d.ttl && -1 !== d.ttl) {
          var j = this;
          d.promises.push(b(angular.bind(this, function() {
            j.deleteMessage(d)
          }), d.ttl, 1, 1)), d.promises.push(b(d.countdownFunction, 1e3, 1, 1))
        }
        return d
      }
    }, this.deleteMessage = function(a) {
      var b = this.getAllMessages(a.referenceId),
        c = -1;
      for (var d in b) b.hasOwnProperty(d) && (c = b[d] === a ? d : c);
      c > -1 && (b[c].close = !0, b.splice(c, 1)), "function" == typeof a.onclose && a.onclose()
    }
  }]), angular.module("AutoFontSize", []).directive("autoFontSize", ["$window", function(a) {
    return {
      template: '<div data-role="inner"  ng-transclude></div>',
      transclude: !0,
      link: {
        post: function(b, c, d) {
          function e() {
            var a = l.children().text().trim().length;
            "category" === c[0].id || "rationale" === c[0].id ? h(15 >= a ? 50 : 50 >= a ? 40 : 40) : "testName" === c[0].id ? h(14 >= a ? 120 : 16 >= a ? 100 : 18 >= a ? 92 : 20 >= a ? 85 : 22 >= a ? 72 : 23 >= a ? 73 : 26 >= a ? 65 : 29 >= a ? 60 : 33 >= a ? 55 : 38 >= a ? 50 : 50) : "subRationale" === c[0].id && h(30), b.$emit("auto-font-size:resized", {
              fontSize: g(),
              elem: c
            })
          }

          function f(b, c) {
            return a.getComputedStyle ? a.getComputedStyle(b[0]).getPropertyValue(c) : void 0
          }

          function g() {
            var a = f(l, "font-size");
            return Number(a.match(/\d+/)[0])
          }

          function h(a) {
            l[0].style.fontSize = a + "px", i()
          }

          function i() {
            if (j()) {
              var a = 0,
                b = 0;
              "category" === c[0].id ? (a = 50, l[0].style.lineHeight = a + 2 + "px", b = l[0].querySelectorAll("img"), angular.forEach(b, function(b) {
                b.style.height(a + 2 + "px")
              })) : "testName" === c[0].id ? (a = 180, l[0].style.lineHeight = a + 2 + "px", b = l[0].querySelectorAll("img"), angular.forEach(b, function(b) {
                b.style.height(a + 2 + "px")
              })) : "rationale" === c[0].id && (a = 40, l[0].style.lineHeight = a + 2 + "px", b = l[0].querySelectorAll("img"), angular.forEach(b, function(b) {
                b.style.height(a + 2 + "px")
              }))
            }
          }

          function j() {
            return !!l[0].style.fontSize
          }
          var k = b.$eval(d.autoFontSize) || {},
            l = (angular.extend({
              shrink: !0,
              grow: !0,
              minSize: 1
            }, k), angular.element(c[0].querySelector("div[data-role]")));
          b.$watch(e)
        }
      }
    }
  }]), ! function(a, b, c) {
    "use strict";
    var d = b.isDefined,
      e = b.isUndefined,
      f = b.isNumber,
      g = b.isObject,
      h = b.isArray,
      i = b.extend,
      j = b.toJson,
      k = b.module("LocalStorageModule", []);
    k.provider("localStorageService", function() {
      this.prefix = "ls", this.storageType = "localStorage", this.cookie = {
        expiry: 30,
        path: "/"
      }, this.notify = {
        setItem: !0,
        removeItem: !1
      }, this.setPrefix = function(a) {
        return this.prefix = a, this
      }, this.setStorageType = function(a) {
        return this.storageType = a, this
      }, this.setStorageCookie = function(a, b) {
        return this.cookie.expiry = a, this.cookie.path = b, this
      }, this.setStorageCookieDomain = function(a) {
        return this.cookie.domain = a, this
      }, this.setNotify = function(a, b) {
        return this.notify = {
          setItem: a,
          removeItem: b
        }, this
      }, this.$get = ["$rootScope", "$window", "$document", "$parse", function(a, b, c, k) {
        var l, m = this,
          n = m.prefix,
          o = m.cookie,
          p = m.notify,
          q = m.storageType;
        c ? c[0] && (c = c[0]) : c = document, "." !== n.substr(-1) && (n = n ? n + "." : "");
        var r = function(a) {
            return n + a
          },
          s = function() {
            try {
              var c = q in b && null !== b[q],
                d = r("__" + Math.round(1e7 * Math.random()));
              return c && (l = b[q], l.setItem(d, ""), l.removeItem(d)), c
            } catch (e) {
              return q = "cookie", a.$broadcast("LocalStorageModule.notification.error", e.message), !1
            }
          }(),
          t = function(b, c) {
            if (c = e(c) ? null : j(c), !s || "cookie" === m.storageType) return s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), p.setItem && a.$broadcast("LocalStorageModule.notification.setitem", {
              key: b,
              newvalue: c,
              storageType: "cookie"
            }), z(b, c);
            try {
              l && l.setItem(r(b), c), p.setItem && a.$broadcast("LocalStorageModule.notification.setitem", {
                key: b,
                newvalue: c,
                storageType: m.storageType
              })
            } catch (d) {
              return a.$broadcast("LocalStorageModule.notification.error", d.message), z(b, c)
            }
            return !0
          },
          u = function(b) {
            if (!s || "cookie" === m.storageType) return s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), A(b);
            var c = l ? l.getItem(r(b)) : null;
            if (!c || "null" === c) return null;
            try {
              return JSON.parse(c)
            } catch (d) {
              return c
            }
          },
          v = function() {
            var b, c;
            for (b = 0; b < arguments.length; b++)
              if (c = arguments[b], s && "cookie" !== m.storageType) try {
                l.removeItem(r(c)), p.removeItem && a.$broadcast("LocalStorageModule.notification.removeitem", {
                  key: c,
                  storageType: m.storageType
                })
              } catch (d) {
                a.$broadcast("LocalStorageModule.notification.error", d.message), B(c)
              } else s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), p.removeItem && a.$broadcast("LocalStorageModule.notification.removeitem", {
                key: c,
                storageType: "cookie"
              }), B(c)
          },
          w = function() {
            if (!s) return a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), !1;
            var b = n.length,
              c = [];
            for (var d in l)
              if (d.substr(0, b) === n) try {
                c.push(d.substr(b))
              } catch (e) {
                return a.$broadcast("LocalStorageModule.notification.error", e.Description), []
              }
              return c
          },
          x = function(b) {
            var c = n ? new RegExp("^" + n) : new RegExp,
              d = b ? new RegExp(b) : new RegExp;
            if (!s || "cookie" === m.storageType) return s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), C();
            var e = n.length;
            for (var f in l)
              if (c.test(f) && d.test(f.substr(e))) try {
                v(f.substr(e))
              } catch (g) {
                return a.$broadcast("LocalStorageModule.notification.error", g.message), C()
              }
              return !0
          },
          y = function() {
            try {
              return b.navigator.cookieEnabled || "cookie" in c && (c.cookie.length > 0 || (c.cookie = "test").indexOf.call(c.cookie, "test") > -1)
            } catch (d) {
              return a.$broadcast("LocalStorageModule.notification.error", d.message), !1
            }
          }(),
          z = function(b, d, i) {
            if (e(d)) return !1;
            if ((h(d) || g(d)) && (d = j(d)), !y) return a.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"), !1;
            try {
              var k = "",
                l = new Date,
                m = "";
              if (null === d ? (l.setTime(l.getTime() + -864e5), k = "; expires=" + l.toGMTString(), d = "") : f(i) && 0 !== i ? (l.setTime(l.getTime() + 24 * i * 60 * 60 * 1e3), k = "; expires=" + l.toGMTString()) : 0 !== o.expiry && (l.setTime(l.getTime() + 24 * o.expiry * 60 * 60 * 1e3), k = "; expires=" + l.toGMTString()), b) {
                var n = "; path=" + o.path;
                o.domain && (m = "; domain=" + o.domain), c.cookie = r(b) + "=" + encodeURIComponent(d) + k + n + m
              }
            } catch (p) {
              return a.$broadcast("LocalStorageModule.notification.error", p.message), !1
            }
            return !0
          },
          A = function(b) {
            if (!y) return a.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"), !1;
            for (var d = c.cookie && c.cookie.split(";") || [], e = 0; e < d.length; e++) {
              for (var f = d[e];
                " " === f.charAt(0);) f = f.substring(1, f.length);
              if (0 === f.indexOf(r(b) + "=")) {
                var g = decodeURIComponent(f.substring(n.length + b.length + 1, f.length));
                try {
                  return JSON.parse(g)
                } catch (h) {
                  return g
                }
              }
            }
            return null
          },
          B = function(a) {
            z(a, null)
          },
          C = function() {
            for (var a = null, b = n.length, d = c.cookie.split(";"), e = 0; e < d.length; e++) {
              for (a = d[e];
                " " === a.charAt(0);) a = a.substring(1, a.length);
              var f = a.substring(b, a.indexOf("="));
              B(f)
            }
          },
          D = function() {
            return q
          },
          E = function(a, b, c, e) {
            e = e || b;
            var f = u(e);
            return null === f && d(c) ? f = c : g(f) && g(c) && (f = i(c, f)), k(b).assign(a, f), a.$watch(b, function(a) {
              t(e, a)
            }, g(a[b]))
          },
          F = function() {
            for (var a = 0, c = b[q], d = 0; d < c.length; d++) 0 === c.key(d).indexOf(n) && a++;
            return a
          };
        return {
          isSupported: s,
          getStorageType: D,
          set: t,
          add: t,
          get: u,
          keys: w,
          remove: v,
          clearAll: x,
          bind: E,
          deriveKey: r,
          length: F,
          cookie: {
            isSupported: y,
            set: z,
            add: z,
            get: A,
            remove: B,
            clearAll: C
          }
        }
      }]
    })
  }(window, window.angular),
  function() {
    "use strict";
    var a = "undefined" != typeof module && module.exports,
      b = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
      c = function() {
        for (var a, b, c = [
            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
          ], d = 0, e = c.length, f = {}; e > d; d++)
          if (a = c[d], a && a[1] in document) {
            for (d = 0, b = a.length; b > d; d++) f[c[0][d]] = a[d];
            return f
          }
        return !1
      }(),
      d = {
        request: function(a) {
          var d = c.requestFullscreen;
          a = a || document.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? a[d]() : a[d](b && Element.ALLOW_KEYBOARD_INPUT);
        },
        exit: function() {
          document[c.exitFullscreen]()
        },
        toggle: function(a) {
          this.isFullscreen ? this.exit() : this.request(a)
        },
        raw: c
      };
    return c ? (Object.defineProperties(d, {
      isFullscreen: {
        get: function() {
          return !!document[c.fullscreenElement]
        }
      },
      element: {
        enumerable: !0,
        get: function() {
          return document[c.fullscreenElement]
        }
      },
      enabled: {
        enumerable: !0,
        get: function() {
          return !!document[c.fullscreenEnabled]
        }
      }
    }), void(a ? module.exports = d : window.screenfull = d)) : void(a ? module.exports = !1 : window.screenfull = !1)
  }(), ! function(a) {
    a.module("angularScreenfull", [])
  }(angular),
  function(a) {
    function b(a) {
      return {
        restrict: "A",
        require: "ngsfFullscreen",
        controller: c,
        link: function(b, c, d, e) {
          if (d.ngsfFullscreen && "" !== d.ngsfFullscreen) {
            var f = a(d.ngsfFullscreen);
            f.assign(b, e)
          }
          e.setFullScreenElement(c[0])
        }
      }
    }

    function c(b, c) {
      function d() {
        if (l.fullscreenEnabled()) {
          var d = function() {
            l.isFullscreen() ? a.element(m).addClass("fullscreen") : a.element(m).removeClass("fullscreen"), b.$emit("fullscreenchange")
          };
          c[0].addEventListener(screenfull.raw.fullscreenchange, d), b.$on("$destroy", function() {
            c[0].removeEventListener(screenfull.raw.fullscreenchange, d)
          })
        }
      }

      function e(a) {
        m = a
      }

      function f(a) {
        return b.$on("fullscreenchange", a)
      }

      function g() {
        return l.fullscreenEnabled() ? (screenfull.request(m), b.$emit("fullscreenEnabled"), !0) : !1
      }

      function h() {
        l.fullscreenEnabled() && l.isFullscreen() && l.toggleFullscreen()
      }

      function i() {
        if (l.fullscreenEnabled()) {
          var a = screenfull.isFullscreen;
          return screenfull.toggle(m), b.$emit(a ? "fullscreenDisabled" : "fullscreenEnabled"), !0
        }
        return !1
      }

      function j() {
        return l.fullscreenEnabled() ? screenfull.isFullscreen : !1
      }

      function k() {
        return "undefined" != typeof screenfull ? screenfull.enabled : !1
      }
      var l = this;
      l.setFullScreenElement = e, l.onFullscreenChange = f, l.requestFullscreen = g, l.removeFullscreen = h, l.toggleFullscreen = i, l.isFullscreen = j, l.fullscreenEnabled = k;
      var m;
      d()
    }
    a.module("angularScreenfull").directive("ngsfFullscreen", b), b.$inject = ["$parse"], c.$inject = ["$scope", "$document"]
  }(angular),
  function(a) {
    function b(a) {
      return {
        restrict: "A",
        require: "^ngsfFullscreen",
        link: function(b, c, d, e) {
          e.fullscreenEnabled() ? a.removeClass(c, "ng-hide") : a.addClass(c, "ng-hide")
        }
      }
    }
    a.module("angularScreenfull").directive("showIfFullscreenEnabled", b), b.$inject = ["$animate"]
  }(angular),
  function(a) {
    function b(a) {
      return {
        restrict: "A",
        require: "^ngsfFullscreen",
        link: function(b, c, d, e) {
          var f = function() {
            var b = e.isFullscreen();
            ("false" === d.showIfFullscreen || d.showIfFullscreen === !1) && (b = !b), b ? a.removeClass(c, "ng-hide") : a.addClass(c, "ng-hide")
          };
          f();
          var g = e.onFullscreenChange(f);
          b.$on("$destroy", g)
        }
      }
    }
    a.module("angularScreenfull").directive("showIfFullscreen", b), b.$inject = ["$animate"]
  }(angular),
  function(a) {
    function b() {
      return {
        restrict: "A",
        require: "^ngsfFullscreen",
        link: function(a, b, c, d) {
          b.on("click", function() {
            d.toggleFullscreen()
          })
        }
      }
    }
    a.module("angularScreenfull").directive("ngsfToggleFullscreen", b)
  }(angular);
var Reveal = function() {
  "use strict";

  function a(a) {
    if (b(), jb.transforms2d || jb.transforms3d) {
      ib.wrapper = document.querySelector(".reveal"), ib.slides = document.querySelector(".reveal .slides"), window.addEventListener("load", F, !1);
      var d = Reveal.getQueryHash();
      "undefined" != typeof d.dependencies && delete d.dependencies, o(eb, a), o(eb, d), w(), c()
    } else {
      document.body.setAttribute("class", "no-transforms");
      for (var e = p(document.getElementsByTagName("img")), f = p(document.getElementsByTagName("iframe")), g = e.concat(f), h = 0, i = g.length; i > h; h++) {
        var j = g[h];
        j.getAttribute("data-src") && (j.setAttribute("src", j.getAttribute("data-src")), j.removeAttribute("data-src"))
      }
    }
  }

  function b() {
    jb.transforms3d = "WebkitPerspective" in document.body.style || "MozPerspective" in document.body.style || "msPerspective" in document.body.style || "OPerspective" in document.body.style || "perspective" in document.body.style, jb.transforms2d = "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style, jb.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, jb.requestAnimationFrame = "function" == typeof jb.requestAnimationFrameMethod, jb.canvas = !!document.createElement("canvas").getContext, jb.touch = !!("ontouchstart" in window), jb.overviewTransitions = !/Version\/[\d\.]+.*Safari/.test(navigator.userAgent), $a = /(iphone|ipod|ipad|android)/gi.test(navigator.userAgent), $a = navigator.userAgent.match(/(iphone|ipod|android)/gi)
  }

  function c() {
    function a() {
      e.length && head.js.apply(null, e), d()
    }

    function b(b) {
      head.ready(b.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0], function() {
        "function" == typeof b.callback && b.callback.apply(this), 0 === --f && a()
      })
    }
    for (var c = [], e = [], f = 0, g = 0, h = eb.dependencies.length; h > g; g++) {
      var i = eb.dependencies[g];
      (!i.condition || i.condition()) && (i.async ? e.push(i.src) : c.push(i.src), b(i))
    }
    c.length ? (f = c.length, head.js.apply(null, c)) : a()
  }

  function d() {
    e(), k(), h(), V(), l(), ha(), aa(!0), setTimeout(function() {
      ib.slides.classList.remove("no-transition"), fb = !0, y("ready", {
        indexh: Va,
        indexv: Wa,
        currentSlide: Ya
      })
    }, 1), v() && (n(), "complete" === document.readyState ? g() : window.addEventListener("load", g))
  }

  function e() {
    ib.theme = document.querySelector("#theme"), ib.wrapper = document.querySelector(".reveal"), ib.slides = document.querySelector(".reveal .slides"), ib.slides.classList.add("no-transition"), ib.background = i(ib.wrapper, "div", "backgrounds", null), ib.progress = i(ib.wrapper, "div", "progress", "<span></span>"), ib.progressbar = ib.progress.querySelector("span"), i(ib.wrapper, "aside", "controls", '<div class="navigate-left"></div><div class="navigate-right"></div><div class="navigate-up"></div><div class="navigate-down"></div>'), ib.slideNumber = i(ib.wrapper, "div", "slide-number", ""), i(ib.wrapper, "div", "state-background", null), i(ib.wrapper, "div", "pause-overlay", null), ib.controls = document.querySelector(".reveal .controls"), ib.theme = document.querySelector("#theme"), ib.wrapper.setAttribute("role", "application"), ib.controlsLeft = p(document.querySelectorAll(".navigate-left")), ib.controlsRight = p(document.querySelectorAll(".navigate-right")), ib.controlsUp = p(document.querySelectorAll(".navigate-up")), ib.controlsDown = p(document.querySelectorAll(".navigate-down")), ib.controlsPrev = p(document.querySelectorAll(".navigate-prev")), ib.controlsNext = p(document.querySelectorAll(".navigate-next")), ib.statusDiv = f()
  }

  function f() {
    var a = document.getElementById("aria-status-div");
    return a || (a = document.createElement("div"), a.style.position = "absolute", a.style.height = "1px", a.style.width = "1px", a.style.overflow = "hidden", a.style.clip = "rect( 1px, 1px, 1px, 1px )", a.setAttribute("id", "aria-status-div"), a.setAttribute("aria-live", "polite"), a.setAttribute("aria-atomic", "true"), ib.wrapper.appendChild(a)), a
  }

  function g() {
    var a = getComputedSlideSize(window.innerWidth, window.innerHeight),
      b = Math.floor(a.width * (1 + eb.margin)),
      c = Math.floor(a.height * (1 + eb.margin)),
      d = a.width,
      e = a.height;
    s("@page{size:" + b + "px " + c + "px; margin: 0;}"), s(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + d + "px; max-height:" + e + "px}"), document.body.classList.add("print-pdf"), document.body.style.width = b + "px", document.body.style.height = c + "px", p(ib.wrapper.querySelectorAll(ab)).forEach(function(a) {
      if (a.classList.contains("stack") === !1) {
        var f = (b - d) / 2,
          g = (c - e) / 2,
          h = t(a),
          i = Math.max(Math.ceil(h / c), 1);
        (1 === i && eb.center || a.classList.contains("center")) && (g = Math.max((c - h) / 2, 0)), a.style.left = f + "px", a.style.top = g + "px", a.style.width = d + "px";
        var j = a.querySelector(".slide-background");
        j && (j.style.width = b + "px", j.style.height = c * i + "px", j.style.top = -g + "px", j.style.left = -f + "px")
      }
    }), p(ib.wrapper.querySelectorAll(ab + " .fragment")).forEach(function(a) {
      a.classList.add("visible")
    })
  }

  function h() {
    ib.slides.querySelector("iframe") && setInterval(function() {
      (0 !== ib.wrapper.scrollTop || 0 !== ib.wrapper.scrollLeft) && (ib.wrapper.scrollTop = 0, ib.wrapper.scrollLeft = 0)
    }, 500)
  }

  function i(a, b, c, d) {
    for (var e = a.querySelectorAll("." + c), f = 0; f < e.length; f++) {
      var g = e[f];
      if (g.parentNode === a) return g
    }
    var h = document.createElement(b);
    return h.classList.add(c), "string" == typeof d && (h.innerHTML = d), a.appendChild(h), h
  }

  function j() {
    function a(a, b) {
      var c = {
          background: a.getAttribute("data-background"),
          backgroundSize: a.getAttribute("data-background-size"),
          backgroundImage: a.getAttribute("data-background-image"),
          backgroundColor: a.getAttribute("data-background-color"),
          backgroundRepeat: a.getAttribute("data-background-repeat"),
          backgroundPosition: a.getAttribute("data-background-position"),
          backgroundTransition: a.getAttribute("data-background-transition")
        },
        d = document.createElement("div");
      return d.className = "slide-background", c.background && (/^(http|file|\/\/)/gi.test(c.background) || /\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test(c.background) ? d.style.backgroundImage = "url(" + c.background + ")" : d.style.background = c.background), (c.background || c.backgroundColor || c.backgroundImage) && d.setAttribute("data-background-hash", c.background + c.backgroundSize + c.backgroundImage + c.backgroundColor + c.backgroundRepeat + c.backgroundPosition + c.backgroundTransition), c.backgroundSize && (d.style.backgroundSize = c.backgroundSize), c.backgroundImage && (d.style.backgroundImage = 'url("' + c.backgroundImage + '")'), c.backgroundColor && (d.style.backgroundColor = c.backgroundColor), c.backgroundRepeat && (d.style.backgroundRepeat = c.backgroundRepeat), c.backgroundPosition && (d.style.backgroundPosition = c.backgroundPosition), c.backgroundTransition && d.setAttribute("data-background-transition", c.backgroundTransition), b.appendChild(d), d
    }
    v() && document.body.classList.add("print-pdf"), ib.background.innerHTML = "", ib.background.classList.add("no-transition"), p(document.querySelectorAll(bb)).forEach(function(b) {
      var c;
      c = v() ? a(b, b) : a(b, ib.background), p(b.querySelectorAll("section")).forEach(function(b) {
        v() ? a(b, b) : a(b, c)
      })
    }), eb.parallaxBackgroundImage ? (ib.background.style.backgroundImage = 'url("' + eb.parallaxBackgroundImage + '")', ib.background.style.backgroundSize = eb.parallaxBackgroundSize, setTimeout(function() {
      ib.wrapper.classList.add("has-parallax-background")
    }, 1)) : (ib.background.style.backgroundImage = "", ib.wrapper.classList.remove("has-parallax-background"))
  }

  function k() {
    eb.postMessage && window.addEventListener("message", function(a) {
      var b = a.data;
      "string" == typeof b && "{" === b.charAt(0) && "}" === b.charAt(b.length - 1) && (b = JSON.parse(b), b.method && "function" == typeof Reveal[b.method] && Reveal[b.method].apply(Reveal, b.args))
    }, !1)
  }

  function l(a) {
    var b = ib.wrapper.querySelectorAll(ab).length;
    if (ib.wrapper.classList.remove(eb.transition), "object" == typeof a && o(eb, a), jb.transforms3d === !1 && (eb.transition = "linear"), ib.wrapper.classList.add(eb.transition), ib.wrapper.setAttribute("data-transition-speed", eb.transitionSpeed), ib.wrapper.setAttribute("data-background-transition", eb.backgroundTransition), ib.controls.style.display = eb.controls ? "block" : "none", ib.progress.style.display = eb.progress ? "block" : "none", eb.rtl ? ib.wrapper.classList.add("rtl") : ib.wrapper.classList.remove("rtl"), eb.center ? ib.wrapper.classList.add("center") : ib.wrapper.classList.remove("center"), eb.pause === !1 && Q(), eb.mouseWheel ? (document.addEventListener("DOMMouseScroll", Ga, !1), document.addEventListener("mousewheel", Ga, !1)) : (document.removeEventListener("DOMMouseScroll", Ga, !1), document.removeEventListener("mousewheel", Ga, !1)), eb.rollingLinks ? z() : A(), eb.previewLinks ? B() : (C(), B("[data-preview-link]")), b > 1 && eb.autoSlide && eb.autoSlideStoppable && jb.canvas && jb.requestAnimationFrame ? (_a = new Ua(ib.wrapper, function() {
        return Math.min(Math.max((Date.now() - rb) / pb, 0), 1)
      }), _a.on("click", Ta), sb = !1) : _a && (_a.destroy(), _a = null), eb.theme && ib.theme) {
      var c = ib.theme.getAttribute("href"),
        d = /[^\/]*?(?=\.css)/,
        e = c.match(d)[0];
      eb.theme !== e && (c = c.replace(d, eb.theme), ib.theme.setAttribute("href", c))
    }
    U()
  }

  function m() {
    if (ob = !0, window.addEventListener("hashchange", Oa, !1), window.addEventListener("resize", Pa, !1), eb.touch && (ib.wrapper.addEventListener("touchstart", Aa, !1), ib.wrapper.addEventListener("touchmove", Ba, !1), ib.wrapper.addEventListener("touchend", Ca, !1), window.navigator.pointerEnabled ? (ib.wrapper.addEventListener("pointerdown", Da, !1), ib.wrapper.addEventListener("pointermove", Ea, !1), ib.wrapper.addEventListener("pointerup", Fa, !1)) : window.navigator.msPointerEnabled && (ib.wrapper.addEventListener("MSPointerDown", Da, !1), ib.wrapper.addEventListener("MSPointerMove", Ea, !1), ib.wrapper.addEventListener("MSPointerUp", Fa, !1))), eb.keyboard && document.addEventListener("keydown", za, !1), eb.progress && ib.progress && ib.progress.addEventListener("click", Ha, !1), eb.focusBodyOnPageVisibilityChange) {
      var a;
      "hidden" in document ? a = "visibilitychange" : "msHidden" in document ? a = "msvisibilitychange" : "webkitHidden" in document && (a = "webkitvisibilitychange"), a && document.addEventListener(a, Qa, !1)
    }
    var b = ["touchstart", "click"];
    navigator.userAgent.match(/android/gi) && (b = ["touchstart"]), b.forEach(function(a) {
      ib.controlsLeft.forEach(function(b) {
        b.addEventListener(a, Ia, !1)
      }), ib.controlsRight.forEach(function(b) {
        b.addEventListener(a, Ja, !1)
      }), ib.controlsUp.forEach(function(b) {
        b.addEventListener(a, Ka, !1)
      }), ib.controlsDown.forEach(function(b) {
        b.addEventListener(a, La, !1)
      }), ib.controlsPrev.forEach(function(b) {
        b.addEventListener(a, Ma, !1)
      }), ib.controlsNext.forEach(function(b) {
        b.addEventListener(a, Na, !1)
      })
    })
  }

  function n() {
    ob = !1, document.removeEventListener("keydown", za, !1), window.removeEventListener("hashchange", Oa, !1), window.removeEventListener("resize", Pa, !1), ib.wrapper.removeEventListener("touchstart", Aa, !1), ib.wrapper.removeEventListener("touchmove", Ba, !1), ib.wrapper.removeEventListener("touchend", Ca, !1), window.navigator.pointerEnabled ? (ib.wrapper.removeEventListener("pointerdown", Da, !1), ib.wrapper.removeEventListener("pointermove", Ea, !1), ib.wrapper.removeEventListener("pointerup", Fa, !1)) : window.navigator.msPointerEnabled && (ib.wrapper.removeEventListener("MSPointerDown", Da, !1), ib.wrapper.removeEventListener("MSPointerMove", Ea, !1), ib.wrapper.removeEventListener("MSPointerUp", Fa, !1)), eb.progress && ib.progress && ib.progress.removeEventListener("click", Ha, !1), ["touchstart", "click"].forEach(function(a) {
      ib.controlsLeft.forEach(function(b) {
        b.removeEventListener(a, Ia, !1)
      }), ib.controlsRight.forEach(function(b) {
        b.removeEventListener(a, Ja, !1)
      }), ib.controlsUp.forEach(function(b) {
        b.removeEventListener(a, Ka, !1)
      }), ib.controlsDown.forEach(function(b) {
        b.removeEventListener(a, La, !1)
      }), ib.controlsPrev.forEach(function(b) {
        b.removeEventListener(a, Ma, !1)
      }), ib.controlsNext.forEach(function(b) {
        b.removeEventListener(a, Na, !1)
      })
    })
  }

  function o(a, b) {
    for (var c in b) a[c] = b[c]
  }

  function p(a) {
    return Array.prototype.slice.call(a)
  }

  function q(a, b) {
    var c = a.x - b.x,
      d = a.y - b.y;
    return Math.sqrt(c * c + d * d)
  }

  function r(a, b) {
    a.style.WebkitTransform = b, a.style.MozTransform = b, a.style.msTransform = b, a.style.OTransform = b, a.style.transform = b
  }

  function s(a) {
    var b = document.createElement("style");
    b.type = "text/css", b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a)), document.getElementsByTagName("head")[0].appendChild(b)
  }

  function t(a) {
    var b = 0;
    if (a) {
      var c = 0;
      p(a.childNodes).forEach(function(a) {
        "number" == typeof a.offsetTop && a.style && ("absolute" === window.getComputedStyle(a).position && (c += 1), b = Math.max(b, a.offsetTop + a.offsetHeight))
      }), 0 === c && (b = a.offsetHeight)
    }
    return b
  }

  function u(a, b) {
    if (b = b || 0, a) {
      var c, d = a.style.height;
      return a.style.height = "0px", c = b - a.parentNode.offsetHeight, a.style.height = d + "px", c
    }
    return b
  }

  function v() {
    return /print-pdf/gi.test(window.location.search)
  }

  function w() {
    eb.hideAddressBar && $a && (window.addEventListener("load", x, !1), window.addEventListener("orientationchange", x, !1))
  }

  function x() {
    setTimeout(function() {
      window.scrollTo(0, 1)
    }, 10)
  }

  function y(a, b) {
    var c = document.createEvent("HTMLEvents", 1, 2);
    c.initEvent(a, !0, !0), o(c, b), ib.wrapper.dispatchEvent(c)
  }

  function z() {
    if (jb.transforms3d && !("msPerspective" in document.body.style))
      for (var a = document.querySelectorAll(ab + " a:not(.image)"), b = 0, c = a.length; c > b; b++) {
        var d = a[b];
        if (d.textContent && !d.querySelector("*") && (!d.className || !d.classList.contains(d, "roll"))) {
          var e = document.createElement("span");
          e.setAttribute("data-title", d.text), e.innerHTML = d.innerHTML, d.classList.add("roll"), d.innerHTML = "", d.appendChild(e)
        }
      }
  }

  function A() {
    for (var a = document.querySelectorAll(ab + " a.roll"), b = 0, c = a.length; c > b; b++) {
      var d = a[b],
        e = d.querySelector("span");
      e && (d.classList.remove("roll"), d.innerHTML = e.innerHTML)
    }
  }

  function B(a) {
    var b = p(document.querySelectorAll(a ? a : "a"));
    b.forEach(function(a) {
      /^(http|www)/gi.test(a.getAttribute("href")) && a.addEventListener("click", Sa, !1)
    })
  }

  function C() {
    var a = p(document.querySelectorAll("a"));
    a.forEach(function(a) {
      /^(http|www)/gi.test(a.getAttribute("href")) && a.removeEventListener("click", Sa, !1)
    })
  }

  function D(a) {
    E(), ib.preview = document.createElement("div"), ib.preview.classList.add("preview-link-overlay"), ib.wrapper.appendChild(ib.preview), ib.preview.innerHTML = ["<header>", '<a class="close" href="#"><span class="icon"></span></a>', '<a class="external" href="' + a + '" target="_blank"><span class="icon"></span></a>', "</header>", '<div class="spinner"></div>', '<div class="viewport">', '<iframe src="' + a + '"></iframe>', "</div>"].join(""), ib.preview.querySelector("iframe").addEventListener("load", function(a) {
      ib.preview.classList.add("loaded")
    }, !1), ib.preview.querySelector(".close").addEventListener("click", function(a) {
      E(), a.preventDefault()
    }, !1), ib.preview.querySelector(".external").addEventListener("click", function(a) {
      E()
    }, !1), setTimeout(function() {
      ib.preview.classList.add("visible")
    }, 1)
  }

  function E() {
    ib.preview && (ib.preview.setAttribute("src", ""), ib.preview.parentNode.removeChild(ib.preview), ib.preview = null)
  }

  function F() {
    if (ib.wrapper && !v()) {
      var a = ib.wrapper.offsetWidth,
        b = ib.wrapper.offsetHeight;
      a -= b * eb.margin, b -= b * eb.margin;
      var c = eb.width,
        d = eb.height,
        e = 20;
      G(eb.width, eb.height, e), "string" == typeof c && /%$/.test(c) && (c = parseInt(c, 10) / 100 * a), "string" == typeof d && /%$/.test(d) && (d = parseInt(d, 10) / 100 * b), ib.slides.style.width = c + "px", ib.slides.style.height = d + "px", hb = Math.min(a / c, b / d), hb = Math.max(hb, eb.minScale), hb = Math.min(hb, eb.maxScale), "undefined" == typeof ib.slides.style.zoom || navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi) ? r(ib.slides, "translate(-50%, -50%) scale(" + hb + ") translate(50%, 50%)") : ib.slides.style.zoom = hb;
      for (var f = p(document.querySelectorAll(ab)), g = 0, h = f.length; h > g; g++) {
        var i = f[g];
        "none" !== i.style.display && (eb.center || i.classList.contains("center") ? i.classList.contains("stack") ? i.style.top = 0 : i.style.top = Math.max(-(t(i) / 2) - -d / 2) + "px" : i.style.top = "")
      }
      Z(), ba()
    }
  }

  function G(a, b, c) {
    p(ib.slides.querySelectorAll("section > .stretch")).forEach(function(d) {
      var e = u(d, b - 2 * c);
      if (/(img|video)/gi.test(d.nodeName)) {
        var f = d.naturalWidth || d.videoWidth,
          g = d.naturalHeight || d.videoHeight,
          h = Math.min(a / f, e / g);
        d.style.width = f * h + "px", d.style.height = g * h + "px"
      } else d.style.width = a + "px", d.style.height = e + "px"
    })
  }

  function H(a, b) {
    "object" == typeof a && "function" == typeof a.setAttribute && a.setAttribute("data-previous-indexv", b || 0)
  }

  function I(a) {
    if ("object" == typeof a && "function" == typeof a.setAttribute && a.classList.contains("stack")) {
      var b = a.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
      return parseInt(a.getAttribute(b) || 0, 10)
    }
    return 0
  }

  function J() {
    if (eb.overview) {
      pa();
      var a = ib.wrapper.classList.contains("overview"),
        b = window.innerWidth < 400 ? 1e3 : 2500;
      ib.wrapper.classList.add("overview"), ib.wrapper.classList.remove("overview-deactivating"), clearTimeout(mb), clearTimeout(nb), mb = setTimeout(function() {
        for (var c = document.querySelectorAll(bb), d = 0, e = c.length; e > d; d++) {
          var f = c[d],
            g = eb.rtl ? -105 : 105;
          if (f.setAttribute("data-index-h", d), r(f, "translateZ(-" + b + "px) translate(" + (d - Va) * g + "%, 0%)"), f.classList.contains("stack"))
            for (var h = f.querySelectorAll("section"), i = 0, j = h.length; j > i; i++) {
              var k = d === Va ? Wa : I(f),
                l = h[i];
              l.setAttribute("data-index-h", d), l.setAttribute("data-index-v", i), r(l, "translate(0%, " + 105 * (i - k) + "%)"), l.addEventListener("click", Ra, !0)
            } else f.addEventListener("click", Ra, !0)
        }
        Y(), F(), a || y("overviewshown", {
          indexh: Va,
          indexv: Wa,
          currentSlide: Ya
        })
      }, 10)
    }
  }

  function K() {
    eb.overview && (clearTimeout(mb), clearTimeout(nb), ib.wrapper.classList.remove("overview"), ib.wrapper.classList.add("overview-deactivating"), nb = setTimeout(function() {
      ib.wrapper.classList.remove("overview-deactivating")
    }, 1), p(document.querySelectorAll(ab)).forEach(function(a) {
      r(a, ""), a.removeEventListener("click", Ra, !0)
    }), T(Va, Wa), oa(), y("overviewhidden", {
      indexh: Va,
      indexv: Wa,
      currentSlide: Ya
    }))
  }

  function L(a) {
    "boolean" == typeof a ? a ? J() : K() : M() ? K() : J()
  }

  function M() {
    return ib.wrapper.classList.contains("overview")
  }

  function N(a) {
    return a = a ? a : Ya, a && a.parentNode && !!a.parentNode.nodeName.match(/section/i)
  }

  function O() {
    var a = document.body,
      b = a.requestFullScreen || a.webkitRequestFullscreen || a.webkitRequestFullScreen || a.mozRequestFullScreen || a.msRequestFullScreen;
    b && b.apply(a)
  }

  function P() {
    var a = ib.wrapper.classList.contains("paused");
    pa(), ib.wrapper.classList.add("paused"), a === !1 && y("paused")
  }

  function Q() {
    var a = ib.wrapper.classList.contains("paused");
    ib.wrapper.classList.remove("paused"), oa(), a && y("resumed")
  }

  function R() {
    S() ? Q() : P()
  }

  function S() {
    return ib.wrapper.classList.contains("paused")
  }

  function T(a, b, c, d) {
    Xa = Ya;
    var e = document.querySelectorAll(bb);
    void 0 === b && (b = I(e[a])), Xa && Xa.parentNode && Xa.parentNode.classList.contains("stack") && H(Xa.parentNode, Wa);
    var f = gb.concat();
    gb.length = 0;
    var g = Va || 0,
      h = Wa || 0;
    Va = X(bb, void 0 === a ? Va : a), Wa = X(cb, void 0 === b ? Wa : b), Y(), F();
    a: for (var i = 0, j = gb.length; j > i; i++) {
      for (var k = 0; k < f.length; k++)
        if (f[k] === gb[i]) {
          f.splice(k, 1);
          continue a
        }
      document.documentElement.classList.add(gb[i]), y(gb[i])
    }
    for (; f.length;) document.documentElement.classList.remove(f.pop());
    M() && J();
    var l = e[Va],
      m = l.querySelectorAll("section");
    Ya = m[Wa] || l, "undefined" != typeof c && la(c);
    var n = Va !== g || Wa !== h;
    n ? y("slidechanged", {
      indexh: Va,
      indexv: Wa,
      previousSlide: Xa,
      currentSlide: Ya,
      origin: d
    }) : Xa = null, Xa && (Xa.classList.remove("present"), document.querySelector(db).classList.contains("present") && setTimeout(function() {
      var a, b = p(document.querySelectorAll(bb + ".stack"));
      for (a in b) b[a] && H(b[a], 0)
    }, 0)), n && (fa(Xa), ea(Ya)), _(), Z(), aa(), ba(), $(), ia(), oa()
  }

  function U() {
    n(), m(), F(), pb = eb.autoSlide, oa(), j(), W(), _(), Z(), aa(!0), $()
  }

  function V() {
    var a = p(document.querySelectorAll(bb));
    a.forEach(function(a) {
      var b = p(a.querySelectorAll("section"));
      b.forEach(function(a, b) {
        b > 0 && (a.classList.remove("present"), a.classList.remove("past"), a.classList.add("future"))
      })
    })
  }

  function W() {
    var a = p(document.querySelectorAll(bb));
    a.forEach(function(a) {
      var b = p(a.querySelectorAll("section"));
      b.forEach(function(a, b) {
        ka(a.querySelectorAll(".fragment"))
      }), 0 === b.length && ka(a.querySelectorAll(".fragment"))
    })
  }

  function X(a, b) {
    var c = p(document.querySelectorAll(a)),
      d = c.length;
    if (d) {
      eb.loop && (b %= d, 0 > b && (b = d + b)), b = Math.max(Math.min(b, d - 1), 0);
      for (var e = 0; d > e; e++) {
        var f = c[e],
          g = eb.rtl && !N(f);
        if (f.classList.remove("past"), f.classList.remove("present"), f.classList.remove("future"), f.setAttribute("hidden", ""), b > e) {
          f.classList.add(g ? "future" : "past");
          for (var h = p(f.querySelectorAll(".fragment")); h.length;) {
            var i = h.pop();
            i.classList.add("visible"), i.classList.remove("current-fragment")
          }
        } else if (e > b) {
          f.classList.add(g ? "past" : "future");
          for (var j = p(f.querySelectorAll(".fragment.visible")); j.length;) {
            var k = j.pop();
            k.classList.remove("visible"), k.classList.remove("current-fragment")
          }
        }
        f.querySelector("section") && f.classList.add("stack")
      }
      c[b].classList.add("present"), c[b].removeAttribute("hidden");
      var l = c[b].getAttribute("data-state");
      l && (gb = gb.concat(l.split(" ")))
    } else b = 0;
    return b
  }

  function Y() {
    var a, b, c = p(document.querySelectorAll(bb)),
      d = c.length;
    if (d) {
      var e = M() ? 10 : eb.viewDistance;
      $a && (e = M() ? 6 : 1);
      for (var f = 0; d > f; f++) {
        var g = c[f],
          h = p(g.querySelectorAll("section")),
          i = h.length;
        if (a = Math.abs((Va - f) % (d - e)) || 0, g.style.display = a > e ? "none" : "block", i)
          for (var j = I(g), k = 0; i > k; k++) {
            var l = h[k];
            b = f === Va ? Math.abs(Wa - k) : Math.abs(k - j), l.style.display = a + b > e ? "none" : "block"
          }
      }
    }
  }

  function Z() {
    if (eb.progress && ib.progress) {
      var a = p(document.querySelectorAll(bb)),
        b = document.querySelectorAll(ab + ":not(.stack)").length,
        c = 0;
      a: for (var d = 0; d < a.length; d++) {
        for (var e = a[d], f = p(e.querySelectorAll("section")), g = 0; g < f.length; g++) {
          if (f[g].classList.contains("present")) break a;
          c++
        }
        if (e.classList.contains("present")) break;
        e.classList.contains("stack") === !1 && c++
      }
      ib.progressbar.style.width = c / (b - 1) * window.innerWidth + "px"
    }
  }

  function $() {
    if (eb.slideNumber && ib.slideNumber) {
      var a = Va;
      Wa > 0 && (a += " - " + Wa), ib.slideNumber.innerHTML = a
    }
  }

  function _() {
    var a = ca(),
      b = da();
    ib.controlsLeft.concat(ib.controlsRight).concat(ib.controlsUp).concat(ib.controlsDown).concat(ib.controlsPrev).concat(ib.controlsNext).forEach(function(a) {
      a.classList.remove("enabled"), a.classList.remove("fragmented")
    }), a.left && ib.controlsLeft.forEach(function(a) {
      a.classList.add("enabled")
    }), a.right && ib.controlsRight.forEach(function(a) {
      a.classList.add("enabled")
    }), a.up && ib.controlsUp.forEach(function(a) {
      a.classList.add("enabled")
    }), a.down && ib.controlsDown.forEach(function(a) {
      a.classList.add("enabled")
    }), (a.left || a.up) && ib.controlsPrev.forEach(function(a) {
      a.classList.add("enabled")
    }), (a.right || a.down) && ib.controlsNext.forEach(function(a) {
      a.classList.add("enabled")
    }), Ya && (b.prev && ib.controlsPrev.forEach(function(a) {
      a.classList.add("fragmented", "enabled")
    }), b.next && ib.controlsNext.forEach(function(a) {
      a.classList.add("fragmented", "enabled")
    }), N(Ya) ? (b.prev && ib.controlsUp.forEach(function(a) {
      a.classList.add("fragmented", "enabled")
    }), b.next && ib.controlsDown.forEach(function(a) {
      a.classList.add("fragmented", "enabled")
    })) : (b.prev && ib.controlsLeft.forEach(function(a) {
      a.classList.add("fragmented", "enabled")
    }), b.next && ib.controlsRight.forEach(function(a) {
      a.classList.add("fragmented", "enabled")
    })))
  }

  function aa(a) {
    var b = null,
      c = eb.rtl ? "future" : "past",
      d = eb.rtl ? "past" : "future";
    if (p(ib.background.childNodes).forEach(function(e, f) {
        Va > f ? e.className = "slide-background " + c : f > Va ? e.className = "slide-background " + d : (e.className = "slide-background present", b = e), (a || f === Va) && p(e.childNodes).forEach(function(a, c) {
          Wa > c ? a.className = "slide-background past" : c > Wa ? a.className = "slide-background future" : (a.className = "slide-background present", f === Va && (b = a))
        })
      }), b) {
      var e = Za ? Za.getAttribute("data-background-hash") : null,
        f = b.getAttribute("data-background-hash");
      f && f === e && b !== Za && ib.background.classList.add("no-transition"), Za = b
    }
    setTimeout(function() {
      ib.background.classList.remove("no-transition")
    }, 1)
  }

  function ba() {
    if (eb.parallaxBackgroundImage) {
      var a, b, c = document.querySelectorAll(bb),
        d = document.querySelectorAll(cb),
        e = ib.background.style.backgroundSize.split(" ");
      1 === e.length ? a = b = parseInt(e[0], 10) : (a = parseInt(e[0], 10), b = parseInt(e[1], 10));
      var f = ib.background.offsetWidth,
        g = c.length,
        h = -(a - f) / (g - 1) * Va,
        i = ib.background.offsetHeight,
        j = d.length,
        k = j > 0 ? -(b - i) / (j - 1) * Wa : 0;
      ib.background.style.backgroundPosition = h + "px " + k + "px"
    }
  }

  function ca() {
    var a = document.querySelectorAll(bb),
      b = document.querySelectorAll(cb),
      c = {
        left: Va > 0 || eb.loop,
        right: Va < a.length - 1 || eb.loop,
        up: Wa > 0,
        down: Wa < b.length - 1
      };
    if (eb.rtl) {
      var d = c.left;
      c.left = c.right, c.right = d
    }
    return c
  }

  function da() {
    if (Ya && eb.fragments) {
      var a = Ya.querySelectorAll(".fragment"),
        b = Ya.querySelectorAll(".fragment:not(.visible)");
      return {
        prev: a.length - b.length > 0,
        next: !!b.length
      }
    }
    return {
      prev: !1,
      next: !1
    }
  }

  function ea(a) {
    a && !ga() && (p(a.querySelectorAll("video, audio")).forEach(function(a) {
      a.hasAttribute("data-autoplay") && a.play()
    }), p(a.querySelectorAll("iframe")).forEach(function(a) {
      a.contentWindow.postMessage("slide:start", "*")
    }), p(a.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(a) {
      a.hasAttribute("data-autoplay") && a.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
    }))
  }

  function fa(a) {
    a && (p(a.querySelectorAll("video, audio")).forEach(function(a) {
      a.hasAttribute("data-ignore") || a.pause()
    }), p(a.querySelectorAll("iframe")).forEach(function(a) {
      a.contentWindow.postMessage("slide:stop", "*")
    }), p(a.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(a) {
      a.hasAttribute("data-ignore") || "function" != typeof a.contentWindow.postMessage || a.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
    }))
  }

  function ga() {
    return !!window.location.search.match(/receiver/gi)
  }

  function ha() {
    var a = window.location.hash,
      b = a.slice(2).split("/"),
      c = a.replace(/#|\//gi, "");
    if (isNaN(parseInt(b[0], 10)) && c.length) {
      var d = document.querySelector("#" + c);
      if (d) {
        var e = Reveal.getIndices(d);
        T(e.h, e.v)
      } else T(Va || 0, Wa || 0)
    } else {
      var f = parseInt(b[0], 10) || 0,
        g = parseInt(b[1], 10) || 0;
      (f !== Va || g !== Wa) && T(f, g)
    }
  }

  function ia(a) {
    if (eb.history)
      if (clearTimeout(lb), "number" == typeof a) lb = setTimeout(ia, a);
      else {
        var b = "/";
        Ya && "string" == typeof Ya.getAttribute("id") ? b = "/" + Ya.getAttribute("id") : ((Va > 0 || Wa > 0) && (b += Va), Wa > 0 && (b += "/" + Wa)), window.location.hash = b
      }
  }

  function ja(a) {
    var b, c = Va,
      d = Wa;
    if (a) {
      var e = N(a),
        f = e ? a.parentNode : a,
        g = p(document.querySelectorAll(bb));
      c = Math.max(g.indexOf(f), 0), e && (d = Math.max(p(a.parentNode.querySelectorAll("section")).indexOf(a), 0))
    }
    if (!a && Ya) {
      var h = Ya.querySelectorAll(".fragment").length > 0;
      if (h) {
        var i = Ya.querySelectorAll(".fragment.visible");
        b = i.length - 1
      }
    }
    return {
      h: c,
      v: d,
      f: b
    }
  }

  function ka(a) {
    a = p(a);
    var b = [],
      c = [],
      d = [];
    a.forEach(function(a, d) {
      if (a.hasAttribute("data-fragment-index")) {
        var e = parseInt(a.getAttribute("data-fragment-index"), 10);
        b[e] || (b[e] = []), b[e].push(a)
      } else c.push([a])
    }), b = b.concat(c);
    var e = 0;
    return b.forEach(function(a) {
      a.forEach(function(a) {
        d.push(a), a.setAttribute("data-fragment-index", e)
      }), e++
    }), d
  }

  function la(a, b) {
    if (Ya && eb.fragments) {
      var c = ka(Ya.querySelectorAll(".fragment"));
      if (c.length) {
        if ("number" != typeof a) {
          var d = ka(Ya.querySelectorAll(".fragment.visible")).pop();
          a = d ? parseInt(d.getAttribute("data-fragment-index") || 0, 10) : -1
        }
        "number" == typeof b && (a += b);
        var e = [],
          f = [];
        return p(c).forEach(function(b, c) {
          b.hasAttribute("data-fragment-index") && (c = parseInt(b.getAttribute("data-fragment-index"), 10)), a >= c ? (b.classList.contains("visible") || e.push(b), b.classList.add("visible"), b.classList.remove("current-fragment"), c === a && b.classList.add("current-fragment")) : (b.classList.contains("visible") && f.push(b), b.classList.remove("visible"), b.classList.remove("current-fragment"))
        }), f.length && y("fragmenthidden", {
          fragment: f[0],
          fragments: f
        }), e.length && y("fragmentshown", {
          fragment: e[0],
          fragments: e
        }), _(), !(!e.length && !f.length)
      }
    }
    return !1
  }

  function ma() {
    return la(null, 1)
  }

  function na() {
    return la(null, -1)
  }

  function oa() {
    if (pa(), Ya) {
      var a = Ya.parentNode ? Ya.parentNode.getAttribute("data-autoslide") : null,
        b = Ya.getAttribute("data-autoslide");
      pb = b ? parseInt(b, 10) : a ? parseInt(a, 10) : eb.autoSlide, p(Ya.querySelectorAll("video, audio")).forEach(function(a) {
        a.hasAttribute("data-autoplay") && pb && 1e3 * a.duration > pb && (pb = 1e3 * a.duration + 1e3)
      }), !pb || sb || S() || M() || Reveal.isLastSlide() && eb.loop !== !0 || (qb = setTimeout(xa, pb), rb = Date.now()), _a && _a.setPlaying(-1 !== qb)
    }
  }

  function pa() {
    clearTimeout(qb), qb = -1
  }

  function qa() {
    sb = !0, clearTimeout(qb), _a && _a.setPlaying(!1)
  }

  function ra() {
    sb = !1, oa()
  }

  function sa() {
    eb.rtl ? (M() || ma() === !1) && ca().left && T(Va + 1) : (M() || na() === !1) && ca().left && T(Va - 1)
  }

  function ta() {
    eb.rtl ? (M() || na() === !1) && ca().right && T(Va - 1) : (M() || ma() === !1) && ca().right && T(Va + 1)
  }

  function ua() {
    (M() || na() === !1) && ca().up && T(Va, Wa - 1)
  }

  function va() {
    (M() || ma() === !1) && ca().down && T(Va, Wa + 1)
  }

  function wa() {
    if (na() === !1)
      if (ca().up) ua();
      else {
        var a = document.querySelector(bb + ".past:nth-child(" + Va + ")");
        if (a) {
          var b = a.querySelectorAll("section").length - 1 || void 0,
            c = Va - 1;
          T(c, b)
        }
      }
  }

  function xa() {
    ma() === !1 && (ca().down ? va() : ta()), oa()
  }

  function ya(a) {
    eb.autoSlideStoppable && qa()
  }

  function za(a) {
    ya(a);
    var b = (document.activeElement, !(!document.activeElement || !document.activeElement.type && !document.activeElement.href && "inherit" === document.activeElement.contentEditable));
    if (!(b || a.shiftKey && 32 !== a.keyCode || a.altKey || a.ctrlKey || a.metaKey)) {
      if (S() && -1 === [66, 190, 191].indexOf(a.keyCode)) return !1;
      var c = !1;
      if ("object" == typeof eb.keyboard)
        for (var d in eb.keyboard)
          if (parseInt(d, 10) === a.keyCode) {
            var e = eb.keyboard[d];
            "function" == typeof e ? e.apply(null, [a]) : "string" == typeof e && "function" == typeof Reveal[e] && Reveal[e].call(), c = !0
          }
      if (c === !1) switch (c = !0, a.keyCode) {
        case 80:
        case 33:
          wa();
          break;
        case 78:
        case 34:
          xa();
          break;
        case 72:
        case 37:
          sa();
          break;
        case 76:
        case 39:
          ta();
          break;
        case 75:
        case 38:
          ua();
          break;
        case 74:
        case 40:
          va();
          break;
        case 36:
          T(0);
          break;
        case 35:
          T(Number.MAX_VALUE);
          break;
        case 32:
          M() ? K() : a.shiftKey ? wa() : xa();
          break;
        case 13:
          M() ? K() : c = !1;
          break;
        case 66:
        case 190:
        case 191:
          R();
          break;
        case 70:
          O();
          break;
        default:
          c = !1
      }
      c ? a.preventDefault() : 27 !== a.keyCode && 79 !== a.keyCode || !jb.transforms3d || (ib.preview ? E() : L(), a.preventDefault()), oa()
    }
  }

  function Aa(a) {
    tb.startX = a.touches[0].clientX, tb.startY = a.touches[0].clientY, tb.startCount = a.touches.length, 2 === a.touches.length && eb.overview && (tb.startSpan = q({
      x: a.touches[1].clientX,
      y: a.touches[1].clientY
    }, {
      x: tb.startX,
      y: tb.startY
    }))
  }

  function Ba(a) {
    if (tb.captured) navigator.userAgent.match(/android/gi) && a.preventDefault();
    else {
      ya(a);
      var b = a.touches[0].clientX,
        c = a.touches[0].clientY;
      if (2 === a.touches.length && 2 === tb.startCount && eb.overview) {
        var d = q({
          x: a.touches[1].clientX,
          y: a.touches[1].clientY
        }, {
          x: tb.startX,
          y: tb.startY
        });
        Math.abs(tb.startSpan - d) > tb.threshold && (tb.captured = !0, d < tb.startSpan ? J() : K()), a.preventDefault()
      } else if (1 === a.touches.length && 2 !== tb.startCount) {
        var e = b - tb.startX,
          f = c - tb.startY;
        e > tb.threshold && Math.abs(e) > Math.abs(f) ? (tb.captured = !0, sa()) : e < -tb.threshold && Math.abs(e) > Math.abs(f) ? (tb.captured = !0, ta()) : f > tb.threshold ? (tb.captured = !0, ua()) : f < -tb.threshold && (tb.captured = !0, va()), eb.embedded ? (tb.captured || N(Ya)) && a.preventDefault() : a.preventDefault()
      }
    }
  }

  function Ca(a) {
    tb.captured = !1
  }

  function Da(a) {
    a.pointerType === a.MSPOINTER_TYPE_TOUCH && (a.touches = [{
      clientX: a.clientX,
      clientY: a.clientY
    }], Aa(a))
  }

  function Ea(a) {
    a.pointerType === a.MSPOINTER_TYPE_TOUCH && (a.touches = [{
      clientX: a.clientX,
      clientY: a.clientY
    }], Ba(a))
  }

  function Fa(a) {
    a.pointerType === a.MSPOINTER_TYPE_TOUCH && (a.touches = [{
      clientX: a.clientX,
      clientY: a.clientY
    }], Ca(a))
  }

  function Ga(a) {
    if (Date.now() - kb > 600) {
      kb = Date.now();
      var b = a.detail || -a.wheelDelta;
      b > 0 ? xa() : wa()
    }
  }

  function Ha(a) {
    ya(a), a.preventDefault();
    var b = p(document.querySelectorAll(bb)).length,
      c = Math.floor(a.clientX / ib.wrapper.offsetWidth * b);
    T(c)
  }

  function Ia(a) {
    a.preventDefault(), ya(), sa()
  }

  function Ja(a) {
    a.preventDefault(), ya(), ta()
  }

  function Ka(a) {
    a.preventDefault(), ya(), ua()
  }

  function La(a) {
    a.preventDefault(), ya(), va()
  }

  function Ma(a) {
    a.preventDefault(), ya(), wa()
  }

  function Na(a) {
    a.preventDefault(), ya(), xa()
  }

  function Oa(a) {
    ha()
  }

  function Pa(a) {
    F()
  }

  function Qa(a) {
    var b = document.webkitHidden || document.msHidden || document.hidden;
    b === !1 && document.activeElement !== document.body && (document.activeElement.blur(), document.body.focus())
  }

  function Ra(a) {
    if (ob && M()) {
      a.preventDefault();
      for (var b = a.target; b && !b.nodeName.match(/section/gi);) b = b.parentNode;
      if (b && !b.classList.contains("disabled") && (K(), b.nodeName.match(/section/gi))) {
        var c = parseInt(b.getAttribute("data-index-h"), 10),
          d = parseInt(b.getAttribute("data-index-v"), 10);
        T(c, d)
      }
    }
  }

  function Sa(a) {
    var b = a.target.getAttribute("href");
    b && (D(b), a.preventDefault())
  }

  function Ta(a) {
    Reveal.isLastSlide() && eb.loop === !1 ? (T(0, 0), ra()) : sb ? ra() : qa()
  }

  function Ua(a, b) {
    this.diameter = 50, this.thickness = 3, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = a, this.progressCheck = b, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render()
  }
  var Va, Wa, Xa, Ya, Za, $a, _a, ab = ".reveal .slides section",
    bb = ".reveal .slides>section",
    cb = ".reveal .slides>section.present>section",
    db = ".reveal .slides>section:first-of-type",
    eb = {
      width: 960,
      height: 700,
      margin: .1,
      minScale: .2,
      maxScale: 1.5,
      controls: !0,
      progress: !0,
      slideNumber: !1,
      history: !1,
      keyboard: !0,
      keyboardCondition: null,
      overview: !0,
      center: !0,
      touch: !0,
      loop: !1,
      rtl: !1,
      fragments: !0,
      embedded: !1,
      help: !0,
      pause: !0,
      autoSlide: 0,
      autoSlideStoppable: !0,
      mouseWheel: !1,
      rollingLinks: !1,
      hideAddressBar: !0,
      previewLinks: !1,
      postMessage: !0,
      postMessageEvents: !1,
      focusBodyOnPageVisibilityChange: !0,
      transition: "slide",
      transitionSpeed: "default",
      backgroundTransition: "fade",
      parallaxBackgroundImage: "",
      parallaxBackgroundSize: "",
      parallaxBackgroundHorizontal: null,
      parallaxBackgroundVertical: null,
      viewDistance: 3,
      dependencies: []
    },
    fb = !1,
    gb = [],
    hb = 1,
    ib = {},
    jb = {},
    kb = 0,
    lb = 0,
    mb = 0,
    nb = 0,
    ob = !1,
    pb = 0,
    qb = 0,
    rb = -1,
    sb = !1,
    tb = {
      startX: 0,
      startY: 0,
      startSpan: 0,
      startCount: 0,
      captured: !1,
      threshold: 40
    };
  return Ua.prototype.setPlaying = function(a) {
    var b = this.playing;
    this.playing = a, !b && this.playing ? this.animate() : this.render()
  }, Ua.prototype.animate = function() {
    var a = this.progress;
    this.progress = this.progressCheck(), a > .8 && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && jb.requestAnimationFrameMethod.call(window, this.animate.bind(this))
  }, Ua.prototype.render = function() {
    var a = this.playing ? this.progress : 0,
      b = this.diameter / 2 - this.thickness,
      c = this.diameter / 2,
      d = this.diameter / 2,
      e = 14;
    this.progressOffset += .1 * (1 - this.progressOffset);
    var f = -Math.PI / 2 + a * (2 * Math.PI),
      g = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
    this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(c, d, b + 2, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(c, d, b, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#666", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(c, d, b, g, f, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(c - e / 2, d - e / 2), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, e / 2 - 2, e), this.context.fillRect(e / 2 + 2, 0, e / 2 - 2, e)) : (this.context.beginPath(), this.context.translate(2, 0), this.context.moveTo(0, 0), this.context.lineTo(e - 2, e / 2), this.context.lineTo(0, e), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore()
  }, Ua.prototype.on = function(a, b) {
    this.canvas.addEventListener(a, b, !1)
  }, Ua.prototype.off = function(a, b) {
    this.canvas.removeEventListener(a, b, !1)
  }, Ua.prototype.destroy = function() {
    this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas)
  }, {
    initialize: a,
    configure: l,
    sync: U,
    slide: T,
    left: sa,
    right: ta,
    up: ua,
    down: va,
    prev: wa,
    next: xa,
    navigateFragment: la,
    prevFragment: na,
    nextFragment: ma,
    navigateTo: T,
    navigateLeft: sa,
    navigateRight: ta,
    navigateUp: ua,
    navigateDown: va,
    navigatePrev: wa,
    navigateNext: xa,
    layout: F,
    availableRoutes: ca,
    availableFragments: da,
    toggleOverview: L,
    togglePause: R,
    isOverview: M,
    isPaused: S,
    addEventListeners: m,
    removeEventListeners: n,
    getIndices: ja,
    getSlide: function(a, b) {
      var c = document.querySelectorAll(bb)[a],
        d = c && c.querySelectorAll("section");
      return "undefined" != typeof b ? d ? d[b] : void 0 : c
    },
    getPreviousSlide: function() {
      return Xa
    },
    getCurrentSlide: function() {
      return Ya
    },
    getScale: function() {
      return hb
    },
    getConfig: function() {
      return eb
    },
    getQueryHash: function() {
      var a = {};
      location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, function(b) {
        a[b.split("=").shift()] = b.split("=").pop()
      });
      for (var b in a) {
        var c = a[b];
        a[b] = unescape(c), "null" === c ? a[b] = null : "true" === c ? a[b] = !0 : "false" === c ? a[b] = !1 : c.match(/^\d+$/) && (a[b] = parseFloat(c))
      }
      return a
    },
    isFirstSlide: function() {
      return null == document.querySelector(ab + ".past") ? !0 : !1
    },
    isLastSlide: function() {
      return Ya ? Ya.nextElementSibling ? !1 : N(Ya) && Ya.parentNode.nextElementSibling ? !1 : !0 : !1
    },
    isReady: function() {
      return fb
    },
    addEventListener: function(a, b, c) {
      "addEventListener" in window && (ib.wrapper || document.querySelector(".reveal")).addEventListener(a, b, c)
    },
    removeEventListener: function(a, b, c) {
      "addEventListener" in window && (ib.wrapper || document.querySelector(".reveal")).removeEventListener(a, b, c)
    }
  }
}();
! function(a) {
  function b() {
    n || (n = !0, i(p, function(a) {
      l(a)
    }))
  }

  function c(b, c) {
    var d = a.createElement("script");
    d.type = "text/" + (b.type || "javascript"), d.src = b.src || b, d.async = !1, d.onreadystatechange = d.onload = function() {
      var a = d.readyState;
      !c.done && (!a || /loaded|complete/.test(a)) && (c.done = !0, c())
    }, (a.body || o).appendChild(d)
  }

  function d(a, b) {
    return a.state == z ? b && b() : a.state == y ? v.ready(a.name, b) : a.state == x ? a.onpreload.push(function() {
      d(a, b)
    }) : (a.state = y, void c(a.url, function() {
      a.state = z, b && b(), i(r[a.name], function(a) {
        l(a)
      }), g() && n && i(r.ALL, function(a) {
        l(a)
      })
    }))
  }

  function e(a, b) {
    void 0 === a.state && (a.state = x, a.onpreload = [], c({
      src: a.url,
      type: "cache"
    }, function() {
      f(a)
    }))
  }

  function f(a) {
    a.state = w, i(a.onpreload, function(a) {
      a.call()
    })
  }

  function g(a) {
    a = a || s;
    var b;
    for (var c in a) {
      if (a.hasOwnProperty(c) && a[c].state != z) return !1;
      b = !0
    }
    return b
  }

  function h(a) {
    return "[object Function]" == Object.prototype.toString.call(a)
  }

  function i(a, b) {
    if (a) {
      "object" == typeof a && (a = [].slice.call(a));
      for (var c = 0; c < a.length; c++) b.call(a, a[c], c)
    }
  }

  function j(a) {
    var b;
    if ("object" == typeof a)
      for (var c in a) a[c] && (b = {
        name: c,
        url: a[c]
      });
    else b = {
      name: k(a),
      url: a
    };
    var d = s[b.name];
    return d && d.url === b.url ? d : (s[b.name] = b, b)
  }

  function k(a) {
    var b = a.split("/"),
      c = b[b.length - 1],
      d = c.indexOf("?");
    return -1 != d ? c.substring(0, d) : c
  }

  function l(a) {
    a._done || (a(), a._done = 1)
  }
  var m, n, o = a.documentElement,
    p = [],
    q = [],
    r = {},
    s = {},
    t = a.createElement("script").async === !0 || "MozAppearance" in a.documentElement.style || window.opera,
    u = window.head_conf && head_conf.head || "head",
    v = window[u] = window[u] || function() {
      v.ready.apply(null, arguments)
    },
    w = 1,
    x = 2,
    y = 3,
    z = 4;
  if (t ? v.js = function() {
      var a = arguments,
        b = a[a.length - 1],
        c = {};
      return h(b) || (b = null), i(a, function(e, f) {
        e != b && (e = j(e), c[e.name] = e, d(e, b && f == a.length - 2 ? function() {
          g(c) && l(b)
        } : null))
      }), v
    } : v.js = function() {
      var a = arguments,
        b = [].slice.call(a, 1),
        c = b[0];
      return m ? (c ? (i(b, function(a) {
        h(a) || e(j(a))
      }), d(j(a[0]), h(c) ? c : function() {
        v.js.apply(null, b)
      })) : d(j(a[0])), v) : (q.push(function() {
        v.js.apply(null, a)
      }), v)
    }, v.ready = function(b, c) {
      if (b == a) return n ? l(c) : p.push(c), v;
      if (h(b) && (c = b, b = "ALL"), "string" != typeof b || !h(c)) return v;
      var d = s[b];
      if (d && d.state == z || "ALL" == b && g() && n) return l(c), v;
      var e = r[b];
      return e ? e.push(c) : e = r[b] = [c], v
    }, v.ready(a, function() {
      g() && i(r.ALL, function(a) {
        l(a)
      }), v.feature && v.feature("domloaded", !0)
    }), window.addEventListener) a.addEventListener("DOMContentLoaded", b, !1), window.addEventListener("load", b, !1);
  else if (window.attachEvent) {
    a.attachEvent("onreadystatechange", function() {
      "complete" === a.readyState && b()
    });
    var A = 1;
    try {
      A = window.frameElement
    } catch (B) {}!A && o.doScroll && function() {
      try {
        o.doScroll("left"), b()
      } catch (a) {
        return void setTimeout(arguments.callee, 1)
      }
    }(), window.attachEvent("onload", b)
  }!a.readyState && a.addEventListener && (a.readyState = "loading", a.addEventListener("DOMContentLoaded", handler = function() {
    a.removeEventListener("DOMContentLoaded", handler, !1), a.readyState = "complete"
  }, !1)), setTimeout(function() {
    m = !0, i(q, function(a) {
      a()
    })
  }, 300)
}(document), document.createElement("header"), document.createElement("nav"), document.createElement("section"), document.createElement("article"), document.createElement("aside"), document.createElement("footer"), document.createElement("hgroup"),
  function() {
    "use strict";

    function a() {
      var a = {
        version: "1.0.8",
        defaultOkLabel: "Ok",
        okLabel: "Ok",
        defaultCancelLabel: "Cancel",
        cancelLabel: "Cancel",
        defaultMaxLogItems: 2,
        maxLogItems: 2,
        promptValue: "",
        promptPlaceholder: "",
        closeLogOnClick: !1,
        closeLogOnClickDefault: !1,
        delay: 5e3,
        defaultDelay: 5e3,
        logContainerClass: "alertify-logs",
        logContainerDefaultClass: "alertify-logs",
        dialogs: {
          buttons: {
            holder: "<nav>{{buttons}}</nav>",
            ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
            cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>"
          },
          input: "<input type='text'>",
          message: "<p class='msg'>{{message}}</p>",
          log: "<div class='{{class}}'>{{message}}</div>"
        },
        defaultDialogs: {
          buttons: {
            holder: "<nav>{{buttons}}</nav>",
            ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
            cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>"
          },
          input: "<input type='text'>",
          message: "<p class='msg'>{{message}}</p>",
          log: "<div class='{{class}}'>{{message}}</div>"
        },
        build: function(a) {
          var b = this.dialogs.buttons.ok,
            c = "<div class='dialog'><div>" + this.dialogs.message.replace("{{message}}", a.message);
          return ("confirm" === a.type || "prompt" === a.type) && (b = this.dialogs.buttons.cancel + this.dialogs.buttons.ok), "prompt" === a.type && (c += this.dialogs.input), c = (c + this.dialogs.buttons.holder + "</div></div>").replace("{{buttons}}", b).replace("{{ok}}", this.okLabel).replace("{{cancel}}", this.cancelLabel)
        },
        setCloseLogOnClick: function(a) {
          this.closeLogOnClick = !!a
        },
        close: function(a, b) {
          this.closeLogOnClick && a.addEventListener("click", function(a) {
            c(a.srcElement)
          }), b = b && !isNaN(+b) ? +b : this.delay, 0 > b ? c(a) : b > 0 && setTimeout(function() {
            c(a)
          }, b)
        },
        dialog: function(a, b, c, d) {
          return this.setup({
            type: b,
            message: a,
            onOkay: c,
            onCancel: d
          })
        },
        log: function(a, b, c) {
          var d = document.querySelectorAll(".alertify-logs > div");
          if (d) {
            var e = d.length - this.maxLogItems;
            if (e >= 0)
              for (var f = 0, g = e + 1; g > f; f++) this.close(d[f], -1)
          }
          this.notify(a, b, c)
        },
        setLogPosition: function(a) {
          this.logContainerClass = "alertify-logs " + a
        },
        setupLogContainer: function() {
          var a = document.querySelector(".alertify-logs"),
            b = this.logContainerClass;
          return a || (a = document.createElement("div"), a.className = b, document.body.appendChild(a)), a.className !== b && (a.className = b), a
        },
        notify: function(b, c, d) {
          var e = this.setupLogContainer(),
            f = document.createElement("div");
          f.className = c || "default", a.logTemplateMethod ? f.innerHTML = a.logTemplateMethod(b) : f.innerHTML = b, "function" == typeof d && f.addEventListener("click", d), e.appendChild(f), setTimeout(function() {
            f.className += " show"
          }, 10), this.close(f, this.delay)
        },
        setup: function(a) {
          function b(b) {
            "function" != typeof b && (b = function() {}), e && e.addEventListener("click", function(e) {
              a.onOkay && "function" == typeof a.onOkay && (g ? a.onOkay(g.value, e) : a.onOkay(e)), b(g ? {
                buttonClicked: "ok",
                inputValue: g.value,
                event: e
              } : {
                buttonClicked: "ok",
                event: e
              }), c(d)
            }), f && f.addEventListener("click", function(e) {
              a.onCancel && "function" == typeof a.onCancel && a.onCancel(e), b({
                buttonClicked: "cancel",
                event: e
              }), c(d)
            })
          }
          var d = document.createElement("div");
          d.className = "alertify hide", d.innerHTML = this.build(a);
          var e = d.querySelector(".ok"),
            f = d.querySelector(".cancel"),
            g = d.querySelector("input"),
            h = d.querySelector("label");
          g && ("string" == typeof this.promptPlaceholder && (h ? h.textContent = this.promptPlaceholder : g.placeholder = this.promptPlaceholder), "string" == typeof this.promptValue && (g.value = this.promptValue));
          var i;
          return "function" == typeof Promise ? i = new Promise(b) : b(), document.body.appendChild(d), setTimeout(function() {
            d.classList.remove("hide"), g && a.type && "prompt" === a.type ? (g.select(), g.focus()) : e && e.focus()
          }, 100), i
        },
        okBtn: function(a) {
          return this.okLabel = a, this
        },
        setDelay: function(a) {
          var b = parseInt(a || 0, 10);
          return this.delay = isNaN(b) ? this.defultDelay : a, this
        },
        cancelBtn: function(a) {
          return this.cancelLabel = a, this
        },
        setMaxLogItems: function(a) {
          this.maxLogItems = parseInt(a || this.defaultMaxLogItems)
        },
        theme: function(a) {
          switch (a.toLowerCase()) {
            case "bootstrap":
              this.dialogs.buttons.ok = "<button class='ok btn btn-primary' tabindex='1'>{{ok}}</button>", this.dialogs.buttons.cancel = "<button class='cancel btn btn-default' tabindex='2'>{{cancel}}</button>", this.dialogs.input = "<input type='text' class='form-control'>";
              break;
            case "purecss":
              this.dialogs.buttons.ok = "<button class='ok pure-button' tabindex='1'>{{ok}}</button>", this.dialogs.buttons.cancel = "<button class='cancel pure-button' tabindex='2'>{{cancel}}</button>";
              break;
            case "mdl":
            case "material-design-light":
              this.dialogs.buttons.ok = "<button class='ok mdl-button mdl-js-button mdl-js-ripple-effect'  tabindex='1'>{{ok}}</button>", this.dialogs.buttons.cancel = "<button class='cancel mdl-button mdl-js-button mdl-js-ripple-effect' tabindex='2'>{{cancel}}</button>", this.dialogs.input = "<div class='mdl-textfield mdl-js-textfield'><input class='mdl-textfield__input'><label class='md-textfield__label'></label></div>";
              break;
            case "angular-material":
              this.dialogs.buttons.ok = "<button class='ok md-primary md-button' tabindex='1'>{{ok}}</button>", this.dialogs.buttons.cancel = "<button class='cancel md-button' tabindex='2'>{{cancel}}</button>", this.dialogs.input = "<div layout='column'><md-input-container md-no-float><input type='text'></md-input-container></div>";
              break;
            case "default":
            default:
              this.dialogs.buttons.ok = this.defaultDialogs.buttons.ok, this.dialogs.buttons.cancel = this.defaultDialogs.buttons.cancel, this.dialogs.input = this.defaultDialogs.input
          }
        },
        reset: function() {
          this.theme("default"), this.okBtn(this.defaultOkLabel), this.cancelBtn(this.defaultCancelLabel), this.setMaxLogItems(), this.promptValue = "", this.promptPlaceholder = "", this.delay = this.defaultDelay, this.setCloseLogOnClick(this.closeLogOnClickDefault), this.setLogPosition("bottom left"), this.logTemplateMethod = null
        },
        injectCSS: function() {
          if (!document.querySelector("#alertifyCSS")) {
            var a = document.getElementsByTagName("head")[0],
              b = document.createElement("style");
            b.type = "text/css", b.id = "alertifyCSS", b.innerHTML = "/* style.css */", a.insertBefore(b, a.firstChild)
          }
        },
        removeCSS: function() {
          var a = document.querySelector("#alertifyCSS");
          a && a.parentNode && a.parentNode.removeChild(a)
        }
      };
      return a.injectCSS(), {
        _$$alertify: a,
        reset: function() {
          return a.reset(), this
        },
        alert: function(b, c, d) {
          return a.dialog(b, "alert", c, d) || this
        },
        confirm: function(b, c, d) {
          return a.dialog(b, "confirm", c, d) || this
        },
        prompt: function(b, c, d) {
          return a.dialog(b, "prompt", c, d) || this
        },
        log: function(b, c) {
          return a.log(b, "default", c), this
        },
        theme: function(b) {
          return a.theme(b), this
        },
        success: function(b, c) {
          return a.log(b, "success", c), this
        },
        error: function(b, c) {
          return a.log(b, "error", c), this
        },
        cancelBtn: function(b) {
          return a.cancelBtn(b), this
        },
        okBtn: function(b) {
          return a.okBtn(b), this
        },
        delay: function(b) {
          return a.setDelay(b), this
        },
        placeholder: function(b) {
          return a.promptPlaceholder = b, this
        },
        defaultValue: function(b) {
          return a.promptValue = b, this
        },
        maxLogItems: function(b) {
          return a.setMaxLogItems(b), this
        },
        closeLogOnClick: function(b) {
          return a.setCloseLogOnClick(!!b), this
        },
        logPosition: function(b) {
          return a.setLogPosition(b || ""), this
        },
        setLogTemplate: function(b) {
          return a.logTemplateMethod = b, this
        },
        clearLogs: function() {
          return a.setupLogContainer().innerHTML = "", this
        },
        version: a.version
      }
    }
    var b = 500,
      c = function(a) {
        if (a) {
          var c = function() {
            a && a.parentNode && a.parentNode.removeChild(a)
          };
          a.classList.remove("show"), a.classList.add("hide"), a.addEventListener("transitionend", c), setTimeout(c, b)
        }
      };
    if ("undefined" != typeof module && module && module.exports) {
      module.exports = function() {
        return new a
      };
      var d = new a;
      for (var e in d) module.exports[e] = d[e]
    } else "function" == typeof define && define.amd ? define(function() {
      return new a
    }) : window.alertify = new a
  }();
