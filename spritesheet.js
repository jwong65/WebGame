const spriteWidth = 80;
const sprightHeight = 90;

const canvas = document.getElementById("gameCan")
const ctx = canvas.getContext('2d')

let img = new Image();
img.src='./assets/spritesheet/3.png'
img.onload= function(){
    initalize();
}
const scale = 2;
const width = 32;
const height = 64;
const scaledWidth= scale* width;
const scaledHeight = scale*height;

function drawFrames(frameX, frameY, canvasX, canvasY){
    ctx.drawImage(img, frameX *width, frameY* height, width, height, canvasX, canvasY, scaledWidth, scaledHeight)
}


function initalize(){
    // ctx.drawImage(img, 0,0, width, height, 0, 0, 32, 64 )
    // ctx.drawImage(img, width, 0, width, height, scaledWidth, 0, 32, 64)
    // ctx.drawImage(img, width*2, 0, width, height, scaledWidth*2, 0, 32, 64)
    // ctx.drawImage(img, width*3, 0, width, height, scaledWidth*3, 0, 32, 64)
    // ctx.drawImage(img, width*4, 0, width, height, scaledWidth*4, 0, 32, 64)
    // ctx.drawImage(img, width*5, 0, width, height, scaledWidth*5, 0, 32, 64)
    
    // drawFrames(0,0,0,0)
    // drawFrames(1,0, scaledWidth,0)
    // drawFrames(2,0, scaledWidth*2, 0)
    // drawFrames(3,0, scaledWidth*3, 0)
    // drawFrames(4,0, scaledWidth*4, 0)
    // drawFrames(5,0, scaledWidth*5, 0)

    // window.requestAnimationFrame(step)
    window.requestAnimationFrame(initalize)

}

// User Input
let keyPress = {};

window.addEventListener('keydown', keyDownListener, false)
window.addEventListener('keyup', keyUpListener, false)

function keyDownListener(event){
    keyPress[event.key]= true
}
function keyUpListener(event){
    keyPress[event.key]= false
}

const cycleLoop = [0, 1, 0, 2, 3, 4];
let currentLoopIndex = 0;
let frameCount = 0;

function step(){
    // Needs a frameCount
    frameCount++
    // This changes how many frames each so it will only draw after 25 frames pass. 
    if(frameCount<25){
        window.requestAnimationFrame(step);
        return;
    }
    frameCount= 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // This clears the canvas.
    drawFrames(cycleLoop[currentLoopIndex], 0, 0, 0);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length){
        currentLoopIndex = 0;
    }
    window.requestAnimationFrame(step)

}