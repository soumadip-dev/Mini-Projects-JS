//// Dome elements
const carouselContainer = document.getElementById('carouselTrack');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const carouselTrack = document.getElementById('carouselTrack');

// Create  image element
function carouselImg({ url }) {
  const element = document.createElement('img');
  element.classList.add('carousel-slide');
  element.src = url;
  return element;
}

let currentIndex = 0;
let transVal = 0;

function nextImage() {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
    transVal = 0;
  } else {
    currentIndex++;
    transVal += 100;
  }
  carouselTrack.style.transform = `translateX(-${transVal}%)`;
}

// function prevImage() {
//   if (currentIndex === images.length - 1) {
//     currentIndex = ;
//     transVal = 0;
//   } else {
//     currentIndex--;
//     transVal -= 100;
//   }
//   carouselTrack.style.transform = `translateX(-${transVal}%)`;
// }

// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

images.forEach(img => {
  carouselContainer.appendChild(carouselImg(img));
});

nextButton.addEventListener('click', nextImage);
