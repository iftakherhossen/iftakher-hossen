import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../styles/Home.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <Box>
            <Box>
                <Box className={styles.smHolder}>
                    <Box sx={{ mx: 1 }}>
                        <a href="https://www.facebook.com/hosseniftakher" rel="noreferrer" target="_blank">
                            <FacebookIcon />
                        </a>
                    </Box>
                    <Box sx={{ mx: 1 }}>
                        <a href="https://www.instagram.com/hossen_iftakher/" rel="noreferrer" target="_blank">
                            <InstagramIcon />
                        </a>
                    </Box>
                    <Box sx={{ mx: 1 }}>
                        <a href="https://www.linkedin.com/in/iftakher-hossen/" rel="noreferrer" target="_blank">
                            <LinkedInIcon />
                        </a>
                    </Box>
                    <Box sx={{ mx: 1 }}>
                        <a href="https://github.com/iftakherhossen" rel="noreferrer" target="_blank">
                            <GitHubIcon sx={{ fontSize: 20 }} />
                        </a>
                    </Box>
                </Box>
            </Box>
            <footer className={styles.footer}>
                <Typography variant="body1">© Iftakher Hossen 2021</Typography>
            </footer>
        </Box>
    );
};

export default Footer;