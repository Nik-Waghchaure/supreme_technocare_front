import React from 'react';
import { Grid, Typography, Box, Container } from "@mui/material"; 
import "./Footer.css";
import { Link } from 'react-router-dom';

export default function Form_footer() {
  return (
    <>
      <Box
        className="footer"
        component="section"
        style={{ backgroundColor: "#fff" }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={12} sm={12} xs={12}>
              <Typography className="footer_one_text al_center">
                Copyright © 2023 <strong>Supreme Technocare</strong> | All Rights Reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
