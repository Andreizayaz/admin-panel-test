import React from "react";
import ReactDOM from "react-dom/client";

import { AdminPage } from "src/components/pages";

import "./scss/main.scss";
import { Provider } from "react-redux";
import { persistor, store } from "src/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <AdminPage />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
