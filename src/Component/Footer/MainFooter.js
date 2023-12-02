import React from 'react';
import { Grid, Typography, Box, Container, Button, IconButton, Divider } from "@mui/material";
import "./Footer.css";
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


import SearchIcon from '@mui/icons-material/Search';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';

import LOGO from "../../Assets/Images/main_logo.png"


export default function MainFooter() {
  return (
    <>
      <Box
        className="main-footer"
        component="section"
      >



        <Container maxWidth="lg">


          <Box mt={2} mb={4}>
            <Grid container spacing={2} justifyContent="flex-start" alignItems="top">

              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box className="al_left">

                  <Box mt={1} mb={2}>
                    <img src={LOGO} className="foot-logo-bx" />
                  </Box>


                  <Box className="mr-rgt-desk">
                    <Typography variant='h5' className='content al_jst fw5' gutterBottom> Supreme Technocare, a leading provider of medical equipment and solutions in India, brings to the table the expertise in delivering comprehensive medical equipment solutions. </Typography>
                  </Box>



                  <Box className="footer-social-ico" mt={2} mb={2}>

                    <IconButton className='whatsapp'>
                      <WhatsAppIcon fontSize='medium' />
                    </IconButton>

                    <IconButton className="linkedin">
                      <LinkedInIcon fontSize='medium' />
                    </IconButton>

                    <IconButton className="fb">
                      <FacebookIcon fontSize='medium' />
                    </IconButton>

                    <IconButton className="insta">
                      <InstagramIcon fontSize='medium' />
                    </IconButton>
                  </Box>


                </Box>
              </Grid>

              <Grid item lg={2} md={2} sm={6} xs={6}>
                <Box className="al_left">
                  <Box mt={2} mb={2}>
                    <Typography variant="h4" className='col1 fw6'> Explore Us </Typography>
                    <Box className="line bg2"></Box>
                  </Box>

                  <Box>
                    <Link to="about-us">
                      <Button
                        variant="text"
                        className='footerlink'
                        disableRipple
                        startIcon={<ArrowRightIcon />}
                      >
                        About Us
                      </Button>
                    </Link>
                  </Box>

                  <Box>
                    <Link to="products/anaesthesia-machine">
                      <Button
                        variant="text"
                        className='footerlink'
                        disableRipple
                        startIcon={<ArrowRightIcon />}
                      >
                        Products
                      </Button>
                    </Link>
                  </Box>



                  <Box>
                    <Link to="solutions">
                      <Button
                        variant="text"
                        className='footerlink'
                        disableRipple
                        startIcon={<ArrowRightIcon />}
                      >
                        Solutions
                      </Button>
                    </Link>
                  </Box>

                  <Box>
                    <Link to="contact-us">
                      <Button
                        variant="text"
                        className='footerlink'
                        disableRipple
                        startIcon={<ArrowRightIcon />}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </Box>


                </Box>
              </Grid>


              <Grid item lg={2} md={2} sm={6} xs={6}>
                <Box className="al_left">
                  <Box mt={2} mb={2}>
                    <Typography variant="h4" className='col1 fw6'> Useful Links </Typography>
                    <Box className="line bg2"></Box>
                  </Box>


                  <Box>
                    <Link to="Enquiry">
                      <Button
                        variant="text"
                        className='footerlink'
                        disableRipple
                        startIcon={<ArrowRightIcon />}
                      >
                        Enquiry
                      </Button>
                    </Link>
                  </Box>



                  <Box>
                    <Link to="terms">
                      <Button
                        variant="text"
                        className='footerlink'
                        disableRipple
                        startIcon={<ArrowRightIcon />}
                      >
                        Terms & Conditions
                      </Button>
                    </Link>
                  </Box>



                  <Box>
                    <Link to="policy">
                      <Button
                        variant="text"
                        className='footerlink'
                        disableRipple
                        startIcon={<ArrowRightIcon />}
                      >
                        Privay Policy
                      </Button>
                    </Link>
                  </Box>

                </Box>
              </Grid>



              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box className="al_left footer_li">

                  <Grid container spacing={2} justifyContent="flex-start" alignItems="top">
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar className="wbg">
                              <LocationOnIcon className='col2' />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Address" secondary={
                            <a
                              href="https://www.google.com/maps?q=Aryavarta,Mahale Farm, Cidco, Nashik,  Maharshtra(IND)-422009"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              303/306 Aryavarta,Mahale Farm, Cidco, Nashik,  Maharshtra(IND)-422009
                            </a>
                          } />
                        </ListItem>


                        <ListItem>
                          <ListItemAvatar>
                            <Avatar className="wbg">
                              <CallIcon className='col2' />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Contact Number" secondary={
                            <>
                              <a href="tel:+91-98905 61939">+91-98905 61939</a>
                              <br />
                              <a href="tel:+91-8177800722">+91-8177800722</a>
                            </>
                          } />
                        </ListItem>


                        <ListItem>
                          <ListItemAvatar>
                            <Avatar className="wbg">
                              <MailOutlineIcon className='col2' />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Mail Address" secondary={<>
                            <a href='mailto:supremetechnocare@gmail.com'>supremetechnocare@gmail.com</a>
                          </>} />
                        </ListItem>

                      </List>
                    </Grid>

                  </Grid>



                </Box>
              </Grid>



            </Grid>
          </Box>

          <Divider className='wh_divi' />


          <Box mt={2} mb={1}>
            <Grid container spacing={0}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography className="footer_one_text al_center content">
                  Copyright © 2023 <strong>Supreme Technocare.</strong> |  All Rights Reserved.
                </Typography>
              </Grid>
            </Grid>

          </Box>



        </Container>
      </Box>
    </>
  );
}
