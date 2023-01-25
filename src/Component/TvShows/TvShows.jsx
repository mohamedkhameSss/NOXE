import React, { useEffect } from "react";
import { useContext } from "react";
// import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MediaContext } from "../../Context/MediaStore";
import PaginationOutlined from "../PaginationComp/PaginationComp";

const TvShows = () => {
  const { trendingTvs, setpage } = useContext(MediaContext);

  useEffect(() => {
    document.title = "Tv Shows";
    return () => {
      setpage(1);
    };
  }, []);

  return (
    <>
      <div className='row gy-3 my-3 py-5'>
        <div className='col-md-4'>
          <div className='brdr w-25 mb-4'></div>
          <h2>
            {" "}
            Trending <br />
            Tv Shows
            <br />
            To watch now
          </h2>{" "}
          <h6 className='text-muted'>most watched Tv by day</h6>
          <div className='brdr mt-4'></div>
        </div>
        {trendingTvs.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className='col-6 g-5  col-md-4 g-md-4 col-lg-2 col-lg-2   '
          >
            <Link
              className='nav-link'
              to={`/detailes/${item.id}/${item.media_type}`}
            >
              <div className='position-relative'>
                {item.poster_path ? (
                  <>
                    <img
                      className='w-100'
                      alt='poster'
                      src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                    />
                  </>
                ) : (
                  ""
                )}

                <span className=' position-absolute top-0 end-0 bg-info   p-2 '>
                  {item.vote_average.toFixed(1)}
                </span>
              </div>
            </Link>
          </div>
        ))}
        {window.location.hash == "#/tvShows" ? (
          <div>
            <PaginationOutlined />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default TvShows;
