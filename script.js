const h1 = document.getElementById('score');
let points = 0;
const canvas = document.getElementById('campoJogo');
const ctx = canvas.getContext('2d');
const tileSize = 60;

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
    ctx.drawImage(personagem.imagem, personagem.x, personagem.y, tileSize, tileSize);
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
        //left                  up                      right                                   down
    if ((personagem.x == 0 || personagem.y == 0 || personagem.x == canvas.width - tileSize || personagem.y == canvas.height - tileSize)){

    } else {
        switch (personagem.direction) {
            case "right":
                personagem.x += personagem.speed;
                personagem.direction = "";
                break;
            case "left":
                personagem.x -= personagem.speed;
                personagem.direction = "";
                break;
            case "up":
                personagem.y -= personagem.speed;
                personagem.direction = "";
                break;
            case "down":
                personagem.y += personagem.speed;
                personagem.direction = "";
                break;
        }
    }


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
            if (personagem.direction != "left") {
                personagem.direction = "right";
            }
            break;
        case 37:
            if (personagem.direction != "right") {
                personagem.direction = "left";
            }
            break;
        case 38:
            if (personagem.direction != "down") {
                personagem.direction = "up";
            }
            break;
        case 40:
            if (personagem.direction != "up") {
                personagem.direction = "down";
            }
            break;
    }
});
