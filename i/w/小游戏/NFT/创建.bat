@echo off
@set /p a=编号
if "%a%"=="" (
    echo 编号不能为空。
    pause
) else if exist "C:\mq\博客\xn-o1qx19eeqi.github.io\i\w\NFT\0\%a%.json" (
    start "" "C:\mq\app\code.lnk" "C:\mq\博客\xn-o1qx19eeqi.github.io\i\w\NFT\0\%a%.json"
) else (
    copy C:\mq\博客\xn-o1qx19eeqi.github.io\i\w\NFT\1\模板.json C:\mq\博客\xn-o1qx19eeqi.github.io\i\w\NFT\0\
    rename C:\mq\博客\xn-o1qx19eeqi.github.io\i\w\NFT\0\模板.json %a%.json
    start "" "C:\mq\app\code.lnk" "C:\mq\博客\xn-o1qx19eeqi.github.io\i\w\NFT\0\%a%.json"
)
