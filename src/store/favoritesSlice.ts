/* eslint-disable no-console */
import { createSlice } from "@reduxjs/toolkit";
import { FavoritesFilmInterface } from "./types";




const initialState: FavoritesFilmInterface[] = [
  {
    description: "",
    nameRu: "",
    posterUrl: "",
    ratingKinopoisk: 0,
    year: 0,
  },
];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state = [...state, action.payload];
      console.log("state", state);
    },
  },
});

export default favoritesSlice.reducer;
export const { addToFavorites } = favoritesSlice.actions;
