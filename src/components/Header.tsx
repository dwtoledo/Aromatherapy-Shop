import { Amphora } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Routes } from '@/routes'

export function Header() {
  const navigate = useNavigate()

  function handleLogoClick() {
    navigate(Routes.DASHBOARD)
  }

  return (
    <header>
      <nav>
        <span
          className="flex items-center gap-1 hover:cursor-pointer"
          onClick={handleLogoClick}
        >
          <Amphora />
          Aromatherapy Shop
        </span>
      </nav>
    </header>
  )
}
