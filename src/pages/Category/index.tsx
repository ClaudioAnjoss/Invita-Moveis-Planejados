import { Separator } from '@/components/ui/separator'
import { dataProducts, IProduct } from '@/database/dataProducts'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

export default function Category() {
  const [listProducts, setListProducts] = useState<IProduct[]>([])
  const { category } = useParams()

  useEffect(() => {
    if (category) {
      const filteredProducts = dataProducts.filter(
        (e) => e.category === category,
      )
      setListProducts(filteredProducts)
    }
  }, [])

  return (
    <section className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listProducts.map(({ nome, subtitle, id, images }) => (
          <div
            key={id}
            className="flex flex-col justify-between bg-white shadow-lg rounded-2xl p-4 transition-transform hover:scale-105"
          >
            <div className="w-full h-48 overflow-hidden rounded-xl">
              <img
                src={images[0]}
                alt={nome}
                className="w-full h-full object-cover"
              />
            </div>
            <Separator />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{nome}</h2>
              <p className="text-gray-500 text-sm truncate">{subtitle}</p>
              <Link to={`/produtos/${id}`}>
                <button className="w-full cursor-pointer mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Ver detalhes
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
