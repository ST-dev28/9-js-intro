/*
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
a. 0 - 11
b. 8 - 31
c. -18 - 18
d. rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

function even (nuo, iki, daliklis) {
    let kiekis = 0; 

    for (let i = nuo; i <= iki; i++) {
        if (i % daliklis === 0) {
            kiekis++;       
        }     
    } 
    
    return kiekis;
}

console.log(even(0, 11, 3)); 
console.log(even(8, 31, 3)); 
console.log(even(-18, 18, 3)); 

console.log('---------b---------')

console.log(even(0, 11, 5)); 
console.log(even(8, 31, 5)); 
console.log(even(-18, 18, 5));

console.log('---------c---------')

console.log(even(0, 11, 7)); 
console.log(even(8, 31, 7)); 
console.log(even(-18, 18, 7));
