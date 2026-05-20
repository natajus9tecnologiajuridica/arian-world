// ============================================
// 🤖 PERSONAGEM PIXEL ART ANIMADO - V5
// ============================================

const charCanvas = document.getElementById('characterCanvas');
const ctx = charCanvas.getContext('2d');

// Escala do pixel - ajusta automaticamente pro tamanho da tela
function getPixelSize() {
    const width = window.innerWidth;
    if (width < 380) return 7;      // celular pequeno
    if (width < 600) return 8;      // celular
    if (width < 900) return 7;      // tablet
    return 10;                      // desktop
}

let PIXEL = getPixelSize();
let CENTER_X = charCanvas.width / 2;
let CENTER_Y = charCanvas.height / 2 + 40;

// Atualizar quando redimensionar
window.addEventListener('resize', () => {
    PIXEL = getPixelSize();
    CENTER_X = charCanvas.width / 2;
    CENTER_Y = charCanvas.height / 2 + 40;
});

// Estado do personagem
let currentAction = 'idle';
let animFrame = 0;

// Cores do personagem (tema noturno)
const COLORS = {
    skin: '#f0c89a',
    hair: '#4a3a6a',
    shirt: '#6366f1',
    shirtLight: '#818cf8',
    pants: '#3730a3',
    shoes: '#1e1b4b',
    eyes: '#fff',
    pupils: '#1e1b4b',
    outline: '#2d2060',
    blush: '#f0a0a0',
    mouth: '#c0756b',
};

// ---- Desenhar um pixel ----
function drawPixel(x, y, color, size = PIXEL) {
    ctx.fillStyle = color;
    ctx.fillRect(
        CENTER_X + x * size - (size * 8),
        CENTER_Y + y * size - (size * 20),
        size,
        size
    );
}

