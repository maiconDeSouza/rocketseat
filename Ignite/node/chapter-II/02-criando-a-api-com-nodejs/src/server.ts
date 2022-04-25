import express from 'express'
import {categoriesRoutes} from './routes/categories.routes'
const PORT = 1992

const app = express()

app.use(express.json())

app.use("/categories",categoriesRoutes)


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`))