import AnimatedContent from '../ui/_react-bits/animated-content'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/_shadcn/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/_shadcn/form'
import { Input } from '@/components/ui/_shadcn/input'
import { toast } from 'sonner'
import SplitText from '../ui/_react-bits/split-text'

const FormSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'O nome de usuário deve ter pelo menos 2 caracteres.' })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message:
        'O nome de usuário só pode conter letras, números e underscores.',
    }),

  email: z
    .string()
    .email({ message: 'Por favor, insira um endereço de e-mail válido.' })
    .min(1, { message: 'O e-mail é obrigatório.' }),
})

export default function CardRegisterEmail() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('Dados do formulário enviados:', data)
    toast(
      <div>
        <strong>Cadastro realizado com sucesso!</strong>
        <p className="mt-2">
          Seu cadastro foi realizado com sucesso! Nossa equipe entrará em
          contato com você em breve.
        </p>
      </div>,
    )
  }

  return (
    <AnimatedContent delay={100} direction="horizontal" initialOpacity={0}>
      <div className="bg-white p-4 rounded shadow">
        <SplitText
          text="Receba as novidades"
          className="text-4xl font-bold text-pink-400 "
        />
        <h1></h1>
        <h2 className="text-base font-light py-4">
          Cadastre seu e-mail para receber todas as novidades Invita.
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-4 flex flex-col"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Digite seu e-mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              variant={'secondary'}
              type="submit"
              size={'lg'}
              className="cursor-pointer text-primary max-w-1/2 ml-auto"
            >
              Cadastrar
            </Button>
          </form>
        </Form>
      </div>
    </AnimatedContent>
  )
}
