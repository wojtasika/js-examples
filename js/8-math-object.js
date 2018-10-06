/* math.pi po math nazwa wlasciwosci */

let pi = Math.PI;

console.log(pi);
console.log(Math.E);

let squareArea = Math.pow(4, 2);
console.log(squareArea);


/* napisz funkcje ktora zwroci pole kola. promien kola przekaz jako parametr tej funkcji  pi*r^2*/

function circleArea(r) {
    /* ma zwracać to return pi * r ^2 - pomnoz pi razy promien do kwadratu */
   return Math.PI*Math.pow(r, 2);
}
/* wywolaj */
console.log(circleArea (1));
console.log(circleArea (2));
console.log(circleArea (3));
console.log(circleArea (100));

/* randomy losowe liczby */

/*let random = Math.random();
console.log(random);*/

let random = Math.random();
console.log(Math.floor(random * 10));
