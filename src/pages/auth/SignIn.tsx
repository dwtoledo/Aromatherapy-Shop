import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Routes } from '@/routes'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      // TODO - Implement SignIn HTTP Request
      toast.success('We sent an authentication link to your e-mail.')
    } catch {
      toast.error('Error, please contact your system administrator.')
    }
  }

  return (
    <main className="flex-1">
      <Helmet title="Sign in" />
      <h1>Access panel sign in</h1>
      <p>Track your sales through the partner dashboard!</p>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Label htmlFor="email">Your e-mail:</Label>
        <Input id="email" type="email" {...register('email')} />
        <Button disabled={isSubmitting}>Sign in</Button>
      </form>
      <Link to={Routes.SIGNUP}>
        Don't have an account yet?
      </Link>
    </main>
  )
}