// ---- SOMBRA INTELIGENTE E PROPORCIONAL ----
function drawShadowAtFeet(feetYPixel, widthScale = 1, opacity = 0.45) {
    ctx.save();
    
    const shadowY = CENTER_Y + (feetYPixel + 1) * PIXEL - (PIXEL * 20);
    
    // Sombra proporcional ao tamanho do personagem!
    const shadowWidth = (PIXEL * 10) * widthScale;
    const shadowHeight = PIXEL * 1.5;
    
    // Camada externa (mais difusa)
    ctx.beginPath();
    ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 0.4})`;
    ctx.ellipse(
        CENTER_X,
        shadowY,
        shadowWidth * 1.3,
        shadowHeight * 1.5,
        0, 0, Math.PI * 2
    );
    ctx.fill();
    
    // Camada principal (mais escura)
    ctx.beginPath();
    ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
    ctx.ellipse(
        CENTER_X,
        shadowY,
        shadowWidth,
        shadowHeight,
        0, 0, Math.PI * 2
    );
    ctx.fill();
    
    ctx.restore();
}

// ============================================
// ANIMAÇÕES DO PERSONAGEM
// ============================================

const animations = {

    // ---- PARADO (IDLE) ----
    idle: {
        frames: 2,
        speed: 800,
        draw(frame) {
            const breathe = frame === 0 ? 0 : -1;

            drawShadowAtFeet(18 + breathe);

            for (let x = 2; x <= 13; x++) drawPixel(x, 0 + breathe, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x, 1 + breathe, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x, 2 + breathe, COLORS.hair);

            for (let x = 2; x <= 13; x++) {
                for (let y = 3; y <= 8; y++) {
                    drawPixel(x, y + breathe, COLORS.skin);
                }
            }

            drawPixel(4, 5 + breathe, COLORS.eyes);
            drawPixel(5, 5 + breathe, COLORS.eyes);
            drawPixel(10, 5 + breathe, COLORS.eyes);
            drawPixel(11, 5 + breathe, COLORS.eyes);
            drawPixel(5, 5 + breathe, COLORS.pupils);
            drawPixel(10, 5 + breathe, COLORS.pupils);

            drawPixel(7, 7 + breathe, COLORS.mouth);
            drawPixel(8, 7 + breathe, COLORS.mouth);

            drawPixel(3, 6 + breathe, COLORS.blush);
            drawPixel(12, 6 + breathe, COLORS.blush);

            for (let x = 4; x <= 11; x++) {
                for (let y = 9; y <= 14; y++) {
                    drawPixel(x, y + breathe, y < 12 ? COLORS.shirt : COLORS.shirtLight);
                }
            }

            for (let y = 9; y <= 13; y++) {
                drawPixel(3, y + breathe, COLORS.shirt);
                drawPixel(12, y + breathe, COLORS.shirt);
            }
            drawPixel(3, 14 + breathe, COLORS.skin);
            drawPixel(12, 14 + breathe, COLORS.skin);

            for (let x = 4; x <= 11; x++) {
                drawPixel(x, 15 + breathe, COLORS.pants);
                drawPixel(x, 16 + breathe, COLORS.pants);
            }

            for (let x = 4; x <= 6; x++) {
                drawPixel(x, 17 + breathe, COLORS.pants);
                drawPixel(x, 18 + breathe, COLORS.shoes);
            }
            for (let x = 9; x <= 11; x++) {
                drawPixel(x, 17 + breathe, COLORS.pants);
                drawPixel(x, 18 + breathe, COLORS.shoes);
            }
        }
    },

    // ---- ANDAR ----
    walk: {
        frames: 4,
        speed: 200,
        draw(frame) {
            const legOffset = [0, 1, 0, -1][frame];
            const armOffset = [1, 0, -1, 0][frame];
            const bounce = [0, -1, 0, -1][frame];

            drawShadowAtFeet(18 + bounce);

            for (let x = 2; x <= 13; x++) drawPixel(x, 0 + bounce, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x, 1 + bounce, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x, 2 + bounce, COLORS.hair);

            for (let x = 2; x <= 13; x++) {
                for (let y = 3; y <= 8; y++) {
                    drawPixel(x, y + bounce, COLORS.skin);
                }
            }

            drawPixel(4, 5 + bounce, COLORS.eyes);
            drawPixel(5, 5 + bounce, COLORS.eyes);
            drawPixel(10, 5 + bounce, COLORS.eyes);
            drawPixel(11, 5 + bounce, COLORS.eyes);
            drawPixel(5, 5 + bounce, COLORS.pupils);
            drawPixel(11, 5 + bounce, COLORS.pupils);

            drawPixel(7, 7 + bounce, COLORS.mouth);
            drawPixel(8, 7 + bounce, COLORS.mouth);

            for (let x = 4; x <= 11; x++) {
                for (let y = 9; y <= 14; y++) {
                    drawPixel(x, y + bounce, y < 12 ? COLORS.shirt : COLORS.shirtLight);
                }
            }

            for (let y = 9; y <= 13; y++) {
                drawPixel(3, y + bounce + (y > 11 ? armOffset : 0), COLORS.shirt);
                drawPixel(12, y + bounce + (y > 11 ? -armOffset : 0), COLORS.shirt);
            }
            drawPixel(3, 14 + bounce + armOffset, COLORS.skin);
            drawPixel(12, 14 + bounce - armOffset, COLORS.skin);

            for (let x = 4; x <= 11; x++) {
                drawPixel(x, 15 + bounce, COLORS.pants);
                drawPixel(x, 16 + bounce, COLORS.pants);
            }

            for (let x = 4; x <= 6; x++) {
                drawPixel(x, 17 + bounce + legOffset, COLORS.pants);
                drawPixel(x, 18 + bounce + legOffset, COLORS.shoes);
            }
            for (let x = 9; x <= 11; x++) {
                drawPixel(x, 17 + bounce - legOffset, COLORS.pants);
                drawPixel(x, 18 + bounce - legOffset, COLORS.shoes);
            }
        }
    },

    // ---- PULAR ----
    jump: {
        frames: 6,
        speed: 150,
        draw(frame) {
            const jumpHeight = [0, -4, -7, -8, -5, -1][frame];
            const legSpread = frame >= 1 && frame <= 3;
            const armsUp = frame >= 1 && frame <= 4;

            const heightFactor = Math.abs(jumpHeight) / 10;
            drawShadowAtFeet(18, 1 - heightFactor * 0.4, 0.45 - heightFactor * 0.2);

            const oY = jumpHeight;

            for (let x = 2; x <= 13; x++) drawPixel(x, 0 + oY, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x, 1 + oY, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x, 2 + oY, COLORS.hair);

            for (let x = 2; x <= 13; x++) {
                for (let y = 3; y <= 8; y++) {
                    drawPixel(x, y + oY, COLORS.skin);
                }
            }

            drawPixel(4, 5 + oY, COLORS.eyes);
            drawPixel(5, 5 + oY, COLORS.eyes);
            drawPixel(10, 5 + oY, COLORS.eyes);
            drawPixel(11, 5 + oY, COLORS.eyes);
            drawPixel(5, 5 + oY, COLORS.pupils);
            drawPixel(10, 5 + oY, COLORS.pupils);

            if (armsUp) {
                drawPixel(7, 7 + oY, COLORS.mouth);
                drawPixel(8, 7 + oY, COLORS.mouth);
                drawPixel(7, 8 + oY, COLORS.mouth);
                drawPixel(8, 8 + oY, COLORS.mouth);
            } else {
                drawPixel(7, 7 + oY, COLORS.mouth);
                drawPixel(8, 7 + oY, COLORS.mouth);
            }

            for (let x = 4; x <= 11; x++) {
                for (let y = 9; y <= 14; y++) {
                    drawPixel(x, y + oY, y < 12 ? COLORS.shirt : COLORS.shirtLight);
                }
            }

            if (armsUp) {
                for (let y = 5; y <= 9; y++) {
                    drawPixel(2, y + oY, COLORS.shirt);
                    drawPixel(13, y + oY, COLORS.shirt);
                }
                drawPixel(2, 4 + oY, COLORS.skin);
                drawPixel(13, 4 + oY, COLORS.skin);
            } else {
                for (let y = 9; y <= 13; y++) {
                    drawPixel(3, y + oY, COLORS.shirt);
                    drawPixel(12, y + oY, COLORS.shirt);
                }
            }

            for (let x = 4; x <= 11; x++) {
                drawPixel(x, 15 + oY, COLORS.pants);
                drawPixel(x, 16 + oY, COLORS.pants);
            }

            if (legSpread) {
                for (let x = 3; x <= 5; x++) {
                    drawPixel(x, 17 + oY, COLORS.pants);
                    drawPixel(x, 18 + oY, COLORS.shoes);
                }
                for (let x = 10; x <= 12; x++) {
                    drawPixel(x, 17 + oY, COLORS.pants);
                    drawPixel(x, 18 + oY, COLORS.shoes);
                }
            } else {
                for (let x = 4; x <= 6; x++) {
                    drawPixel(x, 17 + oY, COLORS.pants);
                    drawPixel(x, 18 + oY, COLORS.shoes);
                }
                for (let x = 9; x <= 11; x++) {
                    drawPixel(x, 17 + oY, COLORS.pants);
                    drawPixel(x, 18 + oY, COLORS.shoes);
                }
            }
        }
    },

    // ---- SENTAR ----
    sit: {
        frames: 2,
        speed: 800,
        draw(frame) {
            const breathe = frame === 0 ? 0 : -1;
            const sitDown = 4;

            drawShadowAtFeet(18 + sitDown + breathe, 1.4, 0.5);

            for (let x = 2; x <= 13; x++) drawPixel(x, 0 + sitDown + breathe, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x, 1 + sitDown + breathe, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x, 2 + sitDown + breathe, COLORS.hair);

            for (let x = 2; x <= 13; x++) {
                for (let y = 3; y <= 8; y++) {
                    drawPixel(x, y + sitDown + breathe, COLORS.skin);
                }
            }

            drawPixel(4, 5 + sitDown + breathe, COLORS.eyes);
            drawPixel(5, 5 + sitDown + breathe, COLORS.eyes);
            drawPixel(10, 5 + sitDown + breathe, COLORS.eyes);
            drawPixel(11, 5 + sitDown + breathe, COLORS.eyes);
            drawPixel(5, 5 + sitDown + breathe, COLORS.pupils);
            drawPixel(10, 5 + sitDown + breathe, COLORS.pupils);

            drawPixel(3, 6 + sitDown + breathe, COLORS.blush);
            drawPixel(12, 6 + sitDown + breathe, COLORS.blush);

            drawPixel(7, 7 + sitDown + breathe, COLORS.mouth);
            drawPixel(8, 7 + sitDown + breathe, COLORS.mouth);

            for (let x = 4; x <= 11; x++) {
                for (let y = 9; y <= 13; y++) {
                    drawPixel(x, y + sitDown + breathe, y < 12 ? COLORS.shirt : COLORS.shirtLight);
                }
            }

            for (let y = 9; y <= 11; y++) {
                drawPixel(3, y + sitDown + breathe, COLORS.shirt);
                drawPixel(12, y + sitDown + breathe, COLORS.shirt);
            }

            drawPixel(4, 12 + sitDown + breathe, COLORS.shirt);
            drawPixel(4, 13 + sitDown + breathe, COLORS.shirt);
            drawPixel(5, 14 + sitDown + breathe, COLORS.skin);
            drawPixel(6, 14 + sitDown + breathe, COLORS.skin);
            
            drawPixel(11, 12 + sitDown + breathe, COLORS.shirt);
            drawPixel(11, 13 + sitDown + breathe, COLORS.shirt);
            drawPixel(9, 14 + sitDown + breathe, COLORS.skin);
            drawPixel(10, 14 + sitDown + breathe, COLORS.skin);

            for (let x = 2; x <= 13; x++) {
                drawPixel(x, 15 + sitDown + breathe, COLORS.pants);
            }
            for (let x = 2; x <= 13; x++) {
                drawPixel(x, 16 + sitDown + breathe, COLORS.pants);
            }
            
            for (let x = 3; x <= 12; x++) {
                drawPixel(x, 17 + sitDown + breathe, COLORS.pants);
            }

            drawPixel(2, 17 + sitDown + breathe, COLORS.shoes);
            drawPixel(2, 18 + sitDown + breathe, COLORS.shoes);
            drawPixel(3, 18 + sitDown + breathe, COLORS.shoes);
            drawPixel(4, 18 + sitDown + breathe, COLORS.shoes);
            
            drawPixel(13, 17 + sitDown + breathe, COLORS.shoes);
            drawPixel(13, 18 + sitDown + breathe, COLORS.shoes);
            drawPixel(12, 18 + sitDown + breathe, COLORS.shoes);
            drawPixel(11, 18 + sitDown + breathe, COLORS.shoes);
        }
    },

    // ---- DANÇAR ----
    dance: {
        frames: 4,
        speed: 250,
        draw(frame) {
            const sway = [-1, 0, 1, 0][frame];
            const armPose = frame;
            const bounce = [0, -2, 0, -2][frame];

            drawShadowAtFeet(18, 1 + Math.abs(bounce) * 0.05, 0.45 - Math.abs(bounce) * 0.03);

            for (let x = 2; x <= 13; x++) drawPixel(x + sway, 0 + bounce, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x + sway, 1 + bounce, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x + sway, 2 + bounce, COLORS.hair);

            for (let x = 2; x <= 13; x++) {
                for (let y = 3; y <= 8; y++) {
                    drawPixel(x + sway, y + bounce, COLORS.skin);
                }
            }

            drawPixel(4 + sway, 5 + bounce, COLORS.pupils);
            drawPixel(5 + sway, 5 + bounce, COLORS.pupils);
            drawPixel(4 + sway, 4 + bounce, COLORS.pupils);
            drawPixel(10 + sway, 5 + bounce, COLORS.pupils);
            drawPixel(11 + sway, 5 + bounce, COLORS.pupils);
            drawPixel(11 + sway, 4 + bounce, COLORS.pupils);

            for (let x = 6; x <= 9; x++) {
                drawPixel(x + sway, 7 + bounce, COLORS.mouth);
            }
            drawPixel(6 + sway, 6 + bounce, COLORS.mouth);
            drawPixel(9 + sway, 6 + bounce, COLORS.mouth);

            for (let x = 4; x <= 11; x++) {
                for (let y = 9; y <= 14; y++) {
                    drawPixel(x + sway, y + bounce, y < 12 ? COLORS.shirt : COLORS.shirtLight);
                }
            }

            if (armPose === 0 || armPose === 2) {
                for (let y = 4; y <= 9; y++) drawPixel(2 + sway, y + bounce, COLORS.shirt);
                drawPixel(1 + sway, 4 + bounce, COLORS.skin);
                for (let y = 10; y <= 15; y++) drawPixel(12 + sway, y + bounce, COLORS.shirt);
                drawPixel(13 + sway, 15 + bounce, COLORS.skin);
            } else {
                for (let y = 10; y <= 15; y++) drawPixel(3 + sway, y + bounce, COLORS.shirt);
                drawPixel(2 + sway, 15 + bounce, COLORS.skin);
                for (let y = 4; y <= 9; y++) drawPixel(13 + sway, y + bounce, COLORS.shirt);
                drawPixel(14 + sway, 4 + bounce, COLORS.skin);
            }

            for (let x = 4; x <= 11; x++) {
                drawPixel(x + sway, 15 + bounce, COLORS.pants);
                drawPixel(x + sway, 16 + bounce, COLORS.pants);
            }

            const legKick = frame % 2 === 0;
            for (let x = 4; x <= 6; x++) {
                drawPixel(x + sway, 17 + bounce + (legKick ? -1 : 0), COLORS.pants);
                drawPixel(x + sway, 18 + bounce + (legKick ? -1 : 0), COLORS.shoes);
            }
            for (let x = 9; x <= 11; x++) {
                drawPixel(x + sway, 17 + bounce + (legKick ? 0 : -1), COLORS.pants);
                drawPixel(x + sway, 18 + bounce + (legKick ? 0 : -1), COLORS.shoes);
            }
        }
    },

    // ---- ACENAR ----
    wave: {
        frames: 4,
        speed: 300,
        draw(frame) {
            const waveAngle = [0, 1, 2, 1][frame];

            drawShadowAtFeet(18);

            for (let x = 2; x <= 13; x++) drawPixel(x, 0, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x, 1, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x, 2, COLORS.hair);

            for (let x = 2; x <= 13; x++) {
                for (let y = 3; y <= 8; y++) {
                    drawPixel(x, y, COLORS.skin);
                }
            }

            drawPixel(4, 5, COLORS.eyes);
            drawPixel(5, 5, COLORS.eyes);
            drawPixel(10, 5, COLORS.eyes);
            drawPixel(11, 5, COLORS.eyes);
            drawPixel(5, 5, COLORS.pupils);
            drawPixel(10, 5, COLORS.pupils);

            drawPixel(7, 7, COLORS.mouth);
            drawPixel(8, 7, COLORS.mouth);

            for (let x = 4; x <= 11; x++) {
                for (let y = 9; y <= 14; y++) {
                    drawPixel(x, y, y < 12 ? COLORS.shirt : COLORS.shirtLight);
                }
            }

            for (let y = 9; y <= 13; y++) drawPixel(3, y, COLORS.shirt);
            drawPixel(3, 14, COLORS.skin);

            for (let y = 5; y <= 9; y++) drawPixel(13, y, COLORS.shirt);
            drawPixel(14 + waveAngle, 3, COLORS.skin);
            drawPixel(14 + waveAngle, 4, COLORS.skin);
            drawPixel(13, 4, COLORS.shirt);
            drawPixel(13, 5, COLORS.shirt);

            for (let x = 4; x <= 11; x++) {
                drawPixel(x, 15, COLORS.pants);
                drawPixel(x, 16, COLORS.pants);
            }
            for (let x = 4; x <= 6; x++) {
                drawPixel(x, 17, COLORS.pants);
                drawPixel(x, 18, COLORS.shoes);
            }
            for (let x = 9; x <= 11; x++) {
                drawPixel(x, 17, COLORS.pants);
                drawPixel(x, 18, COLORS.shoes);
            }
        }
    },

    // ---- DORMIR ----
    sleep: {
        frames: 4,
        speed: 600,
        draw(frame) {
            const headTilt = frame < 2 ? 0 : 1;
            const breathe = frame % 2 === 0 ? 0 : -1;

            drawShadowAtFeet(18);

            for (let x = 2; x <= 13; x++) drawPixel(x + headTilt, 0 + breathe, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x + headTilt, 1 + breathe, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x + headTilt, 2 + breathe, COLORS.hair);

            for (let x = 2; x <= 13; x++) {
                for (let y = 3; y <= 8; y++) {
                    drawPixel(x + headTilt, y + breathe, COLORS.skin);
                }
            }

            drawPixel(4 + headTilt, 5 + breathe, COLORS.outline);
            drawPixel(5 + headTilt, 5 + breathe, COLORS.outline);
            drawPixel(10 + headTilt, 5 + breathe, COLORS.outline);
            drawPixel(11 + headTilt, 5 + breathe, COLORS.outline);

            drawPixel(3 + headTilt, 6 + breathe, COLORS.blush);
            drawPixel(12 + headTilt, 6 + breathe, COLORS.blush);

            drawPixel(7 + headTilt, 7 + breathe, COLORS.mouth);
            drawPixel(8 + headTilt, 7 + breathe, COLORS.mouth);

            const zX = frame % 2 === 0 ? 15 : 16;
            const zY = frame < 2 ? 0 : -1;
            drawPixel(zX, zY + breathe, '#c4b5fd');
            drawPixel(zX + 1, zY - 1 + breathe, '#c4b5fd');
            drawPixel(zX + 2, zY + breathe, '#c4b5fd');
            drawPixel(zX, zY + 1 + breathe, '#c4b5fd');
            drawPixel(zX + 2, zY + 1 + breathe, '#c4b5fd');
            
            const z2X = zX + 3;
            const z2Y = zY - 3;
            drawPixel(z2X, z2Y + breathe, '#818cf8');
            drawPixel(z2X + 1, z2Y - 1 + breathe, '#818cf8');
            drawPixel(z2X + 2, z2Y + breathe, '#818cf8');
            drawPixel(z2X, z2Y + 1 + breathe, '#818cf8');
            drawPixel(z2X + 2, z2Y + 1 + breathe, '#818cf8');

            for (let x = 4; x <= 11; x++) {
                for (let y = 9; y <= 14; y++) {
                    drawPixel(x, y + breathe, y < 12 ? COLORS.shirt : COLORS.shirtLight);
                }
            }

            for (let y = 9; y <= 13; y++) {
                drawPixel(3, y + breathe, COLORS.shirt);
                drawPixel(12, y + breathe, COLORS.shirt);
            }
            drawPixel(3, 14 + breathe, COLORS.skin);
            drawPixel(12, 14 + breathe, COLORS.skin);

            for (let x = 4; x <= 11; x++) {
                drawPixel(x, 15 + breathe, COLORS.pants);
                drawPixel(x, 16 + breathe, COLORS.pants);
            }

            for (let x = 4; x <= 6; x++) {
                drawPixel(x, 17 + breathe, COLORS.pants);
                drawPixel(x, 18 + breathe, COLORS.shoes);
            }
            for (let x = 9; x <= 11; x++) {
                drawPixel(x, 17 + breathe, COLORS.pants);
                drawPixel(x, 18 + breathe, COLORS.shoes);
            }
        }
    },

    // ---- RIR ----
    laugh: {
        frames: 4,
        speed: 200,
        draw(frame) {
            const bounce = [0, -2, 0, -2][frame];
            const shake = [-1, 1, -1, 1][frame];

            drawShadowAtFeet(18, 1.1, 0.45);

            for (let x = 2; x <= 13; x++) drawPixel(x + shake, 0 + bounce, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x + shake, 1 + bounce, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x + shake, 2 + bounce, COLORS.hair);

            for (let x = 2; x <= 13; x++) {
                for (let y = 3; y <= 8; y++) {
                    drawPixel(x + shake, y + bounce, COLORS.skin);
                }
            }

            drawPixel(3 + shake, 5 + bounce, COLORS.pupils);
            drawPixel(4 + shake, 4 + bounce, COLORS.pupils);
            drawPixel(5 + shake, 4 + bounce, COLORS.pupils);
            drawPixel(6 + shake, 5 + bounce, COLORS.pupils);
            
            drawPixel(9 + shake, 5 + bounce, COLORS.pupils);
            drawPixel(10 + shake, 4 + bounce, COLORS.pupils);
            drawPixel(11 + shake, 4 + bounce, COLORS.pupils);
            drawPixel(12 + shake, 5 + bounce, COLORS.pupils);

            for (let x = 5; x <= 10; x++) {
                drawPixel(x + shake, 7 + bounce, COLORS.outline);
            }
            for (let x = 6; x <= 9; x++) {
                drawPixel(x + shake, 8 + bounce, COLORS.mouth);
            }

            drawPixel(2 + shake, 6 + bounce, COLORS.blush);
            drawPixel(3 + shake, 6 + bounce, COLORS.blush);
            drawPixel(12 + shake, 6 + bounce, COLORS.blush);
            drawPixel(13 + shake, 6 + bounce, COLORS.blush);

            for (let x = 4; x <= 11; x++) {
                for (let y = 9; y <= 14; y++) {
                    drawPixel(x, y + bounce, y < 12 ? COLORS.shirt : COLORS.shirtLight);
                }
            }

            drawPixel(3, 10 + bounce, COLORS.shirt);
            drawPixel(3, 11 + bounce, COLORS.shirt);
            drawPixel(4, 12 + bounce, COLORS.shirt);
            drawPixel(5, 13 + bounce, COLORS.skin);
            
            drawPixel(12, 10 + bounce, COLORS.shirt);
            drawPixel(12, 11 + bounce, COLORS.shirt);
            drawPixel(11, 12 + bounce, COLORS.shirt);
            drawPixel(10, 13 + bounce, COLORS.skin);

            for (let x = 4; x <= 11; x++) {
                drawPixel(x, 15 + bounce, COLORS.pants);
                drawPixel(x, 16 + bounce, COLORS.pants);
            }

            for (let x = 4; x <= 6; x++) {
                drawPixel(x, 17 + bounce, COLORS.pants);
                drawPixel(x, 18 + bounce, COLORS.shoes);
            }
            for (let x = 9; x <= 11; x++) {
                drawPixel(x, 17 + bounce, COLORS.pants);
                drawPixel(x, 18 + bounce, COLORS.shoes);
            }
        }
    },

    // ---- CHORAR ----
    cry: {
        frames: 4,
        speed: 350,
        draw(frame) {
            const breathe = frame % 2 === 0 ? 0 : -1;
            const tearFall = frame;

            drawShadowAtFeet(18 + breathe);

            for (let x = 2; x <= 13; x++) drawPixel(x, 1 + breathe, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x, 2 + breathe, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x, 3 + breathe, COLORS.hair);

            for (let x = 2; x <= 13; x++) {
                for (let y = 4; y <= 9; y++) {
                    drawPixel(x, y + breathe, COLORS.skin);
                }
            }

            drawPixel(3, 6 + breathe, COLORS.outline);
            drawPixel(4, 6 + breathe, COLORS.outline);
            drawPixel(5, 6 + breathe, COLORS.outline);
            drawPixel(6, 6 + breathe, COLORS.outline);
            
            drawPixel(9, 6 + breathe, COLORS.outline);
            drawPixel(10, 6 + breathe, COLORS.outline);
            drawPixel(11, 6 + breathe, COLORS.outline);
            drawPixel(12, 6 + breathe, COLORS.outline);

            drawPixel(3, 7 + breathe + tearFall, '#60a5fa');
            drawPixel(3, 8 + breathe + tearFall, '#3b82f6');
            
            drawPixel(12, 7 + breathe + tearFall, '#60a5fa');
            drawPixel(12, 8 + breathe + tearFall, '#3b82f6');

            if (frame >= 2) {
                drawPixel(4, 7 + breathe, '#60a5fa');
                drawPixel(11, 7 + breathe, '#60a5fa');
            }

            drawPixel(2, 7 + breathe, COLORS.blush);
            drawPixel(13, 7 + breathe, COLORS.blush);

            drawPixel(6, 9 + breathe, COLORS.mouth);
            drawPixel(7, 8 + breathe, COLORS.mouth);
            drawPixel(8, 8 + breathe, COLORS.mouth);
            drawPixel(9, 9 + breathe, COLORS.mouth);

            for (let x = 4; x <= 11; x++) {
                for (let y = 10; y <= 14; y++) {
                    drawPixel(x, y + breathe, y < 12 ? COLORS.shirt : COLORS.shirtLight);
                }
            }

            drawPixel(4, 10 + breathe, COLORS.shirt);
            drawPixel(4, 11 + breathe, COLORS.shirt);
            drawPixel(5, 9 + breathe, COLORS.skin);
            
            drawPixel(11, 10 + breathe, COLORS.shirt);
            drawPixel(11, 11 + breathe, COLORS.shirt);
            drawPixel(10, 9 + breathe, COLORS.skin);

            for (let x = 4; x <= 11; x++) {
                drawPixel(x, 15 + breathe, COLORS.pants);
                drawPixel(x, 16 + breathe, COLORS.pants);
            }

            for (let x = 4; x <= 6; x++) {
                drawPixel(x, 17 + breathe, COLORS.pants);
                drawPixel(x, 18 + breathe, COLORS.shoes);
            }
            for (let x = 9; x <= 11; x++) {
                drawPixel(x, 17 + breathe, COLORS.pants);
                drawPixel(x, 18 + breathe, COLORS.shoes);
            }
        }
    },

    // ---- PENSAR ----
    think: {
        frames: 4,
        speed: 500,
        draw(frame) {
            const breathe = frame % 2 === 0 ? 0 : -1;
            const bubbleSize = frame;

            drawShadowAtFeet(18 + breathe);

            for (let x = 2; x <= 13; x++) drawPixel(x, 0 + breathe, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x, 1 + breathe, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x, 2 + breathe, COLORS.hair);

            for (let x = 2; x <= 13; x++) {
                for (let y = 3; y <= 8; y++) {
                    drawPixel(x, y + breathe, COLORS.skin);
                }
            }

            drawPixel(4, 4 + breathe, COLORS.eyes);
            drawPixel(5, 4 + breathe, COLORS.eyes);
            drawPixel(10, 4 + breathe, COLORS.eyes);
            drawPixel(11, 4 + breathe, COLORS.eyes);
            drawPixel(5, 4 + breathe, COLORS.pupils);
            drawPixel(10, 4 + breathe, COLORS.pupils);

            drawPixel(7, 7 + breathe, COLORS.mouth);
            drawPixel(8, 7 + breathe, COLORS.mouth);

            drawPixel(15, 3 + breathe, '#fff');
            drawPixel(16, 2 + breathe, '#fff');
            
            if (bubbleSize >= 1) {
                drawPixel(17, 0 + breathe, '#fff');
                drawPixel(18, 0 + breathe, '#fff');
                drawPixel(17, 1 + breathe, '#fff');
                drawPixel(18, 1 + breathe, '#fff');
            }
            
            if (bubbleSize >= 2) {
                drawPixel(19, -1 + breathe, '#fff');
                drawPixel(20, -1 + breathe, '#fff');
                drawPixel(19, 0 + breathe, '#fff');
                drawPixel(20, 0 + breathe, '#fff');
                drawPixel(19, -2 + breathe, COLORS.outline);
                drawPixel(20, -2 + breathe, COLORS.outline);
            }

            if (bubbleSize >= 3) {
                drawPixel(19, -3 + breathe, COLORS.outline);
                drawPixel(20, -4 + breathe, COLORS.outline);
                drawPixel(20, -3 + breathe, COLORS.outline);
            }

            for (let x = 4; x <= 11; x++) {
                for (let y = 9; y <= 14; y++) {
                    drawPixel(x, y + breathe, y < 12 ? COLORS.shirt : COLORS.shirtLight);
                }
            }

            drawPixel(12, 9 + breathe, COLORS.shirt);
            drawPixel(13, 8 + breathe, COLORS.shirt);
            drawPixel(13, 7 + breathe, COLORS.shirt);
            drawPixel(12, 6 + breathe, COLORS.skin);

            for (let y = 9; y <= 13; y++) drawPixel(3, y + breathe, COLORS.shirt);
            drawPixel(3, 14 + breathe, COLORS.skin);

            for (let x = 4; x <= 11; x++) {
                drawPixel(x, 15 + breathe, COLORS.pants);
                drawPixel(x, 16 + breathe, COLORS.pants);
            }

            for (let x = 4; x <= 6; x++) {
                drawPixel(x, 17 + breathe, COLORS.pants);
                drawPixel(x, 18 + breathe, COLORS.shoes);
            }
            for (let x = 9; x <= 11; x++) {
                drawPixel(x, 17 + breathe, COLORS.pants);
                drawPixel(x, 18 + breathe, COLORS.shoes);
            }
        }
    },

    // ---- ASSUSTADO ----
    scared: {
        frames: 4,
        speed: 120,
        draw(frame) {
            const shake = [-2, 2, -1, 1][frame];
            const bounce = [0, -1, 0, -1][frame];

            drawShadowAtFeet(18 + bounce);

            for (let x = 2; x <= 13; x++) drawPixel(x + shake, 0 + bounce, COLORS.hair);
            drawPixel(3 + shake, -1 + bounce, COLORS.hair);
            drawPixel(5 + shake, -2 + bounce, COLORS.hair);
            drawPixel(7 + shake, -1 + bounce, COLORS.hair);
            drawPixel(9 + shake, -2 + bounce, COLORS.hair);
            drawPixel(11 + shake, -1 + bounce, COLORS.hair);
            
            for (let x = 1; x <= 14; x++) drawPixel(x + shake, 1 + bounce, COLORS.hair);
            for (let x = 1; x <= 14; x++) drawPixel(x + shake, 2 + bounce, COLORS.hair);

            for (let x = 2; x <= 13; x++) {
                for (let y = 3; y <= 8; y++) {
                    drawPixel(x + shake, y + bounce, COLORS.skin);
                }
            }

            for (let x = 3; x <= 6; x++) {
                for (let y = 4; y <= 6; y++) {
                    drawPixel(x + shake, y + bounce, COLORS.eyes);
                }
            }
            for (let x = 9; x <= 12; x++) {
                for (let y = 4; y <= 6; y++) {
                    drawPixel(x + shake, y + bounce, COLORS.eyes);
                }
            }
            drawPixel(5 + shake, 5 + bounce, COLORS.pupils);
            drawPixel(10 + shake, 5 + bounce, COLORS.pupils);

            drawPixel(7 + shake, 7 + bounce, COLORS.outline);
            drawPixel(8 + shake, 7 + bounce, COLORS.outline);
            drawPixel(7 + shake, 8 + bounce, COLORS.mouth);
            drawPixel(8 + shake, 8 + bounce, COLORS.mouth);

            for (let x = 4; x <= 11; x++) {
                for (let y = 9; y <= 14; y++) {
                    drawPixel(x, y + bounce, y < 12 ? COLORS.shirt : COLORS.shirtLight);
                }
            }

            for (let y = 5; y <= 9; y++) {
                drawPixel(2, y + bounce, COLORS.shirt);
                drawPixel(13, y + bounce, COLORS.shirt);
            }
            drawPixel(2, 4 + bounce, COLORS.skin);
            drawPixel(13, 4 + bounce, COLORS.skin);

            drawPixel(0, 4 + bounce, '#60a5fa');
            drawPixel(15, 5 + bounce, '#60a5fa');

            for (let x = 4; x <= 11; x++) {
                drawPixel(x, 15 + bounce, COLORS.pants);
                drawPixel(x, 16 + bounce, COLORS.pants);
            }

            for (let x = 4; x <= 6; x++) {
                drawPixel(x, 17 + bounce, COLORS.pants);
                drawPixel(x, 18 + bounce, COLORS.shoes);
            }
            for (let x = 9; x <= 11; x++) {
                drawPixel(x, 17 + bounce, COLORS.pants);
                drawPixel(x, 18 + bounce, COLORS.shoes);
            }
        }
    },

    // ---- CORRER ----
    run: {
        frames: 4,
        speed: 120,
        draw(frame) {
            const legOffset = [0, 2, 0, -2][frame];
            const armOffset = [2, 0, -2, 0][frame];
            const bounce = [0, -2, 0, -2][frame];

            drawShadowAtFeet(18, 0.9 - Math.abs(bounce) * 0.05, 0.45 - Math.abs(bounce) * 0.05);

            for (let x = 3; x <= 14; x++) drawPixel(x, 0 + bounce, COLORS.hair);
            for (let x = 2; x <= 15; x++) drawPixel(x, 1 + bounce, COLORS.hair);
            for (let x = 2; x <= 15; x++) drawPixel(x, 2 + bounce, COLORS.hair);

            for (let x = 3; x <= 14; x++) {
                for (let y = 3; y <= 8; y++) {
                    drawPixel(x, y + bounce, COLORS.skin);
                }
            }

            drawPixel(5, 5 + bounce, COLORS.eyes);
            drawPixel(6, 5 + bounce, COLORS.eyes);
            drawPixel(11, 5 + bounce, COLORS.eyes);
            drawPixel(12, 5 + bounce, COLORS.eyes);
            drawPixel(6, 5 + bounce, COLORS.pupils);
            drawPixel(12, 5 + bounce, COLORS.pupils);

            drawPixel(8, 7 + bounce, COLORS.mouth);
            drawPixel(9, 7 + bounce, COLORS.mouth);

            for (let x = 5; x <= 12; x++) {
                for (let y = 9; y <= 14; y++) {
                    drawPixel(x, y + bounce, y < 12 ? COLORS.shirt : COLORS.shirtLight);
                }
            }

            for (let y = 9; y <= 12; y++) {
                drawPixel(4, y + bounce + (y > 10 ? armOffset : 0), COLORS.shirt);
                drawPixel(13, y + bounce + (y > 10 ? -armOffset : 0), COLORS.shirt);
            }

            for (let x = 5; x <= 12; x++) {
                drawPixel(x, 15 + bounce, COLORS.pants);
                drawPixel(x, 16 + bounce, COLORS.pants);
            }

            for (let x = 5; x <= 7; x++) {
                drawPixel(x, 17 + bounce + legOffset, COLORS.pants);
                drawPixel(x, 18 + bounce + legOffset, COLORS.shoes);
            }
            for (let x = 10; x <= 12; x++) {
                drawPixel(x, 17 + bounce - legOffset, COLORS.pants);
                drawPixel(x, 18 + bounce - legOffset, COLORS.shoes);
            }
        }
    }
};

// ============================================
// LOOP DE ANIMAÇÃO
// ============================================

function setAction(action) {
    if (animations[action]) {
        if (currentAction !== action) {
            currentAction = action;
            animFrame = 0;
        }
    }
}

let lastTime = 0;

function animateCharacter(timestamp) {
    const anim = animations[currentAction];
    if (!anim) {
        requestAnimationFrame(animateCharacter);
        return;
    }

    if (timestamp - lastTime > anim.speed) {
        lastTime = timestamp;
        animFrame = (animFrame + 1) % anim.frames;
    }

    ctx.clearRect(0, 0, charCanvas.width, charCanvas.height);
    anim.draw(animFrame);

    requestAnimationFrame(animateCharacter);
}

requestAnimationFrame(animateCharacter);