import { Combobox } from '@/components/ui/_shadcn/combobox'
import { useState } from 'react'
import { MapPin, Phone, Store } from 'lucide-react'
import { iStore } from '@/types/iStore'
import storesData from '@/database/stores.json'
import SplitText from '@/components/ui/_react-bits/split-text'
import AnimatedContent from '@/components/ui/_react-bits/animated-content'
import bg from '@/image/bg-encontrar.png'

const store: iStore[] = storesData

export default function FindStore() {
  const [selectedEstado, setselectedEstado] = useState('')
  const [selectedCidade, setSelectedCidade] = useState('')
  const selectedCidades =
    store.find((item) => item.estado === selectedEstado)?.cidades || []
  const selectedLojas =
    selectedCidades.find((cidade) => cidade.cidade === selectedCidade)?.lojas ||
    []

  const handleChange = (newValue: string, type: string) => {
    if (type === 'estado') setselectedEstado(newValue)
    if (type === 'cidade') setSelectedCidade(newValue)
  }

  return (
    <section className="w-full min-h-[50vh] flex flex-col justify-between">
      <div
        className={`p-4 transition-all duration-500 ${selectedEstado ? 'h-[20vh]' : 'h-[50vh]'} flex items-center justify-start text-white text-center`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
        }}
      >
        <SplitText
          delay={10}
          className={`transition-transform duration-300 ${selectedEstado ? 'opacity-0 w-0 h-0' : 'opacity-100'} container mx-auto md:ml-5 text-3xl md:text-5xl md:max-w-1/2 text-gray-600 font-semibold text-center px-6 py-4 rounded-lg shadow-xl`}
          text="Experimente algo novo, um mundo inteiro para explorar, uma nova marca para se apaixonar"
        />
      </div>

      <div
        className={`${selectedEstado ? 'min-h-[50vh]' : ''} container mx-auto p-4 flex flex-col gap-4 items-center`}
      >
        <h1 className="text-3xl">Onde encontrar</h1>
        <div className="flex flex-wrap gap-4 w-full justify-center">
          <div className="flex flex-col w-full max-w-[400px]">
            <span className="font-light text-lg flex justify-between">
              Estado
              {selectedEstado && (
                <button
                  className="cursor-pointer text-secondary"
                  onClick={() => setselectedEstado('')}
                >
                  Limpar busca
                </button>
              )}
            </span>
            <Combobox
              items={store.map(({ estado }) => estado)}
              value={selectedEstado}
              onChange={(newValue) => {
                handleChange(newValue, 'estado')
                setSelectedCidade('')
              }}
            />
          </div>
          <div className="flex flex-col w-full max-w-[400px]">
            <span className="font-light text-lg">Cidade</span>
            <Combobox
              items={
                store
                  .find((item) => item.estado === selectedEstado)
                  ?.cidades.map(({ cidade }) => cidade) || []
              }
              value={selectedCidade}
              onChange={(newValue) => handleChange(newValue, 'cidade')}
            />
          </div>
        </div>
        {selectedLojas.length > 0 && (
          <h1 className="my-4 text-3xl">Lojas Encontradas:</h1>
        )}

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
          {selectedLojas.length > 0 && (
            <div className="space-y-6 flex flex-wrap gap-4 justify-center">
              {selectedLojas.map((loja) => (
                <div
                  key={loja.value}
                  className="w-[300px] h-[200px] bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-101"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Store className="text-blue-500 text-3xl" />
                    <h2 className="text-2xl font-semibold text-gray-800 ">
                      {loja.nome}
                    </h2>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="text-green-500 text-lg" />
                    <p className="text-gray-600">{loja.endereco}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="text-red-500 text-lg" />
                    <p className="text-gray-600">{loja.telefone}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </AnimatedContent>
      </div>
    </section>
  )
}
