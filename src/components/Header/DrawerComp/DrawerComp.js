import React, { useState } from "react";
import {
  Drawer,
  IconButton, 
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HeaderData from "../HeaderData";
import { makeStyles } from "@mui/styles";

function DrawerComp() {
  const [openDrawer, setopenDrawer] = useState(false);
 
  const useStyles = makeStyles({
    listWeb: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
    },
  });
  const classes = useStyles();
  return (
    <React.Fragment>
      <Drawer open={openDrawer} sx={{ width: "50%", color: 'white' }}>
        <Box sx={{ backgroundColor: "#08083d", minHeight: "100%" }}>
          <Box component='div'>
          <IconButton onClick={(e) => setopenDrawer(!openDrawer)}>
            <CloseIcon
              sx={{ color: "white", marginLeft: "auto", width: "100%" }} 
            />
          </IconButton>
          </Box>
          <HeaderData
            listWeb={classes.listWeb}
            setopenDrawer={setopenDrawer}
            openDrawer={openDrawer}
          />
        </Box>
      </Drawer>
      <IconButton
        onClick={() => setopenDrawer(!openDrawer)}
        sx={{ marginLeft: "auto" }}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
}

export default DrawerComp;
