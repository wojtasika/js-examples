/*deklaracja funkcji*/
function print() {
    console.log ('Siema');
}

print();

/*to poniżej to to samo co to powyzej*/
let sayName = function() {
    console.log('Agnieszka');
}
/*jak to wywolac? sayName()*/
sayName();

/*funkcja z parametrami, to jest bardzo ważne*/
function add(num1 = 2, num2 = 1) {
    console.log(num1 + num2);
}

add(2, 6);
add(0, 2);
add(-13, 1000);
add(5);

/*zwracanie danych*/
function multiply(num1, num2) {
 /*   console.log(num1 * num2);*/
    return num1 * num2;
}
/*wywołanie funkcji multiyply();*/
let result = multiply(5,6);
console.log(result);

/*funkcje strzałkowe, avg to średnia, { klamry to ciało*/

const printUser = () => {
    console.log('akademia108');
}
printUser();


const avg = (num1 , num2) => {
    return (num1 + num2)/2;
}

console.log(avg(4,2));

const cube = a => a*a*a;

console.log (cube(3));

/*napisz funkcje ktora wipisze w konsoli imie i nawzwisko uzytkownika przekazane jako parametry tej funkcji, nazwy funkcji lepiej dawać trzy członowe*/

function printUserData(name, surname) {
    console.log (name, surname);
}
printUserData('Agnieszka', 'Wojtasik');
printUserData('Adam', 'Nowak');

/*function surname() {
    console.log ('Wojtasik');
}
surname();*/