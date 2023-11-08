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


function initalize(){
    ctx.drawImage(img, 0,0, width, height, 0, 0, 32, 64 )
    ctx.drawImage(img, width, 0, width, height, scaledWidth, 0, 32, 64)
    ctx.drawImage(img, width*2, 0, width, height, scaledWidth*2, 0, 32, 64)
    ctx.drawImage(img, width*3, 0, width, height, scaledWidth*3, 0, 32, 64)
    ctx.drawImage(img, width*4, 0, width, height, scaledWidth*4, 0, 32, 64)
    ctx.drawImage(img, width*5, 0, width, height, scaledWidth*5, 0, 32, 64)
}