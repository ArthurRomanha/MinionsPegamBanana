const h1 = document.getElementById('score');
let points = 0;
const canvas = document.getElementById('campoJogo');
const ctx = canvas.getContext('2d');

const size = 30;

let direction;
let loopId;

const randomNumber = () => {
    return Math.round(Math.random() * 19) * size;//20 serve para controlar a quantidade de colunas contabilizadas
}

const food = {
}

const draw = () => {
    
}

const move = () => {

}

const drawEnemy = () => {
}

const drawGrid = () => {
    ctx.lineWidth = 1
    ctx.strokeStyle = 'gray';

    for (let i = 0; i < canvas.width + 30; i += 30) {//linhas verticais
        ctx.beginPath();
        ctx.lineTo(i, 0)
        ctx.lineTo(i, 600)
        ctx.stroke()

        ctx.beginPath();
        ctx.lineTo(0, i);
        ctx.lineTo(600, i);
        ctx.stroke();
    }
}

const colisionEnemy = () => {

}

const checkColision = () => {
    
}

const gameOver = () => {
    window.location.reload();
}
const gameLoop = () => {
    clearInterval(loopId);

    ctx.clearRect(0, 0, 600, 600);
    move();
    draw();
    drawGrid();
    drawEnemy();
    colisionEnemy();
    checkColision();

    loopId = setTimeout(() => {
        gameLoop();
    }, 80)
}

gameLoop();

document.addEventListener('keydown', function (tecla) {
    switch (tecla.keyCode) {
        case 39:
            if (direction != "left") {
                direction = "right";
            }
            break;
        case 37:
            if (direction != "right") {
                direction = "left";
            }
            break;
        case 38:
            if (direction != "down") {
                direction = "up";
            }
            break;
        case 40:
            if (direction != "up") {
                direction = "down";
            }
            break;
    }
});
