import { Plus } from 'lucide-react'
import styles from './NewTask.module.css'
import { ChangeEvent, useState } from 'react'

interface Iprops {
    createTask: (task: string) => void
}

export function NewTask({createTask}:Iprops){
    const [task, setTask] = useState('')

    function handleTaskValue(event: ChangeEvent<HTMLInputElement>){
        const value = event.target.value
        setTask(value)
    }

    function handleCreatetask(){
        if(task !== ''){
            createTask(task)
            setTask('')
        }
    }

    return (
        <div className={styles.wrapper}>
            <input type="text" onChange={handleTaskValue} value={task}  placeholder='Adicione uma nova tarefa'/>
            <button onClick={handleCreatetask}>
                Criar
                <span>
                    <Plus size={24}/>
                </span>
            </button>
        </div>
    )
}