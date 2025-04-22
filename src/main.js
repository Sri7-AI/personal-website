const app = document.getElementById('app');

async function loadPage(page) {
  const res = await fetch(`/${page}.html`);
  const html = await res.text();
  app.innerHTML = html;
}

// Initial load
loadPage('home');

// Add event listeners to nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = e.target.getAttribute('data-page');
    loadPage(page);
  });
});