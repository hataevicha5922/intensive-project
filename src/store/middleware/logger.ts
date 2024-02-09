/* eslint-disable no-console */
import { Action, MiddlewareAPI } from "@reduxjs/toolkit";

export const logger =
  (store: MiddlewareAPI) =>
  (next: (action: Action) => void) =>
  (action: Action) => {
    console.log("dispatching", action);
    console.log("before", store.getState());
    const res = next(action);
    console.log("after", store.getState());

    return res;
  };
