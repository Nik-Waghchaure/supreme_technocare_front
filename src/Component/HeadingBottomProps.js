import React from 'react'
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import { Box, } from '@mui/material';


const HeadingBottomProps = (props) => {
    return (
        <>


            <Box className={props.bottom_allign}>
                <Box className='line bg3'></Box>
                <MonitorHeartOutlinedIcon fontSize='small' className='hdbtmico' />
                <Box className='line bg3'></Box>

            </Box>

        </>
    )
}

export default HeadingBottomProps