var min = document.getinput("min");
var max = document.getElementById("max");
var current= document.getElementById("current");
var result = document.getElementById("answer");
var thatsit =false;
function checkminmax(){
  if (current>min && current<max){
    thatsit=true;
  }
  else{
    thatsit=false;
  }
}   
if (thatsit==true){
    result = "correct user, current is between min and max";
}
else{
    result = "error, current is not between min and max";
}