/*
Write function alternateCase which switch every letter in string from 
upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/


function alternateCase(s) {
    let words = '';
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i].toUpperCase()) {
        words += (s[i].toLowerCase())
      } else {
        words += (s[i].toUpperCase())
      }
    } return words;
  }

console.log(alternateCase("abc"), '->', "ABC");
console.log(alternateCase("ABC"), '->', "abc");
console.log(alternateCase("Hello World"), '->', "hELLO wORLD");