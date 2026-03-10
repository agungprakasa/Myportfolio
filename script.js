/**
 * Portfolio — Warm & Professional | QA & DevOps Engineer
 *
 * OPT-IN animation: elements are VISIBLE by default.
 * JS hides only elements below the fold, then reveals on scroll.
 * If JS fails → everything stays visible. Zero blank sections.
 */

document.addEventListener('DOMContentLoaded', () => {
  wrapRevealLines();
  initNavbar();
  initCounters();
  initScrollAnimations();
  initSkillBars();
});

function wrapRevealLines() {
  document.querySelectorAll('.h-line').forEach(line => {
    line.innerHTML = '<span class="reveal-inner">' + line.innerHTML + '</span>';
  });
}

function initNavbar() {
  var navbar = document.getElementById('navbar');
  var toggle = document.getElementById('nav-toggle');
  var menu   = document.getElementById('nav-menu');
  if (!navbar || !toggle || !menu) return;

  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  toggle.addEventListener('click', function() {
    var open = menu.classList.toggle('active');
    var spans = toggle.querySelectorAll('span');
    spans[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity   = open ? '0' : '';
  });

  menu.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      menu.classList.remove('active');
      toggle.querySelectorAll('span').forEach(function(s) {
        s.style.transform = ''; s.style.opacity = '';
      });
    });
  });
}

function initCounters() {
  var counters = document.querySelectorAll('.metric-n');
  if (!counters.length) return;
  var fired = false;

  function run() {
    if (fired) return;
    var hero = document.getElementById('hero');
    if (!hero) return;
    var r = hero.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      fired = true;
      counters.forEach(function(el) {
        var target = parseInt(el.getAttribute('data-target'), 10) || 0;
        var dur = 1600, start = performance.now();
        function tick(now) {
          var p = Math.min((now - start) / dur, 1);
          var e = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(e * target);
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target;
        }
        requestAnimationFrame(tick);
      });
    }
  }
  window.addEventListener('scroll', run, { passive: true });
  run();
}

function initScrollAnimations() {
  var els = document.querySelectorAll('.svc-card, .proj-row, .exp-card, .testi-card');
  if (!els.length) return;

  var vh = window.innerHeight;

  // ONLY hide elements that are genuinely below the viewport
  els.forEach(function(el) {
    var rect = el.getBoundingClientRect();
    if (rect.top > vh) {
      el.classList.add('will-animate');
    }
    // Already visible? Touch nothing — element stays shown.
  });

  var toAnimate = document.querySelectorAll('.will-animate');
  if (!toAnimate.length) return;

  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var el  = entry.target;
      var idx = parseInt(el.getAttribute('data-idx') || '0', 10);
      setTimeout(function() { el.classList.add('visible'); }, idx * 80);
      io.unobserve(el);
    });
  }, { threshold: 0.05 });

  toAnimate.forEach(function(el) { io.observe(el); });
}

function initSkillBars() {
  var bars = document.querySelectorAll('.rcv-fill');
  if (!bars.length) return;
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      entry.target.style.width = (entry.target.getAttribute('data-w') || 0) + '%';
      io.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  bars.forEach(function(b) {
    var rect = b.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      b.style.width = (b.getAttribute('data-w') || 0) + '%';
    } else {
      io.observe(b);
    }
  });
}

function handleSend() {
  var name  = (document.getElementById('f-name')  || {value:''}).value.trim();
  var email = (document.getElementById('f-email') || {value:''}).value.trim();
  var msg   = (document.getElementById('f-msg')   || {value:''}).value.trim();
  var btn   = document.getElementById('send-btn');
  if (!btn) return;

  function setBtn(text, bg, color, disabled) {
    btn.textContent = text; btn.style.background = bg;
    btn.style.color = color; btn.disabled = disabled;
  }
  if (!name || !email || !msg) {
    setBtn('⚠ Fill in required fields', '#DC2626', '#fff', false);
    setTimeout(function(){ setBtn('Send Message','','',false); }, 2800);
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setBtn('⚠ Enter a valid email', '#DC2626', '#fff', false);
    setTimeout(function(){ setBtn('Send Message','','',false); }, 2800);
    return;
  }
  setBtn("✓ Sent! I'll be in touch soon.", '#15803D', '#fff', true);
  setTimeout(function() {
    setBtn('Send Message','','',false);
    ['f-name','f-email','f-company','f-msg'].forEach(function(id){
      var el = document.getElementById(id);
      if (el) el.value = '';
    });
  }, 4000);
}
