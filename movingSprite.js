let backgroundCanvas = document.getElementById("mainCanvas")
let cts = backgroundCanvas.getContext('2d')

let frameCounting = 0;
let currentIndex = 0;
let currentLoop = [0, 1, 2, 3]


let chr = new Image();
chr.src = './assets/spritesheet/characterSheet.png'
chr.onload = function(){
    window.requestAnimationFrame(idleAnimation)
    window.requestAnimationFrame(gameLoop)
}

const charWidth= 32;
const charHeight = 34;
const charScale = 2;

const movementSpeed =1;

function drawingFrame(frameX, frameY, canvasX, canvasY){
    cts.drawImage(chr, frameX*charWidth, frameY* charHeight, charWidth, charHeight, canvasX, canvasY, charWidth*charScale, charHeight*charScale)
}


// User Input similar to the moveCharacter script
// Put key presses into an object, this can also be done by tracking specific buttons like in moveCharacter.

let keyPress = {};
let positionX =0;
let positionY =0;
let spriteRow =1;

window.addEventListener('keydown', keyDownListener, false);
function keyDownListener(event){
    keyPress[event.key] = true;
    // console.log(keyPress)
}

window.addEventListener('keyup', keyUpListener, false);
function keyUpListener(event){
    keyPress[event.key] =false;
}


function idleAnimation(){
    frameCounting++
    if(frameCounting<5){
        window.requestAnimationFrame(idleAnimation);
        return;
    }
    // Set the frame count back to 0.
    frameCounting=0;
    cts.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height)
    drawingFrame(currentLoop[currentIndex],spriteRow,positionX,positionY)
    currentIndex++

    if(currentIndex>=currentLoop.length){
        currentIndex=0;
    }

    window.requestAnimationFrame(idleAnimation)

}

function gameLoop(){
    cts.clearRect(0,0, backgroundCanvas.width, backgroundCanvas.height)
    // Based on the keypress, the position in Y and X will change, the way it's setup allows for diagonal movement as it tracs north to south first then west to east
    if(keyPress.a || keyPress.ArrowLeft){
        spriteRow=3
        moveCharacter(-movementSpeed, 0)
    }

    else if(keyPress.d ||keyPress.ArrowRight){
        spriteRow=2;
        moveCharacter(movementSpeed,0)
    }
    if(keyPress.w || keyPress.ArrowUp ){
        spriteRow=0;
        moveCharacter(0,-movementSpeed)
    }else if(keyPress.s || keyPress.ArrowDown){
        moveCharacter(0, movementSpeed)
    }
    else{
        // To maintain the idle animation
        spriteRow=1;
    }
    drawingFrame(currentLoop[currentIndex], spriteRow, positionX, positionY)
    window.requestAnimationFrame(gameLoop)

}
// Keeping the character inside the canvas
// Also movement put into own function.
// For example the X positon will be added or subtracted from based on deltaX.

function moveCharacter(deltaX, deltaY){
    positionX += deltaX
    positionY += deltaY
    // if (positionX +deltaX)
}