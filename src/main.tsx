import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./store";
import { GlobalLayout } from "./layouts";

import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
      <GlobalLayout />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
