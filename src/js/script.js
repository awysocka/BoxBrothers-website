const hamburgerIcon = document.querySelector('#hamburger');
const navigationMenu = document.querySelector('#navigation');
const menuItems = document.querySelectorAll('.navigation-link');
const smoothScrollLinks = document.querySelectorAll('.smooth-scroll-link');

// OPEN/CLOSE HAMBURGER MENU

hamburgerIcon.onclick = () => {
    hamburgerIcon.classList.toggle('hamburger-active');
    navigationMenu.classList.toggle('navigation-active');
};

//SMOOTH SCROLLING TO SECTION

const smoothScroll = event => {
  event.preventDefault();
  let targetID = event.target.getAttribute('href') || event.currentTarget.getAttribute('href');
  const targetPosition = document.querySelector(targetID).offsetTop - 82;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 500;
  let start = null;

  const step = timestamp => {
    if (!start) start = timestamp;
    const runtime = timestamp - start;
    const progress = Math.min(runtime / duration, 1);
    const ease = easeOutQuad(progress);
    window.scrollTo(0, startPosition + (distance * ease));
    if (runtime < duration) window.requestAnimationFrame(step);
  };

  window.requestAnimationFrame(step);
};

const easeOutQuad = progress => {
  return -progress * (progress - 2);
};

const scrollAndCloseMenu = event => {
  smoothScroll(event);

  hamburgerIcon.classList.remove('hamburger-active');
  navigationMenu.classList.remove('navigation-active');
};

menuItems.forEach(item => {
  item.onclick = scrollAndCloseMenu;
});

smoothScrollLinks.forEach(link => {
  link.onclick = smoothScroll;
});

// ---HIGHLIGHT MENU ITEM ON SCROLL---

const windowHeight = window.innerHeight;

window.onscroll = () => {
  
  const fromTop = window.scrollY + windowHeight * 0.7;

  menuItems.forEach(item => {
    const section = document.querySelector(item.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      item.classList.add('navigation-link-current');
    } else {
      item.classList.remove('navigation-link-current');
    }
  });
};
