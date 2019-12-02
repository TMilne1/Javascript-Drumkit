window.addEventListener('keydown', function (event){
    const audio = this.document.querySelector(`audio[data-key = "${event.keyCode}"]`)
    const key = this.document.querySelector(`.key[data-key = "${event.keyCode}"]`)
    key.classList.add("playing")
    if(!audio){return}
    audio.currentTime = 0;
    audio.play();
    const keys = this.document.querySelectorAll(".key");
    keys.forEach(item => item.addEventListener("transitionend", (e)=>{
        if (e.propertyName=="transform"){
            item.classList.remove("playing")
        }
    } ))
}) 