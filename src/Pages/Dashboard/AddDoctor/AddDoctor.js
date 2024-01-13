import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Submit = (data) => {
    console.log(data);
  };
  return (
    <div className=" w-96 h-[480px]">
      <h3 className=" text-xl font-bold">Add Doctor</h3>
      <form onSubmit={handleSubmit(Submit)}>
        <div className="p-3">
          <label className=" font-semibold text-lg">Doctors Name</label>
          <input
            className="input input-bordered w-full max-w-xs h-[44px]"
            {...register("doctorsName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z ]+$/i,
            })}
          ></input>
          {errors?.doctorsName?.type === "required" && (
            <p className=" text-red-700 text-base">Doctors Name required</p>
          )}
          {errors?.doctorsName?.type === "maxLength" && (
            <p className=" text-red-700 text-base">
              Name cannot exceed 20 characters
            </p>
          )}
          {errors?.doctorsName?.type === "pattern" && (
            <p className=" text-red-700 text-base">Name must be alphabet</p>
          )}
        </div>
        <div className="p-3">
          <label className=" font-semibold text-lg">Doctors Email</label>
          <input
            className="input input-bordered w-full max-w-xs h-[44px]"
            {...register("doctorsEmail", {
              required: "Email is required",
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          ></input>
          {errors?.doctorsEmail?.type === "pattern" && (
            <p className="text-red-700 text-base">Not a valid email</p>
          )}
          {errors?.doctorsEmail?.type === "required" && (
            <p className="text-red-700 text-base">Email is required</p>
          )}
        </div>
        <div className="p-3">
          <input type="submit" className="btn w-full h-[48px]" value="LOGIN" />
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
