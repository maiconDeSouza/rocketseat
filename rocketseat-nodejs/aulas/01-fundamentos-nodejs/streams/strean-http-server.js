import http from "node:http"
import { Transform } from "node:stream"

class Negativar extends Transform{
    _transform(chunk, encoding, callback){
        const res = String(chunk * -1)
        console.log(res)
        callback(null, Buffer.from(res))
    }
}


const server = http.createServer(async (req, res)  => {
    const buffer = []

    for await (const chunk of req){
        buffer.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffer).toString()
    console.log(fullStreamContent)

    return res.end(fullStreamContent)
    // return req
    // .pipe(new Negativar())
    // .pipe(res)
})


server.listen(1993, () => console.log("Server on..."))