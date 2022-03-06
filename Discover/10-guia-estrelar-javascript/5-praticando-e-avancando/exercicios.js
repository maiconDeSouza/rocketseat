// 1° Declare uma varável de nome weight
let weight

//2° Que tipo de dado é variável acima?
//R - undefined

/*3° Declare uma variável e atribua valores para cada um do dados:
    * name: string
    * age: Number (integer)
    * starts: Number (float)
    * isSubscribed: Bollean

*/
const name = 'Dante'
let age = 1
let starts = 1.8
let isSubscribed = true


/*4° A variável student abaixo é de que tipo dados?
    R - object
  4.1 Atribua a ela a mesmas propriedades e valores do exercicío 3
  4.2 Mostre no console a seguinte mensagem
  <name> de idade <age> e <weight> kg

  !Atenção, substiua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {}
student.name = name
student.age = age
student.weight = starts

console.log(student)
const frase = `${student.name} de idade ${student.age} e ${student.weight} kg`
console.log(frase)

/*
  5° declare um variável do tipo Array, de nome students e atribua a ela nenhum valor, 
  ou seja, somente o Array vazio
*/

const students = []

/*
 6° Reatribua valor para variável acima, colocando dentro dela o objeto student da questão 4. 
 (não copiar colar o objeto, mas usar o objeto criado e inserir ele no Arra) 
*/

students.push(student)
console.log(students)

/*
    7° Coloque no controle o valor da posição zero do Array acima
*/

console.log(students[0])

/*
    8° Crie um novo student e coloque na posição 1 do Array students
*/

students.push({
    name: 'gabriel',
    age: 17,
    weight: 98
})

console.log(students[1])

/*
  9° Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta.
  rode o código

  console.log(a)
  var a = 1
  //Ele vai retornar que a está undefined, pois a declaração de var sobre hoisting e é levada para 
  o começo do código
*/