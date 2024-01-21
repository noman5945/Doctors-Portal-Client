import React from "react";
import treat from "../../../assets/images/treatment.png";
import { Link } from "react-router-dom";

const MidSection = () => {
  const details =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page";

  return (
    <div className="mt-36 mx-32 flex flex-col lg:flex-row items-center">
      <div>
        <img
          className="rounded-md w-[322px] h-[406px]  lg:w-[458px] lg:h-[576px]"
          src={treat}
          alt=""
        />
      </div>
      <div className="mx-[25px] my-[37px] lg:ms-[128px] w-[376px] h-[433px]  lg:w-[497px] lg:h-[347px]">
        <h1 className="font-bold text-5xl">
          Exceptional Dental Care, on Your Terms
        </h1>
        <p className="mt-[26px]">{details}</p>
        <Link to="/login">
          <button className="mt-[45px] btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg border-stone-50">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MidSection;
