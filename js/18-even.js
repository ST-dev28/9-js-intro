function even (n) {
    if (n % 2 ===0) {
        return true;
    }
    return false;
}
  
console.log(even(2), '->', true); 
console.log(even(5), '->', false); 


// arba:
function even (m) {
    return m % 2 === 0 ? true : false;
}

console.log(even(2), '->', true); 
console.log(even(5), '->', false); 

// arba:
function even (x) {
    return x % 2 === 0;
}

console.log(even(2), '->', true); 
console.log(even(5), '->', false); 

// arba:
function even (y) {
    return !(y % 2);
}

console.log(even(2), '->', true); 
console.log(even(5), '->', false); 
