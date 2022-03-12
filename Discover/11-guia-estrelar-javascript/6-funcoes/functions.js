const frases = [
    'Estudar é muito bom', 
    'paciência e persistência', 
    'Revisão é mãe do aprendizado'
]

function geraFraseDoDia(){
    const max = frases.length - 1
    const min = 0
    const numeroAleatorio = Math.round(Math.random() * (max - min) + min)

    console.log(frases[numeroAleatorio])
}

geraFraseDoDia()