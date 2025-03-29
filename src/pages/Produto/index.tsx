import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function Produto() {
  return (
    <section>
      <div>
        <h1>Novos ares para a sua casa e sua cozinha</h1>
      </div>
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex gap-4">
          <div>Carrosel</div>
          <div>Informacoes do produto</div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer duration-500 w-full">
              Informações técnicas
            </AccordionTrigger>
            <AccordionContent>
              MODELO Adega Invita inox 16 Garrafas Bivolt CÓDIGO
              i-CV-FS-16-XV-3HOA NCM 8418.69.99 EAN 7898593938236 INSTALAÇÃO
              Freestanding LARGURA COMERCIAL 45 cm CAPACIDADE 16 garrafas
              (Padrão Bordalesa, 750 ml) QUANTIDADE DE PRATELEIRAS 3 ACABAMENTO
              DAS PRATELEIRAS Madeira TIPO DO COMANDO Touch ACABAMENTO DA PORTA
              Aço Inoxidável COR EXTERNA DO GABINETE Preto COR INTERNA DO
              GABINETE Preto INVERSÃO DE PORTA Não TECNOLOGIA LOW-E Sim
              ILUMINAÇÃO LED SISTEMA DE REFRIGERAÇÃO Termoelétrica FAIXA DE
              TEMPERATURA 12 °C a 18 °C QUANTIDADE DE ZONAS 1 DIMENSÕES DO
              PRODUTO 430 x 515 x 485 mm DIMENSÕES DA EMBALAGEM 465 x 545 x 518
              mm PESO LÍQUIDO 14 kg PESO BRUTO 16 kg POTÊNCIA – CORRENTE 0,9 /
              0,45 A TENSÃO 127 / 220 V FREQUÊNCIA 60 Hz CLASSE CLIMÁTICA N
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="cursor-pointer duration-500">
              Downloads
            </AccordionTrigger>
            <AccordionContent>
              Adega Invita inox 16 Garrafas Bivolt Manual do Consumidor Gabarito
              Guia Comercial Certificação Inmetro
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
