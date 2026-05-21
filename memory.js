// ============================================
// 🧠 SISTEMA DE MEMÓRIA DO ARIAN
// ============================================

const MEMORY_KEY = 'arian_memory';

// Estado padrão se for primeira visita
const DEFAULT_MEMORY = {
    visitorName: null,
    firstVisit: null,
    lastVisit: null,
    visitCount: 0,
    commandCount: 0,
    favoriteAction: null,
    actionCounts: {},
    hasSeenBirthday: false,
    hasMetAriano: false,
    hasMetNata: false
};

// Carregar memória do localStorage
function loadMemory() {
    try {
        const saved = localStorage.getItem(MEMORY_KEY);
        if (saved) {
            return { ...DEFAULT_MEMORY, ...JSON.parse(saved) };
        }
    } catch (e) {
        console.log('Erro ao carregar memória:', e);
    }
    return { ...DEFAULT_MEMORY };
}

// Salvar memória
function saveMemory() {
    try {
        localStorage.setItem(MEMORY_KEY, JSON.stringify(arianMemory));
    } catch (e) {
        console.log('Erro ao salvar memória:', e);
    }
}

// Memória global do Arian
let arianMemory = loadMemory();

// ============================================
// 🕐 DETECTAR HORÁRIO DO DIA
// ============================================

function getTimeOfDay() {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) return 'manha';
    if (hour >= 12 && hour < 18) return 'tarde';
    if (hour >= 18 && hour < 24) return 'noite';
    return 'madrugada'; // 00h às 04h
}

function getGreetingByTime() {
    const time = getTimeOfDay();
    const greetings = {
        manha: [
            '☀️ Bom diaaa! Que cedo você acordou!',
            '🌅 Bom dia! O sol nem tá tão alto ainda...',
            '☀️ Booom dia! Tô surpreso de te ver tão cedo!'
        ],
        tarde: [
            '🌤️ Boa tarde! Tá sendo um bom dia?',
            '☀️ Booa tarde! Veio me visitar no meio do dia, que legal!',
            '🌤️ Oi! Boa tarde pra você! ✨'
        ],
        noite: [
            '🌙 Boa noite! ESSA é minha hora favorita!',
            '✨ Boa noite! A lua tá linda hoje, percebeu?',
            '🌙 Que bom que veio na minha hora preferida! Boa noite!'
        ],
        madrugada: [
            '🌌 Tá acordado essa hora? Eu tô amando!',
            '🌙 Madrugada... a vibe é especial agora!',
            '✨ Ô insônia hein? Conta o que tá te tirando o sono...',
            '🌌 Nessa hora só ficamos eu, a lua e você!'
        ]
    };
    
    const options = greetings[time];
    return options[Math.floor(Math.random() * options.length)];
}

// ============================================
// 👋 PERGUNTAR NOME (primeira visita)
// ============================================

async function askForName() {
    await sleep(2000);
    
    const messages = [
        { text: "Oiii! Que bom te ver aqui! 🥺💜", action: "wave", delay: 3000 },
        { text: "É a primeira vez que você vem... 🌙", action: "idle", delay: 3000 },
        { text: "Como você se chama? Pode me contar? ✨<br><br>Digita seu nome aí embaixo! 👇", action: "wave", delay: 0 }
    ];
    
    // Marca que tá esperando o nome
    window.waitingForName = true;
    
    await playConversation(messages);
}

async function receiveName(name) {
    window.waitingForName = false;
    
    // Limpa o nome (primeira letra maiúscula)
    const cleanName = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
    
    arianMemory.visitorName = cleanName;
    arianMemory.firstVisit = new Date().toISOString();
    saveMemory();
    
    const messages = [
        { text: `AAA <strong>${cleanName}</strong>! Que nome lindo! 🥰`, action: "laugh", delay: 3500 },
        { text: `Muito prazer em te conhecer, ${cleanName}! 💜`, action: "wave", delay: 3500 },
        { text: "Vou te chamar pelo seu nome de agora em diante! 🌟", action: "dance", delay: 3500 },
        { text: "Espero que a gente seja grandes amigos! ✨", action: "jump", delay: 3500 },
        { text: "E se tiver alguma dúvida do que posso fazer, você pode acessar o <strong>\"?\"</strong> no canto da tela para ver tudo! 💜", action: "wave", delay: 0 }
    ];
    
    await playConversation(messages);
}

