import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import {DataProvider} from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </DataProvider>
    </Provider>
  </React.StrictMode>
);
