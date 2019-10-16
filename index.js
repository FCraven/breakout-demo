const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
const ballRadius = 10
const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

function changeColor() {
  ctx.fillStyle = colorArray[Math.round(Math.random() * colorArray.length)]
  ctx.fill()
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();


  if(y + dy > canvas.height -ballRadius || y + dy < ballRadius){
    changeColor()
    console.log(ctx.fillStyle)
    dy = -dy
  }

  if(x + dx > canvas.width - ballRadius || x + dx < ballRadius){
    changeColor()
    console.log(ctx.fillStyle)
    dx = -dx;
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10)
