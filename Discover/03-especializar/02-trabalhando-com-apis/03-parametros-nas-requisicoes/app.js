const express = require('express')
const router = require('express').Router()

const app = express()

app.use(express.json())

app.use('/', router)
app.use((req, res)=>{
    res.send('<h1>404</h1>')
})

router.get('/', function(req, res){
    res.send('Funcinou Muleke zica!')
})

router.get('/query', (req, res) =>{
   
    res.send(req.query)
    
})

router.get('/parms/:id?', (req, res) =>{
    res.send(req.params)
})


app.listen(3080)