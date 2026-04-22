document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('umsokn-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Takk fyrir umsóknina! Við höfum samband við þig innan 48 klukkustunda.');
  e.target.reset();
});

document.getElementById('samband-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Takk fyrir skilaboðin! Við höfum samband fljótlega.');
  e.target.reset();
});
