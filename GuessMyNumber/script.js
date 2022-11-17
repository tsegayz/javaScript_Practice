`use strict`;
//////// DOM - document object model
///////////  - DOM manipulation - is used to enable JS to enteract with a web page
/// DOM - is sturctured representation of html doc, Is a web API
// it allows js to access html elements and styles to manipulate them

/////// we first select the element and access the content
// this query is used to select the --element--
//////////////////////////////// --the class name in the html file
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = " Correct Number";
// document.querySelector(".number").textContent = 18;
// document.querySelector(".score").textContent = 50;

// //////////////////////// we use value to get the value of an input property
// document.querySelector(".guess").value = 12;

//////// handling a click event we use an event listener

///// when we manipulate the css using DOM we don't change the css file
/// we simply use the inline elements that are declared inside the html file
// we don't change the css file
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displaymessage = (message) =>
  (document.querySelector(".message").textContent = message);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (guess === secretNumber) {
    /////////// when the player wins
    displaymessage("🎉 Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".score").textContent = score;
    ////// manipulating the background color use a camel case when defining the property
    document.querySelector("body").style.backgroundColor = " #60b347";
    document.querySelector(".number").style.width = "30rem";
    /////////////////// high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  ///////////// refactoring, using a function to refactor is the best choice
  else if (guess !== secretNumber) {
    if (score > 1) {
      displaymessage(guess < secretNumber ? " 📈 too low" : " 📉 too high");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displaymessage("💥 you lost the game ");
      document.querySelector(".score").textContent = 0;
    }
  }
  // ////// when the guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = " 📈 too low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 you lost the game ";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  // //// when the guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = " 📉 too high";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 you lost the game ";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  if (!guess) {
    displaymessage(" ⛔ No number");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = " ";
  displaymessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = " #222";
  document.querySelector(".number").style.width = "15rem";
});
