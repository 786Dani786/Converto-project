import React from "react";
import { Container, Grid, Box } from "@mui/material";
import UploadAllFilesComponent from "../../../components/UploadAllFilesComponent";
import { useLocation } from "react-router-dom";
import AllTools from "../../../components/Files/AllTools.json";
import MainConverter from "./MainConverter";
import services from "../../../components/Services/Service";

export default function Merge() {
  const location = useLocation();
  const thiPageLink = location.pathname;
  return (
    <Container>
      {AllTools.map((item, index) =>
        item.pageLink === thiPageLink ? (
          <React.Fragment key={index}>
            <Box 
              sx={{
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Grid>
                <MainConverter title={item.tool_Name} />
              </Grid>
              <Grid>
                <UploadAllFilesComponent
                  fileAction={services[`${item.Onclik_function}`]}
                  type = {item.type}
                  buttonName = {item.buttonName}
                />
              </Grid>
            </Box>
          </React.Fragment>
        ) : (
          ""
        )
      )}
    </Container>
  );
}
