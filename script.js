// Animated starfield
const canvas = document.getElementById('stjornur');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const STAR_COUNT = 300;
const stars = Array.from({ length: STAR_COUNT }, () => ({
  x: Math.random(),
  y: Math.random(),
  z: Math.random(),
  speed: 0.0002 + Math.random() * 0.0006
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0a0e1a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (const s of stars) {
    s.z -= s.speed;
    if (s.z <= 0) { s.z = 1; s.x = Math.random(); s.y = Math.random(); }

    const sx = (s.x - 0.5) / s.z * canvas.width + canvas.width / 2;
    const sy = (s.y - 0.5) / s.z * canvas.height + canvas.height / 2;
    const r = Math.max(0.3, (1 - s.z) * 2.5);
    const alpha = Math.min(1, (1 - s.z) * 1.4);

    ctx.beginPath();
    ctx.arc(sx, sy, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    ctx.fill();
  }
  requestAnimationFrame(drawStars);
}
drawStars();

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
