import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import background from '@/image/bg-header-home.png'
import background2 from '@/image/bg-dir-sobre.png'

export default function Inicio() {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage: `url(${background}), url(${background2})`,
        backgroundSize: 'cover, contain',
        backgroundPosition: 'top, top right',
        backgroundRepeat: 'no-repeat, no-repeat',
      }}
    >
      <div className="container mx-auto text-primary">
        <h1 className="text-4xl mt-36">
          A <strong>VIDA</strong> É <br /> UM
          <strong>
            GRANDE <br /> CONVITE
          </strong>
        </h1>
        <p className="text-2xl font-light pt-4 mb-36">
          Viva intensamente cada momento com mais <br /> design, alta
          performance, qualidade e eficiência.
        </p>

        <div className="flex justify-around gap-2 p-2 flex-wrap mb-16">
          <iframe
            className="w-full max-w-[620px] min-h-80"
            src="https://www.youtube.com/embed/LHLgcwd0qtk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <Card className="text-center  font-light sm:w-2/3 md:w-1/3">
            <CardHeader>
              <CardTitle className="text-xl">
                PARA{' '}
                <strong className="text-emerald-600 font-bold">VOCÊ</strong>{' '}
                <br /> NÃO SER IGUAL <br /> TODO MUNDO
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base">
              Elettromec é uma marca conceituada na comercialização de
              eletrodomésticos de luxo e oferece soluções inteligentes e
              completas para ambientes gourmets e cozinhas.
            </CardContent>
            <CardFooter>
              <Button className="w-full text-primary" variant={'secondary'}>
                Saiba mais...
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="container mx-auto min-h-screen">
          <h1>ESCOLHA SER logo</h1>
          <div>menu</div>
        </div>
      </div>
    </section>
  )
}
