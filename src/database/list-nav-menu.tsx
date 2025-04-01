import { Headset, House, Info, MapPinned, ShoppingBasket } from 'lucide-react'
import { ReactElement } from 'react'

export interface iListItemNav {
  label: string
  href: string
  icon?: ReactElement
}

export const listItemNav: iListItemNav[] = [
  {
    label: 'Inicio',
    href: '/',
    icon: <House />,
  },
  {
    label: 'Produtos',
    href: '/produtos',
    icon: <ShoppingBasket />,
  },
  {
    label: 'Sobre',
    href: '/sobre',
    icon: <Info />,
  },
  {
    label: 'Onde Encontrar',
    href: '/encontrar',
    icon: <MapPinned />,
  },
  {
    label: 'Suporte',
    href: '/suporte',
    icon: <Headset />,
  },
]
