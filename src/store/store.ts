import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { filmSlice } from "./filmSlice";
import { favoritesReducer } from "./favoritesSlice";
import { logger } from "./middleware/logger";
import { searchSlice } from "./searchSlice/searchSlice";
import { searchWordReducer } from "./searchWordSlice/searchWordSlice";

export const store = configureStore({
  reducer: {
    userData: userReducer,
    favorites: favoritesReducer,
    searchWord: searchWordReducer,
    [filmSlice.reducerPath]: filmSlice.reducer,
    [searchSlice.reducerPath]: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(filmSlice.middleware)
      .concat(searchSlice.middleware, logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
