import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import JobOffers from "./pages/JobOffers/JobOffers";
import Housing from "./pages/Housing/Housing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actualités" element={<News />} />
          <Route path="/offres-d'emploi" element={<JobOffers />} />
          <Route path="/annonces-location" element={<Housing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
