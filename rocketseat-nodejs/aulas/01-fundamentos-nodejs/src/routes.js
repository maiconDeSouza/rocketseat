import { randomUUID } from "node:crypto"

import { Database } from "./db/database.js"
import { buildRoutePath } from "./utils/build-route-path.js"

const database = new Database()


export const routes = [
    {
        method: "GET",
        path: buildRoutePath("/users"),
        handler: tableUsers
    },
    {
        method: "POST",
        path: buildRoutePath("/users"),
        handler: addUsers
    },
    {
        method: "DELETE",
        path: buildRoutePath("/users/:id"),
        handler: deleteUser
    }
]


function tableUsers(req, res){
    const tableUsers = database.select("users")

    return res.end(JSON.stringify(tableUsers))
}

function addUsers(req, res){
    const { name, email } = req.body

        const user = {
            id: randomUUID(),
            name,
            email
        }

        database.insert("users", user)

        return res
        .writeHead(201)
        .end(JSON.stringify({msm:"Crated"}))
}


function deleteUser(req, res){
    const  {id}  = req.params


    database.delete("users", id)

    res
    .writeHead(204)
    .end(JSON.stringify({msg: "deleted"}))
}