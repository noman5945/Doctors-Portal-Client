import React from "react";

const AppointTimeList = ({ treatMent, setShowTimelist }) => {
  return (
    <div className=" my-8">
      <h2 className=" my-5 text-center font-normal text-xl text-secondary">
        Appointment Timelist of {treatMent}
      </h2>
      <div className=" my-3">
        <div className="flex flex-row justify-around px-6 font-normal text-xl">
          <h2>Time Slots</h2>
          <h2>Click for Appointment</h2>
        </div>
        <div className="flex flex-row justify-around px-6 font-normal text-xl items-center rounded-lg shadow-Fxl mx-6 py-2 mt-4">
          <h2>08.00 AM - 08.30 AM</h2>
          <div>
            <button className="btn mt-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg border-stone-50">
              Appointment
            </button>
          </div>
        </div>
      </div>
      <button
        className="btn  mt-3 bg-redBack text-white rounded-lg border-stone-50 hover:bg-darkRed"
        onClick={() => setShowTimelist(false)}
      >
        Close List
      </button>
    </div>
  );
};

export default AppointTimeList;
