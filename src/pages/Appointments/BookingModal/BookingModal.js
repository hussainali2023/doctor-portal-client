import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {
  const date = format(selectedDate, "PP");
  const { name, slots } = treatment;
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
          <form action="" className=" grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              value={date}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <select className="select select-bordered w-full">
              <option>Who shot first?</option>
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
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
