document.addEventListener('DOMContentLoaded', function () {
  ////////////// Image data

  const imageGallery = [
    {
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageCaption: 'Beautiful Mountain Landscape',
    },
    {
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageCaption: 'Ocean Sunset View',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageCaption: 'Autumn Forest Path',
    },
    {
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageCaption: 'Urban City Skyline',
    },
  ];

  ////////////// DOM Elements

  const carouselContainer = document.getElementById('carouselTrack');
  const nextSlideButton = document.getElementById('nextButton');
  const prevSlideButton = document.getElementById('prevButton');
  const navigationDots = document.getElementById('carouselNav');
  const captionDisplay = document.getElementById('caption');
  const autoPlayToggleButton = document.getElementById('autoPlayButton');
  const timerDisplay = document.getElementById('timerDisplay');

  ////////////// State variables

  let activeImageIndex = 0; // Tracks the current image index
  let isAutoPlayActive = false; // Tracks autoplay state
  let autoPlayInterval = null; // Holds autoplay interval ID
  let timeLeftInterval = null; // Holds countdown interval ID

  ////////////// Functions

  // Function to create an image element for the carousel
  function createCarouselImage({ imageUrl }) {
    const imageElement = document.createElement('img');
    imageElement.classList.add('carousel-slide');
    imageElement.src = imageUrl;
    return imageElement;
  }

  // Function to update the carousel position and UI elements
  function updateCarousel() {
    carouselContainer.style.transform = `translateX(-${
      activeImageIndex * 100
    }%)`;
    updateCaptionText();
    updateNavigationDots();
  }

  // Function to show the next slide
  function showNextSlide() {
    activeImageIndex = (activeImageIndex + 1) % imageGallery.length;
    updateCarousel();
  }

  // Function to show the previous slide
  function showPrevSlide() {
    activeImageIndex =
      (activeImageIndex - 1 + imageGallery.length) % imageGallery.length;
    updateCarousel();
  }

  // Function to update the caption text based on the current image
  function updateCaptionText() {
    if (captionDisplay) {
      captionDisplay.innerText = imageGallery[activeImageIndex].imageCaption;
    }
  }

  // Function to create a navigation dot for the carousel
  function createNavigationDot(isActive) {
    const dotElement = document.createElement('div');
    dotElement.classList.add('carousel-indicator');
    dotElement.classList.toggle('active', isActive);
    return dotElement;
  }

  // Function to update the navigation dots based on the active image index
  function updateNavigationDots() {
    if (!navigationDots) return;
    const dotsArray = Array.from(navigationDots.children);
    dotsArray.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeImageIndex);
    });
  }

  // Function to toggle autoplay functionality
  function toggleAutoPlay() {
    if (isAutoPlayActive) {
      // Stop autoplay
      clearInterval(autoPlayInterval);
      clearInterval(timeLeftInterval);
      timerDisplay.innerText = '';
      autoPlayToggleButton.innerText = 'Start Auto Play';
    } else {
      // Start autoplay with a 5-second interval
      let timeLeft = 5;
      timerDisplay.innerText = `Next slide in ${timeLeft}s`;

      timeLeftInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) timeLeft = 5;
        timerDisplay.innerText = `Next slide in ${timeLeft}s`;
      }, 1000);

      autoPlayInterval = setInterval(() => {
        showNextSlide();
        timeLeft = 5;
      }, 5000);

      autoPlayToggleButton.innerText = 'Stop Auto Play';
    }
    isAutoPlayActive = !isAutoPlayActive;
  }

  ////////////// Setup Carousel and UI

  // Initialize the carousel by adding images to the container
  if (carouselContainer) {
    imageGallery.forEach(image => {
      carouselContainer.appendChild(createCarouselImage(image));
    });
  }

  // Set initial caption text
  if (captionDisplay) {
    captionDisplay.innerText = imageGallery[activeImageIndex].imageCaption;
  }

  // Create navigation dots dynamically based on image count
  imageGallery.forEach((_, index) => {
    navigationDots.appendChild(createNavigationDot(index === activeImageIndex));
  });

  ////////////// Event listeners

  if (prevSlideButton) prevSlideButton.addEventListener('click', showPrevSlide);
  if (nextSlideButton) nextSlideButton.addEventListener('click', showNextSlide);
  if (autoPlayToggleButton)
    autoPlayToggleButton.addEventListener('click', toggleAutoPlay);
});
