/* SWITCH nezino, kas yra intervalas, tam naudojamas IF */

const akys = 'green';

switch (akys) {
    case 'blue':
        console.log('Melynos');
        break;

    case 'green':
        console.log('Zalios');
        break;

    case 'brown':
        console.log('Rudos');
        break;

    default:
        console.log('Neatpazinta spalva');
        break;
}

if (akys === 'blue') {
    console.log('Melynos');
} else if (akys === 'green') {
    console.log('Zalios');
} else if (akys === 'brown') {
    console.log('Rudos');
} else {
    console.log('Neatpazinta spalva');
}

console.log('--------------------');

const day = 2.5;

switch (day) {
    case 1:
        console.log('Darbo diena');
        break;
    case 2:
        console.log('Darbo diena');
        break;
    case 3:
        console.log('Darbo diena');
        break;
    case 4:
        console.log('Darbo diena');
        break;
    case 5:
        console.log('Darbo diena');
        break;

    case 6:
        console.log('Savaitgalis');
        break;
    case 7:
        console.log('Savaitgalis');
        break;

    default:
        console.log('Neatpazinta savaites diena');
        break;
}

//alternatyvus variantas:

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Darbo diena');
        break;

    case 6:
    case 7:
        console.log('Savaitgalis');
        break;

    default:
        console.log('Neatpazinta savaites diena');
        break;
}

// IF analogiskas variantas:

if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
    console.log('Darbo diena');
} else if (day === 6 || day === 7) {
    console.log('Savaitgalis');
} else {
    console.log('Neatpazinta savaites diena');
}

// kai turim nelygini skaiciu:

if (day >= 0 && day < 6) {
    console.log('Darbo diena');
} else if (day >= 6 && day < 7) {
    console.log('Savaitgalis');
} else {
    console.log('Neatpazinta savaites diena');
}
