import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import HeadingBottom from "../../Component/HeadingBottom";


// import ABT1 from "../../Assets/Images/about_us/who_we_are_3d.png"
import ABT1 from "../../Assets/Images/homepage/about-us.jpg"

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HeadingBottomProps from "../../Component/HeadingBottomProps";


export default function HomeAboutUs() {



  return (
    <>

      <Box className="section wbg" component='section'>
        <Box>


          <Container maxWidth="lg">
            {/* <Grid container spacing={2} alignItems="flex-start" justifyContent='center'>

              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box className="al_center">
                  <Box>
                    <Typography variant="h6" className="col2 fw6" gutterBottom> About Us </Typography>
                    <Typography variant="h2" className="col1 fw6 font1"> Who We Are </Typography>
                  </Box>
                  <Box pt={1}>
                    <HeadingBottom />
                  </Box>

                </Box>
              </Grid>
            </Grid> */}



            <Box mt={4}>
              <Grid container spacing={4} alignItems="flex-start" justifyContent='center'>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box className="al_center">
                    <img src={ABT1} className="full-banner img-brd-rd" alt="About Us" />
                  </Box>
                </Grid>


                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box>


                    <Box className="al_left center-sec-head-mob">
                      <Box>
                        <Typography variant="h6" className="col2 fw6" gutterBottom> About Us </Typography>
                        <Typography variant="h2" className="col1 fw6 font1"> Who We Are </Typography>
                      </Box>
                      <Box pt={1}>
                        <HeadingBottomProps bottom_allign="flx js_l bottom-brd-center-mob" />
                      </Box>

                    </Box>


                    <Box pt={1}>
                      <Typography variant="h5" className="content fw5 al_jst" gutterBottom> <strong>Supreme Technocare</strong>, a leading provider of medical equipment and solutions in India, brings to the table the expertise in delivering comprehensive medical equipment solutions. Supreme Technocare unifies the Manufacture,Research, Development, and Distribution of Medical Equipment under one roof to the customer with affordable price & Best Quality. </Typography>
                    </Box>


                    <Box pt={1}>
                      <Typography variant="h5" className="content fw5 al_jst" gutterBottom>
                        We handle more than 5 Factories where we provide wide variety of  Hospital products & Services. </Typography>
                    </Box>

                    <Box className="mob-center">
                      <Link to="about-us">
                        <Button variant="contained" className='rbtn_sm font1' endIcon={<ArrowForwardIcon />}>
                          Learn More
                        </Button>
                      </Link>
                    </Box>



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