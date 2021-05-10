/*
UZDUOTIS:
Gaminam pieno kokteilius.
- gaunam uzsakymu kieki per diena (vnt)
- gaunam vienos porcijos dydi (litrai)
- vienos karves duodamo pieno kiekis per diena (ltr)
Rasti, kiek reikia tureti karviu, norint patenkinti visus uzsakymus?
*/



function milk(uzsakymai, porcija, pienoKiekis) {
    const porcijuKiekisKarve = pienoKiekis / porcija;

    if (porcijuKiekisKarve <= uzsakymai) {
        return Math.ceil(uzsakymai / porcijuKiekisKarve);
    } else {
        return 0;
    }
}

// ARBA:

function milk(uzsakymai, porcija, pienoKiekis) {

    const reikiaPieno = uzsakymai * porcija;
    const reikiaKarviu = reikiaPieno / pienoKiekis;

return Math.ceil(reikiaKarviu);
}



console.log(milk(10, 0.5, 9), '->', 1);
console.log(milk(100, 0.5, 9), '->', 6);


