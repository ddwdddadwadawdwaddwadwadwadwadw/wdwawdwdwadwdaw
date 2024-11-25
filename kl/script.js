
const audio = document.getElementById('background-audio');
let isAudioPlayed = false;


document.addEventListener('click', () => {
    const audio = document.getElementById('background-audio');
    if (audio.paused) {
        audio.play().catch(err => {
            console.error("Audio playback failed: ", err);
        });
    }
});
