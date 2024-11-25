const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

document.querySelectorAll('.pfp-box, .profile-pic, .social-icons a').forEach((element) => {
    element.addEventListener('mouseover', () => cursor.classList.add('cursor-hover'));
    element.addEventListener('mouseout', () => cursor.classList.remove('cursor-hover'));
});

const audio = document.getElementById('background-audio');
let isAudioPlayed = false;

document.addEventListener('click', () => {
    if (!isAudioPlayed) {
        audio.play();
        isAudioPlayed = true;
        alert('Audio started playing. Refresh to play again.');
    } else {
        alert('Audio already played. Refresh to play again.');
    }
});
