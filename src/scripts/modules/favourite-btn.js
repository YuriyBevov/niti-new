const btns = document.querySelectorAll('.favourite-btn');

if(btns) {
  btns.forEach(btn => {
    btn.addEventListener('click', (evt) => {
      evt.stopPropagation();
      btn.classList.toggle('active');
    });
  });
}
