const hamburgerIcon = document.querySelector('#hamburger');
const navigationMenu = document.querySelector('#navigation');
const menuItems = document.querySelectorAll('.navigation-link');

hamburgerIcon.onclick = () => {
    hamburgerIcon.classList.toggle('hamburger-active');
    navigationMenu.classList.toggle('navigation-active');
};

const closeMenu = () => {

  hamburgerIcon.classList.remove('hamburger-active');
  navigationMenu.classList.remove('navigation-active');
};

menuItems.forEach(item => {
  item.onclick = closeMenu;
});
