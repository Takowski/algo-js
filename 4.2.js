function rand10(){
    return Math.floor(Math.random() * 10)+1;
// these fonctions are used to generate a random number between 1 and 10
//pseudo-random number that's greater than or equal to 0 and less than 1,
//so we multiply it by 10 to get a number between 0 and 9, then we add 1 to get a number between 1 and 10.
}
alert(rand10());