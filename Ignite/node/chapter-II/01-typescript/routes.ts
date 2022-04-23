import {Request, Response} from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(req:Request, res:Response){
    CreateCourseService.execute({
        nome:"nodeJS",
        educator:"Dani",
        duration:10
    })

    res.send()
}