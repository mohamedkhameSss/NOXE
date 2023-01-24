import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useContext, useState } from "react";
import { MediaContext } from "../../Context/MediaStore";

export default function PaginationOutlined() {
  const { handleChange } = useContext(MediaContext);
  return (
    <>
      <Stack
        spacing={2}
        className='mt-5 m-auto rounded-5 py-2 bg-dark whiteStack  pigWidth  '
      >
        <Pagination
          className='m-auto whiteFont '
          count={100}
          color='primary'
          onChange={handleChange}
        />
      </Stack>
    </>
  );
}
