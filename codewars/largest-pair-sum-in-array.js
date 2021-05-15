/*
Given a sequence of numbers, find the largest pair sum in the sequence.
For example
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/

function largestPairSum(numbers) { 
    let first, second;
        if (numbers[0] > numbers[1])
        {
            first = numbers[0];
            second = numbers[1];
        }
        else
        {
            first = numbers[1];
            second = numbers[0];
        }
       
        for (let i = 2; i < numbers.length; i ++)
        {
            if (numbers[i] > first)
            {
                second = first;
                first = numbers[i];
            }
       
             else if (numbers[i] > second &&
                numbers[i] != first)
                second = numbers[i];
        }
        return (first + second);
    }

/* ARBA
function largestPairSum(numbers){
  numbers.sort(function(a, b){ return b - a });
  return numbers[0] + numbers[1];
}

---ARBA
function largestPairSum(numbers) {
  var [a, b] = numbers.sort((a, b) => b - a)
  return a + b
}
*/

console.log(largestPairSum([10,14,2,23,19]), '->', 42 , "Sum should be 42");
console.log(largestPairSum([-100,-29,-24,-19,19]), '->', 0 , "Sum should be 0");
console.log(largestPairSum([1,2,3,4,6,-1,2]), '->', 10 , "Sum should be 10");
console.log(largestPairSum([-10, -8, -16, -18, -19]), '->', -18 , "Sum should be -18");