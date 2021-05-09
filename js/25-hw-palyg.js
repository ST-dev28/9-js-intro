/*
Lyginant, jei rezultatas tenkina palyginimo sąlygą, 
tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, 
išvesti sakinį “Bandykite kitą kartą.”.

1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
a) kuris didesnis
b) kuris mažesnis
c) ar jie lygūs
d) ar jie nelygūs
e) kuris didesnis arba lygus
f) kuris mažesnis arba lygus

*/
// a
if (5 > 2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}


if (5 < 2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('--------------------');

// b
if (2 < 5) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (2 > 5) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('--------------------');

// c
if (2 === 2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}


// d
if (2 !== 5) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

// e 
if (5 >= 2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

// f 
if (2 <= 5) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('--------------------');

// Išvesti teksto tipo kintamųjų ilgius

const sentence = 'Kokia grazi siandien diena!'
console.log(sentence.length);

console.log('--------------------');
/*
Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
a) kuris didesnis
b) kuris mažesnis
c) ar jie lygūs
d) ar jie nelygūs
e) kuris didesnis arba lygus
f) kuris mažesnis arba lygus
*/

// a
const sentence1 = 'Kokia grazi siandien diena!'
const sentence2 = 'Nusibodo ziema'
 if (sentence1.length > sentence2.length) {
     console.log(true);    
 } else {
     console.log(false);
 }

 // b
 if (sentence1.length < sentence2.length) {
    console.log(true);    
} else {
    console.log(false);
}

// c 
if (sentence1.length === sentence2.length) {
    console.log(true);    
} else {
    console.log(false);
}

// d
if (sentence1.length !== sentence2.length) {
    console.log(true);    
} else {
    console.log(false);
}

// e
if (sentence1.length >= sentence2.length) {
    console.log('Kokia grazi siandien diena!');    
} else {
    console.log('Nusibodo ziema');
}

// f
if (sentence1.length <= sentence2.length) {
    console.log('Kokia grazi siandien diena!');    
} else {
    console.log('Nusibodo ziema');
}

console.log('--------------------');

// Išvesti sąrašo tipo kintamųjų ilgius

const list = ['kokia', 'grazi', 'siandien', 'diena', '!']

console.log(list.length);

console.log(list[0].length);
console.log(list[1].length);
console.log(list[2].length);
console.log(list[3].length);
console.log(list[4].length);
 
// arba: 
console.log(list[0].length, list[1].length, list[2].length, list[3].length, list[4].length);

console.log('--------------------');
/*
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
a) kuris didesnis
b) kuris mažesnis
c) ar jie lygūs
d) ar jie nelygūs
e) kuris didesnis arba lygus
f) kuris mažesnis arba lygus
*/

const list1 = ['kokia', 'grazi', 'siandien', 'diena', '!']
const list2 = ['nusibodo', 'ziema']

const list1size = list1.length;
const list2size = list2.length;

console.log(list1size);
console.log(list2size);

// a
if (list1size > list2size) {
    console.log('1st longer');
} else {
    console.log('2nd shorter');
}

// b 
if (list1size < list2size) {
    console.log('1st longer');
} else {
    console.log('2nd shorter');
}

// c 
if (list1size === list2size) {
    console.log(true);
} else {
    console.log(false);
}

// d 
if (list1size !== list2size) {
    console.log(true);
} else {
    console.log(false);
}

// e 
if (list1size >= list2size) {
    console.log(list1);
} else {
    console.log(list2);
}

 // f 
 if (list1size <= list2size) {
    console.log(list1);
} else {
    console.log(list2);
}



