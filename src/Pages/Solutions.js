import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

 
import ParticlesBgDesign from "../Component/Particles_Bg_Design";
import DynamicBreadcrumbs from "../Component/DynamicBreadcrumbs";
import ExploreUs from "../Component/ExploreUs";
import HeadingBottom from "../Component/HeadingBottom";
import SolutionCardData from "./Static_Data/SolutionsData";
import OurOfferingsData from "./Static_Data/OurOfferingsData";




export default function Solutions() {



  return (
    <>


      <Box className="subpage_section secbg2" component='section'>

        <Box className='subpagehead'>
          <Box> <ParticlesBgDesign /> </Box>
          <Container>
            <Grid container alignItems="center" justifyContent='center' spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box className='al_center' mb={1}>
                  <Typography variant='h1' className='wh fw5' > Solutions </Typography>
                </Box>
                <Box className='al_center'>
                  <Box>
                    <DynamicBreadcrumbs />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>




        <Box mt={3}>
          <Container maxWidth="lg">


            <Box mb={3}>
              <Grid container spacing={2} alignItems="center" justifyContent='center'>

                <Grid item lg={6} md={8} sm={10} xs={10}>
                  <Box className="al_center">

                    <Box>
                      <Typography variant="h2" className="col1 fw6 font1"> Our Offerings </Typography>
                    </Box>

                    <Box>
                      <HeadingBottom />
                    </Box>

                    <Box mt={2}>
                      <Typography variant="h5" className="content fw5" gutterBottom> Discover the Future of Healthcare Solutions with <strong>Supreme Technocare</strong>. </Typography>
                    </Box>

                  </Box>
                </Grid>

              </Grid>
            </Box>


            <Box>
              <Grid container spacing={2} alignItems="flex-start" justifyContent='center'>

                {OurOfferingsData.map((val) => (
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    {/* <Link to={val.link}> */}
                      <Box class="wsk-cp-product">
                        <Box class="wsk-cp-img">
                          <img src={val.imgsrc} alt="Product" class="img-responsive" />
                        </Box>
                        <Box class="wsk-cp-text">
                          <Box class="category">
                            <span>{val.heading}</span>
                          </Box>
                        </Box>
                      </Box>
                    {/* </Link> */}
                  </Grid>
                ))}

              </Grid>
            </Box>

          </Container>
        </Box>
      </Box>


      <Box>
        <ExploreUs prevBg="secbg2" />
      </Box>


    </>
  );
}
