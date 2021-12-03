import OrderList from "./List/OrderList";
import "./Order.scss"

const Order =() => {
  return (
    <div>
      <h1>Product Selection</h1>
      <section className="order-container">
        <OrderList/>
      </section>
    </div>
  )
}

export default Order;