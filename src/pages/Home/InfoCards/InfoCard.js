import React from "react";

const InfoCard = ({ card }) => {
  const { name, icon, description, bgClass } = card;
  return (
    <div className={`card p-6 md:card-side shadow-xl text-white ${bgClass}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
