// let js = "amazing";

// if(js === "amazing")  alert("JavaScript is fun");

///////////////////////ways of decalring variables
// // 1, let is used when the value of the variable is mutable, let is block scopped
// let firstName = "tsega";
// firstName = "grace";

// //2, const is used when the value of the variable is immutatable
// const birthYear = 1993;
// birthYear = 1990; // we can not do this

//we can not decalre an empty const variable
//const job;

//always use let unless sure abt the value changing

//3, var is the same as let,but var is function scopped

// var job = "programmer"
// job = 'student'

//////////////////////////////////math operators
// const year = 2022;
// const myAge = year - 2001;
// const bAge = year - 1999;
// console.log(myAge, bAge);

// const firstName = "abebe";
// const lastName = "kebede";
// console.log(firstName + " " + lastName);

// console.log(myAge * 2, bAge / 20, myAge ** 3);

// ///////////////////// assigment operators
// let x = 10 + 5;
// x += 20;  // x = x + 20
// x *= 10;  // x = x * 10
// x ++; // x + 1
// x --;

// console.log(x);

// //////////////////// Comparision operators
// console.log(myAge > bAge) // >, <, >=, <= output is a boolena value
// console.log(bAge >= 18);

///////////////// operation precedence
// math operators are executed before comparision operators
// most mathematical operations are execute from left to right
// exponentiation and assignment operations are executed from right to left
// grouping(any operation inside a paranthesis) has the largest precedence of all

////////////////////////////////
/// Challenge #1

// const marksMass = 95, 
//         marksHeight = 1.88, 
//         johnsMass = 85, 
//         johnsHeight = 1.76;

// // one way

// // const BMIM = marksMass / marksHeight ** 2;
// // const BMIJ = johnsMass /johnsHeight ** 2;

// // another way

// const BMIM = marksMass / (marksHeight * marksHeight);
// const BMIJ = johnsMass / (johnsHeight * johnsHeight);

// const markHigherBMI = BMIM > BMIJ;

// console.log(BMIM, BMIJ)
// console.log(markHigherBMI);


/////////////// template literals used to assemble multiple literals with one string
// it is a more easier way to handle multiple strings
// we use back ticks to write a template literal

// const firstName = "Abebe", 
//         lastName = "kebede", 
//         birthYear = 2001, year = 2036,
//         job = "programmer";


// const bio = `I'm ${firstName} ${lastName} a ${(year - birthYear)} years old ${job} `;
// console.log(bio)

// // template literals are used to write a multi line strings

// console.log(`String with  
// multiple 
// lines`);

/////////////////// if else control structure 

// const age = 15;
// const isOldEnough = (age >= 18);

// if (isOldEnough) {
//         console.log("They can start driving license 🚘")
// }
// else {
//         const agesLeft = 18 - age;
//         console.log(`Nani is too young. She should wait ${agesLeft} years`)
// }

// const birthYear = 2800;
// let centuary;
// if (birthYear <= 2000){
//     centuary = 20;    
// }
// else{
//         centuary = 21;
// }

// console.log(centuary)

/////////////////////////
//Challenge #2
 
// const marksMass = 95, 
//         marksHeight = 1.88, 
//         johnsMass = 85, 
//         johnsHeight = 1.76;

// const BMIM = marksMass / (marksHeight * marksHeight);
// const BMIJ = johnsMass / (johnsHeight * johnsHeight);

// if ( BMIM > BMIJ ){
//         console.log(`Mark's BMI(${BMIM}) is higher than John's(${BMIJ})`);
// }
// else{
//         console.log(`John's BMI(${BMIJ}) is higher than Mark's(${BMIM})`)
// }


//////////////////Type conversion 
// Type conversion is the manually converting from one type to another(explicit)
// NaN - not a number (invalid number)

// const inputYear = 1993;
// console.log(Number(inputYear + 20));
// console.log(String(23));

/////////////////// Type coercion
// Type coercion happens when the JS automatically converts types behind the scence( is implicit)

// console.log("I'm " + 23 + " years old"); // I'm 23 years old
// console.log('29' + '19'); // 2919 the strings wouldn't be converted to number
// console.log('27' - '15'); //12 the strings will be converted to numbers
// console.log('3' * '2'); // 6 the strings will be converted to numbers
// console.log('10' / '2'); // 5 the strings will be converted to numbers
// console.log('49' > '12'); // true the strings will be converted to numbers

