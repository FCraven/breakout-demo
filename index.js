const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let x = canvas.width/2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
const ballRadius = 10
const paddleHeight = 10;
const paddleWidth = 75;
const paddleX = (canvas.width-paddleWidth) / 2



function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath()
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#0095DD'
  ctx.fill()
  ctx.closePath()
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
    if(y + dy > canvas.height - ballRadius || y + dy < ballRadius){
      dy = -dy
    }
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius){
      dx = -dx;
    }
  x += dx;
  y += dy;
}

setInterval(draw, 20)
