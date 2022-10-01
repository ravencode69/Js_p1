/*
let js = 'amazing';
console.log(40 + 8);

console.log("richa");

let firstName = "rich";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

// let javasIsFun = true; //to mutate the values
// console.log(javasIsFun);
// console.log(typeof true);
// console.log(typeof javasIsFun);
// console.log(typeof 23);
// console.log(typeof 'dink');

// javasIsFun = 'YES!';
// console.log(typeof javasIsFun);
// console.log(typeof null);

// const ageRicha = 2037 - 2000;
// console.log(ageRicha);

// const firstName = 'dink';
// const lastName = 'wink';
// console.log(firstName + lastName); //template string


//assignment
// let x = 10 + 5;
// console.log(x);
// x--;
// console.log(x);
// x++;
// console.log(x);

//comparison operators
//console.log(ageRicha < x); // >, < , >=, <=
//assignment operators work from right to left ie ' = '
//math operators work left to right


//code test 1
// let weight1 = 78;
// let weight2 = 95;
// let height1 = 1.69;
// let height2 = 1.88;


// const bmi1 = weight1 / height1 ** 2;
// const bmi2 = weight2 / (height2 * height2);
// const highBMI = bmi1 > bmi2;
// console.log(bmi1, bmi2);
// console.log(highBMI);

//TEMPLATE STRINGS
// const firstName = 'Richa';
// const birthYear = 2000;

// ye hai sadharan zindagi
// const combine = "I'm " + firstName + ',a ' + (2045 - birthYear) + ' year old teacher!';
// console.log(combine);

//ye hai mentos zindagi
// const combine2 = `I'm ${firstName}, a ${2075 - birthYear} year old teacher`;
// console.log(combine2);

// const age = 16;
// const isOldEnogh = age >= 18;


// if (isOldEnogh)
//     console.log('Sarah can start driving');
// else {
//     const yearsLeft = 18 - age;
//     console.log(`sarah should wait for ${yearsLeft} years`);
// }
// const birthYear2 = 1991;

// let century;
// if (birthYear2 <= 2000) {
//     century = 20;
// }
// else {
//     century = 21;
// }
// console.log(century);

//type conversion

// const birthYear = '1991';
// console.log(Number(birthYear) + 18);

// //type coercion

// console.log('I am' + 23 + 'old'); //automatically converts number to string, because of plus(+) operator
// console.log('23' - '10' - 3); //converts the string into number the minus operator (-)
// console.log('21' * '2');//converts the string into number the multiply operator (*)
// console.log('20' / '10');//converts the string into number the divide operator (/)

//5 falsy values : 0, '', undefined,null,Null
//type coercion happens with boolean values
// const money = 0;

// if (money) {
//     console.log("Don't spend it all");
// }
// else {
//     console.log("Get a job bro");
// }

// let height = 0;
// if (height) {
//     console.log("Defined");
// }
// else
//     console.log("Undefined");

// const age = '18';
// if (age === 18) console.log("adult"); //strict eqaulity operator

// const fav = Number(prompt("what is your favorite number"));
// console.log(typeof fav);

// if (fav === 23)
//     console.log("cool");
//always use strict equality

//boolean operators
//! && ||
// const hasDriversLicense = true;
// const hasGoodvision = false;

// console.log(hasDriversLicense && hasGoodvision);
// console.log(hasDriversLicense || hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodvision;
// if (shouldDrive) console.log("she can drive");
// else console.log("someone should drive");


//switch statements
// const day = 'thursday';

// switch (day) {
//     case 'monday':
//         console.log("run");
//         console.log("go to coding meetup");
//         break;
//     case 'tuesday':
//         console.log("prepare food");
//         console.log("breathe");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log("code practice");
//         break;
//     default:
//         console.log("Not a valid day!");
// }
const age = 17;

console.log(`I'd like to drink ${age >= 18 ? "wine" : "water"}`);

// there are expressions and then there are statements we cannot add satements with the console.log
//we can use ternary operators inside the console.log because it is essentialy a expression and it generates
//a value


