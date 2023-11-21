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
let direction =1;

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
    drawingFrame(currentLoop[currentIndex],direction,positionX,positionY)
    currentIndex++

    if(currentIndex>=currentLoop.length){
        currentIndex=0;
    }

    window.requestAnimationFrame(idleAnimation)

}

// https://dev.to/martyhimmel/moving-a-sprite-sheet-character-with-javascript-3adg

function gameLoop(){
    cts.clearRect(0,0, backgroundCanvas.width, backgroundCanvas.height)
    // Based on the keypress, the position in Y and X will change, the way it's setup allows for diagonal movement as it tracs north to south first then west to east
     if(keyPress.a || keyPress.ArrowLeft){
        direction=3
        positionX-= movementSpeed;
    }
    else if(keyPress.d ||keyPress.ArrowRight){
        positionX += movementSpeed;
        direction=2;
    }
    if(keyPress.w || keyPress.ArrowUp ){
        positionY -= movementSpeed;
        direction =0;
    }else if(keyPress.s || keyPress.ArrowDown){
        positionY+=movementSpeed
    }
    else{
        // To maintain the idle animation
        direction=1;
    }
    drawingFrame(currentLoop[currentIndex], direction, positionX, positionY)
    window.requestAnimationFrame(gameLoop)

}
