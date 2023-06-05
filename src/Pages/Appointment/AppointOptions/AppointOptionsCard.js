import React from "react";

const AppointOptionsCard = ({ title, handleAppointMent }) => {
  return (
    <div className="px-124 py-10 text-center rounded-lg shadow-Fxl">
      <p className=" font-semibold font-sans text-xl text-secondary">{title}</p>
      <button
        className="btn mt-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg border-stone-50"
        onClick={() => handleAppointMent(title)}
      >
        Make Appointment
      </button>
    </div>
  );
};

export default AppointOptionsCard;
