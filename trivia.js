document.addEventListener("DOMContentLoaded", () => {
  var triviaGameAppear = document.querySelector(".trivia-game-zero");
  var clickButton = document.querySelector(".start-button");
  var timerSet = document.querySelector(".timer");
  var correctAnswer = document.querySelector(".correct-answer");
  var secondTriviaGame = document.querySelector(".trivia-game-one");
  var correctAnswerProgress = document.querySelector(".progress-bar-animated");
  var counter = 60;
  var score = 0;

  console.log(clickButton);
  clickButton.addEventListener("click", function () {
    alert("Hello");
    triviaGameAppear.removeAttribute("style");
    triviaGameAppear.style.display = "block";

    setInterval(function () {
      counter--;
      timerSet.textContent = counter;
    }, 1000);
  });
  correctAnswer.addEventListener("click", () => {
    triviaGameAppear.style.display = "none";
    secondTriviaGame.style.display = "block";
    counter += 10;
    correctAnswerProgress.setAttribute("style", "width: 20%;");
    score++;
  });
});
