function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
      let result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}

function backspace() {
  let display = document.getElementById('display').value;
  document.getElementById('display').value = display.slice(0, -1);
}
