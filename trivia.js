$(document).ready(function () {
  // Handler for .ready() called.

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
  var printInitialsInfo = localStorage.setItem("initials-input", JSON.stringify(highscore);
  console.log(printInitialsInfo);

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
    if (counter === 0) {
      alert("Time is up. Enter your initials in the next window");
      $("#myModal").modal("show");
      return;
    }
    triviaGameAppear.removeAttribute("style");
    triviaGameAppear.style.display = "none";

    counter += 10;
    correctAnswerProgress.setAttribute("style", "width: 20%;");
    score += 1;
    console.log(secondTriviaGame.style.display);
    secondTriviaGame.removeAttribute("style");
    secondTriviaGame.style.display = "block";
  });
  correctAnswerTwo.addEventListener("click", function () {
    if (counter === 0) {
      alert("Time is up. Enter your initials in the next window");
      $("#myModal").modal("show");
      return;
    }
    correctAnswerProgress.removeAttribute("style", "width:");
    correctAnswerProgress.setAttribute("style", "width: 40%;");
    secondTriviaGame.removeAttribute("style");
    secondTriviaGame.style.display = "none";
    thirdTriviaGame.removeAttribute("style");
    thirdTriviaGame.style.display = "block";
    counter += 10;
    score += 1;
  });
  correctAnswerThree.addEventListener("click", function () {
    if (counter === 0) {
      alert("Time is up. Enter your initials in the next window");
      $("#myModal").modal("show");
      return;
    }
    correctAnswerProgress.removeAttribute("style", "width:");
    correctAnswerProgress.setAttribute("style", "width: 60%;");
    thirdTriviaGame.removeAttribute("style");
    thirdTriviaGame.style.display = "none";
    fourthTriviaGame.removeAttribute("style");
    fourthTriviaGame.style.display = "block";
    counter += 10;
    score += 1;
  });
  correctAnswerFour.addEventListener("click", function () {
    if (counter === 0) {
      alert("Time is up. Enter your initials in the next window");
      $("#myModal").modal("show");
      return;
    }
    correctAnswerProgress.removeAttribute("style", "width:");
    correctAnswerProgress.setAttribute("style", "width: 80%;");
    fourthTriviaGame.removeAttribute("style");
    fourthTriviaGame.style.display = "none";
    fifthTriviaGame.removeAttribute("style");
    fifthTriviaGame.style.display = "block";
    counter += 10;
    score += 1;
  });
  correctAnswerFive.addEventListener("click", function () {
    if (counter === 0) {
      alert("Time is up. Enter your initials in the next window");
      $("#myModal").modal("show");
      return;
    }
    fifthTriviaGame.style.display = "none";
    $("#myModal").modal("show");
    counter += 10;
    score += 1;
    correctAnswerProgress.setAttribute("style", "width: 100%;");
  });
  document.getElementById("save-button").addEventListener("click", function () {
    // var initials = document.getElementById("initials-input").value;
    // alert(`Thank you for playing ${initials}`)
    // if (initials === "") {
    //   return;
    // }
    // var scoreData = localStorage.getItem("dataInfo");
    // if (scoreData === null) {
    //   scoreData = [];
    // } else scoreData = JSON.parse(scoreData);
    // scoreData.push({ initials: initials, score: score });
    // scoreData.sort(function (a, b) {
    //   return b.score - a.score;
    // });
    // var initialsInfo = JSON.stringify(scoreData);
    // localStorage.setItem("scoreData", initialsInfo);
    // console.log(printInitialsInfo);
    // var scoreCardHTML = "";
    // for (var i = 0; i < printInitialsInfo.length; i++) {
    //   console.log(printInitialsInfo[i]);
    //   scoreCardHTML += "<h3>printInitialsInfo[i].initials</h3>";
    //   document.getElementById("score-card").append(scoreCardHTML);
    // }
    // var showScoreData = JSON.parse(localStorage.getItem("scoreData"));
    // document.getElementById("score-card").append("scoreData");
    // localStorage.setItem("dataInfo", JSON.stringify(scoreData));
    // const showScoreData = JSON.parse(localStorage.getItem("data-info"));
    // document.getElementById("score-card").innerHTML(showScoreData);
    // $(".alert").alert();
  });
});
