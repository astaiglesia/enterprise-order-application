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

// - refactor list and dynamic component in Vue 
// use v-for :key and v-model (dynamically populating ul's) => relevant example in Sarah Drasner's CodePen -> https://codepen.io/sdras/pen/84ebef8c6b53973904071a1303958b31
//
// use v-on || @ directive as an event binder (button actions) => https://frontendmasters.com/courses/vue-3/event-bindings-v-on/
//
// <div id="listItem"> 
//   <li v-for="item in items">
//     {{ item }}
//   </li>
// </div>

