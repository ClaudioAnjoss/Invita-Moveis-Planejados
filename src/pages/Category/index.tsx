import { Button } from '@/components/ui/_shadcn/button'
import { Link } from 'react-router'
import CardItemCategory from '@/components/card-item-category'

export default function Category() {
  return (
    <section className="container mx-auto p-4 flex flex-col">
      <Button className="ml-auto" variant={'ghost'}>
        <Link to={'/produtos'}>Limpar filtros</Link>
      </Button>

      <div className="w-full">
        <CardItemCategory />
      </div>
    </section>
  )
}
