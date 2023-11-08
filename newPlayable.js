

function newPlayableChar(x, y){
    
    // Character image placeholder.
    const element = newImage('/assets/Idle.png')
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
}