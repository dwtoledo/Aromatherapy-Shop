import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Order, OrderStatusType } from '@/models/Order'
import { OrderStatusIndicator } from './OrderStatusIndicator'

const mockedOrders: Array<Order> = [
  {
    customer: 'Douglas Toledo',
    id: 'dyicetmnljq0nohzdqg4zaf1',
    processedAt: '2024-08-22T19:00:10.546Z',
    status: OrderStatusType.Pending,
    total: 250,
  },
  {
    customer: 'Alessandra Souza',
    id: 'wh9rljx1pj86q1eev1j4ht1n',
    processedAt: '2024-08-22T19:15:10.546Z',
    status: OrderStatusType.Completed,
    total: 199.99,
  },
]

export function OrdersTable() {
  function handleNextStepClick(orderId: string) {
    // TODO - implement next step order
  }

  function handleOrderDetailsClick(orderId: string) {
    // TODO - implement open order details
  }

  function handleCancelOrderClick(orderId: string) {
    // TODO - implement cancel order
  }

  return (
    <Table>
      <TableCaption>A list of your recent orders.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Realized</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>
            <div className="flex gap-2 items-center">
              <ArrowRight size={18} />
              <span>Next Step</span>
            </div>

          </TableHead>
          <TableHead>Details</TableHead>
          <TableHead>Cancel</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockedOrders.map((order) => {
          return (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.processedAt}</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <OrderStatusIndicator status={order.status} />
                  <span>{order.status}</span>
                </div>
              </TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>
                <Button
                  className="flex gap-1 items-center justify-between w-max"
                  onClick={() => handleNextStepClick(order.id)}
                >
                  <ArrowRight size={18} className="flex-shrink-0" />
                  <span>Approve</span>
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => handleOrderDetailsClick(order.id)}
                >
                  <Search size={18} />
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => handleCancelOrderClick(order.id)}
                >
                  <X size={18} />
                </Button>
              </TableCell>
            </TableRow>
          )
        })}

      </TableBody>
    </Table>
  )
}
