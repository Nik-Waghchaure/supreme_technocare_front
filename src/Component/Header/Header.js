import * as React from 'react';
import { useState, useEffect } from 'react';
import "./Header.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";
// import DPA from "../asset/images/dpa_logo.png"
import { Link } from 'react-router-dom';
import { Drawer, Divider } from '@mui/material';


// Acordian Started
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Acordian Ended
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

import { Link as RouterLink, useLocation } from 'react-router-dom';
import EnquiryDialog from './EnquiryDialog';


import LOGO from "../../Assets/Images/main_logo.png"


export default function Header() {


  // change styling of Active page on click
  // const [activePage, setActivePage] = useState('');
  // change styling of Active page on click


  // Drawer Started
  const [state, setState] = React.useState({});
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'right' && (event.key === 'right')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  // Drawer Ended



  // Accordian Started

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Accordian Ended


  const location = useLocation();
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    // Extract the path segment to determine the active page
    const pathSegment = location.pathname.split('/')[1];
    setActivePage(pathSegment || 'home'); // Set a default value, e.g., 'home'
  }, [location.pathname]);



  return (
    <>


      <Box id="sticky-appbar" sx={{ flexGrow: 1 }}>
        <AppBar id='Appbar' position='fixed'>
          <Toolbar className='Appbar_height'>

            <Box component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}>
                {/* <Typography variant='h2' className='col1 fw6 font1'> LOGO </Typography> */}
                <img src={LOGO} className="logo" />
              </Link>
            </Box>

            <Box className='desktopviewmenu'>





              <RouterLink to="/" className={activePage === 'home' ? 'active' : ''}>
                <Button className="menus" disableRipple>Home</Button>
              </RouterLink>

              <RouterLink to="/about-us" className={activePage === 'about-us' ? 'active' : ''}>
                <Button className="menus" disableRipple>About Us</Button>
              </RouterLink>

              <RouterLink to="/products/Anaesthesia Machine" className={activePage === 'products' ? 'active' : ''}>
                <Button className="menus" disableRipple>Products</Button>
              </RouterLink>

              <RouterLink to="/solutions" className={activePage === 'solutions' ? 'active' : ''}>
                <Button className="menus" disableRipple>Solutions</Button>
              </RouterLink>


              <RouterLink to="/contact-us" className={activePage === 'contact-us' ? 'active' : ''}>
                <Button className="menus" disableRipple>Contact Us</Button>
              </RouterLink>

              {/* <RouterLink to="#" className={activePage === 'Enquiry' ? 'activebtn' : ''}>
                <Button className="menus inq_btn" startIcon={<CallOutlinedIcon/>}>Enquiry</Button>
              </RouterLink> */}








              {/* <Link to="/about-us" className={activePage === 'about-us' ? 'active' : ''} onClick={() => setActivePage('about-us')}>
                <Button className="menus"  disableRipple>About Us</Button>
              </Link>   

              <Link to="/products" className={activePage === 'products' ? 'active' : ''} onClick={() => setActivePage('products')}>
                <Button className="menus"  disableRipple>Products</Button>
              </Link>


              <Link to="/solutions" className={activePage === 'solutions' ? 'active' : ''} onClick={() => setActivePage('solutions')}>
                <Button className="menus"  disableRipple>Solutions </Button>
              </Link> 

              <Link to="/contact-us" className={activePage === 'contact-us' ? 'active' : ''} onClick={() => setActivePage('contact-us')}>
                <Button className="menus"  disableRipple>Contact Us</Button>
              </Link> */}


            </Box>

            <RouterLink to="#" className={activePage === 'Enquiry' ? 'activebtn' : ''}>
              <EnquiryDialog />
            </RouterLink>




            <Box className='mobileviewmenu'>
              {['right'].map((anchor) => (
                <React.Fragment  >
                  {/* <IconButton aria-label="delete" onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon fontSize="small" className='col1' />
                  </IconButton> */}
                  <Drawer
                    className='drawer'
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    <Box className='mobilemenuview' sx={{ width: 280 }} role="presentation">


                      <Box mb={1} mt={1} mr={2} className='al_right'>
                        <IconButton className='Close_btn' variant="contained" onClick={toggleDrawer(anchor, false)}>
                          <CloseIcon fontSize='small' color='primary' />
                        </IconButton>
                      </Box>

                      <Divider />

                      {/* Drawer Content Started */}

                      <Box>


                        <Accordion>
                          <AccordionSummary >
                            <Typography className='menus' onClick={toggleDrawer(anchor, false)}>
                              MenuItem
                            </Typography>
                          </AccordionSummary>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary >
                            <Typography className='menus' onClick={toggleDrawer(anchor, false)}>
                              MenuItem
                            </Typography>
                          </AccordionSummary>
                        </Accordion>


                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography className='menus'>
                              Accordian 1
                            </Typography>

                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography gutterBottom className='menus' onClick={toggleDrawer(anchor, false)} > Item 1</Typography>
                            <Typography gutterBottom className='menus' onClick={toggleDrawer(anchor, false)} > Item 1</Typography>
                            <Typography gutterBottom className='menus' onClick={toggleDrawer(anchor, false)} > Item 1</Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary >
                            <Typography className='menus' onClick={toggleDrawer(anchor, false)} >
                              MenuItem
                            </Typography>
                          </AccordionSummary>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary >
                            <Typography className='menus' onClick={toggleDrawer(anchor, false)} >
                              MenuItem
                            </Typography>
                          </AccordionSummary>
                        </Accordion>


                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography className='menus'>Accordian 2</Typography>

                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography gutterBottom className='menus' onClick={toggleDrawer(anchor, false)}> Item 2</Typography>
                            <Typography gutterBottom className='menus' onClick={toggleDrawer(anchor, false)}> Item 2</Typography>
                            <Typography gutterBottom className='menus' onClick={toggleDrawer(anchor, false)}> Item 2</Typography>
                          </AccordionDetails>
                        </Accordion>



                      </Box>
                      {/* Drawer Content Started */}

                      <Box>
                      </Box>
                    </Box>
                  </Drawer>
                </React.Fragment>
              ))}
            </Box>



          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
