function newPlayableChar(x, y){
    
    // Character image placeholder.
    const element = newImage('assets/standing.png')
    // Make the Z Index 1 so it is above other elements.
    element.style.zIndex = 1;
    element.style.id = 'character';
    element.style.width = '80px';
    element.style.height = '90px';
   
    // if (direction === null){
    //     element.src = './assets/IdleSprite.png'
    // }

    function handleDirectionChange(direction){
        if (direction===null){
            element.src='assets/IdleAnimation.gif'
        }
        if(direction==='west'){
            element.src='assets/WalkLeft.gif'
        }
        if(direction==='north'){
            element.src= `assets/Up.gif`
        }
        if(direction ==='east'){
            element.src='assets/WalkRight.gif'
        }
        if(direction ==='south'){
            element.src = `assets/Down.gif`
        }
    }
    move(element).withArrowKeys(x, y, handleDirectionChange)
    // move(element).withArrowKeys(x, y)
}
const body = document.getElementById('fullBody')
const ctxx = body.getContext('2d')

const cycleLoops = [0, 1, 2, 3];
let currentLoopIndexs = 0;
let frameCounts = 0;

const scales = 2;
const widths = 32;
const heights = 32;
const scaledWidths= scales* widths;
const scaledHeights = scales*heights;


let cimg = new Image()
cimg.src = './assets/spritesheet/Owlet_Monster_Idle_4.png'
cimg.onload = function(){
    idling()
}

function idling(){  
    drawFramed(0,0,0,0)
    drawFramed(1,0, scaledWidth,0)
    drawFramed(2,0, scaledWidth*2, 0)
    drawFramed(3,0, scaledWidth*3, 0)
    window.requestAnimationFrame(steps)
}
function drawFramed(frameX, frameY, canvasX, canvasY){
    ctxx.drawImage(cimg, frameX *widths, frameY* heights, widths, heights, canvasX, canvasY, scaledWidths, scaledHeights)
}
function steps(){
    frameCounts++
    // This changes how many frames each so it will only draw after 25 frames pass. 
    if(frameCounts<25){
        window.requestAnimationFrame(steps);
        return;
    }
    frameCounts= 0;
    ctxx.clearRect(0, 0, canvas.width, canvas.height);
    drawFramed(cycleLoops[currentLoopIndexs], 0, 0, 0);
    currentLoopIndexs++;
    if (currentLoopIndexs >= cycleLoops.length){
        currentLoopIndexs = 0;
    }
    window.requestAnimationFrame(steps)
}

// https://dev.to/martyhimmel/moving-a-sprite-sheet-character-with-javascript-3adg