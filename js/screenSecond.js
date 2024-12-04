let drake;

window.onload = function () {
  let containers = [
    document.querySelector('.subject__items'),
    document.querySelector('.card-1'),
    document.querySelector('.card-2'),
    document.querySelector('.card-3'),
  ];

  drake = dragula(containers, {
    // перетаскиваемые элементы только '.subject__item'
    moves: function (el, source, handle, sibling) {
      if (el.classList.contains('subject__item')) {
        return true;
      }
    },
  });

  drake.on('drop', function (el, target, source, sibling) {
    if (target.classList.contains('card__body')) {
      // over
      const mainItem = target.closest('.main__item');
      if (mainItem) {
        mainItem.classList.remove('over');
      }
    
      // placeholder
      const targetSubjectItems = target.querySelectorAll('.subject__item:not(.gu-transit)');
      if (targetSubjectItems.length >= 1) {
        source.classList.add('placeholder-hidden');
        drake.cancel(true);
      }
    }

    // '.subject__item-btn' всегда последний элемент
    if (
      el.previousElementSibling &&
      el.previousElementSibling.classList.contains('subject__item-btn')
    ) {
      const parent = el.parentNode;
      parent.insertBefore(el, el.previousElementSibling);
    }
  });

  let prevShadowContainer;
  drake.on('shadow', function (el, container, source) {
    const containerSubjectItems = container.querySelectorAll('.subject__item:not(.gu-transit)');

    // source
    if (source.classList.contains('card__body') && source !== container) {
      source.classList.remove('placeholder-hidden');
    }

    // previous shadow
    if (prevShadowContainer) {
      const prevSubjectItems = prevShadowContainer.querySelectorAll('.subject__item:not(.gu-transit)');

      // over
      const prevMainItem = prevShadowContainer.closest('.main__item');
      if (prevMainItem) {
        prevMainItem.classList.remove('over');
      }

      if (prevSubjectItems.length === 0) {
        // preview
        prevShadowContainer.classList.remove('preview-hidden');

        // placeholder
        if (
          (container.classList.contains('card__body') &&
          containerSubjectItems.length <= 1) ||
          !container.classList.contains('card__body')
        ) {
          prevShadowContainer.classList.remove('placeholder-hidden');
        }
      }
    }

    // current shadow
    if (container.classList.contains('card__body')) {
      // over
      const mainItem = container.closest('.main__item');
      if (mainItem) {
        mainItem.classList.add('over');
      }

      // preview
      if (containerSubjectItems.length >= 1) {
        container.classList.add('preview-hidden');
      }

      // placeholder
      container.classList.add('placeholder-hidden');

    }

    prevShadowContainer = container;
  });
};

let currentBlock;

function showDeleteModal(button) {
  currentBlock = button.closest('.main__item');
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('deleteModal').style.display = 'block';
}

function updateCardsIndexNumbers() {
  const cards = document.querySelectorAll('.main__item');
  cards.forEach((card, index) => {
    const indexNumberSpan = card.querySelector('.card__index-number');
    indexNumberSpan.textContent = `${index + 1}`;
  });
}

function deleteBlock() {
  if (currentBlock) {
    currentBlock.parentNode.removeChild(currentBlock);
    closeDeleteModal();
    updateAddBlockButtonText();
    updateCardsIndexNumbers();
  }
}

function closeDeleteModal() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('deleteModal').style.display = 'none';
}

function addBlock() {
  const blockCount = document.querySelectorAll('.main__item').length;
  console.log(blockCount);
  if (blockCount >= 7) {
    return;
  }

  /*blockCount++;*/

  const newBlock = document.createElement('article');
  newBlock.classList.add('main__item');

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('card__body', `card-${blockCount}`);
  contentDiv.classList.add('drop-zone');

  const indexNumberSpan = document.createElement('span');
  indexNumberSpan.classList.add('card__index-number');
  indexNumberSpan.textContent = `${blockCount + 1}`;

  const contentSpan = document.createElement('span');
  contentSpan.classList.add('card__body-text');
  contentSpan.textContent = 'Перетащите одну из карточек выше';

  const cardBottom = document.createElement('div');
  cardBottom.classList.add('card__bottom');

  const cardDelete = document.createElement('div');
  cardDelete.classList.add('card__delete');

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn-blue');
  deleteButton.textContent = 'Удалить';
  deleteButton.onclick = function () {
    showDeleteModal(deleteButton);
    /*blockCount--;*/
  };

  newBlock.appendChild(contentDiv);
  newBlock.appendChild(cardBottom);
  contentDiv.appendChild(indexNumberSpan);
  contentDiv.appendChild(document.createTextNode('. '));
  contentDiv.appendChild(contentSpan);
  cardBottom.appendChild(cardDelete);
  cardDelete.appendChild(deleteButton);

  const cardsWrap = document.querySelector('.main__cards-content');
  cardsWrap.insertBefore(newBlock, document.getElementById('card__btn'));

  drake.containers.push(contentDiv);

  updateAddBlockButtonText();
}

