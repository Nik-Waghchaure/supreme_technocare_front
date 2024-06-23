import './Root.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import AdminLayout from './Component/Layout/AdminLayout';
import NotFound from './Pages/NotFound';
import ProductLayout from './Component/Layout/ProductLayout';
import SubProductsList from './Pages/Products/SubProductsList';
import Solutions from './Pages/Solutions';
import AboutUs from './Pages/AboutUs';
import ProductDetail from './Pages/Products/ProdDetails/ProductDetail';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';



function App() {

  const theme = createTheme({
    typography: {
      fontFamily: "'Open Sans', sans-serif",
    },
  });


  return (
    <>
      <ThemeProvider theme={theme}>


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
            <Route path="/productsdetails/:category/" element={<ProductDetail />} />
          </Route>
        </Routes>


        <ToastContainer />
      </ThemeProvider>

    </>
  );
}

export default App;