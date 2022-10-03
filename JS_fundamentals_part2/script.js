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

function foodProcessor(apples, oranges) {
    console.log(apples, oranges);
    const res = `We have ${apples} apples and ${oranges} oranges`;
    return res;
}

const amt = foodProcessor(3, 4);
console.log(amt);