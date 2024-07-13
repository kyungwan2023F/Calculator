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
  let displayValue = '0';

  const operate = function (operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return 'Error: Invalid operator';
    }
  };

const display = document.querySelector('.calc-display');


const updateDisplay = (value) => {
    if (displayValue === '0'){
        displayValue = value;
    }
    else {
        displayValue = displayValue + value;
    }
    display.textContent = displayValue;
};

// Add event listeners for number buttons
const numberButtons = document.querySelectorAll('.btn-number'); 

numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        updateDisplay(button.textContent);
    });
});

const operatorButtons = document.querySelectorAll('.operator'); 

operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        firstNum = displayValue;
        operator = button.textContent;
        displayValue = '0';
    });
});






