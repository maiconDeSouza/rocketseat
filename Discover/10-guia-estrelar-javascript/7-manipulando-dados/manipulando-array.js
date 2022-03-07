const techs = ['html', 'css', 'js']

//add um item no fim
techs.push('node')

console.log(techs)

//add no começo
techs.unshift('logica')

console.log(techs)

//remover do fim
techs.pop()

console.log(techs)

//remover do inicio
techs.shift()

console.log(techs)


//pegar somente algum elementos do array
const arrayPegos = techs.slice(1,3)
console.log(arrayPegos)


// remover 1 ou mais elementos em qualquer posição do array
techs.splice(1,1)
console.log(techs)

//encontar a posição de um elemento no array
const index = techs.indexOf('js')

console.log(index)