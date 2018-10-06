/* petla FOR */

let names = ['Adam', 'Anna', 'Karol', 'Zenon'];

/*console.log(names[0]);
console.log(names[1]);
console.log(names[2]);*/

for(let i = 0; i<10; i++) {
    console.log(i);
}

/*for(let i=0; i<3; i++) {
    console.log(names[i]);
}*/

/*for(let i=0; i<names.length; i++) {
    console.log(names[i]);
}*/

/* forEach to nie petala to metoda */
names.forEach(function(element, index) {
    console.log(element, index);
});

/* zapis strzalkowy , zapis powyzej i zapis ponizej efekt jest ten sam*/

/*names.forEach((element, index)=>console.log(element, index));*/

let car = {
    name: 'Volvo',
    color: 'red'
}


/* co nam wyciagnie? dla samochodu name dla car color */
for(let key in car) {  
    console.log(car[key]);
}

/* petla while , takiego while nie napisze for */
let randomNumber = Math.floor(Math.random() * 10);

/*while(randomNumber !=5) {
    console.log(randomNumber);
    randomNumber = Math.floor(Math.random() *10);
}*/

do {
    console.log(randomNumber);
    randomNumber = Math.floor(Math.random() *10);
} while(randomNumber !=5);

/* przerywanie dzialania funkcji */

let chaos = [1, 12, 'Cześć', null, 60, 'done', 15, 30];

for(let i=0; i<chaos.length; i++) {
    if(chaos[i] == 'done') {
        break;
    }
    console.log(chaos[i]);
}

for(let i=0; i<chaos.length; i++) {
    
    if(typeof chaos[i] != 'number') {
        continue;
    }
        console.log(chaos[i]);
}

/* break i continue w while tak samo dzialaja */






