/////////////////// Truthy and Falsy
// Falsy values are values which are not actually false 
// but change when we try to convert them into boolean
// anything that isnot falsy is true
// falsy values : 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean({}));
// console.log(Boolean('melani'));

// we shoulldn't always use this because 
// when we want the height to be 0 it will execute the else block even tho we want it to execute the if block

// let height = 10;
// if (height){
//         console.log('height is deined');
// }
// else{
//         console.log('height is not defined');
// }

//////////////////////////// Equality operators : ===(equals), !==(not equal)
// double equal performes a type coercion

// console.log('18' == 18); // true since the string will be converted to number

// triple equal doesn't perform a type coercion

// const age = '18';
// if (age === 18) console.log("you are an adult") // strict
// if (age == 18) console.log("you are an adult") // loose

//////////////////////////// prompt function

// const firstName = prompt('What is your name');
// console.log(firstName);

// if (firstName !== 'rock') console.log('Your name rocks');
// else if (firstName === 'dash') console.log('You look so dashing');
// else if (firstName === 'ponny') console.log('You do like ponnies');
// else console.log('Your name seems boring');

//////////////////////////////////Boolena logical operators : AND(&&), OR(||), NOT(!)
// Boolena logical operators uses true or false values to solve complex problems 

// const hasDrivingLicense = true;
// const hasGoodVision = true;
// const isTtired = false;

// console.log( hasDrivingLicense && hasGoodVision);
// console.log( hasDrivingLicense || hasGoodVision);
// console.log( !hasDrivingLicense);

// if ((hasDrivingLicense || hasGoodVision) && !isTtired){
//     console.log("sarah should not drive");
// }
// else console.log("sarah can dirve");

///////////////////////////////////
// Challenge #3

// const dolphinScoreOne = 96, dolphinScoreTwo = 108, dolphinScoreThree = 89;
// const koalaScoreOne = 88, koalaScoreTwo = 91, koalaScoreThree = 110;

// const dolphinAverageScore = (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;
// const koalaAverageScore = (koalaScoreOne + koalaScoreTwo + koalaScoreThree) / 3;

// if((dolphinAverageScore > koalaAverageScore) && (dolphinAverageScore >= 100) ){
//     console.log(`The winner is the dolphins team with ${dolphinAverageScore} score`);
// }
// else if ((koalaAverageScore > dolphinAverageScore) && (koalaAverageScore >= 100)){
//     console.log(`The winner is the dolphins team with ${koalaAverageScore} score`);
// }
// else if ((koalaAverageScore === dolphinAverageScore) && (koalaAverageScore >= 100) && (dolphinAverageScore >= 100)){
//     console.log(`Both win the trophy`);
// }
// else console.log(`No team wins the trophy`);


///////////////////// Switch statment
// const age = Number( prompt("How old are you"));

// switch(age){
//     case 2:
//         console.log(`you are the cutest thing on earth😍`);
//         break;
//     case 7:    
//     case 8:
//         console.log(`Look at those teeth you should cover them up😂`);
//         break;
//     case 15:
//         console.log(`you are a cute teenager now Congratulations👍`);
//         break;
//     case 19:
//         console.log(`Now you are a grown ass person get your acts toghether!`);
//         break;
//     default:
//         console.log(`you are on your own now.`);

// }

//////////////////// Statment and Experssion
// Experssion : is a piece of code that produces a value
 
// 543 + 29
// 2022
// true || false

// // Statment is a bigger piece of code that is executed and which does not produce a value on itself
// if (age === 20){
//     const str = "hanna"
// }

// we can only insert experssions in template literals not statments
// console.log(`I'm ${2022-2001}`)

/////////////////////Conditional or ternary operator
//It is like an if statment but allows us to write every thing in one line
// an operator is an expression
// const age = 13;

// age >= 18? console.log(`you are allowed to drink`) : console.log(`you are not allowed`)
// console.log(`i like to drink ${age>=18?'wine':'water'}`)

/////////////////////// Challenge #4

// const bill = 10;

// const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
// console.log(result)

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${ tip + bill}`);

