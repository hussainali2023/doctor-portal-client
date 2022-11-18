import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imagegeHostKey = process.env.REACT_APP_imgbb_key;
  //   console.log(imagegeHostKey);

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["speciality"],
    queryFn: async () => {
      const res = fetch("http://localhost:5000/appointmentSpeciality");
      const data = await (await res).json();
      //   console.log(specialties);
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    // console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imagegeHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          console.log(imgData.data.url);
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className=" w-96, p-7">
      <h1 className=" text-5xl">Add a Doctor</h1>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: "Name is Required" })}
            type="text"
            className="input input-bordered w-full"
          />
          {errors.name && (
            <p className=" text-red-700" role="alert">
              {errors.name?.message}
            </p>
          )}
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: "Email is Required" })}
            type="email"
            className="input input-bordered w-full"
          />
          <select
            {...register("specialty")}
            className="select input-bordered w-full"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>

        <label className="label">
          <span className="label-text">Photo</span>
        </label>
        <input
          {...register("image", { required: "image is Required" })}
          type="file"
          className="input input-bordered w-full"
        />
        {errors.img && (
          <p className=" text-red-700" role="alert">
            {errors.name?.message}
          </p>
        )}

        <input
          className=" mt-6 btn btn-accent text-white font-semibold w-full"
          type="submit"
          value={"Add Doctor"}
        />

        {<p className=" text-red-600 font-semibold"></p>}
      </form>
    </div>
  );
};

export default AddDoctor;
