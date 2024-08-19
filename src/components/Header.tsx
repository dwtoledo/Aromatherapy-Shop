import { Amphora, ChartSpline, ChevronDown, Home } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Routes } from '@/routes'

import { NavLink } from './NavLink'
import { ThemeToggle } from './theme/ThemeToggle'
import { Button } from './ui/button'

export function Header() {
  function handleLogOutClick() {
    console.log('user logout!')
    // TODO - Implement user logout.
  }

  function handleStoreProfileClick() {
    console.log('go to store profile!')
    // TODO - Implement go to store profile.
  }

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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-2" variant="outline">
              aromatherapy.shop
              <ChevronDown />
            </Button>

          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="flex flex-col">
              <span>My name</span>
              <span className="text-xs font-normal text-muted-foreground">
                My e-mail
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleStoreProfileClick}>
              Store Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogOutClick}>
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </nav>
    </header>
  )
}
