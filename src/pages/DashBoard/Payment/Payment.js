import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../Appointments/BookingModal/BookingModal";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
  const { treatment, price, slot, appointmentDate } = booking;
  return (
    <div>
      <h1 className=" text-3xl font-semibold">Payment for {treatment}</h1>
      <p className=" text-xl">
        Please Pay $ {price} for your appointment on {appointmentDate}
      </p>
      <div className=" w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
