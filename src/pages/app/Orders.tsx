import { zodResolver } from '@hookform/resolvers/zod'
import { Filter, FilterX } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { OrdersTable } from '@/components/OrdersTable'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const filtersForm = z.object({
  customerName: z
    .string()
    .trim()
    .refine((value) => !value || value.length >= 3, {
      message: 'Enter at least 3 letters.',
    })
    .optional(),
  orderId: z
    .string()
    .trim()
    .refine((value) => !value || z.string().cuid2().safeParse(value).success, {
      message: 'Invalid Order ID format.',
    })
    .optional(),
  orderStatus: z.enum(['pending', 'approved', 'delivered']).optional(),
})

type FiltersForm = z.infer<typeof filtersForm>

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="text-destructive text-xs leading-relaxed italic">
      {message}
    </p>
  )
}

export function Orders() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FiltersForm>({
    resolver: zodResolver(filtersForm),
  })

  function handleFiltersSubmit(data: FiltersForm) {
    // TODO - implement filters
  }

  function handleClearFiltersClick() {
    reset()
    // TODO - implement clear filters
  }

  return (
    <main className="flex-1">
      <Helmet title="Orders" />
      <h1>Orders</h1>
      <div>
        <span>Filters:</span>

        <form onSubmit={handleSubmit(handleFiltersSubmit)}>

          <Input
            placeholder="Order ID"
            type="text"
            {...register('orderId')}
          />
          <ErrorMessage message={errors.orderId?.message} />

          <Input
            placeholder="Customer name"
            type="text"
            {...register('customerName')}
          />
          <ErrorMessage message={errors.customerName?.message} />

          <Button>
            <Filter />
            Apply filters
          </Button>

          <Button type="button" onClick={handleClearFiltersClick}>
            <FilterX />
            Clear filters
          </Button>
        </form>

        <OrdersTable />

      </div>

    </main>
  )
}
