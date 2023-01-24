import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MediaContext } from "../../Context/MediaStore";

const Detailes = () => {
  let { setdetailsNavDisplay } = useContext(MediaContext);
  const [detailsData, setDetailsData] = useState({});
  useEffect(() => {
    setdetailsNavDisplay("d-none");
    return () => {
      setdetailsNavDisplay("nav-link");
    };
  });

  let params = useParams();
  let getDetailes = async () => {
    let { data } = await axios(
      `https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=6b160001ba7f6700e54a1240bb4fdef0&language=en-US`
    );
    setDetailsData(data);
  };
  useEffect(() => {
    getDetailes();
  });
  let imges = detailsData.profile_path
    ? "https://image.tmdb.org/t/p/original" + detailsData?.profile_path
    : "";
  let imges2 = detailsData.poster_path
    ? "https://image.tmdb.org/t/p/original" + detailsData?.poster_path
    : "";

  return (
    <>
      <div className='row'>
        {params.mediaType === "person" && detailsData.profile_path ? (
          <div className='col-md-4 '>
            <img className='w-100 py-3 ' alt='profile Pic' src={imges} />
          </div>
        ) : (
          <div className='col-md-4'>
            <img className='w-100 py-3 ' src={imges2} alt='Pic' />
          </div>
        )}
        <div className='col-md-8 py-3 row align-item-between'>
          <h2>
            {detailsData.title}
            {detailsData.name}
          </h2>
          <h5 className='text-muted my-3'>
            {detailsData.overview
              ? detailsData.overview
              : detailsData.known_for_department}
          </h5>
          <div>
            {detailsData.genres ? (
              detailsData.genres.map((gen) => (
                <div className='btn btn-info p-2 me-3 my-2  ' key={gen.id}>
                  {gen.name}
                </div>
              ))
            ) : (
              <div className='my-2 text-info'>
                Birth Day : {detailsData.birthday}
              </div>
            )}
          </div>
          {detailsData.vote_average ? (
            <div className='my-3 my-2 '>
              <p>Vote : {detailsData.vote_average}</p>
              <p>Vote count : {detailsData.vote_count}</p>
              <p>Popularity : {detailsData.popularity}</p>
              {detailsData.release_date ? (
                <p>Relese date : {detailsData.release_date}</p>
              ) : (
                <p>Type : {detailsData.type}</p>
              )}
            </div>
          ) : (
            <p className='my-2  text-info'>{detailsData.place_of_birth}</p>
          )}
          <p className='text-muted'>
            {detailsData.overview}
            {detailsData.biography}
          </p>
        </div>
      </div>
    </>
  );
};

export default Detailes;
