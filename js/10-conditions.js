/* Warunek if - jezeli cos jest np. prawda */

let wzrostMarka = 190;
let wzrostAnny = 165;


if(wzrostAnny<wzrostMarka) {
    console.log('Anna jest niższa niż Marek');
}


/* warunek if-else */
if(wzrostAnny>170) {
    console.log('Anna jest wysoka');
} else {
    console.log('Anna jest niska');
}

/* warunek else if*/

/*
let bmi = 19;


if(bmi>25) {
    console.log('nadwaga');
} else if(bmi<=25 && bmi > 18) {
    console.log('norma');
} else {
    console.log('niedowaga');
}
*/

let bmi = 28;


if(bmi>25) {
    console.log('nadwaga');
} else if(bmi > 18) {
    console.log('norma');
} else {
    console.log('niedowaga');
}

/* Switch */

/* green to jakas zmienna*/

let lightColor = 'pink';

switch(lightColor) {
        case'green':
        console.log('Go');
        break;
        case'yellow':
        console.log('Wait');
        break;
        case'red':
        console.log('Stop');
        break;
        /* jezeli let lightColor = pink to wyrazenie nie pasuje do niczego i wykona mi funkce default*/
    default:
        console.log('Lights broken');
}







