import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  IconButton,
  Tooltip,
  Snackbar,
  TextField,
  Dialog,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
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

export default function EnquiryDialog() {
  const [open1, setOpen1] = useState(false);
  const [enquiryList, setEnquiryList] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("enquiryList")) || [];
    setEnquiryList(storedList);
  }, [open1]);

  const removeEnquiryItem = (index) => {
    const updatedList = enquiryList.filter((item, i) => i !== index);
    localStorage.setItem("enquiryList", JSON.stringify(updatedList));
    setEnquiryList(updatedList);
  }; 
  
  const onSubmit = async (values) => {
    // console.warn('Submitting form with values:', values); 
    const enquiryList = JSON.parse(localStorage.getItem("enquiryList")) || [];

    const formData = {
      name: values.fullName,
      email: values.emailAddress,
      mobile: values.mobileNumber,
      message: values.message,
      enquiries: enquiryList // Include the list of enquired items
    };
    // console.warn(formData);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/contact-us-form/`, {
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
        localStorage.removeItem("enquiryList"); // Clear the local storage
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

  // const handleBlur = (field) => (event) => {
  //   formik.handleBlur(event);
  //   formik.setFieldTouched(field, true);
  // };


  return (
    <>
      <Button
        className="menus inq_btn"
        startIcon={<CallOutlinedIcon />}
        onClick={handleClickOpen1}
      >
        Enquiry
      </Button>

      <Dialog
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
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box className="dia-left-sec">
                  <Box className="al_left" mb={2}>
                    <Typography variant="h3" className="col1 fw6">
                      {" "}
                      Enquiry List{" "}
                    </Typography>
                  </Box>

                  <Box className="inquiries-box">
                    <List>
                      {enquiryList.map((item, index) => (
                        <ListItem className="Enquiry-li" key={index}>
                          <ListItemAvatar>
                            <Box
                              className="avatar_prod"
                              style={{
                                backgroundImage: `url(${item.imageUrl})`,
                                backgroundSize: 'cover',
                              }}
                            ></Box>
                          </ListItemAvatar>
                          <ListItemText
                            primary={item.subCategoryName}
                          />
                          <Tooltip title="Remove Product">
                            <IconButton
                              className="del-prod-ico"
                              onClick={() => removeEnquiryItem(index)}
                            >
                              <DeleteOutlinedIcon />
                            </IconButton>
                          </Tooltip>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box className="dia-right-sec">
                  <Box className="al_left" mb={2}>
                    <Typography variant="h3" className="col1 fw6">
                      {" "}
                      Get In Touch{" "}
                    </Typography>
                  </Box>
                  <Box>
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
                              onBlur={formik.handleBlur}
                              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
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
                              onBlur={formik.handleBlur}
                              error={formik.touched.emailAddress && Boolean(formik.errors.emailAddress)}
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
                              onBlur={formik.handleBlur}
                              error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
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
                              onBlur={formik.handleBlur}
                              error={formik.touched.message && Boolean(formik.errors.message)}
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
                </Box>
              </Grid>
            </Grid>
          </Box>
        </MuiDialogContent>
      </Dialog>


      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />


    </>
  );
}
