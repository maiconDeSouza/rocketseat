import { useEffect, useState } from 'react'
import { Itasks } from '../../App'
import styles from './InfoTasks.module.css'

interface Iprops {
    tasksList: Itasks[]
}

export function InfoTasks({tasksList}:Iprops){
    const [ createdTasks, setCreatedTasks ] = useState(0)
    const [ completed, setCompleted ] = useState(0)
    useEffect(() => {
        const valueTasks = tasksList.length
        const ValueCompleted = tasksList.filter(task => task.done).length
        setCreatedTasks(valueTasks)
        setCompleted(ValueCompleted)
    }, [tasksList])

    return (
        <div className={styles.wrapper}> 
            <div className={styles.created}>
                Tarefas criadas
                <span>{createdTasks}</span>
            </div>
            <div className={styles.done}>
                Concluídas
                <span>{createdTasks} de {completed}</span>
            </div>
        </div>
    )
}