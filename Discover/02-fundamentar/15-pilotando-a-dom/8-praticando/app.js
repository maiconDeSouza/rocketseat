const body = document.querySelector('body')
const botao = document.querySelector('button')
const divJanela = document.querySelector('.janela')

botao.addEventListener('click', e =>{
    divJanela.style.display = 'flex'
    botao.style.display = 'none'
    body.classList.add('b-color')
})

document.addEventListener('keydown', e =>{
    
    if(divJanela.style.display === 'flex' && e.key === 'Escape'){
        divJanela.style.display = 'none'
        botao.style.display = 'block'
        body.classList.remove('b-color')
    }
})