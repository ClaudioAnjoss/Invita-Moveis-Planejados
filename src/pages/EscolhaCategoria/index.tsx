import products from '@/pages/Produtos/products.json'
import { Link } from 'react-router'
import { iMenuProducts } from '../Produtos/iMenuProducts'

export default function EscolhaCategoria() {
  return (
    <div className=" px-4 h-[70vh]">
      <div className="overflow-hidden grid grid-cols-3 gap-2 rounded-[100px] max-w-[900px] mx-auto mt-[-50px] ">
        {products.map(({ id, name, image }: iMenuProducts) => (
          <Link key={id} to={`/produtos/categoria/${name}`}>
            <div className="cursor-pointer group flex flex-col items-center relative bg-black/30">
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
          </Link>
        ))}
      </div>
    </div>
  )
}
