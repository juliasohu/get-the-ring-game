// MUTE/UNMUTE BACKGROUND MUSIC //
document.addEventListener('DOMContentLoaded', () => {
    const muteButton = document.getElementById('mute-button');
    let backgroundMusic;
    let isLooping = true;
    let isPlaying = false;
    
    if (window.location.pathname.includes('game-over')) {
        backgroundMusic = new Audio('./audio/voice-of-sauron.mp3');
        backgroundMusic.volume = 0.4;
        isLooping = false;
        backgroundMusic.play()
    } else if (window.location.pathname.includes('winner')) {
        backgroundMusic = new Audio('./audio/winner-sound.wav');
        backgroundMusic.volume = 0.1
        isLooping = false;
        backgroundMusic.play()
    } else {
        backgroundMusic = new Audio('./audio/fantasy-medieval-epic-music.mp3');
        isLooping = true;
        document.addEventListener('keydown', () => {
            if (!isPlaying) {
                backgroundMusic.play();
                isPlaying = true;
        }})
    }
  
    backgroundMusic.loop = isLooping;
  
    let isMuted = false;
  
    if (muteButton) {
        muteButton.addEventListener('click', () => {
            if (isMuted) {
                backgroundMusic.muted = false;
                muteButton.style.backgroundImage = "url('./img/unmute.png')";
            } else {
                backgroundMusic.muted = true;
                muteButton.style.backgroundImage = "url('./img/mute.png')";
            }
            isMuted = !isMuted;
        });
    }
  })