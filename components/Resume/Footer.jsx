import { Box, Button } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center'}}>
            <Button variant="outlined" href="/" sx={{color: 'white', borderColor: 'white'}}>View Portfolio</Button>
        </Box>
    );
};

export default Footer;