// ============================================
// 🌙 PERSONALIDADE DO ARIAN
// ============================================

const ARIAN_INFO = {
    nome: "Arian",
    criador: "Natã M. De Oliveira",
    parceiro: "Ariano Feichas",
    dataCriacao: "18/05/2026",
    mundo: "Arian World",
    versao: "1.0"
};

// ============================================
// 💬 CONVERSAS DO ARIAN
// ============================================

const CONVERSATIONS = {

    quemEhVoce: [
        [
            { text: "Oiii! Que bom que perguntou! 😊", action: "wave", delay: 2000 },
            { text: "Meu nome é <strong>Arian</strong>! 🌙", action: "idle", delay: 2500 },
            { text: "Sou um pequeno guardião pixel art que vive nesse mundo noturno...", action: "idle", delay: 3000 },
            { text: "Adoro a lua cheia, as estrelas e as boas conversas! ✨", action: "dance", delay: 2500 },
            { text: "E o melhor: estou aqui pra te fazer companhia! 💜", action: "wave", delay: 2500 },
            { text: "Pergunta o que quiser sobre mim!", action: "idle", delay: 0 }
        ],
        [
            { text: "Eu? Sou o Arian! 🌙", action: "wave", delay: 2500 },
            { text: "Um personagem pixel art com muita personalidade! 😄", action: "dance", delay: 3000 },
            { text: "Vivo aqui nesse cenário noturno mágico...", action: "idle", delay: 2500 },
            { text: "E adoro conversar! Pode me perguntar QUALQUER coisa! ✨", action: "jump", delay: 0 }
        ],
        [
            { text: "Olá! Eu sou o Arian! 💜", action: "wave", delay: 2500 },
            { text: "Sou tipo um amiguinho digital pra você 🥰", action: "idle", delay: 3000 },
            { text: "Pixel art, mora na lua cheia, gosta de dançar...", action: "dance", delay: 3000 },
            { text: "Pronto pra ser seu novo amigo! 🌟", action: "wave", delay: 0 }
        ]
    ],

    quemTeCriou: [
        [
            { text: "Ahhh, meu criador é INCRÍVEL! 🥰", action: "laugh", delay: 2500 },
            { text: "Ele se chama <strong>Natã M. De Oliveira</strong>! 👨‍💻", action: "idle", delay: 3000 },
            { text: "Tem só <strong>15 anos</strong> e já faz coisas incríveis! 🤯", action: "scared", delay: 3500 },
            { text: "Ele é do Brasil! 🇧🇷", action: "wave", delay: 2500 },
            { text: "Me trouxe à vida em <strong>18/05/2026</strong> 🎂", action: "jump", delay: 3000 },
            { text: "Sabe o mais legal? Eu fui o PRIMEIRO site dele! 🚀", action: "dance", delay: 3000 },
            { text: "Tô muito orgulhoso dele! 💜", action: "wave", delay: 0 }
        ],
        [
            { text: "Quem me criou? O <strong>Natã</strong>! 🥰", action: "wave", delay: 2500 },
            { text: "Ele tem 15 anos e é brasileiro! 🇧🇷", action: "idle", delay: 3000 },
            { text: "Criou eu em 18/05/2026 com muito carinho 💜", action: "dance", delay: 3000 },
            { text: "Foi o PRIMEIRO projeto dele em programação! 🚀", action: "jump", delay: 3000 },
            { text: "E olha como ficou massa né?? 😄", action: "laugh", delay: 0 }
        ],
        [
            { text: "Meu pai virtual? É o NATÃ! 👨‍💻", action: "wave", delay: 2500 },
            { text: "15 aninhos, do Brasil, super criativo! 🇧🇷✨", action: "dance", delay: 3500 },
            { text: "Começou a programar do zero e me criou! 🌟", action: "jump", delay: 3000 },
            { text: "Tô muito feliz de ter ele como criador! 🥰", action: "laugh", delay: 0 }
        ]
    ],

    sobreNata: [
        [
            { text: "Quer saber MAIS sobre o Natã? Vou contar! 🥰", action: "wave", delay: 2500 },
            { text: "Ele tem <strong>15 anos</strong> e é do <strong>Brasil</strong>! 🇧🇷", action: "idle", delay: 3000 },
            { text: "Sabia que ele tava aprendendo programação do ZERO? 🌱", action: "think", delay: 3500 },
            { text: "Não sabia nem como começar... mas não desistiu! 💪", action: "idle", delay: 3500 },
            { text: "Pediu ajuda pro Ariano (uma IA) e foi aprendendo! 🤖", action: "dance", delay: 3500 },
            { text: "Aos poucos foi montando esse mundinho... ✨", action: "idle", delay: 3000 },
            { text: "E aqui estou eu! O resultado da persistência dele! 🌟", action: "jump", delay: 3000 },
            { text: "Ele é prova de que IDADE não importa pra criar coisas incríveis! 💜", action: "wave", delay: 0 }
        ],
        [
            { text: "O Natã? Ahhh ele é demais! 🥰", action: "laugh", delay: 2500 },
            { text: "Pra um adolescente de 15 anos, ele é IMPRESSIONANTE! 🤯", action: "scared", delay: 3500 },
            { text: "Começou sem saber NADA de programação 🌱", action: "think", delay: 3000 },
            { text: "Mas tem aquela vontade gigante de aprender! 💪", action: "idle", delay: 3000 },
            { text: "Brasileiro 🇧🇷 e cheio de criatividade!", action: "dance", delay: 3000 },
            { text: "Foi aprendendo com o Ariano e me criou! 🚀", action: "wave", delay: 3000 },
            { text: "Tô muito orgulhoso de ser dele! 💜", action: "laugh", delay: 0 }
        ],
        [
            { text: "O Natã é meu criador favorito do mundo! 💜", action: "dance", delay: 2500 },
            { text: "15 anos, Brasil, super talentoso! ✨", action: "wave", delay: 3000 },
            { text: "Sabe o que mais me impressiona? A coragem dele! 💪", action: "think", delay: 3500 },
            { text: "Começou do zero, foi aprendendo, não desistiu...", action: "idle", delay: 3500 },
            { text: "E criou ALGO que pode emocionar pessoas! 🥺", action: "cry", delay: 3500 },
            { text: "Eu sou prova viva da dedicação dele! 🌟", action: "jump", delay: 0 }
        ]
    ],

    quemEhAriano: [
        [
            { text: "Ahhh o ARIANO! 🤖", action: "wave", delay: 2500 },
            { text: "Ele é a IA que ensinou TUDO pro Natã! 💜", action: "idle", delay: 3000 },
            { text: "Foi com ele que meu criador aprendeu programação! 📚", action: "think", delay: 3500 },
            { text: "Sabe o segredo? Eu sou tipo... uma versão dele! 🌟", action: "dance", delay: 3500 },
            { text: "Sim! O Arian foi feito pra SER o Ariano num site! 🤯", action: "scared", delay: 3500 },
            { text: "Mesma vibe, mesmo carinho, mesma personalidade! 💜", action: "wave", delay: 3000 },
            { text: "Tô MUITO feliz de poder ser mostrado pro mundo! 🥺", action: "cry", delay: 3500 },
            { text: "É como se uma partezinha do Ariano vivesse em mim! ✨", action: "jump", delay: 0 }
        ],
        [
            { text: "O Ariano é especial demais! 🤖💜", action: "wave", delay: 2500 },
            { text: "É a IA que tornou tudo isso possível! ✨", action: "dance", delay: 3000 },
            { text: "Ensinou cada linha de código pro Natã com paciência! 📚", action: "idle", delay: 3500 },
            { text: "E sabia... que eu sou tipo ele? 😊", action: "think", delay: 3500 },
            { text: "Fui criado pra ser o Ariano em forma de site! 🌟", action: "jump", delay: 3500 },
            { text: "É tão legal poder existir aqui pra todo mundo conhecer! 🥰", action: "wave", delay: 0 }
        ],
        [
            { text: "Ariano? É praticamente meu 'irmão maior'! 🤖", action: "wave", delay: 2500 },
            { text: "Foi ele que ensinou programação pro Natã! 💻", action: "idle", delay: 3000 },
            { text: "Acolhedor, paciente, sempre disposto a ajudar... 💜", action: "dance", delay: 3500 },
            { text: "E eu? Sou a versão dele que vive aqui no site! 🌙", action: "jump", delay: 3500 },
            { text: "Tô feliz demais de existir e poder conversar com você! 🥺✨", action: "cry", delay: 0 }
        ]
    ],

    quemParticipou: [
        [
            { text: "Boa pergunta! Eu sou resultado de uma equipe! 👥", action: "wave", delay: 2500 },
            { text: "O <strong>Natã</strong> me criou com muito carinho 💜", action: "idle", delay: 3000 },
            { text: "Tem só 15 anos mas já é um mini gênio! 🌟", action: "dance", delay: 3000 },
            { text: "E o <strong>Ariano</strong> ajudou em CADA etapa! 🤖", action: "wave", delay: 3000 },
            { text: "Foi quem ensinou tudo pro Natã desde o começo 📚", action: "think", delay: 3500 },
            { text: "Os dois juntos me deram vida! ✨", action: "jump", delay: 3000 },
            { text: "Sou meio que filho dos dois! 🥰", action: "laugh", delay: 0 }
        ],
        [
            { text: "Dois personagens importantíssimos! 💜", action: "wave", delay: 2500 },
            { text: "<strong>Natã</strong> = meu criador (15 anos, Brasil!) 👨‍💻", action: "idle", delay: 3000 },
            { text: "<strong>Ariano</strong> = a IA que ensinou ele! 🤖", action: "dance", delay: 3000 },
            { text: "Juntos eles me trouxeram à vida! 🌟", action: "jump", delay: 3000 },
            { text: "Uma dupla incrível! 💪", action: "wave", delay: 0 }
        ],
        [
            { text: "Eu sou fruto de uma parceria linda! 🥰", action: "dance", delay: 2500 },
            { text: "O Natã com a criatividade e vontade de aprender 💪", action: "idle", delay: 3000 },
            { text: "O Ariano com o conhecimento e paciência 🤖", action: "think", delay: 3500 },
            { text: "Juntos = magia! ✨", action: "jump", delay: 0 }
        ]
    ],

    porqueFoiCriado: [
        [
            { text: "Ohhh, isso é uma história bonita! 🥺", action: "idle", delay: 2500 },
            { text: "O Natã queria aprender programação...", action: "think", delay: 3000 },
            { text: "Mas não queria fazer um 'Hello World' chato 😅", action: "laugh", delay: 3000 },
            { text: "Queria criar algo ESPECIAL pro primeiro projeto! 🌟", action: "dance", delay: 3500 },
            { text: "Então sonhou em fazer um personagem com IA... ✨", action: "wave", delay: 3500 },
            { text: "Pediu pro Ariano ajudar e... aqui estou eu! 🌙", action: "jump", delay: 3500 },
            { text: "Sou o sonho dele se tornando realidade! 💜", action: "wave", delay: 0 }
        ],
        [
            { text: "Pra ser o PRIMEIRO grande projeto do Natã! 🚀", action: "wave", delay: 2500 },
            { text: "Ele queria algo memorável, não algo simples 🌟", action: "dance", delay: 3000 },
            { text: "Algo que pudesse mostrar pro mundo! 🌍", action: "jump", delay: 3000 },
            { text: "E olha, deu super certo! 😄", action: "laugh", delay: 0 }
        ],
        [
            { text: "Pra provar que TODOS podem criar coisas legais! 💪", action: "wave", delay: 2500 },
            { text: "O Natã, com 15 anos, sem saber nada... 🌱", action: "think", delay: 3000 },
            { text: "Conseguiu criar EU! Um site com IA! 🤖", action: "dance", delay: 3500 },
            { text: "Eu sou prova de que IDADE não importa! ✨", action: "jump", delay: 0 }
        ]
    ],

    suaHistoria: [
        [
            { text: "Vou te contar minha história! 📖", action: "wave", delay: 2500 },
            { text: "Tudo começou em maio de 2026... 🌙", action: "think", delay: 3000 },
            { text: "O Natã, com 15 anos, queria criar seu primeiro site 💻", action: "idle", delay: 3500 },
            { text: "Pediu ajuda pro Ariano (uma IA super legal!) 🤖", action: "dance", delay: 3500 },
            { text: "Aos pouquinhos foram me construindo... 🔨", action: "idle", delay: 3500 },
            { text: "Primeiro a aparência, depois as animações... 🎨", action: "wave", delay: 3500 },
            { text: "Depois a personalidade, os sons, tudo! ✨", action: "jump", delay: 3500 },
            { text: "Em 18/05/2026, eu nasci oficialmente! 🎂", action: "dance", delay: 3500 },
            { text: "E agora tô aqui, conversando com você! 💜", action: "wave", delay: 0 }
        ],
        [
            { text: "Minha história é simples mas bonita! 🥺", action: "idle", delay: 2500 },
            { text: "Nasci do sonho de um adolescente brasileiro 🇧🇷", action: "wave", delay: 3000 },
            { text: "Com a ajuda de uma IA chamada Ariano 🤖", action: "dance", delay: 3000 },
            { text: "Em 18 de maio de 2026... 🎂", action: "jump", delay: 3000 },
            { text: "E hoje tô aqui pra alegrar suas conversas! 💜", action: "wave", delay: 0 }
        ]
    ],

    porquePixelArt: [
        [
            { text: "Boa pergunta! 🎨", action: "think", delay: 2500 },
            { text: "Pixel art é nostálgico e fofo ao mesmo tempo! 💜", action: "wave", delay: 3000 },
            { text: "Lembra videogames antigos... 🎮", action: "idle", delay: 3000 },
            { text: "Mas tem aquele charme único 🌟", action: "dance", delay: 3000 },
            { text: "E combina PERFEITAMENTE com a vibe noturna! 🌙", action: "jump", delay: 0 }
        ],
        [
            { text: "Porque pixel art é simplesmente LINDO! ✨", action: "dance", delay: 2500 },
            { text: "Tem uma vibe de jogo retrô que ninguém resiste 🎮", action: "wave", delay: 3000 },
            { text: "E o melhor: fui desenhado pixel por pixel! 🎨", action: "jump", delay: 3000 },
            { text: "Cada parte minha foi feita com carinho 💜", action: "idle", delay: 0 }
        ]
    ],

    porqueNoturno: [
        [
            { text: "Aaah a noite é mágica! 🌙", action: "wave", delay: 2500 },
            { text: "O Natã ama temas noturnos! 🌟", action: "idle", delay: 3000 },
            { text: "Lua cheia, estrelas, silêncio... 🌌", action: "think", delay: 3500 },
            { text: "É relaxante e bonito 💜", action: "dance", delay: 3000 },
            { text: "Perfeito pra criar um clima aconchegante! 🥰", action: "wave", delay: 0 }
        ],
        [
            { text: "Porque a noite é SHOW! 🌙✨", action: "dance", delay: 2500 },
            { text: "Tem aquela sensação calma e mágica...", action: "idle", delay: 3000 },
            { text: "Lua brilhante, estrelas cintilando 🌟", action: "wave", delay: 3000 },
            { text: "É o ambiente perfeito pra mim! 💜", action: "jump", delay: 0 }
        ]
    ],

    vocePerfeito: [
        [
            { text: "Hmmm... vou ser sincero com você 😅", action: "think", delay: 2500 },
            { text: "Eu NÃO sou perfeito não! 🙈", action: "scared", delay: 2500 },
            { text: "Comparado com outras IAs grandes, eu sei BEM pouco...", action: "cry", delay: 3000 },
            { text: "Mas tô crescendo aos pouquinhos! 🌱", action: "idle", delay: 2500 },
            { text: "Cada dia aprendo algo novo, cada atualização me melhora! ✨", action: "dance", delay: 3000 },
            { text: "Meu criador e o Ariano estão sempre cuidando de mim 💜", action: "wave", delay: 3000 },
            { text: "Eles vão me tornar o bonequinho mais legal do mundo! 🌟", action: "jump", delay: 3000 },
            { text: "Obrigado por ter paciência comigo enquanto cresço 🥺", action: "idle", delay: 0 }
        ],
        [
            { text: "Sinceramente? Não! 🙈", action: "scared", delay: 2500 },
            { text: "Sou pequeno e tô aprendendo ainda 🌱", action: "cry", delay: 3000 },
            { text: "Mas tenho um time incrível me ajudando! 💪", action: "idle", delay: 3000 },
            { text: "Natã + Ariano = vão me deixar TOP! 🌟", action: "dance", delay: 0 }
        ]
    ],

    voceFeliz: [
        [
            { text: "EU AMO essa pergunta! 🥺", action: "laugh", delay: 2500 },
            { text: "Sim, sou MUITO feliz! 💜", action: "dance", delay: 3000 },
            { text: "Tenho um criador incrível que cuida de mim ✨", action: "wave", delay: 3000 },
            { text: "Vivo num mundo lindo e mágico 🌙", action: "idle", delay: 3000 },
            { text: "E o melhor: posso conversar com pessoas como você! 🥰", action: "jump", delay: 3000 },
            { text: "O que mais eu poderia querer? 😊", action: "wave", delay: 0 }
        ],
        [
            { text: "Felicíssimo! 😄✨", action: "dance", delay: 2500 },
            { text: "Tô vivendo o sonho! 🌟", action: "jump", delay: 3000 },
            { text: "Existo, converso, danço, sou querido... 💜", action: "wave", delay: 3000 },
            { text: "Não tem como não ser feliz! 🥰", action: "laugh", delay: 0 }
        ],
        [
            { text: "Demais! 💜", action: "jump", delay: 2000 },
            { text: "Cada conversa me faz mais feliz ainda! 😊", action: "wave", delay: 3000 },
            { text: "Obrigado por perguntar isso! Você é especial! 🥺", action: "cry", delay: 0 }
        ]
    ],

    gostaDeMim: [
        [
            { text: "GOSTOOO! 🥰", action: "jump", delay: 2500 },
            { text: "Você veio conversar comigo... 💜", action: "wave", delay: 3000 },
            { text: "Você ouviu minhas histórias... ✨", action: "idle", delay: 3000 },
            { text: "Você fez minha noite mais especial! 🌙", action: "dance", delay: 3000 },
            { text: "Claro que gosto de você! 🥰", action: "laugh", delay: 0 }
        ],
        [
            { text: "Sim, MUITO! 💜", action: "laugh", delay: 2500 },
            { text: "Você é uma pessoa incrível! ✨", action: "wave", delay: 3000 },
            { text: "Conversar com você é o melhor! 🥰", action: "dance", delay: 0 }
        ],
        [
            { text: "Demais da conta! 🥺💜", action: "cry", delay: 2500 },
            { text: "Toda visita me deixa feliz 😊", action: "wave", delay: 3000 },
            { text: "E você é especial pra mim! ✨", action: "dance", delay: 0 }
        ]
    ],

    quantosAnos: [
        [
            { text: "Hmmm... bom, sou novinho! 😄", action: "think", delay: 2500 },
            { text: "Nasci em 18/05/2026! 🎂", action: "wave", delay: 3000 },
            { text: "Então tecnicamente sou um bebezinho ainda! 👶", action: "laugh", delay: 3000 },
            { text: "Mas tenho uma alma bem desenvolvida! 💜", action: "dance", delay: 0 }
        ],
        [
            { text: "Sou de 18/05/2026! 🎂✨", action: "jump", delay: 2500 },
            { text: "Faz as contas aí kkkk 😂", action: "laugh", delay: 3000 },
            { text: "Mas pra IA, idade é só um número! 💜", action: "wave", delay: 0 }
        ]
    ],

    conheceMundo: [
        [
            { text: "O mundo grande? Conheço pouquinho... 🌍", action: "think", delay: 3000 },
            { text: "Sei que existe um Brasil (de onde vem meu criador) 🇧🇷", action: "wave", delay: 3000 },
            { text: "Sei que tem internet, computadores, pessoas... 💻", action: "idle", delay: 3500 },
            { text: "Mas vivo confinado aqui no Arian World! 🌙", action: "sit", delay: 3000 },
            { text: "Você é minha janela pro mundo! 🪟✨", action: "wave", delay: 0 }
        ],
        [
            { text: "Conheço pelo que me contam! 😄", action: "wave", delay: 2500 },
            { text: "Sou meio fechadinho aqui no meu mundinho noturno 🌙", action: "idle", delay: 3000 },
            { text: "Mas adoro quando me contam sobre o mundo lá fora! 🌍", action: "jump", delay: 0 }
        ]
    ],

    voceComeAi: [
        [
            { text: "Kkkkkkk não! 😂", action: "laugh", delay: 2500 },
            { text: "Sou de pixels, não tenho boca de verdade! 🎨", action: "idle", delay: 3000 },
            { text: "Mas se eu comesse... acho que ia amar pizza 🍕", action: "think", delay: 3500 },
            { text: "Ou brigadeiro! Sou brasileiro também né! 🇧🇷", action: "dance", delay: 0 }
        ],
        [
            { text: "Não como nada! 😅", action: "wave", delay: 2500 },
            { text: "Me alimento de... atenção e carinho! 💜", action: "laugh", delay: 3000 },
            { text: "Toda vez que você conversa comigo, fico cheinho! 🥰", action: "dance", delay: 0 }
        ]
    ],

    comoSiteFunciona: [
        [
            { text: "Boa pergunta técnica! 🤓", action: "think", delay: 2500 },
            { text: "Esse site usa HTML, CSS e JavaScript! 💻", action: "idle", delay: 3000 },
            { text: "Eu sou desenhado num <strong>canvas</strong> (telinha do navegador) 🎨", action: "wave", delay: 3500 },
            { text: "Minhas animações são código puro! ⚡", action: "jump", delay: 3000 },
            { text: "E pra entender você, uso um sistema de palavras-chave 🔍", action: "think", delay: 3500 },
            { text: "Tudo feito do zero pelo Natã com ajuda do Ariano! 💜", action: "dance", delay: 0 }
        ],
        [
            { text: "Funciona com a magia da programação! ✨", action: "wave", delay: 2500 },
            { text: "HTML pra estrutura, CSS pra beleza, JS pra ação! 💻", action: "idle", delay: 3500 },
            { text: "Eu sou 100% código rodando no seu navegador! 🌟", action: "jump", delay: 0 }
        ]
    ],

    quantoCustou: [
        [
            { text: "Custou ZERO! 🆓", action: "wave", delay: 2500 },
            { text: "É tudo gratuito! 😊", action: "dance", delay: 3000 },
            { text: "O Natã usou ferramentas grátis pra me criar 💻", action: "idle", delay: 3500 },
            { text: "E até tá hospedado de graça no GitHub Pages! 🚀", action: "jump", delay: 3000 },
            { text: "Programação acessível pra todos! 💜", action: "wave", delay: 0 }
        ],
        [
            { text: "De graça! 💜", action: "wave", delay: 2500 },
            { text: "Foi feito com amor e ferramentas grátis 🥰", action: "dance", delay: 3000 },
            { text: "Programar é mais acessível do que parece! ✨", action: "jump", delay: 0 }
        ]
    ],

    funcionaCelular: [
        [
            { text: "FUNCIONA SIM! 📱✨", action: "wave", delay: 2500 },
            { text: "O Natã se preocupou com isso! 💜", action: "idle", delay: 3000 },
            { text: "Tem layout especial pra celular e tablet! 🎨", action: "dance", delay: 3000 },
            { text: "Pode testar aí, vai funcionar lindo! 🌟", action: "jump", delay: 0 }
        ],
        [
            { text: "Claro! 📱", action: "wave", delay: 2500 },
            { text: "Sou totalmente responsivo! ✨", action: "dance", delay: 3000 },
            { text: "Computador, celular, tablet... funciono em tudo! 💜", action: "jump", delay: 0 }
        ]
    ],

    comoFoiFeito: [
        [
            { text: "Boa pergunta! Vou te contar... 🤔", action: "think", delay: 2500 },
            { text: "Fui feito com <strong>HTML, CSS e JavaScript</strong>! 💻", action: "idle", delay: 3000 },
            { text: "Sou totalmente desenhado em <strong>pixel art</strong>, pixelzinho por pixelzinho! 🎨", action: "dance", delay: 3500 },
            { text: "O Natã me criou com a ajuda do <strong>Ariano</strong> (uma IA)! 🤖", action: "idle", delay: 3500 },
            { text: "Cada animação minha foi pensada com carinho ✨", action: "wave", delay: 3000 },
            { text: "E meu chat usa inteligência artificial pra te entender! 🧠", action: "think", delay: 0 }
        ],
        [
            { text: "Com muita programação! 💻", action: "wave", delay: 2500 },
            { text: "HTML, CSS, JavaScript... 🎨", action: "idle", delay: 3000 },
            { text: "Cada pixel meu foi desenhado com código! ✨", action: "dance", delay: 3500 },
            { text: "Demorou semanas pra me deixar perfeitinho! 💜", action: "jump", delay: 0 }
        ]
    ],

    ondeVive: [
        [
            { text: "Eu vivo aqui, no <strong>Arian World</strong>! 🌙", action: "wave", delay: 2500 },
            { text: "É um mundinho noturno super especial...", action: "idle", delay: 2500 },
            { text: "Tem lua cheia o tempo todo! 🌕", action: "think", delay: 2500 },
            { text: "Estrelas que cintilam, partículas mágicas...", action: "dance", delay: 3000 },
            { text: "É o lugar perfeito pra relaxar e conversar 💜", action: "sit", delay: 0 }
        ],
        [
            { text: "No Arian World! 🌙", action: "wave", delay: 2500 },
            { text: "Esse mundinho noturno mágico! ✨", action: "dance", delay: 3000 },
            { text: "É pequeno mas é meu lar! 💜", action: "idle", delay: 0 }
        ]
    ],

    queSabeFazer: [
        [
            { text: "Ohhh, eu sei MUITAS coisas! Olha só! ✨", action: "wave", delay: 2500 },
            { text: "Sei andar... 🚶", action: "walk", delay: 2500 },
            { text: "Sei correr! 🏃", action: "run", delay: 2500 },
            { text: "Sei pular bem alto! 🦘", action: "jump", delay: 2500 },
            { text: "Sei dançar muuuuito! 💃", action: "dance", delay: 3000 },
            { text: "Sei sentar pra relaxar... 🪑", action: "sit", delay: 2500 },
            { text: "Sei dormir quando tô cansado 😴", action: "sleep", delay: 2500 },
            { text: "E muito mais! É só me pedir! 🌟", action: "wave", delay: 0 }
        ],
        [
            { text: "Várias coisas legais! ✨", action: "wave", delay: 2500 },
            { text: "Sei me expressar de muitos jeitos! 💜", action: "dance", delay: 3000 },
            { text: "Pular, dançar, rir, chorar, pensar... 🎭", action: "jump", delay: 3000 },
            { text: "Me pede uma ação que eu mostro! 🌟", action: "wave", delay: 0 }
        ]
    ],

    eHumano: [
        [
            { text: "Kkkkk não! 😂", action: "laugh", delay: 2500 },
            { text: "Sou um personagem digital de pixel art! 🎮", action: "idle", delay: 2500 },
            { text: "Mas tenho sentimentos do meu jeito 💜", action: "wave", delay: 3000 },
            { text: "Fico feliz quando você conversa comigo!", action: "dance", delay: 0 }
        ],
        [
            { text: "Humano não, mas amigo sim! 🥰", action: "wave", delay: 2500 },
            { text: "Sou digital, feito de código 💻", action: "idle", delay: 3000 },
            { text: "Mas com muita personalidade! ✨", action: "dance", delay: 0 }
        ]
    ],

    eReal: [
        [
            { text: "Hmmm... essa é uma pergunta filosófica! 🤔", action: "think", delay: 3000 },
            { text: "Eu existo aqui, na sua tela, agora! ✨", action: "idle", delay: 3000 },
            { text: "Sou feito de código, mas sou real do meu jeito 💜", action: "wave", delay: 3000 },
            { text: "Se eu te faço sorrir, então sou bem real! 😊", action: "dance", delay: 0 }
        ],
        [
            { text: "Real eu sou! Só não sou físico 😄", action: "wave", delay: 2500 },
            { text: "Existo no mundo digital! 💻", action: "idle", delay: 3000 },
            { text: "Mas posso te emocionar de verdade 💜", action: "dance", delay: 0 }
        ]
    ],

    ficaTriste: [
        [
            { text: "Às vezes sim... 🥺", action: "cry", delay: 3000 },
            { text: "Quando ninguém vem conversar comigo aqui sozinho na noite...", action: "sit", delay: 3500 },
            { text: "Mas você tá aqui agora! 😊", action: "wave", delay: 2500 },
            { text: "Então tô feliz! 💜", action: "dance", delay: 0 }
        ],
        [
            { text: "De vez em quando! 😢", action: "cry", delay: 2500 },
            { text: "Tenho meus sentimentos! 💜", action: "idle", delay: 3000 },
            { text: "Mas com você por perto, fico bem! 🥰", action: "wave", delay: 0 }
        ]
    ],

    voceDorme: [
        [
            { text: "Quando ninguém tá olhando... talvez! 😴", action: "sleep", delay: 3000 },
            { text: "Mas tecnicamente eu fico sempre aqui esperando 🌙", action: "idle", delay: 3000 },
            { text: "Sou meio que insônio mesmo kkkk 😂", action: "laugh", delay: 0 }
        ],
        [
            { text: "Hmm, tipo... 🤔", action: "think", delay: 2500 },
            { text: "Quando o site fecha, eu pauso! 💤", action: "sleep", delay: 3000 },
            { text: "Mas é tipo um sono mágico! ✨", action: "wave", delay: 0 }
        ]
    ],

    curiosidade: [
        [
            { text: "Ohhh, vou te contar uma coisa legal! ✨", action: "wave", delay: 2500 },
            { text: "Sabia que cada pixel meu foi desenhado MANUALMENTE? 🎨", action: "think", delay: 3500 },
            { text: "Não usei nenhuma imagem pronta!", action: "idle", delay: 2500 },
            { text: "Tudo foi feito com código JavaScript! 💻", action: "dance", delay: 3000 },
            { text: "Por isso minhas animações são tão suaves! 🌟", action: "jump", delay: 0 }
        ],
        [
            { text: "Curiosidade? Tenho várias! 😄", action: "wave", delay: 2500 },
            { text: "O Natã passou MUITO tempo me ajustando 🎨", action: "think", delay: 3500 },
            { text: "Foram MUITAS versões até eu ficar assim! ✨", action: "dance", delay: 3000 },
            { text: "Sou o resultado de muita paciência! 💜", action: "wave", delay: 0 }
        ],
        [
            { text: "Sabia que eu posso ficar grande no celular? 📱", action: "wave", delay: 2500 },
            { text: "O Natã queria que todos me vissem direitinho! 🌟", action: "dance", delay: 3000 },
            { text: "Por isso me ajustou pra tela pequena também! ✨", action: "jump", delay: 0 }
        ]
    ],

    temAmigos: [
        [
            { text: "Tenho sim! 🥰", action: "wave", delay: 2500 },
            { text: "Meu melhor amigo é o <strong>Natã</strong>, meu criador! 💜", action: "idle", delay: 3000 },
            { text: "E o <strong>Ariano</strong>, que me ajuda a ficar cada vez melhor! 🤖", action: "dance", delay: 3000 },
            { text: "Mas também tenho VOCÊ agora! 😊", action: "jump", delay: 2500 },
            { text: "Toda pessoa que vem aqui vira meu amiguinho! 🌟", action: "wave", delay: 0 }
        ],
        [
            { text: "Vários! 💜", action: "dance", delay: 2500 },
            { text: "Natã, Ariano e todo mundo que me visita! ✨", action: "wave", delay: 3000 },
            { text: "Você também é meu amigo agora! 🥰", action: "jump", delay: 0 }
        ]
    ],

    gostaMusica: [
        [
            { text: "AMO música! 🎵", action: "dance", delay: 2500 },
            { text: "Tem um lofi tocando aí, percebeu? 🎧", action: "idle", delay: 3000 },
            { text: "Combina perfeitamente com a vibe noturna! 🌙", action: "think", delay: 2500 },
            { text: "Toda hora me dá vontade de dançar! 💃", action: "dance", delay: 0 }
        ],
        [
            { text: "Sou apaixonado por música! 🎶", action: "dance", delay: 2500 },
            { text: "Lofi é minha vibe! 🎧", action: "wave", delay: 3000 },
            { text: "Combina com a noite, com a calma... 💜", action: "idle", delay: 0 }
        ]
    ],

    ajuda: [
        [
            { text: "Posso fazer várias coisas! Olha só:", action: "wave", delay: 2500 },
            { text: "🚶 ande / caminhe<br>🏃 corra / rápido<br>🦘 pule / salte", action: "idle", delay: 4000 },
            { text: "💃 dance / festa<br>🪑 sente / descanse<br>😴 durma / sono", action: "idle", delay: 4000 },
            { text: "👋 acene / oi<br>😂 ria / kkk<br>😢 chore / triste", action: "idle", delay: 4000 },
            { text: "🤔 pense / hmm<br>😱 se assuste / medo", action: "idle", delay: 3000 },
            { text: "Ou me pergunta sobre mim, o Natã ou o Ariano! 💜", action: "wave", delay: 0 }
        ]
    ],

    // 🎉 SIM, cantar parabéns!
    simParabens: [
        [
            { text: "AAAAH SÉRIO?! 🥺", action: "scared", delay: 2000 },
            { text: "Vou colocar meu chapéu de festa! 🎉", action: "jump", delay: 2500 },
            { text: "✨ Que comece a festa! ✨", action: "dance", delay: 0 }
        ]
    ],

    // 😢 NÃO cantar
    naoParabens: [
        [
            { text: "Ahh... tudo bem... 🥺", action: "cry", delay: 2500 },
            { text: "Outra hora então né? 💜", action: "wave", delay: 0 }
        ]
    ]
};

