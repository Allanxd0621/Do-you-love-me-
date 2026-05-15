function noplaySound(){
    const noSound = document.getElementById('noAudio');

    noSound.pause();
    noSound.currentTime = 0;
     noSound.play();
}

document.getElementById('noBtn').onclick = function(){
    noplaySound();
}

function yesplaySound(){
    const yesAudio = document.getElementById('yesAudio');

    yesAudio.pause();
    yesAudio.play();
    yesAudio.currentTime = 0;
    
}



document.getElementById('yesBtn').onclick = function(){
    yesplaySound();
}
