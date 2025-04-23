const app = document.getElementById('app');

async function loadPage(page) {
  const res = await fetch(`/${page}.html`);
  const html = await res.text();
  app.innerHTML = html;
}

// Initial load
loadPage('home');
