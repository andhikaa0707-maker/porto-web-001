// navbar shadow
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});


// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});


// bar animation skill + up value of numbers percent  
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const card  = entry.target;
      const fill  = card.querySelector('.skills-fill');
      const angka = card.querySelector('.angka');
      const target = parseInt(angka.dataset.target);
      const persen = card.dataset.persen;

      // run bar
      fill.style.setProperty('--persen', persen + '%');

      // Angka naik dari 0
      let current = 0;
      const timer = setInterval(() => {
        current++;
        angka.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 20);

      skillObserver.unobserve(card);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-card').forEach(card => {
  skillObserver.observe(card);
});


// Burger menu
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Tutup menu saat klik link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});