import fs from "node:fs/promises"

const dataBasePath = new URL('db.json', import.meta.url)

export class Database{
    #database = {}

    constructor(){
        fs.readFile(dataBasePath, 'utf8').then(data => {
            this.#database = JSON.parse(data)
        }).catch(() => {
            this.#parsist()
        })
    }

    #parsist(){
        fs.writeFile(dataBasePath, JSON.stringify(this.#database, null, 2))
    }

    select(table){
        const data = this.#database[table] ?? []

        return data
    }

    insert(table, data){
        if(Array.isArray(this.#database[table])){
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }
        this.#parsist()
    }

    delete(table, id){
        const data = this.#database[table]

        const valueExists = data.findIndex( value => value.id === id)

        if(valueExists >= 0){
            data.splice(valueExists, 1)
            this.#parsist()
        }
    }
}