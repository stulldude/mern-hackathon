import './OrderListItem.css';

export default function OrderListItem({ order }) {
  return (
    <div className="MenuListItem">
      <div>
        <div>Order Id: {order.orderId}</div>
        <div>{order.createdAt.split('T')[0]}</div>
      </div>
      <div>
        <div>Order Total: $<span>{order.orderTotal.toFixed(2)}</span></div>
        <div>{order.totalQty} items</div>
      </div>
    </div>
  );
}