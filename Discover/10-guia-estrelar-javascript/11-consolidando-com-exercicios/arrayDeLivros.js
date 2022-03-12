/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
]

function numerosDecategorias(booksByCategory){
    let qtdCategorias = 0
    booksByCategory.forEach(element => {
        if(element.category){
            qtdCategorias++
        }
    })
    return qtdCategorias
}

function totalDeLivros(booksByCategory){
    const newObj = {}

    booksByCategory.forEach(element => {    
        newObj[element.category] = element.books.length
    })

    return newObj
}


function desafio1(booksByCategory){
    const res = `Número de Categorias : ${numerosDecategorias(booksByCategory)}
Livros por categorias : ${JSON.stringify(totalDeLivros(booksByCategory))}`

                 console.log(res)
}

// desafio1(booksByCategory)


function contarNumerosDeAutores(booksByCategory){
    const arrayAutores = []
    booksByCategory.forEach(e => {
        e.books.forEach(e => {
            const teste = arrayAutores.includes(e.author)
            if(!teste){arrayAutores.push(e.author)}
        })
        
    })

    return arrayAutores.length
}

function numerosDeAutores(booksByCategory){
    const res = contarNumerosDeAutores(booksByCategory)

    console.log(`Número de autores: ${res}`)
}

// numerosDeAutores(booksByCategory)

function mostrarLivrosPorAutor(nome){
    const livros = []
    booksByCategory.forEach(e => {
        e.books.forEach(e => {
            if(e.author === nome){livros.push(e.title)}
            
        })
    })

   console.log(livros)
}

mostrarLivrosPorAutor('T. Harv Eker')