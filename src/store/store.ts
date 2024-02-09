import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { filmSlice } from "./filmSlice";
import { favoritesReducer } from "./favoritesSlice";
import { logger } from "./middleware/logger";

export const store = configureStore({
  reducer: {
    userData: userReducer,
    favorites: favoritesReducer,
    [filmSlice.reducerPath]: filmSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmSlice.middleware, logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
