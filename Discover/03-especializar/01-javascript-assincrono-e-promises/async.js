let aceitar = true
const promessa = new Promise((resolve, reject) =>{
    if(aceitar){
        resolve('O Uber já está a caminho')
    }else {
        reject('Tente novamente o Uber rejeitou')
    }
})

async function uber(){
    try {
        const resposta = await promessa
        console.log(resposta)
    } catch (error) {
        console.log(error)
    }
}
uber()