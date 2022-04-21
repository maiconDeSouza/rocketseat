const express = require('express')
const app = express()

const {v4:uuidv4 }= require('uuid')

app.use(express.json())


const users = JSON.parse(require('./db'))


const write = require('./write')


function check(req, res, next){
    const {username} = req.headers
    
    
    const user = users.find(el => el.username === username)

    if(!user){return res.status(400).json({error:"usuario não cadastrado"})}

    req.user = user

    next()
}

// { 
// 	id: 'uuid', // precisa ser um uuid
// 	name: 'Danilo Vieira', 
// 	username: 'danilo', 
// 	todos: []
// }

app.post('/users', (req, res) =>{
    const {name, username} = req.body
    const check = users.some(e => e.username === username)
    if(check){return res.status(400).json({error:"usuario já castrado"})}
    const newUser = {
        id: uuidv4(),
        name,
        username,
        todos: []
    }  
    users.push(newUser)
    write(JSON.stringify(users))
    res.status(201).json(users)
})

app.get('/todos', check, (req, res)=>{
    const user = req.user
    
    res.status(200).json({
        username: user.username,
        todos: user.todos
    })
})



app.post('/todos', check, (req, res) =>{
    const user = req.user
    const {title, deadline} = req.body

    const task = {
        id: uuidv4(),
        title,
        done: false,
        deadline: new Date(deadline),
        created_at: new Date()
    }

    user.todos.push(task)

    write(JSON.stringify(users))

    res.status(200).json({
        username: user.username,
        todos: user.todos
    })
})

app.put('/todos/:id', check, (req, res) =>{
    const user = req.user
    const {title, deadline} = req.body
    const {id} = req.params

    const check = user.todos.some(e => e.id === id)
    const checkId = user.todos.find(e => e.id === id)
    console.log(checkId)
    if(!check){return res.status(400).json({error:"Tarefa não encontrada"})}
    
    checkId.title = title
    checkId.deadline = new Date(deadline)

    write(JSON.stringify(users))
    res.status(200).json({
        username: user.username,
        todos: user.todos
    })
})

module.exports = app