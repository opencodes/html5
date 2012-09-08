var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var data = [10,20,45,78,96,66,55,33,54,72];
var settings = {x:450,y:300,r:250,sangle:0,eangle:2*Math.PI};

cnv.piechart(ctx, data, settings);