const body = document.querySelector('body')
const check = document.querySelector('input[type="checkbox"]')

check.addEventListener('change', e =>{
    body.classList.toggle('dark')
})