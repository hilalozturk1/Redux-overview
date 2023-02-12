import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";

import { useSelector, useDispatch } from "react-redux";
import { cardSelectors, updateCard, updateOneCard } from "./redux/cardSlice";

function App() {
  const cards = useSelector(cardSelectors.selectAll);
  const dispatch = useDispatch();

  const [isMatched, setIsMatched] = useState(false);
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = (card) => {
    dispatch(
      updateOneCard({
        id: card.id,
        changes: {
          isMatched: true,
        },
      })
    );
    if (arr.length === 0 || arr.length < 2 || arr[0].id !== card.id) {
      setArr([...arr, card]);
    }
  };

  useEffect(() => {
    if (loading === true && arr.length > 1 && arr[0].img !== arr[1].img) {
      setTimeout(() => {
        dispatch(
          updateCard([
            ...cards,
            { id: arr[0].id, changes: { isMatched: false } },
            { id: arr[1].id, changes: { isMatched: false } },
          ])
        );
      }, 1000);
    } else if (arr.length > 1 && arr[0].img === arr[1].img && isMatched === true) {
      setArr([]);
    }
  }, [isMatched, arr, cards, dispatch, loading]);

  useEffect(() => {
    if (arr.length === 2) {
      if (arr[0].img === arr[1].img) {
        setIsMatched(true);
      } else {
        setIsMatched(false);
      }
      setArr([]);
    }
  }, [arr]);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="App">
      <div className="playground">
        {cards.map((card) => (
          <Card card={card} key={card.id} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
