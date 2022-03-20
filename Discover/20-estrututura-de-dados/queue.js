//Passo 1: Modelando
class Queue{
    constructor(){
        this.data = []
        
    }

    enqueue(...values){
        for(let value of values ){
            
            this.data.push(value)
        }
        return this.data
    }

    dequeue(){
      return this.data.shift()
    }

    p

}



//Passo 2: Utilizando
const queue = new Queue()

console.log(queue.enqueue('JBL', 'HP', 'Dukie'))



const descarte = queue.dequeue()

console.log(descarte)
console.log(queue.data)

