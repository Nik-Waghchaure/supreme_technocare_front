import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react"; 


import ParticlesBgDesign from "../Component/Particles_Bg_Design";
import DynamicBreadcrumbs from "../Component/DynamicBreadcrumbs";
import ExploreUs from "../Component/ExploreUs";
import HeadingBottom from "../Component/HeadingBottom"; 


const NewSolutionCard = ({ Num, Name }) => {
  return (
    <Grid item lg={4} md={4} sm={6} xs={12}>
      <Box className="solutions-card">
        <Box className="card-number">
          {Num}
        </Box>
        <Box className="card-name">
          <Typography variant="h6" className="service-name content two"> {Name} </Typography>
        </Box>
      </Box>
    </Grid>
  )
}


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
              <Grid container spacing={2} alignItems="flex-start" justifyContent='flex-start'>
 
                <NewSolutionCard Num="01" Name="Turn Key Project Of Hospital Setup" />
                <NewSolutionCard Num="02" Name="Complete Hospital Design" />
                <NewSolutionCard Num="03" Name="Modular ICU & Operation Theatre Setup" />
                <NewSolutionCard Num="04" Name="All Types of Hospital Furniture" />
                <NewSolutionCard Num="05" Name="Medical Gas Pipeline with Oxygen Tank" />
                <NewSolutionCard Num="06" Name="All Types of Medical Devices & Instruments" />
                <NewSolutionCard Num="07" Name="Advanced Laser & Surgical Instruments" />
                <NewSolutionCard Num="08" Name="HVAC System & Fire Fighting System" />
                <NewSolutionCard Num="09" Name="NICU & Paediatrics Setup" />
                <NewSolutionCard Num="10" Name="Bio Medical Waste Products" />
                <NewSolutionCard Num="11" Name="CCTV & Monitoring System" />
                <NewSolutionCard Num="12" Name="Advertising & Media Setup" />
                <NewSolutionCard Num="13" Name="NABH & Other Quality Certification Consultancy" />

 
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
