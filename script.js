(function () {
  var root = document.documentElement;
  var menu = document.getElementById('menu');
  var btn = document.getElementById('menuBtn');

  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  try {
    var saved = localStorage.getItem('theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {}
  document.getElementById('theme').addEventListener('click', function () {
    var dark = root.getAttribute('data-theme') === 'dark' ||
      (!root.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
    var next = dark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  document.getElementById('yr').textContent = new Date().getFullYear();

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target;
    var body = f.msg.value + '\n\nFrom: ' + f.name.value + ' <' + f.email.value + '>';
    location.href = 'mailto:kumarprava10@gmail.com?subject=' +
      encodeURIComponent('Opportunity for Arkaprava Kumar') +
      '&body=' + encodeURIComponent(body);
  });
})();
