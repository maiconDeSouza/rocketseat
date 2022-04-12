const {EventEmitter} = require('events')

const ev = new EventEmitter()

ev.on('saySomething', (msg) =>{
    console.log(`Eu ouvi você ${msg}`)
})

ev.emit('saySomething', 'Dante')
ev.emit('saySomething', 'Felipe')



