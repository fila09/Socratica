const btn = document.getElementById('openView');
const btnIndex = document.querySelector('.btn-present__button');
console.log(btn);

if (btn) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'screen-01.html';
  });
}

if (btnIndex) {
  btnIndex.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
  });
}