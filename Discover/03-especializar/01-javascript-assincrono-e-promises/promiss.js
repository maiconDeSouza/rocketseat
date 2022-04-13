/*
* Promise
*
* A promessa de que algo irá acontcer
* Poderá dar certo ou errado, mas irá acontecer*
*/
console.log('Chamou o Uber')
let aceitar = false
const promessa = new Promise((resolve, reject) =>{
  if(aceitar){
      resolve('O Uber aceitou')
  }else{
      reject('O Uber cancelou')
  }
})

console.log('Aguarando...')
promessa.then(result =>{
    console.log(result)
    console.log('fim')
})
.catch(erro =>{
    console.log(erro)
    console.log('tente de novo')
})

