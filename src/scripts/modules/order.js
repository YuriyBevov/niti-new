const accordeon = document.querySelector('.order-accordeon');

if(accordeon) {
  const items = accordeon.querySelectorAll('.order-accordeon-item-header button');
  const nextBtns = accordeon.querySelectorAll('.order-block-btn-next');

  let active = accordeon.querySelector('.order-accordeon-item.active');

  const setActive = (elem) => {
    active.classList.remove('active');
    active = elem;
    active.classList.add('active');
  }

  const onClickHandler = (evt) => {
    evt.preventDefault();
    setActive(evt.target.parentNode.parentNode);
  };

  const onNextBtnClickHandler = (evt) => {
    evt.preventDefault();
    setActive(active.nextElementSibling);
  }

  items.forEach(item => {
    item.addEventListener('click', onClickHandler);
  });

  nextBtns.forEach(btn => {
    btn.addEventListener('click', onNextBtnClickHandler);
  });
}
