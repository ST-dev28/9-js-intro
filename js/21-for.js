console.log('start');

for (let i=0; i <= 5; i++) {
    console.log(i); 
}
 
console.log ('-----------------'); 
//arba: 
const nuo = 2; 
const iki = 7;  

for (let i = nuo; i <= iki; i++) {
    console.log(i); 
}

console.log('finish');

console.log ('-----------------'); 

/*
Isspausdinti skaicius intervale, bet padvigubintus
*/

const nuo2 = 2; 
const iki2 = 7; 

for (let i = nuo2; i <= iki2; i++) {
    console.log(i * 2); 
}

console.log ('-----------------');

/*
Turime sarasa (array) ir reikia ispausdinti visas jo reiksmes
*/

const marks = [10, 2, 8, 4, 6, 9, 1, 7, 3, 5];

console.log(marks); 

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}


