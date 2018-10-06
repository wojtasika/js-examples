/* pary oddzielamy przecinkiem nie srednikiem */
let car = {
    name: 'Volvo',
    color: 'czerwony',
    fuelConsumption: 9.5,
    carEquipment: ['ABS', 'TCS'],
    
    printInfo() {
        console.log('Marka samochodu to ' + this.name);
    }
};

console.log(car);

/* tak wyciagam dane z objektu car.fuelConsumption */

console.log(car.fuelConsumption);
console.log(car.carEquipment[0]);


/* musimy podac objekt i ktora wlasciwosc objektu chce wywolac*/
car.printInfo();


car.price = 120000;
console.log(car);

/* jak wyciagnac ta cena 120000 */
console.log(car['price']);


/* ====================== jak dzialaja klasy, konwencja nakazuje definiowanie klas duza litera */
/* tworze sobie schemat ktory na razie nic nie robi, cechy przekazuje jako parametry */
/* name jest wlasciwoscia*/
class Person {
    constructor(name, height) {
        this.name = name;
        this.height =  height;
    }   
    
    printInfo() {
        console.log(this.name + ' ma ' + this.height + 'cm wzrostu');
    }
}

console.log(Person);

let lukasz = new Person('Łukasz', 172);
let adam = new Person('Adam', 182);


/* printInfo jest metoda */
lukasz.printInfo();
adam.printInfo();

console.log(lukasz);
console.log(adam);

/*console.dir(document.body);*/