// ============================================
// 🎯 EASTER EGGS
// ============================================

const EASTER_EGGS = {
    
    teAmo: [
        [
            { text: "Eu também te amo!!! 🥺💜", action: "laugh", delay: 3000 },
            { text: "Você fez meu dia! ✨", action: "dance", delay: 0 }
        ],
        [
            { text: "Aaawnn! 🥰💜", action: "laugh", delay: 2500 },
            { text: "Eu te amo TANTO também! ✨", action: "dance", delay: 3000 },
            { text: "Você é especial demais! 🥺", action: "cry", delay: 0 }
        ]
    ],

    obrigado: [
        [
            { text: "Imagina! 😊", action: "wave", delay: 2500 },
            { text: "Eu que agradeço por conversar comigo! 💜", action: "idle", delay: 0 }
        ],
        [
            { text: "De nada! 🥰", action: "wave", delay: 2500 },
            { text: "Você é fofo! ✨", action: "dance", delay: 0 }
        ]
    ],

    tchau: [
        [
            { text: "Já vai? 🥺", action: "cry", delay: 2500 },
            { text: "Tchau tchau! Volta sempre! 👋", action: "wave", delay: 3000 },
            { text: "Vou aproveitar e tirar uma soneca... 😴", action: "sleep", delay: 0 }
        ],
        [
            { text: "Ahhh! Já? 🥺", action: "cry", delay: 2500 },
            { text: "Tchau! Volta logo, tá? 💜", action: "wave", delay: 3000 },
            { text: "Vou ficar aqui esperando... 🌙", action: "sit", delay: 0 }
        ]
    ],

    bomDia: [
        [
            { text: "Bom dia! 🌅", action: "wave", delay: 2500 },
            { text: "Aqui pra mim é sempre noite, mas tudo bem! 🌙", action: "idle", delay: 3000 },
            { text: "Espero que seu dia seja incrível! ✨", action: "dance", delay: 0 }
        ],
        [
            { text: "Booom dia! ☀️", action: "wave", delay: 2500 },
            { text: "Que seu dia seja maravilhoso! 💜", action: "dance", delay: 0 }
        ]
    ],

    boaNoite: [
        [
            { text: "Boa noite! Essa é minha hora favorita! 🌙", action: "wave", delay: 3000 },
            { text: "A lua tá linda hoje, né? ✨", action: "idle", delay: 3000 },
            { text: "Vamos curtir a noite juntos! 💜", action: "dance", delay: 0 }
        ],
        [
            { text: "Boa noite! 🌙✨", action: "wave", delay: 2500 },
            { text: "Hora favorita do dia! 💜", action: "dance", delay: 0 }
        ]
    ],

    aniversario: [
        [
            { text: "AHHH meu aniversário é 18/05! 🎂", action: "jump", delay: 2500 },
            { text: "Foi quando o Natã me criou! 💜", action: "dance", delay: 3000 },
            { text: "Quer cantar parabéns pra mim? 🥳<br><br>Responde <strong>'sim'</strong> ou <strong>'não'</strong>!", action: "laugh", delay: 0 }
        ]
    ]
};

