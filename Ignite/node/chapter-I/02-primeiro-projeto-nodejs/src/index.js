const express = require('express')
const app = express()
const PORT = 1992

const {v4:uuidv4 }= require('uuid')

const customers = [
    {name: 'Dante', 
    cpf: 111, 
    statement:[{
        description: 'Serviço',
        amount: 1000,
        created_at: new Date(),
        type: 'credit'
    }], 
    id:uuidv4()}
]


function customersAlreadyExistsCPF(req, res, next){
    const {cpf} = (req.headers)
    
    if(!cpf){return res.status(400).json({"error":"informe um cpf"})}

    const customersAlreadyExists = customers.find(customer => customer.cpf === Number(cpf))
    req.customer = customersAlreadyExists
    
    if(customersAlreadyExists){
        
        return next()
    } else{
        return res.status(404).json({"error":"cpf não cadastrado"})
    }
    
}


app.use(express.json())

app.get('/admin', (req, res)=>{
    return res.json(customers)
})


app.get('/balance', customersAlreadyExistsCPF, (req, res) =>{
    const {customer} = req

    const balance = customer.statement.reduce((acc, value) => acc += value.amount, 0)
    
    res.status(200).json({
        name: customer.name,
        saldo: balance
    })
})

app.post('/create', (req, res) =>{
    const {name, cpf} = req.body
 
    const customersAlreadyExists = customers.some(customer => customer.cpf === cpf)
 
    if(customersAlreadyExists){return res.status(400).json({"error":"CPF já cadastrado"})}
 
    const newCustomer = {
        name,
        cpf,
        statement:[],
        id: uuidv4()
    }
    customers.push(newCustomer)
    res.status(201).json('Conta Criada com sucesso!')
 })
 


app.get('/statement/:dia?', customersAlreadyExistsCPF, (req, res) =>{
    const {customer} = req
    const {dia} = req.params
    
    res.status(200).json({
        name: customer.name,
        statement: customer.statement
    })
})

app.post('/deposit', customersAlreadyExistsCPF, (req, res) =>{
    const {customer} = req
    const {description, amount} = req.body
    const valueNumber = Number(amount)

    if(isNaN(valueNumber)){return res.status(400).json({"error":"Informe um valor de despoito valido!"})}
    if(valueNumber === 0){return res.status(400).json({"error":"0 não é um valor valido"})}

    const statementUser = {
        description,
        amount,
        created_at: new Date(),
        type: 'credit'
    }

    customer.statement.push(statementUser)
    res.status(201).json(customer)
})

app.post('/withdraw', customersAlreadyExistsCPF, (req, res) =>{
    const {customer} = req
    const {description, amount} = req.body
    const valueNumber = Number(amount)

    if(isNaN(valueNumber)){return res.status(400).json({"error":"Informe um valor de saque valido!"})}
    if(valueNumber === 0){return res.status(400).json({"error":"0 não é um valor valido"})}
    const valueTotal = customer.statement.reduce((acc, value) => acc += value.amount, 0)
    
    if(valueTotal < valueNumber){return res.status(400).json({"error":"Saque superior aos fundos dispoineis"})}

    const statementUser = {
        description,
        amount: -amount,
        created_at: new Date(),
        type: 'debit'
    }
    customer.statement.push(statementUser)
    res.status(201).json(customer)
})

app.patch('/edit', customersAlreadyExistsCPF, (req, res) =>{
    const {customer} = req
    const {name} = req.body

    

    if(name){
        customer.name = name
        return res.status(200).json(customer)
    }
    res.status(200).json(customer)
})


app.delete('/del', customersAlreadyExistsCPF, (req, res) =>{
    const {customer} = req
    const {confirm} = req.body

    if(confirm){
        customers.splice(customer,1)
        res.status(200).json(customers)
    }

    res.status(400).json({"error":"Operação não realizada!"})
})

app.listen(PORT, () => console.log(`Servidor no ar na porta: ${PORT}`))

