import MenuProducts from '@/components/MenuProducts'
import products from './products.json'
import { iMenuProducts } from './iMenuProducts'
import bg from '@/image/bg-selecionar-produtos.png'

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
      <div className=" px-4 h-[70vh]">
        <div className="overflow-hidden grid grid-cols-3 gap-2 rounded-[100px] max-w-[900px] mx-auto mt-[-50px] ">
          {products.map(({ id, name, image }: iMenuProducts) => (
            <div
              key={id}
              className="cursor-pointer group flex flex-col items-center relative bg-black/30"
            >
              <img
                className="w-full h-auto object-contain"
                src={image}
                alt={name}
              />
              <span
                className="opacity-0 group-hover:opacity-100 duration-300 flex items-center pl-14 shadow truncate text-lg absolute uppercase font-light bottom-0 h-12 bg-white w-full"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
              >
                {name.length > 20 ? `${name.substring(0, 20)}...` : name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 bg-[rgba(243,243,243,0.5)]">
        {/* Algumas informações extras ou mensagem */}
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
