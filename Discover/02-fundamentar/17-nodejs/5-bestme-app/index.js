const questions = [
    'O que aprendi hoje?',
    'o que me deixou aborrecido? o que eu poderia fazer para melhorar?',
    'o que me deixou feliz hoje?',
    'quantas pessoas ajudei hoje?'
]

const ask = (index = 0) =>{
    process.stdout.write('\n\n'+ questions[index] + '>')
}

ask()

const answers = []

process.stdin.on('data', data =>{
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    } else{
        console.log(answers)
        process.exit()
    }
    
})