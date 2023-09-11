let item = parseInt(prompt("saisisez un nombre de chiffres a additionner"));
let num =prompt("saisisez "+item+" nombres, séparés par des virgules");

if (num.split(',').length !== item){
    alert("vous devez saisir "+item+" nombres");}
else if (num.split(',').length == item){
alert(num.split(',').reduce((a, b,) => parseInt(a) + parseInt(b)));
}