const a = [2, 3, 1, 4, 2];
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



let index = 0;
const timer = setInterval(() => {    
        if (index < a.length) {
        console.log(a[index++]);
      } else {
        clearInterval(index);
    }     
  }, a[index] * 1000)


  