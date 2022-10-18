 
import { Box } from "@mui/material"; 
import React from "react"; 
import PopularTools from "./PopularTools";
import Banner1 from "./Banner1";
import Steps from "./Steps"; 
function index() {
  return (
    <React.Fragment>
      <Box variant="div">
        <Box>
          <Banner1 />
        </Box>
        <Box>
          <PopularTools />
        </Box>
        <Box>
          <Steps />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default index;
