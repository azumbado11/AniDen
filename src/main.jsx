import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FiltersState from "./Context/FiltersState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersState>
    <App />
  </FiltersState>
);
/* 
  Strict mode causes server rate limiting
  <React.StrictMode></React.StrictMode>
*/
