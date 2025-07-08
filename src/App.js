import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import JobOffers from "./pages/JobOffers/JobOffers";
import Housing from "./pages/Housing/Housing";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navigation/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
