const body    = document.body;
const wrapper = document.getElementById('imageWrapper');
const music   = document.getElementById('bgMusic');

// Try autoplay immediately (works if browser allows it)
music.play().catch(() => {});

wrapper.addEventListener('click', () => {
  if (body.classList.contains('revealed')) return;
  body.classList.add('revealed');
  if (music.paused) music.play().catch(() => {});
});
