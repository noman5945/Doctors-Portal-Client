import React from "react";
import clock from "../../../assets/icons/clock.svg";
import location from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const UnderBanner = () => {
  const openingTime = "10 AM - 10 PM";
  const loc = "Brooklyn,NY 10036,United States";
  const phoneNo = "01552321409";

  return (
    <div className="mx-auto">
      <div className="mt-0 grid grid-cols-1 lg:grid-cols-3 gap-3 ">
        <div className="bg-secondary border rounded-md py-2 flex flex-row">
          <img src={clock} alt="clock" />
          <div className="block text-white font-bold m-6">
            <h2>Opening Hours</h2>
            <p>{openingTime}</p>
          </div>
        </div>
        <div className="bg-neutral border rounded-md py-2 flex flex-row">
          <img src={location} alt="location-mark" />
          <div className="block text-white font-bold m-6">
            <h2>Visit Our Location</h2>
            <p>{loc}</p>
          </div>
        </div>
        <div className="bg-secondary border rounded-md py-2 flex flex-row">
          <img src={phone} alt="phone" />
          <div className="block text-white font-bold m-6">
            <h2>Contact Us</h2>
            <p>{phoneNo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderBanner;
