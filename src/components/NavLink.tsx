import { Link, LinkProps, useLocation } from 'react-router-dom'

type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-active={props.to === pathname}
      className="flex items-center gap-2 hover:cursor-pointer text-muted-foreground hover:text-foreground data-[active=true]:text-foreground"
      {...props}
    />
  )
}
