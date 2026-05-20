// ============================================
// 📜 PAINEL DE AJUDA - GUIA INTERATIVO
// ============================================

let commandCount = parseInt(localStorage.getItem('commandCount') || '0');
let isHelpOpen = false;
let isTourRunning = false;

// ============================================
// 🎨 DESENHAR ÍCONE DE INTERROGAÇÃO (PIXEL ART)
// ============================================

function drawHelpIcon() {
    const canvas = document.getElementById('helpIconCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const PIXEL = 4;
    
    // Limpa
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    function px(x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x * PIXEL, y * PIXEL, PIXEL, PIXEL);
    }
    
    const COLOR_MAIN = '#fde047';      // Amarelo brilhante
    const COLOR_DARK = '#a16207';      // Sombra
    const COLOR_LIGHT = '#fef3c7';     // Brilho
    
    // Desenha o "?" em pixel art (10x10 grid)
    // Topo do "?"
    px(3, 1, COLOR_DARK);
    px(4, 1, COLOR_MAIN);
    px(5, 1, COLOR_MAIN);
    px(6, 1, COLOR_DARK);
    
    px(2, 2, COLOR_DARK);
    px(3, 2, COLOR_MAIN);
    px(4, 2, COLOR_LIGHT);
    px(5, 2, COLOR_MAIN);
    px(6, 2, COLOR_MAIN);
    px(7, 2, COLOR_DARK);
    
    px(6, 3, COLOR_MAIN);
    px(7, 3, COLOR_MAIN);
    
    // Curva direita
    px(6, 4, COLOR_MAIN);
    px(7, 4, COLOR_DARK);
    
    px(5, 5, COLOR_MAIN);
    px(6, 5, COLOR_DARK);
    
    // Hastinha central
    px(4, 5, COLOR_MAIN);
    px(4, 6, COLOR_MAIN);
    px(5, 6, COLOR_DARK);
    
    px(4, 7, COLOR_MAIN);
    
    // Ponto embaixo
    px(4, 9, COLOR_MAIN);
    px(5, 9, COLOR_DARK);
}

// ============================================
// 📋 DEFINIÇÃO DOS CARTÕES
// ============================================

const HELP_CATEGORIES = [
    {
        title: '🚶 Movimentação',
        cards: [
            { icon: '🚶', title: 'ANDAR', command: 'anda', tip: 'ou caminhe, passei' },
            { icon: '🏃', title: 'CORRER', command: 'corre', tip: 'ou rápido, voa' },
            { icon: '🦘', title: 'PULAR', command: 'pula', tip: 'ou salte, hop' },
            { icon: '🌙', title: 'PARAR', command: 'pare', tip: 'ou fica quieto' }
        ]
    },
    {
        title: '🎉 Ações Divertidas',
        cards: [
            { icon: '💃', title: 'DANÇAR', command: 'dance', tip: 'ou festa, party' },
            { icon: '😂', title: 'RIR', command: 'ria', tip: 'ou kkkk, gargalha' },
            { icon: '👋', title: 'ACENAR', command: 'acene', tip: 'ou tchau, oi' },
            { icon: '🤔', title: 'PENSAR', command: 'pense', tip: 'ou hmm, reflete' }
        ]
    },
    {
        title: '😌 Ações Calmas',
        cards: [
            { icon: '🪑', title: 'SENTAR', command: 'sente', tip: 'ou descanse' },
            { icon: '😴', title: 'DORMIR', command: 'durma', tip: 'ou sono, cochila' },
            { icon: '😢', title: 'CHORAR', command: 'chore', tip: 'ou triste' },
            { icon: '😱', title: 'ASSUSTAR', command: 'se assuste', tip: 'ou medo, susto' }
        ]
    },
    {
        title: '💬 Pergunte Sobre Ele',
        type: 'question',
        cards: [
            { icon: '🙋', title: 'Quem é você?', command: 'quem é você?' },
            { icon: '👨‍💻', title: 'Quem te criou?', command: 'quem te criou?' },
            { icon: '🤖', title: 'Quem é Ariano?', command: 'quem é o ariano?' },
            { icon: '📜', title: 'Sua história', command: 'conta sua história' },
            { icon: '🛠️', title: 'Como foi feito?', command: 'como você foi feito?' },
            { icon: '🌟', title: 'Curiosidade', command: 'me conta uma curiosidade' },
            { icon: '💜', title: 'É feliz?', command: 'você é feliz?' },
            { icon: '🎂', title: 'Sua idade', command: 'quantos anos você tem?' }
        ]
    },
    {
        title: '🥚 Easter Eggs (segredos!)',
        type: 'egg',
        cards: [
            { icon: '❤️', title: 'Te amo', command: 'te amo' },
            { icon: '🙏', title: 'Obrigado', command: 'obrigado' },
            { icon: '👋', title: 'Tchau', command: 'tchau' },
            { icon: '🌅', title: 'Bom dia', command: 'bom dia' },
            { icon: '🌙', title: 'Boa noite', command: 'boa noite' },
            { icon: '🎂', title: 'Aniversário', command: 'aniversário' }
        ]
    }
];

