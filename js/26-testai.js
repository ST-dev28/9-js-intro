/*
UZDUOTIS:
Gaminam pieno kokteilius.
- gaunam uzsakymu kieki per diena (vnt)
- gaunam vienos porcijos dydi (litrai)
- vienos karves duodamo pieno kiekis per diena (ltr)
Rasti, kiek reikia tureti karviu, norint patenkinti visus uzsakymus?
*/

function milk(uzsakymai, porcija, pienoIsKarves) {

    const reikiaPieno = uzsakymai * porcija;
    const reikiaKarviu = reikiaPieno / pienoIsKarves;

return Math.ceil(reikiaKarviu);
}

console.log(milk(10, 0.5, 9), '->', 1);
console.log(milk(100, 0.5, 9), '->', 6);

console.log('-------------------------------');

             //TESTAI 

function milk(uzsakymai, porcija, pienoIsKarves) {
    // validation
   
    if (typeof uzsakymai === 'undefined') {        // jei parametras neduotas
        return 'ERROR: neduotas pirmasis parametras';
    }
    if (typeof uzsakymai !== 'number') {           // jei mano uzsakymu tipas yra ne skaicius
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if (isNaN(uzsakymai)) {
        return 'ERROR: pirmas parametras negali buti Nan';
    }
    if (!isFinite(uzsakymai)) {                     // isFinite - baigtine begalybe
        return `ERROR: pirmas parametras negali buti ${uzsakymai}`;
    }
    if (!isFinite(uzsakymai)) {                    //ARBA vietoj isNan ir isFinite
        return 'ERROR: pirmas parametras negali buti ${uzsakymai}';
    }

    if (uzsakymai < 0) {                           // jei uzsakymu skaicius yra neigiamas
        return 'ERROR: pirmas parametras negali buti neigiamas';
    }
    if (uzsakymai % 1 !== 0) {                     // jei uzsakymu skaicius yra ne sveikasis sk.
        return 'ERROR: pirmas parametras turi buti sveikasis skaicius';
    }

    if (typeof porcija === 'undefined') {
        return 'ERROR: neduotas antrasis parametras';
    }
    if (typeof porcija !== 'number') {
        return 'ERROR: antras parametras turi buti skaicius';
    }
    if (isNaN(porcija)) {
        return 'ERROR: antras parametras negali buti Nan';
    }
    if (!isFinite(porcija)) {
        return 'ERROR: antras parametras negali buti begalybe';
    }
    if (!isFinite(porcija)) {
        return `ERROR: antras parametras negali buti ${porcija}`;
    }
    if (porcija < 0) {
        return 'ERROR: antras parametras negali buti neigiamas';
    }

    if (typeof pienoIsKarves === 'undefined') {
        return 'ERROR: neduotas treciasis parametras';
    }
    if (typeof pienoIsKarves !== 'number') {
        return 'ERROR: trecias parametras turi buti skaicius';
    }
    if (isNaN(pienoIsKarves)) {
        return 'ERROR: trecias parametras negali buti Nan';
    }
    if (!isFinite(pienoIsKarves)) {
        return 'ERROR: trecias parametras negali buti begalybe';
    }  
    if (!isFinite(pienoIsKarves)) {
        return `ERROR: trecias parametras negali buti ${pienoIsKarves}`;
    }
    if (pienoIsKarves <= 0) {
        return 'ERROR: trecias parametras turi buti didesnis uz nuli';
    }

    // logic
    const reikiaPieno = uzsakymai * porcija;
    const reikiaKarviu = Math.ceil(reikiaPieno / pienoIsKarves);

    // return result
    return reikiaKarviu;
}

console.log(milk('labas', 0.5, -9));
console.log(milk(100, true, -9));
console.log(milk(100, 0.5, 'pasideram'));
console.log(milk(-100, 0.5, 9));
console.log(milk(100, -0.5, 9));
console.log(milk(100, 0.5, -9));
console.log(milk(100, 0.5));
console.log(milk(100));
console.log(milk());
console.log(milk(2.5, 0.5, 9));
console.log(milk(NaN, 0.5, 9));
console.log(milk(10, NaN, 9));
console.log(milk(10, 0.5, NaN));
console.log(milk(Infinity, 0.5, 9));
console.log(milk(100, Infinity, 9));
console.log(milk(100, 0.5, Infinity));


console.log(milk(10, 0.5, 9), '->', 1);
console.log(milk(100, 0.5, 9), '->', 6);

 

