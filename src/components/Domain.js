import React, { useState, useEffect } from "react";
import "./DomainStyle.css";
import Cards from "./Cards";

const Domain = () => {
 

  return (
   
    <div   className="domain relative py-12 px-4 sm:px-6 lg:px-8 ">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center py-5">
  Domains
</h1>
      <div className="domain-container">
     <Cards/>
     </div>
    </div>
    
  );
};

export default Domain;