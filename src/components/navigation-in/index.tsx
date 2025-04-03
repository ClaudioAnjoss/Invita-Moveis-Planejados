import { Button } from '../ui/_shadcn/button'
import CardIn from './card-in'

export default function NavigationIn() {
  return (
    <section className="flex flex-col w-full max-w-6xl gap-4 relative">
      <div className="flex gap-2  min-h-[50vh] sm:h-[90vh]">
        <div className="hidden sm:block w-full">
          <CardIn
            titulo="indepedente"
            imagem="/image/casal-forno.png"
            className="rounded-tl-[100px]"
          />
        </div>
        <div className="w-full flex flex-col gap-4 h-[500px] sm:h-full">
          <CardIn
            titulo="incrível"
            imagem="/image/pao-forno.png"
            className="rounded-tr-[100px]"
          />
          <CardIn
            titulo="inteligente"
            imagem="/image/cozinha.png"
            className="rounded-br-[100px]"
          />
        </div>
      </div>
      <div className="h-[40vh] flex gap-2 mt-2">
        <CardIn
          titulo="instagramável"
          imagem="/image/boca-foga.png"
          className="rounded-bl-[100px]"
        />
        <CardIn
          className="hidden md:flex"
          titulo="interessante"
          imagem="/image/cozinha-verde.png"
        />
        <CardIn
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
