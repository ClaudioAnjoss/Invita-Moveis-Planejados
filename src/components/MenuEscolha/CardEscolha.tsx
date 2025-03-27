interface CardEscolhaProps {
  titulo: string
  imagem: string
  className?: string
}

export default function CardEscolha({
  titulo,
  imagem,
  className,
}: CardEscolhaProps) {
  return (
    <div
      className={`group relative overflow-hidden transition-all cursor-pointer w-full h-full flex items-center justify-center ${className}`}
      style={{
        backgroundImage: `url(${imagem})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <img
        className="relative z-10 max-w-10 max-h-[33px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        src="/image/in.png"
        alt="In"
      />
      <span className="relative z-10 text-[40px] font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {titulo.slice(2)}
      </span>
    </div>
  )
}
