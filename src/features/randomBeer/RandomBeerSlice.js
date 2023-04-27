import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  fetchedUrls: [],
  latestUrl: "",
  isLoading: false,
  error: null,
};
export const fetchNewBeer = createAsyncThunk(
  "randomBeer/fetchNewBeer",
  async () => {
    const response = await axios.get("https://api.punkapi.com/v2/beers/random");
    return response.data;
  }
);

const randomBeerSlice = createSlice({
  name: "randomBeer",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      if (!state.fetchedUrls.includes(state.latestUrl)) {
        state.fetchedUrls.push(state.latestUrl);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewBeer.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNewBeer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.latestUrl = action.payload[0].name;
    });
    builder.addCase(fetchNewBeer.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { addToFavourites } = randomBeerSlice.actions;

export default randomBeerSlice.reducer;
