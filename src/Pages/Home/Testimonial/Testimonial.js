import React from "react";
import quote from "../../../assets/icons/quote.svg";
import TestimonialCard from "./TestimonialCard";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";

const Testimonial = () => {
  const userComments = [
    {
      id: "01",
      name: "Winston Harry",
      location: "California",
      img: people1,
      comm: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: "02",
      name: "Jenna Presley",
      location: "California",
      img: people2,
      comm: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: "03",
      name: "Jessica Jaymes",
      location: "California",
      img: people3,
      comm: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="mt-[84px] mb-[150px]">
      <div className="flex flex-row lg:justify-between mb-1/2">
        <div className="font-sans w-[228px] h-[115px] lg:w-[414px] lg:h-[74px]">
          <h3 className="text-secondary font-bold text-xl">Testimonial</h3>
          <h2 className="text-4xl">What Our Patient Says</h2>
        </div>
        <div>
          <img
            className="w-[98px] h-[79px] lg:w-[192px] lg:h-[156px]"
            src={quote}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {userComments.map((comment) => (
          <TestimonialCard
            key={comment.id}
            comments={comment}
          ></TestimonialCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
