import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import bg from '@/image/bg-suporte.png'

const FormSchema = z.object({
  nome: z
    .string()
    .min(2, {
      message: 'Nome deve ter pelo menos 2 caracteres.',
    })
    .max(50, {
      message: 'Nome não pode ter mais de 50 caracteres.',
    }),
  email: z.string().email('Email inválido'),
  message: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
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
    toast(
      <pre className="mt-2 rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>,
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
      <div className="bg-neutral-700 flex justify-center items-center h-56">
        <h1 className="text-primary font-bold text-5xl">Suporte</h1>
      </div>
      <div className="container p-4 flex flex-col items-center md:items-end">
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
                      <Textarea placeholder="Digite seu message," {...field} />
                    </FormControl>
                    <FormMessage className="font-light" />
                  </FormItem>
                )}
              />
              <p className="text-sm text-muted-foreground">
                Your message will be copied to the support team.
              </p>
              <Button
                className="text-primary w-full cursor-pointer"
                type="submit"
                variant={'secondary'}
                size={'lg'}
              >
                Enviar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
