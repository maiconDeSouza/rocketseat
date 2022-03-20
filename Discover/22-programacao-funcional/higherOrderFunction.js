//Funções que recebem funções como argumentos

//Funções que poderão retornar outras funçẽs

const numbers = [2, 4, 8, 16]

const square = n => n * n

const squaredNumber = numbers.map(square)

console.log(squaredNumber)

function soma2(a, b){
    return function soma3(c){
        return a + b + c
    }
}

const primeiro = soma2(2,2)
console.log(primeiro(2))