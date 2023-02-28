import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MediaContext } from "../../Context/MediaStore";
import Search from "../Search/Search";
import styles from "./Navbar.module.scss";

const Navbar = ({ userData, logout }) => {
  const { detailsNavDisplay } = useContext(MediaContext);

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${styles.bgNavbar} z-index`}>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            Noxe
          </Link>
          {userData ? (
            <div className='text-info me-2'>
              Welcom : <span>{userData.first_name}</span>
            </div>
          ) : (
            ""
          )}
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon ' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            {userData ? (
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `bg-info
                         rounded-3 nav-link text-center`
                        : "text-center nav-link"
                    }
                    to='/'
                  >
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `bg-info
                         rounded-3 text-center ${detailsNavDisplay}`
                        : `${detailsNavDisplay} text-center`
                    }
                    to='people'
                  >
                    People
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `bg-info
                         text-center rounded-3 ${detailsNavDisplay}`
                        : `${detailsNavDisplay} text-center`
                    }
                    to='movies'
                  >
                    Movies
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `bg-info
                         rounded-3 text-center ${detailsNavDisplay}`
                        : `${detailsNavDisplay} text-center`
                    }
                    to='tvShows'
                  >
                    Tvshows
                  </NavLink>
                </li>
              </ul>
            ) : (
              ""
            )}

            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <div className={detailsNavDisplay}>
                {userData ? <Search /> : ""}
              </div>
              <div className='d-flex align-items-center mt-2'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://github.com/mohamedkhameSss'
                >
                  <i className='fab fa-github mx-2'></i>
                </a>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://linkedin.com/in/mohamed-khamess-645637131'
                >
                  <i className='fab fa-linkedin mx-2'></i>
                </a>
              </div>
              {userData ? (
                <li className='nav-item'>
                  <Link className='nav-link mt-2' onClick={logout}>
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li className='nav-item'>
                    <Link className='nav-link mt-2' to='login'>
                      Login
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link mt-2' to='register'>
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
