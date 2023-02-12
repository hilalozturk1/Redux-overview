import InitialCard from "../InitialCard";

import "./style.css";

function Card({ card, handleClick }) {
  return (
    <div>
      <button onClick={() => handleClick(card)}>
        {card.isMatched ? (
          <img src={`https://taniarascia.github.io/memory/${card.img}`} alt="" srcset="" />
        ) : (
          <InitialCard />
        )}
      </button>
    </div>
  );
}

export default Card;
