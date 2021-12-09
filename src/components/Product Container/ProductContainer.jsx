import "./ProductContainer.scss";

import OrderList from "./List/OrderList";
import Subtotal from "./Subtotal/Subtotal";
import ItemSelection from "./Selection/Selection";

const ProductContainer =() => {
  return (
    <div className="product-container">
      <h1>Product Selection</h1>
      <ItemSelection/>
      <section className="item-list">
        <OrderList/>
      </section>
      <Subtotal/>
    </div>
  )
}

export default ProductContainer;