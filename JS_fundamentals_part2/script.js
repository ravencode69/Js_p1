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
const cal3 = birthyear => 2037 - birthyear;
const aged = cal3(1995);
console.log(aged);

const yearsUntilRetire = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const yearsuntil = 65 - age;
    return `${firstName} retires in ${yearsuntil}`;
}

console.log(yearsUntilRetire(1991, 'jonas'));

console.log(yearsUntilRetire(1995, 'bob'));
//arrow function do not get this keyword
