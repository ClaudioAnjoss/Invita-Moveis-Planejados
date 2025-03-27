import { Button } from '../ui/button'
import CardEscolha from './CardEscolha'

export default function MenuEscolha() {
  return (
    <section className="flex flex-col w-full max-w-6xl gap-4 relative">
      <div className="flex gap-2  h-[50vh] sm:h-[90vh]  ">
        <div className="w-full">
          <CardEscolha
            titulo="indepedente"
            imagem="/image/casal-forno.png"
            className="rounded-tl-[100px]"
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <CardEscolha
            titulo="incrível"
            imagem="/image/pao-forno.png"
            className="rounded-tr-[100px]"
          />
          <CardEscolha
            titulo="inteligente"
            imagem="/image/cozinha.png"
            className="rounded-br-[100px]"
          />
        </div>
      </div>
      <div className="h-[40vh] flex gap-2">
        <CardEscolha
          titulo="instagramável"
          imagem="/image/boca-foga.png"
          className="rounded-bl-[100px]"
        />
        <CardEscolha
          className="hidden md:flex"
          titulo="interessante"
          imagem="/image/cozinha-verde.png"
        />
        <CardEscolha
          titulo="intimista"
          imagem="/image/fogao-inox.png"
          className="rounded-tr-[100px]"
        />
      </div>
      <Button className="cursor-pointer hover:bg-green-900 absolute bottom-[-50px] right-0 w-[270px] sm:w-[350px] h-14 rounded-l-full rounded-br-full  bg-green-500 text-primary text-lg ">
        Veja mais...
      </Button>
    </section>
  )
}
