var displayValue = "";

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = displayValue;
}

function appendCharacter(character) {
  displayValue += character;
  updateDisplay();
}

function deleteCharacter() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function calculate() {
  try {
    if (displayValue == "") return;
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = "ERROR";
    updateDisplay();
  }
}

