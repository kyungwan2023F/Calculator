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
  let justCalculated = false;
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
    if (value === '-'){
        if (displayValue === '0'){
            displayValue = value;
        }
        else {
            displayValue = '-' + displayValue;
        }
    }
    else if (value === '+'){
        displayValue = displayValue.substring(1);
    }
    else {
        if (justCalculated){
            displayValue = value;
            justCalculated = false;
        }
        else {
            if (displayValue === '0') {
                displayValue = value;  
            } else {
                displayValue += value;
            }
        }
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

// Add event listeners for dotButton aka decimal button
const dotButton = document.querySelector('.dot'); 

dotButton.addEventListener('click', function() {
    if (!displayValue.includes(".")) {
        updateDisplay('.');
    }
});

// Add event listeners for operator buttons
const operatorButtons = document.querySelectorAll('.operator'); 

operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        firstNum = displayValue;
        operator = button.textContent;
        displayValue = '0';
        justCalculated = false;
    });
});

// Add event listeners for equal button
const equalButton = document.querySelector('.equals'); 

equalButton.addEventListener('click', function() {
    secondNum = displayValue;
    // check to see if division by 0 has occured
    if (operator === '/' && secondNum === '0'){
        displayValue = '0';
        updateDisplay("Error");
        operator = undefined;
        displayValue = '0';
        return;
    }
    displayValue = '0';
    // if above case hasnt occured then use operate function to set the display 
    updateDisplay(operate(operator, Number(firstNum), Number(secondNum)).toString());
    firstNum = 0;
    secondNum = 0;
    justCalculated = true;
    operator = undefined;
});

// Add event listeners for clear button
const clearButton = document.querySelector('.clear');
// sets firstnum and secondnum to 0 and the operator to undefined and displayValue to '0' and the displaycontent so that after using the clear
// button the user can input buttons as usual
clearButton.addEventListener('click', function() {
    firstNum = 0;
    secondNum = 0;
    operator = undefined;
    displayValue = '0';
    updateDisplay('0');
});
// Add event listeners for sign Button
const signButton = document.querySelector('.sign');
// if signbutton is pressed when negative is already in front then passes '-' as parameter to remove negative sign otherwise
// passes '+' to add negative sign using updateDisplay
signButton.addEventListener('click', function() {
    if (!displayValue.includes('-')){
        updateDisplay('-');
    }
    else {
        updateDisplay('+');
    }
});

// Add event listeners for percent Button
const percentButton = document.querySelector('.percent');
// sets justCalculated to true to remove set displayValue to the percent value using updateDisplay function
percentButton.addEventListener('click', function() {
    justCalculated = true;
    updateDisplay((Number(displayValue) / 100).toString());    
});



