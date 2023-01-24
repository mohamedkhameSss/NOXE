import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MediaContext } from "../../Context/MediaStore";

const SearchView = () => {
  const { searchApi } = useContext(MediaContext);

  return (
    <div className='row gy-3 my-3 py-5'>
      {searchApi.length > 1 ? (
        searchApi.map((item) => (
          <div
            key={item.id}
            className={
              item?.poster_path || item?.profile_path
                ? "col-6 col-md-3 col-lg-2"
                : "d-none"
            }
          >
            <Link
              className='nav-link'
              to={`/detailes/${item.id}/${item.media_type}`}
            >
              <div className='position-relative'>
                {item?.poster_path ? (
                  <>
                    <div>
                      <img
                        className='w-100 minheight'
                        alt='Poster'
                        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      />
                      <p>{item.title ? item.title : item.name}</p>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {item?.profile_path ? (
                  <div>
                    <img
                      className='w-100 minheight'
                      alt='Profile'
                      src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                    />
                    <p>{item.name ? item.name : ""}</p>
                  </div>
                ) : (
                  ""
                )}
                {item?.vote_average && item?.poster_path ? (
                  <span className=' position-absolute top-0 end-0 bg-info p-2'>
                    {item.vote_average.toFixed(1)}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className='w-100 text-center'>No Matching results</div>
      )}
    </div>
  );
};

export default SearchView;
