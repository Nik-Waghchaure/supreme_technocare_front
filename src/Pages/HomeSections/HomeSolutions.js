import { Container, Grid, Typography, Box, Button, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import HeadingBottom from "../../Component/HeadingBottom";

// import ABT1 from "../../Assets/Images/Solutions/offerings_3d.png"
import ABT1 from "../../Assets/Images/homepage/our-offerings.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OurOfferingsData from "../Static_Data/OurOfferingsData";

import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HeadingBottomProps from "../../Component/HeadingBottomProps";


export default function HomeSolutions() {



  return (
    <>



      <Box className="section secbg2" component='section'>
        <Box>


          <Container maxWidth="lg">
            {/* <Grid container spacing={2} alignItems="flex-start" justifyContent='center'>


              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box className="al_center">


                  <Box>
                    <Typography variant="h6" className="col2 fw6" gutterBottom> Solutions </Typography>
                    <Typography variant="h2" className="col1 fw6 font1"> Our Offerings </Typography>
                  </Box>
                  <Box pt={1}>
                    <HeadingBottomProps bottom_allign="flx js_r" />
                  </Box>

                </Box>
              </Grid>
            </Grid> */}




            <Box mt={4}>


              {/* <Grid item lg={4} md={5} sm={12} xs={12}>
                  <Box>

                    <Box pt={1}>
                    <Typography variant="h5" className="content fw5 al_jst" gutterBottom>
                      <ul> 
                      <li> <Typography variant="h5" className="content fw5 al_jst" gutterBottom> Turn Key Project Of Hospital Setup  </Typography> </li>
 
                      <li> <Typography variant="h5" className="content fw5 al_jst" gutterBottom> Complete Hospital Design  </Typography> </li>

                      <li> <Typography variant="h5" className="content fw5 al_jst" gutterBottom> Modular ICU & Operation Theatre Setup  </Typography> </li>

                      <li> <Typography variant="h5" className="content fw5 al_jst" gutterBottom> All Types of Hospital Furniture  </Typography> </li>

                      <li> <Typography variant="h5" className="content fw5 al_jst" gutterBottom> Medical Gas Pipeline with Oxygen Tank  </Typography> </li>

                      <li> <Typography variant="h5" className="content fw5 al_jst" gutterBottom> All Types of Medical Devices & Instruments  </Typography> </li>

                      <li> <Typography variant="h5" className="content fw5 al_jst" gutterBottom> Advanced Laser & Surgical Instruments  </Typography> </li>

                      </ul>
                      </Typography>
                    </Box>

                  </Box>
                </Grid>


              



                <Grid item lg={4} md={5} sm={12} xs={12}>
                  <Box>

                    <Box pt={1}>
                    <Typography variant="h5" className="content fw5 al_jst" gutterBottom>
                      <ul> 
                      <li> <Typography variant="h5" className="content fw5 al_jst" gutterBottom> HVAC System & Fire Fighting System  </Typography> </li>

                      <li> <Typography variant="h5" className="content fw5 al_jst" gutterBottom> NICU & Paediatrics Setup  </Typography> </li>

                      <li> <Typography variant="h5" className="content fw5 al_jst" gutterBottom> Bio Medical Waste Products  </Typography> </li>

                      <li> <Typography variant="h5" className="content fw5 al_jst" gutterBottom> CCTV & Monitoring System  </Typography> </li>

                      <li> <Typography variant="h5" className="content fw5 al_jst" gutterBottom> Advertising & Media Setup  </Typography> </li>

                      <li> <Typography variant="h5" className="content fw5 al_jst" gutterBottom> NABH & Other Quality Certification Consultancy.  </Typography> </li>

                      </ul>
                      </Typography>
                    </Box>
 

                  </Box>
                </Grid> */}


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






              {/* {OurOfferingsData.map((val) => (
                  <>
                    <Grid item lg={3} md={4} sm={6} xs={12}> 
                        <Box className="home_offering_bx">
                          <Box className=""> 
                            <IconButton disabled className="offering_ico_btn">
                            <VolunteerActivismIcon className="offering_ico"/>
                            </IconButton>
                          </Box>
                          <Box className="al_left" ml={1}>
                            <Typography variant="h5" className="content fw6"> {val.heading} </Typography>
                          </Box>
                        </Box> 
                    </Grid>
                  </>
                ))} */}




            </Box>



          </Container>


        </Box>
      </Box>


    </>
  );
}
