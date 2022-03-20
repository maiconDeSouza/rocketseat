class Poligono{
    constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }

    get area(){
        return this.#calcularArea()
    }

    #calcularArea(){
        return this.altura * this.largura
    }
}


const cal = new Poligono(5,5)



console.log(cal.area)