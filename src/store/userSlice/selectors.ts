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

