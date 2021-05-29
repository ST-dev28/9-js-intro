// pagrindinis pozymis riestiniai skliaustai {}
// 'objektas' yrs vienas is lanksciausiu tipu

// tikrinimui kelti i index.js

const person = {
    name: 'Vardenis',
    surname: 'Pavardenis',
    birth: {
        year: 2000,
        month: 1,
        day: 31
    },
    children: [],
    alive: true
}

const languages = {
    Java: 10,
    Ruby: 80,
    Python: 65
}

for (const lang in languages) {
    console.log(lang, '->', languages[lang]);
}

console.log('----------');

for (const info in person) {
    console.log(info, '->', person[info]);
}

console.log('----------');

for (const time in person.birth) {
    console.log(time, '->', person.birth[time]);
}

console.log('----------');

// is esmes logika identiska auksciau esanciam pavyzdziui
const gimimoData = person.birth;
for (const time in gimimoData) {
    console.log(time, '->', gimimoData[time]);
}

console.log('----------');

// ['name', 'surname', 'birth', 'children', 'alive']
const asmensRaktazodziai = Object.keys(person);
console.log(asmensRaktazodziai);

for (let i = 0; i < asmensRaktazodziai.length; i++) {
    const key = asmensRaktazodziai[i];
    console.log(key, '->', person[key]);
}

console.log('----------');

for (const key of asmensRaktazodziai) {
    console.log(key, '->', person[key]);
}

console.log('----------');

const kalbos = Object.keys(languages);
console.log(kalbos);