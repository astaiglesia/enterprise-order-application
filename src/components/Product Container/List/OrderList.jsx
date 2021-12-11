import "./OrderList.scss";

const OrderList = () => {
  return (
    <div className="order-list">
      - create and import item component
      - declare initial state with an empty itemList array
      - onClick of additem to: 
          * validate item in database 
          * fetch product data
          * dynamically populates an item componet 
          * push to itemList with the queried item
      - product pushed to itemList triggers re-render of component
      - 
      <div className="temp">Item</div>
      <div className="temp">Item</div>
      <div className="temp">Item</div>
    </div>
  )
}

export default OrderList;