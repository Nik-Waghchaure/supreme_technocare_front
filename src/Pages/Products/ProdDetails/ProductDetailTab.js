import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, Grid, AppBar, Container } from '@mui/material';
import TechSpecsTable from './TechSpecsTable';





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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




export const ProductDetailTab = () => {


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <>

      <Box>


        <Box className='sti' component="section">
          <Grid container spacing={0} alignItems="center">
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className='primarytabbed'>
                <Container maxWidth='lg'>
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
                      <Tab label="Features" {...a11yProps(0)} />
                      <Tab label="Technical Specifications "{...a11yProps(1)} />
                    </Tabs>
                  </AppBar>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Box>



        <Box className="">
          <Container maxWidth='lg'>

            <TabPanel value={value} index={0}>
              <Box>
                <Typography variant='h6' className='content fw'>
                  <ul>
                    <li> 8” color TFT screen, optional touchscreen </li>
                    <li> User friendly design interface </li>
                    <li> Tidal volume 5~1500 ml </li>
                    <li> Up to 6 flow tubes for 3 gases </li>
                    <li> PPSU/Metallic material of breathing circuit </li>
                    <li>By-pass Tech for soda lime canister </li>
                    <li>All ventilation modes to satisfy neonate, pediatric and adult patients </li>
                    <li>Integrated breathing circuit with built-in heater </li>
                    <li>Highly visible ACGO </li>
                  </ul>
                </Typography>
              </Box>
            </TabPanel>


            <TabPanel value={value} index={1}>
              <Box mt={2}>
<TechSpecsTable/>
              </Box>
            </TabPanel>



          </Container>
        </Box>


      </Box>


    </>
  )
}



