const playPauseBtn = document.querySelector('.play-pause-btn')
const video = document.querySelector('video')
const videoContainer = document.querySelector('.video-container')
const theaterBtn = document.querySelector('.theater-btn')
const miniPlayerBtn = document.querySelector('.mini-player-btn')
const fullScreenBtn = document.querySelector('.full-screen-btn')



document.addEventListener('keydown', e =>{
    console.log(e.key)
    switch(e.key.toLowerCase()){
        case " ":
        case "k":
           togglePlay()
           break
        case "f":
            toggleFullScreenMode()
            break      
            
        case "t":
            toggleTheaterMode()
            break 
            
        case "i":
            toggleMiniPlayerMode()    
            break            
    }
})

// View Modes
theaterBtn.addEventListener('click', toggleTheaterMode)
fullScreenBtn.addEventListener('click', toggleFullScreenMode)
miniPlayerBtn.addEventListener('click', toggleMiniPlayerMode)

function toggleTheaterMode(){
    videoContainer.classList.toggle('theater')
}

function toggleFullScreenMode(){
    if(document.fullscreenElement == null){
        videoContainer.requestFullscreen()

    }else{
        document.exitFullscreen()
        
    } 
}
document.addEventListener('fullscreenchange', (e)=> {
    videoContainer.classList.toggle('full-screen', document.fullscreenElement)
})

function toggleMiniPlayerMode(){
    if(videoContainer.classList.contains('mini-player')){
        document.exitPictureInPicture()

    }else{
        video.requestPictureInPicture()
    } 
}

video.addEventListener('enterpictureinpicture', ()=>{
    videoContainer.classList.add('mini-player')
})

video.addEventListener('leavepictureinpicture', ()=>{
    videoContainer.classList.remove('mini-player')
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
