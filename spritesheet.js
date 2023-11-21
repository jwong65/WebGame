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

const cycleLoop = [0, 1, 2, 3, 4];
let currentLoopIndex = 0;
let frameCount = 0;

function step(){
    // Needs a frameCount
    frameCount++;
    // This changes how many frames each so it will only draw after 25 frames pass. 
    if(frameCount<15){
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
function initalize(){
    window.requestAnimationFrame(step)
}
