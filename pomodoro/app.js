const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const timeDisplay = document.getElementById("time");
const stateDisplay = document.getElementById("state");
let workTime = 25;
let restTime = 5;
let longBreakTime = 15;
let isWorking = true;
let isResting = false;
let intervalId;
let restCycleCount = 0;
const restCounterDisplay = document.getElementById("rest-counter");
restCounterDisplay.textContent = `Rest Cycles: ${"✔" * restCycleCount}`;

// User Configuration
const openConfigButton = document.getElementById("open-config");
const configOptions = document.getElementById("config-options");
let isConfigOpen = false;
openConfigButton.addEventListener("click", () => {
  isConfigOpen = !isConfigOpen;
  let isOpen = isConfigOpen ? "block" : "none";
  configOptions.style.display = isOpen;
});
const userWorkInput = document.getElementById("work");
const userShortBreakInput = document.getElementById("short-break");
const userLongBreakInput = document.getElementById("long-break");
userWorkInput.addEventListener("change", (e) => {
  workTime = parseInt(e.target.value);
});
userShortBreakInput.addEventListener("change", (e) => {
  restTime = parseInt(e.target.value);
});
userShortBreakInput.addEventListener("change", (e) => {
  longBreakTime = parseInt(e.target.value);
});

// Timer Functions
function startWork() {
  alert("Work session started. Stay focused!");
  clearInterval(intervalId); // Clear any existing intervals
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
  alert("Rest session started. Take a break!");
  stateDisplay.textContent = "Rest";
  stateDisplay.style.color = "#4caf50";
  restCycleCount++;
  restCounterDisplay.hidden = false;
  restCounterDisplay.textContent = `Rest Cycles: ${"✔".repeat(restCycleCount)}`;
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
      if (restCycleCount % 4 == 0) {
        clearInterval(intervalId);
        longBreak();
      }
    }
  }, 1000); // Change ms to 1000(1 second)
}

function longBreak() {
  alert("Long break started. Relax!");
  stateDisplay.textContent = "Long Break";
  stateDisplay.style.color = "#2196f3";
  let time = longBreakTime * 60;
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
  configOptions.style.display = "none";
  clearInterval(intervalId);
  timeDisplay.textContent = "25:00";
  isWorking = true;
  isResting = false;
}

startButton.addEventListener("click", startWork);
resetButton.addEventListener("click", resetTimer);
