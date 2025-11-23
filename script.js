document.addEventListener("click", () => {
  const bgm = document.getElementById("bgm");
  if (bgm.paused) bgm.play();
}, { once: true });
