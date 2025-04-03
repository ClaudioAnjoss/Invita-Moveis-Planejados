import NavigationIn from '@/components/navigation-in'
import CardSurprise from '@/components/card-surprise'
import SplitText from '@/components/ui/_react-bits/split-text'
import BlurText from '@/components/ui/_react-bits/blur-text'
import AnimatedContent from '@/components/ui/_react-bits/animated-content'
import FadeContent from '@/components/ui/_react-bits/fade-content'
import RotatingText from '@/components/ui/_react-bits/rotating-text'
import bgStart from '@/image/bg-header-home.png'
import bgMid from '@/image/escolha-ser-invita-bg-2.png'
import bgBottomLeft from '@/image/bg-receba-novidades.png'
import bgBottomRight from '@/image/garrafa.png'
import inTitle from '@/image/in.png'
import CardRegisterEmail from '@/components/card-register-email'

export default function Home() {
  return (
    <section
      className="w-full "
      style={{
        backgroundImage: `url(${bgStart})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto text-primary px-4">
        <div className="text-4xl mt-16 md:mt-36 flex flex-col items-start">
          <SplitText text="A VIDA É" />
          <SplitText text="UM GRANDE" />
          <SplitText text="CONVITE" className="font-semibold" />
        </div>
        <div className="text-2xl font-light pt-4 mb-16 md:mb-36">
          <BlurText text="Viva intensamente cada momento com mais" />
          <BlurText text="design, alta performance, qualidade e eficiência." />
        </div>

        <FadeContent blur={true} duration={1000}>
          <div className="flex flex-col md:flex-row justify-between gap-2 p-2 mb-16">
            <iframe
              className="w-full max-w-[620px] min-h-80"
              src="https://www.youtube.com/embed/LHLgcwd0qtk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <CardSurprise />
          </div>
        </FadeContent>
      </div>

      <div
        className="bg-secondary pb-10"
        style={{
          backgroundImage: `url(${bgMid})`,
          backgroundSize: '65% 95%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left 80px',
        }}
      >
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div className="container mx-auto  flex flex-col items-center text-primary p-4 py-20">
            <div className="text-4xl font-light text-gray-600 flex items-center mb-8  px-4">
              <span className="hidden sm:block mx-auto">ESCOLHA SER</span>
              <img className="max-w-25 h-9 ml-2" src={inTitle} alt="In" />
              <RotatingText
                texts={[
                  'depedente',
                  'crível',
                  'teligente',
                  'stagramável',
                  'teressante',
                  'timista',
                ]}
                rotationInterval={3000}
                className="text-[40px] font-light text-primary"
              />
            </div>
            <NavigationIn />
          </div>
        </AnimatedContent>
      </div>

      <div
        className="p-4 md:h-[80vh] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${bgBottomLeft}), url(${bgBottomRight})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left -160px, right bottom',
        }}
      >
        <CardRegisterEmail />
      </div>
    </section>
  )
}
