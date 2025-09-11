const buttons = document.querySelectorAll(".add");
const textField = document.getElementById("input-field");
const evalBtn = document.getElementById("calculate");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButtonValue = event.target.value;
    console.log(clickedButtonValue); // Output: 'save' or 'delete' depending on which button is clicked

    textField.value += clickedButtonValue;
    console.log(eval(textField.value));
  });
});

evalBtn.addEventListener("click", function () {
  textField.value = eval(textField.value);
});
