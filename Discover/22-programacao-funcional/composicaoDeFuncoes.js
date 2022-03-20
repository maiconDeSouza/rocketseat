//Um encadeamento de funções

//Um função que retorna um dado e vai pra outra função, que retorna um dado e vai pra outra função

const people = ['Rafa', 'Diego', 'Dani', 'Rod']
const d = name => name.startsWith('D')
const upper = name => name.toUpperCase()

const retorno = people.filter(d).map(upper)

console.log(retorno)