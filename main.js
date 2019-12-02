
function playsound (event){
    const audio = this.document.querySelector(`audio[data-key = "${event.keyCode}"]`)
    const key = this.document.querySelector(`div[data-key = "${event.keyCode}"]`)
    if(!audio){return}

    key.classList.add("playing")

    audio.currentTime = 0;
    audio.play();

    const keys = this.document.querySelectorAll(".key");
    
    keys.forEach(item => item.addEventListener("transitionend", (e)=>{
        if (e.propertyName=="transform"){
            item.classList.remove("playing")
        }
    } ))
} 
window.addEventListener('keydown', playsound)