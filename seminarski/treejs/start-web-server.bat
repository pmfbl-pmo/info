REM IMPORTANT: node.js have to be started prior to execution of this batch file!
REM IMPORTANT: install-web-server.bat have to be executed prior to execution of this batch file
cd %~dp0
node node_modules\http-server\bin\http-server -p8001
pause