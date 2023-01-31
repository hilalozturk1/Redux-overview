import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import styles from "./Header.module.css";

function Header({item}) {
  const [value, setValue] = useState(10000);
  const [startNum, setStartNum] = useState(0);
  const [isLoading, setLoading] = useState(false);
  
  const start = (number) => {
    if (isLoading) {
      return startNum;
    }
    return number;
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div>
      <img src="https://neal.fun/spend/billgates.jpg" alt="" />
      <h2 className={styles.header}>Spend Bill Gates' Money</h2>
      <div className={styles.container}>
        <CountUp end={value} start={start(startNum)} duration={0.5} />
      </div>
      <button
        onClick={() => {
          setStartNum(value);
          setValue(value - 100);
        }}
      >
        decrease
      </button>
    </div>
  );
}

export default Header;
