let backgroundCanvas = document.getElementById("mainCanvas")
let cts = backgroundCanvas.getContext('2d')

let frameCounting = 0;
let currentIndex = 0;
let currentLoop = [0, 1, 2, 3]


let chr = new Image();
chr.src = './assets/spritesheet/characterSheet.png'
chr.onload = function(){
    window.requestAnimationFrame(idleAnimation)
}

const charWidth= 32;
const charHeight = 34;
const charScale = 2;

function drawingFrame(frameX, frameY, canvasX, canvasY){
    cts.drawImage(chr, frameX*charWidth, frameY* charHeight, charWidth, charHeight, canvasX, canvasY, charWidth*charScale, charHeight*charScale)
}


// User Input similar to the moveCharacter script
// Put key presses into an object

let keyPress = {};

window.addEventListener('keydown', keyDownListener, false);
window.addEventListener('keyup', keyUpListener, false);

function keyDownListener(event){
    keyPresses[event.key] = true;
}
function keyUpListener(event){
    keyPresses[event.key] =false;
}


function idleAnimation(){
    frameCounting++
    if(frameCounting<10){
        window.requestAnimationFrame(idleAnimation);
        return;
    }
    // Set the frame count back to 0.
    frameCounting=0;
    cts.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height)
    drawingFrame(currentLoop[currentIndex],1,0,0)
    currentIndex++

    if(currentIndex>=currentLoop.length){
        currentIndex=0;
    }
    window.requestAnimationFrame(idleAnimation)
}

// https://dev.to/martyhimmel/moving-a-sprite-sheet-character-with-javascript-3adg
