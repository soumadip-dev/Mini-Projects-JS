document.addEventListener('DOMContentLoaded', function () {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', function () {
      const isCurrentlyActive =
        button.parentElement.classList.contains('active');

      // Remove 'active' class from all accordion items
      accordionButtons.forEach(otherButton => {
        otherButton.parentElement.classList.remove('active');
      });

      // Toggle the 'active' class for the clicked accordion item
      if (!isCurrentlyActive) {
        button.parentElement.classList.add('active');
      }
    });
  });
});
