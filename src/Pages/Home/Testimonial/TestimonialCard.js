import React from "react";

const TestimonialCard = ({ comments }) => {
  const { img, location, name, comm } = comments;
  return (
    <div className="block shadow-Fxl rounded-md p-5 font-sans">
      <div className="mb-[15px] font-normal text-base">{comm}</div>
      <div className="flex flex-row">
        <img
          className=" rounded-full border-4 border-primary"
          src={img}
          alt=""
        />
        <div className="mx-3">
          <h3 className=" font-semibold text-xl">{name}</h3>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
