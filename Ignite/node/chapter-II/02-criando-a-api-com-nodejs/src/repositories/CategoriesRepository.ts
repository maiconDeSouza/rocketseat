import { Category } from "../model/Category"

interface ICresteCategoryDTO{
    name:string
    description:string
}

class CategoriesRepository{
    private categories:Category[] 

    constructor(){
        this.categories = []
    }

    create({name, description} : ICresteCategoryDTO):void{
        const category = new Category()

    const categoryAddOn = {
        name,
        description,
        created_at: new Date
    }

    Object.assign(category, categoryAddOn)

    this.categories.push(category)
    }
}

export { CategoriesRepository }