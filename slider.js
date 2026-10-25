// Slider avant/après
document.querySelectorAll('[data-ba]').forEach(ba => {
  const handle = ba.querySelector('[data-ba-handle]');
  const after = ba.querySelector('.ba__img--after');
  let dragging = false;

  const setPos = (clientX) => {
    const rect = ba.getBoundingClientRect();
    let x = (clientX - rect.left) / rect.width;
    x = Math.max(0.02, Math.min(0.98, x));
    handle.style.left = `${x * 100}%`;
    after.style.clipPath = `inset(0 0 0 ${x * 100}%)`;
  };

  const start = (e) => {
    dragging = true;
    setPos(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const move = (e) => {
    if (!dragging) return;
    setPos(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const end = () => { dragging = false; };

  ba.addEventListener('mousedown', start);
  ba.addEventListener('touchstart', start, { passive: true });
  window.addEventListener('mousemove', move);
  window.addEventListener('touchmove', move, { passive: true });
  window.addEventListener('mouseup', end);
  window.addEventListener('touchend', end);
});