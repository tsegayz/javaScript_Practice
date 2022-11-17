'use strict'; // activate strict mode, allows us to write a secure JS code, makes it easier to avoid error

/////////////////////// Function : is a piece of code that we can reuse over and over again
// function is a value

//function declaration : can be called before they are defined in the code

// function fruitMixer(mango, pineapple){
//     const juice = `juice with ${mango} mangos and ${pineapple} pineappkes.`
//     return juice;
// }

// const mix = fruitMixer(20, 10);
// console.log(mix);

// // function expression  : can not be accessed before initialization
// const ageCalculator = function (birthYear, year){
//     const age = `You are ${year - birthYear} old` ;
//     return age;
// }

// console.log(ageCalculator(2001, 2022));

// // Arrow function : used when we have exactly one parameter and have one line of code
// //Arrow function don't use "this" key word

// const ageCalculator1 = birthYear => 2022 - birthYear;
// console.log(ageCalculator1(2019))
 
//////////////////////////
// const yearsUntilRetirement = birthYear => {
//     const age = 2022 - birthYear;
//     const retire = 65 - age;
//     return retire;
// }

// const age1 = yearsUntilRetirement(1993);
// console.log(age1);

// ////////////////////////// two parameter//////
// const retirmentYearLeft = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retire = 65 - age;
//     const him = `${firstName} retires in ${retire} years`;
//     return him;
// }
// console.log(retirmentYearLeft(2001, 'Tsega'));


////////////////////// Functions calling another Function

// function cutFruitPieces (fruit) {
//     return fruit * 10;
// 
// function fruitMixer(mango, apple){

//     const mangoPieces = cutFruitPieces(mango);
//     const applePieces = cutFruitPieces(apple);

//     const juice = `juice with ${mangoPieces} pieces of mango and ${applePieces} pieces of apple.`
//     return juice;
// }

// console.log(fruitMixer(5, 1));

/////////////////////// variables like birth year are local variables to each function
///////return key word will immediately exit the function
// const ageCalculator = function (birthYear) {
//     return 2022 - birthYear;
// }
// const retirmentYearLeft = function (birthYear, firstName) {

//     const age = ageCalculator(birthYear);
//     const retire = 65 - age ;
//     if (retire < 0){
//         const him = `${firstName} retires in ${retire} years`;
//         return him;
//     }
//     return `${firstName} has already retired`;
// }

// console.log(retirmentYearLeft(1995, "Noah"));


//////////////////////////// #Challenge 1
// const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;
   

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log (scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= (2*avgKoalas)) {
//        return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
       
//     }
//     else if ( avgKoalas >= (2 * avgDolphins)) {
//         return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
        
//     } else {
//         return console.log(`No team wins`);
//     }
// }
// checkWinner( scoreDolphins, scoreKoalas);

////////////////////////////////Arrays - is a list of values of any type, can be mutated even if we decalre them using const since they are not primitive type 
// primitive data types can  not be mutated once they are declared using 'const' keyword

// const fruits = ['apple', 'banana', 'mango'];

// const countries = new Array ('ethiopia', 'USA', 'canada');

// console.log(fruits[1]); // '[]' are used to access the element 
// console.log(countries.length); //// returns the actual number of elements in the array
// console.log(countries[countries.length - 1]);// returns the last element

// fruits[1] = "pineapple";
// console.log(fruits);

// // we can store data of different type in one array
// const firstName = 'Tsega';
// const ts = [firstName, 'yaekob', 1992 - 2021, 'student', countries] ;
// console.log(ts);

// const years = [1990, 2001, 2004, 2007];
// // years + 10 ======> '1990,2001,2004,200710'

// const calcAge = birthYear => 2037 - birthYear;

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

/// Methods - built in functions, can be applied directly to arrays, are array methods
// "Push" method add elements to the end of an array

// const fruits = ['apple', 'banana', 'mango'];
// fruits.push('pineapple');
// console.log(fruits);

// //// we can access the length of the array using
// const nLength = fruits.push("papaye");
// console.log(nLength);

// //unshift method adds elements at the begining of an array
// fruits.unshift("peache");
// console.log(fruits);

// // pop method removes the last element
// fruits.pop( );
// console.log(fruits);

// // remove the first element of an array
// fruits.shift();
// console.log(fruits);

// // includes is used to check if an element exists in an array
// if ( fruits.includes('banana') ){
//     console.log('You have bananas');
// }

////////// Challenge #2

// const calcTip = function (bill) {
//     const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
//     return tip;
// }
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [ calcTip(bills[0]), calcTip (bills[1]), calcTip (bills[bills.length -1])];

// console.log(tips);
  
// const total = [ tips[0] + bills[0], tips[1] + bills[1], tips[tips.length - 1] + bills[bills.length - 1]];
// console.log(total);

// console.log(bills, tips, total);

///////////// Objects - used to define a key value pair, 
//// used to group together same values that belong to the same group
//// each key is called a property
//// order of the elements we use to retireve a data doesn't matter

// const tele = {
//     firstName : 'Tsega',
//     lastName : 'Yaekob',
//     age : 2022 - 2001,
//     job : 'student', 
//     friends : [' rachel', 'feobi', 'monica']
// };

// ///////////// retrieving and changing objects data

// console.log(tele.firstName);
// console.log(tele['lastName']); // we can use an expression in the bracket

// const nameKey = 'Name';
// console.log(tele['first' + nameKey]);
// console.log(tele['last' + nameKey]);

// // const intrestedIn = prompt("What do you want to know about me?");
// // console.log(tele[intrestedIn]);

// // tele['friends'] = 'rachel';
// // tele.friends = 'feobi';

// ////////// Challenge
// console.log(`${tele.firstName} has ${tele.friends.length} friends, and her best friend is ${tele.friends[0]}`)

//////// Object method
//// any function that is attached to an object is called a method
//// we use function expression when they are used in objects
// we use "this" key word to read directly from an object
// "This" key word points to the object inside of which it is used


// const profile = {
//     firstName : 'Tsega',
//     lastName : 'Yaekob',
//     birhtYear : 1991,
//     job : 'student', 
//     hasDriverLicense : true,
//     friends : [' rachel', 'feobi', 'monica'],
//     // calcAge : function (birthYear) {
//     //     return 2022 - birthYear; 
//     // }

//     // calcAge : function () {
//     //     return 2022 - this.birhtYear; 
//     // }

//     calcAge : function () {
//         this.age = 2022 - this.birhtYear;
//         return this.age; 
//     },
//     getSummary : function (){
//         this.summary = `Tsega is a ${this.age}-years old ${this.job}, and she has ${this.hasDriverLicense ? "a driver's license" : "no driver's license"} `;
//         return this.summary;
//     }

// };

// // console.log(profile['calcAge'](1992));
// console.log(profile.calcAge()); //  age calculated once then retireved as we like
// // console.log(profile.age);

// console.log(profile.getSummary());
// console.log(profile.summary);

///////// arrays are special kind of objects
// Challenge #3

// const mark = {
//     fullName : "Mark Miller",
//     mass : 78, 
//     height : 1.69,
//     calcBMI : function (){
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     } 
// };

