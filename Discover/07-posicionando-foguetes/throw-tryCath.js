//throw
function sayMyName(nome = ''){
    if(nome === ''){
        throw `É necessário informar o nome`
    }
    console.log(nome)
}



// try...catch
try{
    sayMyName()
} catch(e){
    console.log(e)
}

console.log(`Continuação do meu código`)