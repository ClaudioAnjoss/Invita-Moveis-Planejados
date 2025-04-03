import { Link, useParams } from 'react-router'
import { Avatar, AvatarImage } from '@/components/ui/_shadcn/avatar'
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
              <Avatar className="max-w-[100px] min-w-[70px] max-h-[100px] min-h-[70px] border p-0.5 ">
                <AvatarImage className="rounded-full" src={image} />
              </Avatar>
              <span className="text-sm md:text-lg font-semibold truncate md:whitespace-normal max-w-[100px] ">
                {name}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}
