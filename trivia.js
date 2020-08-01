document.addEventListener("DOMContentLoaded", () => {
  var triviaGameAppear = document.querySelector(".trivia-game-one");
  var clickButton = document.querySelector(".start-button");
  var timerSet = document.querySelector(".timer");
  var correctAnswerOne = document.querySelector(".correct-answer-one");
  var correctAnswerTwo = document.querySelector(".correct-answer-two");
  var correctAnswerThree = document.querySelector(".correct-answer-three");
  var correctAnswerFour = document.querySelector(".correct-answer-four");
  var correctAnswerFive = document.querySelector(".correct-answer-five");
  var secondTriviaGame = document.querySelector(".trivia-game-two");
  var thirdTriviaGame = document.querySelector(".trivia-game-three");
  var fourthTriviaGame = document.querySelector(".trivia-game-four");
  var fifthTriviaGame = document.querySelector(".trivia-game-five");
  var correctAnswerProgress = document.querySelector(".progress-bar-animated");
  var counter = 60;
  var score = 0;

  console.log(clickButton);
  clickButton.addEventListener("click", function () {
    console.log("Hello");
    triviaGameAppear.removeAttribute("style");
    triviaGameAppear.style.display = "block";

    setInterval(function () {
      if (counter > 0) counter--;
      timerSet.textContent = counter;
    }, 1000);
  });
  correctAnswerOne.addEventListener("click", function () {
    triviaGameAppear.removeAttribute("style");
    triviaGameAppear.style.display = "none";

    counter += 10;
    correctAnswerProgress.setAttribute("style", "width: 20%;");
    score++;
    console.log(secondTriviaGame.style.display);
    secondTriviaGame.removeAttribute("style");
    secondTriviaGame.style.display = "block";
  });
  correctAnswerTwo.addEventListener("click", function () {
    correctAnswerProgress.removeAttribute("style", "width:");
    correctAnswerProgress.setAttribute("style", "width: 40%;");
    secondTriviaGame.removeAttribute("style");
    secondTriviaGame.style.display = "none";
    thirdTriviaGame.removeAttribute("style");
    thirdTriviaGame.style.display = "block";
    counter += 10;
  });
  correctAnswerThree.addEventListener("click", function () {
    correctAnswerProgress.removeAttribute("style", "width:");
    correctAnswerProgress.setAttribute("style", "width: 60%;");
    thirdTriviaGame.removeAttribute("style");
    thirdTriviaGame.style.display = "none";
    fourthTriviaGame.removeAttribute("style");
    fourthTriviaGame.style.display = "block";
    counter += 10;
  });
  correctAnswerFour.addEventListener("click", function () {
    correctAnswerProgress.removeAttribute("style", "width:");
    correctAnswerProgress.setAttribute("style", "width: 80%;");
    fourthTriviaGame.removeAttribute("style");
    fourthTriviaGame.style.display = "none";
    fifthTriviaGame.removeAttribute("style");
    fifthTriviaGame.style.display = "block";
    counter += 10;
  });
  correctAnswerFive.addEventListener("click", function () {
    fifthTriviaGame.style.display = "none";

    counter += 10;
    correctAnswerProgress.setAttribute("style", "width: 100%;");
  });
});
