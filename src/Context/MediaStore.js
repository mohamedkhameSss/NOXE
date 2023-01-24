import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let MediaContext = createContext(null);
const MediaContextProvider = (props) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTvs, setTrendingTvs] = useState([]);
  const [trendingPerson, setTrendingPerson] = useState([]);
  const [page, setpage] = useState(1);
  const [val, setVal] = useState("");
  const [searchApi, setSearchApi] = useState([]);
  const [detailsNavDisplay, setdetailsNavDisplay] = useState("nav-link");

  useEffect(() => {
    getSearch();
  }, [val]);

  function handleChange(e, p) {
    setpage(p);
    console.log(e);
  }

  function handelChangeSearch(e) {
    setVal(e.target.value);
  }

  const clearSearch = () => {
    setVal("");
  };

  let getSearch = async () => {
    let { data } = val
      ? await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=6b160001ba7f6700e54a1240bb4fdef0&language=en-US&query=${val}`
        )
      : "";
    setSearchApi(data ? data.results : "");
  };

  let getTrendingItems = async (mediaTybe, callback) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaTybe}/day?api_key=6b160001ba7f6700e54a1240bb4fdef0&page=${page}`
    );
    callback(data.results);
  };

  useEffect(() => {
    getTrendingItems("movie", setTrendingMovies);
    getTrendingItems("tv", setTrendingTvs);
    getTrendingItems("person", setTrendingPerson);
  }, [page]);

  return (
    <MediaContext.Provider
      value={{
        trendingMovies,
        trendingPerson,
        trendingTvs,
        handleChange,
        setpage,
        handelChangeSearch,
        val,
        searchApi,
        clearSearch,
        detailsNavDisplay,
        setdetailsNavDisplay,
      }}
    >
      {props.children}
    </MediaContext.Provider>
  );
};

export default MediaContextProvider;
