@echo off
@set /p a=���
if "%a%"=="" (
    echo ��Ų���Ϊ�ա�
    pause
) else if exist "C:\mq\����\xn-o1qx19eeqi.github.io\i\w\NFT\0\%a%.json" (
    start "" "C:\mq\app\code.lnk" "C:\mq\����\xn-o1qx19eeqi.github.io\i\w\NFT\0\%a%.json"
) else (
    copy C:\mq\����\xn-o1qx19eeqi.github.io\i\w\NFT\1\ģ��.json C:\mq\����\xn-o1qx19eeqi.github.io\i\w\NFT\0\
    rename C:\mq\����\xn-o1qx19eeqi.github.io\i\w\NFT\0\ģ��.json %a%.json
    start "" "C:\mq\app\code.lnk" "C:\mq\����\xn-o1qx19eeqi.github.io\i\w\NFT\0\%a%.json"
)
