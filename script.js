// =====================
// Footer Year
// =====================
document.getElementById("year").textContent = new Date().getFullYear();

// =====================
// Active Nav Link on Scroll
// =====================
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 200;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// =====================
// Reveal Sections on Scroll
// =====================
const sections = document.querySelectorAll('.section');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) sec.classList.add('show');
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// =====================
// Sticky Navbar Hide/Show
// =====================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px"; // hide
  } else {
    navbar.style.top = "0"; // show
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// =====================
// Mobile Navbar Toggle
// =====================
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});

// =====================
// Hero Slideshow (Optional)
// =====================
const slides = document.querySelectorAll('.hero-slideshow .slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
// Optional: setInterval(nextSlide, 5000); // 5s per slide

// =====================
// Pause Train on Hover
// =====================
const train = document.querySelector('.train-cars');
const track = document.querySelector('.train-track');
if (train && track) {
  track.addEventListener('mouseenter', () => { train.style.animationPlayState = 'paused'; });
  track.addEventListener('mouseleave', () => { train.style.animationPlayState = 'running'; });
}

// =====================
// Projects Section: Infinite Scroll & Expandable Cards
// =====================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', (e) => {
    const expanded = card.classList.toggle('expanded');
    // Collapse other cards
    projectCards.forEach(c => { if (c !== card) c.classList.remove('expanded'); });
    e.stopPropagation();
  });
});

// Collapse all cards when clicking outside
document.addEventListener('click', () => {
  projectCards.forEach(card => card.classList.remove('expanded'));
});


// =====================
// Projects Section: Infinite Scroll & Expandable Cards
// =====================


// Collapse all cards when clicking outside
document.addEventListener('click', () => {
  projectCards.forEach(card => card.classList.remove('expanded'));
  if (trainCarsContainer) trainCarsContainer.style.animationPlayState = 'running';
});

// =====================
// New Project Train Animation
// =====================
const projectsGrid = document.querySelector('.projects-grid');
if (projectsGrid) {
  // Duplicate for seamless scrolling
  projectsGrid.innerHTML += projectsGrid.innerHTML;

  // Pause train on hover
  projectsGrid.addEventListener('mouseenter', () => {
    projectsGrid.style.animationPlayState = 'paused';
  });
  projectsGrid.addEventListener('mouseleave', () => {
    projectsGrid.style.animationPlayState = 'running';
  });
}

// View Resume Button
const viewResumeBtn = document.getElementById('view-resume-btn');

viewResumeBtn.addEventListener('click', () => {
  // Open resume.pdf in a new tab
  window.open('resume.pdf', '_blank');
});





