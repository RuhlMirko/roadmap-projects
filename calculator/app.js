const buttons = document.querySelectorAll(".add");
const textField = document.getElementById("input-field");
const evalBtn = document.getElementById("calculate");
const clearBtn = document.getElementById("clear");
const removeLastBtn = document.getElementById("remove-last");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButtonValue = event.target.value;
    textField.value += clickedButtonValue;
  });
});

evalBtn.addEventListener("click", function () {
  textField.value = eval(textField.value);
});

clearBtn.addEventListener("click", function () {
  textField.value = "";
});

removeLastBtn.addEventListener("click", function () {
  textField.value = textField.value.slice(0, -1);
});
