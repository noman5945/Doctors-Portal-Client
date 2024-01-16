import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const url = `http://localhost:5000/appointmentSpecialty`;
  const AddDoctorAPI = `http://localhost:5000/addDoctor`;

  const { data: options, isLoading } = useQuery({
    queryKey: ["options"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const imageHostKey = process.env.REACT_APP_imagebb_key;
  //console.log(imageHostKey);

  const Submit = (data) => {
    const image = data.doctorImg[0];
    const imageHostURL = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    const formData = new FormData();
    formData.append("image", image);
    fetch(imageHostURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const uploadedImgURL = imgData.data.url;
          console.log(uploadedImgURL);
          const doctor = {
            name: data.doctorsName,
            email: data.doctorsEmail,
            speciality: data.DoctorType,
            DocImg: uploadedImgURL,
          };
          fetch(AddDoctorAPI, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success(`${doctor.name} added as Doctor`);
              navigate("/dashboard");
            });
        }
      });
  };

  //must use Loading please. Because fetching takes time
  if (isLoading) {
    return <Loader></Loader>;
  }

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
          <label className=" font-semibold text-lg">Doctor Type</label>
          <select
            className="select select-bordered w-full max-w-xs"
            {...register("DoctorType")}
          >
            {options.map((opt, index) => {
              return (
                <option key={opt._id} value={opt.name}>
                  {opt.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className=" p-3">
          <input type="file" {...register("doctorImg")}></input>
        </div>
        <div className="p-3">
          <input
            type="submit"
            className="btn w-full h-[48px]"
            value="ADD DOCTOR"
          />
        </div>
      </form>
    </div>
  );
};

/**
 * Three places to store Images
 * 1. Image hosting server(Third Party)
 * 2. File System of your server
 * 3. mongodb(database)
 * Here I have used imagebb for photo storage
 */

export default AddDoctor;
