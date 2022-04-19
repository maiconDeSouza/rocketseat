const express = require('express')
const app = express()
const PORT = 1992


app.use(express.json())


app.get('/courses', (req, res)=>{
    console.log(req.body)
    return res.json(['curso 1', 'curso 2', 'curso 3'])
})

app.get('/courses/:id', (req, res) =>{
    const courses = ['curso 1', 'curso 2', 'curso 3']
    const id = (Number(req.params.id) - 1)
    res.json({curso: courses[id]})
})

app.post('/courses', (req, res) =>{
    return res.json(['curso 1', 'curso 2', 'curso 3', 'curso 4'])
})

app.put('/courses/:id',(req, res) =>{
    console.log(req.params.id)
    return res.json(['curso 6', 'curso 2', 'curso 3', 'curso 4'])

})

app.patch('/courses/:id',(req, res) =>{
    return res.json(['curso 6', 'curso 7', 'curso 3', 'curso 4'])
})

app.delete('/courses/:id',(req, res) =>{
    return res.json(['curso 6', 'curso 7', 'curso 4'])
})

app.listen(PORT, () => console.log(`rodando na porta: ${PORT}`))