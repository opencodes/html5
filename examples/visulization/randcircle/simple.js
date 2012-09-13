var maxwidth  = '960';
var maxheight ='600';
var x = 480;
var y = 300;
var w = 20;
var h = 20;
var dx = 15;
var dy = 15;
var rmax = 300;
var z=10;
var r = 30;

function getXCoordinate(y,r){
  
  return parseFloat(Math.sqrt(
                    (parseFloat(r)+parseFloat(y))*(parseFloat(r)-parseFloat(y))
                        ));
}

function draw() {
    
    ctx.fillStyle = get_random_color();
    circle(x, y, r);
    //dx = parseFloat(getXCoordinate(dy,r));
    //console.log(dx);
   // clear(200,100);
   /* ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x-r,y-r);
    ctx.stroke();*/
    if (x + dx > maxwidth || x + dx < 0)
      dx = -dx;
    if (y + dy > maxheight || y + dy < 0)
      dy = -dy;
    
    x += dx;
    y += dy;
   
}
function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  return setInterval(draw, 10);
}

init();