playerSize = 3;
x = Array(playerSize);
y = Array(playerSize);
player2 = Array(playerSize);
playerX = [70, 370, 270,70,470];
playerY = [70, 370, 370,170,70];
playerX.forEach(function(value,key){
  x[key]=value;
});
playerY.forEach(function(value,key){
  y[key]=value;player2[key]="new.png"
});
