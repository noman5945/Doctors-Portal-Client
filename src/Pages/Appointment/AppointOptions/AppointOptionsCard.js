import React from "react";

const AppointOptionsCard = ({ appointOptions, handleAppointMent }) => {
  const { name, price, slots } = appointOptions;
  return (
    <div className="px-124 py-10 text-center rounded-lg shadow-Fxl">
      <p className=" font-semibold font-sans text-xl text-secondary">{name}</p>
      <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
      <p>
        {slots.length} {slots.length > 1 ? "spaces" : "space"} available
      </p>
      <p className=" font-bold">Price:${price}</p>
      <label
        htmlFor="my_modal_6"
        className="btn mt-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg border-stone-50"
        onClick={() => handleAppointMent(appointOptions)}
      >
        Make Appointment
      </label>
    </div>
  );
};

export default AppointOptionsCard;
