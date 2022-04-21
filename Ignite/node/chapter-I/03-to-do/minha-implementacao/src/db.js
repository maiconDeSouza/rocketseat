const fs = require('fs')
const path = require('path')

const arq = fs.readFileSync(path.join(__dirname, '../', 'db', 'db.json'), {encoding:'utf8'})



module.exports = arq
