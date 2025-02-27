import React, { useState, useEffect } from "react";
import "./DomainStyle.css";
import Cards from "./Cards";

const Domain = () => {
 

  return (
    <div className="domain">
      <video autoPlay loop muted className="background-video">
        <source src="/videos/bg-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="domain-container">
     <Cards/>
     </div>
    </div>
  );
};

export default Domain;