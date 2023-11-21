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
let positionX = 0;
let positionY = 500;
// The 0th row is the climbing animation.
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
    drawingFrame(currentLoop[currentIndex],spriteRow,positionX,positionY)
    currentIndex++

    if(currentIndex>=currentLoop.length){
        currentIndex=0;
    }

    window.requestAnimationFrame(idleAnimation)

}

function gameLoop(){
    cts.clearRect(0,0, backgroundCanvas.width, backgroundCanvas.height)
    drawBackground();
    // Based on the keypress, the position in Y and X will change, the way it's setup allows for diagonal movement as it tracs north to south first then west to east
    if(keyPress.a || keyPress.ArrowLeft){
        spriteRow=3
        moveCharacter(-movementSpeed, 0)
    }
    if(keyPress.d ||keyPress.ArrowRight){
        spriteRow=2;
        moveCharacter(movementSpeed,0)
    }
    if(keyPress.w || keyPress.ArrowUp ){
        spriteRow=0;
        moveCharacter(0,-movementSpeed)
    }
    if(keyPress.s || keyPress.ArrowDown){
        moveCharacter(0, movementSpeed)
    }
    if(!(keyPress.w || keyPress.s || keyPress.a || keyPress.d || keyPress.ArrowUp || keyPress.ArrowDown || keyPress.ArrowLeft || keyPress.ArrowRight)){
        // To maintain the idle animation
        spriteRow=1;
    }
    drawingFrame(currentLoop[currentIndex], spriteRow, positionX, positionY)
    window.requestAnimationFrame(gameLoop)

}
// Keeping the character inside the canvas
// Also movement put into own function.
// For example the X positon will be added or subtracted from based on deltaX.

const canvasWidth = backgroundCanvas.width
const canvasHeight = backgroundCanvas.height

function moveCharacter(deltaX, deltaY){
    // positionX += deltaX
    // positionY += deltaY

    const newX = positionX+deltaX;
    const newY = positionY+deltaY;
    // This if statement checks for if newX(the new position if you were to add onto current X position) or newY are greater than 0, because if they were negative it would be outside the canvas
    // It also checks if the new position and the addition of either the charHeight/Width depending on the X/Y scale are greater than the height or width of the canvas.
    // By limiting the movement unless they pass all 4 conditions, the sprite is within the canvas.
    if(newX>=0 && newX+ (charWidth*charScale)<= canvasWidth && newY>=0 && newY + (charHeight*charScale)<=canvasHeight){
        positionX = newX
        positionY = newY
    }
}