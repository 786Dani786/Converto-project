import { Box } from '@mui/system'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography,Grid, Container  } from '@mui/material' 
import { ArrowRight } from '@mui/icons-material';
import UploadPdfFileComponent from '../../../components/UploadPdfFileComponent';

const useStyles = makeStyles({
    mainContainer: { 
    backgroundColor: "#7b77ff",
    padding: '10px',
    minHeight: '60vh'
},
subContainer: {  
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    minHeight: "60vh",
},
uploadBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center"
} ,

bannerList:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontWeight: 600,
    color: 'white',
    fontFamily: "Montserrat, 'sans-serif'"
}
})


export default function Banner1 () {
const classes = useStyles()
    return (
    <Box variant="div" className= {classes.mainContainer}>
        <Container>
            <Grid container className={classes.subContainer} >
                <Grid item  lg={6} sm = {12}>
                    <Box>
                        <Typography sx = {{fontSize: 30,color: 'white',fontWeight: 700, fontFamily: "Montserrat, 'sans-serif'",}}>
                            Upload super big files.
                        </Typography>
                       
                        <Box sx = {{display:'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 1}}>
                        
                            <Box className={classes.bannerList}>
                                <ArrowRight />
                                <Typography variant='p'>Join separate PDFs into one single file</Typography>
                            </Box>

                            <Box className={classes.bannerList}>
                                <ArrowRight />
                                <Typography variant='p'>Reorder or delete unneeded</Typography>
                            </Box>

                            <Box className={classes.bannerList}>
                                <ArrowRight />
                                <Typography variant='p'>Easily edit joined documents and add eSignatures</Typography>
                            </Box>
                       
                        
                        </Box>
                    </Box>
                </Grid>
                <Grid item  lg={6} sm = {12}>
                    <UploadPdfFileComponent />
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
