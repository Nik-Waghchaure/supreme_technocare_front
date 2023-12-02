import * as React from 'react';
import PropTypes from 'prop-types'; 
import Toolbar from '@mui/material/Toolbar'; 
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box'; 
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 62, right: 10, zIndex: 9999 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function BackToTop(props) {
    return (
        <>

            <span id="back-to-top-anchor"> </span>

            <ScrollTop {...props}>
                <Fab size="small" className='bg2' aria-label="scroll back to top">
                    <KeyboardArrowUpIcon className='wh' />
                </Fab>
            </ScrollTop>
        </>
    );
}
