const backgroundImage = new Image()
backgroundImage.src = './assets/backgroundAssets/Summer7.png'
let obstacleX = 250
let obstacleY =500
const obstacleSpeed = 2;

function drawObstacle(x, y, width, height, color){
    cts.fillStyle = color;
    cts.fillRect(x,y, width, height)
}

function moveObstacle(){
    // Need to change the X coordinates by the obstacleSpeed.
    obstacleX += obstacleSpeed
    if(obstacleX>backgroundCanvas.width){
        obstacleX =- 50
    }
}

function drawBackground(){
    cts.drawImage(backgroundImage, 0, 0, backgroundCanvas.width, backgroundCanvas.height)
    drawObstacle(obstacleX, obstacleY, 50, 50, 'red')
}   