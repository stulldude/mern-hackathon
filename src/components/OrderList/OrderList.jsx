import OrderListItem from '../OrderListItem/OrderListItem';
import './OrderList.css'

export default function OrderList({ orders, setActiveOrder, activeOrder }) {
  const ordersList = orders.map(order =>
    <li 
    className={order === activeOrder ? 'active' : ''}
    onClick={() => setActiveOrder(order)}>
    <OrderListItem
      order={order}
      key={order._id}
    />
    </li>
  );
  return (
    <main className="OrderList">
      <ul>
        {ordersList}
      </ul>
    </main>
  );
}