/* eslint-disable no-console */
import { createSlice } from "@reduxjs/toolkit";

interface FavoritesFilmInterface {
  posterUrl: string;
  description: string;
  nameRu: string;
  ratingKinopoisk: number;
  year: number;
}
export type FavoritesState = {
  films: FavoritesFilmInterface[];
};

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
