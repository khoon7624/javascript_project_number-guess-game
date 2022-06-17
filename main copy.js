let computerNum = Math.floor(Math.random() * 100) + 1;
const userInput = document.querySelector(".user-input");
let userValue = "";
const userButton = document.querySelector(".user-button");
let context = document.querySelector(".context");
let count = document.querySelector(".count");
let countValue = 5;
const resetButton = document.querySelector(".reset");
let arr = [];

const play = () => {
  userValue = userInput.value;

  if (arr.includes(userValue)) {
    count.innerHTML = "이미 입력한 값입니다.";
    return;
  }
  if (userValue > 100 || userValue < 1) {
    return;
  }

  if (userValue > computerNum) {
    context.textContent = "Down!";
  } else if (userValue < computerNum) {
    context.textContent = "Up!";
  } else {
    context.textContent = "맞추셨습니다.";
    userButton.disabled = true;
  }

  arr.push(userValue);

  count.innerHTML = `남은기회 : ${--countValue}`;

  if (countValue < 1) {
    userButton.disabled = true;
  }
};

const reset = () => {
  randomNumber();
  countValue = 5;
  count.innerHTML = `남은기회 : ${countValue}`;
  context.textContent = "";
  userButton.disabled = false;
  userInput.value = "";
};

userButton.addEventListener("click", play);
userInput.addEventListener("focus", () => {
  userInput.value = "";
});
resetButton.addEventListener("click", reset);

const randomNumber = () => {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답은:", computerNum);
};

randomNumber();
