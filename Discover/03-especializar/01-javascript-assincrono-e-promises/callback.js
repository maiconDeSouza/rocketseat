//Funções aceitam qualquer tipo de dados como argumento

function imprirDados(callback){
    const retorno = callback()
    console.log(retorno)
}



const bomDia = () => `Bom dia!!!` 

imprirDados(bomDia)