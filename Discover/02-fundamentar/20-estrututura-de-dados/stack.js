//Passo 1: Modelando
class Stack{
    constructor(){
        this.data = []
        this.top = -1
    }

    push(...values){
        for(let value of values ){
            this.top++
            this.data[this.top] = value
        }
        return this.data
    }

    pop(){
        if(this.top < 0) return undefined

        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }

    peek(){
        return this.top >= 0 ? this.data[this.top] : undefined
    }

}




//Passo 2: Utilizando
const stack = new Stack()

console.log(stack.push('JBL', 'HP', 'Dukie'))

console.log(stack.peek())

const descarte = stack.pop()

console.log(descarte)
console.log(stack.data)

console.log(stack.push('MXT'))
