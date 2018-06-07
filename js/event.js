document.addEventListener('keydown',function(event){

if(event.keyCode==37 && x[myIndex]>=70 ) {
  x[myIndex]=checkLeft(x[myIndex],y[myIndex]);
    image = "left";
  l=true;r=false;
  u=false;d=false;
}

if(event.keyCode==38  && y[myIndex]>=70){
  y[myIndex]=checkUp(x[myIndex],y[myIndex]);
  image = "top";
  l=false;r=false;
  u=true;d=false;
  }

if(event.keyCode==39 && x[myIndex] <=470){
  x[myIndex]=checkRight(x[myIndex],y[myIndex]);
  image = "right";
  l=false;r=true;
  u=false;d=false;
}

if(event.keyCode==40 && y[myIndex] <=470){
  y[myIndex]=checkDown(x[myIndex],y[myIndex]);
  image = "down";
  l=false;r=false;
  u=false;d=true;
}//console.log("x:"+x);console.log("y:"+y);

if(event.keyCode==13){
  color = "red";size = 1;con = 0;
  if(!(x[myIndex]%20==0)&&(y[myIndex]%20==0)){}
    else
      {if(r){rx=x[myIndex];ry=y[myIndex];rxl=600;ryl=600;}
      if(l){rx=0;ry=y[myIndex];rxl=x[myIndex];ryl=y[myIndex];}
     moveX=rx;moveY=ry;

    }

  if(!(y[myIndex]%20==0)&&(x[myIndex]%20==0)){}
  else{
      if(u){rx=x[myIndex];ry=0;rxl=x[myIndex];ryl=y[myIndex];}
      if(d){rx=x[myIndex];ry=y[myIndex];rxl=600;ryl=600;}}
        moveX=rx;moveY=ry;
}
if(event.keyCode==32){
  color = "#323232";size=20;con = -10;
  if(!(x[myIndex]%20==0)&&(y[myIndex]%20==0)){}
    else
      {if(r){rx=x[myIndex];ry=y[myIndex];rxl=600;ryl=600;}
      if(l){rx=0;ry=y[myIndex];rxl=x[myIndex];ryl=y[myIndex];}
    moveX=rx;moveY=ry;}

  if(!(y[myIndex]%20==0)&&(x[myIndex]%20==0)){}
  else{
      if(u){rx=x[myIndex];ry=0;rxl=x[myIndex];ryl=y[myIndex];}
      if(d){rx=x[myIndex];ry=y[myIndex];rxl=600;ryl=600;}}
      moveX=rx;moveY=ry;
}
else{
  rx=0;ry=0;rxl=0;ryl=0;
}

firebaseref.child("game").child(name).child("x").set(x[myIndex]);
firebaseref.child("game").child(name).child("y").set(y[myIndex]);
});
