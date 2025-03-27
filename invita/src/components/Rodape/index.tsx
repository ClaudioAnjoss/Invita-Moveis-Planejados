import listSobre from './sobre.json'
import { contato } from './contato.json'
import { Avatar, AvatarImage } from '../ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'

export default function Rodape() {
  return (
    <footer className="bg-secondary w-full text-primary">
      <div className="h-[240px] container mx-auto flex items-center justify-around">
        <div className="flex flex-col justify-around h-full">
          <h2 className="text-lg font-bold">Sobre</h2>
          <div className="flex flex-col gap-1">
            {listSobre.map(({ nome, href }) => (
              <a href={href} key={nome}>
                {nome}
              </a>
            ))}
          </div>
          <a href="#">Termos & Condições</a>
        </div>

        <div className="flex flex-col justify-around h-full">
          <h2 className="text-lg font-bold">Contato</h2>
          <div className="flex flex-col gap-1">
            <a href="">{contato.telefone}</a>
            <a href="">{contato.email}</a>
          </div>
          <a href="#">2022 Elettromec. Todos os direitos reservados.</a>
        </div>

        <div className="flex flex-col justify-around h-full">
          <img
            className="max-w-[210px]"
            src="/image/logo-rodape.png"
            alt="Logo Invita"
          />
          <div className="flex gap-1">
            {contato.redes_sociais.map(({ nome, url, image }) => (
              <a href={url} key={nome}>
                <Avatar className="border p-0.5">
                  <AvatarImage src={image} />
                  <AvatarFallback>{nome}</AvatarFallback>
                </Avatar>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
