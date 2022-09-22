/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suit = ["♣", "♥", "♠", "♦"];
const value = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "K",
  "Q",
  "A"
];

function randomNum(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

let cardNumber = document.querySelector(".value");
let topSuit = document.querySelector(".suit");
let bottomSuit = document.querySelector(".suit-flipped");

console.log(cardNumber);
function randomSuit() {
  let ranSuit = suit[randomNum(0, suit.length - 1)];
  topSuit.innerHTML = ranSuit;
  bottomSuit.innerHTML = ranSuit;
  //console.log(ranSuit);
  //console.log(ranSuit);
}

function randomValue() {
  let randomNumber = value[randomNum(0, value.length - 1)];
  cardNumber.innerHTML = randomNumber;
  //console.log(randomNumber);
}

cardButton.onclick = () => {
  randomValue();
  randomSuit();
};

window.onload = () => {
  //write your code here
  randomValue();
  randomSuit();
};
