const express = require('express')
const app = express()
const PORT = 1992

const {v4:uuidv4 }= require('uuid')



const customers = [
    {name: 'Dante', cpf: 111, statement:[1000], id:uuidv4()}
]

app.use(express.json())

app.get('/admin', (req, res)=>{
    return res.json(customers)
})

app.get('/statement', (req, res) =>{
    const {cpf} = req.body
    
    if(!cpf){return res.status(400).json({"error":"informe um cpf"})}

    const customersAlreadyExists = customers.some(customer => customer.cpf === cpf)

    if(customersAlreadyExists){
        customers.forEach(e => {
            if(e.cpf === cpf){return res.status(200).json({
                "name": e.name,
                "statemant":e.statement
            })}
        })
    } else{
        return res.status(400).json({"error":"Cliente não cadastrado"})
    }
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

app.listen(PORT, () => console.log(`Servidor no ar na porta: ${PORT}`))

