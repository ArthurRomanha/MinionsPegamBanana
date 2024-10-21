const h1 = document.getElementById('score');
let points = 0;
const canvas = document.getElementById('campoJogo');
const ctx = canvas.getContext('2d');
const tileSize = 30;

const personagem = {
    imagem: document.getElementById("personagem"),
    x: 30,
    y: 30,
    direction: "",
    speed: 30
}


const size = 30;

let direction;
let loopId;

const randomNumber = () => {
    return Math.round(Math.random() * 19) * size;//20 serve para controlar a quantidade de colunas contabilizadas
}

const food = {
}

const draw = () => {
    ctx.drawImage(personagem.imagem, personagem.x, personagem.y, tileSize*2, tileSize*2);
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
        case 39://right
            if (personagem.x < canvas.width - tileSize*2) { personagem.x += tileSize; }
            break;
        case 37://left
            if (personagem.x > 0) { personagem.x -= tileSize; }
            break;
        case 38://up
            if (personagem.y > 0) { personagem.y -= tileSize; }
            break;
        case 40://down
            if (personagem.y < canvas.height - tileSize*2) { personagem.y += tileSize; }
            break;
    }
});
