const buttons = document.querySelectorAll(".add");
const textField = document.getElementById("input-field");
const evalBtn = document.getElementById("calculate");
const clearBtn = document.getElementById("clear");
const removeLastBtn = document.getElementById("remove-last");
let openParenthesis = false;
const parenthesisBtn = document.getElementById("parenthesis");

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
  openParenthesis = false;
});

removeLastBtn.addEventListener("click", function () {
  textField.value = textField.value.slice(0, -1);
});

parenthesisBtn.addEventListener("click", function () {
  openParenthesis ? (textField.value += ")") : (textField.value += "(");
  openParenthesis = !openParenthesis;
});
