// Netflix & Spotify

// Importação de clientes via CSV (Excel)
// 1gb - "1.000.000 lihas"
// Post/upload import.csv

//10mb/s - 100s

//100s -> Inserções no banco de dados

//10mb/s -> 10.000

//Readable Streams / Writable Streams

// process.stdin.pipe(process.stdout)

import { Readable, Writable, Transform } from "node:stream"

class OneToHundredStream extends Readable {
    index = 1
    _read(){
        const i = this.index++
        setTimeout(() => {
            if (i > 100){
                this.push(null)
            }else{
                const buf = Buffer.from(String(i))
                this.push(buf)
            }
        },1000)
    }
}


class Negativar extends Transform{
    _transform(chunk, encoding, callback){
        const res = Buffer.from(String(chunk * -1))
        callback(null, res)
    }
}

class Multiplicar extends Transform{
    _transform(chunk, encoding, callback){
        const res = Buffer.from(String(Number(chunk) * 10))
        callback(null, res)
    }
}

class M extends Transform{
    _transform(chunk, encoding, callback){
        const res = Buffer.from(chunk.toString() + "M")
        callback(null, res)
    }
}

class Escrever extends Writable{
    _write(chunk, encoding, callback){
        console.log(chunk.toString())
        callback()
    }
}

new OneToHundredStream()
.pipe(new Negativar())
.pipe(new Multiplicar())
.pipe(new M())
.pipe(new Escrever())