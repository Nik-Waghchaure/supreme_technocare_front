import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";


import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



import Carousel_1 from "../Assets/Images/homepage/caraousel_1.jpg";
import Carousel_2 from "../Assets/Images/homepage/caraousel_2.jpg";
import Carousel_3 from "../Assets/Images/homepage/caraousel_3.jpg"; 

 
import Solutions from "./Solutions";
import FeaturedProducts from "./FeaturedProducts";




export default function Home() {


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <>

      <Box id="landing_carousel">
        <CarouselMulti
          responsive={responsive}
          arrows={false}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlay={true}
          pauseOnHover={false}
          keyBoardControl={true}
          // transitionDuration={1500}
          customTransition="opacity 200ms ease-in-out"
          autoPlaySpeed={9500}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-0-px"
        >

          <>
            <Box className="mainsection1" component="section" style={{ backgroundImage: "url(" + Carousel_1 + ")" }}>
              <Container maxWidth="lg">
                <Grid container spacing={1} alignItems="flex-start" justifyContent='center'>
                  <Grid item lg={6} md={6} sm={10} xs={10}>
                    <Box className="text_animated">
                      <Typography variant="h1" className="col1 fw6" gutterBottom>
                        YOUR <span className="col2"> HEALTH </span> IS ALWAYS OUR GOAL
                      </Typography>

                      <Typography variant="h2" className="col3" gutterBottom>
                        ARI dedicates to make better healthcare solutions for people around the world.
                      </Typography>

                      <Link to="/#">
                        <Button variant="contained" className='rbtn_sm'>
                          Learn More
                        </Button>
                      </Link>
                    </Box>
                  </Grid>

                  <Grid item lg={6} md={6} sm={10} xs={10}>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </>


          <>
            <Box className="mainsection1" component="section" style={{ backgroundImage: "url(" + Carousel_2 + ")" }}>
              <Container maxWidth="lg">
                <Grid container spacing={1} alignItems="flex-start" justifyContent='center'>
                  <Grid item lg={6} md={6} sm={10} xs={10}>
                    <Box className="text_animated">
                      <Typography variant="h1" className="col1 fw6" gutterBottom>
                        PROFESSIONAL <span className="col2"> MEDICAL </span> SOLUTIONS
                      </Typography>

                      <Typography variant="h2" className="col3" gutterBottom>
                        ARI provides one-stop solutions for hospital, clinic and laboratory, and also installation guidance, operation training, maintenance and marketing support.
                      </Typography>

                      <Link to="/#">
                        <Button variant="contained" className='rbtn_sm'>
                          Learn More
                        </Button>
                      </Link>
                    </Box>
                  </Grid>

                  <Grid item lg={6} md={6} sm={10} xs={10}>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </>


          <>
            <Box className="mainsection1" component="section" style={{ backgroundImage: "url(" + Carousel_3 + ")" }}>
              <Container maxWidth="lg">
                <Grid container spacing={1} alignItems="flex-start" justifyContent='center'>
                  <Grid item lg={5} md={5} sm={10} xs={10}>
                  </Grid>
                  <Grid item lg={7} md={7} sm={10} xs={10}>
                    <Box className="text_animated">
                      <Typography variant="h1" className="col1 fw6" gutterBottom>
                        QUALITY SERVICE,<span className="col2"> CUSTOMERS </span> FIRST
                      </Typography>

                      <Typography variant="h2" className="col3" gutterBottom>
                        With professional sales team and experienced engineers, ARI will offer quick and detailed response to each product Enquiry and service request within 24 hours. </Typography>

                      <Link to="/#">
                        <Button variant="contained" className='rbtn_sm'>
                          Learn More
                        </Button>
                      </Link>
                    </Box>
                  </Grid>


                </Grid>
              </Container>
            </Box>
          </>


        </CarouselMulti>
      </Box>
 


      <Box>
        <Solutions />
      </Box>


      <Box>
        <FeaturedProducts />
      </Box>

    </>
  );
}
