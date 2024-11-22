export enum OrderStatusType {
  Pending = 'Pending',
  Completed = 'Completed',
  Delivered = 'Delivered',
}

export interface Order {
  id: string,
  processedAt: string,
  status: OrderStatusType,
  customer: string,
  total: number
}
