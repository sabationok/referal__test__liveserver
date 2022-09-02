const cardListFirstLine = document.querySelector(
  '.js-referals-container'
);
// console.log(cardListFirstLine);

// cardListFirstLine.addEventListener('click', (el) => {
//   console.log('добрий день еврібаді');
// })

const onCardBtnClick = event => {
  let { target, currentTarget } = event;
  let preventCardEl = null;
  // console.log('currentTarget ', currentTarget);
  if (target.nodeName !== 'BUTTON') {
    return;
  }
  if (preventCardEl === target) {
    target.classList.toggle('--selected');
    target.nextElementSibling.classList.toggle('--visible');
  }
  // if (target.classList.contains('.--line-referer')) {
  //   target.classList.toggle('.--selected');
  //   target.nextElementSibling.classList.toggle('.--visible');
  //   preventCardEl = target.nextElementSibling;
  // }
  if (preventCardEl !== null) {
    preventCardEl.classList.remove('--visible');
  }
  target.classList.toggle('--selected');
  target.nextElementSibling.classList.toggle('--visible');
  preventCardEl = target;
  console.log(target.nextElementSibling);
};

cardListFirstLine.addEventListener('click', onCardBtnClick);

