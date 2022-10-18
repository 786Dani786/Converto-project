import { Box, Container, Grid,  Typography } from "@mui/material"; 

export default function MainConverter(props) { 
  return (
    <Container
      sx={{
        marginTop: 10, 
        textAlign: 'center'
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            color: "#0c3c78",
            fontWeight: 700,
            fontFamily: "Montserrat, 'sans-serif'",
            textTransform: "capitalize"
          }}
        >
          {props.title}
        </Typography>
      </Box>
    </Container>
  );
}
