import React from 'react';

import styles from './CardList.module.css';

import OrderCard from '../OrderCard/OrderCard';


const CardList = props => {

  const orderList = props.filteredOrders.map( order => (
    <OrderCard key={order[0]} orderData={order[1]}/>
  ));

  return (
    <div className={styles.cardlist}>
      {orderList}
    </div>
  )
};


export default CardList;