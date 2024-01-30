import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserState = {
  email: string;
  userId: string;
};

const initialState: UserState = {
  email: "",
  userId: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserState>) => {
      state.userId = action.payload.userId;
      state.email = action.payload.email;
    },
    logOut: (state) => {
      state.userId = "";
    },
  },
});

export default userSlice.reducer;
export const { addUser, logOut } = userSlice.actions;
