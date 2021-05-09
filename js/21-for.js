/*
FOR sablonas:

for (let i=x; i <= y; i++) {     //spausdinami visi skaiciai nuo x iki y intervale
    console.log(i); 
}
*/

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

console.log(marks);          //isspausdina eile tiesiog kaip yra [...]

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

console.log ('-----------------');

// ilgasias variantas: 

console.log(marks[0]); 
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
console.log(marks[7]);
console.log(marks[8]);
console.log(marks[9]);

