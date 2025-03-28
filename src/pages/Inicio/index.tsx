import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import background from '@/image/bg-header-home.png'
import backgroundNovidades from '@/image/bg-receba-novidades.png'
import logo from '@/image/LogoClara.png'
import MenuEscolha from '@/components/MenuEscolha'
import bgEscolha from '@/image/escolha-ser-invita-bg-2.png'
import bgGarrafa from '@/image/garrafa.png'
import { InputForm } from '@/components/ui/useform'

export default function Inicio() {
  return (
    <section
      className="w-full "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto text-primary px-4">
        <h1 className="text-4xl mt-16 md:mt-36">
          A <strong>VIDA</strong> É <br /> UM
          <strong>
            GRANDE <br /> CONVITE
          </strong>
        </h1>
        <p className="text-2xl font-light pt-4 mb-16 md:mb-36">
          Viva intensamente cada momento com mais <br /> design, alta
          performance, qualidade e eficiência.
        </p>

        <div className="flex flex-col md:flex-row justify-around gap-2 p-2 mb-16">
          <iframe
            className="w-full max-w-[620px] min-h-80"
            src="https://www.youtube.com/embed/LHLgcwd0qtk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <Card className="w-full text-center font-light lg:max-w-[400px]">
            <CardHeader>
              <CardTitle className="text-xl">
                PARA{' '}
                <strong className="text-emerald-600 font-bold">VOCÊ</strong>
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

      <div
        className="bg-secondary pb-10"
        style={{
          backgroundImage: `url(${bgEscolha})`,
          backgroundSize: '65% 95%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left 80px',
        }}
      >
        <div className="container mx-auto  flex flex-col items-center text-primary p-4 py-20">
          <h1 className="text-4xl font-light text-gray-600 flex gap-1 items-center mb-8">
            ESCOLHA SER <img className="max-w-28" src={logo} alt="Invita" />
          </h1>
          <MenuEscolha />
        </div>
      </div>

      <div
        className="h-[40vh] md:h-[80vh] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundNovidades}), url(${bgGarrafa})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left -160px, right bottom',
        }}
      >
        <div className="bg-white p-4 rounded shadow">
          <h1 className="text-4xl font-bold text-pink-400 ">
            Receba as novidades
          </h1>
          <h2 className="text-base font-light py-4">
            Cadastre seu e-mail para receber todas as novidades Invita.
          </h2>

          <InputForm />
        </div>
      </div>
    </section>
  )
}
