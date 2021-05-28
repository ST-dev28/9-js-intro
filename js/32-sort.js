// "filter" ciklas dirba tik su arejais = butinai turi buti sarasas !!!!!
//kas arejaus viduje, nera skirtumo
// sortiruoja skaicius pagal pirma (10, 113, 2, 21, 222, ...) => a - b arba b  - a
//sortirioja zodrius pagal abecele, bet pitma didziosios raides, po to mazosios
// reaguoja i teigiama, neigiama ir nulini rezultata 

const skaiciai = [10, 2, 8, 4, 6, 113, 21];
const zodynas = ['labas', 'rytas', 'sakau', 'tau', 'tau', 'Mefistofelis', 'Rimantas', 'barsukas', 'guolis', 'raguolis', 'zaliapjove'];

// [2, 4, 6, 8, 10]
// [10, 8, 6, 4, 2]

const minMaxSkaiciai = skaiciai.sort((a, b) => a - b);
console.log(minMaxSkaiciai);

const maxMinSkaiciai = skaiciai.sort((a, b) => b - a);
console.log(maxMinSkaiciai);

const minMaxZodynas = zodynas.sort();
console.log(minMaxZodynas);

const maxMinZodynasReverse = zodynas.sort().reverse();
console.log(maxMinZodynasReverse);

const maxMinZodynas = zodynas.sort((a, b) => a < b ? 1 : a === b ? 0 : -1);
console.log(maxMinZodynas);