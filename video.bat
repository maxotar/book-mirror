rmdir /S /Q images
mkdir images
7z e %USERPROFILE%\Downloads\pngs.tar -o.\images
cd images
ffmpeg -r 30 -f image2 -s 1080x1920 -i %%07d.png -vcodec libx264 -crf 17 -pix_fmt yuv420p output.mp4
rmdir /S /Q ..\video
mkdir ..\video
move output.mp4 ..\video
