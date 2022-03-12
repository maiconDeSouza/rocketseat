/*
    Crie uma função que receba uma string em celsius ou fahrenheit
    e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

function celsius(numerico){
    const c = (numerico - 32) * 5/9
    return c.toFixed(2)
}

function fahrenheit(numerico){
    const f = numerico * 9/5 + 32
    return f.toFixed(2)
}

function separaTemperatura(temperatura){
    const temp = temperatura
    const sigla = (temp.slice(-1)).toLowerCase()
    const numerico = Number(temp.slice(0, temp.length - 1))

    
    if(sigla !== 'f' && sigla !== 'c'){return console.log('Coloque uma silga valída')}

    switch(sigla){
        case 'c':
            console.log(`${fahrenheit(numerico)}°F`)
            break
        case 'f':
            console.log(`${celsius(numerico)}°C`)
            break
    }
    
}

separaTemperatura('10c')

