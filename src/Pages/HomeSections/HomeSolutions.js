import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";  
import ABT1 from "../../Assets/Images/homepage/our-offerings.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
import HeadingBottomProps from "../../Component/HeadingBottomProps";


export default function HomeSolutions() {



  return (
    <>



      <Box className="section secbg2" component='section'>
        <Box>


          <Container maxWidth="lg">



            <Box mt={4}>



              <Grid container spacing={4} alignItems="flex-start" justifyContent='center'>



                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box>

                    <Box className="al_right center-sec-head-mob">
                      <Box>
                        <Typography variant="h6" className="col2 fw6" gutterBottom> Solutions </Typography>
                        <Typography variant="h2" className="col1 fw6 font1"> Our Offerings </Typography>
                      </Box>
                      <Box pt={1}>
                        <HeadingBottomProps bottom_allign="flx js_r bottom-brd-center-mob" />
                      </Box>

                    </Box>


                    <Box pt={1}>
                      <Typography variant="h5" className="content fw5 al_jst" gutterBottom> Welcome to <strong>Supreme Technocare</strong>, your one-stop destination for comprehensive healthcare solutions. From complete hospital design to cutting-edge medical equipment, we offer a wide range of services to meet all your healthcare facility needs. </Typography>
                    </Box>


                    <Box pt={1}>
                      <Typography variant="h5" className="content fw5 al_jst" gutterBottom> Our expertise includes modular ICU and operating theatre setups, hospital furniture, medical gas pipelines, surgical instruments, HVAC systems, and more. We also provide crucial support services such as NABH certification consultancy, bio-medical waste disposal, and security solutions. Explore how we can transform your healthcare institution into a beacon of excellence.  </Typography>
                    </Box>

                    <Box className="mob-center al_right">
                      <Link to="solutions">
                        <Button variant="contained" className='rbtn_sm font1' endIcon={<ArrowForwardIcon />}>
                          Learn More
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Grid>


                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box className="al_center">
                    <img src={ABT1} className="full-banner img-brd-rd" alt="About Us" />
                  </Box>
                </Grid>


              </Grid>




            </Box>



          </Container>


        </Box>
      </Box>


    </>
  );
}
