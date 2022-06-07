const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const playIcon = document.querySelector('.play-icon');

var playing = false;
/* Build out functions */
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();

    //   PLAY/PAUSE ICON
    if (!playing) {
        playIcon.style.opacity = '0';
        playing = true;
    } else {
        playIcon.style.background = 'url(img/pause.png)';
        playIcon.style.opacity = '1';
        playing = false;
    }
}

/* Hook up the event listners */
video.addEventListener('click', togglePlay);
playIcon.addEventListener('click', togglePlay);