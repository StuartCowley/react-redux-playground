import React, { useState } from "react";
import { useGetSelectionQuery } from "../../services/brewdog";
import "./random-beer.css";

const RandomBeers = () => {
  const [randomBeer, setRandomBeer] = useState(null);
  const { data: beers, error, isLoading } = useGetSelectionQuery();

  const handleClick = () => {
    setRandomBeer(beers[Math.floor(Math.random() * beers.length)]);
  };

  return (
    <div className="random-beer">
      <div className="random-beer__random">
        {randomBeer && <h3>{randomBeer.name}</h3>}
        <button onClick={handleClick}>Pick random beer from list</button>
      </div>
      <div className="random-beer__names">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : beers ? (
          <>
            {beers.map((beer) => {
              return <h3>{beer.name}</h3>;
            })}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default RandomBeers;
