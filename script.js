var num = Math.trunc(Math.random() * 20) + 1;
var numScore = 20;
var numHighScore = 0;
document.querySelector("#check").addEventListener("click", function () {
  var backGround = document.body;
  var again = document.querySelector(".again");
  var guessVal = document.querySelector("#input-num").value;

  var guess = document.querySelector("#guess");
  var score = document.querySelector(".scoreVal");
  var img = document.querySelector("#img");
  var highScore = document.querySelector(".highScoreVal");
  if (!guessVal) {
    guess.innerHTML = "No Number";
    guess.style.color = "red";
  } else if (guessVal == num) {
    guess.innerHTML = "Correct No.";
    img.src = "img/thumbs-up.png";
    backGround.style.backgroundColor = "rgb(47 245 47)";
    document.getElementById(
      "text1"
    ).innerHTML = `Congratulation🎉,You guess it <h3>Correct</h3>`;
    document.getElementById("text2").style.display = "none";
    document.querySelector(".result").style.display = "none";
    again.style.visibility = "visible";
    document.getElementById("check").disabled = true;
    if (numScore > numHighScore) {
      numHighScore = numScore;
      document.querySelector(".highscoreVal").textContent = numHighScore;
    }
  } else if (guessVal !== num) {
    guess.innerHTML = guessVal < num ? "Too Low" : "Too high";
    numScore--;
    if (numScore < 1) {
      numScore = 0;
    }
  }
  score.textContent = numScore;
  if (numScore < 1) {
    document.querySelector("#guess").textContent = "You lose the game!";
    document.querySelector(".again").style.visibility = "visible";
    document.getElementById("check").disabled = true;
  }
});
document.querySelector(".again").addEventListener("click", function () {
  numScore = 20;
  document.getElementById("text1").innerHTML = "Guess";
  document.getElementById("text2").style.display = "block";
  document.querySelector(".result").style.display = "block";
  document.body.style.backgroundColor = "rgba(154, 207, 190, 0.753)";
  document.querySelector("#img").src = "img/confused-person-question-marks.png";
  document.querySelector(".result").textContent = "?";
  document.querySelector(".scoreVal").textContent = numScore;
  document.querySelector(".again").style.visibility = "hidden";
  document.querySelector("#guess").textContent = "Start Guessing";
  document.getElementById("check").disabled = false;
  num = Math.trunc(Math.random() * 20) + 1;
});
