import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../types";

export const initialState: UserState = {
  authorizeChecked: false,
  user: null,
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    authorizeChecked: (state) => {
      state.authorizeChecked = true;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { addUser, logOut, authorizeChecked } = userSlice.actions;
