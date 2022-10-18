import { Grid, Typography } from "@mui/material"; 
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Container } from "@mui/system";


export default function AboutUs() {
    const useStyles = makeStyles({
        mainContainer: {
            backgroundColor: '#fffd88'
        }
    })

    const classes = useStyles();
  return (
    <>
      <Grid container className={classes.mainContainer}>
        <Grid
          item
          xs={12}
          lg={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
            padding: "50px",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">The PDF software trusted by millions of users</Typography>
          <Container>
          <Typography sx = {{fontSize: 18, textAlign: 'center'}} p = {3} m = {3}>
          All Types Converter is your number 1 web app for editing PDF with ease. Enjoy all the tools you need to work efficiently with your digital documents while keeping your data safe and secure
          </Typography>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
