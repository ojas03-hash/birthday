function initCelebration() {
    const music = document.getElementById('song');
    music.play().catch(() => {
        console.log("Autoplay blocked. Click anywhere to play.");
    });
}

function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let parts = [];
    for(let i=0; i<100; i++) {
        parts.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            c: `hsl(${Math.random()*360}, 100%, 50%)`,
            v: Math.random() * 3 + 2
        });
    }
    function draw() {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        parts.forEach(p => {
            p.y += p.v;
            if(p.y > canvas.height) p.y = -10;
            ctx.fillStyle = p.c;
            ctx.fillRect(p.x, p.y, 8, 8);
        });
        requestAnimationFrame(draw);
    }
    draw();
}

function openGift(el, msg, imgPath) {
    document.getElementById('gift-modal').style.display = 'flex';
    document.getElementById('gift-text').innerText = msg;
    document.getElementById('gift-img').src = imgPath;
    el.style.visibility = 'hidden';
}

function pop(t) {
    const m = document.getElementById('pop-modal');
    document.getElementById('pop-text').innerText = t;
    m.style.display = 'flex';
}

window.onload = startConfetti;
