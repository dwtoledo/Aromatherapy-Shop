/* eslint-disable @stylistic/max-len */
import { zodResolver } from '@hookform/resolvers/zod'
import { Filter, FilterX } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { OrdersTable } from '@/components/OrdersTable'
import { Paginator } from '@/components/Paginator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Order } from '@/models/Order'
import { PageableResult } from '@/models/Pageable'

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
    <p className="text-xs italic leading-relaxed text-destructive">{message}</p>
  )
}

export function Orders() {
  const [orders, setOrders] = useState<PageableResult<Order>>(
    {} as PageableResult<Order>,
  )
  const [loading, setLoading] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FiltersForm>({
    resolver: zodResolver(filtersForm),
  })

  async function fetchOrders(pageIndex = 1, perPage = 10) {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        _page: pageIndex.toString(),
        _per_page: perPage.toString(),
      })
      const url = `${import.meta.env.VITE_BACKEND_URL}/orders?${params.toString()}`
      const response = await fetch(url)

      if (!response.ok) {
        // TODO - implement error handle
        console.log(`Error: ${response.status} - ${response.statusText}`)
      }
      const orders: PageableResult<Order> = await response.json()
      return orders
    } catch (error) {
      // TODO - implement error handle
      console.error('Failed to fetch orders:', error)
      return {} as PageableResult<Order>
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const getOrders = async () => {
      try {
        const orders = await fetchOrders(1)
        setOrders(orders)
      } catch (error) {
        // TODO - implement error handle
        console.log(error)
      }
    }
    getOrders()
  }, [])

  function handleFiltersSubmit(data: FiltersForm) {
    // TODO - implement filters
    console.log(data)
  }

  function handleClearFiltersClick() {
    // TODO - implement clear filters
    reset()
  }

  async function handlePageChange(page: number | null, perPage: number) {
    if (page === null) return
    const orders = await fetchOrders(page, perPage)
    setOrders(orders)
  }

  async function handlePerPageChange(perPage: number) {
    const orders = await fetchOrders(1, perPage)
    setOrders(orders)
  }

  return (
    <main className="flex-1">
      <Helmet title="Orders" />
      <h1>Orders</h1>
      <div>
        <span>Filters:</span>

        <form onSubmit={handleSubmit(handleFiltersSubmit)}>
          <Input placeholder="Order ID" type="text" {...register('orderId')} />
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

        {orders?.data?.length && !loading
          ? <OrdersTable orders={orders.data} />
          : <span>Loading orders.</span>}

        <Paginator
          onPageChange={handlePageChange}
          onPerPageChange={handlePerPageChange}
          last={orders.last}
          next={orders.next}
          pages={orders.pages}
          prev={orders.prev}
        />
      </div>
    </main>
  )
}
