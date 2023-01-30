import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import { Link } from "react-router-dom";

function Home() {
  const data = useSelector((state) => state.characters.items);
  const error = useSelector((state) => state.characters.error);
  const page = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const status = useSelector((state) => state.characters.status);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  console.log("data", data);
  return (
    <div>
      {status === "loading" && <div>Loading...</div>}
      {data.map((item) => (
        <div key={item.name}>
          {item.url}
          <Link to={`/detail/${data.indexOf(item)}`}>
            <div>{item.name}</div>
          </Link>
        </div>
      ))}
      <div style={{ textAlign: "center" }}>
        {hasNextPage && status !== "loading" && (
          <button
            onClick={() => {
              dispatch(fetchCharacters(page));
            }}
          >
            More {page}
          </button>
        )}
        {!hasNextPage && <div>There is nothing to be shown</div>}
      </div>
    </div>
  );
}

export default Home;
