// environment
let canvas;
let canvasWidth = 360;
let canvasHeight = 640;
let context;

window.onload = function() {
    canvas = document.getElementById('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    context = canvas.getContext("2d");          //used for drawing on the canvas
}