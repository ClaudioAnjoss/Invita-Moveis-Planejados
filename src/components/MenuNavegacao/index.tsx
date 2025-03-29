import { Link, useLocation } from 'react-router'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Menu } from 'lucide-react'
import { listItemNav } from './ListaDeNavegacao'

export default function MenuNavegacao() {
  const { pathname } = useLocation()

  return (
    <header className="bg-secondary w-full h-[94px] sticky top-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-2">
        <Link to="/">
          <img
            className="hover:scale-105 duration-500"
            src="/image/LogoClara.png"
            alt="Logo da Invita"
          />
        </Link>
        <div className="text-primary  gap-2 hidden md:flex transition-all duration-1000">
          {listItemNav.map(({ title, href }) => (
            <Link key={title} to={href}>
              <div className="flex items-center gap-1 hover:scale-105 duration-500 mx-2">
                <button
                  className={`text-lg  cursor-pointer ${pathname === href ? 'border-b-2 font-bold' : 'font-light'} py-0.5`}
                >
                  {title}
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger className="block md:hidden text-primary p-2 border rounded cursor-pointer hover:bg-primary hover:text-secondary duration-400">
            <Menu className="" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" md:hidden mr-10">
            {listItemNav.map(({ title, href, icon }) => (
              <Link key={title} to={href}>
                <DropdownMenuItem
                  className={`cursor-pointer py-2 px-4 ${pathname === href && 'bg-primary  hover:bg-none'}`}
                >
                  {icon}
                  {title}
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
