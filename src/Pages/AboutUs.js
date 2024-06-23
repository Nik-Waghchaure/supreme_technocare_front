import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react"; 

import ParticlesBgDesign from "../Component/Particles_Bg_Design";
import DynamicBreadcrumbs from "../Component/DynamicBreadcrumbs";
import ExploreUs from "../Component/ExploreUs"; 
import ABT1 from "../Assets/Images/homepage/about-us.jpg"
import Mission from "../Assets/Images/about_us/mission.gif"
import Vision from "../Assets/Images/about_us/vision.gif"
import Quality from "../Assets/Images/about_us/quality.gif"
import Customer from "../Assets/Images/about_us/customer.gif"
import HeadingBottomProps from "../Component/HeadingBottomProps";



export default function AboutUs() {



  return (
    <>


      <Box className="subpage_section wbg" component='section'>

        <Box className='subpagehead'>
          <Box> <ParticlesBgDesign /> </Box>
          <Container>
            <Grid container alignItems="center" justifyContent='center' spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box className='al_center' mb={1}>
                  <Typography variant='h1' className='wh fw5' > About Us </Typography>
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

 


            <Box mt={4}>
              <Grid container spacing={4} alignItems="top" justifyContent='center'>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box> 
                    <img src={ABT1} className="full-banner img-brd-rd" alt="About Us" />
                  </Box>
                </Grid>


                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box mb={3}>
                    <Box className="al_left center-sec-head-mob">
                      <Box>
                        <Typography variant="h6" className="col2 fw6" gutterBottom> About Us </Typography>
                        <Typography variant="h2" className="col1 fw6 font1"> Who We Are </Typography>
                      </Box>
                      <Box pt={1}>
                        <HeadingBottomProps bottom_allign="flx js_l bottom-brd-center-mob" />
                      </Box>

                    </Box>

                    <Box mt={2} className="al_jst">
                      <Typography variant="h5" className="content fw5" gutterBottom>  <strong>Supreme Technocare</strong> is Commited to Provide best products that will help you to work efficiently.</Typography>
                    </Box>
                  </Box>

                  <Box mb={2}>
                    <Box pt={1}>
                      <Typography variant="h5" className="content fw5 al_jst" gutterBottom>  Supreme Technocare, a leading provider of medical equipment and solutions in India, brings to the table the expertise in delivering comprehensive medical equipment solutions. Supreme Technocare unifies the Manufacture,Research, Development, and Distribution of Medical Equipment under one roof to the customer with affordable price & Best Quality. </Typography>
                    </Box>

                    <Box pt={1}>
                      <Typography variant="h5" className="content fw5 al_jst" gutterBottom> We handle more than 5 Factories where we provide wide variety of Hospital products & Services. </Typography>
                    </Box>

                  </Box>
                </Grid>
              </Grid>
            </Box>

          </Container>
        </Box>
      </Box>




      <Box className="section secbg2" component='section'>
        <Box pb={5}>

          <Container maxWidth="lg">


            <Grid container spacing={2} alignItems="flex-start" justifyContent='center'>
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <Box className="abt-us-bx">

                  <Box className="al_center" mb={2}>
                    <img src={Mission} className="abt-ico" alt="Our Mission" />
                  </Box>

                  <Typography variant="h4" className="col1 fw6 font1 al_center" gutterBottom>Our Mission</Typography>

                  <Box className="al_center" pt={1}>
                    <Typography variant="h6" className="content fw5">To provide high-quality standard products ensuring safety and serving mankind with innovative technologies and expertise. </Typography>
                  </Box>

                </Box>
              </Grid>

              <Grid item lg={3} md={3} sm={6} xs={12}>
                <Box className="abt-us-bx">

                  <Box className="al_center" mb={2}>
                    <img src={Vision} className="abt-ico" alt="Our Vision" />
                  </Box>

                  <Typography variant="h4" className="col1 fw6 font1 al_center" gutterBottom>Our Vision</Typography>

                  <Box className="al_center" pt={1}>
                    <Typography variant="h6" className="content fw5"> To identify and associate with all possible customers and service providers globally. </Typography>
                  </Box>

                </Box>
              </Grid>


              <Grid item lg={3} md={3} sm={6} xs={12}>
                <Box className="abt-us-bx">

                  <Box className="al_center" mb={2}>
                    <img src={Quality} className="abt-ico" alt="Our Quality Policy" />
                  </Box>

                  <Typography variant="h4" className="col1 fw6 font1 al_center" gutterBottom>Our Quality Policy</Typography>

                  <Box className="al_center" pt={1}>
                    <Typography variant="h6" className="content fw5">All products are designed and manufactured to consistently meet high quality and performance standards. </Typography>
                  </Box>

                </Box>
              </Grid>

              <Grid item lg={3} md={3} sm={6} xs={12}>
                <Box className="abt-us-bx">

                  <Box className="al_center" mb={2}>
                    <img src={Customer} className="abt-ico" alt="Our Customer Policy" />
                  </Box>

                  <Typography variant="h4" className="col1 fw6 font1 al_center" gutterBottom>Our Customer Policy</Typography>

                  <Box className="al_center" pt={1}>
                    <Typography variant="h6" className="content fw5"> Each and every customers is served with the same spirit without any discrimination and is assured of high quality products and service. </Typography>
                  </Box>

                </Box>
              </Grid>
            </Grid>


          </Container>

        </Box>
      </Box>





      <Box>
        <ExploreUs prevBg="secbg2" />
      </Box>


    </>
  );
}
