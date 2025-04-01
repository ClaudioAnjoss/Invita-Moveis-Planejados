import NavigationCategory from '@/components/navigation-category'
import bg from '@/image/bg-suporte.png'
import bg2 from '@/image/frame-bg-forno.png'
import { Outlet, useParams } from 'react-router'

export default function ProductNavigation() {
  const { id } = useParams()
  return (
    <section
      className="w-full min-h-[75vh] flex flex-col justify-between bg-gray-100"
      style={{
        backgroundImage: `url(${bg}), url(${bg2})`,
        backgroundSize: '600px, 500px',
        backgroundPosition: 'left 200px, right 170px',
        backgroundRepeat: 'no-repeat, no-repeat',
      }}
    >
      {!id && <NavigationCategory />}

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
