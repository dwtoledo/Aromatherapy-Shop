import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/ThemeProvider'
import { router } from './routes'

export function App() {
  return (
    <ThemeProvider storageKey="aroma-therapy-shop-theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | aromatherapy.shop" />
        <RouterProvider router={router} />
        <Toaster richColors closeButton />
      </HelmetProvider>
    </ThemeProvider>
  )
}
