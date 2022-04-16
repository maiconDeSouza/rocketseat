// const div = document.querySelector('#render')
// const buttonEnviar = document.querySelector('#enviar')
// const buttonBuscar = document.querySelector('#buscar')
// const buttonEditar = document.querySelector('#editar')
// const buttonLimpar = document.querySelector('#limpar')
// const buttonDel = document.querySelector('#del')

// const url = 'http://localhost:1992/api'

// const nome = document.querySelector('#nome')
// const avatar = document.querySelector('#avatar')
// const cidade = document.querySelector('#cidade')

// function criarHTML(arrayOUobjeto){
//     div.innerHTML = ''
//     if(Array.isArray(arrayOUobjeto)){
//         arrayOUobjeto.forEach(el =>{
//         const ul = document.createElement('ul')
//         const li1 = document.createElement('li')
//         const li2 = document.createElement('li')
//         const li3 = document.createElement('li')
//         const li4 = document.createElement('li')

//         li1.innerText = el.id
//         li2.innerText = el.name
//         li3.innerText = el.avatar
//         li4.innerText = el.city

//         ul.appendChild(li1)
//         ul.appendChild(li2)
//         ul.appendChild(li3)
//         ul.appendChild(li4)
//         div.appendChild(ul)
//         })
//     }else{
//         const ul = document.createElement('ul')
//         const li1 = document.createElement('li')
//         const li2 = document.createElement('li')
//         const li3 = document.createElement('li')
//         const li4 = document.createElement('li')

//         li1.innerText = arrayOUobjeto.id
//         li2.innerText = arrayOUobjeto.name
//         li3.innerText = arrayOUobjeto.avatar
//         li4.innerText = arrayOUobjeto.city

//         ul.appendChild(li1)
//         ul.appendChild(li2)
//         ul.appendChild(li3)
//         ul.appendChild(li4)
//         div.appendChild(ul)

//         nome.value = arrayOUobjeto.name
//         avatar.value = arrayOUobjeto.avatar
//         cidade.value = arrayOUobjeto.city
//     }
// }

// async function consumeAPI(numeroOpcional){
//     if(numeroOpcional){
//         const db = await fetch(`${url}/${numeroOpcional}`)
//         const dado = await db.json()
    
//         if(dado !== 'User nor found!'){
//             criarHTML(dado)
//         } else{
//             div.innerHTML = 'User não cadastrado!'
//         }
        
//     }else{
//         const db = await fetch(url)
//         const dado = await db.json()
//         criarHTML(dado.users)
//     }
    
// }



// buttonEnviar.addEventListener('click', async e =>{
//     e.preventDefault()

//     const newUser = {
//         name:nome.value,
//         avatar:avatar.value,
//         city:cidade.value
//     }
   
//     await fetch(url, {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//         body: JSON.stringify(newUser)
//     })

//     nome.value = ''
//     avatar.value = ''
//     cidade.value = ''
// })

// buttonBuscar.addEventListener('click', e =>{
//     e.preventDefault()
//     const numero = Number(document.querySelector('#numero').value)
    
//     consumeAPI(numero)

// })

// buttonEditar.addEventListener('click',async e =>{
//     e.preventDefault()

//     const id = document.querySelector('ul li:nth-of-type(1)')
    

//     const newUser = {
//         name:nome.value,
//         avatar:avatar.value,
//         city:cidade.value
//     }
   
//     await fetch(`${url}/${id.innerText}`, {
//         method: "PUT",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//         body: JSON.stringify(newUser)
//     })

//     div.innerHTML = ''
//     const ul = document.createElement('ul')
//         const li1 = document.createElement('li')
//         const li2 = document.createElement('li')
//         const li3 = document.createElement('li')
//         const li4 = document.createElement('li')

//         li1.innerText = id.innerText
//         li2.innerText = nome.value
//         li3.innerText = avatar.value
//         li4.innerText = cidade.value

//         ul.appendChild(li1)
//         ul.appendChild(li2)
//         ul.appendChild(li3)
//         ul.appendChild(li4)
//         div.appendChild(ul)
// })

// buttonLimpar.addEventListener('click', e =>{
//     e.preventDefault()

//     nome.value = ''
//     avatar.value = ''
//     cidade.value = ''
// })

// buttonDel.addEventListener('click',async e =>{
//     e.preventDefault()
//     const id = document.querySelector('ul li:nth-of-type(1)')
    
    
    

//     await fetch(`${url}/${id.innerText}`, {
//         method: "DELETE",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           }
//     })

//     nome.value = ''
//     avatar.value = ''
//     cidade.value = ''
//     div.innerHTML = ''
// })