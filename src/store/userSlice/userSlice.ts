import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../config/firebase-config";
import { UserState } from "../types";

export const initialState: UserState = {
  authorize: !!auth,
  user: null,
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { addUser, logOut } = userSlice.actions;
