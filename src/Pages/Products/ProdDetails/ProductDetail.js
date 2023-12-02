import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  AppBar,
  Modal,
  IconButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import { Box, Grid, AppBar, Container } from '@mui/material';
import TechSpecsTable from "./TechSpecsTable";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import DynamicBreadcrumbs from "../../../Component/DynamicBreadcrumbs";
import Particles_Bg_Design from "../../../Component/Particles_Bg_Design";
import AddIcon from "@mui/icons-material/Add";
import CallIcon from "@mui/icons-material/Call";
import axios from "axios"; // Import axios
import ProdImg from "../../../Assets/Images/products/prod_1.jpg";

import Dialog from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useCart } from "../../../Component/Header/CartContext";
import { toast } from "react-toastify";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ProductDetail() {
  const location = useLocation();
  const subproductName = location.pathname.split("/")[3];
  const productName = location.pathname.split("/")[2];
  const prodImgParam = new URLSearchParams(location.search).get("prodImg"); // Get the prodImg parameter from the query string

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const apiUrl = process.env.REACT_APP_API_URL;

  const [productDetail, setProductDetail] = React.useState([]);
  const [productUrl, setProductUrl] = React.useState("");
  const fetchProductDetails = () => {
    // process.env.REACT_APP_API_URL + `api/v1/sub_category_det/${subproductName}`
    axios
      .post(apiUrl + `/api/v1/sub_category_det/${subproductName}`)
      .then((response) => {
        if (response.data.sub_category_json) {
          setProductDetail(response.data.sub_category_json);
        }

        let img_path = apiUrl + response.data.sub_category_img;
        setProductUrl(img_path);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const { state, dispatch } = useCart();
  const handleAddToEnquiry = () => {
    // check if product is already in cart
    if (state.cart.includes(subproductName)) {
      // If it is, show a toast message
      toast.error("Product already in Inquiry");
    } else {
      // If it is not, add it to the array
      dispatch({ type: "ADD_TO_CART", payload: subproductName });

      // Show a toast message
      toast.success("Product added to Inquiry");
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setPreviewImage(imageSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Box className="subpage_section" component="section">
        <Box>
          <Box className="subpagehead_sm">
            <Box>
              {" "}
              <Particles_Bg_Design />{" "}
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
            <Box mt={2}>
              <Grid
                container
                spacing={2}
                alignItems="flex-start"
                justifyContent="center"
              >
                <Grid item lg={10} md={10} sm={9} xs={12}>
                  <Box className="prod-detail-data-sec al_center">
                    <Box className="al_left">
                      <Typography variant="h5" className="col2 fw6">
                        {" "}
                        Product{" "}
                      </Typography>
                      <Typography variant="h3" className="col1 fw6 font1">
                        {" "}
                        {subproductName.replace(/%20/g, " ")}{" "}
                      </Typography>
                    </Box>

                    <Box className="al_left" mt={"4px"}>
                      <Button
                        variant="contained"
                        className="rbtn_sm font1"
                        endIcon={<AddIcon />}
                        onClick={handleAddToEnquiry}
                      >
                        Add to Enquiry
                       
                      </Button>

                      <a href="tel:+91 98905 61939">
                        <Button
                          variant="contained"
                          className="rbtn_add font1"
                          startIcon={<CallIcon />}
                        >
                          Call for Price
                        </Button>
                      </a>
                    </Box>
                  </Box>
                </Grid>

                <Grid item lg={2} md={2} sm={3} xs={12}>
                  <Box className="prod-detail-img-sec al_center">
                    <Box>
                     
                      <img
                        src={productUrl || ProdImg} // Use the parameter if available, or fallback to ProdImg
                        className="prod-decs-img"
                        alt="product name"
                        onClick={() => handleImageClick(productUrl || ProdImg)}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

          </Container>

          <Box mt={3}>
            <Box className="sti" component="section">
              <Grid container spacing={0} alignItems="center">
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Box className="primarytabbed">
                    <Container maxWidth="lg">
                      <AppBar position="static" className="tabbedbar">
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          indicatorColor="none"
                          textColor="primary"
                          variant="scrollable"
                          scrollButtons="auto"
                          aria-label="scrollable auto tabs example"
                        >
                          {/* productDetail in Tab */}
                          {/* productDetail is object contains key and value My tab is key of objects */}
                          {Object.entries(productDetail).map(
                            ([key, value], index) => (
                              <Tab label={key} {...a11yProps(index)} />
                            )
                          )}
                        </Tabs>
                      </AppBar>
                    </Container>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box className="">
              <Container maxWidth="lg">
                {productDetail !== undefined &&
                Object.keys(productDetail).length > 0 ? (
                  Object.keys(productDetail).map((property, index) => (
                    <div key={index}>
                      {/* Check if productDetail[property] is an array before mapping */}
                      {Array.isArray(productDetail[property]) ? (
                        <TabPanel value={value} index={index}>
                          <Box>
                            <Typography variant="h6" className="content fw">
                              <ul>
                                {productDetail[property].map(
                                  (feature, subIndex) => (
                                    <li key={subIndex}>{feature}</li>
                                  )
                                )}
                              </ul>
                            </Typography>
                          </Box>
                        </TabPanel>
                      ) : (
                        Object.keys(productDetail[property]).map(
                          (key, subIndex) => (
                            <TabPanel value={value} index={index}>
                              <Box>
                                <Typography variant="h6" className="content fw">
                                  <ul>
                                    <li>
                                      {" "}
                                      {key}: {productDetail[property][key]}{" "}
                                    </li>
                                  </ul>
                                </Typography>
                              </Box>
                            </TabPanel>
                          )
                        )
                      )}
                    </div>
                  ))
                ) : (
                  <h1>NotFound</h1>
                )}
              </Container>
            </Box>
          </Box>
        </Box>
      </Box>

      <Dialog
        id="img-preview"
        onClose={handleCloseModal}
        open={isModalOpen}
        maxWidth="lg"
      >
        <MuiDialogTitle id="customized-dialog-title" onClose={handleCloseModal}>
          <Box className="al_right">
            <IconButton onClick={handleCloseModal}>
              <HighlightOffIcon className="col3" />
            </IconButton>
          </Box>
        </MuiDialogTitle>
        <MuiDialogContent>
          <Box className="modal-content">
            <img src={previewImage} alt="Preview" className="full-image" />
          </Box>
        </MuiDialogContent>
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={500}
        onClose={handleClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Product added to enquiry
        </Alert>
      </Snackbar>
    </>
  );
}
