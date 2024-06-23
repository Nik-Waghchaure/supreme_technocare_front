import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";  

import HeadingBottom from "../../Component/HeadingBottom"; 
import FeaturedProdData from "../Static_Data/FeaturedProdData";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function FeaturedProducts() {
  const responsiveOptions = {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,  
    },
  };

  return (
    <>
      <Box id="products_carousel" className="section wbg" component="section">
        <Container maxWidth="lg">
          <Box>
            <Box className="al_center">
              <Box>
                <Typography variant="h6" className="col2 fw6" gutterBottom>
                  Recommended
                </Typography>
                <Typography variant="h2" className="col1 fw6 font1">
                  Featured Products
                </Typography>
              </Box>
              <Box pt={1}>
                <HeadingBottom />
              </Box>
            </Box>
          </Box>

          <Box mt={1}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              <Grid item lg={10} md={10} sm={12} xs={12}>
                <Box mt={2} mb={5}>
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav={false}
                    dots={true}
                    autoplay
                    responsive={responsiveOptions}
                  >
                    {FeaturedProdData.map((val, item) => (
                      <Link to={val.link} key={item}>
                        <Box className="prod_carousel_bx bxsh_1">
                          <Box
                            className="product_img"
                            component="section"
                            style={{ backgroundImage: `url(${val.imgsrc})` }}
                          ></Box>
                          <Box className="al_center" mt={1}>
                            <Typography variant="h5" className="content fw6">
                              {val.heading}
                            </Typography>
                          </Box>
                        </Box>
                      </Link>
                    ))}
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