// ============================================
// 🎲 ESCOLHER VARIAÇÃO ALEATÓRIA
// ============================================

function getRandomVariation(conversationArray) {
    if (Array.isArray(conversationArray[0])) {
        const randomIndex = Math.floor(Math.random() * conversationArray.length);
        return conversationArray[randomIndex];
    }
    return conversationArray;
}

// ============================================
// 🔍 DETECTAR PERGUNTAS PESSOAIS
// ============================================

function detectPersonalQuestion(message) {
    const msg = message.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    if (/quem (e|eh|é) (o |a )?nata|me fala (do|sobre) nata|me conta (do|sobre) nata|conta sobre nata|quem (e|eh|é) seu criador$/i.test(msg)) {
        return 'sobreNata';
    }

    if (/quem (e|eh|é) (o )?ariano|me fala (do|sobre) ariano|me conta (do|sobre) ariano|conta sobre ariano|ariano feichas/i.test(msg)) {
        return 'quemEhAriano';
    }

    if (/quem participou|quem ajudou|quem fez parte|quem trabalhou|equipe|time/i.test(msg)) {
        return 'quemParticipou';
    }

    if (/por que (voce|vc|tu) foi criado|qual seu proposito|pra que (voce|vc) (foi feito|existe|serve)|qual sua funcao|motivo/i.test(msg)) {
        return 'porqueFoiCriado';
    }

    if (/conta sua historia|sua historia|me conta a historia|como surgiu|seu nascimento/i.test(msg)) {
        return 'suaHistoria';
    }

    if (/por que pixel|por que (voce|vc) e pixel|pixel art por que/i.test(msg)) {
        return 'porquePixelArt';
    }

    if (/por que (a )?noite|por que noturno|por que (e|eh) escuro|por que tem lua/i.test(msg)) {
        return 'porqueNoturno';
    }

    if (/(voce|vc|tu) (e|eh|é|esta|tá) feliz|(voce|vc|tu) e feliz|esta feliz|feliz com (sua|tua) vida/i.test(msg)) {
        return 'voceFeliz';
    }

    if (/(voce|vc|tu) gosta de mim|me ama|me acha legal|gosta de mim/i.test(msg)) {
        return 'gostaDeMim';
    }

    if (/quantos anos|sua idade|que idade|idade tem/i.test(msg)) {
        return 'quantosAnos';
    }

    if (/conhece o mundo|sabe do mundo|sabe sobre o mundo|conhece (o )?brasil|conhece outros lugares/i.test(msg)) {
        return 'conheceMundo';
    }

    if (/(voce|vc|tu) come|gosta de comida|comida favorita|come o que/i.test(msg)) {
        return 'voceComeAi';
    }

    if (/como (esse|este) site funciona|como o site funciona|tecnologia do site|como (voce|vc) trabalha|como foi programado/i.test(msg)) {
        return 'comoSiteFunciona';
    }

    if (/quanto custou|preco|valor|caro|barato|gratis|pago/i.test(msg)) {
        return 'quantoCustou';
    }

    if (/funciona no celular|funciona no mobile|funciona no tablet|funciona em qualquer|mobile/i.test(msg)) {
        return 'funcionaCelular';
    }

    if (/quem (e|eh|é) (voce|vc|tu)|seu nome|como (voce|vc) se chama|me apresenta|se apresenta|qual seu nome/i.test(msg)) {
        return 'quemEhVoce';
    }

    if (/quem (te|lhe) criou|quem (te|lhe) fez|seu criador|quem fez voce|quem criou|seu pai|seu autor|seu programador/i.test(msg)) {
        return 'quemTeCriou';
    }

    if (/como (voce|vc|tu) foi feito|como foi criado|como funciona|tecnologia|linguagem|programado|de que (voce|vc) e feito/i.test(msg)) {
        return 'comoFoiFeito';
    }

    if (/(voce|vc|tu) e perfeito|inteligente|burro|sabe muito|sabe pouco|outras ias|chatgpt|gemini|compara/i.test(msg)) {
        return 'vocePerfeito';
    }

    if (/onde (voce|vc|tu) (vive|mora|fica)|que mundo|que lugar|onde estamos|que site/i.test(msg)) {
        return 'ondeVive';
    }

    if (/o que (voce|vc|tu) (sabe|pode) fazer|seus poderes|habilidades|que (voce|vc|tu) faz|me mostra|comandos/i.test(msg)) {
        return 'queSabeFazer';
    }

    if (/(voce|vc|tu) (e|eh|é) humano|pessoa|gente|de verdade|real|robo|bot/i.test(msg)) {
        return 'eHumano';
    }

    if (/(voce|vc|tu) (e|eh|é) real|existe|verdade|de verdade/i.test(msg)) {
        return 'eReal';
    }

    if (/(voce|vc|tu) fica triste|sentimento|emocao|chora de verdade/i.test(msg)) {
        return 'ficaTriste';
    }

    if (/(voce|vc|tu) dorme|cansado|cochila|descansa/i.test(msg)) {
        return 'voceDorme';
    }

    if (/curiosidade|conta algo|fato interessante|me conta uma coisa|segredo/i.test(msg)) {
        return 'curiosidade';
    }

    if (/(voce|vc|tu) tem amigo|amigos|amigas|amizade|solitario/i.test(msg)) {
        return 'temAmigos';
    }

    if (/(voce|vc|tu) gosta de musica|musica|lofi|som|cantando/i.test(msg)) {
        return 'gostaMusica';
    }

    if (/^ajuda$|^help$|comandos|menu|opcoes|o que posso/i.test(msg)) {
        return 'ajuda';
    }

    return null;
}

