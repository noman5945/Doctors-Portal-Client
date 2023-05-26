import React from "react";
import clock from "../../../assets/icons/clock.svg";
import location from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const UnderBanner = () => {
  return (
    <div className="mx-auto">
      <div className="mt-0 grid grid-cols-1 lg:grid-cols-3 gap-3 ">
        <div className="bg-secondary border rounded-md py-2 flex flex-row">
          <img src={clock} alt="clock" />
          <div>Opening Hours</div>
        </div>
        <div className="bg-neutral border rounded-md py-2 flex flex-row">
          <img src={location} alt="location-mark" />
          <div>Visit Our Location</div>
        </div>
        <div className="bg-secondary border rounded-md py-2 flex flex-row">
          <img src={phone} alt="phone" />
          <div>Contact Us Now</div>
        </div>
      </div>
    </div>
  );
};

export default UnderBanner;
