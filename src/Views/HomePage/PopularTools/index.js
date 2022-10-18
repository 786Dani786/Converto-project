import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../../../components/Cards/ServiceCard";
import AllTools from "../../../components/Files/AllTools.json";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  linkStyles: {
    textDecoration: "none",
    backgroundColor: "#7b77ff",
    padding: 10,
    fontSize: 16,
    fontWeight: 600,
    color: "white",
    fontFamily: "Montserrat, 'sans-serif'",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  pageLink: {
    textDecoration: 'none'
  }
});
export default function PopularTools() {
  const classes = useStyles();
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <Grid container>
        <Grid item sm={12} lg={12}>
          <Typography
            variant="h4"
            sx={{
              color: "#0c3c78",
              fontWeight: 700,
              fontFamily: "Montserrat, 'sans-serif'",
              marginBottom: 3,
            }}
          >
            Popular PDF Tools
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          {AllTools.map((item, index) =>
            item.isPopular === "true" ? (
              <Grid key={index} item xs={12} md={4} lg={4}> 
                  <ServiceCard
                    title={item.tool_Name}
                    shortDesc={item.shortDesc}
                    alt={item.alt}
                    imageSrc={item.imageSrc}
                    pageLink = {item.pageLink}
                  />  
              </Grid>
            ) : (
              ""
            )
          )}
        </Grid>

        <Grid item lg={12} xs={12}>
          <Box sx={{ textAlign: "center", margin: 5 }}>
            <Link
              sx={{ fontSize: 700 }}
              to="/all-tools"
              className={classes.linkStyles}
            >
              View All Tools
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
