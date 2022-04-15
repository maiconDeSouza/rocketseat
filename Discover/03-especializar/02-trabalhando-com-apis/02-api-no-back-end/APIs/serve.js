const express = require('express')
const app = express()

let nome = 'Thomaz Shelby'

app.use(express.json())

app.get('/', (req, res) =>{
    res.send('Deu certo!')
})

app.get('/teste', (req, res) => {
    res.send('teste ok!!!')
})

app.post('/post', (req, res) =>{
    const retorno = req.body
    res.send(retorno)
})


app.get('/autor', (req, res) =>{
    res.send(nome)
})
app.put('/autor', (req, res) =>{
    const {nome: nova} = req.body
    nome = nova
    res.send(`O Autor é o ${nome}`)
})
app.delete('/autor/:id', (req, res) =>{
    console.log(req.params)
    const {id: del} = req.params
    if(nome === del){
        nome = ''
        res.send('excluido')
    }
    res.send('Valor inexistente')
})

app.get('/getbody', (req, res) =>{
    res.send(req.body)
})

app.listen(3003, () =>{
    console.log('Deu certo')
})