import Footer from '@/components/footer'
import NavitationMenu from '@/components/navigation-menu'
import { Outlet } from 'react-router'
import { Toaster } from 'sonner'

export default function Structure() {
  return (
    <main className="relative w-full min-h-screen  flex flex-col justify-between items-center">
      <NavitationMenu />
      <Outlet />
      <Footer />
      <Toaster />
    </main>
  )
}
