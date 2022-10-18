import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Link } from "react-router-dom";

const date = new Date();
let year = date.getFullYear();
function Footer() {
  const useStyles = makeStyles({
    heading: {
      fontSize: "14px",
      color: "rgb(0, 0, 0)",
      margin: "0px 0px 16px",
      marginBottom: "10px",
    },
    links: {
      color: "gray",
      fontSize: 13,
      lineHeight: 2,
      fontFamily: "Montserrat, 'sans-serif'",
      fontWeight: 700,
      textDecoration: "none",
    },
  });

  const homeArray = [
    { text: "Home", link: "/" },
    { text: "About", link: "/" },
    { text: "All Tools", link: "/" },
    { text: "FAQs", link: "/" },
  ];

  const organize = [
    { text: "Word to PDF", link: "/" },
    { text: "Excel to PDF", link: "/" },
    { text: "Power Point to PDF", link: "/" },
    { text: "JPG to PDF", link: "/" },
    { text: "HTML to PDF", link: "/" },
  ];

  const popular = [
    { text: "Merge PDF", link: "/" },
    { text: "Split PDF", link: "/" },
    { text: "Remove Pages", link: "/" },
    { text: "Extract Pages", link: "/" },
    { text: "Organize PDF", link: "/" },
  ];

  const optimize = [
    { text: "Compress PDF", link: "/" },
    { text: "Repair", link: "/" },
  ];

  const classes = useStyles();
  return (
    <React.Fragment>
      <hr></hr>
      <Container sx={{ marginTop: 5, marginBottom: 5 }}>
        <Grid container spacing={4}>
          <Grid item sm={12} lg={3} md = {6}>
            <Typography
              className={classes.heading}
              sx={{ fontFamily: "Montserrat, 'sans-serif'", fontWeight: 700 }}
            >
              Converto
            </Typography>
            {homeArray.map((item, index) => (
              <Box  key={index} >
                <Link to ={item.link} className={classes.links}>
                  {item.text}
                </Link>
              </Box>
            ))}
          </Grid>

          <Grid item sm={12} lg={3} md = {6}>
            <Typography
              className={classes.heading}
              sx={{ fontFamily: "Montserrat, 'sans-serif'", fontWeight: 700 }}
            >
              Popular
            </Typography>
            {popular.map((item, index) => (
              <Box  key={index} >
                <Link to ={item.link} className={classes.links}>
                  {item.text}
                </Link>
              </Box>
            ))}
          </Grid>

          <Grid item sm={12} lg={3} md = {6}>
            <Typography
              className={classes.heading}
              sx={{ fontFamily: "Montserrat, 'sans-serif'", fontWeight: 700 }}
            >
              Organize
            </Typography>
            {organize.map((item, index) => (
              <Box  key={index} >
                <Link to ={item.link} className={classes.links}>
                  {item.text}
                </Link>
              </Box>
            ))}
          </Grid>

          <Grid item sm={12} lg={3} md = {6}>
            <Typography
              className={classes.heading}
              sx={{ fontFamily: "Montserrat, 'sans-serif'", fontWeight: 700 }}
            >
              Optimize
            </Typography>
            {optimize.map((item, index) => (
              <Box  key={index} >
                <Link to ={item.link} className={classes.links}>
                  {item.text}
                </Link>
              </Box>
            ))}
          </Grid>
        </Grid>
        <Grid item sm={12} lg={12}>
        <Box sx={{ backgroundColor: "none", textAlign: "center" }}>
          <Typography
            sx={{
              color: "black",
              padding: 2,
              fontFamily: "Montserrat, 'sans-serif'",
              fontWeight: 700,
            }}
          >
            All Rights Reserved {year}.
          </Typography>
        </Box>
      </Grid>
      </Container>
      
    </React.Fragment>
  );
}

export default Footer;
