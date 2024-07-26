// Navbar
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.remove('navbar-fixed');
    navbar.classList.add('navbar-transparent');
  } else {
    navbar.classList.add('navbar-fixed');
    navbar.classList.remove('navbar-transparent');
  }
});

// Hamburger List
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});
