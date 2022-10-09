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
    //no ip
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    //player wins
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too High !!";
    score--;
    //too high
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "Too low ";
    score--;
    //too low
    document.querySelector(".score").textContent = score;
  }
});
