// Sticky Navbar animation on scroll
window.onscroll = function() {
  let navbar = document.querySelector('.navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

// Fade-in elements on scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
  fadeInElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);

// Trigger fade-in on initial load
document.addEventListener('DOMContentLoaded', () => {
  fadeInOnScroll();
});
// script.js

// Function to show the loader
function showLoader() {
    document.getElementById('loader').style.display = 'flex';
}

// Function to hide the loader
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

// Show loader when page starts loading
window.addEventListener('beforeunload', function () {
    showLoader();
});

// Listen for the page load event to hide the loader
window.addEventListener('load', function () {
    hideLoader();
});
