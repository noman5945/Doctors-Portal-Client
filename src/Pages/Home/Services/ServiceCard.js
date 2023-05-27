import React from "react";

const ServiceCard = ({ serve }) => {
  const { img, name, details } = serve;
  return (
    <div className="block shadow-Fxl rounded-md p-4">
      <div className="flex justify-center">
        <img className="w-bx h-by" src={img} alt="" />
      </div>
      <div className="m-4">
        <h3 className="font-sans font-bold text-xl">{name}</h3>
        <p className="font-sans font-normal text-base">{details}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
