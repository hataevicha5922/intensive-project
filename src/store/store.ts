import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { filmSlice } from "./filmSlice";
import { favoritesReducer } from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    userData: userReducer,
    favorites: favoritesReducer,
    [filmSlice.reducerPath]: filmSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
