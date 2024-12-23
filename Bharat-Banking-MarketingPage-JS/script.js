document.addEventListener('DOMContentLoaded', function () {
  ////////////// DOM Elements

  // Modal Elements
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const btnCloseModal = document.querySelector('.btn--close-modal');
  const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

  // Navigation Elements
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelector('.nav__links');

  // Section Elements
  const btnScrollTo = document.querySelector('.btn--scroll-to');
  const section1 = document.querySelector('#section--1');
  const allSections = document.querySelectorAll('.section');

  // Tabbed Component Elements
  const tabsContainer = document.querySelector('.operations__tab-container');
  const tabs = document.querySelectorAll('.operations__tab');
  const tabsContent = document.querySelectorAll('.operations__content');

  // Header Elements
  const header = document.querySelector('.header');

  // Lazy Loading Images
  const imgTargets = document.querySelectorAll('img[data-src]');

  // Slider Elements
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  ////////////// Modal window

  // Open modal and overlay
  const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  // Close modal and overlay
  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  // Event listeners to open/close the modal
  btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // Close modal on 'Escape' key press
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  ////////////// Button scrolling

  // Smooth scroll to 'section1' on button click
  btnScrollTo.addEventListener('click', function (e) {
    section1.scrollIntoView({ behavior: 'smooth' });
  });

  ////////////// Page navigation

  // Smooth scrolling for navigation links
  navLinks.addEventListener('click', function (e) {
    e.preventDefault();
    // Matching strategy
    if (
      e.target.matches('a') &&
      !e.target.classList.contains('nav__link--btn')
    ) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

  ////////////// Tabbed component

  // Tab functionality to show content based on clicked tab
  tabsContainer.addEventListener('click', function (e) {
    if (e.target.matches('button') || e.target.matches('span')) {
      const clicked = e.target.closest('.operations__tab');

      // Remove active class from all tabs and add it to the clicked tab
      tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
      clicked.classList.add('operations__tab--active');

      // Hide all content and display the content of the active tab
      tabsContent.forEach(con =>
        con.classList.remove('operations__content--active')
      );
      document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
    }
  });

  ////////////// Menu fade animation

  // Handle navigation menu fade animation on hover
  const handleHover = function (event) {
    if (event.target.classList.contains('nav__link')) {
      const link = event.target;
      const sibling = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      sibling.forEach(el => {
        if (el != link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    }
  };
  nav.addEventListener('mouseover', handleHover.bind(0.5));
  nav.addEventListener('mouseout', handleHover.bind(1)); // Note: Opposite of mouseover is mouseoutr

  ////////////// Sticky navigation

  // Process 1: Using scrollY (not recommended due to performance issues)
  // This would check the scroll position and apply sticky navigation,
  // but it will impact performance as scroll events fire frequently.

  // const initialCords = section1.getBoundingClientRect();
  // window.addEventListener('scroll', function () {
  //   if (window.scrollY > initialCords.top) {
  //     nav.classList.add('sticky');
  //   } else {
  //     nav.classList.remove('sticky');
  //   }
  // });

  // Process 2: Using Intersection Observer API
  // (Suggested approach for better performance)
  const navHeight = nav.getBoundingClientRect().height;
  const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  };
  const navObsOptions = {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  };
  const headerObserver = new IntersectionObserver(stickyNav, navObsOptions);
  headerObserver.observe(header);

  ////////////// Reveal sections

  // Lazy reveal of sections on scroll using Intersection Observer
  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  };
  const revealObsOptions = {
    root: null,
    threshold: 0.15,
  };
  const sectionObserver = new IntersectionObserver(
    revealSection,
    revealObsOptions
  );
  allSections.forEach(function (sec) {
    sectionObserver.observe(sec);
    sec.classList.add('section--hidden');
  });

  ////////////// Lazy loading images

  // Load high-res images as they come into view
  const loadImg = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    // Replace the src with data-src and remove blur
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', () => {
      entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
  };
  const loadImgObsOptions = { root: null, threshold: 0, rootMargin: '200px' };
  const imgObserver = new IntersectionObserver(loadImg, loadImgObsOptions);
  imgTargets.forEach(function (img) {
    imgObserver.observe(img);
  });

  ////////////// Slider

  const slider = function () {
    let currentSlide = 0;
    const maxSlide = slides.length;

    // Create navigation dots
    const createDots = function () {
      slides.forEach((_, i) => {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot dots__dot--active" data-slide="${i}"></button>`
        );
      });
    };

    // Activate a specific dot
    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));

      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };

    // Move to the specified slide
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };

    // Move to the next slide
    const nextSlide = function () {
      if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      goToSlide(currentSlide);
      activateDot(currentSlide);
    };

    // Move to the previous slide
    const prevSlide = function () {
      if (currentSlide === 0) {
        currentSlide = maxSlide - 1;
      } else {
        currentSlide--;
      }
      goToSlide(currentSlide);
      activateDot(currentSlide);
    };

    // Initialization function
    const init = function () {
      goToSlide(0); // Start with the first slide
      createDots();
      activateDot(0);
    };
    init();

    // Event listeners for slider navigation
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });

    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const slide = e.target.dataset.slide;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  slider();
});
