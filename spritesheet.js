const spriteWidth = 80;
const sprightHeight = 90;

const canvas = document.getElementById("gameCan")
const ctx = canvas.getContext('2d')

let img = new Image();
img.src='./assets/spritesheet/Owlet_Monster_Idle_4.png'
img.onload= function(){
    initalize();
}



function initalize(){
    ctx.drawImage(img, 0,0, 32, 32, 0, 0, 32, 32 )
}