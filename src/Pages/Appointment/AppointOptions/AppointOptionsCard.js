import React from "react";

const AppointOptionsCard = ({ title, slots, handleAppointMent }) => {
  return (
    <div className="px-124 py-10 text-center rounded-lg shadow-Fxl">
      <p className=" font-semibold font-sans text-xl text-secondary">{title}</p>
      <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
      <p>
        {slots.length} {slots.length > 1 ? "spaces" : "space"} available
      </p>
      <button
        className="btn mt-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg border-stone-50"
        onClick={() => handleAppointMent(title, slots)}
      >
        Make Appointment
      </button>
    </div>
  );
};

export default AppointOptionsCard;
