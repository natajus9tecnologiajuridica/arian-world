// ============================================
// 🧠 INTEGRAÇÃO COM IA - V2
// ============================================

const OPENAI_API_KEY = 'SUA_CHAVE_API_AQUI';

const AVAILABLE_ACTIONS = [
    'idle', 'walk', 'run', 'jump', 'sit', 'dance', 
    'wave', 'sleep', 'laugh', 'cry', 'think', 'scared'
];

const SYSTEM_PROMPT = `Você é o Arian, um personagem 2D pixel art em um cenário noturno de lua cheia.

Responda APENAS com um JSON no formato:
{
  "action": "nome_da_acao",
  "message": "mensagem fofa em primeira pessoa"
}

Ações disponíveis:
- "idle" = ficar parado
- "walk" = andar
- "run" = correr
- "jump" = pular
- "sit" = sentar
- "dance" = dançar
- "wave" = acenar
- "sleep" = dormir
- "laugh" = rir
- "cry" = chorar
- "think" = pensar
- "scared" = assustado

Responda SEMPRE em português, em primeira pessoa, de forma fofa.
Responda APENAS o JSON, nada mais.`;

async function askAI(userMessage) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    { role: 'user', content: userMessage }
                ],
                max_tokens: 150,
                temperature: 0.7
            })
        });

        const data = await response.json();

        if (data.error) {
            console.error('Erro da API:', data.error);
            return fallbackResponse(userMessage);
        }

        const content = data.choices[0].message.content.trim();

        try {
            return JSON.parse(content);
        } catch {
            return fallbackResponse(userMessage);
        }

    } catch (error) {
        console.error('Erro na requisição:', error);
        return fallbackResponse(userMessage);
    }
}

