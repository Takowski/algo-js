let x1 = 1
let y1 = 1
let x2 = 2
let y2 = 2

function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}

console.log(getDistance(x1, y1, x2, y2));