import "./Order.scss";

import OrderList from "./List/OrderList";
import Subtotal from "./Subtotal/Subtotal";
import ItemSelection from "./Selection/Selection";

const Order =() => {
  return (
    <div>
      <h1>Product Selection</h1>
      <section className="order-container">
        <ItemSelection/>
        <OrderList/>
        <Subtotal/>
      </section>
    </div>
  )
}

export default Order;