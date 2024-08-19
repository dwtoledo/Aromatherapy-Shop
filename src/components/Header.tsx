import { Amphora, ChartSpline, Home } from 'lucide-react'

import { Routes } from '@/routes'

import { NavLink } from './NavLink'
import { ThemeToggle } from './theme/ThemeToggle'

export function Header() {
  return (
    <header>

      <div className="flex items-center gap-2">
        <Amphora />
        <span><b>aromatherapy</b>.shop</span>
      </div>

      <nav>
        <NavLink to={Routes.DASHBOARD}>
          <Home />
          Home
        </NavLink>
        <NavLink to={Routes.ORDERS}>
          <ChartSpline />
          Orders
        </NavLink>
        <ThemeToggle />
      </nav>
    </header>
  )
}
