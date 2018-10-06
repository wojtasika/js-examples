/* Tworzenie tablicy, tablice tworzymy po przez nawiasy kwadratowe, w tablicy moze byc nieskonczona ilosc elementow */

let names = ['Adam', 'Anna', 'Karol'];

console.log(names);
/* ma być bektic a nie cudzysłow*/
console.log(`Moje imię to ${names[2]}`);
names[3] = 'Tadeusz';

console.log(names);

/* metody tablicowe */

names.push('Tomasz');

console.log(names);

/*names.pop();*/
let lastName = names.pop();

console.log(names);
console.log(lastName);

/* dorzuca z przodu, odwrotna kolejnosc jak uzyjesz unshift*/

names.unshift('Kasia', 'Zuza');
console.log(names);

names.shift();
console.log(names);

console.log(names.join(''));
console.log(names.join());
console.log(names.reverse());
console.log(names.sort());

/* kazdy typ danych moze zostac wrzucony jako element tablic, tu nie ma zadnych ograniczen . Dane bardziej zlozone to raczej nie tablica tylko objekt */

let collection = [1, 'Cześć', false, [1,2], {}];


