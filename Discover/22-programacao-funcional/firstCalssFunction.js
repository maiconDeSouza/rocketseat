// Pode estar em qualquer lugar, inclusive, como parâmetro de outras funções

//A função poderá ser entendida como uma variável

// function consoleLog(fn,n){
//     console.log(fn(n))
// }

// const mayName = n => n

// consoleLog(mayName, 'Maicon')

function retorno(fn, parametro){
    return fn(parametro)
}

const sayMyName = n => console.log(n)

retorno(sayMyName, 'Maicon')