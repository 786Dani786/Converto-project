import * as React from "react"; 
import Box from "@mui/material/Box"; 
import Typography from "@mui/material/Typography";  
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom"; 

export default function ServiceCard(props) {

  
  const useStyles = makeStyles({
    card: {
      maxWidth: '100%',
      textAlign: 'center',
      background: 'rgba(41,128,185,.05)', 
      borderRadius: '8px',
      "&:hover": {
        backgroundColor: "rgb(222, 223, 224, 0.42)",
         
      },
    },
    mainBox:{
    width: '100%',
    height: '100%',
    textAlign: 'center',
    background: 'rgba(41,128,185,.05)',
    borderRadius: '8px'
    
  },
  mainBoxLink: {
    fontFamily: '"Monserrat",sans-serif',
    fontWeight: 700,
    fontSize: '18px',
    display: 'block',
    color: '#424a5b',
    padding: '30px 10px',
    textDecoration: 'none'
  },
  imageContent: {
    width: '100%',
    display: 'inline-block',
    marginBottom: '10px',
  },
  imageBox:{ 
    maxWidth: '100%',
    width: '60px',
    height: '60px',
  }, 
    iconClass : {
      "&:hover": {
        fontSize: '14px'
      }
    }
  });

  const classes = useStyles();

  return (
      <Box className={classes.card}>
          <Box className={classes.mainBox}>
              <Link to={props.pageLink} className={classes.mainBoxLink}>
                  <Box className={classes.imageContent}>
                    <img src={props.imageSrc} className={classes.imageBox} alt={props.imageSrc} />
                  </Box>
                  <Typography sx = {{textDecoration: 'none', fontWeight: 700, fontFamily: "Montserrat, 'sans-serif'"}}> {props.title} </Typography>
                  <Typography variant="p" sx = {{fontSize: 12 ,textDecoration: 'none', fontWeight: 500, fontFamily: "Montserrat, 'sans-serif'"}}> {props.shortDesc} </Typography>
              </Link>
          </Box>
    </Box>
  );
}