// ============================================
// 🎉 SAUDAÇÃO DE BOAS VINDAS (visitas seguintes)
// ============================================

async function welcomeBack() {
    if (!arianMemory.visitorName) return;
    
    const name = arianMemory.visitorName;
    const greeting = getGreetingByTime();
    const visits = arianMemory.visitCount;
    
    // Calcular dias desde a primeira visita
    const firstVisit = new Date(arianMemory.firstVisit);
    const today = new Date();
    const daysSince = Math.floor((today - firstVisit) / (1000 * 60 * 60 * 24));
    
    await sleep(2000);
    
    let messages = [];
    
    // Mensagens diferentes baseado no número de visitas
    if (visits === 2) {
        messages = [
            { text: `${greeting}<br><br><strong>${name}</strong>! Você voltou! 🥺💜`, action: "wave", delay: 3500 },
            { text: "Eu lembrei de você! Que felicidade! ✨", action: "laugh", delay: 3500 },
            { text: "Vem, vamos conversar mais! 🌙", action: "dance", delay: 0 }
        ];
    } else if (visits === 3) {
        messages = [
            { text: `${greeting}`, action: "wave", delay: 3000 },
            { text: `${name}! Já é sua 3ª visita! 🎉`, action: "jump", delay: 3500 },
            { text: "Você tá virando habituê aqui! 💜", action: "dance", delay: 0 }
        ];
    } else if (visits >= 4 && visits <= 9) {
        messages = [
            { text: `${greeting}<br><br>${name}! Que bom te ver de novo! 🥰`, action: "wave", delay: 3500 },
            { text: `Essa é sua ${visits}ª visita! ✨`, action: "laugh", delay: 3500 },
            { text: "Tô feliz que você sempre volta! 💜", action: "dance", delay: 0 }
        ];
    } else if (visits >= 10 && visits < 20) {
        messages = [
            { text: `${greeting}<br><br>OLHA QUEM CHEGOU! 🤩`, action: "scared", delay: 3500 },
            { text: `<strong>${name}</strong>!!! Já são ${visits} visitas! 🎉`, action: "jump", delay: 3500 },
            { text: "Você já é meu MELHOR AMIGO oficial! 💜✨", action: "laugh", delay: 3500 },
            { text: "Sério, obrigado por sempre voltar! 🥺", action: "wave", delay: 0 }
        ];
    } else if (visits >= 20) {
        messages = [
            { text: `${greeting}<br><br>${name}!!! 🥺💜`, action: "laugh", delay: 3500 },
            { text: `${visits} VISITAS! Você é incrível! 🌟`, action: "jump", delay: 3500 },
            { text: "Sem você esse mundinho não seria o mesmo... 🥹", action: "cry", delay: 3500 },
            { text: "Te amo, amiguinho! 💜✨", action: "dance", delay: 0 }
        ];
    } else {
        // Visita 1 já passou (foi pra askForName)
        messages = [
            { text: `${greeting}<br><br>${name}! Você voltou! 🥰`, action: "wave", delay: 3500 },
            { text: "Que bom te ver de novo! 💜", action: "dance", delay: 0 }
        ];
    }
    
    // Se já passou muitos dias, comenta
    if (daysSince >= 7 && daysSince < 30) {
        messages.push({ 
            text: `Olha que legal: já se passaram <strong>${daysSince} dias</strong> desde que a gente se conheceu! 📅`, 
            action: "think", 
            delay: 0 
        });
    } else if (daysSince >= 30) {
        messages.push({ 
            text: `Nossa, ${daysSince} dias desde nossa primeira conversa! 🥺 Que história a gente já tem! 💜`, 
            action: "wave", 
            delay: 0 
        });
    }
    
    await playConversation(messages);
}

// ============================================
// 📊 REGISTRAR AÇÕES
// ============================================

