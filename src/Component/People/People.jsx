import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MediaContext } from "../../Context/MediaStore";
import PaginationOutlined from "../PaginationComp/PaginationComp";

const People = () => {
  const { trendingPerson, setpage } = useContext(MediaContext);

  useEffect(() => {
    document.title = "People";
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
            People <br />
            of <br />
            the industry
          </h2>{" "}
          <h6 className='text-muted'>From the intire world</h6>
          <div className='brdr mt-4'></div>
        </div>
        {trendingPerson
          .slice(0, 10)
          .filter((item) => item.profile_path != null)
          .map((item, index) => (
            <div
              key={index}
              className='col-6 g-5  col-md-4 g-md-4 col-lg-2 col-lg-2   '
            >
              <Link
                className='nav-link '
                to={`/detailes/${item.id}/${item.media_type}`}
              >
                {item.profile_path ? (
                  <>
                    <img
                      className='w-100'
                      alt=''
                      src={`https://image.tmdb.org/t/p/original${item?.profile_path}`}
                    />
                  </>
                ) : (
                  ""
                )}

                <h6 className=' mt-1'>{item?.name}</h6>
              </Link>
            </div>
          ))}

        <div>
          <PaginationOutlined />
        </div>
      </div>
    </>
  );
};

export default People;
