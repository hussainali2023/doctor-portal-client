import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const date = format(selectedDate, "PP");
  const { name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patientName,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            action=""
            className=" grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              value={date}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              <option>Who shot first?</option>
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent input-bordered w-full text-white cursor-pointer font-semibold"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;