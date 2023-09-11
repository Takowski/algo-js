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

// multirand function is called with the number of random numbers we want to generate as a parameter
// the function rand10() returns an array of random numbers between 1 and 10
// the user is asked how many random numbers he wants to generate and the answer is stored in a variable n
// the function multirand() is called with the number entered by the user as a parameter
// multiRand() returns an array of random numbers between 1 and 10 of length n (the number entered by the user)
// the nubers generaterd are storred in randomarray by push method
// showarray is a variable that stores the array returned by the function
// the array returned by the function is displayed in the console using the alert() function
// the program is run several times to test it



