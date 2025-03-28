import { Link } from 'react-router'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { iMenuProducts } from '@/pages/Produtos/iMenuProducts'
import products from '@/pages/Produtos/products.json'

export default function MenuProducts() {
  return (
    <section className="relative h-[50vh]  bg-gray-600 text-white p-4 w-full flex flex-col items-center">
      <h1 className="text-5xl font-bold py-15">Produtos</h1>
      <ul className="flex gap-4 mt-4">
        {products.map(({ id, name, image }: iMenuProducts) => (
          <Link
            className="hover:opacity-70 hover:scale-105 transition-transform"
            key={id}
            to={`/produtos/${id}`}
          >
            <li className=" flex flex-col items-center text-wrap max-w-[120px] text-center">
              <Avatar className="w-[100px] h-[100px] border p-0.5 ">
                <AvatarImage className="rounded-full" src={image} />
              </Avatar>
              <span className="text-lg font-semibold">{name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}
