import React from "react";
import { Card } from "react-bootstrap";
import styles from "./ProductCard.module.css";

function ProductCard({item}) {

  return (
    <div>
      <Card className={styles.card}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title className={styles.cardTitle}>{item.productName}</Card.Title>
          <Card.Text className={styles.itemCost}>${item.productPrice}</Card.Text>
          <div className={styles.buySell}>
            <button className={styles.sellBtn}>Sell</button>
            <input className={styles.itemInput} />
            <button className={styles.buyBtn}>Buy</button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
