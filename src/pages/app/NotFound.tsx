import { Helmet } from 'react-helmet-async'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function NotFound() {
  return (
    <>
      <Helmet title="Page Not Found" />
      <Header />
      <h1>404 - Page Not Found</h1>
      <Footer />
    </>
  )
}
