document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Takk fyrir skilaboðin! Við höfum samband fljótlega.');
  e.target.reset();
});
