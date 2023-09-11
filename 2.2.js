let min = document.querySelector('#min');
let max = document.querySelector('#max');
let current= document.querySelector('#current');
let result = document.querySelector('#answer');
let submit = document.querySelector('.submit');

function check(){
  if (current.value>min.value && current.value<max.value) {
   
    result.textContent = "correct user, current is between min and max";
  }  
  
else {result.textContent = "error, current is not between min and max";}
}
  
submit.addEventListener('click', checkminmax);
