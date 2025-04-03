import { Avatar, AvatarImage } from '../ui/_shadcn/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import footerLinks from '@/database/footer-links.json'
import { contato } from '@/database/contato.json'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="bg-secondary w-full text-primary px-4">
      <div className="container mx-auto flex flex-wrap justify-between min-h-[240px] p-5">
        {/* Seção de Links */}
        <div className="flex justify-around w-full max-w-[400px] mx-auto">
          {/* Sobre */}
          <div className="flex flex-col justify-center">
            <strong className="mb-5">Sobre</strong>
            {footerLinks.map(({ nome, href }) => (
              <Link to={href} key={nome} className="hover:underline">
                {nome}
              </Link>
            ))}
            <Link to="/sobre" className="mt-auto hover:underline">
              Termos & Condições
            </Link>
          </div>

          {/* Contato */}
          <div className="flex flex-col justify-center">
            <strong className="mb-5">Contato</strong>
            <span>{contato.telefone}</span>
            <span className="text-amber-700">{contato.email}</span>
            <a
              href="https://github.com/ClaudioAnjoss"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto hover:underline"
            >
              © 2025 Claudio Anjos
            </a>
          </div>
        </div>

        {/* Redes Sociais e Logo */}
        <div className="w-full flex flex-col gap-4 p-4 items-center max-w-[300px] mx-auto">
          <div className="flex gap-3">
            {contato.redes_sociais.map(({ nome, url, image }) => (
              <a
                href={url}
                key={nome}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar className="p-0.5 hover:scale-105 transition-transform">
                  <AvatarImage src={image} alt={nome} />
                  <AvatarFallback>{nome}</AvatarFallback>
                </Avatar>
              </a>
            ))}
          </div>
          <img
            className="max-w-[210px]"
            src="/image/logo-rodape.png"
            alt="Logo Invita"
          />
        </div>
      </div>
    </footer>

    // <footer className="bg-secondary w-full text-primary px-4">
    //   <div className="container mx-auto flex justify-between min-h-[240px] p-5 flex-wrap">
    //     <div className="flex justify-around w-full max-w-[400px] mx-auto">
    //       <div className="flex flex-col justify-center">
    //         <strong className="mb-5">Sobre</strong>
    //         {footerLinks.map(({ nome, href }) => (
    //           <Link to={href} key={nome}>
    //             {nome}
    //           </Link>
    //         ))}
    //         <Link className="mt-auto" to={'/sobre'}>
    //           Termos & Condições
    //         </Link>
    //       </div>

    //       <div className="flex flex-col justify-center">
    //         <strong className="mb-5">Contato</strong>
    //         <span>{contato.telefone}</span>
    //         <span className="text-amber-700">{contato.email}</span>
    //         <a
    //           href="https://github.com/ClaudioAnjoss"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="mt-auto"
    //         >
    //           © 2025 Claudio Anjos.
    //         </a>
    //       </div>
    //     </div>

    //     <div className="w-full flex flex-col gap-4 p-4 items-center max-w-[300px] mx-auto  ">
    //       <div className="flex">
    //         {contato.redes_sociais.map(({ nome, url, image }) => (
    //           <a href={url} key={nome}>
    //             <Avatar className="border p-0.5">
    //               <AvatarImage src={image} />
    //               <AvatarFallback>{nome}</AvatarFallback>
    //             </Avatar>
    //           </a>
    //         ))}
    //       </div>
    //       <img
    //         className="max-w-[210px]"
    //         src="/image/logo-rodape.png"
    //         alt="Logo Invita"
    //       />
    //     </div>
    //   </div>
    // </footer>
  )
}
