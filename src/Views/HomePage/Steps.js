import * as React from "react";
import Box from "@mui/material/Box"; 
import { Container, Grid,  Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles"; 

export default function BadgeOverlap() {
  const useStyles = makeStyles({
    headings: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    stepsContainer: { 
      backgroundColor: '#F3F0EB',
      minHeight: '50vh',
      display: "flex",
      alignItems: 'center',
      justifyContent: "space-evenly",
      flexDirection: "column"
    }

  });

  const steps = [ 
  {title: 'Upload File', description: "  'Choose file: upload files to our online PDF converter from your computer, or simply drag and drop files into the PDF converter box. You can even upload files from a cloud storage service like Google Drive to our online PDF converter."} ,
  {title: 'Select Conversion', description: "  'Choose file: upload files to our online PDF converter from your computer, or simply drag and drop files into the PDF converter box. You can even upload files from a cloud storage service like Google Drive to our online PDF converter."} ,
  {title: 'Download File', description: "  'Choose file: upload files to our online PDF converter from your computer, or simply drag and drop files into the PDF converter box. You can even upload files from a cloud storage service like Google Drive to our online PDF converter."}              
  ];
  const classes = useStyles();

  return (
    
    <Box className={classes.stepsContainer}>
      <Container>
      <Box>
      <Typography
              variant="h4"
              sx={{
                color: "#0c3c78",
                marginBottom: 3,
                fontWeight: 700,
                fontFamily: "Montserrat, 'sans-serif'",
              }}
            >
              Convert PDF files for free.
            </Typography>
      </Box>
      <Grid container  >
       

        {steps.map((item, index) => 
          <Grid item xs={12} md={4} key={index}>
          <Box component="div">
            <React.Fragment >
            <Box sx = {{padding: '15px'}}>
            <Typography variant="h5" sx={{ fontFamily: "Montserrat, 'sans-serif'", fontWeight: 600, color: "#323e48" }}>{item.title}</Typography>
             <Typography variant="p" sx={{ fontFamily: "Montserrat, 'sans-serif'", fontWeight: 500, fontSize: '13px' }}>
              {item.description}
             </Typography>
            </Box>
            </React.Fragment>
          </Box>
        </Grid>
        )}
      </Grid>
    </Container>
      </Box>
  );
}
