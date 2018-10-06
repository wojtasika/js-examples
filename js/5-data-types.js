/*typ liczbowy*/

let num = 20.5;

console.log(num);
console.log(typeof num);

console.log(typeof('aa' * 'bb'));
console.log(typeof (2/0));


/*typ łańcuchowy - string - tworzy się przez użycie cudzyslowia '' moze byc pojedynczy lub podwojny "" ale uzywaj jednego albo albo. Liczby wyswietalaja sie w kolerze niebieskim, stringi w kolorze czarnym*/
let name = 'Adam'; 

console.log(name);
console.log(typeof name);

console.log('Moje imię to ' + name );
console.log(`Imię użytkownika to ${name} - super`);
console.log('User\'s name is');


/*Typ logiczny */
let itIsTrue = true;

console.log(itIsTrue);


/* Typy specjalne */
let text;
console.log(text);

let nothing = null;
console.log(null);


/* dynamiczna konwersja danych - uwazac na to bo js szuka danych*/
console.log('5' + 2);
console.log('5' - 2);
console.log(true - 2);


