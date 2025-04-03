import BlurText from '@/components/ui/_react-bits/blur-text'
import SplitText from '@/components/ui/_react-bits/split-text'
import SpotlightCard from '@/components/ui/_react-bits/spotlight-card'
import AnimatedContent from '@/components/ui/_react-bits/animated-content'
import contentCard from './content-card.json'
import bg from '@/image/bg-dir-sobre.png'

export default function About() {
  return (
    <section
      className="w-full h-full "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="container mx-auto p-2 "
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      >
        <div className="text-2xl md:text-4xl flex flex-col items-center md:items-start">
          <SplitText
            text="ELETRODOMÉSTICOS QUE TE"
            delay={10}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            threshold={0.2}
            rootMargin="-50px"
          />
          <span>
            <SplitText text="OFERECEM" />
            <SplitText text="ESCOLHA" className="text-emerald-700 font-bold" />
          </span>
        </div>

        <div className="text-xl p-4 font-light md:max-w-[50vw] flex flex-col gap-2">
          <BlurText
            delay={10}
            animateBy="words"
            direction="top"
            text="A gente sabe como é gostoso equipar uma casa e pensar em cada detalhe."
          />
          <BlurText
            delay={10}
            animateBy="words"
            direction="top"
            text="Se você está realizando este sonho, convidamos você a criar ambientes que traduzam e evidenciem a sua personalidade."
          />
          <BlurText
            delay={10}
            animateBy="words"
            direction="top"
            text="Para sua vida, cozinha ou espaço gourmet, oferecemos produtos diferenciados, com estética moderna, qualidade superior, portfólio completo, preço atraente e assistência eficiente."
          />
          <BlurText
            delay={10}
            animateBy="words"
            direction="top"
            text="Escolha ser diferente e viver a autenticidade do seu lar. Escolha ser Invita."
          />
        </div>

        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <section className="py-10 flex flex-col gap-4">
            <SplitText
              text="CONHEÇA NOSSOS PRODUTOS EXCLUSIVOS"
              delay={10}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
              className="text-3xl"
            />
            <div className="grid md:grid-cols-3 gap-6">
              {contentCard.map(({ title, description }) => (
                <SpotlightCard
                  key={title}
                  className="custom-spotlight-card bg-gradient-to-r from-blue-50 to-indigo-50 border-none shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-200 hover:to-indigo-200 duration-300"
                  spotlightColor="rgba(255, 255, 255, 0.823)"
                >
                  <h3 className="text-2xl text-emerald-700 font-semibold mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-800">{description}</p>
                </SpotlightCard>
              ))}
            </div>
          </section>
        </AnimatedContent>

        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <section className="py-10 bg-amber-100">
            <h2 className="text-3xl text-center mb-6">
              BENEFÍCIOS DE ESCOLHER A INVITA
            </h2>
            <div className="text-xl font-light p-2 md:max-w-[50vw] mx-auto flex flex-col gap-4">
              <p>
                Todos os nossos produtos são projetados com base nas suas
                necessidades, trazendo mais conforto, praticidade e inovação
                para o seu lar.
              </p>
              <ul className="list-disc pl-6">
                <li>Design moderno e funcional</li>
                <li>Alta durabilidade e resistência</li>
                <li>Economia de energia e sustentabilidade</li>
                <li>Atendimento e suporte ao cliente excepcionais</li>
              </ul>
            </div>
          </section>
        </AnimatedContent>

        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <section className="py-10">
            <h2 className="text-3xl text-center mb-6">
              TRANSFORME SUA CASA COM A INVITA
            </h2>
            <p className="text-xl font-light md:max-w-[60vw] mx-auto">
              A Invita está aqui para transformar sua casa em um lar moderno,
              funcional e cheio de personalidade. Nossos produtos são feitos
              para quem valoriza qualidade, inovação e praticidade no dia a dia.
            </p>
          </section>
        </AnimatedContent>
      </div>
    </section>
  )
}
