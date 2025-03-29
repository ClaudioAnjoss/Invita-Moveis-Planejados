import { Headset, House, Info, MapPinned, ShoppingBasket } from 'lucide-react'
import { ReactElement } from 'react'

export interface iListItemNav {
  title: string
  href: string
  icon?: ReactElement
}

export const listItemNav: iListItemNav[] = [
  {
    title: 'Inicio',
    href: '/',
    icon: <House />,
  },
  {
    title: 'Produtos',
    href: '/produtos',
    icon: <ShoppingBasket />,
  },
  {
    title: 'Sobre',
    href: '/sobre',
    icon: <Info />,
  },
  {
    title: 'Onde Encontrar',
    href: '/encontrar',
    icon: <MapPinned />,
  },
  {
    title: 'Suporte',
    href: '/suporte',
    icon: <Headset />,
  },
]
