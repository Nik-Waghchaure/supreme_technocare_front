import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PhoneIcon from '@mui/icons-material/Phone';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';


export default function BottomNav() {
    const location = useLocation(); // Get the current location
  
    // Map each route path to its corresponding icon
    const navLinks = [
      { path: '/', label: 'Home', icon: <HomeIcon /> },
      { path: '/about-us', label: 'About Us', icon: <HealthAndSafetyIcon /> },
      { path: '/products/anaesthesia-machine', label: 'Products', icon: <ProductionQuantityLimitsIcon /> },
      { path: '/contact-us', label: 'Contact', icon: <PhoneIcon /> },
    ];
  
    return (
      <BottomNavigation showLabels className='mobile-btm-nav'>
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.path}
            to={navLink.path}
            className={location.pathname === navLink.path ? 'active-bottom-nav' : ''}
          >
            <BottomNavigationAction label={navLink.label} icon={navLink.icon} />
          </NavLink>
        ))}
      </BottomNavigation>
    );
  }
  