const container = document.querySelector('.container')
const menuHamburger = document.querySelector('img[src="./images/menu.svg"]').addEventListener('click', e => {
    container.classList.toggle('active')
})