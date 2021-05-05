/*
STRINGS (tekstas)

iniciacimo budai:
- viengubos (') kabutes
- dvigubos (") kabutes
- backtick (`) 

*/

const kabutes1 = 'Labas';
const kabutes2 = "rytas";

console.log(kabutes1);
console.log(kabutes2);

// Viengubos (') kabutes. 
const kabutes21 = "Viengubos (') kabutes.";
console.log(kabutes21);

// Dvigubos (") kabutes.
const kabutes12 = 'Dvigubos (") kabutes.';
console.log(kabutes12);

// Viengubos (') kabutes ir dvigubos (") kabutes.
const kabutes1e = 'Viengubos (\') kabutes ir dvigubos (") kabutes.'
console.log(kabutes1e);

const kabutes2e = "Viengubos (') kabutes ir dvigubos (\") kabutes."
console.log(kabutes2e);

//Tekste backslash \' yra jega!
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


// \n - enter
// \t - tab

const imgSrc = './img/logo.png';
const HTML = '<header>\n\
                <img src="' + imgSrc + '" alt="" class="logo">\n\
                <nav>\n\
                    <a href="#">Link</a>\n\
                    <a href="#">Link</a>\n\
                    <a href="#">Link</a>\n\
                    <a href="#">Link</a>\n\
                </nav>\n\
            </header>';

console.log(HTML);

const H2 = `<header>
                <img src="` + imgSrc + `" alt="" class="logo">
                <nav>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </nav>
            </header>`;
console.log(H2);

const H0 = '<header>' +
                '<img>' +
                '<nav>' +
                    '<a><a/a>' +
                    '<a><a/a>' +
                    '<a><a/a>' +
                    '<a><a/a>' +
                '</nav>' +
            '</header>' +;
console.log(H0);

//arba

const H3 = `<header>
                <img src="${imgSrc}" alt="" class="logo">
                <nav>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </nav>
            </header>`;
console.log(H3);

const demo = 'asd ${omgSrc} asd';
console.log(demo);




