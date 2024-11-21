import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from './ui/button'

import { ChevronDown } from 'lucide-react'

export function AccountMenu() {
  function handleLogOutClick() {
    // TODO - Implement user logout.
  }

  function handleStoreProfileClick() {
    // TODO - Implement go to store profile.
  }

  return (
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
  )
}
