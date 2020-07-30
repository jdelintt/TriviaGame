document.addEventListener("DOMContentLoaded", () => {
  var triviaGameAppear = document.querySelector(".trivia-game");
  var clickButton = document.querySelector(".start-button");
  var counter = 0;
  timerSet = document.querySelector(".timer");

  console.log(clickButton);
  clickButton.addEventListener("click", function () {
    alert("Hello");
    triviaGameAppear.removeAttribute("style");
    triviaGameAppear.style.display = "block";
    timerSet.appendChild(counter);
    setTime();
  });
  function setTime() {
    counter++;
  }
  setInterval(setTime, 1000);
});
