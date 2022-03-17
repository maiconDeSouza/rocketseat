const timeOut = 5000
const finished = () => console.log('done!')

const timer = setTimeout(finished, timeOut)
console.log('Mostrar')
clearTimeout(timer)