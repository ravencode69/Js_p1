'use strict';
// let hasDriversLicense = false;
// let passTest = true;

// //1--> shows error messages
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("drive");

// //2-->reserved keywords
// const private = 'jill';

//function
// function logger() {
//     console.log('my name is raven ');
// }

//calling /running / invoking the function 
// logger();
// logger();

//functions
// function foodProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const res = `We have ${apples} apples and ${oranges} oranges`;
//     return res;
// }

// const amt = foodProcessor(3, 4);
// console.log(amt);

//func declaration

// const v = calcAge(1999); //we can call the function declaration in js before they are defined 
//but the same can't be done for the FUNCTION EXPRESSION 
//happens due to hoisting
// function calcAge(birthyear) {
//     const age = 2037 - birthyear;
//     return age;
// }
// console.log(`The age in 2037 is ${v}`);

//function expression
// const exp2 = function (birthyear) {   //anonymous function
//     return 2037 - birthyear
// }
// const age2 = exp2(1999);
// console.log(age2, v);
//functions are just values

// ARROW FUNCTIONS : shorter version of function expression
// const cal3 = birthyear => 2037 - birthyear;
// const aged = cal3(1995);
// console.log(aged);

// const yearsUntilRetire = (birthyear, firstName) => {
//     const age = 2037 - birthyear;
//     const yearsuntil = 65 - age;
//     return `${firstName} retires in ${yearsuntil}`;
// }

// console.log(yearsUntilRetire(1991, 'jonas'));

// console.log(yearsUntilRetire(1995, 'bob'));
//arrow function do not get this keyword

//Conversion of the arrow function to normal function expression
// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }
// const yearsUntilRetire2 = function (birthyear, firstName) {
//     const age = calcAge(birthyear);
//     const yearsuntil = 65 - age;
//     if (yearsuntil > 0)
//         return `${firstName} retires in ${yearsuntil}`;
//     else
//         return -1;
// }

// const result = yearsUntilRetire2(1956, 'Richa');
// console.log(result);

//coding challenge
const calcAverage = (data1, data2, data3) => {

    return (data1 + data2 + data3) / 3;
}

// const scoreD = calcAverage(44, 23, 71);
// const scoreK = calcAverage(65, 54, 49);

// const winner = (scoreD > scoreK) ? 'Dolphins won' : 'Koalas won';
// console.log(winner);

//Array  and Objects

// const friends = ['Rick', 'Roll', 'fin', 'Duggu'];
// console.log(friends);

// const years = new Array(1001, 1091, 1901);
// console.log(years);

// console.log(friends.length);
//basic array methods
const friends = ['Rick', 'Roll', 'fin', 'Duggu'];
let newLen = friends.push('Phil'); //member access
console.log(friends, newLen);

//add to the first place of array 
friends.unshift('Rani');
console.log(friends, newLen);

//last pop
friends.pop();
console.log(friends, newLen);

//first pop
friends.shift();
console.log(friends, newLen);

//index of 
console.log(friends.indexOf('Roll'));
//includes
console.log(friends.includes('Rani'));

const jonas = {
    firstName: 'nose',
    lastName: 'front',
    age: 56,
    job: 'dancer',
    friends: ['dan', 'bannu', 'tannu']
};


console.log(jonas.firstName);
console.log(jonas['firstName']); // computed member access

const eveni = 'Name';
console.log(jonas['first' + eveni]);

//const holder = prompt('what do you want to know about jonas');
//console.log(jonas[holder]);

//object methods

const jonas2 = {
    firstName: 'nose',
    lastName: 'front',
    borthYeahr: 2002,
    age: 56,
    job: 'dancer',
    friends: ['dan', 'bannu', 'tannu'],
    hasLicence: true,

    // calcage: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    calage: function () {
        console.log(this);
        return 2037 - (this.borthYeahr);
    }
};

console.log(jonas2.calage());
//console.log(jonas2['calcage'](2001));






