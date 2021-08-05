import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import { useState, useEffect, useRef } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import OrderList from '../../components/OrderList/OrderList'
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function OrderHistoryPage({ user, setUser}) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(function() {
    // Sometimes using .then can be cool/concise
    // ordersAPI.getCart().then(cart => setCart(cart));
    async function getUserOrders() {
      const orders = await ordersAPI.getUserOrders();
      console.log(orders);
      setOrders(orders);
    }
    getUserOrders();
  }, []);


  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <div>
        <OrderList
          orders={orders} 
          setActiveOrder={setActiveOrder} 
          activeOrder={activeOrder}
        />
      </div>
      <OrderDetail order={activeOrder} />
    </main>
  );
}