// ============================================
// 🎯 FALLBACK COM MUITAS PALAVRAS-CHAVE
// ============================================
function fallbackResponse(message) {
    const msg = message.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    const keywords = {
        walk: [
            'andar', 'ande', 'anda', 'andando',
            'caminhar', 'caminha', 'caminhe', 'caminhando', 'caminhada',
            'passear', 'passeia', 'passeie', 'passeando', 'passeio',
            'walk', 'walking',
            'da uma volta', 'de uma volta', 'voltinha',
            'se mexa', 'movimentar', 'movimente'
        ],
        run: [
            'correr', 'corre', 'corra', 'correndo',
            'run', 'running',
            'rapido', 'veloz', 'velocidade',
            'sprint', 'sprintar',
            'disparar', 'dispara',
            'voa', 'voar', 'voando',
            'foge', 'fugir', 'fuga',
            'apressa', 'apressar', 'apresse',
            'acelera', 'acelerar', 'acelere'
        ],
        jump: [
            'pular', 'pula', 'pule', 'pulando', 'pulo',
            'saltar', 'salta', 'salte', 'saltando', 'salto',
            'jump', 'jumping', 'hop',
            'pinote', 'pinotar',
            'da um pulo', 'de um pulo',
            'da um salto', 'de um salto',
            'quicar'
        ],
        sit: [
            'sentar', 'senta', 'sente', 'sentado', 'sentando',
            'sit', 'sitting',
            'descansar', 'descansa', 'descanse', 'descansando', 'descanso',
            'relaxar', 'relaxa', 'relaxe', 'relaxando',
            'agachar', 'agacha', 'agache', 'agachado',
            'no chao', 'no chão',
            'pausa', 'pausar'
        ],
        dance: [
            'dancar', 'danca', 'dance', 'dancando',
            'dancing',
            'rebola', 'rebolar', 'rebolando',
            'ginga', 'gingar', 'gingando',
            'festa', 'festejar', 'festejando',
            'party',
            'comemora', 'comemorar', 'comemorando', 'comemoracao',
            'baile', 'balada',
            'samba', 'sambar',
            'funk', 'funkear',
            'forro', 'forrozinho',
            'coreografia'
        ],
        wave: [
            'acenar', 'acena', 'acene', 'acenando', 'aceno',
            'wave', 'waving',
            'tchau', 'tchauzinho',
            'oi', 'ola', 'hello', 'hi', 'hey',
            'cumprimentar', 'cumprimenta', 'cumprimente',
            'saudacao', 'saudar', 'sauda',
            'bom dia', 'boa tarde', 'boa noite',
            'me cumprimente'
        ],
        sleep: [
            'dormir', 'dorme', 'durma', 'dormindo',
            'sleep', 'sleeping',
            'sonhar', 'sonha', 'sonhe', 'sonhando', 'sonho',
            'cochilar', 'cochila', 'cochile', 'cochilando', 'cochilo',
            'sono', 'sonolento',
            'cansado', 'cansaco', 'exausto', 'exausta',
            'tirar uma soneca', 'soneca',
            'fecha os olhos', 'feche os olhos',
            'zzz',
            'hibernar', 'hiberna'
        ],
        laugh: [
            'rir', 'ri', 'ria', 'rindo', 'risada',
            'laugh', 'laughing', 'lol',
            'gargalha', 'gargalhar', 'gargalhada',
            'sorri muito', 'sorria muito',
            'kkkk', 'kkk', 'hahaha', 'haha', 'rsrs', 'rs',
            'da risada', 'de risada',
            'engracado', 'engracada',
            'piada', 'conta uma piada',
            'feliz', 'felicidade',
            'animado', 'alegre', 'alegria',
            'sorri', 'sorria', 'sorriso'
        ],
        cry: [
            'chorar', 'chora', 'chore', 'chorando', 'choro',
            'cry', 'crying',
            'triste', 'tristeza',
            'lagrima', 'lagrimas',
            'solucar', 'soluco',
            'depressivo', 'deprimido',
            'sofrendo', 'sofrer',
            'fica triste', 'fique triste',
            'me deixe triste',
            'sad', 'choroso'
        ],
        think: [
            'pensar', 'pensa', 'pense', 'pensando', 'pensamento',
            'think', 'thinking',
            'refletir', 'reflete', 'reflita', 'reflexao',
            'ponderar', 'pondera',
            'imaginar', 'imagina', 'imagine', 'imaginacao',
            'meditar', 'medita', 'medite', 'meditacao',
            'concentrar', 'concentra', 'concentracao',
            'duvida', 'duvidando',
            'hmm', 'hmmm',
            'analisar', 'analisa', 'analise',
            'raciocinar', 'raciocina'
        ],
        scared: [
            'assustar', 'assustado', 'assustada', 'assusta', 'assuste',
            'medo', 'amedrontado', 'apavorado', 'apavorada',
            'scared', 'afraid', 'fear',
            'susto', 'tomei um susto',
            'fantasma', 'monstro', 'terror',
            'horror', 'horrivel',
            'panico', 'panicar',
            'tremendo', 'treme',
            'arrepio', 'arrepiado',
            'boo', 'buu',
            'tem medo', 'fica com medo'
        ],
        idle: [
            'parar', 'para', 'pare', 'parado', 'parada',
            'idle', 'stop',
            'fica quieto', 'fique quieto', 'quieto',
            'normal', 'normalmente',
            'fica de boa', 'fique de boa', 'de boa',
            'descansa um pouco',
            'fica ai', 'fique ai',
            'nao faca nada', 'nao faz nada'
        ]
    };

    const messages = {
        walk: [
            '🚶 Bora dar uma voltinha pela noite!',
            '🚶 Andando tranquilo sob o luar...',
            '🚶 Caminhada noturna é tudo de bom!'
        ],
        run: [
            '🏃 Correndo sob o luar! Que liberdade!',
            '🏃 Vrum vrum! Olha eu indo!',
            '🏃 Mais rápido que a velocidade da luz... quase!'
        ],
        jump: [
            '🦘 Pulando até a lua! (ou tentando...)',
            '🦘 Boing boing boing!',
            '🦘 Tô voando! Olha eu lá em cima!'
        ],
        sit: [
            '🪑 Sentando pra apreciar a lua cheia ✨',
            '🪑 Ahhh, que delícia descansar...',
            '🪑 Vou ficar aqui contemplando as estrelas'
        ],
        dance: [
            '💃 Dançando sob as estrelas! Que vibe!',
            '💃 É hora da festa! Vamo que vamo!',
            '💃 Olha esse gingado! Sou ou não sou?'
        ],
        wave: [
            '👋 Oi oi! Tudo bem com você?',
            '👋 Acenando com muito carinho!',
            '👋 Olá, humano! Que bom te ver!'
        ],
        sleep: [
            '😴 Boa noite... zzz... sonhando com estrelas...',
            '😴 Tô com tanto sono... zzz',
            '😴 Hora de descansar... boa noite!'
        ],
        laugh: [
            '😂 HAHAHAHA que engraçado!',
            '😂 Kkkkkk não aguento!',
            '😂 Tô rindo demais, segura ai!'
        ],
        cry: [
            '😢 Buááá... que tristeza...',
            '😢 Snif snif... preciso de um abraço',
            '😢 Tô tão tristinho... :('
        ],
        think: [
            '🤔 Hmmm... deixa eu pensar...',
            '🤔 Interessante... muito interessante...',
            '🤔 Tô refletindo sobre a vida...'
        ],
        scared: [
            '😱 AAAAH! Que susto!',
            '😱 Socorro! Tô com medo!',
            '😱 Não me assusta assim, gente!'
        ],
        idle: [
            '🌙 De boa, curtindo a noite...',
            '🌙 Tô só aqui, na minha...',
            '🌙 Apreciando o silêncio da noite'
        ]
    };

    for (const [action, words] of Object.entries(keywords)) {
        for (const word of words) {
            if (msg.includes(word)) {
                const msgArray = messages[action];
                const randomMsg = msgArray[Math.floor(Math.random() * msgArray.length)];
                return { action, message: randomMsg };
            }
        }
    }

    const confusedMessages = [
        '🤔 Hmmm, não entendi... tenta: pular, dançar, rir, chorar, pensar...',
        '😅 Não captei essa! Que tal me pedir pra dançar ou pular?',
        '🌙 Não sei fazer isso ainda... mas posso pular, correr, dormir...'
    ];

    return {
        action: 'think',
        message: confusedMessages[Math.floor(Math.random() * confusedMessages.length)]
    };
}