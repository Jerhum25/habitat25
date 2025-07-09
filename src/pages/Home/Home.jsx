import { MdArrowUpward } from "react-icons/md";
import Actus from "../../components/Actus/Actus";
import Advantages from "../../components/Advantages/Advantages";
import Banner from "../../components/Banner/Banner";
import HousingSearch from "../../components/HousingSearch/HousingSearch";
import HousingSelection from "../../components/HousingSelection/HousingSelection";
import JoinUs from "../../components/JoinUs/JoinUs";
import OnlineAgency from "../../components/OnlineAgency/OnlineAgency";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./Home.scss";

function Home(props) {
  return (
    <div className="homeContainer">
      {/* <Navigation /> */}
      <Banner />
      <HousingSearch />
      <Advantages />
      <Actus />
      <HousingSelection />
      <OnlineAgency />
      <Testimonials />
      <JoinUs />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
