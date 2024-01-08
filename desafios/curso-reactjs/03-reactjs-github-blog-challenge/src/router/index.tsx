import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout'
import { Home } from '../pages/Home'
import { Post } from '../pages/Post'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Post />,
        path: '/post/:id',
      },
    ],
  },
])
