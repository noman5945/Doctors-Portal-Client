import React from "react";
import chair from "../../../assets/images/chair.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-banner-chair bg-cover bg-no-repeat hero w-full py-10">
      <div className="hero-content  p-12 flex-col lg:flex-row-reverse">
        <img src={chair} className="w-1/2 rounded-lg shadow-2xl" alt="" />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Your Smile Starts Here</h1>
          <p className="py-6">
            A web portal to find and book dental appointments and keep track of
            them
          </p>
          <Link to="/login">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
