import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, selectTodos } from "../redux/counter/counterSlice";

function Counter() {
  const countValue = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h3>{countValue}</h3>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <br />
      <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} />
      <button onClick={() => dispatch(incrementByAmount(amount))}>Increment by Amount</button>
    </div>
  );
}

export default Counter;
