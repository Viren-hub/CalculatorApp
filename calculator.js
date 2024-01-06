let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function handleButtonClick(event) {
  const buttonValue = event.target.innerText;

  if (buttonValue === 'C') {
    displayValue = '0';
  } else if (buttonValue === 'DEL') {
    displayValue = displayValue.slice(0, -1);
  } else if (buttonValue === '=') {
    calculate();
  } else {
    displayValue = (displayValue === '0') ? buttonValue : displayValue + buttonValue;
  }

  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }

  updateDisplay();
}

function deleteLastCharacter() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function resetDisplay() {
  displayValue = '0';
  updateDisplay();
}

updateDisplay();
