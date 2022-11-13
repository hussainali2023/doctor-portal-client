import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className=" h-[800px] flex justify-center items-center">
      <div className=" w-96 p-6">
        <h2 className=" text-xl font-semibold text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              type="password"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text">Forget Password ?</span>
            </label>
          </div>
          <input
            className=" btn btn-accent text-white font-semibold w-full"
            type="submit"
            value={"submit"}
          />
        </form>
        <p className=" text-secondary">
          New to Doctors Portal{" "}
          <Link className=" text-white" to="/signup"></Link>
          <div className="divider">OR</div>
          <button className=" btn btn-outline uppercase w-full">
            Continue With Google
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
