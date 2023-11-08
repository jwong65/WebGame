var images =new Array()
images = ['/assets/Idle/Idle1.png','assets/Idle/Idle2.png','assets/Idle/Idle3.png', 'assets/Idle/Idle4.png', 'assets/Idle5.png']
images2 = ['/assets/walk/Right/Walk1.png','/assets/walk/Right/Walk2.png', '/assets/walk/Right/Walk3.png', '/assets/walk/Right/Walk4.png','/assets/walk/Right/Walk5.png', 'Walk6.png']
images3 = ['/assets/walk/Left/Walk1.png','/assets/walk/Left/Walk2.png','/assets/walk/Left/Walk3.png','/assets/walk/Left/Walk4.png','/assets/walk/Left/Walk5.png','/assets/walk/Left/Walk6.png']
// Testing animation for idle.

function newPlayableChar(x, y){
    
    // Character image placeholder.
    const element = newImage('/assets/Idle.gif')
    // Make the Z Index 1 so it is above other elements.
    element.style.zIndex = 1;
    element.style.id = 'character';
    element.style.width = '55px';
    element.style.height = '75px';
   
    // if (direction === null){
    //     element.src = './assets/IdleSprite.png'
    // }

    function handleDirectionChange(direction){
        if (direction===null){
            element.src=`assets/Idle.gif`
        }
        if(direction==='west'){
            element.src='assets/WalkLeft.gif'
        }
        if(direction==='north'){
            element.src= ``
        }
        if(direction ==='east'){
            element.src='assets/WalkRight.gif'
        }
        if(direction ==='south'){
            element.src = ``
        }
    }
   
    move(element).withArrowKeys(x, y, handleDirectionChange)
}
var x= 1
function animate(images){
    document.getElementById('character').src = images[x]
    x++;
    if (x===4){
        x=1
    }
}