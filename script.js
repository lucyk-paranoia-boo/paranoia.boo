document.addEventListener("click", () => {
  const bgm = document.getElementById("bgm");
  if (bgm.paused) bgm.play();
}, { once: true });
const bg = document.getElementById('background');
const particleCount = 80; // adjust for density

for (let i = 0; i < particleCount; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');

  // random size
  const size = Math.random() * 30 + 10; // 10px - 40px
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;

  // pink or blue color
  p.style.background = Math.random() < 0.5 
    ? 'rgba(255, 192, 203, 0.3)'  // soft pink
    : 'rgba(160, 196, 255, 0.3)'; // soft blue

  // random horizontal position
  p.style.left = `${Math.random() * 100}%`;

  // random speed
  const dur = Math.random() * 20 + 15; // 15s - 35s
  p.style.animationDuration = `${dur}s`;

  // random scale
  p.style.setProperty('--s', (Math.random() * 0.7 + 0.5).toFixed(2));

  bg.appendChild(p);
}
