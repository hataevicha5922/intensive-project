import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const getSearchWordDataSelector = (state: RootState) => state.searchWord;

export const getSearchWordSelector = createSelector(
  getSearchWordDataSelector,
  (searchWord) => searchWord.searchWord
);
