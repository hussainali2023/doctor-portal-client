import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const ManageDoctors = () => {
  const { data: doctors } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("AccessToken")}`,
          },
        });
        const data = await (await res).json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  console.log(doctors);
  return (
    <div>
      <h1 className=" text-5xl text-center">
        Doctors Manager: {doctors?.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* <!-- row 1 --> */}
            {doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
