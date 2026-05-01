import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <BrowserRouter>
      <Navbar/>
    <App />
  </BrowserRouter>
);