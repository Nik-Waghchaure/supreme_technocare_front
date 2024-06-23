import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  ListItemButton,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Link, useLocation } from 'react-router-dom';

export const ProductDrawerContent = () => {
  const [expanded, setExpanded] = useState('panel0');
  const [categoryData, setCategoryData] = useState({});
  const location = useLocation();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/category/`)
      .then(response => {
        setCategoryData(response.data);
      })
      .catch(error => {
        // console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Box style={{ padding: '16px' }} pt={1}>
        <Box id='main_accordian'>
          {Object.entries(categoryData).map(([category, products], index) => (
            <React.Fragment key={category}>
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                  className='main_accordian_head'
                >
                  <Box>
                    <Typography variant='h6' className='fw5'>
                      {category}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails className='main_acc_details'>
                  <Box p={1} pt={0}>
                    {products.map((product, productIndex) => (
                      <Box key={product.id}>
                        <ListItem disablePadding>
                          <ListItemButton
                            component={Link}
                            to={`/products/${encodeURIComponent(product.category_name)}`}
                            className={location.pathname.includes(`/products/${encodeURIComponent(product.category_name)}`) ? 'active' : ''}
                          >
                            <ListItemText primary={product.category_name} />
                          </ListItemButton>
                        </ListItem>
                      </Box>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Box m={1}></Box>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </>
  );
};
