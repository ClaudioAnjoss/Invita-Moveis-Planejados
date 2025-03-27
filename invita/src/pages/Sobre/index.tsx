import BackgroundImage from '@/image/bg-dir-sobre.png'

export default function Sobre() {
  return (
    <section
      className="w-full h-full bg-rose-50"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="container mx-auto p-2 bg-rose-50 "
        style={{ backgroundColor: 'rgba(255, 241, 242, 0.5)' }}
      >
        <h1 className="text-4xl mt-4">
          ELETRODOMÉSTICOS QUE TE <br /> OFERECEM{' '}
          <strong className="text-emerald-700">ESCOLHA</strong>
        </h1>
        <div className="border my-4 shadow border-gray-600 max-w-[400px]"></div>
        <div className="text-xl font-light max-w-[50vw] flex flex-col gap-2">
          <p>
            A gente sabe como é gostoso equipar uma casa e pensar em cada
            detalhe.
          </p>
          <p>
            Se você está realizando este sonho, convidamos você a criar
            ambientes que traduzam e evidenciem a sua personalidade.
          </p>
          <p>
            Para sua vida, cozinha ou espaço gourmet, oferecemos produtos
            diferenciados, com estética moderna, qualidade superior, portfólio
            completo, preço atraente e assistência eficiente.
          </p>
          <p>
            Escolha ser diferente e viver a autenticidade do seu lar. Escolha
            ser Invita.
          </p>
        </div>

        {/* Nova Seção */}
        <section className="py-10">
          <h2 className="text-3xl text-center mb-6">
            CONHEÇA NOSSOS PRODUTOS EXCLUSIVOS
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl text-emerald-700">
                Geladeiras de Última Geração
              </h3>
              <p>
                Nossas geladeiras oferecem a tecnologia mais avançada em
                refrigeração, mantendo seus alimentos frescos por mais tempo.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl text-emerald-700">Fogões Modernos</h3>
              <p>
                Fogões com design inovador e recursos que tornam o preparo de
                refeições mais rápido e eficiente.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl text-emerald-700">
                Micro-ondas Inteligentes
              </h3>
              <p>
                Micro-ondas com funções que tornam seu dia a dia mais prático e
                ágil, com excelente desempenho e economia de energia.
              </p>
            </div>
          </div>
        </section>

        {/* Seção de Benefícios */}
        <section className="py-10 bg-amber-100">
          <h2 className="text-3xl text-center mb-6">
            BENEFÍCIOS DE ESCOLHER A INVITA
          </h2>
          <div className="text-xl font-light max-w-[50vw] mx-auto flex flex-col gap-4">
            <p>
              Todos os nossos produtos são projetados com base nas suas
              necessidades, trazendo mais conforto, praticidade e inovação para
              o seu lar.
            </p>
            <ul className="list-disc pl-6">
              <li>Design moderno e funcional</li>
              <li>Alta durabilidade e resistência</li>
              <li>Economia de energia e sustentabilidade</li>
              <li>Atendimento e suporte ao cliente excepcionais</li>
            </ul>
          </div>
        </section>

        {/* Seção Final */}
        <section className="py-10">
          <h2 className="text-3xl text-center mb-6">
            TRANSFORME SUA CASA COM A INVITA
          </h2>
          <p className="text-xl font-light max-w-[60vw] mx-auto">
            A Invita está aqui para transformar sua casa em um lar moderno,
            funcional e cheio de personalidade. Nossos produtos são feitos para
            quem valoriza qualidade, inovação e praticidade no dia a dia.
          </p>
        </section>
      </div>
    </section>
  )
}
