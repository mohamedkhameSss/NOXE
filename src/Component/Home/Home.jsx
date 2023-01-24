import React, { useContext, useEffect, useState } from "react";
import { MediaContext } from "../../Context/MediaStore";
import Movies from "../Movies/Movies";
import People from "../People/People";
import TvShows from "../TvShows/TvShows";

const Home = () => {
  return (
    <>
      <Movies />
      <TvShows />
      <People />
    </>
  );
};

export default Home;
