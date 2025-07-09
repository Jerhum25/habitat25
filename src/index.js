import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./pages/Home/Home";
import Housing from "./pages/Housing/Housing";
import JobOffers from "./pages/JobOffers/JobOffers";
import News from "./pages/News/News";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/actualités" element={<News />} />
          <Route path="/offres-d'emploi" element={<JobOffers />} />
          <Route path="/annonces-location" element={<Housing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
