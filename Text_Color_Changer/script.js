document.addEventListener('DOMContentLoaded', function () {
  ////////////// DOM Elements
  const heading = document.getElementById('mainHeading');

  const redBtn = document.getElementById('redButton');
  const greenBtn = document.getElementById('greenButton');
  const blueBtn = document.getElementById('blueButton');
  const purpleBtn = document.getElementById('purpleButton');
  const resetBtn = document.getElementById('resetButton');

  /////////////// Functions
  if (heading) {
    if (redBtn)
      redBtn.addEventListener('click', () => (heading.style.color = '#e74c3c'));
    if (greenBtn)
      greenBtn.addEventListener(
        'click',
        () => (heading.style.color = '#2ecc71')
      );
    if (blueBtn)
      blueBtn.addEventListener(
        'click',
        () => (heading.style.color = '#3498db')
      );
    if (purpleBtn)
      purpleBtn.addEventListener(
        'click',
        () => (heading.style.color = '#9b59b6')
      );
    if (resetBtn)
      resetBtn.addEventListener(
        'click',
        () => (heading.style.color = '#34495e')
      );
  }
});
