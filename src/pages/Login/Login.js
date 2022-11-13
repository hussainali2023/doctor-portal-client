import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className=" h-[800px] flex justify-center items-center">
      <div>
        <h2 className=" text-4xl font-semibold">Login</h2>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("firstName")}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <textarea {...register("aboutYou")} placeholder="About you" />
          <p>{data}</p>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
