document.addEventListener("DOMContentLoaded", () => {
  var triviaGameAppear = document.querySelector(".trivia-game");
  var clickButton = document.querySelector(".start-button");
  timerSet = document.querySelector(".timer");
  counter = 60;

  console.log(clickButton);
  clickButton.addEventListener("click", function () {
    alert("Hello");
    triviaGameAppear.removeAttribute("style");
    triviaGameAppear.style.display = "block";

    timerSet.textContent = setInterval(function () {
      timerSet.innerHTML = counter--;
    }, 1000);

    //   timerSet.appendChild(counter);
    //   setInterval(setTime, 1000);
    //   setTime();
  });
  // function setTime() {
  //   counter--;
});
