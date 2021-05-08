/*
Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti i console
*/

const s1 = 5;
const s2 = -3;
const s3 = 7;

const suma = s1 + s2 + s3;
console.log(suma);

/*
Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti i console
*/

const w1 = 'labas';
const w2 = 'rytas';
const w3 = 'tau';

const sakinys1 = w1 + ' ' + w2 + ' ' + w3;
console.log(sakinys1);

//analogas: 
const sakinys2 = `${w1} ${w2} ${w3}`;
console.log(sakinys2);

/*
Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą 
logiką  1-2+3-4+5
Rezultatą išvesti į console
*/

const x = [10, 2, 8, 4];
const alternuojantiSuma = x[0] - x[1] + x[2] - x[3];
console.log(alternuojantiSuma);

console.log('------------------');

/*
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki 
pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

const d = [s1, w2, w3];
console.log(d);

const sakinys3 = d[2] + ', ' + d[1] + ', ' + d[0];
console.log(sakinys3);

//arba:
const sakinys4 = `${d[2]}, ${d[1]}, ${d[0]}`;
console.log(sakinys4);

console.log('--------------------');

// dr => d array reversed
const d1 = [...d];
const dr = d1.reverse();
console.log(dr);

const sakinys5 = dr.join(', ');
console.log(sakinys5);

console.log('---------------------');

//arba: 
const d2 = [...d];
const sakinys6 = d2.reverse().join(', ');
console.log(sakinys6);
