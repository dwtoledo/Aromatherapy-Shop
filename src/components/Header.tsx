import { Amphora, ChartSpline, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Routes } from '@/routes'

import { NavLink } from './NavLink'

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
      </nav>
    </header>
  )
}
