const stars = document.getElementById('stars');
const meteorid = document.getElementById('meteorid');
const rocket = document.getElementById('rocket');
const text = document.getElementById('text');
const button = document.getElementById('button');
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');

audio.volume = 0.75;

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = '⏸'; // Pause icon
        playPauseButton.classList.remove('play-btn');
        playPauseButton.classList.add('pause-btn');
    } else {
        audio.pause();
        playPauseButton.textContent = '▶'; // Play icon
        playPauseButton.classList.remove('pause-btn');
        playPauseButton.classList.add('play-btn');
    }
});


window.addEventListener('scroll', ()=> {
    const value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    rocket.style.top = value * -0.5 + 'px';
    text.style.marginBottom = value * 1 + 'px';
    button.style.marginBottom = value * 1 + 'px';
});

document.getElementById("button").addEventListener("click", ()=> {
    document.getElementById("overlay").style.display = "block";
    
});

document.getElementById("button").addEventListener("click", ()=> {
    bukaHalaman();
});


function bukaHalaman() {
    // Mengarahkan ke halaman lain di folder
    window.location.href = 'letter.html';
}

