/*
You might know some pretty large perfect squares. But what about the NEXT one?
Complete the findNextSquare method that finds the next integral perfect square 
after the one passed as a parameter. Recall that an integral perfect square is 
an integer n such that sqrt(n) is also an integer.
If the parameter is itself not a perfect square then -1 should be returned. 
You may assume the parameter is non-negative.
Examples:
findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect square
*/

function findNextSquare(sq) {
    let number = 0;
    
    if (Math.sqrt(sq) % 1 === 0) {
        number = (Math.sqrt(sq) +1) * (Math.sqrt(sq) +1);
        return number;
    } else  {
        return -1; 
    }
}

/*ARBA
function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  var root = Math.sqrt(sq);
  if (Number.isInteger(root)) {
    return Math.pow(root + 1, 2);
  } else {
    return -1;
  }
}
*/
   
console.log(findNextSquare(121), '->', 144, "Wrong output for 121");
console.log(findNextSquare(625), '->', 676, "Wrong output for 625");
console.log(findNextSquare(319225), '->', 320356, "Wrong output for 319225");
console.log(findNextSquare(15241383936), '->', 15241630849, "Wrong output for 15241383936");
console.log(findNextSquare(155), '->', -1, "Wrong output for 155");
console.log(findNextSquare(342786627), '->', -1, "Wrong output for 342786627");