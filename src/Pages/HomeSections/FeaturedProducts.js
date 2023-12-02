import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";


import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import HeadingBottom from "../../Component/HeadingBottom";


import FP from "../../Assets/Images/products/featured-products-2.jpg"
import FeaturedProdData from "../Static_Data/FeaturedProdData";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function FeaturedProducts() {

 


  const responsiveOptions = {
    0: {
      items: 1, // Number of items to show at screen width <= 0px
    },
    600: {
      items: 3, // Number of items to show at screen width <= 600px
    },
    1000: {
      items: 3, // Number of items to show at screen width <= 1000px
    },
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


              <Grid item lg={10} md={10} sm={12} xs={12}>
                <Box mt={2} mb={5}>
                  {/* <CarouselMulti
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
                  > */}
                  <OwlCarousel className='owl-theme' loop margin={10} nav={false} dots={true} autoplay responsive={responsiveOptions}>
 
                    {FeaturedProdData.map((val) => (
                      <>
                        <Link to={val.link}>
                          <Box className="prod_carousel_bx bxsh_1">
                            <Box className="product_img" component="section" style={{ backgroundImage: `url(${val.imgsrc})`, }}></Box>
                            <Box className="al_center" mt={1}>
                              <Typography variant="h5" className="content fw6"> {val.heading} </Typography>
                            </Box>
                          </Box>
                        </Link>
                      </>
                    ))}
 

                  {/* </CarouselMulti> */}
                  </OwlCarousel>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Container>
      </Box>



    </>
  );
}
