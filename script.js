// ============================================
// 🎮 SCRIPT PRINCIPAL
// ============================================

const chatMessages = document.getElementById('chatMessages');
const commandInput = document.getElementById('commandInput');
const statusText = document.getElementById('statusText');
const sendBtn = document.getElementById('sendBtn');

// ---- Criar estrelas ----
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 60 + '%';
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        star.style.setProperty('--delay', Math.random() * 5 + 's');
        starsContainer.appendChild(star);
    }
}

createStars();

// ---- Adicionar mensagem ao chat ----
function addMessage(text, isUser = false) {
    const div = document.createElement('div');
    div.classList.add('message', isUser ? 'user-message' : 'bot-message');

    const icon = document.createElement('span');
    icon.classList.add('msg-icon');
    icon.textContent = isUser ? '🧑' : '🌙';

    const p = document.createElement('p');
    p.innerHTML = text;

    div.appendChild(icon);
    div.appendChild(p);
    chatMessages.appendChild(div);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ---- Adicionar loading ----
function addLoading() {
    const div = document.createElement('div');
    div.classList.add('message', 'bot-message');
    div.id = 'loadingMsg';

    const icon = document.createElement('span');
    icon.classList.add('msg-icon');
    icon.textContent = '🌙';

    const p = document.createElement('p');
    p.classList.add('loading-dots');
    p.textContent = 'Pensando';

    div.appendChild(icon);
    div.appendChild(p);
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeLoading() {
    const loading = document.getElementById('loadingMsg');
    if (loading) loading.remove();
}

// ---- Enviar comando ----
async function sendCommand() {
    const text = commandInput.value.trim();
    if (!text) return;

    addMessage(text, true);
    commandInput.value = '';

    commandInput.disabled = true;
    sendBtn.disabled = true;

    addLoading();

    let result;

    if (OPENAI_API_KEY && OPENAI_API_KEY !== 'SUA_CHAVE_API_AQUI') {
        result = await askAI(text);
    } else {
        await new Promise(r => setTimeout(r, 800));
        result = fallbackResponse(text);
    }

    removeLoading();

    setAction(result.action);

    const statusMessages = {
        idle: '🌙 Parado sob a lua...',
        walk: '🚶 Caminhando pela noite...',
        run: '🏃 Correndo rápido!',
        jump: '🦘 Pulando!',
        sit: '🪑 Sentado, relaxando...',
        dance: '💃 Dançando!',
        wave: '👋 Acenando!',
        sleep: '😴 Dormindo... zzz',
        laugh: '😂 Rindo muito!',
        cry: '😢 Chorando...',
        think: '🤔 Pensando...',
        scared: '😱 Assustado!'
    };

    statusText.textContent = statusMessages[result.action] || '🌙 ...';

    addMessage(result.message);

    commandInput.disabled = false;
    sendBtn.disabled = false;
    commandInput.focus();

    // Ações temporárias voltam ao idle
    const temporaryActions = ['jump', 'wave', 'laugh', 'scared'];
    if (temporaryActions.includes(result.action)) {
        setTimeout(() => {
            setAction('idle');
            statusText.textContent = '🌙 Parado sob a lua...';
        }, 3000);
    }
}

// ---- Enter para enviar ----
commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendCommand();
    }
});

commandInput.focus();

console.log('%c🌙 Moonlight World', 'font-size: 24px; color: #c4b5fd; font-weight: bold;');
console.log('%cArian está aqui! ✨', 'font-size: 14px; color: #86efac;');