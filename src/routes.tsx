import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from './pages/app/Dashboard'
import { DefaultLayout } from './pages/app/DefaultLayout'
import { NotFound } from './pages/app/NotFound'
import { SignIn } from './pages/auth/SignIn'
import { SignUp } from './pages/auth/SignUp'

export const Routes = {
  DASHBOARD: '/',
  SIGNIN: '/sign-in',
  SIGNUP: '/sign-up',
}

export const router = createBrowserRouter([
  {
    path: Routes.DASHBOARD,
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: Routes.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: Routes.SIGNIN,
        element: <SignIn />,
      },
      {
        path: Routes.SIGNUP,
        element: <SignUp />,
      },
    ],
  },
])
