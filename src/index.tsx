import React from "react";
import ReactDOM from "react-dom/client";

import { AdminPage } from "components/pages";

import "./scss/main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AdminPage />
  </React.StrictMode>
);
