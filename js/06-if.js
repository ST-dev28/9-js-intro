/*
IF - salygos sakinys

PALYGINIMO OPERATORIAI:
visi: >, <, >=, <=, ==, != (nelygu), === (griezta lygybe), !==
nenaudotini: ==, !=
naudotini: >, <, >=, <=, ===, !==


SABLONAI:
if () {}
if () {} else {}
if () {} else If () {}
if () {} else if () {} ... else if () {}
if () {} else if () {} ... else if () {} else {}

*/

if (4 !== 2) {
    console.log('taip');
} else {
    console.log('ne');
}

const a = 44;
const b = '44';

if (a === b) {
    console.log('taip');
} else {
    console.log('ne');
}

const e = 'labas';
const f = 'rytas';

if (e === f) {
    console.log('taip');
} else {
    console.log('ne');
}

    //nera logikos

const c = 1;                  
const d = true;

if (c == d) {                 
    console.log('taip');
} else {
    console.log('ne');
}
    //


    const akys = 'pilkos';

    if (akys === 'melynos') {
        console.log('Melynakis');
} else if (akys === 'zalios') {
    console.log('Zaliaakis');
} else if (akys === 'rudos') {
    console.log('Rudaakis');
} else {
    console.log('Neatpazinta akiu spalva ...');
}

console.log('----------------');

const parosMetas = 'rytas';
