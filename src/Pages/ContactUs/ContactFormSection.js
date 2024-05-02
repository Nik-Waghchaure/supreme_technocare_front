import React,{useState} from 'react';
import { Box, Grid, TextField, Button,Snackbar } from '@mui/material';
import { Link } from "react-router-dom";
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



const ContactFormSection = () => {


  const [openSnackbar, setOpenSnackbar] = useState(false);
const [snackbarMessage, setSnackbarMessage] = useState('');

const onSubmit = async (values) => {

  const formData = {
    name: values.fullName,
    email: values.emailAddress,
    mobile: values.mobileNumber,
    message: values.message
  }
  try {
    // 'http://localhost:8888/api/v1/contact-us-form/'
    // const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/contact-us-form/`, {
      const response = await fetch(`${apiUrl}/api/v1/contact-us-form/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSnackbarMessage('Contact information saved successfully');
      setOpenSnackbar(true);
      formik.resetForm();
    } else {
      const data = await response.json();
      setSnackbarMessage(data.detail);
      setOpenSnackbar(true);
    }
  } catch (error) {
    setSnackbarMessage('An error occurred while saving contact information');
    setOpenSnackbar(true);
  }
};

const handleSnackbarClose = () => {
  setOpenSnackbar(false);
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

      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        message="send"
      />
    </>
  );
};

export default ContactFormSection;
