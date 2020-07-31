document.addEventListener("DOMContentLoaded", () => {
  var triviaGameAppear = document.querySelector(".trivia-game-zero");
  var clickButton = document.querySelector(".start-button");
  var timerSet = document.querySelector(".timer");
  var correctAnswer = document.querySelector(".correct-answer");
  var secondTriviaGame = document.querySelector(".trivia-game-one");
  var counter = 60;
  var clickThis = 1;

  console.log(clickButton);
  clickButton.addEventListener("click", function () {
    alert("Hello");
    triviaGameAppear.removeAttribute("style");
    triviaGameAppear.style.display = "block";

    timerSet.textContent = setInterval(function () {
      timerSet.innerHTML = counter--;
    }, 1000);
  });
  correctAnswer.addEventListener("click", () => {
    triviaGameAppear.style.display = "none";
    secondTriviaGame.style.display = "block";
  });
});
