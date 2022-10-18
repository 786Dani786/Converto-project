import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress"; 

const fileTypes = ["Word", "Excel", "Powerpoint", "Jpg", "Text", "PNG"];

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
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

export default function ConverterModal(props) {
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
            <Grid item lg={4} sm={12}>
              <Box sx={box1}>
                <Typography>{props.fileName}</Typography>
              </Box>
            </Grid>
            <Grid item lg={4} sm={12}>
              <Box sx={{ textAlign: "center", marginBottom: 2 }}>
                <FormControl
                  variant="standard"
                  sx={{ m: 1, minWidth: "80%", border: "none" }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Select Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    {fileTypes.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item lg={4} sm={12}>
              <Box>
                <Button
                  variant="contained"
                  color="info"
                  sx={{ display: convertButtonDisplay }}
                  onClick = {props.handleClick}
                >
                  Convert
                </Button>
                {/* <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box> */}
              </Box>
            </Grid>
          </Grid>
          {/* Box no2 ends here */}
        </Box>
      </Modal>
    </div>
  );
}
