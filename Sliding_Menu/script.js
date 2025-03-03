// DOM elements
const menuToggleBtn = document.querySelector('.toggle-btn');
const menuCloseBtn = document.querySelector('.close-btn');
const menuDescription = document.querySelector('.toggle-descrip');
const menuPanel = document.querySelector('.panel');
const menuItems = document.querySelectorAll('.menu-item');

// Function to update button text and description based on menu state
function updateMenuState() {
  let isMenuOpen = menuPanel.classList.contains('active');

  menuToggleBtn.textContent = isMenuOpen ? 'Close Menu' : 'Open Menu';

  if (menuDescription) {
    menuDescription.textContent = isMenuOpen
      ? 'Click the button to close the sliding menu'
      : 'Click the button to open the sliding menu';
  }
}

// Toggle menu visibility when toggle button is clicked
menuToggleBtn.addEventListener('click', () => {
  menuPanel.classList.toggle('active');
  updateMenuState();
});

// Close menu when close button is clicked (if it exists)
if (menuCloseBtn) {
  menuCloseBtn.addEventListener('click', () => {
    menuPanel.classList.remove('active');
    updateMenuState();
  });
}

// Close menu when clicking outside of it
document.addEventListener('click', event => {
  if (!menuPanel.contains(event.target) && event.target !== menuToggleBtn) {
    menuPanel.classList.remove('active');
    updateMenuState();
  }
});

// Display an alert with the menu item text when a menu item is clicked
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    alert(item.textContent);
  });
});
