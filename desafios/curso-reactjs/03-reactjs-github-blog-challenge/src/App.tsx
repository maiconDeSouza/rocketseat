import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { PostsProvider } from './contexts/PostsContext'

export function App() {
  return (
    <PostsProvider>
      <RouterProvider router={router} />
    </PostsProvider>
  )
}
