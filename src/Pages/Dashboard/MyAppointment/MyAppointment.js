import React, { useContext } from "react";
import DashBoardTable from "../DashBoardTable/DashBoardTable";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/clientBookings?email=${user?.email}`;
  const { data, isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });

  //console.log(data);
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className=" w-full p-2">
      <h3 className=" text-3xl  mb-3">My Appointments</h3>
      <DashBoardTable data={data}></DashBoardTable>
    </div>
  );
};

export default MyAppointment;
