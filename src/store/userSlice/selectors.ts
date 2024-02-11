import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const getUserDataSelector = (state: RootState) => state.userData;

export const getAuthorizeCheckedSelector = createSelector(
  getUserDataSelector,
  (userData) => userData.authorizeChecked
);

export const getUserSelector = createSelector(
  getUserDataSelector,
  (userData) => userData.user
);

