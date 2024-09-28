/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const displaySum = document.querySelector('.display')
/*-------------------------------- Variables --------------------------------*/
let sum = 0
let n = ''
let add = false
let sup = false
let divide = false
let mul = false
let addn = 0
let supn = 0
let nx = ''
let muln = 0
let divn = 0
let e = false
/*------------------------ Cached Element References ------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    if (event.target.textContent === 'C') {
      displaySum.textContent = ''
      n = ''
      nx = ''
      sum = 0
      addn = 0
      supn = 0
      muln = 0
      divn = 0
      e = false
    } else {
      if (event.target.classList.contains('number')) {
        nx = `${nx}${event.target.textContent}`
      } else if (event.target.innerText === '+') {
        add = true
        addn = Number(nx)
        nx = ''
      } else if (event.target.textContent === '-') {
        sup = true
        supn = Number(nx)
        nx = ''
      } else if (event.target.textContent === '*') {
        mul = true
        muln = Number(nx)
        nx = ''
      } else if (event.target.textContent === '/') {
        divide = true
        divn = Number(nx)
        nx = ''
      } else if (event.target.textContent === '=') {
        if (add === true) {
          sum = addn + Number(nx)
          add = false
        } else if (sup === true) {
          sum = supn - Number(nx)
          sup = false
        } else if (mul === true) {
          sum = muln * Number(nx)
        } else if (divide === true) {
          divide = false
          sum = divn / Number(nx)
        }
        console.log(sum)
        e = true
      }
      if (e === true) {
        n = `${n}=${sum}`
        displaySum.textContent = n
      } else {
        let x = event.target.innerText
        n = `${n}${x}`
        displaySum.textContent = n
      }
    }
  })
})
