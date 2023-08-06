import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./redux/api/apiSlice.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <ApiProvider api={api}>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </ApiProvider>
  </React.StrictMode>
);
