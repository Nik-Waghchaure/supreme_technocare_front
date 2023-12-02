import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { ProductDrawerContent } from './ProductDrawerContent';

import { Route, Routes } from 'react-router-dom';




const drawerWidth = 320;

export default function Products() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

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



            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                


            </Box>
        </Box>
    );
}
