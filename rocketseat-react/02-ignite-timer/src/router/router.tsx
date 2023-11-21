import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { History } from '../pages/History/History'
import { DefaultLayout } from '../layout/DefaultLayout'

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <History />,
        path: '/history',
      },
    ],
  },
])
