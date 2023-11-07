const playchar= newPlayableChar(50,100)


function newPlayableChar(x, y){
    // Character image placeholder.
    const element = newImage('assets/IdleSprite.png')
    // Make the Z Index 1 so it is above other elements.
    element.style.zIndex = 1;

    if (direction === null){
        element.src = 'assets/IdleSprite.png'
    }
}
