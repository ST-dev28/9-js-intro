/*
Objektas: key-value poru rinkinys (raktazodis-reiksme)
*/

const petras = {
    name: 'Petras',
    age: 99,
    color: 'blue',
    'likes banana': true
};

console.log(petras);

const maryte = {
    name: 'Matyre',
    age: 87,
    color: 'red',
    likesBanana: false
};

console.log(petras.name, petras.age, petras.color);

// universalus uzrasymo budas: 

console.log(petras["name"]);
console.log(petras["age"]);
console.log(petras["color"]);
console.log(petras["likes banana"]);

console.log('--------------');

/* galimas ir toks uzrasymo variantas => supaprastintas, bet tik tuomet,  
kai raktazodziai yra vientisi zodziai */

console.log(maryte.name);
console.log(maryte.color);
console.log(maryte.age);
console.log(maryte.likesBanana);

console.log('--------------');

const gyventojai = [petras, maryte];

console.log(gyventojai[0].name);
console.log(gyventojai[1].age);

console.log('--------------');

const batas = {
    name: 'Kaliosas 3000',
    color: 'red',
    pricing: [
        {
            country: 'LT',
            price: 99
        },
        {
            country: 'LV',
            price: 88
        },
        {
            country: 'EE',
            price: 140
        },
    ]
}

console.log(batas.pricing[0]);
console.log(batas.pricing[1]);
console.log(batas.pricing[2]);

console.log('--------------');

const kepure = {
    name: 'Skrybeliukas',
    color: 'white',
    pricing: {
        lt: 99,
        lv: 88,
        ee: 140
    }
}

console.log(kepure.pricing.lt);


/*
Gyvunas:
    varda,
    kailio spalva,
    amziu,
    megstami patiekalai (pavadinimas, svoris, kaloriju kiekis, prioritetas),
    pazymeti medziai ([x, y] koordinates, rusi, auksti)
Gyvunu prekiu parduotuve:
    pavadinimas,
    adresas,
    darbo laikas,
    asortimentas (pavadinimas, kiekis)
*/
