const calculator = {
  display1: document.querySelector('#display1'),
  display2: document.querySelector('#display2'),
  currOper: '',
}

// Event listener for button presses
const buttons = document.querySelector('#buttons');

buttons.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    console.log(e.target.id);
    eventHandler(e.target.id);
  }
});

// Event handler for button presses
function eventHandler(eventID) {

  // If AC was pressed
  if (eventID === 'clear') {
    clearText();
  }

  // If a number key was pressed
  if (eventID.match(/^(zero|one|two|three|four|five|six|seven|eight|nine)$/)) {
    inputNumber(eventID);
  }

  // If the addition key was pressed
  if (eventID === 'add') {
    addition();
  }

  // If the addition key was pressed
  if (eventID === 'subtract') {
    subtraction();
  }

  // If the addition key was pressed
  if (eventID === 'multiply') {
    multiplication();
  }

  // If the addition key was pressed
  if (eventID === 'divide') {
    division();
  }

  // If the calculate key was pressed
  if (eventID === 'equals') {
    calculate();
  }
}

// Clear text function
function clearText() {
  calculator['display1'].textContent = '';
  calculator['display2'].textContent = '';
  calculator['currOper'] = '';
}

// Number input function
function inputNumber(eventID) {
  // Do not allow leading 0's
  if (calculator['display1'].textContent[0] === '0') {
    calculator['display1'].textContent = '';
  }
  // Add number to field2
  if (eventID === 'zero') {
    calculator['display1'].textContent += '0';
  }
  if (eventID === 'one') {
    calculator['display1'].textContent += '1';
  }
  if (eventID === 'two') {
    calculator['display1'].textContent += '2';
  }
  if (eventID === 'three') {
    calculator['display1'].textContent += '3';
  }
  if (eventID === 'four') {
    calculator['display1'].textContent += '4';
  }
  if (eventID === 'five') {
    calculator['display1'].textContent += '5';
  }
  if (eventID === 'six') {
    calculator['display1'].textContent += '6';
  }
  if (eventID === 'seven') {
    calculator['display1'].textContent += '7';
  }
  if (eventID === 'eight') {
    calculator['display1'].textContent += '8';
  }
  if (eventID === 'nine') {
    calculator['display1'].textContent += '9';
  }
}

// Addition function
function addition() {
  if (calculator['display1'].textContent !== '') {
    if (calculator['display2'].textContent !== '') {
      calculate();
    }
    calculator['display2'].textContent = calculator['display1'].textContent + ' +';
    calculator['display1'].textContent = '';
    calculator['currOper'] = "add";
  }
}

// Subtraction function
function subtraction() {
  if (calculator['display1'].textContent !== '') {
    if (calculator['display2'].textContent !== '') {
      calculate();
    }
    calculator['display2'].textContent = calculator['display1'].textContent + ' -';
    calculator['display1'].textContent = '';
    calculator['currOper'] = "subtract";
  }
}

// Multiplication function
function multiplication() {
  if (calculator['display1'].textContent !== '') {
    if (calculator['display2'].textContent !== '') {
      calculate();
    }
    calculator['display2'].textContent = calculator['display1'].textContent + ' *';
    calculator['display1'].textContent = '';
    calculator['currOper'] = "multiply";
  }
}

// Division function
function division() {
  if (calculator['display1'].textContent !== '') {
    if (calculator['display2'].textContent !== '') {
      calculate();
    }
    calculator['display2'].textContent = calculator['display1'].textContent + ' %';
    calculator['display1'].textContent = '';
    calculator['currOper'] = "division";
  }
}

// Calculate function
function calculate() {
  let number1 = 0;
  let number2 = 0;
  if (calculator['display1'].textContent !== '' &&
    calculator['display2'].textContent !== '') {
    number1 = parseFloat(calculator['display2'].textContent.slice(0, -2));
    number2 = parseFloat(calculator['display1'].textContent);
    calculator['display1'].textContent = '';
    calculator['display2'].textContent = '';
    if (calculator['currOper'] === 'add') {
      calculator['display1'].textContent = number1 + number2;
    }
    if (calculator['currOper'] === 'subtract') {
      calculator['display1'].textContent = number1 - number2;
    }
    if (calculator['currOper'] === 'multiply') {
      calculator['display1'].textContent = number1 * number2;
    }
    if (calculator['currOper'] === 'division') {
      if (number2 == 0) {
        console.log('test');
        calculator['display1'].textContent = "ERR0R CANNOT DIVIDE";
      } else {
      console.log(number1 / number2);
      calculator['display1'].textContent = number1 / number2;
      }
    }
  }
}