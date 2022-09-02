const cardListFirstLine = document.querySelector(
  '.js-referals-container'
);
const onCardBtnClick = event => {
  let { target, currentTarget } = event;
  let preventCardEl = null;
  if (target.nodeName !== 'BUTTON') {
    return;
  }
  if (preventCardEl === target) {
    target.classList.toggle('--selected');
    target.nextElementSibling.classList.toggle('--visible');
  }
  if (preventCardEl !== null) {
    // preventCardEl.classList.remove('--visible');
    console.log(preventCardEl);
  }
  if (target.classList.contains('--line-referer')) {
    target.nextElementSibling.classList.toggle('--visible');
  }
  target.classList.toggle('--selected');
  preventCardEl = target;

};

cardListFirstLine.addEventListener('click', onCardBtnClick);

