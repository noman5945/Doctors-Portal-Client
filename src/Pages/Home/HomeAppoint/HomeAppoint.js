import React from "react";
import docSmall from "../../../assets/images/doctor-small.png";

const HomeAppoint = () => {
  const makeAppoint =
    "Our convenient Appointment feature empowers you to take control of your healthcare journey. Whether you're seeking routine check-ups, consultations, or specialized treatments, we've got you covered. No more hassle of trying to match your schedule with the doctor's availability. Simply browse through the list of qualified physicians, select your preferred date and time, and voila! Your appointment is booked.";
  return (
    <div className="bg-appointment-pic bg-cover bg-no-repeat w-[1441px] h-[533px] left-[-1] mt-[300px]">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center">
        <img
          className="hidden lg:block w-1/2 -mt-40 mx-8"
          src={docSmall}
          alt=""
        />
        <div className="font-sans lg:w-[533.74px] lg:h-[299px]">
          <h3 className="text-xl text-secondary font-bold">Appointment</h3>
          <h2 className="mt-6 text-white text-3xl">
            Make An Appointment Today
          </h2>
          <p className="my-4 text-white text-base">{makeAppoint}</p>
          <button className="mt-[45px] btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg border-stone-50">
            Make Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAppoint;
