import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  fetchedUrls: [],
  latestUrl: "",
};

const randomBeerSlice = createSlice({
  name: "randomBeer",
  initialState,
  reducers: {
    fetchRandomBeer: (state, action) => {
      state.latestUrl = action.payload;
    },
    addToFavourites: (state, action) => {
      if (!state.fetchedUrls.includes(action.payload)) {
        state.fetchedUrls.push(action.payload);
      }
    },
  },
});

export const fetchNewBeer = () => (dispatch) => {
  try {
    axios.get("https://api.punkapi.com/v2/beers/random").then((res) => {
      dispatch(fetchRandomBeer(res.data[0].name));
    });
  } catch (err) {
    console.log("Error: " + err);
  }
};

export const { addToFavourites, fetchRandomBeer } = randomBeerSlice.actions;

export default randomBeerSlice.reducer;
