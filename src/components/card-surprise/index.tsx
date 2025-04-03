import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion'
import { Separator } from '@radix-ui/react-separator'
import { CheckCircle, ArrowRight, Smile } from 'lucide-react'
import { Button } from '../ui/_shadcn/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '../ui/_shadcn/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/_shadcn/dialog'
import { useState } from 'react'
import { Slider } from '../ui/_shadcn/slider'

export default function CardSurprise() {
  const [surprise, setSurprise] = useState(0)

  return (
    <Dialog>
      <Card className="w-full text-center font-light lg:max-w-[400px]">
        <CardHeader>
          <CardTitle className="text-xl">
            PARA <strong className="text-emerald-600 font-bold">VOCÊ</strong>
            <br /> NÃO SER IGUAL <br /> TODO MUNDO
          </CardTitle>
        </CardHeader>
        <CardContent className="text-base">
          Elettromec é uma marca conceituada na comercialização de
          eletrodomésticos de luxo e oferece soluções inteligentes e completas
          para ambientes gourmets e cozinhas.
        </CardContent>
        <CardFooter>
          <DialogTrigger asChild>
            <Button
              className="w-full text-primary cursor-pointer"
              variant={'secondary'}
            >
              Saiba mais...
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>

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
