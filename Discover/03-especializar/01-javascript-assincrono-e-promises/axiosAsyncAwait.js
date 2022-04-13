async function gitHub(){
    try {
        const db = await axios.get('https://api.github.com/users/maykbrito')
        console.log(db.data)
    } catch (error) {
        console.log(error)
    }
}

gitHub()