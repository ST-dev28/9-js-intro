/*
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
*/


const d = ['a', 'b', 'c', 'd', 'e', 'f'];
const dr = d.reverse().join('');

console.log(dr);


const b = [10, 20, 30, 40, 50, 60];
const br = b.reverse().join();

console.log(br);


const c = ['!', 'dienos', 'geros', 'tau', 'linkiu'];
const cr = c.reverse().join(' ');

console.log(cr);
