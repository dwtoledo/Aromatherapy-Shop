import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
