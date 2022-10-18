import React, { useEffect, useState } from "react";
import { Box, Paper, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ConverterModal from "../../Views/Modals/ConverterModal";

const useStyles = makeStyles({
  borderBox: {
    border: "2 px solid",
    borderColor: "white",
    borderStyle: "dashed",
    padding: "10px",
    marginTop: 2,
  },
});


export default function UploadPdfFileComponent(props) {
  // FileUpload Check code starts here
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const fileHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  };
  // file upload codes ends here

  // Modal Code Starts Here
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false)
    setIsFilePicked(false)
  };

  useEffect(() => {
    if (isFilePicked === true) {
      setOpenModal(true);
    }
  }, [isFilePicked]);
  // Modal Code Ends Here

  const mobileView = useMediaQuery("(max-width:850px)");
  const [padd, setPadd] = React.useState(5);
  useEffect(() => {
    return () => {
      if (mobileView) {
        setPadd(3);
      }
    };
  }, [padd]);

  const classes = useStyles();

  return (
    <Box className={classes.borderBox}>
      <Paper
        elevation={3}
        sx={{
          padding: padd,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <Box>
          <CloudUploadIcon sx={{ fontSize: "90px", color: "red" }} />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <input
            accept="application/pdf"
            className={classes.input}
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
            onChange={(e) => {
              fileHandler(e);
            }}
          />
          <label htmlFor="raised-button-file">
            <Button
              component="span"
              color="primary"
              variant="contained"
              size="large"
            >
              Upload
            </Button>{" "}
          </label>

          <Box sx={{ textAlign: "center", paddingTop: 2 }}>
            <Typography
              sx={{
                fontSize: 14,
                color: "#4f5962",
                fontWeight: 700,
                fontFamily: "Montserrat, 'sans-serif'",
              }}
            >
              {isFilePicked ? selectedFile.name : "No File Choosen"}
            </Typography>
            {isFilePicked ? (
              <ConverterModal
                fileName={selectedFile.name}
                handleOpen={handleOpenModal}
                open={openModal}
                handleClose={handleCloseModal}
              />
            ) : (
              <ConverterModal
                fileName={`please choose a valid file `}
                handleOpen={handleOpenModal}
                open={openModal}
                handleClose={handleCloseModal}
              />
            )}
          </Box>
          {/* Modal */}
        </Box>
      </Paper>
    </Box>
  );
}
