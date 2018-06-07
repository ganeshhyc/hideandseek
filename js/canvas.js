var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


function draw() {
  // rectangle box
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "grey";
  ctx.rect(5, 5, 560, 560);
  ctx.stroke();

  // map
  for(var i=0;i<600;i+=100){
    for(var j=0;j<600;j+=100){
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "gray";
      ctx.rect(i+10, j+10, 50, 50);
      ctx.stroke();
      ctx.fillStyle = "grey";
      ctx.fill();

    }
  }
  //left/right
  if((r||l)&&color!="red"){
      for(var i=rx;i<rxl;i++){
          ctx.beginPath();
          ctx.lineWidth = "5";
          ctx.strokeStyle = color ;
          ctx.rect(i+15+con,  ry+15+con, size, size);
          ctx.stroke();
          ctx.fillStyle = "black";
          ctx.fill();
        }

    }
    //up/down
  if((u||d)&&color!="red"){
      for(var i=ry;i<ryl;i++){
          ctx.beginPath();
          ctx.lineWidth = "5";
          ctx.strokeStyle = color ;
          ctx.rect(rx+15+con,  i+15+con, size, size);
          ctx.stroke();
          ctx.fillStyle = "black";
          ctx.fill();

        }
      }
//kill
  if(color=="red"){
            ctx.beginPath();inc=10;
            ctx.lineWidth = "5";
            ctx.strokeStyle = color ;
              if(l||r){
                if(r){
                  ctx.rect(moveX+15+con,  moveY+15+con, size, size);
                  ctx.stroke();
                  ctx.fillStyle = "black";
                  ctx.fill();
                    moveX+=inc;
            }
                if(l){
                  ctx.rect(moveX+15+con+x[myIndex],  moveY+15+con, size, size);
                  ctx.stroke();
                  ctx.fillStyle = "black";
                  ctx.fill();
                    moveX-=inc;
                }
              }
              else if(u||d){
                if(d){

              ctx.rect(moveX+15+con,  moveY+15+con, size, size);
              ctx.stroke();
              ctx.fillStyle = "black";
              ctx.fill();
              moveY+=inc;
            }
                if(u){

              ctx.rect(moveX+15+con,  moveY+15+con+y[myIndex], size, size);
              ctx.stroke();
              ctx.fillStyle = "black";
              ctx.fill();
              moveY-=inc;
            }
              }

      playerX.map(function(value,key)  {
            if(moveX==x[key]&&moveY==y[key]&&key!=myIndex){
              player2[key] = "des.gif";inc=0;
            //console.log(moveX+","+px+"//"+moveY+","+py);
          }
          if(moveX<0)
            if((x[myIndex]+moveX)==x[key]&&moveY==y[key]&&key!=myIndex){
              player2[key] = "des.gif";inc=0;
            }
          if(moveY<0)
            if(x[myIndex]==x[key]&&(y[myIndex]+moveY)==y[key]&&key!=myIndex){
              player2[key] = "des.gif";inc=0;
            }});

            if(moveX<0||(x[myIndex]+moveX)>600||moveY<0||(y[myIndex]+moveY)>600)
              {inc=0;
              //console.log("x="+x+"fdcv"+moveX+","+px+"&"+moveY+","+py);
}
}


  //player

x.forEach(function(value,key){
    var base_image = new Image();
    base_image.src = player2[key];
    if(key!=myIndex)
      ctx.drawImage(base_image, x[key]-10, y[key]-10,50,50);
});
var base_image = new Image();
base_image.src = image+".png";
ctx.drawImage(base_image, (x[myIndex]-10), (y[myIndex]-10),50,50);

  window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
// window.setInterval(draw, 1000.0 / 50.0);
