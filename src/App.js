import { MdArrowUpward } from "react-icons/md";
import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <div className="appContainer">
      <Navigation />
      <Outlet />
      <Footer />
      <div className="topPage" onClick={()=> window.scroll(0,0)}>
        <a href="#topPage">
          <MdArrowUpward />
        </a>
      </div>
      <div className="cookiesWrapper">
        <img src="./assets/cookies.png" alt="cookies" />
      </div>
    </div>
  );
}

export default App;
