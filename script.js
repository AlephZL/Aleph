const stars = document.getElementById('stars');
const meteorid = document.getElementById('meteorid');
const rocket = document.getElementById('rocket');
const text = document.getElementById('text');
const button = document.getElementById('button');

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

