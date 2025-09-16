const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const timeDisplay = document.getElementById("time");
const stateDisplay = document.getElementById("state");
const WORKTIME = 25;
const REST = 5;
let isWorking = true;
let isResting = false;
let intervalId;

function startTimer() {
  updateDisplay();
}

function updateDisplay() {
  isWorking ? startWork() : startRest();
}

function startWork() {
  stateDisplay.textContent = "Work";
  stateDisplay.style.color = "#121212";
  let time = WORKTIME * 60;
  let minutes;
  let seconds;
  intervalId = setInterval(() => {
    time--;
    minutes = String(Math.floor(time / 60)).padStart(2, "0");
    seconds = String(time % 60).padStart(2, "0");
    timeDisplay.textContent = ` ${minutes}:${seconds}`;
    if (time == 0) {
      clearInterval(intervalId);
      startRest();
    }
  }, 1000); // Change ms to 1000(1 second)
}

function startRest() {
  stateDisplay.textContent = "Rest";
  stateDisplay.style.color = "#4caf50";
  let time = REST * 60;
  let minutes;
  let seconds;
  intervalId = setInterval(() => {
    time--;
    minutes = String(Math.floor(time / 60)).padStart(2, "0");
    seconds = String(time % 60).padStart(2, "0");
    timeDisplay.textContent = ` ${minutes}:${seconds}`;
    if (time == 0) {
      clearInterval(intervalId);
      startWork();
    }
  }, 1000); // Change ms to 1000(1 second)
}

function resetTimer() {
  clearInterval(intervalId);
  timeDisplay.textContent = "00:00";
  isWorking = true;
  isResting = false;
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
