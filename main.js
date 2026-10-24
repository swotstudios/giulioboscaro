document.documentElement.classList.add('js');

// anno nel footer
document.getElementById('year').textContent = new Date().getFullYear();

// ora in Italia
const clock = document.getElementById('clock');
const time = new Intl.DateTimeFormat('it-IT', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Europe/Rome',
});
const tick = () => { clock.textContent = time.format(new Date()); };
tick();
setInterval(tick, 10000);

// comparsa degli elementi allo scroll, sfalsata per gruppo
const items = document.querySelectorAll('.reveal');
items.forEach((el) => {
  const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
  el.style.setProperty('--d', `${siblings.indexOf(el) * 0.08}s`);
});

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('in'));
}

// etichetta che segue il cursore sui progetti (solo mouse)
const cursor = document.querySelector('.cursor');
if (window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
  document.querySelectorAll('[data-cursor]').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.textContent = el.dataset.cursor;
      cursor.classList.add('on');
    });
    el.addEventListener('mouseleave', () => cursor.classList.remove('on'));
  });
}

// copia email
const copy = document.querySelector('.copy');
copy.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copy.dataset.copy);
    copy.textContent = 'Copiato ✓';
  } catch {
    copy.textContent = copy.dataset.copy;
  }
  copy.classList.add('done');
  setTimeout(() => {
    copy.textContent = 'Copia indirizzo';
    copy.classList.remove('done');
  }, 2000);
});
