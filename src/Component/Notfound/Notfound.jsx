import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <h1 className='w-100 pt-5 mt-5 text-center '>Not Found</h1>
      <h3 className='text-center'>
        go to :
        <Link className='nav-link text-danger text-center' to={"/"}>
          Home
        </Link>
      </h3>
    </>
  );
};

export default Notfound;
