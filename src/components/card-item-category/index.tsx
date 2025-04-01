import { Separator } from '@radix-ui/react-separator'
import { Link } from 'react-router'

interface iCardItemCategory {
  nome: string
  image: string
  subtitle: string
  id: number
}

export default function CardItemCategory({
  nome,
  image,
  subtitle,
  id,
}: iCardItemCategory) {
  return (
    <div className="flex flex-col justify-between bg-white shadow-lg rounded-2xl p-4 transition-transform hover:scale-105">
      <div className="w-full h-48 overflow-hidden rounded-xl">
        <img src={image} alt={nome} className="w-full h-full object-cover" />
      </div>
      <Separator />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{nome}</h2>
        <p className="text-gray-500 text-sm truncate">{subtitle}</p>
        <Link to={`/produtos/${id}`}>
          <button className="w-full cursor-pointer mt-3 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
            Ver detalhes
          </button>
        </Link>
      </div>
    </div>
  )
}
