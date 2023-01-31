import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Receipt.module.css";

function Receipt({item}) {


  return (
    <div>
      <Container>
        <Row>
          <Col xs={4}></Col>

          <Col className={styles.receiptBorder}>
            <Row>
              <h1>Your Receipt</h1>
              {
                <div key={item.id}>
                  <div className={styles.receiptLine}>
                    <Col sm={1}></Col>
                    <Col sm={4}>
                      <span>{item.productName}</span>
                    </Col>
                    <Col sm={4}>
                      <span style={{ textAlign: "center" }}>x{item.count}</span>
                    </Col>
                    <Col sm={4}>
                      {" "}
                      <span className={styles.receiptPrice}>${item.productPrice * item.count}</span>
                    </Col>
                    <Col sm={1}></Col>
                  </div>
                </div>
              }
              <div className={styles.totalName}>
                <Col sm={1}></Col>
                <Col>
                  <span>Total</span>
                  <span className={styles.totalPrice}>${21}</span>
                </Col>
                <Col sm={1}></Col>
              </div>
            </Row>
          </Col>
          <Col xs={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Receipt;
