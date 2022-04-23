interface Course{
    nome:string 
    duration:number 
    educator:string
}

class CreateCourseService{
    execute({duration, educator, nome}:Course){
        console.log(nome, duration, educator)
    }
}

export default new CreateCourseService