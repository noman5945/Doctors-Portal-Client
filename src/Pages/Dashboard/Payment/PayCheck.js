import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PayCheck = ({ booking }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [payError, setPayError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { Price, Patient, Email, _id } = booking;
  const payment_save_API = `http://localhost:5000/payment-save`;
  const date = new Date();

  useEffect(() => {
    //Create Payment Intent as soon as the page loads
    const payment_intent_API = `http://localhost:5000/create-payment-intent`;
    fetch(payment_intent_API, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ Price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [Price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error.message);
      setPayError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setPayError("");
    }

    stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: Patient,
            email: Email,
          },
        },
      })
      .then(function (result) {
        // Handle result.error or result.paymentIntent
        if (result.error) {
          setPayError(result.error);
          return;
        } else {
          if (result.paymentIntent.status === "succeeded") {
            toast.success(
              `Payment completed. TranxID: ${result.paymentIntent.id}`
            );
            const paymentInfo = {
              Patient: Patient,
              Pay_Email: Email,
              Transaction_ID: result.paymentIntent.id,
              Date:
                date.getDate() +
                "/" +
                (date.getMonth() + 1) +
                "/" +
                date.getFullYear(),
              Time: (date.getHours() % 12) + ":" + date.getMinutes(),
              Amount: Price,
              Booking_Id: _id,
            };
            console.log(paymentInfo);
            fetch(payment_save_API, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(paymentInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                toast.success("Payment Record added");
                console.log(data);
              });
          }
        }
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      <p className=" text-red-500 font-semibold">{payError}</p>
    </>
  );
};

export default PayCheck;
