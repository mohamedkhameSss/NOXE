import React, { useContext, useEffect, useState } from "react";

import Movies from "../Movies/Movies";
import People from "../People/People";
import TvShows from "../TvShows/TvShows";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <Movies />
      <TvShows />
      <People />
    </>
  );
};

export default Home;
