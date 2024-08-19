import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/ThemeProvider'
import { router } from './routes'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | aromatherapy.shop" />
        <RouterProvider router={router} />
        <Toaster richColors />
      </HelmetProvider>
    </ThemeProvider>
  )
}