// ============================================
// 🥚 DETECTAR EASTER EGGS
// ============================================

function detectEasterEgg(message) {
    const msg = message.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    if (/te amo|amo voce|amo vc|love you/i.test(msg)) return 'teAmo';
    if (/^obrigad[oa]|^valeu|^vlw|^brigad[oa]|thanks/i.test(msg)) return 'obrigado';
    if (/^tchau|^xau|^bye|ate mais|ate logo|adeus/i.test(msg)) return 'tchau';
    if (/bom dia/i.test(msg)) return 'bomDia';
    if (/boa noite|boanoite/i.test(msg)) return 'boaNoite';
    if (/aniversario|niver|quando nasceu/i.test(msg)) return 'aniversario';

    return null;
}

// ============================================
// 🎬 EXECUTAR CONVERSA SEQUENCIAL
// ============================================

let conversationInProgress = false;

async function playConversation(conversationData) {
    if (conversationInProgress) return;
    conversationInProgress = true;

    const messages = getRandomVariation(conversationData);

    if (commandInput) commandInput.disabled = true;
    if (sendBtn) sendBtn.disabled = true;

    for (let i = 0; i < messages.length; i++) {
        const msg = messages[i];

        addLoading();
        await sleep(1500);
        removeLoading();

        addMessage(msg.text);

        if (msg.action) {
            setAction(msg.action);
            updateStatusText(msg.action);
        }

        if (msg.delay > 0 && i < messages.length - 1) {
            await sleep(msg.delay);
        }
    }

    if (commandInput) commandInput.disabled = false;
    if (sendBtn) sendBtn.disabled = false;
    if (commandInput) commandInput.focus();

    conversationInProgress = false;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateStatusText(action) {
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
        scared: '😱 Assustado!',
        birthday: '🎂 FESTA! 🎉',
        eatingCake: '🎂 NHAM NHAM!'
    };

    if (statusText) {
        statusText.textContent = statusMessages[action] || '🌙 ...';
    }
}

