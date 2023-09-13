const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.getElementById("add");
const suntractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const resultDisplay = document.getElementById("result");

//Call back function for addition
function add(a, b) {
  return a + b;
}
//call back function for subtract
function subtract(a, b) {
  return a - b;
}

//call back function for multiply
function multiply(a, b) {
  return a * b;
}
//call back function for divide
function divide(a, b) {
  return a / b;
}

//Event listener for the 'add' button
addButton.addEventListener("click", function () {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (!isNaN(num1) && !isNaN(num2)) {
    const result = add(num1, num2);
    resultDisplay.textContent = `Result: ${result}`;
  } else {
    resultDisplay.textContent = "Please enter a valid number";
  }
});
//eventListner for 'subtract' button
suntractButton.addEventListener("click", function () {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (!isNaN(num1) && !isNaN(num2)) {
    const result = subtract(num1, num2);
    resultDisplay.textContent = `Result: ${result}`;
  } else {
    resultDisplay.textContent = "Please enter a valid number";
  }
});
//eventListner for 'multiply' button.
multiplyButton.addEventListener("click", function () {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (!isNaN(num1) && !isNaN(num2)) {
    const result = multiply(num1, num2);
    resultDisplay.textContent = `Result: ${result}`;
  } else {
    resultDisplay.textContent = "Please enter a valid number";
  }
});
//eventListner for 'divide' button
divideButton.addEventListener("click", function () {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (!isNaN(num1) && !isNaN(num2)) {
    const result = divide(num1, num2);
    resultDisplay.textContent = `Result: ${result}`;
  } else {
    resultDisplay.textContent = "Please Enter a valid number";
  }
});
