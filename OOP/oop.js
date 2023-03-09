// OOP programming paradigm allows us to code more efficently by reusing an existing code 
// - all data, method and outputs are specified inside the object we created
// we use this key word to refer to the object itself rather than specifying its name repeatdly 

var purchase1 = {
    shoes: 100,
    stateTax : 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log(calculation) ;
    }
}

purchase1.totalPrice();

var purchase2 = {
    shoes: 50,
    stateTax : 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log(calculation) ;
    }
}

purchase2.totalPrice();



// In the OOP paradigm we will repeatdly write the same code. inorder to avoid this we will use classes
// ///////////////////// CLASS ///////////////////////////////

//  are buleprint/template that can be used to build new object of a certain kind repeatly 
//  a constructor is used to accept the parameters and assign them to the property of the object later



// instance of the class is the created in two ways. one is using the "new" keyword second one is using "Object.create(classname)" method
// class Animal {
//     constructor(animalName){
//         this.animalName = animalName;
//     }
//     type(){
//         console.log("wild animals");
//     }
// }

// var lion = new Animal ();
// lion.type();


class Animal {
    wildAnimal() {
        console.log("wild animal");
    }
}

class Lion extends Animal {
    sound(){
        console.log("Roar");
    }
}

class Tiger extends Animal {
    body(){
        console.log("strips");
    }
}


var lion = new Lion();
lion.wildAnimal();

var tiger = new Tiger();
tiger.body();


///////////////////// Constructors ////////////////////////
// constructor function allow us to bulid instances of built in native objects(Date, Objects, Function, Boolean)

///////////1. built in objects constructor
// to create a new instance of the objects use the new keyword when the built in object needs a constructor
//when we instantiate a new built in object the new object should have a new data
// example - var date = new Date();
    // new Error();
    // new Map();
    // new Promise();
    // new Set();
    // new WeakSet();
    // new WeakMap();

// build in objects that don't need a constructor can simply be accessed directly like Math
/// Math.pow(3, 5);

/// custom constructor functions

function Icecream(flavor){
    this.flavor = flavor;
    this.meltIt = function () {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}


let kiwiIcecream = new Icecream("kiwi");


/////////////////A RegExp object 
// - is another built-in object in JavaScript. It's used to pattern-match strings 

console.log("abcd".match(/s/)); // null
console.log("abcd".match(/a/));


var bird = {
    hasW : true,
    canF : true,
    hasF : true
}

var eagle = Object.create(bird);
console.log(eagle);

var penguin1 = Object.create(bird);
penguin1.canF = false;

console.log(penguin1);


//////////////// Using class instance as another class' constructor's property
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //



///////////////// questions
// Task 1: Code a Person class

class Person {
    constructor(fname = "Tom", age = 20, energy = 100) {
        this.fname = fname;
        this.age = age;
        this.energy = energy;
            
    }
    sleep() {
        this.energy += this.energy;
    }
    doSomethingFun() {
        this.energy -= this.energy;
    }
}
// Task 2: Code a Worker class

class Worker extends Person {
    constructor(fname, age, energy, xp = 0, hourlyWage = 10) {
        super(fname, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    var bob = new Worker("Bob", 21, 110, 0, 10);
    bob.goToWork();
    return bob;
    
}


// Task 4: Code a manager object, methods
function manager() {
    var man = new Worker("Alice", 30, 120, 100, 30);
    man.doSomethingFun();
    console.log(man.fname);
    return man;
}

manager();