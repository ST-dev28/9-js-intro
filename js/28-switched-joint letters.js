/*
duodamas "array of strings"
gauti vientisa "string", kuris sudarytas is:
- zodzio pirmos raides
- zodzio vidurines raides
- zodzio paskutines raides

TESTAI:
vientisasTekstas(['labas', 'rytas']) -> 'lbsrts'
vientisasTekstas(['mano', 'namas', 'yra', 'geltonas']) -> 'maonmsyragts'
vientisasTekstas(['as', 'i', 'ten']) -> 'aasiiiten'

REIKIAMOS FUNKCIJOS:
function vientisasTekstas - sujungia array i vientisa string
function pirmaRaide('labas') -> 'l'
function vidurineRaide('labas') -> 'b'
function paskutineRaide('labas') -> 's'
*/

const wordsF = ['labas', 'rytas'];
const firstLetters = wordsF.reduce((accumulator, wordsF) => accumulator + wordsF[0], '');
console.log(firstLetters);

const wordsM = ['labas', 'rytas'];
const middleLetters = wordsM.reduce((accumulator, wordsM) => accumulator + wordsM[2], '');
console.log(middleLetters);

const wordsL = ['labas', 'rytas'];
const lastLetters = wordsL.reduce((accumulator, wordsL) => accumulator + wordsL[4], '');
console.log(lastLetters);


const mixedWords = firstLetters + middleLetters + lastLetters;
console.log(mixedWords);

/*
function mixedWords(a) {
    let plusFirst = '';
       
    for (let i = 0; i < a.length; i ++) {
        const firstLetters = a[i]; 
                            
        plusFirst = firstLetters.reduce((accumulator, firstLetters) => accumulator + firstLetters[0], '');               
    
    
    }
   return plusFirst;    
}
*/

console.log(mixedWords['labas', 'rytas'], '->', 'lrbtss');
console.log(mixedWords['mano', 'namas', 'yra', 'geltonas'], '->', 'maonmsyragts');
console.log(mixedWords['as', 'i', 'ten'], '->', 'aasiiiten');



/*
const s1 = vientisasTekstas(['labas', 'rytas']);
console.log(s1, '->', 'lbsrts');

const s2 = vientisasTekstas(['mano', 'namas', 'yra', 'geltonas']);
console.log(s2, '->', 'maonmsyragts');

const s3 = vientisasTekstas(['as', 'i', 'ten']);
console.log(s3, '->', 'aasiiiten');
*/
