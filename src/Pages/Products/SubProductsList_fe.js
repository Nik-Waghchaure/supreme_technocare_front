import { Container, Grid, Typography, Box, Button, Divider } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import HeadingBottom from "../../Component/HeadingBottom";
import ProductAccordianData from "./ProductsData";
import DynamicBreadcrumbs from "../../Component/DynamicBreadcrumbs";
import Particles_Bg_Design from "../../Component/Particles_Bg_Design";





export default function SubProductsList() {



  return (
    <>



      <Box className="subpage_section secbbbbg2" component='section'>
        <Box>

          <Box className='subpagehead_sm'>
            <Box> <Particles_Bg_Design /> </Box>
            <Container>
              <Grid container alignItems="center" justifyContent='center' spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Box className='al_center'>
                    <Typography variant='h1' className='wh fw5' > Products </Typography>
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



          <Container maxWidth="lg">
            <Box mt={2}>
              <Grid container spacing={2} alignItems="flex-start" justifyContent='center'>

                {ProductAccordianData.map((category) => (
                  <>
                    {category.products.map((product) => (


                      <>
                        {product.subProducts && product.subProducts.map((subProduct) => (
                          <Grid item lg={3} md={3} sm={6} xs={12}>
                            <Box key={subProduct.name} className="product-box">
                              <Link to={subProduct.link}>

                                <Box className="al_right flx end">
                                  <Typography variant="h6" className="prod_id_tag"> {subProduct.prod_id} </Typography>
                                </Box>


                                <Box className="prod_img_bg" style={{ backgroundImage: `url(${subProduct.imgsrc})`, }}></Box>

                                <Divider />

                                <Box className="al_center" mt={2}>
                                  <Typography variant="h6" className="col1 fw6"> {subProduct.name} </Typography>


                                </Box>

                              </Link>
                            </Box>
                          </Grid>
                        ))}
                        {/* // </React.Fragment> */}
                      </>
                    ))}
                  </>
                ))}


              </Grid>
            </Box>









          </Container>


        </Box>
      </Box >


    </>
  );
}
