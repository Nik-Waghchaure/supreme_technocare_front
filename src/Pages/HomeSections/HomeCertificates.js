import { Container, Grid, Typography, Box, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import ABT1 from "../../Assets/Images/homepage/about-us.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HeadingBottomProps from "../../Component/HeadingBottomProps";


import Certificate1 from "../../Assets/Images/certificates/certificate1.png";
import Certificate2 from "../../Assets/Images/certificates/certificate2.jpg";
import Certificate3 from "../../Assets/Images/certificates/certificate3.png";
import Certificate4 from "../../Assets/Images/certificates/certificate4.png";



import Dialog from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";


export default function HomeCertificates() {


  // const [open1, setOpen1] = React.useState(false);
  // const handleClickOpen1 = () => {
  //   setOpen1(true);
  // };
  // const handleClose1 = () => {
  //   setOpen1(false);
  // };

  const [open, setOpen] = React.useState(false);
  const [selectedCertificate, setSelectedCertificate] = React.useState(null);

  const handleClickOpen = (certificate) => {
    setSelectedCertificate(certificate);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const certificates = [Certificate1, Certificate2, Certificate3, Certificate4];



  return (
    <>

      <Box id="certificates" className="section secbg2" component='section'>
        <Box>


          <Container maxWidth="lg">

            <Box mt={4}>
              <Grid container spacing={6} alignItems="center" justifyContent='center'>


                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Box>
                    <Box className="al_center center-sec-head-mob">
                      <Box>
                        <Typography variant="h6" className="col2 fw6" gutterBottom> What We Earn </Typography>
                        <Typography variant="h2" className="col1 fw6 font1"> Certificates </Typography>
                      </Box>
                      <Box pt={1}>
                        <HeadingBottomProps bottom_allign="flx js_c bottom-brd-center-mob" />
                      </Box>
                    </Box>
                  </Box>


                  <Box>
                    <Box pt={1}>
                      <Typography variant="h5" className="content fw5 al_jst" gutterBottom> <strong>Supreme Technocare</strong>, a leading provider of medical equipment and solutions in India, brings to the table the expertise in delivering comprehensive medical equipment solutions. Supreme Technocare unifies the Manufacture,Research, Development, and Distribution of Medical Equipment under one roof to the customer with affordable price & Best Quality. </Typography>
                    </Box>
                  </Box>
                </Grid>



                <Grid item lg={3} md={4} sm={12} xs={12}>
                  <Box className="img-bx" onClick={() => handleClickOpen(Certificate1)}>
                    <img src={Certificate1} className="full-banner img-brd-rd" alt="Certificates" />
                  </Box>
                </Grid>



                <Grid item lg={3} md={4} sm={12} xs={12}>
                  <Box className="img-bx" onClick={() => handleClickOpen(Certificate2)}>
                    <img src={Certificate2} className="full-banner img-brd-rd" alt="Certificates" />
                  </Box>
                </Grid>

                <Grid item lg={3} md={4} sm={12} xs={12}>
                  <Box className="img-bx" onClick={() => handleClickOpen(Certificate3)}>
                    <img src={Certificate3} className="full-banner img-brd-rd" alt="Certificates" />
                  </Box>
                </Grid>

                <Grid item lg={3} md={4} sm={12} xs={12}>
                  <Box className="img-bx" onClick={() => handleClickOpen(Certificate4)}>
                    <img src={Certificate4} className="full-banner img-brd-rd" alt="Certificates" />
                  </Box>
                </Grid>



              </Grid>
            </Box>


          </Container >


        </Box >
      </Box >






      {/* <Dialog
        id="Enquiry_dialog"
        onClose={handleClose1}
        open={open1}
        maxWidth="lg"
      >
        <MuiDialogTitle id="customized-dialog-title" onClose={handleClose1}>
          <Box className="al_right">
            <IconButton onClick={handleClose1}>
              <HighlightOffIcon className="col3" />
            </IconButton>
          </Box>
        </MuiDialogTitle>
        <MuiDialogContent>
          <Box className="al_center">
            <Grid
              container
              spacing={2}
              alignItems="baseline"
              justifyContent="center"
            >
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box>
                  <img src={Certificate1} className="full-banner img-brd-rd" alt="Certificates" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </MuiDialogContent>
      </Dialog> */}

      <Dialog
        id="Enquiry_dialog"
        onClose={handleClose}
        open={open}
        maxWidth="md"
      >
        <MuiDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Box className="al_right">
            <IconButton onClick={handleClose}>
              <HighlightOffIcon className="col3" />
            </IconButton>
          </Box>
        </MuiDialogTitle>
        <MuiDialogContent>
          <Box className="al_center" pt={'12px'}>
            <Grid
              container
              spacing={2}
              alignItems="baseline"
              justifyContent="center"
            >
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box>
                  <img src={selectedCertificate} className="full-banner img-brd-rd" alt="Certificates" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </MuiDialogContent>
      </Dialog>



    </>
  );
}