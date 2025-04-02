import CardItemCategory from '@/components/card-item-category'
import AnimatedContent from '@/components/ui/_react-bits/animated-content'
import { Button } from '@/components/ui/button'
import { products, IProduct } from '@/database/products'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

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
    <section className="container mx-auto p-4 flex flex-col">
      <Button className="ml-auto" variant={'ghost'}>
        <Link to={'/produtos'}>Limpar filtros</Link>
      </Button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listProducts.map(({ nome, subtitle, id, images }) =>
          Array.from({ length: 8 }).map((_, index) => (
            <AnimatedContent
              key={index}
              distance={150}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <CardItemCategory
                id={id}
                nome={nome}
                subtitle={subtitle}
                image={images[0]}
              />
            </AnimatedContent>
          )),
        )}
      </div>
    </section>
  )
}
