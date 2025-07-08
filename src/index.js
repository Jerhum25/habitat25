import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import JobOffers from './pages/JobOffers/JobOffers';
import Housing from './pages/Housing/Housing';

const root = ReactDOM.createRoot(document.getElementById('root'));
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