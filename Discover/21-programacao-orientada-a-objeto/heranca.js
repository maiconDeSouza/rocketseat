class Veiculo{
    rodas = 4
    portas = 4

    mover(direcao){
        return direcao
    }
    virar(direcao){
        return direcao
    }
}

class Moto extends Veiculo{
    constructor(rodas, portas){
        super()
        this.rodas = rodas
        this.portas = portas
    }

}

const suzuki = new Moto(2, 0)

console.log(suzuki)
console.log(suzuki.mover('frente'))