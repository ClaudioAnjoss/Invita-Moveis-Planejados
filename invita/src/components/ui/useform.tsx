import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

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

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('Form data submitted:', data)
    toast(
      <div>
        <strong>Cadastro realizado com sucesso!</strong>
        <p className="mt-2">
          Seu cadastro foi realizado com sucesso. Verifique seu e-mail para
          encontrar um link de convite e confirmar sua conta.
        </p>
      </div>,
    )
  }

  return (
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
  )
}
