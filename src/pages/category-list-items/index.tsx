import products from '@/database/catalog.json'
import iCatalog from '@/types/iCatalog'
import { Link } from 'react-router'

export default function CategoryListItems() {
  return (
    <div className=" px-4  hidden sm:block">
      <div className="overflow-hidden grid grid-cols-3 gap-2 rounded-[100px] max-w-[900px] mx-auto mt-[-50px] ">
        {products.map(({ id, name, image }: iCatalog) => (
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
