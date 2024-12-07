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
