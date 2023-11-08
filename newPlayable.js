var images =new Array()
images = ['/assets/Idle1.png','assets/Idle2.png','assets/Idle3.png', 'assets/Idle4.png', 'assets/Idle5.png']
// Testing animation for idle.

function newPlayableChar(x, y){
    
    // Character image placeholder.
    const element = newImage('/assets/Idle1.png')
    // Make the Z Index 1 so it is above other elements.
    element.style.zIndex = 1;
    element.style.id = 'character'
   
    // if (direction === null){
    //     element.src = './assets/IdleSprite.png'
    // }
    setInterval('animate()',400);

    function handleDirectionChange(direction){
        if (direction===null){
            element.src = `assets/Idle1.png`
        }
        if(direction==='west'){
            element.src=``
        }
        if(direction==='north'){
            element.src= ``
        }
        if(direction ==='east'){
            element.src = ``
        }
        if(direction ==='south'){
            element.src = ``
        }
    }
    move(element).withArrowKeys(x, y, handleDirectionChange)
}
var x= 1
function animate(){
    document.getElementById('character').src = images[x]
    x++;
    if (x===4){
        x=1
    }
}