const backgroundImage = new Image()
backgroundImage.src = './assets/backgroundAssets/Summer7.png'
function drawObstacle(x, y, width, height){
    cts.fillStyle = color;
    cts.fillRect(x,y, width, outerHeight)

}

function drawBackground(){
    cts.drawImage(backgroundImage, 0, 0, backgroundCanvas.width, backgroundCanvas.height)

    // drawObstacle(100, 200, 50, 50, 'red')
}   