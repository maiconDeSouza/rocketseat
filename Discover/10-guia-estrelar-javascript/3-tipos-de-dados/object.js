/*
    *Object
        -Objeto
        -Propriedades / Atributos
        -Funcionalidades / Métodos

        {propriedade: 'valor'}
*/

const obj = {
    name: 'maicon',
    idade: 36,
    andar(){
        console.log(`O ${this.name} está andando`)
    }
}

obj.andar()