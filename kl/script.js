
const audio = document.getElementById('background-audio');
let isAudioPlayed = false;


document.addEventListener('click', () => {
    if (!isAudioPlayed) {
        audio.play().catch(error => {
            console.error('Audio playback failed:', error);
        });
        isAudioPlayed = true;
        alert('Audio started playing. Refresh to play again.');
    } else {
        alert('Audio already played. Refresh to play again.');
    }
});