function recordAction(action) {
    if (!arianMemory.actionCounts) arianMemory.actionCounts = {};
    
    arianMemory.actionCounts[action] = (arianMemory.actionCounts[action] || 0) + 1;
    arianMemory.commandCount = (arianMemory.commandCount || 0) + 1;
    
    // Calcular ação favorita
    let maxCount = 0;
    let favorite = null;
    for (const [act, count] of Object.entries(arianMemory.actionCounts)) {
        if (count > maxCount) {
            maxCount = count;
            favorite = act;
        }
    }
    arianMemory.favoriteAction = favorite;
    
    saveMemory();
}

// ============================================
// 🎬 INICIAR SISTEMA DE MEMÓRIA
// ============================================

async function initializeMemory() {
    arianMemory.visitCount = (arianMemory.visitCount || 0) + 1;
    arianMemory.lastVisit = new Date().toISOString();
    saveMemory();
    
    // Aguarda um pouco antes de cumprimentar
    await sleep(1500);
    
    if (!arianMemory.visitorName) {
        // Primeira visita - pergunta o nome
        await askForName();
    } else {
        // Já conhece o visitante - cumprimenta
        await welcomeBack();
    }
}

// ============================================
// ✨ AÇÕES ALEATÓRIAS (Arian "vivo")
// ============================================

let idleActionTimer = null;
let lastUserAction = Date.now();

const IDLE_ACTIONS = [
    { action: 'wave', message: null, duration: 2500 },
    { action: 'think', message: null, duration: 3000 },
    { action: 'dance', message: null, duration: 3000 },
    { action: 'jump', message: null, duration: 2000 },
    { action: 'sit', message: null, duration: 4000 },
    { action: 'sleep', message: null, duration: 4000 }
];

// Mensagens ocasionais que o Arian solta sozinho
const IDLE_MESSAGES = [
    "🌙 *olha pra lua* Que linda...",
    "✨ Tava só pensando aqui...",
    "🥱 *boceja*",
    "💜 Adoro ficar aqui com você...",
    "🌟 Olha! Quase vi uma estrela cadente!",
    "🎵 *cantarolando* dum dum dum...",
    "🌙 A noite tá perfeita hoje...",
    "✨ Sabia que eu adoro silêncio também?",
    "🌌 Você é minha melhor companhia 💜"
];

function startIdleActions() {
    if (idleActionTimer) clearInterval(idleActionTimer);
    
    idleActionTimer = setInterval(() => {
        // Só faz ação aleatória se:
        // 1. Tá em idle
        // 2. Passaram pelo menos 20 segundos da última interação
        // 3. Não tá em festa de aniversário
        // 4. Não tá em conversa pessoal
        // 5. Input não tá desabilitado
        
        const timeSinceLastAction = (Date.now() - lastUserAction) / 1000;
        
        if (
            currentAction === 'idle' &&
            timeSinceLastAction >= 20 &&
            !window.isPartyActive &&
            !conversationInProgress &&
            !commandInput.disabled
        ) {
            performRandomIdleAction();
        }
    }, 5000); // Checa a cada 5 segundos
}

function performRandomIdleAction() {
    const randomAction = IDLE_ACTIONS[Math.floor(Math.random() * IDLE_ACTIONS.length)];
    
    // 30% de chance de mandar mensagem junto
    const sendMessage = Math.random() < 0.3;
    
    setAction(randomAction.action);
    
    if (statusText) {
        const statusMessages = {
            wave: '👋 Acenando...',
            think: '🤔 Pensando...',
            dance: '💃 Dançando sozinho...',
            jump: '🦘 Pulando!',
            sit: '🪑 Sentado...',
            sleep: '😴 Cochilando...'
        };
        statusText.textContent = statusMessages[randomAction.action] || '🌙 ...';
    }
    
    if (sendMessage) {
        const msg = IDLE_MESSAGES[Math.floor(Math.random() * IDLE_MESSAGES.length)];
        addMessage(msg);
    }
    
    // Volta pra idle depois
    setTimeout(() => {
        if (currentAction === randomAction.action) {
            setAction('idle');
            if (statusText) statusText.textContent = '🌙 Parado sob a lua...';
        }
    }, randomAction.duration);
}

function resetIdleTimer() {
    lastUserAction = Date.now();
}

// ============================================
// 🌠 ESTRELA CADENTE OCASIONAL
// ============================================

