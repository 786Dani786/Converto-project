import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import DrawerComp from "./DrawerComp/DrawerComp";
import HeaderData from "./HeaderData";
import { makeStyles } from "@mui/styles";

export default function Header() {
  const useStyles = makeStyles({
    listWeb: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
    },
  });

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: "white" }} position="fixed">
        <Container>
          <Toolbar>
            {isMatch ? (
              <>
                <Typography
                  sx={{
                    color: "#0c3c78",
                    fontWeight: 700,
                    fontSize: 15,
                    fontFamily: "Montserrat, 'sans-serif'", 
                  }}
                >
                  Converter Website
                </Typography>
                <DrawerComp />
              </>
            ) : (
              <HeaderData listWeb={classes.listWeb} />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}
