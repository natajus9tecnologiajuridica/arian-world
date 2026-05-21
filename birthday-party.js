// ============================================
// 🎂 SISTEMA DE FESTA DE ANIVERSÁRIO
// ============================================

let isPartyActive = false;
let partyConfetti = [];
let partyBalloons = [];
let partyAnimationId = null;
let partyOverlay = null;
let birthdayMusicAudio = null;

// ============================================
// 🎬 INICIAR FESTA
// ============================================

function startBirthdayParty() {
    if (isPartyActive) return;
    isPartyActive = true;
    
    // Carrega música de aniversário
    birthdayMusicAudio = document.getElementById('birthdayMusic');
    if (birthdayMusicAudio) {
        birthdayMusicAudio.src = 'sounds/birthday.mp3';
        birthdayMusicAudio.volume = 0;
        birthdayMusicAudio.play().then(() => {
            // Fade in da música
            fadeInBirthdayMusic();
        }).catch(err => console.log('Não foi possível tocar a música:', err));
    }
    
    // Pausa a música lofi temporariamente
    if (typeof pauseMusicForParty === 'function') {
        pauseMusicForParty();
    } else if (window.lofiMusic) {
        window.lofiMusic.pause();
    }
    
    // Cria overlay festivo
    createPartyOverlay();
    
    // Muda animação do Arian
    setAction('birthday');
    
    // Atualiza status
    if (statusText) {
        statusText.textContent = '🎂 FESTA DE ANIVERSÁRIO! 🎉';
    }
    
    // Inicia confetes e balões
    initPartyEffects();
    animatePartyEffects();
    
    // Canta parabéns no chat
    singHappyBirthday();
    
    // Termina após 60 segundos
    setTimeout(() => {
        startCakeEating();
    }, 55000);
}

// ============================================
// 🎵 FADE IN/OUT MÚSICA
// ============================================

function fadeInBirthdayMusic() {
    if (!birthdayMusicAudio) return;
    const targetVolume = 0.4;
    const steps = 30;
    const stepTime = 2000 / steps;
    const volumeStep = targetVolume / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
        currentStep++;
        birthdayMusicAudio.volume = Math.min(volumeStep * currentStep, targetVolume);
        if (currentStep >= steps) clearInterval(interval);
    }, stepTime);
}

function fadeOutBirthdayMusic() {
    if (!birthdayMusicAudio) return;
    const startVolume = birthdayMusicAudio.volume;
    const steps = 20;
    const stepTime = 1500 / steps;
    const volumeStep = startVolume / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
        currentStep++;
        birthdayMusicAudio.volume = Math.max(startVolume - (volumeStep * currentStep), 0);
        if (currentStep >= steps) {
            clearInterval(interval);
            birthdayMusicAudio.pause();
        }
    }, stepTime);
}

// ============================================
// 🎨 OVERLAY FESTIVO
// ============================================