// const john = {
//     fullName : "John Smith",
//     mass : 92, 
//     height : 1.95,
//     calcBMI : function (){
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     } 
// };
// console.log(john.calcBMI());
// console.log(mark.calcBMI());

// console.log( mark.calcBMI >= john.calcBMI ? 
//     `${mark.fullName} BMI ${(mark.BMI)} is higher than ${john.fullName} ${(john.BMI)} !` :
//     `${john.fullName} BMI ${(john.BMI)} is higher than ${mark.fullName} ${(mark.BMI)} !`);


/////////////////////////// Control Structure - Loops - allow us to automate repetitive task
//// for loop keeps running while condition is true

// for (let initial = 1; initial <=10; initial ++) {
//     console.log(`I'm achieving my dream ${initial}🎉`);
// }

// const tsega = [
//     "Tsega", 
//     "Yakeob",
//     2022 - 2001,
//     'student',
//     ['rachel', 'monica', 'amy', 'amanda'], 
// ];

// const types = [];
// for (let i = 0;i <= tsega.length - 1; i++){
//     console.log(tsega[i], typeof tsega[i]);

//     //// ways of filling an array
//     // types [i] = typeof tsega[i];
//     // types.push(typeof tsega[i]);
// }

// console.log(types);

// const years = [1993, 2008, 2012, 2002];
// const ages = [];

// for(let i = 0; i < years.length; i++){
    
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

//////////// continue is used to exit the current iteration and continue to the next
//////////// break is used to completely exit the whole loop

// const tsega = [
//     "Tsega", 
//     "Yakeob",
//     2022 - 2001,
//     'student',
//     ['rachel', 'monica', 'amy', 'amanda'], 
// ];  
// for(let i = 0; i < tsega.length; i++){
    
//     ////// only for printing the strings
//     if(typeof tsega[i] !== 'string') continue;
//     console.log(tsega[i], typeof tsega[i]);
// }

// for(let i = 0; i < tsega.length; i++){
    
//     ////// after finding a number nothing else is printed
//     if(typeof tsega[i] === 'number') break;
//     console.log(tsega[i], typeof tsega[i]);
// }

// const tsega = [
//     "Tsega", 
//     "Yakeob",
//     2022 - 2001,
//     'student',
//     ['rachel', 'monica', 'amy', 'amanda'], 
// ]; 

// for(let i = tsega.length; i >=0; i--) {
//     console.log(tsega[i]);
// }

/////////// Nesting loops
// for(let exercise = 1; exercise <= 2; exercise ++) {
//     console.log(`------ Starting exercise ${exercise}`);
//     for (let rep = 3; rep >0; rep--){
//         console.log(`Lifiting weight reptition ${rep}`);
//     }
// }

/////////// While loop - used when the counter is unavaliable or when we don't know exactly how many iterations there are
// let exercise = 1;
// while( exercise <= 2) {
//      console.log(`------ Starting exercise ${exercise}`);
//     exercise ++;
// }

// random - a method that returns any random decimal number
// trunc - a method that returns a whole number

// let dice = Math.trunc( Math.random() * 6 + 1 );

// while(dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc( Math.random() * 6 + 1 );
//     if (dice === 6){
//         console.log(`the loop is about to end`);
//     }
// }

//////// Challenge #4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//     const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
//     return tip;
// };

// for (let i = 0; i < bills.length; i++){
//     tips.push(calcTip(bills[i]));
//     totals.push(tips[i] + bills[i]);

// };

// console.log(bills,);
// console.log(tips);
// console.log(totals);

// const calcAverage = function (arra) {
//     let sum = 0;

//     for(let i = 0; i < arra.length; i++ ){
//         sum += arra[i];
//     } 
//     return sum / arra.length;
// };

// console.log(calcAverage(totals));