function updateAddBlockButtonText() {
  const blockCount = document.querySelectorAll('.main__item').length;
  const addButton = document.getElementById('addBlockButton');
  addButton.textContent = `Добавить свою подтему (${Math.max(
    7 - blockCount,
    0,
  )})`;
  if (blockCount >= 7) {
    addButton.style.display = 'none';
  } else {
    addButton.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Функция для установки ширины input
  function setWidth() {
    // Получаем все input элементы
    var inputs = document.querySelectorAll('.subject__item-input');

    // Устанавливаем ширину для каждого input в соответствии с его значением
    inputs.forEach(function(input) {
        input.style.width = input.value.length * 11 + 'px'; // Примерное значение ширины для каждого символа
    });
  }

  // Вызываем setWidth при загрузке страницы
  setWidth();

  // Добавляем обработчик события input, чтобы обновлять ширину при изменении значения
  document.addEventListener('input', setWidth);
});

function toggleDropdown(dropdownToggle) {
  const dropdown = dropdownToggle.parentNode;
  dropdown.classList.toggle('open');
}


let userTexts = [];

// Функция для добавления новой подтемы
function addSubjectBlock() {

  const newSubjectItem = document.createElement('div');
  newSubjectItem.classList.add('subject__item');

  const input = document.createElement('input');
  input.classList.add('subject__item-input'); 

  newSubjectItem.appendChild(input);
  const cardDropdown = document.querySelector('.card__dropdown');
  newSubjectItem.appendChild(cardDropdown);


  const subjectButton = document.querySelector('.subject__item-btn');

  subjectButton.parentNode.insertBefore(newSubjectItem, subjectButton);

  userTexts.push('');
}

const subjectButton = document.querySelector('.subject__item-btn');
subjectButton.addEventListener('click', addSubjectBlock);

// Функция прелоадера
function preload() {
  // Показать спиннер при загрузке страницы
  document.querySelector('.spinner-container').style.display = 'block';
  document.querySelector('.main__subjects').style.display = 'none';
  // Имитация загрузки контента (здесь можно загрузить контент с сервера или другого источника)
  setTimeout(function() {
    // Скрыть спиннер и показать контент после имитации загрузки
    document.querySelector('.spinner-container').style.display = 'none';
    document.querySelector('.main__subjects').style.display = 'block';
  }, 2000); // Замените 2000 на время загрузки контента в миллисекундах
}
window.addEventListener('load', preload);

// Функция перегенерации
function regenerateSubjects() {
  // Перебираем все блоки с текстом
  let subjectItemInput = document.querySelectorAll('.subject__item-input');
  subjectItemInput.forEach(function(input, index) {
      // Сохраняем текст из поля ввода в массиве userTexts
      userTexts[index] = input.value;
  });
  
  console.log(userTexts);
  preload();
}

const regenerateButton = document.querySelector('.btn-generation');
regenerateButton.addEventListener('click', regenerateSubjects);

const btn = document.querySelector('.form__next-btn');
if (btn) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'screen-04_0.html';
  });
}

tippy('#span', {
  content: '<div style="display: flex; align-items: start;"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M4.73013 14.49L9.01013 5.92998C10.9301 2.08998 14.0701 2.08998 15.9901 5.92998L20.2701 14.49C23.1501 20.25 20.7901 22.6 15.0401 19.72L13.3101 18.85C12.8701 18.63 12.1401 18.63 11.7001 18.85L9.96013 19.72C4.21013 22.6 1.85013 20.24 4.73013 14.49Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 18.5601L12.5 13.1601" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span style="margin-left: 15px; font-size: 14px;">Нажми сюда, чтобы отредактировать содержание интерактива</span></div > ',
  placement: 'bottom-start',
});