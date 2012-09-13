var maxwidth  = '960';
var maxheight ='600';
var x = 480;
var y = 300;
var w = 20;
var h = 20;
var dx = 2;
var dy = 2;
var rmax = 250;
var z=10;
var colors = ["#FFDAB9", "#E6E6FA", "#E0FFFF", "#E099FF", "#E03FFF", "#E0F33F", "#E0F22F", "#E0F11F", "#E0F00F", "#E0F11F"];


function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.stroke();
}
function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.fill();
}
function circleStroke(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.stroke();
}
function clear() {
  //ctx.clearRect(0, 0, maxwidth, maxheight);
}
/*function draw(){
  clear();
  ctx.fillStyle = "#D74937";
  circle(x, y, z);
  if(z<=10){
    z++;
  }
  if(z >= 250){
    z--;
  }
}
*/
function get_random_color() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

function draw() {
  clear();
  ctx.fillStyle = get_random_color();
  circle(x, y, z);
  ctx.fillStyle = get_random_color();
  circle(x, y, z);
  ctx.fillStyle = get_random_color();
  circleStroke(x, y, z);


  
  //rect(x,y,w,h);
  if (z+dx > rmax || z + dx < 0)
    dx = -dx;
  

  z += dx;
}
function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  return setInterval(draw, 50);
}

init();