import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import styles from "./ProductCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateCount } from "../../redux/products/productsSlice";

function ProductCard({ item }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [disabledSell, setDisabledSell] = useState(false);
  const budget = useSelector((state) => state.products.budget);

  useEffect(() => {
    dispatch(updateCount({ count: count, id: item.id }));
  }, [count, dispatch, item]);

  useEffect(() => {
    if (count > 0) {
      setDisabled(Number(count) <= 0);
    } else {
      setDisabled(Number(count) <= 0);
    }
  }, [count]);

  useEffect(() => {
    if (budget < item.productPrice) {
      setDisabledSell(budget < item.productPrice);
    } else {
      setDisabledSell(budget < item.productPrice);
    }
  }, [budget]);

  const buy = () => {
    setCount(Number(count) + 1);
  };

  const sell = () => {
    setCount(Number(count) - 1);
    setDisabled(Number(count) <= 0);
  };

  return (
    <div>
      <Card className={styles.card}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title className={styles.cardTitle}>{item.productName}</Card.Title>
          <Card.Text className={styles.itemCost}>${item.productPrice}</Card.Text>
          <div className={styles.buySell}>
            <button
              className={disabled === true ? styles.disabledBtn : styles.sellBtn}
              onClick={sell}
              disabled={disabled}
            >
              Sell
            </button>
            <input className={styles.itemInput} value={count} />
            <button
              className={disabledSell === true ? styles.disabledBtn : styles.buyBtn}
              onClick={buy}
              disabled={disabledSell}
            >
              Buy
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
