import React from "react";
import { Box, Grid, Container } from "@mui/material";
import PNF from "../Assets/Images/under_construction.jpg"

const NotFound = () => {
  return (
    <>
      <Box id="page-not-found">
        <Container>
          <Box>
            <Grid
              container
              alignItems="flex-start"
              justifyContent="center"
              spacing={2}
            >
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box className="al_center">

                  <img src={PNF} className="under-construction" alt="Under Construction"/>


                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
