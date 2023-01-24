import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MediaContext } from "../../Context/MediaStore";
import PaginationOutlined from "../PaginationComp/PaginationComp";

const Movies = () => {
  const { trendingMovies, setpage } = useContext(MediaContext);

  useEffect(() => {
    document.title = "Movies";
    return () => {
      setpage(1);
    };
  }, []);

  return (
    <>
      {trendingMovies.length > 0 ? (
        <div className='row gy-3 my-3 py-5'>
          <div className=' col-md-4 '>
            <div className='brdr w-25 mb-4 '></div>
            <h2>
              {" "}
              Trending <br />
              Movies <br />
              To watch now
            </h2>{" "}
            <h6 className='text-muted'>most watched movies by day</h6>
            <div className='brdr mt-4'></div>
          </div>
          {trendingMovies.slice(0, 10).map((item, index) => (
            <div
              key={index}
              className='col-6 g-5  col-md-4 g-md-4 col-lg-2 col-lg-2  '
            >
              <Link
                className='nav-link'
                to={`/detailes/${item.id}/${item.media_type}`}
              >
                <div className='position-relative'>
                  {item.poster_path ? (
                    <>
                      <img
                        className='img-fluid '
                        alt='poster'
                        src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                      />
                    </>
                  ) : (
                    ""
                  )}
                  <h6 className=' mt-1'>
                    {item.title}
                    {item.name}
                  </h6>
                  <span className=' position-absolute top-0 end-0 bg-info px-2 py-2'>
                    {item.vote_average.toFixed(1)}
                  </span>
                </div>
              </Link>
            </div>
          ))}
          {window.location.pathname == "/movies" ? (
            <div>
              <PaginationOutlined />
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className='vh-100 d-flex align-items-center justify-content-center '>
          <i className='fa-solid fa-spinner fa-2x fa-spin'></i>
        </div>
      )}
    </>
  );
};

export default Movies;
