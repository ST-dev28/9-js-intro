//const a = [2, 3, 1, 4, 2];
//1) karta i sekunde isspausdinti po reiksme
//2) arejuje nurodyta, kiek sekundziu reikia laukti, kol bus isspausdinta nurodyta reiksme
/*
let index = 0;
const timer = setInterval(() => {    
        if (index < a.length) {
        console.log(a[index++]);
      } else {
          clearInterval(index);
      }     
  }, 1000)
*/


//1) karta i sekunde isspausdinti po reiksme
/*const a = [2, 3, 1, 4, 2];
console.log(a);

let index = 0;
const timer = setInterval(() => {
  if (index < a.length) {
    console.log(a[index++]);
  } else {
    clearInterval(index);
  }
}, 1000)

// ARBA 
let i = 0;
const timet = setInterval(() => {
  const number = a[i++];
  if (typeof number === 'number') {
  } else {
    clearInterval(timer);
  }
}, 1000)
*/
/*
//2) arejuje nurodyta, kiek sekundziu reikia laukti, 
//kol bus isspausdinta nurodyta reiksme

const b = [2, 3, 1, 4, 2];

let delay = 0;
for (const number of b) {
  delay += number;
  setTimeout(() => {
    console.log(number);
  }, delay * 1000)
}
*/

// ARBA
const c = [2, 3, 1, 4, 2];

function waiting(list) {
  const time = list[0];
  setTimeout(() => {
    console.log(time);

    list.shift()
    if (list.length > 0) {
      waiting(list);
    }
  }, time * 1000)
}
waiting(c);
