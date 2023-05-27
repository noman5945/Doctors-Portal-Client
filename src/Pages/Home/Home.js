import React from "react";
import Banner from "./Banner/Banner";
import UnderBanner from "./UnderBanner/UnderBanner";
import Services from "./Services/Services";
import MidSection from "./MidSection/MidSection";
import HomeAppoint from "./HomeAppoint/HomeAppoint";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <UnderBanner></UnderBanner>
      <Services></Services>
      <MidSection></MidSection>
      <HomeAppoint></HomeAppoint>
    </div>
  );
};

export default Home;
