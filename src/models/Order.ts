/* eslint-disable no-unused-vars */
export const enum OrderStatus {
  pending = 'Pending',
  completed = 'Completed',
  delivered = 'Delivered',
}

export const OrderStatusDescriptions: Record<OrderStatus, string> = {
  [OrderStatus.pending]: 'Order is pending',
  [OrderStatus.completed]: 'Order is completed',
  [OrderStatus.delivered]: 'Order is delivered to the customer',
}

export interface Order {
  id: string,
  processedAt: string,
  status: OrderStatus,
  customer: string,
  total: number
}
