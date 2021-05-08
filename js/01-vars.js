/*
var = variables => kintamieji

INICIAVIMO BUDAS (keiciamumas ir scope):
const - nekeiciama reiksme
let - keiciama reiksme
var - keiciama reiksme

KINTAMUJU TIPAI:
number (skaicius)
string (tekstas)
boolean (logine reiksme)
array (sarasas, masyvas, matrica)
object (objektas) - tinka kompleksinei informacijai
null (reiksme kuri neegzistuoja, bet yra)
undefined (neapibrezta)

map
set
*/

// number:

const metai = 2021;
console.log(metai);

// string:

const vardas = 'Vardenis';   //tekstas rasomas kabutese: '' arba " "
console.log(vardas);

//boolean:

const arSninga = false;
console.log('Ar sninga:', arSninga);

const arTeigiama = true;
console.log('Ar teigiama:', arTeigiama);

// array:

const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

const zodynas = ['labas', 'rytas', 'sakau', 'tau'];
console.log(zodynas);

// objektas:

const petras = {
    vardas: 'Petras',
    amzius: 99,
    gyvenamojiVieta: 'Gatve g. 1-3, Miestas',
    vaikai: [
        {
            vardas: 'Onute',
            amzius: 67
        }
    ]
}

console.log(petras);

