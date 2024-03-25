import React from "react";
import { Button, IconButton, Box, Grid, Typography, Tooltip } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import ContactFormSection from "../../Pages/ContactUs/ContactFormSection";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";


export default function EnquiryDialog() {
  const { state, dispatch } = useCart();

  const handledeletecart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    toast.success("Removed from Enquiry List");
  };


  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };


  return (
    <>
      <Button className="menus inq_btn" startIcon={<CallOutlinedIcon />} onClick={handleClickOpen1}>
        Enquiry
      </Button>

      {/* <Dialog id="Enquiry_dialog" onClose={handleClose1} open={open1} maxWidth="lg">
        <MuiDialogTitle id="customized-dialog-title" onClose={handleClose1}>
          <Box className="al_right">
            <IconButton onClick={handleClose1}>
              <HighlightOffIcon className="col3" />
            </IconButton>
          </Box>
        </MuiDialogTitle>
        <MuiDialogContent>
          <Box className="al_center">
            <Grid container spacing={2} alignItems="baseline" justifyContent="center">
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
                      {state.cart.map((product, index) => (
                        <ListItem className="Enquiry-li" key={index}>
                          <ListItemAvatar>
                            <Box
                              className="avatar_prod"
                              style={{
                                backgroundImage: `url(${product.img})`,
                              }}
                            ></Box>
                          </ListItemAvatar>
                          <ListItemText primary={product.id} secondary={product.name} />

                          <Tooltip title="Remove Product">
                            <IconButton className="del-prod-ico">
                              <DeleteOutlinedIcon onClick={() => handledeletecart(product)} />
                            </IconButton>
                          </Tooltip>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </MuiDialogContent>
      </Dialog> */}

      
<Dialog
        id="Enquiry_dialog"
        onClose={handleClose1}
        open={open1}
        maxWidth="sm"
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
               {/* commented cause not working sp2
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
                      {state.cart.map((product, index) => (
                        <ListItem className="Enquiry-li" key={index}>
                          <ListItemAvatar>
                            <Box
                              className="avatar_prod"
                              style={{
                                backgroundImage: `url(${product.img})`,
                              }}
                            ></Box>
                          </ListItemAvatar>
                          <ListItemText primary={product.id} secondary={product.name} />

                          <Tooltip title="Remove Product">
                            <IconButton className="del-prod-ico">
                              <DeleteOutlinedIcon onClick={() => handledeletecart(product)} />
                            </IconButton>
                          </Tooltip>
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                
                </Box>
              </Grid>
            */}

              <Grid item lg={12} md={12} sm={12} xs={12}>
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