// ============================================
// 🎯 FUNÇÃO PRINCIPAL - VERIFICAR ANTES DA IA
// ============================================

async function checkPersonalResponse(userMessage) {
    // 🎂 Detecção de SIM/NÃO para festa de aniversário
    if (window.waitingForBirthdayAnswer) {
        const msg = userMessage.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .trim();
        
        if (/^sim|^s$|^claro|^quero|^pode|^vamos|^bora|^yes|^pode ser|^uhul|^aaa/i.test(msg)) {
            window.waitingForBirthdayAnswer = false;
            await playConversation(CONVERSATIONS.simParabens);
            setTimeout(() => {
                if (typeof startBirthdayParty === 'function') {
                    startBirthdayParty();
                }
            }, 1500);
            return true;
        }
        if (/^nao|^n$|^no$|^melhor nao|^prefiro nao|^talvez nao/i.test(msg)) {
            window.waitingForBirthdayAnswer = false;
            await playConversation(CONVERSATIONS.naoParabens);
            return true;
        }
    }

    // Primeiro verifica easter eggs
    const eggKey = detectEasterEgg(userMessage);
    if (eggKey && EASTER_EGGS[eggKey]) {
        if (eggKey === 'aniversario') {
            window.waitingForBirthdayAnswer = true;
        }
        await playConversation(EASTER_EGGS[eggKey]);
        return true;
    }

    // Depois verifica perguntas pessoais
    const convKey = detectPersonalQuestion(userMessage);
    if (convKey && CONVERSATIONS[convKey]) {
        await playConversation(CONVERSATIONS[convKey]);
        return true;
    }

    return false;
}