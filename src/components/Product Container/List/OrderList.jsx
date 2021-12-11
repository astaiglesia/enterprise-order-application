import "./OrderList.scss";

const OrderList = () => {
  return (
    <div className="order-list">
      - create and import list item component
      - declare initial state with an empty itemList array of product-data-objects
      - onClick of additem to: 
          * validate item in database 
          * fetch product data-object
          * push object to itemList for the queried item
      - iterate through state list to render an li item compnent passing in object for component state
      - view re-renders on state change

      <ul>
        <li className="temp">
          List Item Component placeholder
        </li>
      </ul>
      
      
    </div>
  )
}

export default OrderList;

// - in Vue - refactor to
// const listItem = {
//   data() {
//     return {
//       items: [
//         'object1',
//         'object2',
//         'object3'
//       ]
//     }
//   }
// }
// <div id="listItem"> 
//   <li v-for="item in items">
//     {{ item }}
//   </li>
// </div>

