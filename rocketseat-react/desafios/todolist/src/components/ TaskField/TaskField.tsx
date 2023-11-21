import styles from './TaskField.module.css'
import clipboard from '../../../public/clipboard.png'
import { Task } from '../Task/Task'
import { Itasks } from '../../App'

interface Iprops {
    tasksList: Itasks[],
    updateTasksList: (tasksList: Itasks[]) => void
}

export function TaskField({tasksList, updateTasksList}:Iprops){

    function onIsDone(id: string){
        const newTasksList = tasksList.map(task => {
            if(task.id === id){
                task.done = !task.done
                return task
            }
            return task
        })
        updateTasksList(newTasksList)
    }

    function onDeleteTask(id: string){
        const newTasksList = tasksList.filter(task => task.id !== id)
        updateTasksList(newTasksList)
    }

    if(tasksList.length === 0){
        return (
            <div className={styles.empty}>
                <img src={clipboard} alt="" />
                <p>Você ainda Não tem tarefas Cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        )
    }
    
    if(tasksList.length > 0){
        return (
            <div className={styles.wrapper}>
                {
                    tasksList.map(task => {
                       return  <Task 
                                    task={task.task} 
                                    key={task.id} 
                                    id={task.id} 
                                    onIsDone={onIsDone} 
                                    onDeleteTask={onDeleteTask}
                                    tasksList={tasksList}
                                />
                    })
                }

            </div>
        )
    }
    
}