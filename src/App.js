import './Root.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import AdminLayout from './Component/Layout/AdminLayout';
import NotFound from './Pages/NotFound';
import ProductLayout from './Component/Layout/ProductLayout';
import SubProductsList from './Pages/Products/SubProductsList';
import Solutions from './Pages/Solutions';
import AboutUs from './Pages/AboutUs';
import ProductDetail from './Pages/Products/ProdDetails/ProductDetail';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';



function App() {


  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 500);
  // }, []);


  const theme = createTheme({
    typography: {
      fontFamily: "'Open Sans', sans-serif",
    },
  });


  return (
    <>
      <ThemeProvider theme={theme}>


        <>
          {/* {isLoading ? (
            <>
              <Backdrop
                sx={{ color: '#000', backgroundColor: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </>
          ) : ( */}



          <Routes>

            <Route element={<AdminLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/contact-us" element={<ContactUs />} />

              <Route path="*" element={<NotFound />} />
            </Route>



            <Route element={<ProductLayout />}>
              <Route path="/products/:category" element={<SubProductsList />} />
              <Route path="/products/:category/:productName" element={<ProductDetail />} />
            </Route>
            {/* <Route path="/products/anaesthesia-machine" element={<SubProductsList />} />
                <Route path="/products/anaesthesia-machine/operating-theatre" element={<SubProductsList />} />
                <Route path="/products/ventilator" element={<SubProductsList />} />
                <Route path="/products/defibrillator" element={<SubProductsList />} /> */}


            <Route path="/products" element={<Solutions />} />

            {/* </Route> */}


          </Routes>



          {/* )} */}
        </>
        <ToastContainer />
      </ThemeProvider>

    </>
  );
}

export default App;