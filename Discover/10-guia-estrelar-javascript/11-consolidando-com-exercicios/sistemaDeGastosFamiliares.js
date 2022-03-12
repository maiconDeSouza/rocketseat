/* 
    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.

*/

function soma(array){
    const soma = array.reduce((acc, atual) =>{
        return acc += atual
    })
    return soma
}

function positivoNegativo(resultado){
    if(resultado > 0){
        console.log(`Mês positvo ${resultado}`)
    } else{
        console.log(`Mês negativo ${resultado}`)
    }
}

const contasFamiliars = {
    receitas: [0],
    despesas: [0],
    fechamentoDoMes(){
        const receitas = soma(this.receitas)
        const despesas = soma(this.despesas)
        const res = receitas - despesas

        positivoNegativo(res)
    }
}

contasFamiliars.receitas.push(100)
contasFamiliars.receitas.push(1000)
contasFamiliars.receitas.push(2200)
contasFamiliars.receitas.push(570)
contasFamiliars.receitas.push(10)
contasFamiliars.receitas.push(99)


contasFamiliars.despesas.push(890)
contasFamiliars.despesas.push(1890)
contasFamiliars.despesas.push(290)



contasFamiliars.fechamentoDoMes()