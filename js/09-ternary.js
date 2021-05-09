/*
TERNARY OPERATOR  (palyginimo operatorius)
klausimas ? teigiama : neigiama
***
Ternary salyga rasoma vienoje eiluteje, 
todel geriau naudoti paprastoms trumpoms operacijoms (kaip taip arbe ne) 
*/

const arLyja = false;

const sketis = arLyja ? 'pasiimk' : 'nereikia';     // pasiimk --> nereikia
console.log(sketis);

const s1 = 4 < 2 ? 'daugiau' : 'ne daugiau';
console.log(s1);

/* Galima parasyt tokiu pricipu:
const s1 = 4 < 2 
            ? 'daugiau' 
            : 'ne daugiau';
console.log(s1);
*/

// alternatyva su IF: 

let s2 = '';
if (4 < 2) {
    s2 = 'daugiau';
} else {
    s2 = 'ne daugiau';
}
console.log(s2);

let s3 = 'ne daugiau';
if (4 < 2) {
    s3 = 'daugiau';
}
console.log(s3);

console.log('-----------------------');

// Nestintas ternary

const color = 'blue';
const light = true;

const x1 = color === 'blue' ? light ? 'Sviesiai melyna' : 'Tamsiai melyna' : color === 'red' ? 'Raudona' : 'Nezinoma spalva';

console.log(x1);
