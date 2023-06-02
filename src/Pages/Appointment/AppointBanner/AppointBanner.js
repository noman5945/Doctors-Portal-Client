import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointBanner = ({ selected, setSelected }) => {
  return (
    <header className="hero">
      <div className="bg-banner-chair bg-cover bg-no-repeat hero w-full py-10">
        <div className="hero-content  p-12 flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="w-1/2">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointBanner;
