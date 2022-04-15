const express = require('express')
const app = express()
const router = require('express').Router()

const url = 'https://api.github.com/users'

const axios = require('axios')

app.use(express.json())
app.use('/', router)
app.use((req, res)=>{
    res.send('<h1>404</404>')
})

async function getGitHub(id){
    if(id){
        const user = await axios.get(`${url}/${id}`)
        const {data} = user
        return data
    } else{
        const user = await axios.get(`${url}`)
        const {data} = user
        return data
    }
}

router.get('/:id?', async (req, res) =>{
    if(req.params){
        const data = await getGitHub(req.params.id)
        res.send(data)
    } else{
        const data = await getGitHub()
        res.send(data)
    }
})

app.listen(1992)