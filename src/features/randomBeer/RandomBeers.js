import React from "react";
import {
  useGetSelectionQuery,
  useFetchRandomBeerQuery,
} from "../../services/brewdog";
import "./random-beer.css";

const RandomBeers = () => {
  const { data: beers, error, isLoading } = useGetSelectionQuery();
  const { data: randomBeerResult, refetch } = useFetchRandomBeerQuery();

  const handleClick = () => {
    refetch();
  };

  return (
    <div className="random-beer">
      <div className="random-beer__random">
        Random Beer!
        {randomBeerResult && <h3>{randomBeerResult[0].name}</h3>}
        <button onClick={handleClick}>Fetch a new random beer</button>
      </div>
      <div className="random-beer__names">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : beers ? (
          <>
            {beers.map((beer) => {
              return <h3 key={beer.name}>{beer.name}</h3>;
            })}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default RandomBeers;
