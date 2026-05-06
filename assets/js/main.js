/* ==========================================
   Українська Валькірія — shared header/footer
   Renders nav and footer into <div id="site-header"></div>
   and <div id="site-footer"></div> placeholders.
   ========================================== */

(function () {
  const path = window.location.pathname;
  const isEN = path.includes('/en/');
  const root = isEN ? '../' : './';
  const langSwitchHref = (target) => {
    // toggle between UA root and /en/
    const file = path.split('/').pop() || 'index.html';
    if (target === 'en') return isEN ? file : 'en/' + file;
    return isEN ? '../' + file : file;
  };

  const t = {
    ua: {
      nav: {
        about: 'Про нас', programs: 'Програми', help: 'Допомога', reports: 'Звіти',
        blog: 'Блог', shop: 'Магазин', heritage: 'Спадщина', contact: 'Контакти',
        donate: 'Підтримати'
      },
      footer: {
        tagline: 'Комплексна підтримка жінок, постраждалих від війни.',
        org: 'Організація',
        get: 'Долучитися',
        contact: 'Контакти',
        rights: '© 2026 ГО «Українська Валькірія». Усі права захищені.',
        contactUs: 'contact@zhinocha.org',
        location: 'Київ, Україна'
      }
    },
    en: {
      nav: {
        about: 'About', programs: 'Programs', help: 'Get Help', reports: 'Reports',
        blog: 'Blog', shop: 'Shop', heritage: 'Heritage', contact: 'Contact',
        donate: 'Support'
      },
      footer: {
        tagline: 'Comprehensive support for women affected by the war.',
        org: 'Organization',
        get: 'Get involved',
        contact: 'Contact',
        rights: '© 2026 NGO Ukrainian Valkyrie. All rights reserved.',
        contactUs: 'contact@zhinocha.org',
        location: 'Kyiv, Ukraine'
      }
    }
  };
  const L = isEN ? t.en : t.ua;
  const link = (file) => isEN ? file : file; // relative within same dir level

  const headerHTML = `
    <header class="site-header">
      <div class="container nav">
        <a href="${root}${isEN ? 'en/' : ''}index.html" class="nav-brand">
          <img src="${root}public/images/logo.png" alt="Українська Валькірія">
          <div class="nav-brand-text">
            <span>Українська Валькірія</span>
            <small>${isEN ? 'Ukrainian Valkyrie' : 'Громадська організація'}</small>
          </div>
        </a>
        <ul class="nav-menu" id="navMenu">
          <li><a href="about.html">${L.nav.about}</a></li>
          <li><a href="programs.html">${L.nav.programs}</a></li>
          <li><a href="help.html">${L.nav.help}</a></li>
          <li><a href="reports.html">${L.nav.reports}</a></li>
          <li><a href="blog.html">${L.nav.blog}</a></li>
          <li><a href="shop.html">${L.nav.shop}</a></li>
          <li><a href="https://heritage.zhinocha.org" target="_blank" rel="noopener">${L.nav.heritage} ↗</a></li>
          <li><a href="contact.html">${L.nav.contact}</a></li>
        </ul>
        <div class="nav-actions">
          <div class="lang-switch">
            <a href="${langSwitchHref('ua')}" class="${isEN ? '' : 'active'}">УКР</a>
            <a href="${langSwitchHref('en')}" class="${isEN ? 'active' : ''}">EN</a>
          </div>
          <a href="donate.html" class="btn btn-gold">${L.nav.donate}</a>
          <button class="nav-toggle" aria-label="Menu" id="navToggle"><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>
  `;

  const footerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="${root}public/images/logo.png" alt="">
            <p>${L.footer.tagline}</p>
            <p style="font-size:13px; opacity:0.7;">${L.footer.location}</p>
          </div>
          <div class="footer-col">
            <h4>${L.footer.org}</h4>
            <ul>
              <li><a href="about.html">${L.nav.about}</a></li>
              <li><a href="programs.html">${L.nav.programs}</a></li>
              <li><a href="reports.html">${L.nav.reports}</a></li>
              <li><a href="https://heritage.zhinocha.org" target="_blank" rel="noopener">${L.nav.heritage}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>${L.footer.get}</h4>
            <ul>
              <li><a href="donate.html">${L.nav.donate}</a></li>
              <li><a href="help.html">${L.nav.help}</a></li>
              <li><a href="shop.html">${L.nav.shop}</a></li>
              <li><a href="blog.html">${L.nav.blog}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>${L.footer.contact}</h4>
            <ul>
              <li><a href="mailto:${L.footer.contactUs}">${L.footer.contactUs}</a></li>
              <li><a href="contact.html">${L.nav.contact}</a></li>
            </ul>
            <div class="footer-social" style="margin-top:18px;">
              <a href="https://instagram.com/ukrainian.walkyrie" target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9V14.9H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.5.5-5.5s0-3.6-.5-5.5zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener" aria-label="Telegram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.5L18.5 20c-.3 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.4c-.3.3-.5.5-1 .5l.3-5.1L18 6.4c.4-.4-.1-.6-.6-.2L7.4 12.5l-4.9-1.6c-1.1-.3-1.1-1 .2-1.5l19.2-7.4c.9-.3 1.7.2 1.4 1.5z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener" aria-label="TikTok">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 6.3a4.8 4.8 0 0 1-3-1.7 4.8 4.8 0 0 1-1-2.5h-3.5v13.4a2.7 2.7 0 1 1-2-2.6V9.4a6.2 6.2 0 1 0 5.5 6.2V9.5a8.3 8.3 0 0 0 4.8 1.5V7.5a4.8 4.8 0 0 1-.8-1.2z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>${L.footer.rights}</span>
          <span>Made with care · <a href="${root}admin/" style="color:rgba(255,255,255,0.5);">Admin</a></span>
        </div>
      </div>
    </footer>
  `;

  // Inject
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = headerHTML;
  if (footerEl) footerEl.innerHTML = footerHTML;

  // Active nav link
  const currentFile = path.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    if (a.getAttribute('href') === currentFile) a.classList.add('active');
  });

  // Mobile menu
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('is-open'));
  }

  // Cart badge
  const updateCartBanner = () => {
    const banner = document.getElementById('cartBanner');
    if (!banner) return;
    try {
      const cart = JSON.parse(localStorage.getItem('uv_cart') || '[]');
      const total = cart.reduce((s, i) => s + i.qty, 0);
      if (total > 0) {
        banner.classList.add('is-visible');
        banner.querySelector('[data-count]').textContent = total;
      } else {
        banner.classList.remove('is-visible');
      }
    } catch (e) {}
  };
  window.uv_updateCart = updateCartBanner;
  updateCartBanner();
})();
