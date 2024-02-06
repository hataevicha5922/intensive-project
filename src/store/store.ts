import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { filmSlice } from "./filmSlice";
import favoritesSlice from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    favorites: favoritesSlice,
    [filmSlice.reducerPath]: filmSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
