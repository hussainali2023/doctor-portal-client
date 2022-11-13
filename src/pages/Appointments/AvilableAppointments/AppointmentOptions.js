import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AppointmentOptions = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center my-10">
        <h2 className="text-2xl font-semibold text-center text-secondary">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(option)}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
