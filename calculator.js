const add = function(num1, num2) {
    return num1 + num2;
  };
  
  const subtract = function(num1, num2) {
      return num1 - num2;
  }; 
  
  const multiply = function(num1, num2) {
    return num1 * num2;
  };

  const divide = function (num1,num2) {
    return num1 / num2;
  };

  let firstNum = 0;
  let operator;
  let secondNum = 0;

  const operate = function (operator, num1, num2) {
    switch (operator) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            return 'Error: Invalid operator';
    }
  };
  document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.calc-display');
    let displayValue = '0';

    const updateDisplay = (value) => {
        displayValue = value;
        display.textContent = displayValue;
    };

    // Add event listeners for number buttons
    const numberButtons = document.querySelectorAll('.btn-number'); // Assuming all number buttons have this class

    numberButtons.forEach(button => {
        button.addEventListener('click', function() {
            updateDisplay(button.textContent);
        });
    });
});




