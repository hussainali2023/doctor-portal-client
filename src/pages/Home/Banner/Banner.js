import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero bg-hero-pattern">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className=" text-2xl lg:text-5xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
