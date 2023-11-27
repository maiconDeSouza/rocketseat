function somaDeIntervalo(x, y){
    const soma = x + y
    const mult = y / 2
    const result = soma * mult
    return result
  }
  
  function somaDeIntervalo2(x, y){
    const arr = []
    for(let i = x; i <= y; i++){
      arr.push(i)
    }
    const result = arr.reduce((acc, current) => {
      return acc += current
    },0)
    return result
  }
  
  const a1 = somaDeIntervalo(1, 200)
  const a2 = somaDeIntervalo2(1, 200)
  console.log(a1, a2)
  
  const b1 = somaDeIntervalo(1, 213)
  const b2 = somaDeIntervalo2(1, 213)
  console.log(b1, b2)
  
  const c1 = somaDeIntervalo(1, 213905)
  const c2 = somaDeIntervalo2(1, 213905)
  console.log(c1, c2)

  const d1 = somaDeIntervalo(1, 527)
  const d2 = somaDeIntervalo2(1, 527)
  console.log(d1, d2)