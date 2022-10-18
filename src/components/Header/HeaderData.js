import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@mui/styles";
import { Button, Grid, Menu, MenuItem, Typography, Box } from "@mui/material";
import Fade from "@mui/material/Fade";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import ConverterModal from "../../Views/Modals/ConverterModal/index.js";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function NestedList(props) {
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 13,
    },
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //  Login Form header items
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  //login form header ends her
  const [linkColor, setLinkColor] = React.useState("#323e48");
  const mobileView = useMediaQuery("(max-width:850px)");

  theme.breakpoints.down((mobileView) => {
    setLinkColor("white");
  });

  const colorWhite = "white";
  useEffect(() => {
    return () => {
      if (mobileView) {
        setLinkColor(colorWhite);
      }
    };
  }, [linkColor]);

  const useStyles = makeStyles({
    navitems: {
      color: linkColor,
    },
    arrowdown: {
      color: "#f23b22",
    },
    typoHeadings: {
      padding: "15px",
      fontSize: 20,
      color: "#f23b22",
    },
    navItemsLinks: {
      textDecoration: "none",
      color: "#7b77ff",
      fontWeight: 700,
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <List
        sx={{ marginLeft: "auto" }}
        className={props.listWeb}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={() => props.setopenDrawer(!props.openDrawer)}>
          <Link to="/" className={classes.navItemsLinks}>
            <ListItemText className={classes.navitems}>
              <Typography sx={{ fontWeight: "600" }}>Home</Typography>
            </ListItemText>
          </Link>
        </ListItemButton>
        <ListItemButton onClick={() => props.setopenDrawer(!props.openDrawer)}>
          <Link to="/split_pdf" className={classes.navItemsLinks}>
            <ListItemText className={classes.navitems}>
              <Typography sx={{ fontWeight: "600" }}>Split PDF</Typography>
            </ListItemText>
          </Link>
        </ListItemButton>
        <ListItemButton onClick={() => props.setopenDrawer(!props.openDrawer)}>
          <Link to="/merge_pdf" className={classes.navItemsLinks}>
            <ListItemText className={classes.navitems}>
              <Typography sx={{ fontWeight: "600" }}>Merge PDF</Typography>
            </ListItemText>
          </Link>
        </ListItemButton>

        <ListItemButton onClick={() => props.setopenDrawer(!props.openDrawer)}>
          <Link to="/compress_pdf" className={classes.navItemsLinks}>
            <ListItemText className={classes.navitems}>
              <Typography sx={{ fontWeight: "600" }}>Compress PDF</Typography>
            </ListItemText>
          </Link>
        </ListItemButton>

        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Typography className={classes.navitems} sx={{ fontWeight: 600 }}>
            Convert PDF
          </Typography>
          <KeyboardArrowDownIcon className={classes.arrowdown} />
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography
                className={classes.typoHeadings}
                sx={{ fontWeight: "bold" }}
              >
                Convert to PDF
              </Typography>
              <Link to="/jpg_to_pdf" className={classes.navItemsLinks}>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    props.setopenDrawer(!props.openDrawer);
                  }}
                >
                  Jpg to PDF
                </MenuItem>
              </Link>

              <Link to="/word_to_pdf" className={classes.navItemsLinks}>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    props.setopenDrawer(!props.openDrawer);
                  }}
                >
                  Word to PDF
                </MenuItem>
              </Link>
              <Link to="/ppt_to_pdf" className={classes.navItemsLinks}>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    props.setopenDrawer(!props.openDrawer);
                  }}
                >
                  PowerPoint to PDF
                </MenuItem>
              </Link>
              <Link to="/excel_to_pdf" className={classes.navItemsLinks}>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    props.setopenDrawer(!props.openDrawer);
                  }}
                >
                  Excel to PDF
                </MenuItem>
              </Link>
              <Link to="/html_to_pdf" className={classes.navItemsLinks}>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    props.setopenDrawer(!props.openDrawer);
                  }}
                >
                  Word to PDF
                </MenuItem>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.typoHeadings}
                sx={{ fontWeight: "bold" }}
              >
                Convert From PDF
              </Typography>

              <Link to="/pdf_to_jpg" className={classes.navItemsLinks}>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    props.setopenDrawer(!props.openDrawer);
                  }}
                >
                  PDF to JPG
                </MenuItem>
              </Link>
              <Link to="/pdf_to_word" className={classes.navItemsLinks}>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    props.setopenDrawer(!props.openDrawer);
                  }}
                >
                  PDF to Word
                </MenuItem>
              </Link>
              <Link to="/pdf_to_ppt" className={classes.navItemsLinks}>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    props.setopenDrawer(!props.openDrawer);
                  }}
                >
                  PDF to PowerPoint
                </MenuItem>
              </Link>
              <Link to="/pdf_to_excel" className={classes.navItemsLinks}>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    props.setopenDrawer(!props.openDrawer);
                  }}
                >
                  PDF to JPG
                </MenuItem>
              </Link>
            </Grid>
          </Grid>
        </Menu>
      </List>
    </ThemeProvider>
  );
}
