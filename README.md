# youtube-video-player-clone

# generating preview images
```
ffmpeg -i ./assets/Video.mp4 -vf fps=1/10 scale=120:-1 ./assets/previewImgs/preview%d.jp
```
