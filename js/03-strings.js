/*
STRINGS (tekstai)

inicijavimo budai:
- viengubos (') kabutes
- dvigubos (") kabutes
- backtick (`) kabutes

*/

const kabutes1 = 'Labas';
const kabutes2 = "rytas";

console.log(kabutes1);
console.log(kabutes2);

// Viengubos (') kabutes.
const kabutes12 = "Viengubos (') kabutes.";  //jei tekste nau yra vienguba kabute, panaudoti dvigubas
console.log(kabutes12);

// Dvygubos (") kabutes.
const kabutes22 = 'Dvigubos (") kabutes.';   //jei tekste nau yra dvigubos kabutee, panaudoti viengubas
console.log(kabutes22);
    // tekstas yra skaitomas tarp dvieju tokiu paciu kabuciu

// Viengubos (') ir dvigubos (") kabutes.
const kabutes1e = 'Viengubos (\') ir dvigubos (") kabutes.';
console.log(kabutes1e);

const kabutes2e = "Viengubos (') ir dvigubos (\") kabutes.";
console.log(kabutes2e);
/* naudoti backslash \ simbolio praskipinimui, t.y. ignoruoti kaip funkcini 
elementa ir atvaizduoti ji kaip tekstini elementa
*/

// Tekste backslash \' yra jega!
const backslash = 'Tekste backslash \\\' yra jega!';
console.log(backslash);


const vardas = 'Vardenis';
const pavarde = 'Pavardenis';

// Vardenis Pavardenis
const fullName = vardas + ' ' + pavarde;
console.log(fullName);

// Sveiki, as esu Vardenis!
const sayHi = 'Sveiki, as esu ' + vardas + '!';
console.log(sayHi);

console.log('-----------------');

// \n => enter
// \t => tab

const imgSrc = './img/logo.png';
const HTML = '<header>\n\
                <img src="' + imgSrc + '" alt="logo" class="logo">\n\
                <nav>\n\
                    <a href="#">Link</a>\n\
                    <a href="#">Link</a>\n\
                    <a href="#">Link</a>\n\
                    <a href="#">Link</a>\n\
                </nav>\n\
            </header>';
console.log(HTML);

// arba: 

const H2 = `<header>
                <img src="${imgSrc}" alt="logo" class="logo">
                <nav>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </nav>
            </header>`;
console.log(H2);

console.log('-----------------');

const demo = 'asd ${imgSrc} asd';
console.log(demo);


const hi = 'Good morning!';
const hiSize = hi.length;
console.log(hi, hiSize);

