import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material"; 

const fileTypes = ["Word", "Excel", "Powerpoint", "Jpg", "Text", "PNG"];

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const box1 = {
  position: "relative",
  fontWeight: 700,
  padding: 2,
  textAlign: "center",
  width: "80%",
};

const mainBox = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  marginTop: 5,
  textAlign: "center",
};

export default function AllConverterModal(props) {
  // Converter button ends
  const [age, setAge] = React.useState(""); 
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [convertButtonDisplay, setConvertButtonDisplay] =
    React.useState("block");

  return (
    <div>
      <Modal
        keepMounted
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                color: "#0c3c78",
                fontWeight: 700,
                fontFamily: "Montserrat, 'sans-serif'",
              }}
            >
              Convert Now !{" "}
            </Typography>
          </Box> 
          {/* Box no 2 starts here*/}
          <Grid container spacing={3} sx={mainBox}>
            <Grid item lg={6} sm={12}>
              <Box sx={box1}>
                <Typography>{props.fileName}</Typography>
              </Box>
            </Grid> 
            <Grid item lg={6} sm={12}>
              <Box>
                <Button
                  variant="contained"
                  color="info"
                  sx={{ display: convertButtonDisplay }} 
                >
                  {props.buttonName}
                </Button>
              </Box>
            </Grid>
          </Grid>
          {/* Box no2 ends here */}
        </Box>
      </Modal>
    </div>
  );
}
