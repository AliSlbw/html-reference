// HTML Element Reference — render logic

const sidebar = document.getElementById('sidebar-categories');
const content = document.getElementById('content');
const searchInput = document.getElementById('search-input');
const countLabel = document.getElementById('element-count');

function slug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function totalCount() {
  return HTML_REFERENCE.reduce((sum, cat) => sum + cat.elements.length, 0);
}

function renderSidebar() {
  sidebar.innerHTML = HTML_REFERENCE.map((cat) => `
    <a class="cat-link" href="#${slug(cat.category)}" data-cat="${slug(cat.category)}">
      <span>${cat.category}</span>
      <span class="count">${cat.elements.length}</span>
    </a>
  `).join('');
}

function attrRow(attr) {
  let valueMarkup;
  if (attr.boolean) {
    valueMarkup = `<span class="attr-values is-bool">boolean attribute</span>`;
  } else if (attr.values && attr.values.length) {
    valueMarkup = `<span class="attr-values">${attr.values.map((v) => `<code>${escapeHtml(v)}</code>`).join('')}</span>`;
  } else {
    valueMarkup = `<span class="attr-values is-free">free value</span>`;
  }
  return `<div class="attr-row"><code class="attr-name">${escapeHtml(attr.name)}</code>${valueMarkup}</div>`;
}

function elementCard(el) {
  const tagDisplay = `<span class="lt">&lt;</span>${escapeHtml(el.tag)}<span class="gt">&gt;</span>`;
  const previewMarkup = el.demo && el.demo.trim()
    ? `<div class="preview-pane">${el.demo}</div>`
    : `<div class="no-visual">No direct visual output</div>`;
  const attrsMarkup = el.attrs && el.attrs.length
    ? `<div class="attrs-block">${el.attrs.map(attrRow).join('')}</div>`
    : `<p class="no-visual">No notable attributes</p>`;

  return `
    <div class="card" data-tag="${el.tag.toLowerCase()}">
      <div class="card-head">
        <span class="tag-name">${tagDisplay}</span>
        ${el.void ? '<span class="void-badge">void</span>' : ''}
        <span class="card-desc">${escapeHtml(el.desc)}</span>
      </div>
      <div class="card-body">
        <div>
          <p class="panel-label">Syntax</p>
          <pre class="syntax-block">${escapeHtml(el.syntax)}</pre>
          <p class="panel-label" style="margin-top:14px">Attributes</p>
          ${attrsMarkup}
        </div>
        <div>
          <p class="panel-label">Live preview</p>
          ${previewMarkup}
        </div>
      </div>
    </div>
  `;
}

function renderContent() {
  content.innerHTML = HTML_REFERENCE.map((cat) => `
    <section class="category-section" id="${slug(cat.category)}">
      <h2 class="category-heading">
        ${cat.category}
        <span class="tally">${cat.elements.length} elements</span>
      </h2>
      ${cat.elements.map(elementCard).join('')}
    </section>
  `).join('');
}

function applyFilter(query) {
  const q = query.trim().toLowerCase();
  const cards = content.querySelectorAll('.card');
  let visible = 0;

  cards.forEach((card) => {
    const match = !q || card.dataset.tag.includes(q);
    card.style.display = match ? '' : 'none';
    if (match) visible += 1;
  });

  content.querySelectorAll('.category-section').forEach((section) => {
    const anyVisible = [...section.querySelectorAll('.card')].some((c) => c.style.display !== 'none');
    section.style.display = anyVisible ? '' : 'none';
  });

  countLabel.textContent = q ? `${visible} / ${totalCount()} elements` : `${totalCount()} elements`;
}

function setupScrollSpy() {
  const links = [...sidebar.querySelectorAll('.cat-link')];
  const sections = [...content.querySelectorAll('.category-section')];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.toggle('active', l.dataset.cat === entry.target.id));
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach((s) => observer.observe(s));
}

renderSidebar();
renderContent();
countLabel.textContent = `${totalCount()} elements`;
searchInput.addEventListener('input', (e) => applyFilter(e.target.value));
setupScrollSpy();
