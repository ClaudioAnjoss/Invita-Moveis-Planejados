import { useState } from 'react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Slider } from '../ui/slider'
import CardEscolha from './CardEscolha'
import { ArrowRight, CheckCircle, Smile } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { Separator } from '../ui/separator'

export default function MenuEscolha() {
  const [surprise, setSurprise] = useState(0)

  console.log(surprise)
  return (
    <Dialog>
      <section className="flex flex-col w-full max-w-6xl gap-4 relative">
        <DialogTrigger>
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
          <div className="h-[40vh] flex gap-2 mt-2">
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
        </DialogTrigger>
      </section>

      <DialogContent className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-md mx-auto transition-all transform hover:scale-105">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center text-gray-800">
            Momento Surpresa
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500 mt-2">
            Ei, você está prestes a descobrir algo. Arraste o slider e vamos ver
            o que acontece!
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center mt-6">
          <Slider
            value={[surprise]}
            onValueChange={(value) => setSurprise(value[0])}
            max={100}
            step={1}
            className="w-3/4 transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="mt-4 text-center">
          {surprise > 0 && surprise <= 30 && (
            <div className="text-red-500 flex justify-center items-center gap-2">
              <CheckCircle /> <span>Muito bem! Você aceitou o desafio.</span>
            </div>
          )}
          {surprise > 30 && surprise <= 70 && (
            <div className="text-orange-500 flex justify-center items-center gap-2">
              <ArrowRight /> <span>Continue, não pare agora!</span>
            </div>
          )}
          {surprise > 70 && surprise < 100 && (
            <div className="text-yellow-500 flex justify-center items-center gap-2">
              <Smile /> <span>Estamos quase lá...!</span>
            </div>
          )}
          {surprise === 100 && (
            <div className="text-green-600 font-bold text-lg mt-4 flex gap-1">
              <Smile /> <span>Parabéns! Você chegou ao fim da surpresa!</span>
            </div>
          )}

          {surprise === 100 && (
            <div className="mt-4 text-gray-800">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="cursor-pointer flex items-center px-20  bg-blue-200">
                    Tenho uma mensagem de Deus para você <br /> gostaria de ler?
                  </AccordionTrigger>
                  <AccordionContent className="py-4 font-light text-base">
                    <p>
                      A jornada pode ser longa e cheia de desafios, mas
                      lembre-se: o propósito de <strong>Deus</strong> para sua
                      vida é maior que qualquer obstáculo que você enfrente.
                    </p>
                    <Separator className="my-4" />
                    <p className="text-lg font-semibold mt-4">
                      Está gostando da experiência até agora?
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Estou curioso para saber o que você achou do meu site!
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
