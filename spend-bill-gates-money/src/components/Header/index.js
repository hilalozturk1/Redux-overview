import React from "react";
import CountUp from "react-countup";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

function Header() {
  const value = useSelector((state) => state.products.budget);

  return (
    <div>
      <img src="https://neal.fun/spend/billgates.jpg" alt="" />
      <h2 className={styles.header}>Spend Bill Gates' Money</h2>
      <div className={styles.container}>
        <CountUp end={value} start={0} duration={0.5} prefix="$ "/>
      </div>
    </div>
  );
}

export default Header;
