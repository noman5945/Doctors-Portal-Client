import React from "react";
import Banner from "./Banner/Banner";
import UnderBanner from "./UnderBanner/UnderBanner";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <UnderBanner></UnderBanner>
      <Services></Services>
    </div>
  );
};

export default Home;
