import { Post } from "./components/Post/Post"
import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"

import styles from './App.module.css'


const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/67662178?v=4',
      name: 'Maicon Souza',
      role: 'Developer'
    },
    content:[
      {
        tag: 'paragraph',
        text: 'Fala galeraa 👋'
      },
      {
        tag: 'paragraph',
        text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      }
    ],
    publishedAt: new Date('2023-09-17 20:00:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10332/pug-cursos-cpt.jpg',
      name: 'Dante',
      role: 'Quadrilha do Auau'
    },
    content:[
      {
        tag: 'paragraph',
        text: 'Au Au Au'
      },
      {
        tag: 'paragraph',
        text: 'rerererere'
      }
    ],
    publishedAt: new Date('2023-09-17 20:30:00')
  }
  
]


export function App() {
  return (
    <>
    <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post  => {
              return <Post post={post} key={post.id}/>
            })
          }
        </main>
      </div>
    </>
  )
}



 