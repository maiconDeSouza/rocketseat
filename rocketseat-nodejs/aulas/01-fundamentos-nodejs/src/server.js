import http from "node:http"


import { json } from "./middleware/json.js"
import { routes } from "./routes.js"


const server = http.createServer(async(req, res) => {
    const { method, url } = req

    await json(req, res)

    

    const route = routes.find( route => {
       return route.method === method && route.path.test(url)
    })

    

    if(route){
       const routeParams = req.url.match(route.path)
       
       req.params = {...routeParams.groups}
      
       return route.handler(req, res)
    }
    res.writeHead(404).end("404")
})

server.listen(1992, () => console.log("server on..."))