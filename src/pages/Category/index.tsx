import CardItemCategory from '@/components/card-item-category'
import { products, IProduct } from '@/database/products'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function Category() {
  const [listProducts, setListProducts] = useState<IProduct[]>([])
  const { category } = useParams()

  useEffect(() => {
    if (category) {
      const filteredProducts = products.filter((e) => e.category === category)
      setListProducts(filteredProducts)
    }
  }, [category])

  return (
    <section className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listProducts.map(({ nome, subtitle, id, images }) =>
          Array.from({ length: 8 }).map((_, index) => (
            <CardItemCategory
              key={index}
              id={id}
              nome={nome}
              subtitle={subtitle}
              image={images[0]}
            />
          )),
        )}
      </div>
    </section>
  )
}
