/*
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
A. 0 - 0
B. 0 - 4
C. 0 - 100
D. 574 - 815
E. -50 - 50
F. -70 - 30

*/

const minA = 0;
const maxA = 0; 

function sumA(numCount) {
    let sumBetween = 0;
    for (let i = minA; i <= maxA; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  console.log(sumA([0, 0]));

  
  console.log('------------------------------');

  const minB = 0;
  const maxB = 4; 

function sumB(numCount) {
    let sumBetween = 0;
    for (let i = minB; i <= maxB; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  console.log(sumB([0, 4]));

  console.log('------------------------------');

  const minC = 0;
  const maxC = 100; 

function sumC(numCount) {
    let sumBetween = 0;
    for (let i = minC; i <= maxC; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  console.log(sumC([0, 100]));

  console.log('------------------------------');

  const minD = 574;
  const maxD = 815; 

function sumD(numCount) {
    let sumBetween = 0;
    for (let i = minD; i <= maxD; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  console.log(sumD([574, 815]));


  console.log('------------------------------');

  const minE = -50;
  const maxE = 50; 

function sumE(numCount) {
    let sumBetween = 0;
    for (let i = minE; i <= maxE; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  console.log(sumE([-50, 50]));

  console.log('------------------------------');

  const minF = -70;
  const maxF = 30; 

function sumF(numCount) {
    let sumBetween = 0;
    for (let i = minF; i <= maxF; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  console.log(sumF([-70, 30]));
  


  