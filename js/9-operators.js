/* operatory arytmetyczne */

console.log(3%2);
console.log(15%4);


let number = 5;

console.log(++number);
console.log(number++);
console.log(number);


/* operatory przypisania */

let age = 10;

age += 5;
/* wez zmienna age dodaj do niej 5  age = age + 5 = 10 + 5 = 15 */
console.log(age);

age +=1; //age = age + 1 || ++age (dodaj i zwroc do zmiennej)


/* operatory porownaia - tru lub false*/

console.log(2==2);
console.log(2!=2);
console.log('2'==2);
console.log('2'===2);
console.log(2>2);
console.log(2>=2);


console.log('adam'== 'adam');
console.log('adam'== 'lukasz');

/* operatory logiczne  dwa && to operator i */

console.log(2==2 && 10>1);
console.log(2==2 && 10<1);

/* opetator lub || */

console.log(2==2 || 10>1);
console.log(2!=2 || 10<1);

/* negacja */

console.log((2>2));
console.log(!(2>2));

/* operator warunkowy (? no) */

/*
let temperature = 10;
let isWaterFreezing = (temperature>0)?'no':'yes';

console.log(isWaterFreezing);
*/

let temperature = - 10;
let isWaterFreezing = (temperature>0)?'no':'yes';

console.log(isWaterFreezing);








