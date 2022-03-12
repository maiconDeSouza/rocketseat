{
    const nome = 'Maicon' 
    //let nome = 'Maicon' //Let e const tem scope de bloco
}

// console.log(nome)


let y = 1

{
    {
        {
            {
                {
                    y = 0 
                }
            }
        }
    }
}

console.log(y)