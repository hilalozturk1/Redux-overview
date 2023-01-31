import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ProductCardContainer.module.css";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import Receipt from "../Receipt";

function ProductCardContainer() {
  const items = useSelector((state) => state.products.items);

  return (
    <div>
      <Container>
        <Row
          className={styles.containerProduct}
          style={{ marginLeft: "75px", display: "flex", flexWrap: "wrap", margin: "auto" }}
        >
          {items.map((item) => (
            <Col key={item.id} xl={4}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
        <Receipt  />
      </Container>
    </div>
  );
}

export default ProductCardContainer;
