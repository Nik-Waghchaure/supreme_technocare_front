import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";


import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



import Carousel_1 from "../../Assets/Images/homepage/caraousel_1.jpg";
import Carousel_2 from "../../Assets/Images/homepage/caraousel_2.jpg";
import Carousel_3 from "../../Assets/Images/homepage/caraousel_3.jpg";
import HeadingBottom from "../../Component/HeadingBottom";
import FeaturedProdData from "./Data/FeaturedProdData";


import FP from "../../Assets/Images/products/featured-products-2.jpg"



export default function FeaturedProducts() {


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  


  return (
    <>


      <Box id="products_carousel" className="section wbg" component="section">
        <Container maxWidth="lg">


          <Box>
            <Box className="al_center">
              <Box>
              <Typography variant="h6" className="col2 fw6" gutterBottom> Recommended </Typography>
                <Typography variant="h2" className="col1 fw6 font1"> Featured Products</Typography>
              </Box>
              <Box pt={1}>
                <HeadingBottom />
              </Box>

            </Box>
          </Box>


          <Box mt={1}>
              <Grid container spacing={4} alignItems="center" justifyContent='center'>
                
              <Grid item lg={4} md={4} sm={12} xs={12}> 
              <Box className="al_center">
                    <img src={FP} className="landing-banner" alt="About Us" />
                  </Box>
              </Grid>

                <Grid item lg={8} md={8} sm={12} xs={12}> 
          <Box mt={2} mb={5}>
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
              transitionDuration={1500}
              customTransition="opacity 2000ms ease-in-out"
              autoPlaySpeed={2500}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-20-px"
            >

              {/* <>
                <Box className="prod_carousel_bx">
                  <Box className="mainsection1" component="section" style={{ backgroundImage: "url(" + Carousel_1 + ")" }}></Box>
                  <Box className="al_center" mt={1}>
                    <Typography variant="h5" className="content fw6"> Solution_Name_Here </Typography>
                  </Box>
                </Box>
              </>


              <>
                <Box className="prod_carousel_bx">
                  <Box className="mainsection1" component="section" style={{ backgroundImage: "url(" + Carousel_2 + ")" }}></Box>
                  <Box className="al_center" mt={1}>
                    <Typography variant="h5" className="content fw6"> Solution_Name_Here </Typography>
                  </Box>
                </Box>
              </>

              <>
                <Box className="prod_carousel_bx">
                  <Box className="mainsection1" component="section" style={{ backgroundImage: "url(" + Carousel_3 + ")" }}></Box>
                  <Box className="al_center" mt={1}>
                    <Typography variant="h5" className="content fw6"> Solution_Name_Here </Typography>
                  </Box>
                </Box>
              </>

              <>
                <Box className="prod_carousel_bx">
                  <Box className="mainsection1" component="section" style={{ backgroundImage: "url(" + Carousel_3 + ")" }}></Box>
                  <Box className="al_center" mt={1}>
                    <Typography variant="h5" className="content fw6"> Solution_Name_Here </Typography>
                  </Box>
                </Box>
              </>

              <>
                <Box className="prod_carousel_bx">
                  <Box className="mainsection1" component="section" style={{ backgroundImage: "url(" + Carousel_1 + ")" }}></Box>
                  <Box className="al_center" mt={1}>
                    <Typography variant="h5" className="content fw6"> Solution_Name_Here </Typography>
                  </Box>
                </Box>
              </>


              <>
                <Box className="prod_carousel_bx">
                  <Box className="mainsection1" component="section" style={{ backgroundImage: "url(" + Carousel_2 + ")" }}></Box>
                  <Box className="al_center" mt={1}>
                    <Typography variant="h5" className="content fw6"> Solution_Name_Here </Typography>
                  </Box>
                </Box>
              </>

              <>
                <Box className="prod_carousel_bx">
                  <Box className="mainsection1" component="section" style={{ backgroundImage: "url(" + Carousel_3 + ")" }}></Box>
                  <Box className="al_center" mt={1}>
                    <Typography variant="h5" className="content fw6"> Solution_Name_Here </Typography>
                  </Box>
                </Box>
              </>

              <>
                <Box className="prod_carousel_bx">
                  <Box className="mainsection1" component="section" style={{ backgroundImage: "url(" + Carousel_3 + ")" }}></Box>
                  <Box className="al_center" mt={1}>
                    <Typography variant="h5" className="content fw6"> Solution_Name_Here </Typography>
                  </Box>
                </Box>
              </>

              */}



              {FeaturedProdData.map((val) => (
                <>
                  <Link to={val.link}>
                    <Box className="prod_carousel_bx">
                      <Box className="product_img" component="section" style={{ backgroundImage: `url(${val.imgsrc})`, }}></Box>
                      <Box className="al_center" mt={1}>
                        <Typography variant="h5" className="content fw6"> {val.heading} </Typography>
                      </Box>
                    </Box>
                  </Link>
                </>
              ))}




            </CarouselMulti>
          </Box>
          </Grid>

          </Grid>
          </Box>
        </Container>
      </Box>



    </>
  );
}
