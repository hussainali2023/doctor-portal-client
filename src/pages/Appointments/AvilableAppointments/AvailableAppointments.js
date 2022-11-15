import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOptions from "./AppointmentOptions";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);

  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/appointmentOptions")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <section className=" mt-10">
      <p className=" text-center text-secondary font-semibold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOptions>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
