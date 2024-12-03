const btn = document.querySelectorAll('.btn');
const btn2 = document.querySelectorAll('.card-btn');

btn.forEach(button => {
    button.addEventListener('mousemove', e => {
    const x = event.offsetX;
    const y = event.offsetY;

    button.style.setProperty('--x', `${x}px`);
    button.style.setProperty('--y', `${y}px`);
  });
});

btn2.forEach(button => {
    button.addEventListener('mousemove', e => {
    const x = event.offsetX;
    const y = event.offsetY;

    button.style.setProperty('--x', `${x}px`);
    button.style.setProperty('--y', `${y}px`);
  });
});