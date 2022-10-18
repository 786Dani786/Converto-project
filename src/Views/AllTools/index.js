import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ServiceCard from "../../components/Cards/ServiceCard";
import AllTools from "./AllTools";

export default function index() {
  return (
    <Box sx={{ marginTop: 10,}}>
      <Container>
        <Box sx = {{minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Typography
          variant="h4"
          sx={{
            color: "#0c3c78",
            fontWeight: 700,
            fontFamily: "Montserrat, 'sans-serif'",
            marginBottom: 3,
          }}
        >
          All available PDF Tools
        </Typography>
        <Box>
          <Typography
            variant="p"
            sx={{ fontWeight: 600, marginBottom: 9, fontFamily: "Montserrat, 'sans-serif'" }}
          >
            Make use of our collection of PDF tools to process digital documents
            and streamline your workflow seamlessly.
          </Typography>
        </Box>
        </Box>
        <Paper elevation={2}  sx = {{paddingBottom: 5, padding: 5 }}> 
          <Grid container spacing={4}>
            {AllTools.map((item, index) => (
              <Grid item lg= {3} xs = {12}> 
               <ServiceCard
                  Key = {index}
                  title={item.title}
                  shortDesc={item.shortDesc}
                  alt={item.alt}
                  imageSrc={item.imageSrc}
                /> 
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
