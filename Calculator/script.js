// Select all calculator buttons
const calculatorButtons = document.querySelectorAll('.btn');

// Get the display screen element
const display = document.getElementById('expression');

let expression = '';
display.textContent = '0'; // Initialize display to 0

// Function to evaluate and update the expression
function calculateResult() {
  try {
    // Evaluate the mathematical expression safely
    // currentExpression = new Function(`return ${expression`)(); // new Function() allows turning any string into a function
    // Alternatively, eval() can be used, but it is not recommended for security reasons
    expression = new Function(`return parseFloat(${expression})`)(); // Safely parse and evaluate the expression
    display.textContent = expression;
  } catch {
    // Handle invalid expressions
    expression = 'Error';
    display.textContent = expression;
  }
}

// Function to process input (from button clicks or keyboard)
function processInput(input) {
  if (input === '=') {
    calculateResult();
  } else if (input === 'AC') {
    // Clear the display and reset expression
    expression = '';
    display.textContent = '0';
  } else if (input === 'DEL') {
    // Remove last character, reset to '0' if empty
    expression = expression.slice(0, -1);
    display.textContent = expression || '0';
  } else {
    // Append valid input to the expression
    if (expression === 'Error') expression = ''; // Reset after an error
    expression += input;
    display.textContent = expression;
  }
}

// Add event listener for button clicks
calculatorButtons.forEach(button => {
  button.addEventListener('click', event => {
    const input = event.target.dataset.value; // Get button value
    processInput(input);
  });
});

// Add event listener for keyboard input
document.addEventListener('keydown', event => {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    processInput(key);
  } else if (key === 'Enter') {
    event.preventDefault(); // Prevent form submission
    processInput('=');
  } else if (key === 'Backspace') {
    event.preventDefault(); // Prevent browser navigation
    processInput('DEL');
  } else if (key === 'Escape') {
    processInput('AC');
  }
});
