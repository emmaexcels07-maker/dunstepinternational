const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.style.display = open ? '' : 'flex';
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  if (window.innerWidth <= 720) { nav.style.display = ''; toggle.setAttribute('aria-expanded', 'false'); }
}));
