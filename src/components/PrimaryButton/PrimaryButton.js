import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="text-white btn btn-primary bg-gradient-to-l from-primary to-secondary">
      {children}
    </button>
  );
};

export default PrimaryButton;
