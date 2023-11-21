import { Trash2 } from 'lucide-react'
import styles from './Task.module.css'
import { ChangeEvent, useEffect, useState } from 'react'
import { Itasks } from '../../App'


interface  Iprops{
    task: string
    id: string
    onIsDone: (id: string) => void
    onDeleteTask: (id: string) => void
    tasksList: Itasks[]
}
export function Task({task, id, onIsDone, onDeleteTask, tasksList}:Iprops){
    const [isChecked, setIsChecked] = useState(false)
    
    function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>){
        setIsChecked(event.target.checked)
        onIsDone(id)
    }
    function handleDelteTask(){
        onDeleteTask(id)
    }

    useEffect(() => {
        tasksList.forEach(task => {
            if(task.id === id){
                setIsChecked(task.done)
            }
        })
    })

    return (
        <div className={styles.wrapper}>
            <input 
                type="checkbox" 
                name="check" id="check" 
                placeholder='oi'
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <p>{task}</p>
            <Trash2 size={18} onClick={handleDelteTask}/>
        </div>
    )
}