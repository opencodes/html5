var canvas;  
var ctx;
var x = 400;
var y = 300;
var dx = 2;
var dy = 4;
var maxwidth  = '960';
var maxheight ='600';

function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.fill();
}

function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

 
function clear() {
  ctx.clearRect(0, 0, maxwidth, maxheight);
}

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  return setInterval(draw, 10);
}


function draw() {
  clear();
  ctx.fillStyle = "#FAF7F8";
  rect(0,0,maxwidth,maxheight);
  ctx.fillStyle = "#D74937";
  circle(x, y, 10);

  if (x + dx > maxwidth || x + dx < 0)
    dx = -dx;
  if (y + dy > maxheight || y + dy < 0)
    dy = -dy;

  x += dx;
  y += dy;
}

init();