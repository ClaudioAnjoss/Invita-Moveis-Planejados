import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { IProduct, products } from '@/database/products'
import { Link, useParams } from 'react-router'
import { Separator } from '../ui/_shadcn/separator'
import Carousel from '../ui/_react-bits/carousel'

type AnimatedItemProps = {
  children?: React.ReactNode
  delay?: number
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.5 })
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer"
    >
      {children}
    </motion.div>
  )
}

type CardItemCategoryProps = {
  className?: string
  itemClassName?: string
  displayScrollbar?: boolean
}

const CardItemCategory: React.FC<CardItemCategoryProps> = ({
  className = '',
}) => {
  const listRef = useRef<HTMLDivElement>(null)
  const [listProducts, setListProducts] = useState<IProduct[]>([])
  const { category } = useParams<{ category: string }>()

  useEffect(() => {
    if (category) {
      setListProducts(products.filter((e) => e.category === category))
    }
  }, [category])

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={listRef}
        className={`flex flex-wrap gap-4 items-center justify-center overflow-y-auto p-4`}
      >
        {Array.from({ length: 8 }).map((_, index) =>
          listProducts.map(({ id, nome, subtitle, images }) => (
            <AnimatedItem key={`${id}-${index}`} delay={0.1}>
              <div className="bg-white flex flex-col gap-4 p-5 rounded-2xl shadow-lg max-w-[320px] items-center border border-gray-200">
                {/* Carrossel de Imagens */}
                <Carousel
                  images={images}
                  baseWidth={320}
                  pauseOnHover
                  loop
                  round
                />

                <Separator />

                {/* Título e Descrição */}
                <div className="text-center px-3">
                  <h2 className="text-xl font-bold text-gray-800">{nome}</h2>
                  <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
                </div>

                {/* Botão de Ação */}
                <Link to={`/produtos/${id}`} className="w-full">
                  <button className="w-full cursor-pointer mt-3 bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition duration-300 shadow-md">
                    Ver detalhes
                  </button>
                </Link>
              </div>
            </AnimatedItem>
          )),
        )}
      </div>
    </div>
  )
}

export default CardItemCategory
