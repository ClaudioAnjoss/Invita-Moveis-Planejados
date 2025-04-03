import { Button } from '@/components/ui/_shadcn/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/_shadcn/form'
import { Input } from '@/components/ui/_shadcn/input'
import { Textarea } from '@/components/ui/_shadcn/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import SplitText from '@/components/ui/_react-bits/split-text'
import AnimatedContent from '@/components/ui/_react-bits/animated-content'
import bg from '@/image/bg-suporte.png'

const FormSchema = z.object({
  nome: z
    .string()
    .min(2, {
      message: 'O nome deve ter pelo menos 2 caracteres.',
    })
    .max(50, {
      message: 'O nome não pode ter mais de 50 caracteres.',
    }),
  email: z.string().email('E-mail inválido. Insira um e-mail válido.'),
  message: z
    .string()
    .min(10, {
      message: 'A mensagem deve ter pelo menos 10 caracteres.',
    })
    .max(160, {
      message: 'A mensagem não pode ter mais de 160 caracteres.',
    }),
})

export default function Support() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nome: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('Dados do formulário enviados:', data)

    toast(
      <div>
        <strong>Chamado recebido!</strong>
        <p className="mt-2">
          Nossa equipe entrará em contato com você por e-mail em breve.
        </p>
      </div>,
    )
  }

  return (
    <section
      className="w-full bg-rose-50"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <div className="bg-neutral-700 flex justify-center items-center py-6 md:h-56">
        <SplitText text="Suporte" className="text-primary font-bold text-5xl" />
      </div>
      <div className="container p-4 flex flex-col items-center md:items-end">
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
          <div
            className="max-w-[310px] flex flex-col gap-2 shadow p-4"
            style={{
              background: 'oklch(0.97 0.02 12.42 / 0.90)',
            }}
          >
            <h1 className="text-2xl font-bold text-rose-800">
              Precisando de ajuda?
            </h1>
            <h2 className="font-light text-lg">
              Envie sua pergunta que retornamos o mais rápido possível.
            </h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="ml-1">Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu nome" {...field} />
                      </FormControl>
                      <FormMessage className="font-light" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="ml-1">E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu E-mail" {...field} />
                      </FormControl>
                      <FormMessage className="font-light" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="ml-1">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Digite seu message,"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-light" />
                    </FormItem>
                  )}
                />
                <Button
                  className="text-primary w-full cursor-pointer mt-4"
                  type="submit"
                  variant={'secondary'}
                  size={'lg'}
                >
                  Enviar
                </Button>
              </form>
            </Form>
          </div>
        </AnimatedContent>
      </div>
    </section>
  )
}
