var r = 10;
var dx = 345;
var dy = 0;
var dx2 = 942;
// Keep everything in anonymous function, called on window load.
if(window.addEventListener) {
window.addEventListener('load', function () {

  // Initialization sequence.
  function init () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(dx+200,dy);
    ctx.lineTo(dx+200,dy+600);
    ctx.stroke();
    // Attach the mousemove event handler.
    canvas.addEventListener('click', ev_mousemove, false);
  }

  // The mousemove event handler.
  var started = false;
  function ev_mousemove (ev) {
    var x, y;

    // Get the mouse position relative to the ctx element.
    if (ev.layerX || ev.layerX == 0) { // Firefox
      x = ev.layerX;
      y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) { // Opera
      x = ev.offsetX;
      y = ev.offsetY;
    }
    console.log(x+','+y)

    x = x-dx;y=y-10;

    // The event handler works like a drawing pencil which tracks the mouse 
    // movements. We start drawing a path made up of lines.
    ctx.fillStyle = get_random_color();
    
    
    
    circle(x,y,r);
    r++;
  }

  init();
}, false); }

//
