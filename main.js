let computerNum = 0;
let playBtn = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetBtn = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let chance = 5;
let gameOver = false;
let history = [];

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이 숫자를 입력해 주세요";
    return;
  }
  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다.";
    return;
  }
  chance--;
  chanceArea.textContent = `남은기회: ${chance}번`;
  if (userValue < computerNum) {
    resultArea.innerHTML = "up!!";
  } else if (userValue > computerNum) {
    resultArea.innerHTML = "down!!";
  } else {
    resultArea.innerHTML = "맞췄습니다!!";
    gameOver = true;
  }

  history.push(userValue);

  if (chance < 1) {
    gameOver = true;
  }
  if (gameOver === true) {
    playBtn.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNum();
  resultArea.textContent = "결과 값이 여기 나옵니다!";
  chance = 5;
  chanceArea.textContent = `남은기회: ${chance}번`;
  playBtn.disabled = false;
}

pickRandomNum();
