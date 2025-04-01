import { Link, useParams } from 'react-router'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import products from '@/database/catalog.json'
import iCatalog from '@/types/iCatalog'

export default function NavigationCategory() {
  const { category } = useParams()

  return (
    <section
      className={`relative min-h-[${category ? '' : '250px'}] ${category ? '' : 'md:min-h-[450px]'} bg-gray-600 text-white p-4 w-full flex flex-col items-center`}
    >
      <h1
        className={`text-5xl font-bold ${category ? 'py-1' : 'py-5'} ${category ? 'md:py-6' : 'md:py-15'}`}
      >
        {category || 'Produtos'}
      </h1>

      <ul className="flex gap-4 flex-wrap items-baseline justify-center ">
        {products.map(({ id, name, image, category }: iCatalog) => (
          <Link
            className="hover:opacity-70 hover:scale-105 transition-transform"
            key={id}
            to={`/produtos/categoria/${category}`}
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
