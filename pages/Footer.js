import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../styles/Home.module.css';

const Footer = () => {
    return (
        <Box>
            <footer className={styles.footer}>
                <Typography variant="body1">© Iftakher Hossen 2021</Typography>
            </footer>
        </Box>
    );
};

export default Footer;