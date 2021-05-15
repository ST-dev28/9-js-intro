/*
Given a sequence of integers, return the sum of all the integers that have 
an even index, multiplied by the integer at the last index.
Indices in sequence start from 0.
If the sequence is empty, you should return 0.
*/

function evenLast(numbers) {
    if (numbers.length === 0) {
    return 0;  
    } 
    const lastInteger = numbers[numbers.length - 1];
    const sum = numbers.reduce((acc, number, index) => (index % 2 === 0 ? acc + number : acc), 0);
      
    return sum * lastInteger;
}

/* ARBA
function evenLast(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 2) {
    sum += numbers[i];
  }
  return sum * numbers[numbers.length - 1];
}
*/

console.log(evenLast([2, 3, 4, 5]), '->', 30);