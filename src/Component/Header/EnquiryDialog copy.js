import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Button,
  Typography,
  Grid,
  IconButton,
  Divider,
  Tooltip,
} from "@mui/material";

import Dialog from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ContactFormSection from "../../Pages/ContactUs/ContactFormSection";
import HeadingBottom from "../HeadingBottom";

import AddIcon from "@mui/icons-material/Add";
// import MT from "../../Assets/Images/empty-cart.png"

import Prod from "../../Assets/Images/products/prod_1.jpg";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { CartProvider, useCart } from "./CartContext";
import { toast } from "react-toastify";

export default function EnquiryDialog() {
  const [enquiryList, setEnquiryList] = useState(
    localStorage.getItem("productNames")
      ? localStorage.getItem("productNames").split(",")
      : []
  );

  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const [enquiryDetail, setEnquiryDetail] = useState([]);

  const fetchProductDetails = (enquiryLists) => {
    if (enquiryLists) {
      // `http://localhost:8888/api/v1/sub_category/${enquiryLists}`
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/v1/sub_category/${enquiryLists}`
        )
        .then((response) => {
          setEnquiryDetail(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setEnquiryDetail([]);
        });
    } else {
      setEnquiryDetail([]);
    }
  };

  const { state, dispatch } = useCart();

  useEffect(() => {
    setEnquiryList(state.cart);
    // fetch data from CartContext
    fetchProductDetails(state.cart);
  }, [open1]);

  const handledeletecart = (index) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: index } });
    let newcart = [];
    for (var i = 0; i < state.cart.length; i++) {
      if (i !== index) {
        newcart.push(state.cart[i]);
      }
    }
    fetchProductDetails(newcart);
    toast.success("Removed from Enquiry List");
  };

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
                      {enquiryDetail &&
                        enquiryDetail.map((product, index) => (
                          <ListItem className="Enquiry-li" key={index}>
                            <ListItemAvatar>
                              <Box
                                className="avatar_prod"
                                style={{
                                  backgroundImage: `url(https://ari-cn.com${product.sub_category_img})`,
                                }}
                              ></Box>
                            </ListItemAvatar>
                            <ListItemText
                              primary={product.id}
                              secondary={product.sub_category_name}
                            />

                            <Tooltip title="Remove Product">
                              <IconButton className="del-prod-ico">
                                <DeleteOutlinedIcon
                                  onClick={() => handledeletecart(index)}
                                />
                              </IconButton>
                            </Tooltip>
                          </ListItem>
                        ))}
                    </List>
                  </Box>

                  {/* <Box className="al_right">
                    <Button
                      variant="contained"
                      className="rbtn_add font1"
                      endIcon={<AddIcon />}
                    >
                      Add Items
                    </Button>
                  </Box> */}
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
                    <ContactFormSection />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </MuiDialogContent>
      </Dialog>
    </>
  );
}
