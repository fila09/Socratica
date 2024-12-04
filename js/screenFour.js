const overlay = document.getElementById('editOverlay');
const editModal = document.getElementById('editModal');
const closeButtonModal = document.getElementById('closeButtonModal');
const form = document.getElementById('form');
const buttonSave = document.querySelector('.form__save-btn');
const formModal = document.getElementById('formModal');
const emailInput = document.getElementById('emailInput');
const nameInput = document.getElementById('nameInput');
const linkModal = document.getElementById('linkModal');
const closeButtonForm = document.querySelector('.form__cancel-modal');
const formButtonModal = document.getElementById('formButtonModal');
const closeLinkModal = document.getElementById('closeLinkModal');
const errorMessage = document.getElementById('errorMessage');
const buttonHome = document.querySelector('.header__button-home');
const buttonBackFirst = document.getElementById('btnBack-1');
const buttonForwardFirst = document.getElementById('btnForward-1');


function hideModal() {
  overlay.style.display = 'none';
  editModal.style.display = 'none';
}

closeButtonModal.addEventListener('click', hideModal);

function openFormModal() {
  overlay.style.display = 'block';
  formModal.style.display = 'block';
}

function toggleformButtonModal() {
  if (emailInput.value.trim() !== "" && nameInput.value.trim() !== "") {
    formButtonModal.disabled = false;
    errorMessage.style.display = 'none';
    formButtonModal.addEventListener('click', openLinkModal);
  } else {
    formButtonModal.disabled = true;
  }
}

form.addEventListener('submit', function(event) {
  if (emailInput.value.trim() === "" || nameInput.value.trim() === "") {
    event.preventDefault();
    errorMessage.style.display = 'block';
  }
});

emailInput.addEventListener('input', toggleformButtonModal);
nameInput.addEventListener('input', toggleformButtonModal);

function closeFormModal() {
  overlay.style.display = 'none';
  formModal.style.display = 'none';
  linkModal.style.display = 'none';
}
buttonSave.addEventListener('click', openFormModal);
closeButtonForm.addEventListener('click', closeFormModal);

function openLinkModal() {
  formModal.style.display = 'none';
  overlay.style.display = 'block';
  linkModal.style.display = 'block';
}

closeLinkModal.addEventListener('click', closeFormModal);


if (buttonHome) {
  buttonHome.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
  });
}

if (buttonBackFirst) {
  buttonBackFirst.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'screen-02.html';
  });
}

if (buttonForwardFirst) {
  buttonForwardFirst.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'screen-04_2.html';
  });
}



