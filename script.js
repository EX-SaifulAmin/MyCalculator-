 let btn = document.querySelectorAll('button')
 let displayHasil = document.querySelector('.displayInput')
 let area = document.querySelector('.displayArea')
 
 btn.forEach(item => {
  item.addEventListener('click', () => {
    area.scrollLeft = area.scrollWidth
  if(item.textContent == 'C') {
    displayHasil.innerHTML = ''
  }else if(item.value == 'del') {
    displayHasil.innerHTML = displayHasil.innerHTML.slice(0,-1)
  }
  else {
    displayHasil.innerHTML += item.value
    
  }
  
  })
 })
 function hasil() {
  try {
    displayHasil.innerHTML = eval(displayHasil.innerHTML)
  } catch(e) {
    displayHasil.innerHTML = 'Expression Error'
  }
}
 