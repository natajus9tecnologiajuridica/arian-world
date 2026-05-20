// ============================================
// ✨ SISTEMA DE PARTÍCULAS - OTIMIZADO
// ============================================

const particleCanvas = document.getElementById('particleCanvas');
const pCtx = particleCanvas.getContext('2d');

particleCanvas.width = window.innerWidth;
particleCanvas.height = window.innerHeight;

// Detectar se é celular/touch
const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
const isSmallScreen = window.innerWidth < 600;

window.addEventListener('resize', () => {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
});

let mouseX = 0;
let mouseY = 0;
let particles = [];

const particleColors = [
    '#c4b5fd',
    '#818cf8',
    '#86efac',
    '#fde68a',
    '#93c5fd',
    '#f0abfc',
    '#fff',
];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 3;
        this.speedY = (Math.random() - 0.5) * 3 - 1;
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
        this.gravity = 0.02;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.1;
    }

    update() {
        this.wobble += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobble) * 0.3;
        this.y += this.speedY;
        this.speedY += this.gravity;
        this.life -= this.decay;
        this.size *= 0.99;
    }

    draw() {
        pCtx.save();
        pCtx.globalAlpha = this.life;
        pCtx.fillStyle = this.color;
        pCtx.shadowBlur = 15;
        pCtx.shadowColor = this.color;
        pCtx.beginPath();
        pCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        pCtx.fill();
        pCtx.restore();
    }
}

// Cursor personalizado (só no desktop)
function drawCursor() {
    if (isMobile) return; // No celular não desenha cursor
    
    pCtx.save();
    pCtx.beginPath();
    pCtx.arc(mouseX, mouseY, 6, 0, Math.PI * 2);
    pCtx.fillStyle = 'rgba(196, 181, 253, 0.8)';
    pCtx.shadowBlur = 20;
    pCtx.shadowColor = '#c4b5fd';
    pCtx.fill();
    pCtx.beginPath();
    pCtx.arc(mouseX, mouseY, 3, 0, Math.PI * 2);
    pCtx.fillStyle = '#fff';
    pCtx.fill();
    pCtx.restore();
}

// ---- MOUSE (desktop) ----
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Menos partículas em telas pequenas
    const particleCount = isSmallScreen ? 1 : 3;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(mouseX, mouseY));
    }
});

document.addEventListener('click', (e) => {
    const count = isSmallScreen ? 10 : 20;
    for (let i = 0; i < count; i++) {
        const p = new Particle(e.clientX, e.clientY);
        p.speedX = (Math.random() - 0.5) * 8;
        p.speedY = (Math.random() - 0.5) * 8;
        p.size = Math.random() * 6 + 2;
        particles.push(p);
    }
});

// ---- TOUCH (celular) ----
document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    mouseX = touch.clientX;
    mouseY = touch.clientY;

    for (let i = 0; i < 2; i++) {
        particles.push(new Particle(mouseX, mouseY));
    }
}, { passive: true });

document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    for (let i = 0; i < 15; i++) {
        const p = new Particle(touch.clientX, touch.clientY);
        p.speedX = (Math.random() - 0.5) * 8;
        p.speedY = (Math.random() - 0.5) * 8;
        p.size = Math.random() * 6 + 2;
        particles.push(p);
    }
}, { passive: true });

function animateParticles() {
    pCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

    particles = particles.filter(p => p.life > 0);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    drawCursor();

    // Limite menor no celular
    const maxParticles = isSmallScreen ? 150 : 300;
    if (particles.length > maxParticles) {
        particles = particles.slice(-maxParticles);
    }

    requestAnimationFrame(animateParticles);
}

animateParticles();