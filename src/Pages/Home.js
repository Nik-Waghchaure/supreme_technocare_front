import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import FeaturedProducts from "./HomeSections/FeaturedProducts";
import HomeSolutions from "./HomeSections/HomeSolutions";
import ExploreUs from "../Component/ExploreUs";
import HomeAboutUs from "./HomeSections/HomeAboutUs";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
import HomeCertificates from "./HomeSections/HomeCertificates";




export default function Home() {
 

  return (
    <>

      <Box id="landing_carousel">

        <>
          <Box className="mainsection1" component="section">

            <Container maxWidth="lg">
              <Grid container spacing={1} alignItems="flex-start" justifyContent='flex-start'>
                <Grid item lg={6} md={6} sm={10} xs={10}>
                  <Box className="text_animated">
                    <Typography variant="h1" className="wh fw6 font1" gutterBottom>
                      YOUR <span className="wh"> HEALTH </span> IS ALWAYS OUR GOAL
                    </Typography>

                    <Typography variant="h3" className="wh fw5" gutterBottom>
                      Supreme Technocare dedicates to make better healthcare solutions for people around the world.
                    </Typography>

                    <Link to="/about-us">
                      <Button variant="contained" className='rbtn_sm2 font1 bxsh1' endIcon={<ArrowForwardIcon />}>
                        Learn More
                      </Button>
                    </Link>
                  </Box>
                </Grid>


              </Grid>
            </Container>
          </Box>
        </>

      </Box>


      <Box>
        <HomeAboutUs />
      </Box>


      <Box>
        <HomeSolutions />
      </Box>


      <Box>
        <FeaturedProducts />
      </Box>



      <Box>
        <HomeCertificates />
      </Box>


      <Box>
        <ExploreUs prevBg="secbg2" />
      </Box>


    </>
  );
}
