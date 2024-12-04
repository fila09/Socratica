tippy('#title', {
  //content: "Сгенерировать заголовок заново",
  content: '<div style="display: flex; align-items: center;"><svg svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span style="margin-left: 15px;">Сгенерировать заголовок заново</span></div>',
  trigger: 'click',
  placement: 'bottom',
});

tippy('#text', {
  //content: "Сгенерировать текст заново",
  content: '<div style="display: flex; align-items: center;"><svg svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span style="margin-left: 15px;">Сгенерировать текст заново</span></div>',
  trigger: 'click',
  placement: 'bottom',
});




//Рабочий тултип с выделением, но без деления на текст и заг!!!
/*const selectionRef = document.querySelector('#selection-ref')

const [instance] = tippy('#selection-ref', {
  content: 'tooltip',
  sticky: true
})

// inspired by https://jsfiddle.net/joktrpkz/7/
const selection = window.getSelection()

window.addEventListener('mouseup', (event) => {
  if (!selection.isCollapsed) {
    const { left, top, width, height } = selection.getRangeAt(0).getBoundingClientRect()
    
    selectionRef.style.left = `${left}px`
    selectionRef.style.top = `${top}px`
    selectionRef.style.width = `${width}px`
    selectionRef.style.height = `${height}px`
  
    instance.show()
  }
})

window.addEventListener('mousedown', (event) => {
  instance.hide()
})*/

