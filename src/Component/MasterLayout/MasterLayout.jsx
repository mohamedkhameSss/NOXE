import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MasterLayout = ({ userData, logout }) => {
  return (
    <>
      <Navbar userData={userData} logout={logout} />
      <div className='container '>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MasterLayout;
