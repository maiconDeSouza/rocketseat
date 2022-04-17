import React, {useState, useEffect} from 'react'
import './style.css'
import Card from '../../components/Card'



function Home() {
  const [studentName, setStudentName] = useState('')
  const [student, setStudent] = useState([])
  const [user, setUser] = useState({name: '', avatar: ''})

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute:'2-digit',
        second:'2-digit'
      })
    }
    setStudent(prev =>[...prev,newStudent])
    
    
  }
  
  useEffect( ()=>{
    fetch('https://api.github.com/users/maiconDeSouza')
    .then(res => res.json())
    .then(data => {
      setUser({name:data.name, avatar:data.avatar_url})
    })
    
  }, [])
  return (
    <div className='container'>
      <header>
      <h1>Lista de Estudantes</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="foto de perfil" />
      </div>
      </header>
      <input type="text" onChange={e => setStudentName(e.target.value)} placeholder="Digite um nome"/>
      <button onClick={handleAddStudent}>Enviar</button>

      {
        student.map(st => <Card name={st.name} time={st.time} key={st.time}/>)
      }
    </div>
    
  )
}

export default Home
