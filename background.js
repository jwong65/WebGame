const backgroundImage = new Image()
backgroundImage.src = './assets/backgroundAssets/Summer7.png'
var obstacleX = 250
var obstacleY = 500
var obstacleWidth = 50
var obstacleHeight = 50
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
    // cts.canvas.width = window.innerWidth
    // cts.canvas.height = window.innerHeight
    cts.drawImage(backgroundImage, 0, 0, backgroundCanvas.width, backgroundCanvas.height)
    drawObstacle(obstacleX, obstacleY, obstacleWidth, obstacleHeight, 'red')
}   