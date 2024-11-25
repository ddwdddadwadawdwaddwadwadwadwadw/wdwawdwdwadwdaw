const audio = document.getElementById('background-audio');

// Play audio on first click
document.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().catch(err => {
            console.error("Audio playback failed: ", err);
        });
    }
});
