import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Loader from "../../Shared/Loader/Loader";
import { AuthContext } from "../../../context/AuthProvider";
import PaymentsTable from "../DashBoardTable/PaymentsTable";

const PaymentsList = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const get_payments = await fetch(
        `https://doctors-portal-server-one-gamma.vercel.app/payment-list?email=${user?.email}`
      );
      const data = await get_payments.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <p className=" text-2xl font-bold my-2">My Payments </p>
      <PaymentsTable data={data}></PaymentsTable>
    </div>
  );
};

export default PaymentsList;
