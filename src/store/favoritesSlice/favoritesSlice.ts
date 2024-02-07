import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesFilmInterface, FavoritesState } from "../types";

const initialState: FavoritesState = {
  films: [],
  isFetching: false,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<FavoritesFilmInterface[]>) => {
      state.films = action.payload;
      state.isFetching = true;
    },
    resetFavorites: (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state.films = [];
      state.isFetching = false;
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { setFavorites, resetFavorites } = favoritesSlice.actions;
