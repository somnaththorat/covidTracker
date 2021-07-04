import React from "react";
import { Link } from "react-router-dom";


const Homepage = ({name,age}) => {
  console.log(name,age);
  return (
    <>
      <div><h1>this is homepage</h1></div>
      
      <Link to="/about">To About us</Link>
    </>
  );
};

export default Homepage;
