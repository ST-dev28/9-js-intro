/*
IF - salygos sakinys

PALYGINIMO OPERATORIAI:
visi: >, <, >=, <=, ==, != (nelygu), === (griezta lygybe), !==
nenaudotini: ==, !=
naudotini: >, <, >=, <=, ===, !==


SABLONAI:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ...  else if () {}
if () {} else if () {} ...  else if () {} else {}

*/

if (4 !== 2) {
    console.log('taip');
} else {
    console.log('ne');
}

const a = 44;
const b = '44';

if (a === b) {
    console.log('taip');
} else {
    console.log('ne');
}

const e = 'labas';
const f = 'rytas';

if (e === f) {
    console.log('taip');
} else {
    console.log('ne');
}

    //nera logikos

const c = 1;                  
const d = true;

if (c == d) {                 
    console.log('taip');
} else {
    console.log('ne');
}
    //

    const akys = 'melynos';

    if (akys === 'melynos') {
        console.log('Melynakis');
    } else if (akys === 'zalios') {
        console.log('Zaliaakis');
    } else if (akys === 'rudos') {
        console.log('Rudaakis');
    } else {
        console.log('Neatpazinta akiu spalva... 🤔');
    }
    
    
    const plaukai = 'rudos';
    
    if (plaukai === 'melynos') {
        console.log('Melynaplaukis');
    }
    
    if (plaukai === 'zalios') {
        console.log('Zaliaplaukis');
    }
    
    if (plaukai === 'rudos') {
        console.log('Rudaplaukis');
    } else {
        console.log('Plauku spalva nera ruda... 🤔');
    }
    
    console.log('--------------------');
    
    const parosMetas = 'rytas';
    const arLyja = false;
    
    if (parosMetas === 'rytas') {
        if (arLyja) {
            console.log('Labas rytas, nepamirsk skecio!');
        } else {
            console.log('Labas rytas!');
        }
    } else {
        if (parosMetas === 'diena') {
            if (arLyja) {
                console.log('Labas diena, nepamirsk skecio!');
            } else {
                console.log('Labas diena!');
            }
        } else {
            if (parosMetas === 'vakaras') {
                if (arLyja) {
                    console.log('Labas vakaras, nepamirsk skecio!');
                } else {
                    console.log('Labas vakaras!');
                }
            } else {
                console.log('Neatpazintas paros metas');
            }
        }
    }