import React, { useContext } from "react";
import DoctorsTable from "../DashBoardTable/DoctorsTable";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";

const ManageDoctors = () => {
  const { user } = useContext(AuthContext);
  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const getDoctorsAPI = `http://localhost:5000/manage-doctors?email=${user.email}`;
      const res = await fetch(getDoctorsAPI, {
        method: "POST",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className=" p-4">
      <h3 className=" text-xl font-semibold">Manage Doctors</h3>
      <DoctorsTable datas={doctors}></DoctorsTable>
    </div>
  );
};

export default ManageDoctors;
