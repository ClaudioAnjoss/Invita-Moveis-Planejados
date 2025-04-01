import { Link, useLocation } from 'react-router'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Menu } from 'lucide-react'
import { listItemNav } from '../../database/list-nav-menu'
import GooeyNav from '../ui/_react-bits/gooey-nav'

export default function NavitationMenu() {
  const { pathname } = useLocation()

  return (
    <header className="bg-secondary w-full h-[94px] sticky top-0 z-50 overflow-hidden">
      <div className="container mx-auto h-full flex items-center justify-between px-2">
        <Link to="/">
          <img
            className="hover:scale-105 duration-500"
            src="/image/LogoClara.png"
            alt="Logo da Invita"
          />
        </Link>
        <div className="text-primary  gap-2 hidden md:flex transition-all duration-1000">
          <GooeyNav
            items={listItemNav}
            animationTime={400}
            timeVariance={600}
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="block md:hidden text-primary p-2 border rounded cursor-pointer hover:bg-primary hover:text-secondary duration-400">
            <Menu className="" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" md:hidden mr-10">
            {listItemNav.map(({ label, href, icon }) => (
              <Link key={label} to={href}>
                <DropdownMenuItem
                  className={`cursor-pointer py-2 px-4 ${pathname === href && 'bg-primary  hover:bg-none'}`}
                >
                  {icon}
                  {label}
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
