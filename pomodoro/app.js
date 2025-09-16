const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const timeDisplay = document.getElementById("time");
const WORKTIME = 25;
const REST = 5;
let isWorking = true;
let isResting = false;

function startTimer() {
  updateDisplay();
}

function updateDisplay() {
  isWorking ? startWork() : startRest();
}

function startWork() {
  let time = WORKTIME * 60;
  let minutes;
  let seconds;
  let intervalId = setInterval(() => {
    time--;
    minutes = String(Math.floor(time / 60)).padStart(2, "0");
    seconds = String(time % 60).padStart(2, "0");
    timeDisplay.textContent = ` ${minutes}:${seconds}`;
    if (time == 0) clearInterval(intervalId);
  }, 10); // Change ms to 1000(1 second)
}

function startRest() {}

startButton.addEventListener("click", startTimer);
// resetButton.addEventListener("click", resetTimer);
