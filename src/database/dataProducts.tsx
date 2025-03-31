export interface Benefit {
  title: string
  description: string
}
export interface TechnicalInformation {
  title: string
  description: string
}

export interface IProduct {
  id: number
  nome: string
  category: string
  subtitle: string
  description: string
  benefits: Benefit[]
  images: string[]
  technicalInformation: TechnicalInformation[]
}

export const dataProducts: IProduct[] = [
  {
    id: 1,
    nome: 'ADEGA INVITA INOX 16 GARRAFAS',
    category: 'Refrigeradores',
    subtitle: 'ADEGA INVITA INOX 16 GARRAFAS FREESTANDING i-CV-FS-16-XV-3HOA',
    description:
      'A nova categoria de Adegas Invita traz inovação para área gourmet. O lançamento conta com capacidade para 16 garrafas (padrão Bordalesa), tecnologia Low-E na porta para proteger as garrafas da luz UV externa e mantém o interior da adega em até 13 ºC a menos em relação a temperatura externa. Com construção em aço inoxidável e prateleiras em madeira, as adegas Invita são robustas e perfeitas para compor um layout moderno e autêntico. Os produtos são de instalação freestanding, trazendo versatilidade na composição, por não dependerem de um nicho para a utilização.',
    benefits: [
      {
        title: 'Modelos freestanding',
        description:
          'Permite a instalação do produto de forma livre, podendo ser realocado de acordo com o projeto, ideal para áreas gourmet.',
      },
      {
        title: 'Resfriamento termoelétrico',
        description:
          'Sistema que absorve e retira rapidamente o calor do produto, mantendo a temperatura interna 13°C a menos que a temperatura externa.',
      },
      {
        title: 'Tecnologia Low-E',
        description:
          'Garante melhor isolamento térmico, proteção contra raios UV e controle de sudação da porta para melhor preservação dos vinhos.',
      },
      {
        title: 'Prateleiras em madeira',
        description: 'Entregam um layout premium para o produto.',
      },
      {
        title: 'Acabamento em aço inoxidável',
        description: 'Mais design, elegância e durabilidade.',
      },
    ],
    images: [
      'https://www.invitacasa.com.br/wp-content/uploads/2023/03/Adega_16_garrafas.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/adega_16_2-01.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/adega_16_3-01.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/adega_16_4-01.png',
    ],
    technicalInformation: [
      { title: 'MODELO', description: 'Adega Invita inox 16 Garrafas Bivolt' },
      { title: 'CÓDIGO', description: 'i-CV-FS-16-XV-3HOA' },
      { title: 'NCM', description: '8418.69.99' },
      { title: 'EAN', description: '7898593938236' },
      { title: 'INSTALAÇÃO', description: 'Freestanding' },
      { title: 'LARGURA COMERCIAL', description: '45 cm' },
      {
        title: 'CAPACIDADE',
        description: '16 garrafas (Padrão Bordalesa, 750 ml)',
      },
      { title: 'QUANTIDADE DE PRATELEIRAS', description: '3' },
      { title: 'ACABAMENTO DAS PRATELEIRAS', description: 'Madeira' },
      { title: 'TIPO DO COMANDO', description: 'Touch' },
      { title: 'ACABAMENTO DA PORTA', description: 'Aço Inoxidável' },
      { title: 'COR EXTERNA DO GABINETE', description: 'Preto' },
      { title: 'COR INTERNA DO GABINETE', description: 'Preto' },
      { title: 'INVERSÃO DE PORTA', description: 'Não' },
      { title: 'TECNOLOGIA LOW-E', description: 'Sim' },
      { title: 'ILUMINAÇÃO', description: 'LED' },
      { title: 'SISTEMA DE REFRIGERAÇÃO', description: 'Termoelétrica' },
      { title: 'FAIXA DE TEMPERATURA', description: '12 °C a 18 °C' },
      { title: 'QUANTIDADE DE ZONAS', description: '1' },
      { title: 'DIMENSÕES DO PRODUTO', description: '430 x 515 x 485 mm' },
      { title: 'DIMENSÕES DA EMBALAGEM', description: '465 x 545 x 518 mm' },
      { title: 'PESO LÍQUIDO', description: '14 kg' },
      { title: 'PESO BRUTO', description: '16 kg' },
      { title: 'POTÊNCIA', description: '–' },
      { title: 'CORRENTE', description: '0,9 / 0,45 A' },
      { title: 'TENSÃO', description: '127 / 220 V' },
      { title: 'FREQUÊNCIA', description: '60 Hz' },
      { title: 'CLASSE CLIMÁTICA', description: 'N' },
    ],
  },
  {
    id: 1,
    nome: 'ADEGA INVITA INOX 16 GARRAFAS',
    category: 'Refrigeradores',
    subtitle: 'ADEGA INVITA INOX 16 GARRAFAS FREESTANDING i-CV-FS-16-XV-3HOA',
    description:
      'A nova categoria de Adegas Invita traz inovação para área gourmet. O lançamento conta com capacidade para 16 garrafas (padrão Bordalesa), tecnologia Low-E na porta para proteger as garrafas da luz UV externa e mantém o interior da adega em até 13 ºC a menos em relação a temperatura externa. Com construção em aço inoxidável e prateleiras em madeira, as adegas Invita são robustas e perfeitas para compor um layout moderno e autêntico. Os produtos são de instalação freestanding, trazendo versatilidade na composição, por não dependerem de um nicho para a utilização.',
    benefits: [
      {
        title: 'Modelos freestanding',
        description:
          'Permite a instalação do produto de forma livre, podendo ser realocado de acordo com o projeto, ideal para áreas gourmet.',
      },
      {
        title: 'Resfriamento termoelétrico',
        description:
          'Sistema que absorve e retira rapidamente o calor do produto, mantendo a temperatura interna 13°C a menos que a temperatura externa.',
      },
      {
        title: 'Tecnologia Low-E',
        description:
          'Garante melhor isolamento térmico, proteção contra raios UV e controle de sudação da porta para melhor preservação dos vinhos.',
      },
      {
        title: 'Prateleiras em madeira',
        description: 'Entregam um layout premium para o produto.',
      },
      {
        title: 'Acabamento em aço inoxidável',
        description: 'Mais design, elegância e durabilidade.',
      },
    ],
    images: [
      'https://www.invitacasa.com.br/wp-content/uploads/2023/03/Adega_16_garrafas.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/adega_16_2-01.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/adega_16_3-01.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/adega_16_4-01.png',
    ],
    technicalInformation: [
      { title: 'MODELO', description: 'Adega Invita inox 16 Garrafas Bivolt' },
      { title: 'CÓDIGO', description: 'i-CV-FS-16-XV-3HOA' },
      { title: 'NCM', description: '8418.69.99' },
      { title: 'EAN', description: '7898593938236' },
      { title: 'INSTALAÇÃO', description: 'Freestanding' },
      { title: 'LARGURA COMERCIAL', description: '45 cm' },
      {
        title: 'CAPACIDADE',
        description: '16 garrafas (Padrão Bordalesa, 750 ml)',
      },
      { title: 'QUANTIDADE DE PRATELEIRAS', description: '3' },
      { title: 'ACABAMENTO DAS PRATELEIRAS', description: 'Madeira' },
      { title: 'TIPO DO COMANDO', description: 'Touch' },
      { title: 'ACABAMENTO DA PORTA', description: 'Aço Inoxidável' },
      { title: 'COR EXTERNA DO GABINETE', description: 'Preto' },
      { title: 'COR INTERNA DO GABINETE', description: 'Preto' },
      { title: 'INVERSÃO DE PORTA', description: 'Não' },
      { title: 'TECNOLOGIA LOW-E', description: 'Sim' },
      { title: 'ILUMINAÇÃO', description: 'LED' },
      { title: 'SISTEMA DE REFRIGERAÇÃO', description: 'Termoelétrica' },
      { title: 'FAIXA DE TEMPERATURA', description: '12 °C a 18 °C' },
      { title: 'QUANTIDADE DE ZONAS', description: '1' },
      { title: 'DIMENSÕES DO PRODUTO', description: '430 x 515 x 485 mm' },
      { title: 'DIMENSÕES DA EMBALAGEM', description: '465 x 545 x 518 mm' },
      { title: 'PESO LÍQUIDO', description: '14 kg' },
      { title: 'PESO BRUTO', description: '16 kg' },
      { title: 'POTÊNCIA', description: '–' },
      { title: 'CORRENTE', description: '0,9 / 0,45 A' },
      { title: 'TENSÃO', description: '127 / 220 V' },
      { title: 'FREQUÊNCIA', description: '60 Hz' },
      { title: 'CLASSE CLIMÁTICA', description: 'N' },
    ],
  },
  {
    id: 1,
    nome: 'ADEGA INVITA INOX 16 GARRAFAS',
    category: 'Refrigeradores',
    subtitle: 'ADEGA INVITA INOX 16 GARRAFAS FREESTANDING i-CV-FS-16-XV-3HOA',
    description:
      'A nova categoria de Adegas Invita traz inovação para área gourmet. O lançamento conta com capacidade para 16 garrafas (padrão Bordalesa), tecnologia Low-E na porta para proteger as garrafas da luz UV externa e mantém o interior da adega em até 13 ºC a menos em relação a temperatura externa. Com construção em aço inoxidável e prateleiras em madeira, as adegas Invita são robustas e perfeitas para compor um layout moderno e autêntico. Os produtos são de instalação freestanding, trazendo versatilidade na composição, por não dependerem de um nicho para a utilização.',
    benefits: [
      {
        title: 'Modelos freestanding',
        description:
          'Permite a instalação do produto de forma livre, podendo ser realocado de acordo com o projeto, ideal para áreas gourmet.',
      },
      {
        title: 'Resfriamento termoelétrico',
        description:
          'Sistema que absorve e retira rapidamente o calor do produto, mantendo a temperatura interna 13°C a menos que a temperatura externa.',
      },
      {
        title: 'Tecnologia Low-E',
        description:
          'Garante melhor isolamento térmico, proteção contra raios UV e controle de sudação da porta para melhor preservação dos vinhos.',
      },
      {
        title: 'Prateleiras em madeira',
        description: 'Entregam um layout premium para o produto.',
      },
      {
        title: 'Acabamento em aço inoxidável',
        description: 'Mais design, elegância e durabilidade.',
      },
    ],
    images: [
      'https://www.invitacasa.com.br/wp-content/uploads/2023/03/Adega_16_garrafas.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/adega_16_2-01.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/adega_16_3-01.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/adega_16_4-01.png',
    ],
    technicalInformation: [
      { title: 'MODELO', description: 'Adega Invita inox 16 Garrafas Bivolt' },
      { title: 'CÓDIGO', description: 'i-CV-FS-16-XV-3HOA' },
      { title: 'NCM', description: '8418.69.99' },
      { title: 'EAN', description: '7898593938236' },
      { title: 'INSTALAÇÃO', description: 'Freestanding' },
      { title: 'LARGURA COMERCIAL', description: '45 cm' },
      {
        title: 'CAPACIDADE',
        description: '16 garrafas (Padrão Bordalesa, 750 ml)',
      },
      { title: 'QUANTIDADE DE PRATELEIRAS', description: '3' },
      { title: 'ACABAMENTO DAS PRATELEIRAS', description: 'Madeira' },
      { title: 'TIPO DO COMANDO', description: 'Touch' },
      { title: 'ACABAMENTO DA PORTA', description: 'Aço Inoxidável' },
      { title: 'COR EXTERNA DO GABINETE', description: 'Preto' },
      { title: 'COR INTERNA DO GABINETE', description: 'Preto' },
      { title: 'INVERSÃO DE PORTA', description: 'Não' },
      { title: 'TECNOLOGIA LOW-E', description: 'Sim' },
      { title: 'ILUMINAÇÃO', description: 'LED' },
      { title: 'SISTEMA DE REFRIGERAÇÃO', description: 'Termoelétrica' },
      { title: 'FAIXA DE TEMPERATURA', description: '12 °C a 18 °C' },
      { title: 'QUANTIDADE DE ZONAS', description: '1' },
      { title: 'DIMENSÕES DO PRODUTO', description: '430 x 515 x 485 mm' },
      { title: 'DIMENSÕES DA EMBALAGEM', description: '465 x 545 x 518 mm' },
      { title: 'PESO LÍQUIDO', description: '14 kg' },
      { title: 'PESO BRUTO', description: '16 kg' },
      { title: 'POTÊNCIA', description: '–' },
      { title: 'CORRENTE', description: '0,9 / 0,45 A' },
      { title: 'TENSÃO', description: '127 / 220 V' },
      { title: 'FREQUÊNCIA', description: '60 Hz' },
      { title: 'CLASSE CLIMÁTICA', description: 'N' },
    ],
  },
  {
    id: 1,
    nome: 'ADEGA INVITA INOX 16 GARRAFAS',
    category: 'Refrigeradores',
    subtitle: 'ADEGA INVITA INOX 16 GARRAFAS FREESTANDING i-CV-FS-16-XV-3HOA',
    description:
      'A nova categoria de Adegas Invita traz inovação para área gourmet. O lançamento conta com capacidade para 16 garrafas (padrão Bordalesa), tecnologia Low-E na porta para proteger as garrafas da luz UV externa e mantém o interior da adega em até 13 ºC a menos em relação a temperatura externa. Com construção em aço inoxidável e prateleiras em madeira, as adegas Invita são robustas e perfeitas para compor um layout moderno e autêntico. Os produtos são de instalação freestanding, trazendo versatilidade na composição, por não dependerem de um nicho para a utilização.',
    benefits: [
      {
        title: 'Modelos freestanding',
        description:
          'Permite a instalação do produto de forma livre, podendo ser realocado de acordo com o projeto, ideal para áreas gourmet.',
      },
      {
        title: 'Resfriamento termoelétrico',
        description:
          'Sistema que absorve e retira rapidamente o calor do produto, mantendo a temperatura interna 13°C a menos que a temperatura externa.',
      },
      {
        title: 'Tecnologia Low-E',
        description:
          'Garante melhor isolamento térmico, proteção contra raios UV e controle de sudação da porta para melhor preservação dos vinhos.',
      },
      {
        title: 'Prateleiras em madeira',
        description: 'Entregam um layout premium para o produto.',
      },
      {
        title: 'Acabamento em aço inoxidável',
        description: 'Mais design, elegância e durabilidade.',
      },
    ],
    images: [
      'https://www.invitacasa.com.br/wp-content/uploads/2023/03/Adega_16_garrafas.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/adega_16_2-01.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/adega_16_3-01.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/adega_16_4-01.png',
    ],
    technicalInformation: [
      { title: 'MODELO', description: 'Adega Invita inox 16 Garrafas Bivolt' },
      { title: 'CÓDIGO', description: 'i-CV-FS-16-XV-3HOA' },
      { title: 'NCM', description: '8418.69.99' },
      { title: 'EAN', description: '7898593938236' },
      { title: 'INSTALAÇÃO', description: 'Freestanding' },
      { title: 'LARGURA COMERCIAL', description: '45 cm' },
      {
        title: 'CAPACIDADE',
        description: '16 garrafas (Padrão Bordalesa, 750 ml)',
      },
      { title: 'QUANTIDADE DE PRATELEIRAS', description: '3' },
      { title: 'ACABAMENTO DAS PRATELEIRAS', description: 'Madeira' },
      { title: 'TIPO DO COMANDO', description: 'Touch' },
      { title: 'ACABAMENTO DA PORTA', description: 'Aço Inoxidável' },
      { title: 'COR EXTERNA DO GABINETE', description: 'Preto' },
      { title: 'COR INTERNA DO GABINETE', description: 'Preto' },
      { title: 'INVERSÃO DE PORTA', description: 'Não' },
      { title: 'TECNOLOGIA LOW-E', description: 'Sim' },
      { title: 'ILUMINAÇÃO', description: 'LED' },
      { title: 'SISTEMA DE REFRIGERAÇÃO', description: 'Termoelétrica' },
      { title: 'FAIXA DE TEMPERATURA', description: '12 °C a 18 °C' },
      { title: 'QUANTIDADE DE ZONAS', description: '1' },
      { title: 'DIMENSÕES DO PRODUTO', description: '430 x 515 x 485 mm' },
      { title: 'DIMENSÕES DA EMBALAGEM', description: '465 x 545 x 518 mm' },
      { title: 'PESO LÍQUIDO', description: '14 kg' },
      { title: 'PESO BRUTO', description: '16 kg' },
      { title: 'POTÊNCIA', description: '–' },
      { title: 'CORRENTE', description: '0,9 / 0,45 A' },
      { title: 'TENSÃO', description: '127 / 220 V' },
      { title: 'FREQUÊNCIA', description: '60 Hz' },
      { title: 'CLASSE CLIMÁTICA', description: 'N' },
    ],
  },
  {
    id: 1,
    nome: 'ADEGA INVITA INOX 16 GARRAFAS',
    category: 'Refrigeradores',
    subtitle: 'ADEGA INVITA INOX 16 GARRAFAS FREESTANDING i-CV-FS-16-XV-3HOA',
    description:
      'A nova categoria de Adegas Invita traz inovação para área gourmet. O lançamento conta com capacidade para 16 garrafas (padrão Bordalesa), tecnologia Low-E na porta para proteger as garrafas da luz UV externa e mantém o interior da adega em até 13 ºC a menos em relação a temperatura externa. Com construção em aço inoxidável e prateleiras em madeira, as adegas Invita são robustas e perfeitas para compor um layout moderno e autêntico. Os produtos são de instalação freestanding, trazendo versatilidade na composição, por não dependerem de um nicho para a utilização.',
    benefits: [
      {
        title: 'Modelos freestanding',
        description:
          'Permite a instalação do produto de forma livre, podendo ser realocado de acordo com o projeto, ideal para áreas gourmet.',
      },
      {
        title: 'Resfriamento termoelétrico',
        description:
          'Sistema que absorve e retira rapidamente o calor do produto, mantendo a temperatura interna 13°C a menos que a temperatura externa.',
      },
      {
        title: 'Tecnologia Low-E',
        description:
          'Garante melhor isolamento térmico, proteção contra raios UV e controle de sudação da porta para melhor preservação dos vinhos.',
      },
      {
        title: 'Prateleiras em madeira',
        description: 'Entregam um layout premium para o produto.',
      },
      {
        title: 'Acabamento em aço inoxidável',
        description: 'Mais design, elegância e durabilidade.',
      },
    ],
    images: [
      'https://www.invitacasa.com.br/wp-content/uploads/2023/03/Adega_16_garrafas.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/adega_16_2-01.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/adega_16_3-01.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/adega_16_4-01.png',
    ],
    technicalInformation: [
      { title: 'MODELO', description: 'Adega Invita inox 16 Garrafas Bivolt' },
      { title: 'CÓDIGO', description: 'i-CV-FS-16-XV-3HOA' },
      { title: 'NCM', description: '8418.69.99' },
      { title: 'EAN', description: '7898593938236' },
      { title: 'INSTALAÇÃO', description: 'Freestanding' },
      { title: 'LARGURA COMERCIAL', description: '45 cm' },
      {
        title: 'CAPACIDADE',
        description: '16 garrafas (Padrão Bordalesa, 750 ml)',
      },
      { title: 'QUANTIDADE DE PRATELEIRAS', description: '3' },
      { title: 'ACABAMENTO DAS PRATELEIRAS', description: 'Madeira' },
      { title: 'TIPO DO COMANDO', description: 'Touch' },
      { title: 'ACABAMENTO DA PORTA', description: 'Aço Inoxidável' },
      { title: 'COR EXTERNA DO GABINETE', description: 'Preto' },
      { title: 'COR INTERNA DO GABINETE', description: 'Preto' },
      { title: 'INVERSÃO DE PORTA', description: 'Não' },
      { title: 'TECNOLOGIA LOW-E', description: 'Sim' },
      { title: 'ILUMINAÇÃO', description: 'LED' },
      { title: 'SISTEMA DE REFRIGERAÇÃO', description: 'Termoelétrica' },
      { title: 'FAIXA DE TEMPERATURA', description: '12 °C a 18 °C' },
      { title: 'QUANTIDADE DE ZONAS', description: '1' },
      { title: 'DIMENSÕES DO PRODUTO', description: '430 x 515 x 485 mm' },
      { title: 'DIMENSÕES DA EMBALAGEM', description: '465 x 545 x 518 mm' },
      { title: 'PESO LÍQUIDO', description: '14 kg' },
      { title: 'PESO BRUTO', description: '16 kg' },
      { title: 'POTÊNCIA', description: '–' },
      { title: 'CORRENTE', description: '0,9 / 0,45 A' },
      { title: 'TENSÃO', description: '127 / 220 V' },
      { title: 'FREQUÊNCIA', description: '60 Hz' },
      { title: 'CLASSE CLIMÁTICA', description: 'N' },
    ],
  },
  {
    id: 2,
    nome: 'Beer Center Invita Inox 85L',
    category: 'Refrigeradores',
    subtitle:
      'Beer Center Invita Inox 85L Freestanding i-BC-FS-85-XV-1ATA / i-BC-FS-85-XV-2ATA',
    description:
      'Para uma área gourmet completa, a Invita lança sua categoria de Beer Center. Com capacidade de 85 litros, porta em aço inoxidável e prateleiras aramadas. O produto possui a tecnologia de Heating Glass para reduzir a umidade e uma faixa de temperatura de -4°C a 10°C, ideal para armazenar cervejas e outras bebidas.',
    benefits: [
      {
        title: 'Modelo freestanding',
        description: 'Permite instalação livre, ideal para áreas gourmet.',
      },
      {
        title: 'Capacidade',
        description:
          'Comporta até 75 latas, com 3 prateleiras para o armazenamento ideal.',
      },
      {
        title: 'Tecnologia Auto Defrost',
        description: 'Sistema que impede a formação de gelo no interior.',
      },
      {
        title: 'Energy Cut Off Memory',
        description: 'Memoriza a temperatura após queda de energia.',
      },
      {
        title: 'Acabamento em aço inoxidável',
        description: 'Design elegante e durabilidade superior.',
      },
    ],
    images: [
      'https://www.invitacasa.com.br/wp-content/uploads/2023/03/Beer_center_85L.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/BC_02-01.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/BC_03-01.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/06/BC_04-01.png',
    ],
    technicalInformation: [
      {
        title: 'MODELO',
        description: 'Beer Center Invita Inox 85 L 127/220 V',
      },
      {
        title: 'CÓDIGO',
        description: 'i-BC-FS-85-XV-1ATA / i-BC-FS-85-XV-2ATA',
      },
      { title: 'NCM', description: '8418.69.99' },
      { title: 'EAN', description: '7898593938182 / 7898593938199' },
      { title: 'INSTALAÇÃO', description: 'Freestanding' },
      { title: 'LARGURA COMERCIAL', description: '48 cm' },
      { title: 'CAPACIDADE LITROS', description: '85 L' },
      { title: 'CAPACIDADE LATAS', description: '75' },
      { title: 'QUANTIDADE DE PRATELEIRAS', description: '3' },
      { title: 'ACABAMENTO DAS PRATELEIRAS', description: 'Arame cromado' },
      { title: 'TIPO DO COMANDO', description: 'Touch' },
      { title: 'ACABAMENTO DA PORTA', description: 'Aço Inoxidável' },
      { title: 'COR EXTERNA DO GABINETE', description: 'Preto' },
      { title: 'COR INTERNA DO GABINETE', description: 'Preto' },
      {
        title: 'TECNOLOGIA DE REDUÇÃO DE UMIDADE',
        description: 'Resistência na porta',
      },
      { title: 'ILUMINAÇÃO', description: 'LED' },
      { title: 'SISTEMA DE REFRIGERAÇÃO', description: 'Compressor' },
      { title: 'FAIXA DE TEMPERATURA', description: '-4 °C a 10 °C' },
      { title: 'QUANTIDADE DE ZONAS', description: '1' },
      { title: 'DIMENSÕES DO PRODUTO', description: '480 x 870 x 430 mm' },
      { title: 'DIMENSÕES DA EMBALAGEM', description: '512 x 890 x 466 mm' },
      { title: 'PESO LÍQUIDO', description: '30,4 kg' },
      { title: 'PESO BRUTO', description: '32,6 kg' },
      { title: 'POTÊNCIA', description: '90 W' },
      { title: 'CORRENTE', description: '2,0 / 0,8 A' },
      { title: 'TENSÃO', description: '127 / 220 V' },
      { title: 'FREQUÊNCIA', description: '60 Hz' },
      { title: 'CLASSE CLIMÁTICA', description: 'T' },
    ],
  },
  {
    id: 3,
    nome: 'Cafeteira Invita Barista Pro Blend',
    category: 'Cafeteiras',
    subtitle: 'Cafeteira Invita Barista Pro Blend 127/220 V',
    description:
      'A Cafeteira Invita Barista Pro Blend permite preparar diversas bebidas com grãos frescos e conta com moedor, espumador e termoblock, oferecendo um café de qualidade profissional diretamente na sua casa.',
    benefits: [
      {
        title: 'Moedor de Grãos Integrado',
        description:
          'Moedor que preserva o sabor e aroma do café, garantindo frescor em cada xícara.',
      },
      {
        title: 'Espumador de Leite',
        description:
          'Perfeito para criar cappuccinos e lattes com leite espumado.',
      },
      {
        title: 'Comandos Manuais',
        description:
          'Controle total na preparação, ajustando ao gosto pessoal.',
      },
      {
        title: 'Design Moderno',
        description:
          'Com acabamento em aço inox, combina com qualquer ambiente de cozinha.',
      },
    ],
    images: [
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/cafeteira_1.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/cafeteira_4.jpg',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/cafeteira_3.jpg',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/cafeteira_2.jpg',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/cafeteira_5.jpg',
    ],
    technicalInformation: [
      {
        title: 'MODELO',
        description: 'Cafeteira Invita Barista Pro Blend 127/220 V',
      },
      {
        title: 'CÓDIGO',
        description: 'i-CAF-PRO-BLEND',
      },
      {
        title: 'NCM',
        description: '8516.71.99',
      },
      {
        title: 'EAN',
        description: '7898593938206',
      },
      {
        title: 'INSTALAÇÃO',
        description: 'Bancada',
      },
      {
        title: 'POTÊNCIA',
        description: '1300 W',
      },
      {
        title: 'CORRENTE',
        description: '5 A',
      },
      {
        title: 'TENSÃO',
        description: '127 / 220 V',
      },
      {
        title: 'FREQUÊNCIA',
        description: '60 Hz',
      },
    ],
  },
  {
    id: 4,
    nome: 'Churrasqueira Invita a Gás 55 cm',
    category: 'Churrasqueira',
    subtitle: 'Churrasqueira Invita a Gás 55 cm i-BBQ-2Q-55-XX-NHUA',
    description:
      'Ideal para a área gourmet, a nova Churrasqueira Invita conta com acendimento a gás e instalação embutida na bancada. Com 55 cm de largura, possui sofisticado acabamento em inox e é perfeita para o preparo de carnes, peixes e vegetais.',
    benefits: [
      {
        title: 'Alta Potência',
        description: '2 queimadores em flauta com 12.000 BTU.',
      },
      {
        title: 'Instalação',
        description:
          'Com 55 cm de largura, a churrasqueira é totalmente embutida na bancada.',
      },
      {
        title: 'Acendimento Piezoelétrico',
        description:
          'Não necessita de botões secundários para acender os queimadores, proporcionando mais praticidade e segurança.',
      },
      {
        title: 'Acabamento em Aço Inoxidável',
        description: 'Mais design, elegância e durabilidade ao produto.',
      },
    ],
    images: [
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/churras_1.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/churras_2.jpg',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/churras_3.jpg',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/churras_4.jpg',
    ],
    technicalInformation: [
      {
        title: 'MODELO',
        description: 'Churrasqueira Invita Gás 55 cm',
      },
      {
        title: 'CÓDIGO',
        description: 'BBQ-2Q-55-XX-NHUA',
      },
      {
        title: 'NCM',
        description: '7321.11.00',
      },
      {
        title: 'EAN',
        description: '7898593937987',
      },
      {
        title: 'TIPO DE COCÇÃO',
        description: 'Gás',
      },
      {
        title: 'TIPO DE GÁS',
        description: 'GLP',
      },
      {
        title: 'LARGURA COMERCIAL',
        description: '55 cm',
      },
      {
        title: 'QUANTIDADE DE QUEIMADORES',
        description: '2',
      },
      {
        title: 'TIPO DE ACENDIMENTO',
        description: 'Piezoelétrico',
      },
      {
        title: 'ACABAMENTO DA GRADE',
        description: 'Aço Inoxidável',
      },
      {
        title: 'DIÂMETRO DA GRADE',
        description: '8 mm',
      },
      {
        title: 'MEDIDOR DE TEMPERATURA',
        description: 'Sim',
      },
      {
        title: 'BANDEJA COLETORA DE GORDURA',
        description: 'Sim',
      },
      {
        title: 'DIMENSÕES DO PRODUTO',
        description: '550x460x603 mm',
      },
      {
        title: 'DIMENSÕES DA EMBALAGEM',
        description: '625x505x645 mm',
      },
      {
        title: 'PESO LÍQUIDO',
        description: '30,8 kg',
      },
      {
        title: 'PESO BRUTO',
        description: '31 kg',
      },
      {
        title: 'POTÊNCIA',
        description: '30.000 BTU',
      },
    ],
  },
  {
    id: 5,
    nome: 'Coifa Invita Parede Black 90 cm',
    category: 'Coifas',
    subtitle: 'Coifa Invita Black Parede 90 cm 220V',
    description:
      'A Coifa Invita Black traz um design diferenciado com acabamento em inox preto e alta performance de aspiração. Com filtros baffle, oferece alta eficiência na retenção de gordura e facilidade na limpeza. Ideal para instalação em parede, é perfeita para áreas gourmet ou cozinhas modernas.',
    benefits: [
      {
        title: 'Acabamento em Inox Black',
        description: 'Alta durabilidade e sofisticação da pintura em preto.',
      },
      {
        title: 'Filtros Baffle',
        description:
          'Filtram a gordura dos vapores com eficiência e facilitam a limpeza.',
      },
      {
        title: 'Alta Eficiência',
        description: 'Vazão de 1.200 m³/h para uma aspiração potente.',
      },
      {
        title: '3 Velocidades',
        description: 'Se adaptam às necessidades do usuário.',
      },
      {
        title: 'Filtro de Carvão',
        description: 'Elimina odores do ambiente.',
      },
    ],
    images: [
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/coifa_bl_1.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/coifa_bl_3.jpg',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/coifa_bl_2.jpg',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/coifa_bl_4.jpg',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/coifa_bl_5.jpg',
    ],
    technicalInformation: [
      {
        title: 'MODELO',
        description: 'Coifa Invita Black Parede 90 cm 220 V',
      },
      {
        title: 'CÓDIGO',
        description: 'i-CFP-90-BL-2ATA',
      },
      {
        title: 'NCM',
        description: '8414.60.00',
      },
      {
        title: 'EAN',
        description: '7898593939233',
      },
      {
        title: 'INSTALAÇÃO',
        description: 'Parede',
      },
      {
        title: 'LARGURA COMERCIAL',
        description: '90 cm',
      },
      {
        title: 'ACABAMENTO',
        description: 'Aço inoxidável',
      },
      {
        title: 'COR DO ACABAMENTO',
        description: 'Preto',
      },
      {
        title: 'TIPO DO COMANDO',
        description: 'Manual',
      },
      {
        title: 'VAZÃO',
        description: '1.200 m³/h',
      },
      {
        title: 'VELOCIDADES',
        description: '3',
      },
      {
        title: 'ILUMINAÇÃO',
        description: 'LED strip',
      },
      {
        title: 'POTÊNCIA DA LÂMPADA',
        description: '3.5W',
      },
      {
        title: 'DIMENSÕES DO PRODUTO',
        description: '900 x 487 ~867 x 505 mm',
      },
      {
        title: 'DIMENSÕES DA EMBALAGEM',
        description: '955 x 570 x 440 mm',
      },
      {
        title: 'PESO LÍQUIDO',
        description: '17 kg',
      },
      {
        title: 'PESO BRUTO',
        description: '20,15 kg',
      },
      {
        title: 'POTÊNCIA',
        description: '420 W',
      },
      {
        title: 'CORRENTE',
        description: '1,9A',
      },
      {
        title: 'TENSÃO',
        description: '220 V',
      },
      {
        title: 'FREQUÊNCIA',
        description: '60 Hz',
      },
    ],
  },
  {
    id: 6,
    nome: 'Cooktop Invita a Gás Black 90 cm',
    category: 'Cooktop',
    subtitle: 'Cooktop Invita a Gás Black 90 cm Bivolt',
    description:
      'O Cooktop Invita 90 cm Black traz ainda mais estilo para sua cozinha e área gourmet. Com acabamento em vidro preto, pode ser combinado com os outros equipamentos Invita.',
    benefits: [
      {
        title: 'Modelo 90 cm',
        description:
          'Maior espaço na mesa do Cooktop, ideal para o preparo de diversas receitas.',
      },
      {
        title: 'Potência',
        description:
          'Conta com 5 queimadores Defendi, sendo um Dual Flame lateral de 4k W.',
      },
      {
        title: 'Trempes',
        description:
          'Desenvolvidas em ferro fundido, garantindo a qualidade e durabilidade para o Cooktop.',
      },
      {
        title: 'Acendimento Superautomático',
        description:
          'Não necessita de botões secundários para acender os queimadores, mais praticidade e segurança no uso.',
      },
    ],
    images: [
      'https://www.invitacasa.com.br/wp-content/uploads/2023/11/Cooktop-Invita-Vidro-90-cm_1.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/11/Cooktop-Invita-Vidro-90-cm_2.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/11/Cooktop-Invita-Vidro-90-cm_3.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/11/Cooktop-Invita-Vidro-90-cm_4.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/11/Cooktop-Invita-Vidro-90-cm_5.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/11/Cooktop-Invita-Vidro-90-cm.png',
    ],
    technicalInformation: [
      {
        title: 'MODELO',
        description: 'Cooktop Invita Black 90 cm Bivolt',
      },
      {
        title: 'CÓDIGO',
        description: 'i-CKG-5Q-90-BL-3TNA',
      },
      {
        title: 'NCM',
        description: '7321.11.00',
      },
      {
        title: 'EAN',
        description: '7898593938632',
      },
      {
        title: 'LARGURA COMERCIAL',
        description: '90 cm',
      },
      {
        title: 'ACABAMENTO',
        description: 'Vidro Preto',
      },
      {
        title: 'QUANTIDADE DE QUEIMADORES',
        description: '5',
      },
      {
        title: 'QUEIMADOR TRIPLA CHAMA',
        description: '1 x 4Kw',
      },
      {
        title: 'QUEIMADOR RÁPIDO',
        description: '1 x 3 kW',
      },
      {
        title: 'QUEIMADOR SEMIRRÁPIDO',
        description: '2 x 1,8kW',
      },
      {
        title: 'QUEIMADOR AUXILIAR',
        description: '1 x 1,0kW',
      },
      {
        title: 'TREMPE',
        description: 'Ferro Fundido',
      },
      {
        title: 'VÁLVULA DE SEGURANÇA',
        description: 'Sim',
      },
      {
        title: 'ACENDIMENTO SUPERAUTOMÁTICO',
        description: 'Sim',
      },
      {
        title: 'SUPORTE PARA PANELA WOK',
        description: 'Não',
      },
      {
        title: 'CHAPA BISTEQUEIRA',
        description: 'Não',
      },
      {
        title: 'DIMENSÕES DO PRODUTO',
        description: '874 x 110 x 510 mm',
      },
      {
        title: 'DIMENSÕES DA EMBALAGEM',
        description: '935 x 170 x 570 mm',
      },
      {
        title: 'PESO LÍQUIDO',
        description: '20,2 KG',
      },
      {
        title: 'PESO BRUTO',
        description: '18,2 KG',
      },
      {
        title: 'POTÊNCIA',
        description: '11,6 kW',
      },
      {
        title: 'CORRENTE',
        description: '0,01 A',
      },
      {
        title: 'TENSÃO',
        description: '127 / 220 V',
      },
      {
        title: 'FREQUÊNCIA',
        description: '60 Hz',
      },
    ],
  },
  {
    id: 14,
    nome: 'Cooktop a Gás Inox 90 cm',
    category: 'Cooktop',
    subtitle: 'i-CKG-5Q-90-XX-3TNA',
    description:
      'O Cooktop Invita Inox 90 cm se encaixa perfeitamente em diferentes tipos de projetos para cozinhas e áreas gourmets! Seu acabamento em inox permite que seja combinado com os outros equipamentos Invita.',
    benefits: [
      {
        title: 'Modelo 90 cm',
        description:
          'Maior espaço na mesa do Cooktop, ideal para o preparo de diversas receitas',
      },
      {
        title: 'Potência',
        description:
          'Conta com 5 queimadores Defendi, sendo um Dual Flame lateral de 4k W',
      },
      {
        title: 'Trempes',
        description:
          'Desenvolvidas em ferro fundido, garantindo a qualidade e durabilidade para o Cooktop',
      },
      {
        title: 'Acendimento Superautomático',
        description:
          'Não necessita de botões secundários para acender os queimadores, mais praticidade e segurança',
      },
    ],
    images: [
      'https://www.invitacasa.com.br/wp-content/uploads/2023/11/Cooktop-Invita-Inox-90-cm.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/11/Cooktop-Invita-Inox-90-cm_1.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/11/Cooktop-Invita-Inox-90-cm_2.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/11/Cooktop-Invita-Inox-90-cm_3.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/11/Cooktop-Invita-Inox-90-cm_4.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2023/11/Cooktop-Invita-Inox-90-cm_5.png',
    ],
    technicalInformation: [
      { title: 'MODELO', description: 'Cooktop Invita Inox 90 cm Bivolt' },
      { title: 'CÓDIGO', description: 'i-CKG-5Q-90-XX-3TNA' },
      { title: 'NCM', description: '7321.11.00' },
      { title: 'EAN', description: '7898593938649' },
      { title: 'LARGURA COMERCIAL', description: '90 cm' },
      { title: 'ACABAMENTO', description: 'Inox' },
      { title: 'QUANTIDADE DE QUEIMADORES', description: '5' },
      { title: 'QUEIMADOR TRIPLA CHAMA', description: '1 x 4Kw' },
      { title: 'QUEIMADOR RÁPIDO', description: '1 x 3 kW' },
      { title: 'QUEIMADOR SEMIRRÁPIDO', description: '2 x 1,8kW' },
      { title: 'QUEIMADOR AUXILIAR', description: '1 x 1,0kW' },
      { title: 'TREMPE', description: 'Ferro Fundido' },
      { title: 'VÁLVULA DE SEGURANÇA', description: 'Sim' },
      { title: 'ACENDIMENTO SUPERAUTOMÁTICO', description: 'Sim' },
      { title: 'DIMENSÕES DO PRODUTO', description: '855 x 85 x 495 mm' },
      { title: 'DIMENSÕES DA EMBALAGEM', description: '935 x 170 x 570 mm' },
      { title: 'PESO LÍQUIDO', description: '11,55 KG' },
      { title: 'PESO BRUTO', description: '13,65 KG' },
      { title: 'POTÊNCIA', description: '11,6 kW' },
      { title: 'TENSÃO', description: '127 / 220 V' },
      { title: 'FREQUÊNCIA', description: '60 Hz' },
    ],
  },
  {
    id: 15,
    nome: 'Forno de Bancada Invita Air Fryer 24 Litros',
    category: 'Forno',
    subtitle: 'Forno de Bancada Invita Air Fryer 24 litros i-FA-FS-24L-XX-1LBA',
    description:
      'O Forno de Bancada Invita traz praticidade para as cozinhas, unindo a funcionalidade do forno elétrico convencional aliada à função Air Fryer. É uma solução portátil, ideal para ser instalada em bancadas e preparar inúmeras receitas.',
    benefits: [
      {
        title: 'Tecnologia Air Fryer',
        description:
          'Possui ventilador de convecção que cozinha os alimentos sem a necessidade de gordura, como óleo.',
      },
      {
        title: '10 Funções',
        description:
          'Conta com funções pré-setadas para o preparo de diferentes receitas como batata frita, peixe, frango, carne, e muito mais.',
      },
      {
        title: 'Capacidade de 24 Litros',
        description:
          'Ideal para diferentes preparos, comportando diversos tipos de alimentos.',
      },
      {
        title: 'Vidro Duplo',
        description: 'Garante maior segurança durante o uso.',
      },
    ],
    images: [
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/forno_1.png',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/forno_2.jpg',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/forno_3.jpg',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/forno_4.jpg',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/forno_5.jpg',
      'https://www.invitacasa.com.br/wp-content/uploads/2024/03/forno_6.jpg',
    ],
    technicalInformation: [
      {
        title: 'MODELO',
        description: 'Forno de Bancada Invita Air Fryer 24 Litros',
      },
      { title: 'CÓDIGO', description: 'i-FA-FS-24L-XX-1LBA' },
      { title: 'NCM', description: '8516.60.00' },
      { title: 'EAN', description: '7898593939103' },
      { title: 'INSTALAÇÃO', description: 'Portátil' },
      { title: 'TIPO', description: 'Elétrico' },
      {
        title: 'FUNÇÕES',
        description:
          '10 funções (Batata Frita, Peixe, Frango, Steak, Pão, Esquentar, Desidratar, Bolo, Pizza, Rotissaria)',
      },
      { title: 'CAPACIDADE', description: '24 Litros' },
      { title: 'POTÊNCIA', description: '1.800 W' },
      { title: 'VOLTAGEM', description: '127 V' },
      { title: 'DIMENSÕES DO PRODUTO', description: '414 x 375 x 375 mm' },
      { title: 'PESO LÍQUIDO', description: '9 kg' },
      { title: 'DIMENSÕES DA EMBALAGEM', description: '470 x 430 x 445 mm' },
      { title: 'PESO BRUTO', description: '11 kg' },
    ],
  },
  {
    id: 20,
    nome: 'Micro-ondas Inox 25L',
    category: 'Microondas',
    subtitle: 'Micro-ondas Inox 25L 13 Funções e Grill Elétrico',
    description:
      'O Micro-ondas Inox 25L da Invita oferece 13 funções de preparo, incluindo micro-ondas e grill elétrico. Seu design em aço inox proporciona elegância e resistência, enquanto a tecnologia de descongelamento e as funções predefinidas garantem praticidade no dia a dia. Ideal para quem busca qualidade e funcionalidade em um único produto.',
    benefits: [
      {
        title: '13 Funções de Preparo',
        description:
          'Inclui funções de micro-ondas, grill e combinações para diferentes tipos de alimentos.',
      },
      {
        title: 'Acabamento em Aço Inoxidável',
        description:
          'Design moderno e resistente, ideal para combinar com outros eletrodomésticos.',
      },
      {
        title: 'Função Trava de Segurança',
        description:
          'Bloqueia o painel de controle para evitar alterações acidentais durante o uso.',
      },
    ],
    images: [
      'https://www.invitacasa.com.br/wp-content/uploads/2022/03/Micro_ondas_Invita_Inox_23L-1.png',
    ],
    technicalInformation: [
      { title: 'MODELO', description: 'Micro-ondas Inox 25L' },
      { title: 'CÓDIGO', description: 'i-MW-INX-25L' },
      { title: 'NCM', description: '8516.60.00' },
      { title: 'EAN', description: '7898593939990' },
      { title: 'INSTALAÇÃO', description: 'De bancada' },
      { title: 'LARGURA', description: '595 mm' },
      { title: 'CAPACIDADE', description: '25 Litros' },
      { title: 'TIPO DE COMANDO', description: 'Digital' },
      { title: 'ACABAMENTO', description: 'Aço Inoxidável' },
      { title: 'PESO LÍQUIDO', description: '15 kg' },
      { title: 'PESO BRUTO', description: '17 kg' },
      { title: 'POTÊNCIA', description: '1000W' },
      { title: 'CORRENTE', description: '0,9 A' },
      { title: 'TENSÃO', description: '127 V' },
      { title: 'FREQUÊNCIA', description: '60 Hz' },
      { title: 'CLASSE CLIMÁTICA', description: 'N' },
    ],
  },
]
