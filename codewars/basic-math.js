/*
In this kata, you will do addition and subtraction on a given string. 
The return value must be also a string.
Note: the input will not be empty.
Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/

function calculate(str) {
    let sum = str.replace(/plus/gi, '+');
    let result = sum.replace(/minus/gi, '-'); 

    return eval(result).toString();
    }

/* ARBA
function calculate(str) {
 var re1 = /plus/gi;
 var re2 = /minus/gi;
 var newStr = eval(str.replace(re1, '+').replace(re2, '-')) + '';

  return newStr;
}
*/

console.log(calculate("1plus2plus3plus4"), '->', '10');
console.log(calculate('1minus2minus3minus4'), '->', '-8');
console.log(calculate('1plus2plus3minus4'), '->', '2');