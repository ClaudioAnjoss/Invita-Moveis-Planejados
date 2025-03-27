import MenuNavegacao from '@/components/MenuNavegacao'
import Rodape from '@/components/Rodape'
import { Outlet } from 'react-router'
import { Toaster } from 'sonner'

export default function PaginaPrincipal() {
  return (
    <main className="relative w-full min-h-screen  flex flex-col justify-between items-center">
      <MenuNavegacao />
      <Outlet />
      <Rodape />
      <Toaster />
    </main>
  )
}
