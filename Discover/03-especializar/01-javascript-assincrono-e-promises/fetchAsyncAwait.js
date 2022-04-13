async function gitHub(){
    try {
        const db = await fetch('https://api.github.com/users/maykbrito')
        const retorno = await db.json()
        console.log(retorno)
    } catch (error) {
        console.log(error)
    }
}

gitHub()