// ============================================
// 🎨 RENDERIZAR PAINEL
// ============================================

function renderHelpPanel() {
    const content = document.getElementById('helpContent');
    if (!content) return;
    
    let html = '';
    
    HELP_CATEGORIES.forEach(category => {
        html += `<div class="category-title">${category.title}</div>`;
        html += `<div class="cards-grid">`;
        
        category.cards.forEach(card => {
            const cardClass = category.type === 'question' ? 'question-card' : 
                            category.type === 'egg' ? 'egg-card' : '';
            
            html += `
                <div class="action-card ${cardClass}" onclick="executeCardCommand('${card.command}')">
                    <span class="card-icon">${card.icon}</span>
                    <div class="card-title">${card.title}</div>
                    ${card.tip ? `<div class="card-tip">${card.tip}</div>` : ''}
                </div>
            `;
        });
        
        html += `</div>`;
    });
    
    content.innerHTML = html;
}

// ============================================
// 🎮 EXECUTAR COMANDO DO CARTÃO
// ============================================

function executeCardCommand(command) {
    // Fecha o painel
    toggleHelpPanel();
    
    // Espera fechar e executa
    setTimeout(() => {
        if (commandInput) {
            commandInput.value = command;
            sendCommand();
        }
    }, 300);
}

// ============================================
// 🔄 TOGGLE DO PAINEL
// ============================================

function toggleHelpPanel() {
    const overlay = document.getElementById('helpOverlay');
    if (!overlay) return;
    
    isHelpOpen = !isHelpOpen;
    
    if (isHelpOpen) {
        renderHelpPanel();
        updateCommandCounter();
        overlay.classList.add('visible');
    } else {
        overlay.classList.remove('visible');
    }
}

// ============================================
// ❌ FECHAR SE CLICAR FORA
// ============================================

function closeHelpIfOverlay(event) {
    if (event.target.id === 'helpOverlay') {
        toggleHelpPanel();
    }
}

// ============================================
// 📊 CONTADOR DE COMANDOS
// ============================================

function incrementCommandCount() {
    commandCount++;
    localStorage.setItem('commandCount', commandCount.toString());
    updateCommandCounter();
}

function updateCommandCounter() {
    const counter = document.getElementById('commandCounter');
    if (counter) {
        counter.textContent = commandCount;
    }
}

// ============================================
// 🎲 BOTÃO SURPRESA - COMANDO ALEATÓRIO
// ============================================

const RANDOM_COMMANDS = [
    'pule', 'dance', 'corra', 'rir', 'pense', 
    'se assuste', 'durma', 'sente', 'acene',
    'quem é você?', 'me conta uma curiosidade',
    'você é feliz?', 'conta sua história'
];

function randomCommand() {
    const randomCmd = RANDOM_COMMANDS[Math.floor(Math.random() * RANDOM_COMMANDS.length)];
    executeCardCommand(randomCmd);
}

// ============================================
// 🎬 MODO TOUR - EXECUTA TODAS AS ANIMAÇÕES
// ============================================

const TOUR_SEQUENCE = [
    { command: 'acene', wait: 3500 },
    { command: 'ande', wait: 3500 },
    { command: 'corra', wait: 3500 },
    { command: 'pule', wait: 3500 },
    { command: 'dance', wait: 4000 },
    { command: 'ria', wait: 3500 },
    { command: 'pense', wait: 3500 },
    { command: 'se assuste', wait: 3500 },
    { command: 'chore', wait: 3500 },
    { command: 'sente', wait: 3500 },
    { command: 'durma', wait: 3500 }
];

async function startTour() {
    if (isTourRunning) return;
    isTourRunning = true;
    
    toggleHelpPanel();
    
    // Mensagem inicial
    setTimeout(() => {
        addMessage('🎬 <strong>MODO TOUR INICIADO!</strong><br>Vou te mostrar tudo que sei fazer! ✨');
    }, 500);
    
    // Aguarda 2 segundos antes de começar
    await new Promise(r => setTimeout(r, 2500));
    
    for (let i = 0; i < TOUR_SEQUENCE.length; i++) {
        const step = TOUR_SEQUENCE[i];
        
        // Executa o comando
        if (commandInput) {
            commandInput.value = step.command;
            await sendCommand();
        }
        
        // Espera o tempo definido
        await new Promise(r => setTimeout(r, step.wait));
    }
    
    // Mensagem final
    setTimeout(() => {
        addMessage('🎉 <strong>Esse é o Arian!</strong><br>Espero que tenha gostado! 💜');
    }, 1000);
    
    isTourRunning = false;
}

// ============================================
// ⌨️ ATALHOS DE TECLADO
// ============================================

document.addEventListener('keydown', (e) => {
    // ESC fecha o painel
    if (e.key === 'Escape' && isHelpOpen) {
        toggleHelpPanel();
    }
});

// ============================================
// 🚀 INICIALIZAR
// ============================================

window.addEventListener('load', () => {
    drawHelpIcon();
    updateCommandCounter();
});