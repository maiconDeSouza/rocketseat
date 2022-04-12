//A função não pode pegar nenhum valor externo. Apenas os valores passados como argumentos.

const random = (number, Math) => Math.floor((Math.random() * number) + 1)

function recursive(inicio, fim){
    if(inicio <= fim){
        console.log(inicio++)
        recursive(inicio, fim)
    }
}

// recursive(5, 12)

console.log(random(5, Math))