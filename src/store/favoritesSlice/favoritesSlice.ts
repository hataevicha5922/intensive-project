import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesState } from "../types";
import { FilmInterface } from "../../types/types";

const initialState: FavoritesState = {
  films: [],
  isFetching: false,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<FilmInterface[]>) => {
      state.films = action.payload;
      state.isFetching = true;
    },
    resetFavorites: (state) => {
      state.films = [];
      state.isFetching = false;
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { setFavorites, resetFavorites } = favoritesSlice.actions;
