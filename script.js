const playPauseBtn = document.querySelector('.play-pause-btn')
const video = document.querySelector('video')
const videoContainer = document.querySelector('.video-container')



document.addEventListener('keydown', e =>{
    console.log(e.key)
    switch(e.key.toLowerCase()){
        case " ":
        case "k":
           togglePlay()
           break        
    }
})


//  play/pause
function togglePlay(e){
    video.paused ? video.play() : video.pause() 
 }
 
playPauseBtn.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)

video.addEventListener("play", () => {
    videoContainer.classList.remove("paused")
})
video.addEventListener("pause", () => {
    videoContainer.classList.add("paused")
})
