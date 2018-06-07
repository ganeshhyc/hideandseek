function checkLeft(xp,yp){
  if(!(xp%20==0)&&(yp%20==0))
    return xp;
  else return (xp-50);
}
function checkRight(xp,yp){
  if(!(xp%20==0)&&(yp%20==0))
    return xp;
  else return (xp+50);
}
function checkUp(xp,yp){
  if(!(yp%20==0)&&(xp%20==0))
    return yp;
  else return (yp-50);
}
function checkDown(xp,yp){
  if(!(yp%20==0)&&(xp%20==0))
    return yp;
  else return (yp+50);
}
