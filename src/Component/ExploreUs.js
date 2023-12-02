import React from 'react'
import { Box, Container, Typography, Grid, Button } from '@mui/material'
import Particles_Bg_Design from './Particles_Bg_Design'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ExploreUs = (props) => {
    return (
        <>

            <Box pb={5} pt={5} className={props.prevBg}>
                <Container maxWidth="lg">
                    <Box className='explore_us'>

                        <Grid container alignItems="center" justifyContent='center' spacing={2}>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Box className='al_center' mb={1}>
                                    <Typography variant='h3' className='wh fw5 font1'> We're here to help, </Typography>
                                    <Typography variant='h1' className='wh fw5 font1' gutterBottom> Explore our products and connect with us </Typography>

                                    <Link to="/products/Anaesthesia Machine">
                                        <Button variant="contained" className='rbtn_sm2 font1' endIcon={<ArrowForwardIcon />}>
                                            Explore Now
                                        </Button>
                                    </Link>


                                </Box>
                            </Grid>
                        </Grid>

                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default ExploreUs