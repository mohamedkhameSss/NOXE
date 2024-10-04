import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Offline, Online } from "react-detect-offline";
import MasterLayout from "./Component/MasterLayout/MasterLayout";
import Home from "./Component/Home/Home";
import Notfound from "./Component/Notfound/Notfound";
import Detailes from "./Component/Detailes/Detailes";
import Login from "./Component/Login/Login";
import Movies from "./Component/Movies/Movies";
import People from "./Component/People/People";
import Register from "./Component/Register/Register";
import TvShows from "./Component/TvShows/TvShows";
import { useContext } from "react";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
import { AuthContext } from "./Context/AuthStore";
import SearchView from "./Component/Search/SearchView";

const App = () => {
  const { logout, userData, saveUserData } = useContext(AuthContext);

  let routes = createHashRouter([
    {
      path: "/",
      element: <MasterLayout
                 userData={userData}
                 logout={logout} />,
      errorElement: <Notfound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "detailes/:id/:mediaType",
          element: (
            // <ProtectedRoute>
              <Detailes />
          // </ProtectedRoute>
          ),
        },
        {
          path: "login",
          element: <Login saveUserData={saveUserData} />,
        },
        // {
        //   path: "detailes/:id/:mediaType/login",
        //   element: <Login saveUserData={saveUserData} />,
        // },
        // {
        //   path: "tvShows/login",
        //   element: <Login saveUserData={saveUserData} />,
        // },
        // {
        //   path: "people/login",
        //   element: <Login saveUserData={saveUserData} />,
        // },
        // {
        //   path: "movies/login",
        //   element: <Login saveUserData={saveUserData} />,
        // },
        {
          path: "movies",
          element: (
            // <ProtectedRoute> 
              <Movies />
            // </ProtectedRoute>
          ),
        },
        {
          path: "people",
          element: (
            // <ProtectedRoute>
              <People />
          // </ProtectedRoute>
          ),
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "tvShows",
          element: (
            // <ProtectedRoute> 
              <TvShows />
          // </ProtectedRoute>
          ),
        },
        {
          path: "searchView",
          element: (
            // <ProtectedRoute>
              <SearchView />
          //  </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <div>
          <RouterProvider router={routes} />
      </div>
    </>
  );
};

export default App;
