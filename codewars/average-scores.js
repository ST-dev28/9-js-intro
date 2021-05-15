/*
Create a function that returns the average of an array of numbers ("scores"), 
rounded to the nearest whole number. You are not allowed to use any loops 
(including for, for/in, while, and do/while loops).
*/

function average(scores) {
    return (Math.round(scores.reduce(function(a, b) {
        return a + b;})/scores.length));
    }


scores = [49,3,5,300,7];
console.log(average(scores), '->', 73);

scores = [90,98,89,100,100,86,94];
console.log(average(scores), '->', 94);