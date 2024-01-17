import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import PayCheck from "./PayCheck";

const Payment = () => {
  const booking_data = useLoaderData();
  const stripe_publish_Key = process.env.REACT_APP_STRIPE_PUBLISH_KEY;
  const stripePromise = loadStripe(stripe_publish_Key);
  return (
    <div>
      <h3 className=" text-2xl font-bold">
        Payment for {booking_data.Service}
      </h3>
      <p className=" my-4 text-xl font-semibold">
        Doctor Fee:${booking_data.Price}
      </p>
      <div className=" w-96 mt-12">
        {" "}
        <Elements stripe={stripePromise}>
          <PayCheck />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
