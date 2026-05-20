// ============================================
// 🎵 SISTEMA DE MÚSICA - VERSÃO B (ARQUIVOS LOCAIS)
// ============================================

// 📁 Caminhos dos arquivos locais
const AUDIO_FILES = {
    lofi: 'sounds/lofi.mp3',
    nightSounds: 'sounds/night-sounds.mp3',
    owl: 'sounds/owl.mp3'
};

const lofiMusic = document.getElementById('lofiMusic');
const nightSounds = document.getElementById('nightSounds');
const owlSound = document.getElementById('owlSound');
const musicBtn = document.getElementById('musicBtn');
const musicIcon = document.getElementById('musicIcon');
const musicTooltip = document.getElementById('musicTooltip');
const effectsBtn = document.getElementById('effectsBtn');
const effectsIcon = document.getElementById('effectsIcon');

// Carregar áudios dos arquivos
lofiMusic.src = AUDIO_FILES.lofi;
nightSounds.src = AUDIO_FILES.nightSounds;
owlSound.src = AUDIO_FILES.owl;

let isMusicPlaying = false;
let isEffectsMuted = false;
let owlInterval = null;

// ============================================
// 🎚️ CONFIGURAÇÕES (ajuste fácil!)
// ============================================
const VOLUME_LOFI = 0.35;
const VOLUME_NIGHT = 0.20;
const VOLUME_OWL = 0.35;
const OWL_MIN_INTERVAL = 20000;
const OWL_MAX_INTERVAL = 50000;
// ============================================

if (lofiMusic) lofiMusic.volume = VOLUME_LOFI;
if (nightSounds) nightSounds.volume = VOLUME_NIGHT;
if (owlSound) owlSound.volume = VOLUME_OWL;

// ---- Coruja piando aleatoriamente ----
function startOwlSounds() {
    if (owlInterval) clearTimeout(owlInterval);
    
    function scheduleOwl() {
        const delay = Math.random() * (OWL_MAX_INTERVAL - OWL_MIN_INTERVAL) + OWL_MIN_INTERVAL;
        owlInterval = setTimeout(() => {
            if (isMusicPlaying && !isEffectsMuted && owlSound) {
                owlSound.currentTime = 0;
                owlSound.play().catch(() => {});
            }
            scheduleOwl();
        }, delay);
    }
    
    scheduleOwl();
}

function stopOwlSounds() {
    if (owlInterval) {
        clearTimeout(owlInterval);
        owlInterval = null;
    }
}

// ---- Fade in/out ----
function fadeIn(audio, targetVolume, duration = 2000) {
    audio.volume = 0;
    const steps = 30;
    const stepTime = duration / steps;
    const volumeStep = targetVolume / steps;
    
    let currentStep = 0;
    const fadeInterval = setInterval(() => {
        currentStep++;
        audio.volume = Math.min(volumeStep * currentStep, targetVolume);
        
        if (currentStep >= steps) {
            clearInterval(fadeInterval);
        }
    }, stepTime);
}

function fadeOut(audio, duration = 1000) {
    const startVolume = audio.volume;
    const steps = 20;
    const stepTime = duration / steps;
    const volumeStep = startVolume / steps;
    
    let currentStep = 0;
    const fadeInterval = setInterval(() => {
        currentStep++;
        audio.volume = Math.max(startVolume - (volumeStep * currentStep), 0);
        
        if (currentStep >= steps) {
            clearInterval(fadeInterval);
            audio.pause();
        }
    }, stepTime);
}

// ---- Tocar música ----
function playMusic() {
    if (!lofiMusic) return;
    
    const promises = [lofiMusic.play()];
    
    if (!isEffectsMuted && nightSounds) {
        promises.push(nightSounds.play());
    }
    
    Promise.all(promises)
        .then(() => {
            isMusicPlaying = true;
            musicIcon.textContent = '🎧';
            musicBtn.classList.add('playing');
            musicBtn.classList.remove('muted');
            hideTooltip();
            
            fadeIn(lofiMusic, VOLUME_LOFI, 2000);
            if (!isEffectsMuted) {
                fadeIn(nightSounds, VOLUME_NIGHT, 2000);
                startOwlSounds();
            }
            
            localStorage.setItem('musicEnabled', 'true');
        })
        .catch((error) => {
            console.log('Autoplay bloqueado:', error);
            showTooltip();
        });
}

// ---- Pausar música ----
function pauseMusic() {
    if (!lofiMusic) return;
    
    fadeOut(lofiMusic, 800);
    if (nightSounds) fadeOut(nightSounds, 800);
    if (owlSound) owlSound.pause();
    
    isMusicPlaying = false;
    musicIcon.textContent = '🔇';
    musicBtn.classList.remove('playing');
    musicBtn.classList.add('muted');
    stopOwlSounds();
    
    localStorage.setItem('musicEnabled', 'false');
}

function toggleMusic() {
    if (isMusicPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

// ---- Toggle Efeitos ----
function toggleEffects() {
    isEffectsMuted = !isEffectsMuted;
    
    if (isEffectsMuted) {
        if (nightSounds) fadeOut(nightSounds, 500);
        if (owlSound) owlSound.pause();
        stopOwlSounds();
        effectsIcon.textContent = '🔕';
        effectsBtn.classList.add('muted');
        localStorage.setItem('effectsEnabled', 'false');
    } else {
        if (isMusicPlaying && nightSounds) {
            nightSounds.play().then(() => {
                fadeIn(nightSounds, VOLUME_NIGHT, 1000);
                startOwlSounds();
            }).catch(() => {});
        }
        effectsIcon.textContent = '🦗';
        effectsBtn.classList.remove('muted');
        localStorage.setItem('effectsEnabled', 'true');
    }
}

function showTooltip() {
    musicTooltip.classList.add('visible');
}

function hideTooltip() {
    musicTooltip.classList.remove('visible');
}

// ---- Iniciar automaticamente ----
window.addEventListener('load', () => {
    const musicPref = localStorage.getItem('musicEnabled');
    const effectsPref = localStorage.getItem('effectsEnabled');
    
    if (effectsPref === 'false') {
        isEffectsMuted = true;
        effectsIcon.textContent = '🔕';
        effectsBtn.classList.add('muted');
    }
    
    if (musicPref === 'false') {
        musicIcon.textContent = '🔇';
        musicBtn.classList.add('muted');
        return;
    }
    
    setTimeout(() => {
        playMusic();
    }, 500);
});

function tryPlayOnInteraction() {
    if (!isMusicPlaying) {
        const musicPref = localStorage.getItem('musicEnabled');
        if (musicPref !== 'false') {
            playMusic();
        }
    }
}

document.addEventListener('click', tryPlayOnInteraction);
document.addEventListener('touchstart', tryPlayOnInteraction);
document.addEventListener('keydown', tryPlayOnInteraction);