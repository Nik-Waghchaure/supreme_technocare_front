import React, { useState } from 'react';
import ParticlesBgDesign from '../../Component/Particles_Bg_Design';
import DynamicBreadcrumbs from '../../Component/DynamicBreadcrumbs';
import { TextField, Button, Box, Container, Grid, Typography, Snackbar } from '@mui/material';
import HeadingBottom from '../../Component/HeadingBottom';
import ExploreUs from '../../Component/ExploreUs';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import MailOutlineIcon from '@mui/icons-material/MailOutline';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';

const apiUrl = process.env.REACT_APP_API_URL;



const ContactUs = () => {


  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/api/v1/contact-us-form/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        // alert(data.message); // Assuming the backend sends a message in the response
        setSnackbarMessage(data.message);
        setOpenSnackbar(true);
        setFormData({ name: '', email: '', mobile: '', message: '' });
      } else {
        const errorData = await response.json();
        // alert(errorData.detail); // Log the error detail
        setSnackbarMessage(errorData.detail);
        setOpenSnackbar(true);
      }
    } catch (error) {
      // console.error('Error:', error);
      // alert('Failed to send email. Please try again later.');
      setSnackbarMessage('Failed to send email. Please try again later.');
      setOpenSnackbar(true);
    }
  };


  return (
    <>



      <Box className="subpage_section secbg2" component='section'>

        <Box className='subpagehead'>
          <Box> <ParticlesBgDesign /> </Box>
          <Container>
            <Grid container alignItems="center" justifyContent='center' spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box className='al_center' mb={1}>
                  <Typography variant='h1' className='wh fw5' > Contact us </Typography>
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






        <Box mt={3}>
          <Container maxWidth="lg">


            <Box mb={3}>
              <Grid container spacing={2} alignItems="center" justifyContent='center'>

                <Grid item lg={6} md={8} sm={10} xs={10}>
                  <Box className="al_center">

                    <Box>
                      <Typography variant="h2" className="col1 fw6 font1"> Get In Touch </Typography>
                    </Box>

                    <Box>
                      <HeadingBottom />
                    </Box>

                    <Box mt={3}>
                      <Typography variant="h5" className="content fw5" gutterBottom>  Supreme Technocare is  Provide best products that will help you to work efficiently.</Typography>
                    </Box>

                  </Box>
                </Grid>

              </Grid>
            </Box>





            <Box mt={4}>
              <Grid container spacing={0} alignItems="flex-start" justifyContent='center' style={{ backgroundColor: '#fff', borderRadius: '16px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} >


                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box className="contact_li contact_us">

                    <Box pt={1}>
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar className="wbg">
                              <LocationOnIcon className="col2" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Address" secondary={
                            <a
                              href="https://www.google.com/maps?q=Aryavarta,Mahale Farm, Cidco, Nashik,  Maharshtra(IND)-422009"
                              target="_blank"
                              rel="noopener noreferrer"
                              className='wh hoverwh'
                            >
                              303/306 Aryavarta,Mahale Farm, Cidco, Nashik,  Maharshtra(IND)-422009
                            </a>
                          } />
                        </ListItem>



                        <ListItem>
                          <ListItemAvatar>
                            <Avatar className="wbg">
                              <CallIcon className="col2" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Contact Number" secondary={
                            <>
                              <a href="tel:+91-98905 61939" className='wh hoverwh'>+91-98905 61939</a>
                              <br />
                              <a href="tel:+91-8177800722" className='wh hoverwh'>+91-8177800722</a>
                            </>
                          } />
                        </ListItem>


                        <ListItem>
                          <ListItemAvatar>
                            <Avatar className="wbg">
                              <MailOutlineIcon className="col2" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Mail Address" secondary={<>
                            <a href='mailto:supremetechnocare@gmail.com' className='wh hoverwh'>supremetechnocare@gmail.com</a>
                          </>} />
                        </ListItem>

                      </List>
                    </Box>


                  </Box>
                </Grid>


                <Grid item lg={6} md={6} sm={12} xs={12} className='form-sec'>
                  <Box p={4}>
                    <form onSubmit={handleSubmit}>

                      <Grid container spacing={2} alignItems="flex-start" justifyContent='center'>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                          <Box className='filled_txtfld_2' mt={1}>
                            <TextField
                              name="name"
                              label="Name"
                              className='filleddp'
                              variant="filled"
                              value={formData.name}
                              onChange={handleChange}
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>



                        <Grid item lg={6} md={12} sm={12} xs={12}>
                          <Box className='filled_txtfld_2' mt={1}>
                            <TextField
                              name="email"
                              type="email"
                              label="Email"
                              className='filleddp'
                              variant="filled"
                              value={formData.email}
                              onChange={handleChange}
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>



                        <Grid item lg={6} md={12} sm={12} xs={12}>
                          <Box className='filled_txtfld_2' mt={1}>
                            <TextField
                              name="mobile"
                              label="Mobile Number"
                              className='filleddp'
                              variant="filled"
                              value={formData.mobile}
                              onChange={handleChange}
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>


                        <Grid item lg={12} md={12} sm={12} xs={12}>
                          <Box className='filled_txtfld_2 txtarea' mt={1}>
                            <TextField
                              name="message"
                              label="Message"
                              className='filleddp'
                              variant="filled"
                              multiline
                              rows={2}
                              value={formData.message}
                              onChange={handleChange}
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>


                        <Grid item lg={12} md={12} sm={12} xs={12}>
                          <Box className="al_center">
                            <Button type="submit" variant="contained" className="rbtn_sm font1">
                              Submit
                            </Button>
                          </Box>

                        </Grid>


                      </Grid>


                    </form>
                  </Box>
                </Grid>


              </Grid>
            </Box>





          </Container>
        </Box>

      </Box>





      <Box>
        <ExploreUs prevBg="secbg2" />
      </Box>



      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        message={snackbarMessage} // Remove curly braces
      />



    </>
  );
};

export default ContactUs;
