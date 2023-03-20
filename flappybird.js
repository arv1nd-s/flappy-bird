// environment
let canvas;
let canvasWidth = 360;
let canvasHeight = 640;
let context;

// bird
let birdWidth = 34;          // bird image ratio -> w:h = 408:228 = 17:12
let birdHeight = 24;
let birdX = canvasWidth/8;   // bird's x position
let birdY = canvasHeight/2;  // bird's y position
let birdImg;
                             // point of reference -> top-left
let bird = {                 // bird object
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight
}

// pipes
let pipeArray = [];
let pipeWidth = 64;          // pipe image ratio -> 384/3072 = 1/8
let pipeHeight = 512;
let pipeX = canvasWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

window.onload = function() {
    canvas = document.getElementById('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    context = canvas.getContext("2d");          //used for drawing on the canvas

    // draw flappy bird
    birdImg = new Image();
    birdImg.src = "./images/flappybird.png";
    birdImg.onload = function(){
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    topPipeImg = new Image();
    topPipeImg.src = "./images/toppipe.png";
    
    bottomPipeImg = new Image();
    bottomPipeImg.src = "./images/bottompipe.png";

    requestAnimationFrame(update);
    setInterval(placePipes, 1500);            // every 1.5 seconds
}

function update(){
    context.clearRect(0, 0, canvas.width, canvas.height);

    // bird
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
}

function placePipes(){
    let topPipe = {
        img: topPipeImg,
        x: pipeX,
        y: pipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }

    pipeArray.push(topPipe);
}