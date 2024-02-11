import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchWord: "",
};

const searchWordSlice = createSlice({
  name: "searchWord",
  initialState,
  reducers: {
    setSearchWord: (state, action: PayloadAction<string>) => {
      state.searchWord = action.payload;
    },
  },
});

export const searchWordReducer = searchWordSlice.reducer;
export const { setSearchWord } = searchWordSlice.actions;
