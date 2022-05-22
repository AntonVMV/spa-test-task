import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./GlobalStyles";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
