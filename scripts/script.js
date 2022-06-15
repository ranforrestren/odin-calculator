const calculator = {
  field1: '',
  field2: '',
  display: document.querySelector('#inputBox'),
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
  // If a number key was pressed
  if (eventID === 'zero' || 'one' || 'two' ||
   'three' || 'four' || 'five' || 'six' ||
    'seven' || 'eight' || 'nine') {
      inputNumber(eventID);
  }
}

// Number input function
function inputNumber(eventID) {
  // Do not allow leading 0's
  if (calculator['display'].textContent[0] === '0') {
    calculator['field2'] = '';
  }
  // Add number to field2
  if (eventID === 'zero') {
    calculator['field2'] += '0';
  }
  if (eventID === 'one') {
    calculator['field2'] += '1';
  }
  if (eventID === 'two') {
    calculator['field2'] += '2';
  }
  if (eventID === 'three') {
    calculator['field2'] += '3';
  }
  if (eventID === 'four') {
    calculator['field2'] += '4';
  }
  if (eventID === 'five') {
    calculator['field2'] += '5';
  }
  if (eventID === 'six') {
    calculator['field2'] += '6';
  }
  if (eventID === 'seven') {
    calculator['field2'] += '7';
  }
  if (eventID === 'eight') {
    calculator['field2'] += '8';
  }
  if (eventID === 'nine') {
    calculator['field2'] += '9';
  }
  // Display new number
  calculator['display'].textContent = calculator['field2'];
  console.log(calculator['field2']);
  console.log(calculator[`display`].textContent);
}