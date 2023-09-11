 function rand10(){
    return Math.floor(Math.random() * 10)+1;
}

function multiRand(n){
    let randomarray = [];
    for(let i = 0; i < n; i++){
        randomarray.push(rand10());
    }
    return randomarray;
}
let n = prompt("How many random number do you want ?");
let showarray = multiRand(n);
alert(showarray);




