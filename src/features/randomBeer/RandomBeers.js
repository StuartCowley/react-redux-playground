import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewBeer, addToFavourites } from "./RandomBeerSlice";
import "./random-beer.css";

const RandomBeer = () => {
  const latestUrl = useSelector((state) => state.randomBeer.latestUrl);
  const fetchedUrls = useSelector((state) => state.randomBeer.fetchedUrls);
  const dispatch = useDispatch();

  const handleFetchBeer = () => {
    dispatch(fetchNewBeer());
  };

  const handleAddToFavourites = () => {
    dispatch(addToFavourites(latestUrl));
  };

  return (
    <div className="random-beer">
      <div className="random-beer__fetch-container">
        <button onClick={handleFetchBeer}>Get a random beer!</button>
        <div className="random-beer__url">Latest URL: {latestUrl}</div>
        <span>Add this to favourites?</span>
        <button onClick={handleAddToFavourites}>Yes</button>
      </div>
      <div className="random-beer__fetched-urls">
        Fetched:
        <ul>
          {fetchedUrls.map((url, index) => (
            <div key={index}>{url}</div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RandomBeer;
