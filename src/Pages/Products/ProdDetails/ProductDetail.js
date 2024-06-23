import {
  Container,
  Grid,
  Typography,
  Box,
  Button, 
  IconButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";

import DynamicBreadcrumbs from "../../../Component/DynamicBreadcrumbs";
import ParticlesBgDesign from "../../../Component/Particles_Bg_Design";
import AddIcon from "@mui/icons-material/Add";
import CallIcon from "@mui/icons-material/Call";
import axios from "axios"; // Import axios
import ProdImg from "../../../Assets/Images/products/prod_1.jpg";
import { useLocation } from 'react-router-dom';
import Dialog from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert"; 

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ProductDetail() {
  const location = useLocation();
  // const productNamess = decodeURIComponent(location.search).replace('?product_name=', "");
  // const parmas = useSearchParams();
  const subproductName = decodeURIComponent(location.search).replace('?product_name=', "");

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const apiUrl = process.env.REACT_APP_API_URL;

  const [productDetail, setProductDetail] = React.useState([]);
  const [productUrl, setProductUrl] = React.useState("");
  const [subcateoryName, setSubCategoryName] = React.useState("");

  const fetchProductDetails = () => {
    const data = {
      "product_name": subproductName
    }
    axios
      .post(apiUrl + `/api/v1/sub_category_det/`, data)
      .then((response) => {
        if (response.data.sub_category_json) {
          setProductDetail(response.data.sub_category_json);
        }
        // console.warn(response.data);

        let subCategoryName = response.data.sub_category_name;
        setSubCategoryName(subCategoryName);

        let img_path = response.data.sub_category_img;
        setProductUrl(img_path);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
      });
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

  const handleAddToEnquiry = () => {
    const enquiryData = {
      subCategoryName: subcateoryName,
      imageUrl: productUrl,
    };

    let enquiryList = JSON.parse(localStorage.getItem("enquiryList")) || [];
    enquiryList.push(enquiryData);
    localStorage.setItem("enquiryList", JSON.stringify(enquiryList));
    setOpenSnackbar(true);
  };

  return (
    <>
      <Box className="subpage_section" component="section">
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
                        {/* {subproductName.replace(/%20/g, " ")}{" "} */}
                        {subcateoryName}
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
            <Box className="sti" component="section" />

            <Box className="">
              <Container maxWidth="lg">
                {productDetail !== undefined &&
                  Object.keys(productDetail).length > 0 ? (
                  Object.entries(productDetail).map(([key, value], index) => (
                    <Box
                      key={key}  // Added key prop here
                      className="prod-detail-tab-content"
                      dangerouslySetInnerHTML={{ __html: value }}
                    />
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