function createPartyOverlay() {
    partyOverlay = document.createElement('canvas');
    partyOverlay.id = 'partyOverlay';
    partyOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 500;
    `;
    partyOverlay.width = window.innerWidth;
    partyOverlay.height = window.innerHeight;
    document.body.appendChild(partyOverlay);
    
    // Banner de festa
    const banner = document.createElement('div');
    banner.id = 'partyBanner';
    banner.innerHTML = '🎉 🎂 FELIZ ANIVERSÁRIO ARIAN! 🎂 🎉';
    banner.style.cssText = `
        position: fixed;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #ec4899, #a855f7, #3b82f6);
        color: white;
        padding: 15px 30px;
        border-radius: 30px;
        font-family: 'Press Start 2P', cursive;
        font-size: 12px;
        z-index: 600;
        box-shadow: 0 0 40px rgba(236, 72, 153, 0.8);
        animation: bannerBounce 1s ease-in-out infinite;
        text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
        white-space: nowrap;
    `;
    document.body.appendChild(banner);
    
    const style = document.createElement('style');
    style.id = 'partyStyles';
    style.textContent = `
        @keyframes bannerBounce {
            0%, 100% { transform: translateX(-50%) translateY(0) scale(1); }
            50% { transform: translateX(-50%) translateY(-10px) scale(1.05); }
        }
        
        @media (max-width: 600px) {
            #partyBanner {
                font-size: 8px !important;
                padding: 10px 15px !important;
                top: 70px !important;
                max-width: 90%;
                white-space: normal !important;
                text-align: center;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// 🎊 CONFETES E BALÕES
// ============================================

class Confetti {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = -20;
        this.size = Math.random() * 8 + 5;
        this.speedX = (Math.random() - 0.5) * 4;
        this.speedY = Math.random() * 3 + 2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.2;
        this.colors = ['#ec4899', '#a855f7', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#fbbf24'];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.shape = Math.random() > 0.5 ? 'rect' : 'circle';
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        this.speedY += 0.05;
    }
    
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        
        if (this.shape === 'rect') {
            ctx.fillRect(-this.size / 2, -this.size / 4, this.size, this.size / 2);
        } else {
            ctx.beginPath();
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    isOffScreen() {
        return this.y > window.innerHeight + 20;
    }
}

class Balloon {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = window.innerHeight + 50;
        this.size = Math.random() * 20 + 25;
        this.speedY = Math.random() * 1 + 1;
        this.swayAmount = Math.random() * 30 + 10;
        this.swaySpeed = Math.random() * 0.02 + 0.01;
        this.swayOffset = Math.random() * Math.PI * 2;
        this.colors = ['#ec4899', '#a855f7', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.startX = this.x;
    }
    
    update() {
        this.y -= this.speedY;
        this.swayOffset += this.swaySpeed;
        this.x = this.startX + Math.sin(this.swayOffset) * this.swayAmount;
    }
    
    draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.size / 2, this.size / 1.7, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.ellipse(this.x - this.size / 5, this.y - this.size / 4, this.size / 6, this.size / 5, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x - 3, this.y + this.size / 1.7);
        ctx.lineTo(this.x + 3, this.y + this.size / 1.7);
        ctx.lineTo(this.x, this.y + this.size / 1.7 + 5);
        ctx.fill();
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + this.size / 1.7 + 5);
        for (let i = 0; i < 30; i++) {
            const yOffset = (i + 1) * 3;
            const xOffset = Math.sin(i * 0.3 + this.swayOffset) * 3;
            ctx.lineTo(this.x + xOffset, this.y + this.size / 1.7 + 5 + yOffset);
        }
        ctx.stroke();
        ctx.restore();
    }
    
    isOffScreen() {
        return this.y < -100;
    }
}

function initPartyEffects() {
    partyConfetti = [];
    partyBalloons = [];
    
    for (let i = 0; i < 50; i++) {
        const c = new Confetti();
        c.y = Math.random() * window.innerHeight;
        partyConfetti.push(c);
    }
    
    for (let i = 0; i < 5; i++) {
        partyBalloons.push(new Balloon());
    }
}

function animatePartyEffects() {
    if (!isPartyActive) return;
    
    const ctx = partyOverlay.getContext('2d');
    ctx.clearRect(0, 0, partyOverlay.width, partyOverlay.height);
    
    if (Math.random() > 0.5) {
        partyConfetti.push(new Confetti());
    }
    
    if (Math.random() > 0.97 && partyBalloons.length < 10) {
        partyBalloons.push(new Balloon());
    }
    
    partyConfetti = partyConfetti.filter(c => !c.isOffScreen());
    partyConfetti.forEach(c => {
        c.update();
        c.draw(ctx);
    });
    
    partyBalloons = partyBalloons.filter(b => !b.isOffScreen());
    partyBalloons.forEach(b => {
        b.update();
        b.draw(ctx);
    });
    
    partyAnimationId = requestAnimationFrame(animatePartyEffects);
}

// ============================================
// 🎵 CANTAR PARABÉNS BRASILEIRO
// ============================================

const BIRTHDAY_SONG = [
    { text: "🎵 <strong>Parabéns pra mim,</strong> 🎵", delay: 4500 },
    { text: "🎶 <strong>Nesta data querida,</strong> 🎶", delay: 4500 },
    { text: "🎵 <strong>Muitas felicidades,</strong> 🎵", delay: 4500 },
    { text: "🎶 <strong>Muitos anos de vida!</strong> 🎶", delay: 5000 },
    { text: "🎉🎉🎉 <strong>HOJE É DIA DE FESTA!</strong> 🎉🎉🎉", delay: 4500 },
    { text: "🎵 <strong>Cantam as nossas almas,</strong> 🎵", delay: 4500 },
    { text: "🎶 <strong>Para o Arian uma salva,</strong> 🎶", delay: 4500 },
    { text: "🎵 <strong>De muitas, muitas palmas!</strong> 👏👏👏", delay: 5000 },
    { text: "✨ <strong>VIVA O ARIAN! VIVA! 🎂✨</strong>", delay: 0 }
];

async function singHappyBirthday() {
    for (const line of BIRTHDAY_SONG) {
        await sleep(line.delay);
        if (!isPartyActive) break;
        addMessage(line.text);
    }
}

// ============================================
// 🎂 COMER O BOLO
// ============================================

async function startCakeEating() {
    if (!isPartyActive) return;
    
    // Para os efeitos visuais gradualmente
    addMessage("🥹 <strong>Agora o melhor: HORA DE COMER O BOLO!</strong>");
    
    await sleep(2000);
    
    // Muda animação para comendo bolo
    setAction('eatingCake');
    
    if (statusText) {
        statusText.textContent = '🎂 Comendo o bolo... NHAM!';
    }
    
    await sleep(2500);
    addMessage("🍰 <strong>Hmmmm que delícia!</strong>");
    
    await sleep(3000);
    addMessage("😋 <strong>NHAM NHAM NHAM!</strong>");
    
    await sleep(3500);
    addMessage("🥰 <strong>O melhor bolo do mundo!</strong>");
    
    await sleep(3000);
    
    // Termina a festa
    endBirthdayParty();
}

// ============================================
// 🏁 ENCERRAR FESTA
// ============================================

function endBirthdayParty() {
    if (!isPartyActive) return;
    isPartyActive = false;
    
    // Fade out da música de aniversário
    fadeOutBirthdayMusic();
    
    // Para animação
    if (partyAnimationId) {
        cancelAnimationFrame(partyAnimationId);
        partyAnimationId = null;
    }
    
    // Remove overlay com fade out
    if (partyOverlay) {
        partyOverlay.style.transition = 'opacity 3s ease';
        partyOverlay.style.opacity = '0';
        setTimeout(() => {
            partyOverlay.remove();
            partyOverlay = null;
        }, 3000);
    }
    
    // Remove banner
    const banner = document.getElementById('partyBanner');
    if (banner) {
        banner.style.transition = 'opacity 2s ease, transform 2s ease';
        banner.style.opacity = '0';
        banner.style.transform = 'translateX(-50%) translateY(-50px)';
        setTimeout(() => banner.remove(), 2000);
    }
    
    // Remove estilos
    const style = document.getElementById('partyStyles');
    if (style) style.remove();
    
    // Volta ao normal
    setTimeout(() => {
        setAction('idle');
        if (statusText) {
            statusText.textContent = '🌙 Parado sob a lua...';
        }
        
        // Volta a música lofi se estava tocando antes
        if (window.lofiMusic && window.lofiMusic.paused) {
            window.lofiMusic.play().catch(() => {});
        }
        
        // Mensagens fofas de agradecimento
        setTimeout(() => {
            addMessage("🥺 <strong>Aaawnn, obrigado por cantar pra mim!</strong>");
            setTimeout(() => {
                addMessage("💜 <strong>Esse foi o melhor aniversário da minha vida!</strong>");
                setTimeout(() => {
                    addMessage("🌟 <strong>Você é incrível! Volta sempre, tá?</strong> ✨");
                    setTimeout(() => {
                        addMessage("😊 <strong>Pode me pedir outras coisas agora!</strong> 💜");
                    }, 3000);
                }, 3500);
            }, 3000);
        }, 1500);
    }, 2000);
}

// ============================================
// 📱 RESIZE DO OVERLAY
// ============================================

window.addEventListener('resize', () => {
    if (partyOverlay) {
        partyOverlay.width = window.innerWidth;
        partyOverlay.height = window.innerHeight;
    }
});