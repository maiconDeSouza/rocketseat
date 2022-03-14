const h1 = document.createElement('h1')
h1.innerText = 'Olá Mundo!'
body.insertBefore(h1, div)

const h2 = document.createElement('h2')
h2.innerText = 'Adjacent'


body.insertAdjacentElement('afterend', h2)