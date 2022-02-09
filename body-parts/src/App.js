import React from 'react';

import CardListContainer from './components/CardListContainer/CardListContainer';
import FormContainer from './components/FormContainer/FormContainer';

import styles from  './App.module.css';

import mockOrderProfiles from './assets/mockOrderData';

// add filter for orders on order view component

function App() {
  const filteredOrders = Object.entries(mockOrderProfiles);
  // const [filteredOrders, setFilteredOrders] = useState(filteredOrderList);
  
// console.log(filteredOrders)

  return (
    <div className={styles.app}>
      <FormContainer />
      <CardListContainer filteredOrders={filteredOrders} />
    </div>
  );
}

export default App;
