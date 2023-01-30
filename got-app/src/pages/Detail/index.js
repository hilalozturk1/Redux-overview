import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function Detail() {
  const [char, setChar] = useState(null);
  const { id } = useParams();
  console.log("id:", id);
  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/${id}`)
      .then((res) => res.data)
      .then((data) => setChar(data));
  }, [id]);
  console.log("char", char);
  return (
    <div>
      {char && (
        <div>
          <h2>{char.name}</h2>
          <img srcSet={char.sprites.front_shiny} alt="" />
        </div>
      )}
    </div>
  );
}

export default Detail;
