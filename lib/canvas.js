var cnv = {
    piechart: function (ctx,data,settings){
      var labels = ["one", "two", "three","four","five","six","seven","seven","eight","nine","ten"];
      var colors = ["#FFDAB9", "#E6E6FA", "#E0FFFF", "#E099FF", "#E03FFF", "#E0F33F", "#E0F22F", "#E0F11F", "#E0F00F", "#E0F11F"];
      //Draw Circle
      var startangle = 0;
      var endangle   = 0;
      var total=0;
      for(var i in data) { total += data[i]; }

      for(var k=0;k < data.length;k++){   
        endangle  += Math.PI*2*(data[k]/total);
        console.log(startangle+','+endangle)
        ctx.fillStyle = colors[k];
        ctx.beginPath();
        ctx.moveTo(settings.x, settings.y);
        ctx.arc(settings.x,settings.y,settings.r,startangle,endangle);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = colors[k];
        ctx.stroke();        
        startangle = endangle;
      }
      
    },
    graphframe: function(ctx,maxwidth,maxheight,division){
      ctx.strokeStyle = '#2A2A2A';
      ctx.moveTo(50,50);
      ctx.lineTo(50,maxheight-50);
      ctx.moveTo(50,maxheight-50);
      ctx.lineTo(maxwidth-50,maxheight-50);
      ctx.stroke();
      ctx.closePath();

      var graphx = maxwidth-100;
      var graphy = maxheight-50;
      var nodivs = Math.floor(graphy/division);
      var divs_start_y = maxheight-50;
      
      ctx.beginPath();
      ctx.strokeStyle = '#2A2A2A';
      for(var k=1;k< nodivs;k++){
        divs_start_y -= division;
        ctx.fillText(graphy-divs_start_y,20,divs_start_y+5);
        ctx.moveTo(55,divs_start_y);
        ctx.lineTo(45,divs_start_y);
        ctx.stroke();
        ctx.closePath();
      }
    },
    barchart: function(ctx,maxwidth,maxheight,division,data){
      this.graphframe(ctx, maxwidth, maxheight, division);
      //Draw Chart
      var graphx = 50;
      var graphy = maxheight-50;
      var barheight = 0;
      
      for(var k = 0; k < data.items.length;k++){
        barheight = data.items[k]['count'];
        ctx.fillStyle= '#016FB8';        
        ctx.fillRect(graphx,graphy-barheight,20,barheight);
        graphx+=25;
      }  
      graphx = 50;
      var text = 'AUTHORISED';
      var metric = ctx.measureText(text); 
      ctx.save(); // this will "save" the normal canvas to return to
   

      ctx.rotate(2*Math.PI/4)
      ctx.font="18px Arial";
      ctx.fillText(text,0,55);
      ctx.restore(); // This will un-translate and un-rotate the canvas
      /*for(var k = 0; k < data.items.length;k++){
            var metric = ctx.measureText(data.items[k]['status']); 
            ctx.save(); // this will "save" the normal canvas to return to
         
            var tx = graphx + (metric.width/2);
            var ty = 175;
            
            // Translate to near the center to rotate about the center
            ctx.translate(tx,ty);
            // Then rotate...
            ctx.rotate(Math.PI / 2);
            // Then translate back to draw in the right place!
            ctx.translate(-tx,-ty);
            console.log(graphx)
            ctx.fillText(data.items[k]['status'],graphx,75);
            graphx+=25;
            ctx.restore(); // This will un-translate and un-rotate the canvas
        
      } */
    }
}


