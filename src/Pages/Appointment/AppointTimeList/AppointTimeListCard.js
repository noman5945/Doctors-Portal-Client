import React from "react";

const AppointTimeListCard = ({ time }) => {
  return (
    <div className="flex flex-row justify-around px-6 font-normal text-xl items-center rounded-lg shadow-Fxl mx-6 py-2 mt-4">
      <h2>{time}</h2>
      <div>
        <button className="btn mt-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg border-stone-50">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointTimeListCard;
