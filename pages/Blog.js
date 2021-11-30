import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../styles/Home.module.css';

const Blog = () => {
    return (
        <Box className={styles.projects} id='projects'>
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className={styles.circle}></span> My Blogs <span className={styles.circle}></span>
            </Typography>
            <Box className={styles.divider}></Box>

            <Typography sx={{ pt: 6, fontSize: 28, color: '#358DC8'}}>Coming Soon!!!</Typography>
        </Box>
    );
};

export default Blog;