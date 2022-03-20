//Não pode depender de nada externo

const calculateCircumference = (pi, radius) => (pi * (radius + radius)).toFixed(2)

console.log(calculateCircumference(3.14, 27))

const person = {
    name: 'Dante Parrudo',
    age: 'Jovem'
}

function changePersonName(person, name){
    return {...person, name}
}

const pessoa = changePersonName(person, 'Felipe Chorão')
console.log(person)
console.log(pessoa)