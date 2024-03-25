import React, { useState } from 'react'
import ParticlesBgDesign from '../../Component/Particles_Bg_Design'
import { Box, Container, Grid, Breadcrumbs, Typography, TextField, Button, Snackbar } from '@mui/material';
import { Link } from "react-router-dom";
import DynamicBreadcrumbs from '../../Component/DynamicBreadcrumbs';
import ExploreUs from '../../Component/ExploreUs';
import HeadingBottom from '../../Component/HeadingBottom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import ContactFormSection from './ContactFormSection';
import { useFormik } from 'formik';
import * as Yup from 'yup';





const validationSchema = Yup.object({
  fullName: Yup.string()
    .required('Full Name is required')
    .max(50, 'Full Name must be at most 50 characters'),
  emailAddress: Yup.string()
    .required('Email Address is required')
    .email('Invalid email address')
    .max(100, 'Email Address must be at most 100 characters'),
  mobileNumber: Yup.string()
    .required('Mobile Number is required')
    .matches(/^[0-9]+$/, 'Invalid mobile number')
    .max(15, 'Mobile Number must be at most 15 characters'),
  message: Yup.string()
    .max(500, 'Message must be at most 500 characters'),
});



const ContactUs = () => {

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };




  const onSubmit = async (values) => {
    const formData = {
      name: values.fullName,
      email: values.emailAddress, // Include the email field here
      message: values.message
    };
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/contact-us-form/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json(); // Parse response JSON
  
      if (response.ok) {
        setSnackbarMessage(data.message); // Assuming your API returns a 'message' key in the response
        setOpenSnackbar(true);
        formik.resetForm();
      } else {
        // Assuming your API returns a 'detail' key in case of errors
        const errorMessages = data.detail.map(error => error.msg).join(", ");
        setSnackbarMessage(errorMessages);
        setOpenSnackbar(true);
      }
    } catch (error) {
      setSnackbarMessage('An error occurred while saving contact information');
      setOpenSnackbar(true);
    }
  };
  


  const formik = useFormik({
    initialValues: {
      fullName: '',
      emailAddress: '',
      mobileNumber: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const handleBlur = (field) => (event) => {
    formik.handleBlur(event);
    formik.setFieldTouched(field, true);
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


                    {/* <Grid container spacing={2} alignItems="flex-start" justifyContent='center'>
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Box className='filled_txtfld_2' mt={1}>
                          <TextField
                            id="filled-basic"
                            className='filleddp'
                            variant="filled"
                            label="Full Name"
                            fullWidth
                          />
                        </Box>
                      </Grid>

                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box className='filled_txtfld_2' mt={2}>
                          <TextField
                            id="filled-basic"
                            className='filleddp'
                            variant="filled"
                            label="Email Address"
                            fullWidth
                          />
                        </Box>
                      </Grid>

                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box className='filled_txtfld_2' mt={2}>
                          <TextField
                            id="filled-basic"
                            className='filleddp'
                            variant="filled"
                            label="Mobile Number"
                            fullWidth
                          />
                        </Box>
                      </Grid>


                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Box className='filled_txtfld_2 txtarea' mt={2}>
                          <TextField
                            id="filled-basic"
                            className='filleddp'
                            variant="filled"
                            label="Message"
                            multiline
                            rows={2}
                            fullWidth
                          />
                        </Box>
                      </Grid>


                      <Grid item lg={12} md={12} sm={12} xs={12}>
                         <Box className="al_center">
                         <Link to="#">
                      <Button variant="contained" className='rbtn_sm font1'>
                        Submit
                      </Button>
                    </Link>
                         </Box>
                      </Grid>


                    </Grid> */}



                    {/* <ContactFormSection /> */}
                    <form onSubmit={formik.handleSubmit}>
                      <Grid container spacing={2} alignItems="flex-start" justifyContent='center'>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                          <Box className='filled_txtfld_2' mt={1}>
                            <TextField
                              id="fullName"
                              name="fullName"
                              className='filleddp'
                              variant="filled"
                              label="Full Name"
                              fullWidth
                              value={formik.values.fullName}
                              onChange={formik.handleChange}
                              onBlur={handleBlur('fullName')}
                              error={formik.touched.fullName && formik.errors.fullName}
                              helperText={formik.touched.fullName && formik.errors.fullName}
                            />
                          </Box>
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Box className='filled_txtfld_2' mt={2}>
                            <TextField
                              id="emailAddress"
                              name="emailAddress"
                              className='filleddp'
                              variant="filled"
                              label="Email Address"
                              fullWidth
                              value={formik.values.emailAddress}
                              onChange={formik.handleChange}
                              onBlur={handleBlur('emailAddress')}
                              error={formik.touched.emailAddress && formik.errors.emailAddress}
                              helperText={formik.touched.emailAddress && formik.errors.emailAddress}
                            />
                          </Box>
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Box className='filled_txtfld_2' mt={2}>
                            <TextField
                              id="mobileNumber"
                              name="mobileNumber"
                              className='filleddp'
                              variant="filled"
                              label="Mobile Number"
                              fullWidth
                              value={formik.values.mobileNumber}
                              onChange={formik.handleChange}
                              onBlur={handleBlur('mobileNumber')}
                              error={formik.touched.mobileNumber && formik.errors.mobileNumber}
                              helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
                            />
                          </Box>
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12}>
                          <Box className='filled_txtfld_2 txtarea' mt={2}>
                            <TextField
                              id="message"
                              name="message"
                              className='filleddp'
                              variant="filled"
                              label="Message"
                              multiline
                              rows={2}
                              fullWidth
                              value={formik.values.message}
                              onChange={formik.handleChange}
                              onBlur={handleBlur('message')}
                              error={formik.touched.message && formik.errors.message}
                              helperText={formik.touched.message && formik.errors.message}
                            />
                          </Box>
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12}>
                          <Box className="al_center">
                            <Button type="submit" variant="contained" className='rbtn_sm font1'>
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
  )
}

export default ContactUs