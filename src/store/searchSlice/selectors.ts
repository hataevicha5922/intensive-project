import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getSearchResultSelector = (state: RootState) => state.search;

export const getSearchResultFilms = createSelector(
  getSearchResultSelector,
  (searchData) => searchData
);
