//stateful function
let number = 2

function square(){
    return number * number
}

number = square()
console.log(number)


//stateless function
const sq = n => n * n
console.log(sq(5))