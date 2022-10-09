"use strict";
/*console.log(document.querySelector(".message").textContent);
//js interact with webpage called dom
//dom is a part of API
document.querySelector(".message").textContent = "Correct";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "N🚫 Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too High !!";
    score--;

    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "Too low ";
    score--;

    document.querySelector(".score").textContent = score;
  }
});