import MenuProducts from '@/components/MenuProducts'
import bg from '@/image/bg-selecionar-produtos.png'
import { Outlet } from 'react-router'

export default function Produtos() {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <MenuProducts />
      <Outlet />

      <div className="my-10 bg-[rgba(243,243,243,0.5)]">
        <h2 className="text-center text-2xl font-semibold">
          Explore nossos produtos incríveis
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Nossos produtos são selecionados com carinho para proporcionar a
          melhor experiência. Escolha os seus favoritos e descubra ofertas
          especiais!
        </p>
      </div>
    </section>
  )
}
