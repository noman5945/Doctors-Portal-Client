import React from "react";
import ServiceCard from "./ServiceCard";
import cavity from "../../../assets/images/cavity.png";
import flouride from "../../../assets/images/fluoride.png";
import white from "../../../assets/images/whitening.png";

const Services = () => {
  const serves = [
    {
      id: "01",
      img: flouride,
      name: "Flouride Treatment",
      details: "We do dental operations and provide treatment for teeth",
    },
    {
      id: "02",
      img: cavity,
      name: "Cavity Filling",
      details: "We provide cavity filling treatments in affordable rate",
    },
    {
      id: "03",
      img: white,
      name: "Teeth Whitening",
      details:
        "We have teeth whitening treatment facilty for bad looking teeth",
    },
  ];

  return (
    <div className="my-12 py-5 text-center">
      <div className="block">
        <h3 className="font-bold text-secondary text-xl">OUR SERVICES</h3>
        <p className="my-2 text-3xl font-sans">Services We Provide</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {serves.map((serve) => (
          <ServiceCard key={serve.id} serve={serve}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
