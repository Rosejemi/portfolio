// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');

// Load saved theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggle.textContent = '☀️';
}

// Toggle theme on click
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    toggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// Scroll Fade-In Animation
const sections = document.querySelectorAll('section');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

sections.forEach(section => {
  appearOnScroll.observe(section);
});
