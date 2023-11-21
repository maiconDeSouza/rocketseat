import { v4 as uuidv4 } from 'uuid'

import { Header } from './components/Header/Header'
import { NewTask } from './components/NewTask/NewTask'
import { InfoTasks } from './components/InfoTasks/InfoTasks'
import { TaskField } from './components/ TaskField/TaskField'

import styles from './App.module.css'
import { useEffect, useState } from 'react'

export interface Itasks {
  id: string
  task: string
  done: boolean
}

export function App() {
  const [ tasksList, setTasksList ] = useState<Itasks[]>([])

  useEffect(() => {
    const localTasks = localStorage.getItem('localtasks')

    const parsedData: Itasks[] = localTasks ? JSON.parse(localTasks) : []

    if(parsedData.length > 0){
      setTasksList(parsedData)
    }
  }, [])

  function createTask(task: string){
    const newtask = {
      id: uuidv4() ,
      task,
      done: false
    }
    setTasksList([...tasksList, newtask])
    localStorage.setItem('localtasks', JSON.stringify(tasksList))
  }

  function updateTasksList(tasksList: Itasks[]){
    setTasksList(tasksList)
    localStorage.setItem('localtasks', JSON.stringify(tasksList))
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
        <NewTask createTask={createTask}/>
        <div className={styles.tasks}>
          <InfoTasks tasksList={tasksList}/>
          <TaskField tasksList={tasksList} updateTasksList={updateTasksList}/>
        </div>
      </div>
    </>
  )
}
