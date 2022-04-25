import { Router } from "express";
import { v4 as uuidv4 } from "uuid"
import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router()
const CategoriesRepository1 = new CategoriesRepository()


categoriesRoutes.post('/', (req, res) =>{
    const { name, description} = req.body

    CategoriesRepository1.create({name, description})

    return res.status(201).json()
})

export { categoriesRoutes }