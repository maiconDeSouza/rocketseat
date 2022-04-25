import { Router } from "express";
import { v4 as uuidv4 } from "uuid"
import { Category } from "../model/Category";

const categoriesRoutes = Router()

const categories:Category[] = []

categoriesRoutes.post('/', (req, res) =>{
    const { name, description} = req.body

    const category = new Category()

    const categoryAddOn = {
        name,
        description,
        created_at: new Date
    }

    Object.assign(category, categoryAddOn)

    categories.push(category)

    return res.status(201).json(categories)
})

export { categoriesRoutes }