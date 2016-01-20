robocopy dist\ C:\inetpub\wwwroot\NW_Development\ /XD fonts images /S 
if %errorlevel% GTR 2000 (
ECHO Process started successfully on PID: %errorlevel%
SET %errorlevel% = 0
)
EXIT /B 0