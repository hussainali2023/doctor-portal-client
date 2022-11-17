import { tr } from "date-fns/locale";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        toast.success("successfully Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setLoginError(errorMessage);
      });
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
              })}
              type="password"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text">Forget Password ?</span>
            </label>
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

          <div>{loginError && <p>{loginError}</p>}</div>
        </form>
        <p className=" ">
          New to Doctors Portal? &nbsp;
          <Link className="text-secondary" to="/signup">
            Please Sign Up
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

export default Login;
