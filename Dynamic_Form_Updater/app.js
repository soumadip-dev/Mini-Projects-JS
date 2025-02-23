document.addEventListener('DOMContentLoaded', function () {
  ////////////// DOM Elements
  // Input Element
  const name = document.getElementById('nameInput');
  const jobTitle = document.getElementById('jobInput');
  const age = document.getElementById('ageInput');
  const bio = document.getElementById('bioInput');

  // Display Element
  const nameDisplay = document.getElementById('nameDisplay');
  const jobTitleDisplay = document.getElementById('jobDisplay');
  const ageDisplay = document.getElementById('ageDisplay');
  const bioDisplay = document.getElementById('bioDisplay');

  ////////////// Function
  function updateDisplay(inputElement, displayElement) {
    if (inputElement && displayElement) {
      inputElement.addEventListener('input', function () {
        displayElement.textContent = this.value.trim() || 'Not provided';
      });
    }
  }
  updateDisplay(name, nameDisplay);
  updateDisplay(jobTitle, jobTitleDisplay);
  updateDisplay(age, ageDisplay);
  updateDisplay(bio, bioDisplay);
});
