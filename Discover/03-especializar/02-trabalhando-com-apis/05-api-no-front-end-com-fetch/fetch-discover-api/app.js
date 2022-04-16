const url = 'http://localhost:1992/api'
const div = document.querySelector('#render')
const nome = document.querySelector('#nome')
const avatar = document.querySelector('#avatar')
const cidade = document.querySelector('#cidade')

async function carregaInfo(){
    const db = await fetch(url)
    const dados = await db.json()

    criaSelection(dados.users)
}
carregaInfo()

const fun = {
    enviar,
    limpar,
    editar,
    del,
    buscar
}


document.addEventListener('click', e =>{
    e.preventDefault()

    const el = e.target

    if(el.nodeName === 'BUTTON'){
        const funAtiva = el.id
        fun[funAtiva]()
    }
    
})

async function enviar(){
    const newUser = {
                name:nome.value,
                avatar:avatar.value,
                city:cidade.value
            }
    await fetch(url, {
        method:"POST",
        headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })

    limpar()
    carregaInfo()
}

function limpar(){
    nome.value = ''
    avatar.value = ''
    cidade.value = ''
}

async function buscar(){
    const selecionado = document.querySelector('#selecionar')
    
    if(selecionado.value === 'geral'){
        const db = await fetch(url)
        const dados = await db.json()
        limpar()
        criaUl(dados.users)
    }else{
        const db = await fetch(`${url}/${selecionado.value}`)
        const dados = await db.json()
        criaUl(dados)
    }
    
}

async function editar(){
   
    if(nome.value !== ''){
        const newUser = {
            name:nome.value,
            avatar:avatar.value,
            city:cidade.value
        }
        
        const sel = document.querySelector('#selecionar').value
    
        await fetch(`${url}/${sel}`, {
            method:"PUT",
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        const db = await fetch(`${url}/${sel}`)
        const dados = await db.json()
        criaUl(dados)
    }
}

async function del(){
    const sel = document.querySelector('#selecionar').value

    await fetch(`${url}/${sel}`, {
        method:"DELETE",
        headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    })

    div.innerHTML = ''
    limpar()
    const selecionado = document.querySelector('#selecionar')
    selecionado.value = 'geral'
    const buscar = document.querySelector('#buscar')
    buscar.click()
}

function criaSelection(arrayDeUsuarios){
    const sel = document.querySelector('#selecionar')
    sel.innerHTML = '<option value="geral">Geral</option>'
    arrayDeUsuarios.forEach(el => {
        const op = document.createElement('option')
        op.setAttribute('value', el.id)
        op.innerText = el.name
        sel.appendChild(op)
    })
}

function criaUl(arrayOUobjeto){
    div.innerHTML = ''
    if(Array.isArray(arrayOUobjeto)){
        arrayOUobjeto.forEach(el =>{
            const ul = document.createElement('ul')
            const li1 = document.createElement('li')
            const li2 = document.createElement('li')
            const li3 = document.createElement('li')
            const li4 = document.createElement('li')
            li1.innerText = el.id
            li2.innerText = el.name
            li3.innerText = el.avatar
            li4.innerText = el.city
            ul.appendChild(li1)
            ul.appendChild(li2)
            ul.appendChild(li3)
            ul.appendChild(li4)
            div.appendChild(ul)
        })
    } else{
            const ul = document.createElement('ul')
            const li1 = document.createElement('li')
            const li2 = document.createElement('li')
            const li3 = document.createElement('li')
            const li4 = document.createElement('li')
            li1.innerText = arrayOUobjeto.id
            li2.innerText = arrayOUobjeto.name
            li3.innerText = arrayOUobjeto.avatar
            li4.innerText = arrayOUobjeto.city
            ul.appendChild(li1)
            ul.appendChild(li2)
            ul.appendChild(li3)
            ul.appendChild(li4)
            div.appendChild(ul)
            nome.value = arrayOUobjeto.name
            avatar.value = arrayOUobjeto.avatar
            cidade.value = arrayOUobjeto.city
    }
}