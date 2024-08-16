import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from './pages/app/Dashboard'
import { DefaultLayout } from './pages/app/DefaultLayout'
import { NotFound } from './pages/app/NotFound'
import { Login } from './pages/auth/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
])
