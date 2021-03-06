import React from 'react';

import styles from './OrderCard.module.css';

const OrderCard = props => {

  const orderData = props.orderData;

  const editOrderHandler = () => {
    console.log(orderData);

    // ### add functionality to open edit order view
  };

  
  
  return (
    <div className={styles.ordercard} onClick={editOrderHandler}>
      <div className={styles['card-field']}> {orderData.orderState} </div>
      <div className={styles['card-field']}> {orderData.orderNickname} </div>
      <div className={styles['card-field']}> {orderData.location} </div>
      <div className={styles['card-field']}> {orderData.client} </div>
      <div className={styles['card-field']}> {orderData.company} </div>
      <div className={styles['card-field']}> {orderData.deliveryDate.toLocaleString()} </div>
      <div className={styles['card-field']}> {orderData.rentalTerm} </div>
      <div className={styles['card-field']}> {orderData.productList.length} </div>
      <div className={styles['card-field']}> {orderData.tag} </div>
    </div>
  )
};


export default OrderCard;