

let lenght= prompt("Enter the lenght of the rectangle");
let width= prompt("Enter the width of the rectangle");

function calcucSurface(){

var L = parseInt(lenght);
var W = parseInt(width);
return L*W
;
}
alert("The surface of the rectangle is "+calcucSurface()+"cm²");
