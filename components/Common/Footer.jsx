import { IconButton, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../../styles/Home.module.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ScrollToTop from "react-scroll-to-top";

const Footer = ({ languages }) => {
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10, mb: 2 }}>
                <Box className={styles.language}>
                    <ul>
                        {
                            languages.map(({ id, text, fluency, level }) => (
                                <Tooltip title={level} key={id}>
                                    <li>
                                        <p>{text}</p>
                                        <div style={{ width: fluency + "%" }} className={styles.fluency} />
                                    </li>
                                </Tooltip>
                            ))
                        }
                    </ul>
                </Box>
            </Box>

            <ScrollToTop smooth color="white" style={{ backgroundColor: '#252930', border: 0, width: 45,  height: 45, right: 100, bottom: 25, borderRadius: '50%' }} />

            <footer>
                <Box className={styles.footer}>
                    <Typography variant="body1">Iftakher Hossen © 2022, All rights reserved.</Typography>
                </Box>
            </footer>
        </Box >
    );
};

export default Footer;