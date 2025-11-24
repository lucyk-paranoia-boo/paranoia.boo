document.addEventListener("click", () => {
  const bgm = document.getElementById("bgm");
  if (bgm.paused) bgm.play();
}, { once: true });

const bg = document.getElementById('background');
const blobCount = 20; // fewer blobs, larger size

for (let i = 0; i < blobCount; i++) {
  const b = document.createElement('div');
  b.classList.add('blob');

  // random size (80px - 250px)
  const size = Math.random() * 170 + 80;
  b.style.width = `${size}px`;
  b.style.height = `${size}px`;

  // dark pink or deep blue
  b.style.background = Math.random() < 0.5 
    ? 'rgba(212, 92, 146, 0.3)'   // dark pink
    : 'rgba(80, 120, 255, 0.25)'; // dark blue

  // random horizontal position
  b.style.left = `${Math.random() * 100}%`;

  // random speed
  const dur = Math.random() * 40 + 30; // 30s - 70s
  b.style.animationDuration = `${dur}s`;

  // random scale
  b.style.setProperty('--s', (Math.random() * 1 + 0.8).toFixed(2));

  bg.appendChild(b);
}
