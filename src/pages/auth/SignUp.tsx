import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Routes } from '@/routes'

const signUpForm = z.object({
  storeName: z.string(),
  storePhone: z.string(),
  managerName: z.string(),
  managerEmail: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const navigate = useNavigate()

  async function handleSignUp(data: SignUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      // TODO - Implement Login HTTP Request
      toast.success('Account created successfully!', {
        action: {
          label: 'Login',
          onClick: () => navigate(Routes.SIGNIN),
        },
      })
    } catch {
      toast.error('Error, please contact your system administrator.')
    }
  }

  return (
    <main className="flex-1">
      <Helmet title="Sign Up" />
      <h1>Create your free account</h1>
      <p>Become a partner and track your sales via the dashboard!</p>
      <form onSubmit={handleSubmit(handleSignUp)}>

        <Label htmlFor="storeName">Store name:</Label>
        <Input id="storeName" type="text" {...register('storeName')} />

        <Label htmlFor="managerName">Your name:</Label>
        <Input id="managerName" type="text" {...register('managerName')} />

        <Label htmlFor="managerEmail">Your e-mail:</Label>
        <Input id="managerEmail" type="email" {...register('managerEmail')} />

        <Label htmlFor="storePhone">Your phone:</Label>
        <Input id="storePhone" type="tel" {...register('storePhone')} />

        <Button disabled={isSubmitting}>Sign Up</Button>
      </form>

      <Link to={Routes.SIGNIN}>
        Already have an account?
      </Link>

    </main>
  )
}
