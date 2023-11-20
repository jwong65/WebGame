let backgroundCanvas = document.getElementById("mainCanvas")
let cts = backgroundCanvas.getContext('2d')

let frameCounting = 0;
let currentIndex = 0;
let currentLoop = [0, 1, 2, 3]


let chr = new Image();
chr.src = './assets/spritesheet/Owlet_Monster_Idle_4.png'
chr.onload = function(){
    idleFrames();
}

const charWidth= 33;
const charHeight = 34;
const charScale = 2;

// https://dev.to/martyhimmel/moving-a-sprite-sheet-character-with-javascript-3adg

function idleFrames(){
    drawingFrame(0,0,0,0)
}

function drawingFrame(frameX, frameY, canvasX, canvasY){
    cts.drawImage(chr, frameX*charWidth, frameY* charHeight, charWidth, charHeight, canvasX, canvasY, charWidth*charScale, charHeight*charScale)
}