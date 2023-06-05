import React from "react";
import AppointOptionsCard from "./AppointOptionsCard";

const AppointOptions = ({ date }) => {
  const services = [
    {
      _id: "01",
      title: "Teeth Orthondicts",
    },
    {
      _id: "02",
      title: "Cosmetic Dentistry",
    },
    {
      _id: "03",
      title: "Teeth Cleaning",
    },
    {
      _id: "04",
      title: "Cavity Protection",
    },
    {
      _id: "05",
      title: "Pediatric Dental",
    },
    {
      _id: "06",
      title: "Oral Surgery",
    },
  ];
  return (
    <section className="my-16">
      <div className="text-center font-normal ">
        <p className="text-xl text-secondary">Available services On {date}</p>
        <p className="text-xl text-ash">Please Select a Service</p>
      </div>
      <div className=" my-5 grid grid-cols-1 lg:grid-cols-3 gap-3">
        {services.map((service) => {
          return (
            <AppointOptionsCard
              key={service._id}
              title={service.title}
            ></AppointOptionsCard>
          );
        })}
      </div>
    </section>
  );
};

export default AppointOptions;