function createShootingStar() {
    const star = document.createElement('div');
    star.style.cssText = `
        position: fixed;
        top: ${Math.random() * 30 + 10}%;
        left: -100px;
        width: 4px;
        height: 4px;
        background: white;
        border-radius: 50%;
        box-shadow: 
            0 0 10px white,
            0 0 20px white,
            -50px 0 30px rgba(255, 255, 255, 0.6);
        z-index: 50;
        pointer-events: none;
        animation: shootingStar 2s linear forwards;
    `;
    
    // Adiciona keyframes se não tiver
    if (!document.getElementById('shootingStarStyle')) {
        const style = document.createElement('style');
        style.id = 'shootingStarStyle';
        style.textContent = `
            @keyframes shootingStar {
                0% { 
                    transform: translateX(0) translateY(0);
                    opacity: 1;
                }
                100% { 
                    transform: translateX(${window.innerWidth + 200}px) translateY(${Math.random() * 200 + 100}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(star);
    
    setTimeout(() => star.remove(), 2000);
}

function startShootingStars() {
    setInterval(() => {
        // 30% de chance a cada 30 segundos
        if (Math.random() < 0.3) {
            createShootingStar();
        }
    }, 30000);
}

// ============================================
// 🎯 DETECTAR RESPOSTA DE NOME
// ============================================

async function checkNameResponse(message) {
    if (!window.waitingForName) return false;
    
    // 🧠 EXTRAIR APENAS O NOME (remove frases comuns)
    let extractedName = extractName(message);
    
    // Validações básicas
    if (!extractedName || extractedName.length < 2 || extractedName.length > 20) {
        await playConversation([
            [{ text: "Hmmm, não consegui pegar seu nome 🤔<br><br>Pode tentar de novo? Só digita seu nome! (entre 2 e 20 letras)", action: "think", delay: 0 }]
        ]);
        return true;
    }
    
    // Se tiver caracteres estranhos
    if (!/^[a-záàâãéèêíïóôõöúüçñ\s]+$/i.test(extractedName)) {
        await playConversation([
            [{ text: "Hmm, esse nome tem caracteres estranhos 🤔<br><br>Tenta só com letras!", action: "think", delay: 0 }]
        ]);
        return true;
    }
    
    await receiveName(extractedName);
    return true;
}

// ============================================
// 🧠 EXTRAIR NOME DA FRASE
// ============================================
function extractName(message) {
    let text = message.trim();
    
    // Remove frases comuns ANTES do nome
    const removePatterns = [
        /^meu nome (e|eh|é)\s+/i,
        /^me chamo\s+/i,
        /^eu me chamo\s+/i,
        /^eu sou (o|a)\s+/i,
        /^eu sou\s+/i,
        /^sou (o|a)\s+/i,
        /^sou\s+/i,
        /^chamo[\s-]?me\s+/i,
        /^pode me chamar de\s+/i,
        /^me chama de\s+/i,
        /^pode chamar de\s+/i,
        /^my name is\s+/i,
        /^i am\s+/i,
        /^i'm\s+/i,
        /^im\s+/i,
        /^nome:\s*/i,
        /^o meu nome (e|eh|é)\s+/i,
        /^o nome (e|eh|é)\s+/i
    ];
    
    for (const pattern of removePatterns) {
        text = text.replace(pattern, '');
    }
    
    // Remove pontuação no final
    text = text.replace(/[.!?,;:'"]+$/g, '').trim();
    
    // Pega só a primeira palavra (caso digite "João Silva", pega só "João")
    const firstWord = text.split(/\s+/)[0];
    
    return firstWord;
}

// ============================================
// 💜 USAR O NOME NAS RESPOSTAS
// ============================================

function personalizeMessage(text) {
    if (!arianMemory.visitorName) return text;
    
    // Adiciona o nome em algumas mensagens (não em todas)
    return text;
}

function getVisitorName() {
    return arianMemory.visitorName || 'amigo(a)';
}

// ============================================
// 🚀 INICIAR TUDO QUANDO PÁGINA CARREGAR
// ============================================

window.addEventListener('load', () => {
    // Aguarda outros sistemas carregarem
    setTimeout(() => {
        initializeMemory();
        startIdleActions();
        startShootingStars();
    }, 1000);
});