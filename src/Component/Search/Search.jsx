import React, { useContext } from "react";
import { MediaContext } from "../../Context/MediaStore";
import { useNavigate } from "react-router-dom";

const Search = ({}) => {
  let navigate = useNavigate();

  const focusX = () => {
    navigate("./searchView");
  };

  const { handelChangeSearch, val, clearSearch } = useContext(MediaContext);

  return (
    <form className='d-flex' role='search'>
      <input
        className='form-control me-2'
        type='search'
        onClick={clearSearch}
        onChangeCapture={focusX}
        onChange={handelChangeSearch}
        value={val}
        placeholder='Search'
        aria-label='Search'
      />
    </form>
  );
};

export default Search;
