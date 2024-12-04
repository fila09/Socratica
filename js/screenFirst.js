//Select
const element = document.querySelector('.form__select');
const choices = new Choices(element, {
   searchEnabled: false,
   itemSelectText: '',
});

const clearBtn = document.querySelector('.form__cancel-btn');
const answerInput = document.getElementById('answerInput');
const select = document.getElementById('select');
const labelSelect = document.querySelector('.label-select');
const boxSelect = document.querySelector('.box-select');
const textarea = document.getElementById('textarea');
const submitButton = document.getElementById('nextStep');

//Варианты для инпута
function setAnswer(answer) {
   answerInput.value = answer;
   clearBtn.style.display = 'block';
}

//Очистить инпут
function clearInput() {
   answerInput.value = '';
   clearBtn.style.display = this.value ? 'block' : 'none';
}

//Кнопка очистки для инпут
answerInput.addEventListener('input', function () {
   clearBtn.style.display = this.value ? 'block' : 'none';
});

//Изменение цвета label в select
boxSelect.addEventListener('click', function () {
   labelSelect.classList.add('active');
});

document.addEventListener('click', function (event) {
   if (!boxSelect.contains(event.target)) {
      labelSelect.classList.remove('active');
   }
});

//Добавление вариантов
function showMoreOptions() {
   const container = document.getElementById('answerOptionsContainer');

   // Добавление новых вариантов ответов
   const newOptions = ['Радуга', 'Пеший туризм', 'Философия', 'Вселенная', 'Здоровые привычки', 'Бабочки', 'Белые медведи', 'Экономика', 'Финансовая грамотность', 'Фотосинтез'];

   newOptions.forEach((optionText) => {
      const newOption = document.createElement('div');
      newOption.classList.add('answer__option');
      newOption.textContent = optionText;
      newOption.onclick = function (e) {
         e.preventDefault();
         setAnswer(optionText);
      };
      container.appendChild(newOption);
   });
}

//Подсчет знаков в textarea
const charCount = document.getElementById('charCount');
textarea.addEventListener('input', function () {
   const count = textarea.value.length;
   charCount.textContent = `${count}/200`;
});

//Кнопка назад
const btnReturn = document.getElementById('btnReturn');
if (btnReturn) {
   btnReturn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'index.html';
   });
}

//Отправка формы
function submitForm() {
   /*alert('Form submitted!');*/
   
}

// Функция для проверки заполненности полей и активации/деактивации кнопки
function checkFields() {
   if (answerInput.value && select.value && textarea.value) {
      submitButton.disabled = false;
   } else {
      submitButton.disabled = true;
   }
}

if (submitButton) {
   submitButton.addEventListener('click', (e) => {
   e.preventDefault();
   window.location.href = 'screen-02.html';
});
}


// Добавляем обработчики событий для каждого поля
document.getElementById('answerInput').addEventListener('input', checkFields);
document.getElementById('select').addEventListener('change', checkFields);
document.getElementById('textarea').addEventListener('input', checkFields);