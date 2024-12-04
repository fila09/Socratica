
function limitToOneDigit() {
  let inputs = document.querySelectorAll(".input-mobile__single");

  for (let i = 0; i < inputs.length; i++) {
    let inputField = inputs[i];
    if (inputField.value.length > 1) {
      inputField.value = inputField.value.slice(0, 1);
    }
  }
}

  //Timer
  const timerElement = document.getElementById('timer');
  const circleElement = document.getElementById('timer-circle');
  const totalTime = 3 * 60; // 3 minutes in seconds
  let timeRemaining = totalTime;
  
  function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerElement.innerText = formattedTime;
  
    const percentage = 1 - (timeRemaining / totalTime);
    const dashArray = `${283 * percentage} 283`;
    circleElement.style.strokeDasharray = dashArray;
  }
  
  function updateCountdown() {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateTimer();
    } else {
      clearInterval(timerInterval);
      timerElement.innerText = '00:00';
      //alert('Время истекло!');
    }
  }
  
  // Инициализация таймера
  updateTimer();
  const timerInterval = setInterval(updateCountdown, 1000);
  
const textarea = document.getElementById('textarea');
  

const submitButton = document.getElementById('mobileBtn');
  function checkFields() {
    if (textarea.value) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  };

  textarea.addEventListener('input', checkFields);