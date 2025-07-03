import React from "react";
import Advantages from "../../components/Advantages/Advantages";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import HousingSearch from "../../components/HousingSearch/HousingSearch";
import Navigation from "../../components/Navigation/Navigation";
import Actus from "../../components/Actus/Actus";
import HousingSelection from "../../components/HousingSelection/HousingSelection";
import OnlineAgency from "../../components/OnlineAgency/OnlineAgency";
import Testimonials from "../../components/Testimonials/Testimonials";
import JoinUs from "../../components/JoinUs/JoinUs";

function Home(props) {
  return (
    <div className="homeContainer">
      <Navigation />
      <Banner />
      {/* <HousingSearch /> */}
      {/* <Advantages /> */}
      {/* <Actus/> */}
      {/* <HousingSelection/> */}
      {/* <OnlineAgency/> */}
      {/* <Testimonials/> */}
      {/* <JoinUs/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
