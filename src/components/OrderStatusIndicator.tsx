import { OrderStatusType } from '@/models/Order'

interface OrderStatusIndicatorProps {
  status: OrderStatusType
}

export function OrderStatusIndicator({ status }: OrderStatusIndicatorProps) {
  return (
    <span
      data-status={status}
      className="flex items-center w-2 h-2 rounded-full
      bg-black
      data-[status=Pending]:bg-red-400
      data-[status=Completed]:bg-green-400
      data-[status=Delivered]:bg-pink-400"
    />
  )
}
