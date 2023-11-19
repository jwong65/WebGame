let chr = new Image;

chr.src = './assets/spritesheet/3.png'

// https://dev.to/martyhimmel/moving-a-sprite-sheet-character-with-javascript-3adg

chr.onload() = function(){
    window.requestAnimationFrame(gameLoop)
}