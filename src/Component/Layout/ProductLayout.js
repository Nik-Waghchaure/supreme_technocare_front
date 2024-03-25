import React from "react";
import { Outlet } from "react-router-dom";
import { Box, IconButton, Toolbar, } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackToTop from "../Scroll/Back_to_top";
import ScrollToTop from "../Scroll/Scroll_to_top";
import Drawer from '@mui/material/Drawer';

import FilterListIcon from '@mui/icons-material/FilterList';

import { ProductDrawerContent } from "../../Pages/Products/ProductDrawerContent";
import MobileProdFilter from "./MobileProdFilter";
import BottomNav from "../Footer/BottomNav";

const drawerWidth = 320;


const ProductLayout = () => {

    return (
        <>
            <Header />
            <BackToTop />
            <ScrollToTop />
            <>
                <Box sx={{ display: 'flex' }}>
                    <Drawer
                        variant="permanent"
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                        }}
                    >

                        <Box sx={{ overflow: 'auto' }}>
                            <ProductDrawerContent />
                        </Box>

                    </Drawer>



                    <Box component="main" sx={{ flexGrow: 1 }}>

                      <MobileProdFilter/>


                        <Outlet />


                    </Box>
                </Box>
            </>

            {/* <Footer /> */}

            <BottomNav/>

        </>
    );
};

export default ProductLayout;
