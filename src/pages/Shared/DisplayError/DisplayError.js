import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    return logOut()
      .then(() => {
        navigate("/login");
        toast.success("Successfully Logout");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="d-flex justify-center">
      <div>
        <p className="text-red-500 text-3xl">Something went wrong</p>
        <p className=" text-red-600 text-2xl">
          {error.statusText || error.message}
        </p>
        <h4 className=" text-3xl">
          Please{" "}
          <button className=" btn btn-warning" onClick={handleLogOut}>
            Sign Out
          </button>
        </h4>
      </div>
    </div>
  );
};

export default DisplayError;
