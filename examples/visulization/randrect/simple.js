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


function draw() {
  ctx.strokeStyle = get_random_color();
  x=getRandomInt(0,960);
  y=getRandomInt(0,600)
  rect(x, y, z,z);  
}
function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  return setInterval(draw, 10);
}

init();