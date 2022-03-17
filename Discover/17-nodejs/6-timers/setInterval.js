let x = 1
const tempo = 1000
const contador = () => {
    console.log(x++)
    if(x > 60){
        clearInterval(obj)
    }
}


let obj = setInterval(contador, tempo)
