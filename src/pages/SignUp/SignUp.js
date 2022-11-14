import { tr } from "date-fns/locale";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  };
  return (
    <div className=" h-[800px] flex justify-center items-center">
      <div className=" w-96 p-6">
        <h2 className=" text-xl font-semibold text-center">SignUp</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
            {errors.email && (
              <p className=" text-red-700" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  message: "Password must be strong",
                },
              })}
              type="password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className=" text-red-700" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input
            className=" btn btn-accent text-white font-semibold w-full"
            type="submit"
            value={"submit"}
          />
        </form>
        <p className=" ">
          Already Have an Account ? &nbsp;
          <Link className="text-secondary" to="/login">
            Please Login
          </Link>
          <div className="divider">OR</div>
          <button className=" btn btn-outline uppercase w-full">
            Continue With Google
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
