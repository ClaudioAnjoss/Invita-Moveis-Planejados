import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { dataProducts, IProduct } from '../../database/dataProducts'
import Autoplay from 'embla-carousel-autoplay'

export default function Produto() {
  const [product, setProduct] = useState<IProduct>()

  const { id } = useParams()

  useEffect(() => {
    const selectedProduct: IProduct | undefined = dataProducts.find(
      (p) => p.id === Number(id),
    )

    if (selectedProduct) setProduct(selectedProduct)

    console.log(selectedProduct)
  }, [])

  return (
    <section className="w-full">
      <div className="bg-gray-500 w-full min-h-[25vh] flex items-center justify-center">
        <h1 className="text-4xl text-gray-400 font-semibold text-center">
          Novos ares <br /> para a sua casa <br /> e sua cozinha
        </h1>
      </div>
      <div className="container mx-auto py-8 px-4 flex flex-col gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">
                <BreadcrumbLink>Inicio</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <Link to="/produtos">
              <BreadcrumbLink>Produtos</BreadcrumbLink>
            </Link>
            <BreadcrumbSeparator />
            <Link to={`/produtos/categoria/${product?.category}`}>
              <BreadcrumbLink>{product?.category}</BreadcrumbLink>
            </Link>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product?.nome}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex gap-4 justify-around">
          <Carousel
            className="w-1/2  relative"
            plugins={[
              Autoplay({
                delay: 10000,
              }),
            ]}
          >
            <CarouselContent>
              {product?.images.map((e) => (
                <CarouselItem
                  key={e}
                  className="w-full flex justify-center items-center "
                >
                  <img
                    className="w-full max-w-[400px] max-h-[300px] h-full object-cover"
                    style={{ objectPosition: 'center -50px' }}
                    src={e}
                    alt="Imagem do produto"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
              <CarouselPrevious className="cursor-pointer" />
              <CarouselNext className="cursor-pointer" />
            </div>
          </Carousel>

          <div className="w-1/2 flex flex-col gap-4 max-h-[300px] lg:max-h-[400px] overflow-y-scroll">
            <h1 className="text-2xl font-bold">{product?.nome}</h1>
            <h2 className="text-sm truncate">{product?.subtitle}</h2>
            <p className="">{product?.description}</p>

            {product?.benefits.map((b) => (
              <>
                <h2 className="font-bold">{b.title}</h2>
                <p>{b.description}</p>
              </>
            ))}
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full transition-all duration-500"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer duration-500 w-full">
              Informações técnicas
            </AccordionTrigger>
            <AccordionContent>
              {product?.technicalInformation.map(({ title, description }) => (
                <div key={title} className="flex justify-between border p-4">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="cursor-pointer duration-500">
              Downloads
            </AccordionTrigger>
            <AccordionContent>
              Adega Invita inox 16 Garrafas Bivolt Manual do Consumidor Gabarito
              Guia Comercial Certificação Inmetro
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
