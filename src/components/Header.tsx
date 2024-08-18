import { Amphora } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  function handleLogoClick() {
    navigate('/')
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
