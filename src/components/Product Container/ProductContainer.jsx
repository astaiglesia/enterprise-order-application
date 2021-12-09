import "./ProductContainer.scss";

import OrderList from "./List/OrderList";
import Subtotal from "./Subtotal/Subtotal";
import ItemSelection from "./Selection/Selection";

const ProductContainer =() => {
  return (
    <div className="order-container">
      <h1>Product Selection</h1>
      <section className="item-entry">
        <ItemSelection/>
        <OrderList/>
        <Subtotal/>
      </section>
    </div>
  )
}

export default ProductContainer;