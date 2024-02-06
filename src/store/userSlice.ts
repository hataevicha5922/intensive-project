import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../config/firebase-config";

interface UserInterface {
  email: string;
  uid: string;
}

export type UserState = {
  authorize: boolean;
  user: UserInterface | null;
};

const initialState: UserState = {
  authorize: !!auth,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
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

export default userSlice.reducer;
export const { addUser, logOut } = userSlice.actions;
