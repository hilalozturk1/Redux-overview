import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";

function Home() {
  const data = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {data.map((item) => (
        <div key={item.name}>
          <div>{item.name}</div>
          <a href={item.url}>{item.url}</a>
        </div>
      ))}
    </div>
  );
}

export default Home;
