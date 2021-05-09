/*
At the annual family gathering, the family likes to find the oldest 
living family member’s age and the youngest family member’s age and 
calculate the difference between them.
You will be given an array of all the family members' ages, in any order. 
The ages will be given in whole numbers, so a baby of 5 months, will have 
an ascribed ‘age’ of 0. 
Return a new array (a tuple in Python) with [youngest age, oldest age, 
difference between the youngest and oldest age].
*/

function differenceInAges(ages) {
    let difference = 0; 
     
    for (let i = 0; i < ages.length; i++) {                               
        const years = ages[i]; 
        
        if (years >= 82) {
            console.log(years);
        }  else if (years <= 14) {
            console.log(years);
        }                       
    }                                         
    return false;                                          
}


/*
function differenceInAges(ages) {
    let difference = 0;
    let maxValue = 0;
    let minValue = 0;

    for (i = 0; i < ages.length; i++) {
        if (ages[i] > maxValue) {
            maxValue = ages[i];
            console.log(maxValue);
        }
    }
    for (i = 0; i < ages.length; i++) {
        if (ages[i] > minValue) {
                minValue = ages[i];
                console.log(minValue);          
        }
    }
        if (maxValue > minValue) {
            difference = maxValue - minValue;
            
        }
    return difference; 
}
*/


console.log(differenceInAges([82, 15, 6, 38, 35]), '->', [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), '->', [14, 99, 85]);

