import { Link } from 'react-router'
import listNav from './ListaDeNavegacao.json'
import { Button } from '../ui/button'

export default function MenuNavegacao() {
  return (
    <header className="bg-secondary w-full h-[94px] sticky top-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-2">
        <Link to="/">
          <img src="/image/LogoClara.png" alt="Logo da Invita" />
        </Link>
        <div className="text-primary flex gap-1">
          {listNav.map(({ title, href }) => (
            <Link key={title} to={href}>
              <Button className="cursor-pointer" variant={'ghost'}>
                {title}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
