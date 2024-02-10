import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const getUserDataSelector = (state: RootState) => state.userData;

export const getAuthorizeSelector = createSelector(
  getUserDataSelector,
  (userData) => userData.authorize
);

export const getUserSelector = createSelector(
  getUserDataSelector,
  (userData) => userData.user
);

const getSearchResultSelector = (state: RootState) => state.search.queries;

export const getSearchResultFilms = createSelector(
  getSearchResultSelector,
  (searchData) => searchData.data
);
