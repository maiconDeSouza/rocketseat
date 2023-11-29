import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout'
import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout'
import { Success } from '../pages/Success'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Checkout />,
        path: '/checkout',
      },
      {
        element: <Success />,
        path: '/success',
      },
    ],
  },
])
