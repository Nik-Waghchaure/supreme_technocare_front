import React from "react";
import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { Box, Divider, IconButton, Toolbar } from "@mui/material";

import Drawer from '@mui/material/Drawer';

import { Link as RouterLink, useLocation } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';
import { ProductDrawerContent } from "../../Pages/Products/ProductDrawerContent";

import logo from "../../Assets/Images/main_logo.png"


const MobileProdFilter = () => {



  // Drawer Started
  const [state, setState] = React.useState({});
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'left' && (event.key === 'left')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  // Drawer Ended



  const location = useLocation();
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    // Extract the path segment to determine the active page
    const pathSegment = location.pathname.split('/')[1];
    setActivePage(pathSegment || 'home'); // Set a default value, e.g., 'home'
  }, [location.pathname]);




  return (
    <>

      {/* <Box className="prod-filter-drawer">
                <IconButton>
                    <FilterListIcon className="wh" />
                </IconButton>
            </Box> */}





      <Box className="prod-filter-drawer">
        {['left'].map((anchor) => (
          <>
            <IconButton onClick={toggleDrawer(anchor, true)}>
              <FilterListIcon fontSize="small" className="wh" />
            </IconButton>
            <Drawer
              className='drawer'
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <Box className='mobilemenuview' sx={{ width: 280 }} role="presentation">

                <Box className="al_center" mb={'4px'}>
                  <img src={logo} className="logo" />
                </Box>

                <Divider />

                {/* <Toolbar/> */}


                <ProductDrawerContent />

                <Box>
                </Box>
              </Box>
            </Drawer>
          </>
        ))}
      </Box>




    </>
  )
}

export default MobileProdFilter