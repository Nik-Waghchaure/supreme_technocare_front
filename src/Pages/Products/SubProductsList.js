import {
  Container,
  Grid,
  Typography,
  Box, 
  Divider,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios
 
import DynamicBreadcrumbs from "../../Component/DynamicBreadcrumbs";
import ParticlesBgDesign from "../../Component/Particles_Bg_Design";
import { useLocation } from "react-router-dom";

export default function SubProductsList() {
  // const { slug } = useParams();
  const [subProductList, setSubProductList] = useState([]);
  const location = useLocation();
  const productName = location.pathname.split("/")[2];
  const apiUrl = process.env.REACT_APP_API_URL;
  const fetchSubProducts = () => {
    // `http://localhost:8888/api/v1/sub_category/${productName}`
    axios
      .get(`${apiUrl}/api/v1/sub_category/${productName}`)
      .then((response) => {
        setSubProductList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchSubProducts();
  }, [productName]);

  return (
    <>
      <Box className="subpage_section secbbbbg2" component="section">
        <Box>
          <Box className="subpagehead_sm">
            <Box>
              {" "}
              <ParticlesBgDesign />{" "}
            </Box>
            <Container>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Box className="al_center">
                    <Typography variant="h1" className="wh fw5">
                      {" "}
                      Products{" "}
                    </Typography>
                  </Box>
                  <Box className="al_center">
                    <Box>
                      <DynamicBreadcrumbs />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Container maxWidth="lg">
            <Box className="sub-prod-card-bx" mt={2}>
              
              <Grid
                container
                spacing={2}
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                {subProductList.map((subProduct) => (
                  <Grid item lg={3} md={3} sm={6} xs={12} key={subProduct.id}>
                    <Box className="product-box">
                      {/* {console.log(subProduct.sub_category_name)} */}
                      <Link
                        to={`/productsdetails/${productName}/?product_name=${subProduct.sub_category_name}`}
                      >
                        <Box className="al_right flx end">
                          <Typography variant="h6" className="prod_id_tag">
                            {" "}
                            {subProduct.id}{" "}
                          </Typography>
                        </Box>
                        <Box
                          className="prod_img_bg"
                          style={{
                            backgroundImage: `url(${subProduct.sub_category_img})`,
                          }}
                        ></Box>
                        <Divider />
                        <Box className="al_center prod_card_name" mt={2}>
                          <Typography variant="h6" className="col1 fw6">
                            {" "}
                            {subProduct.sub_category_name}{" "}
                          </Typography>
                        </Box>
                      </Link>
                     
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
