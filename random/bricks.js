/*
UZDUOTIS:
- gaunam, kiek sienu turi namas
- gaunam, kokio plocio yra kiekviena siena
- sienos neturi angu ir / ar skyliu
- gaunam sienos auksti, kuris visur yra vienodas
- turim plytos dydi (aukstis, plotis)
Reikia suznoti, keliu plytu reikes, jei ju skaldyti negalima. 
matavimo vienetai metrai
*/
/*
function bricks(sienuPlociai, sienosAukstis,plytosAukstis, plytosPlotis) {
    let bendrasSienuPlotis = 0;

    for (let i = 0; i < sienuPlociai.length; i++) {
        bendrasSienuPlotis += sienuPlociai[i];
    } 
    const plytuPlotyje = bendrasSienuPlotis / plytosPlotis;
    const plytuAukstyje = sienosAukstis / plytosAukstis;
    
return plytuPlotyje * plytuAukstyje; 
} 
*/


 // ARBA: 

    function bricks(sienuPlociai, sienosAukstis,plytosAukstis, plytosPlotis) {
        let bendrasSienuPlotis = 0;

        for (let i = 0; i < sienuPlociai.length; i++) {
           const sienosPlotis = sienuPlociai[i];
           bendrasSienuPlotis += sienosPlotis;
    }
    const plytuPlotyje = Math.ceil(bendrasSienuPlotis / plytosPlotis);
    const plytuAukstyje = Math.ceil(sienosAukstis / plytosAukstis);

    const plytuKiekis = plytuPlotyje * plytuAukstyje;

    return plytuKiekis;

    }

console.log(bricks([1, 2], 1, 0.1, 0.2), '->', 150);
console.log(bricks([1, 1, 1], 1, 0.1, 0.2), '->', 150);
console.log(bricks([2, 1, 3], 0.5, 0.1, 0.2), '->', 150);
console.log(bricks([1], 1, 0.1, 0.2), '->', 50);
console.log(bricks([1.05], 1.05, 0.1, 0.2), '->', 66);

