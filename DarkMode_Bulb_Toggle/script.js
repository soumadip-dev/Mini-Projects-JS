document.addEventListener('DOMContentLoaded', function () {
  ////////////// DOM Elements
  const button = document.getElementById('toggleButton');
  const bulb = document.getElementById('bulb');
  const status = document.getElementById('status');
  const body = document.body;

  if (!button || !bulb || !status) return;

  /////////////// Functions:
  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      bulb.classList.remove('off');
      button.textContent = 'Turn Off';
      status.textContent = 'Status: On';
    } else {
      bulb.classList.add('off');
      button.textContent = 'Turn On';
      status.textContent = 'Status: Off';
    }
  }

  button.addEventListener('click', toggleDarkMode);
});
