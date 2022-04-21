const fs = require('fs')
const path = require('path')

function escrever(valor){
    fs.writeFileSync(path.join(__dirname, '../', 'db', 'db.json'), valor)
}

module.exports = escrever