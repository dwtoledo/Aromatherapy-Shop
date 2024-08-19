import { Helmet } from 'react-helmet-async'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Header />
      <main className="flex-1">
        <Helmet title="Page Not Found" />
        <h1>404 - Page Not Found</h1>
      </main>
      <Footer />
    </div>
  )
}
