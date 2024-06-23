import React from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
function DynamicBreadcrumbs() {
  const location = useLocation();

  // Split the pathname into segments
  const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');

  return (

    <Breadcrumbs maxItems={3} aria-label="breadcrumb">

      <Link to="/">
        Home
      </Link>
      {pathSegments.map((segment, index) => {
        const isLastSegment = index === pathSegments.length - 1;
        const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
        return (
          <Link key={segment} color={isLastSegment ? 'textPrimary' : 'inherit'} to={url}>
            <Typography variant='h5' className='breadcrumb_link'>

              {segment.replace(/%20/g, ' ')}
            </Typography>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

export default DynamicBreadcrumbs;
