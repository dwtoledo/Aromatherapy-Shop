import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const loginForm = z.object({
  email: z.string().email(),
})

type LoginForm = z.infer<typeof loginForm>

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginForm>()

  async function handleLogin(data: LoginForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // TODO - Implement Login HTTP Request
  }

  return (
    <main className="flex-1">
      <Helmet title="Login" />
      <h1>Access panel login</h1>
      <p>Track your sales through the partner dashboard!</p>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Label htmlFor="email">Your e-mail:</Label>
        <Input id="email" type="email" {...register('email')} />
        <Button disabled={isSubmitting}>Login</Button>
      </form>
    </main>
  )
}
