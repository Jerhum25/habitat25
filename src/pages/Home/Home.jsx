import { BiChevronUp } from "react-icons/bi";
import Actus from "../../components/Actus/Actus";
import Advantages from "../../components/Advantages/Advantages";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import HousingSearch from "../../components/HousingSearch/HousingSearch";
import HousingSelection from "../../components/HousingSelection/HousingSelection";
import JoinUs from "../../components/JoinUs/JoinUs";
import Navigation from "../../components/Navigation/Navigation";
import OnlineAgency from "../../components/OnlineAgency/OnlineAgency";
import Testimonials from "../../components/Testimonials/Testimonials";
import './Home.scss'
import { FaArrowUp, FaArrowUp19 } from "react-icons/fa6";
import { BsArrowUp } from "react-icons/bs";
import { MdArrowUpward } from "react-icons/md";

function Home(props) {
  return (
    <div className="homeContainer">
      <Navigation />
      <Banner />
      <HousingSearch />
      <Advantages />
      <Actus />
      <HousingSelection />
      <OnlineAgency />
      <Testimonials />
      <JoinUs />
      <Footer />
      <div className="cookiesWrapper">
        <img src="./assets/cookies.png" alt="cookies" />
      </div>
      <div className="topPage"><a href="#topPage"><MdArrowUpward /></a></div>
    </div>
  );
}

export default Home;
