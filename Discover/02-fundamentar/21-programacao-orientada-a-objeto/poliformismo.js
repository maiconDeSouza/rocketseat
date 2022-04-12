class Atleta{
    peso
    categoria

    constructor(peso){
        this.peso = peso
    }

    get definirCategoria(){
       return this.#definirCategoria()
    }

    #definirCategoria(){
        if(this.peso <= 50){
            return this.categoria = 'Infantil'
        }

        if(this.peso <= 65){
            return this.categoria = 'Juvenil'
        }

        if(this.peso > 65){
            return this.categoria = 'Adulto'
        }
    }
}


class Lutador extends Atleta{
    constructor(peso){
        super(peso)
    }

    get definirCategoria(){
        return this.#definirCategoria()
     }
 

    #definirCategoria(){
        if(this.peso <= 50){
            return this.categoria = 'Pena'
        }

        if(this.peso <= 85){
            return this.categoria = 'Medio'
        }

        if(this.peso > 85){
            return this.categoria = 'Pesado'
        }
    }
}

const popo = new Lutador(76)

console.log(popo.definirCategoria)
console.log(popo)