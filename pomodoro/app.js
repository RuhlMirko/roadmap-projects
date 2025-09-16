const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const timeDisplay = document.getElementById("time");
const stateDisplay = document.getElementById("state");
let workTime = 25;
let restTime = 5;
let isWorking = true;
let isResting = false;
let intervalId;

const openConfigButton = document.getElementById("open-config");
const configOptions = document.getElementById("config-options");
let isConfigOpen = false;
openConfigButton.addEventListener("click", () => {
  isConfigOpen = !isConfigOpen;
  let isOpen = isConfigOpen ? "none" : "block";
  configOptions.style.display = isOpen;
});

const userWorkInput = document.getElementById("work");
const userShortBreakInput = document.getElementById("short-break");
userWorkInput.addEventListener("change", (e) => {
  workTime = parseInt(e.target.value);
});
userShortBreakInput.addEventListener("change", (e) => {
  restTime = parseInt(e.target.value);
});

function startTimer() {
  updateDisplay();
}

function updateDisplay() {
  isWorking ? startWork() : startRest();
}

function startWork() {
  configOptions.style.display = "none";
  stateDisplay.textContent = "Work";
  stateDisplay.style.color = "#121212";
  let time = workTime * 60;
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
  let time = restTime * 60;
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
  timeDisplay.textContent = "25:00";
  isWorking = true;
  isResting = false;
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
