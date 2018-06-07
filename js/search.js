function search(){
name=document.getElementById("username").value;
firebaseref=firebase.database().ref();
      firebaseref.child("game").child(name).child("dir").set("d");
      firebaseref.child("game").child(name).child("x").set(0);
      firebaseref.child("game").child(name).child("y").set(0);
      firebaseref.child("game").child(name).child("flash").set(false);
      firebaseref.child("game").child(name).child("kill").set(false);
      firebaseHeaderRef = firebase.database().ref().child("game").child(name);
firebaseHeaderRef.on("value",function(datasnapshot){
  // $scope.data = datasnapshot.val();
  var data = datasnapshot.val();
  console.log(data);
});}
