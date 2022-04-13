fetch('https://api.github.com/users/maykbrito')
.then(res => res.json())
.then(data => console.log(data))
.catch(erro => console.log(erro))