// Create a function factorial(a) that returns the factorial of a number.
// That function must be recursive.
let a = prompt("Enter a number");

 function factorial(a){
    if(a == 0){
       return 1;
    }
   else{
        return a * factorial(a-1);
    }
}

alert(factorial(a));
