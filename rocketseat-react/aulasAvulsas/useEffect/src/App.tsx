import { useEffect, useState } from "react"
import {  Root2 } from "./types"

export function App() {
  const [ list, setList ] = useState<string[]>([])
  const [ filter, setFilter ] = useState('')
  // const [ filterList, setFilterList ] = useState<string[]>([])
  useEffect(() => {
    async function loading(){
      const response = await fetch('https://api.github.com/users/diego3g/repos')
      const data = await response.json()
      setList(data.map((item: Root2) => item.full_name))
    }
    loading()
  },[])

  // useEffect(() => {
  //   setFilterList(list.filter(item => item.includes(filter)))
  // },[filter, list])

  const filterList = list.filter(item => item.includes(filter))

  return (
   <div>
    <input type="text" onChange={(e) =>  setFilter(e.target.value)} />
    <ul>
      {
        list.map(item => {
          return <li key={item}>{item}</li>
        })
      }
    </ul>
    <hr />
    <ul>
      {
        filter && (
            filterList.map(item => {
              return <li key={item}>{item}</li>
            })
        )
      }
    </ul>
   </div>
  )
}


